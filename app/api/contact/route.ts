import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  MAX_BODY_BYTES,
  buildContactEmailHtml,
  isAllowedOrigin,
  parseEmailList,
  resolveContactRecipient,
  validateContactPayload,
} from "@/lib/contact";
import { clientKey, createMemoryRateLimiter } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Best-effort only on serverless (see lib/rate-limit.ts): 5 submissions / 10 min per IP per instance.
const limiter = createMemoryRateLimiter(5, 10 * 60 * 1000);

type ErrorCode =
  | "invalid_origin"
  | "unsupported_media_type"
  | "payload_too_large"
  | "invalid_json"
  | "invalid_fields"
  | "rate_limited"
  | "preview_submissions_disabled"
  | "server_error";

function reply(status: number, body: Record<string, unknown>, extraHeaders: Record<string, string> = {}) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...extraHeaders },
  });
}

const fail = (status: number, error: ErrorCode, extra: Record<string, unknown> = {}, headers?: Record<string, string>) =>
  reply(status, { success: false, error, ...extra }, headers);

async function readBodyWithLimit(req: NextRequest, maxBytes: number): Promise<string | null> {
  if (!req.body) return "";
  const reader = req.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > maxBytes) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  return Buffer.concat(chunks).toString("utf8");
}

export async function POST(req: NextRequest) {
  // 1. Same-origin browser requests only (blocks cross-site form/CSRF-style spam).
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
  if (!isAllowedOrigin(req.headers.get("origin"), host, req.headers.get("sec-fetch-site"))) {
    return fail(403, "invalid_origin");
  }

  // 2. JSON only.
  const contentType = req.headers.get("content-type") || "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return fail(415, "unsupported_media_type");
  }

  // 3. Size limit (header check, then enforced while reading).
  const declaredLength = Number(req.headers.get("content-length") || 0);
  if (declaredLength > MAX_BODY_BYTES) return fail(413, "payload_too_large");
  const rawBody = await readBodyWithLimit(req, MAX_BODY_BYTES);
  if (rawBody === null) return fail(413, "payload_too_large");

  // 4. Rate limit (best-effort per instance).
  const rate = await limiter.check(clientKey(req.headers));
  if (!rate.allowed) {
    return fail(429, "rate_limited", {}, { "Retry-After": String(rate.retryAfterSeconds) });
  }

  // 5. Parse + validate.
  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return fail(400, "invalid_json");
  }
  const result = validateContactPayload(payload);
  if (!result.ok) return fail(400, "invalid_fields", { fields: result.fields });

  // 5b. Non-production deployments (Vercel Preview/Development) never accept real enquiries:
  // only addresses listed in PREVIEW_TEST_EMAILS are delivered, for testing (exact address match;
  // separators/quotes/case are normalised so a correctly intended value is not rejected by formatting).
  const vercelEnv = process.env.VERCEL_ENV;
  const isNonProduction = !!vercelEnv && vercelEnv !== "production";
  if (isNonProduction) {
    const allowed = parseEmailList(process.env.PREVIEW_TEST_EMAILS);
    if (!allowed.includes(result.data.email.toLowerCase())) {
      // Diagnostic without addresses: tells whether the allowlist is configured at all on this deployment.
      console.warn(`[contact] preview submission refused (allowlist entries: ${allowed.length})`);
      return fail(403, "preview_submissions_disabled");
    }
  }

  // 6. Honeypot: pretend success so bots get no signal, but send nothing.
  if (result.isSpam) {
    console.warn("[contact] honeypot triggered; submission discarded");
    return reply(200, { success: true });
  }

  // Recipient: CONTACT_TO or the default business mailbox. A set-but-invalid CONTACT_TO is a configuration
  // error: fail loudly (error + WhatsApp/phone on the form) instead of mailing a different address.
  const to = resolveContactRecipient(process.env.CONTACT_TO);
  if (!to) {
    console.error("[contact] CONTACT_TO is set but is not a valid email address");
    return fail(500, "server_error");
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;
  if (!user || !pass) {
    console.error("[contact] email transport is not configured (GMAIL_USER/GMAIL_PASS missing)");
    return fail(500, "server_error");
  }

  try {
    // Gmail SMTP (unchanged provider).
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const info = await transporter.sendMail({
      // From stays the authenticated business sender; replies go to the validated enquirer address.
      from: `"RevissaWay Website" <${user}>`,
      to,
      replyTo: result.data.email,
      subject: `${isNonProduction ? "[PREVIEW TEST] " : ""}New Consultation / Contact Form Submission - RevissaWay`,
      html: buildContactEmailHtml(result.data),
    });

    // Success only when the SMTP server accepted the recipient. This confirms hand-off to Gmail,
    // not arrival in the inbox (bounces arrive later in the GMAIL_USER mailbox).
    const accepted = Array.isArray(info.accepted) ? info.accepted.length : 0;
    const rejected = Array.isArray(info.rejected) ? info.rejected.length : 0;
    console.info(`[contact] smtp result: accepted=${accepted} rejected=${rejected} sameMailbox=${to.toLowerCase() === user.toLowerCase()}`);
    if (accepted === 0 || rejected > 0) return fail(500, "server_error");
    return reply(200, { success: true });
  } catch (error: unknown) {
    // Log only a non-identifying error code; never the submission or credentials.
    const code = (error as { code?: string; name?: string })?.code || (error as Error)?.name || "unknown";
    console.error("[contact] email send failed:", code);
    return fail(500, "server_error");
  }
}
