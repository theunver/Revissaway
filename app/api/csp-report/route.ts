import { NextRequest, NextResponse } from "next/server";
import { clientKey, createMemoryRateLimiter } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Receives Content-Security-Policy-Report-Only violation reports so the policy
// can be tuned before enforcement. Logs only the directive, the blocked origin
// and the page path - no query strings, cookies, IPs or form data.
const MAX_BYTES = 8 * 1024;
const limiter = createMemoryRateLimiter(30, 60 * 1000); // best-effort, per instance

function originOnly(value: unknown): string {
  if (typeof value !== "string" || !value) return "";
  if (!value.includes("://")) return value.slice(0, 40); // e.g. "inline", "eval", "data"
  try {
    return new URL(value).origin;
  } catch {
    return "invalid";
  }
}

function pathOnly(value: unknown): string {
  if (typeof value !== "string") return "";
  try {
    return new URL(value).pathname.slice(0, 120);
  } catch {
    return "";
  }
}

export async function POST(req: NextRequest) {
  const empty = new NextResponse(null, { status: 204 });
  const type = (req.headers.get("content-type") || "").toLowerCase();
  if (!type.includes("csp-report") && !type.includes("reports+json") && !type.includes("application/json")) {
    return empty;
  }
  if (Number(req.headers.get("content-length") || 0) > MAX_BYTES) return empty;
  if (!(await limiter.check(clientKey(req.headers))).allowed) return empty;

  try {
    const text = await req.text();
    if (text.length > MAX_BYTES) return empty;
    const parsed = JSON.parse(text);
    const reports = Array.isArray(parsed) ? parsed.map((r) => r?.body) : [parsed?.["csp-report"]];
    for (const r of reports.slice(0, 10)) {
      if (!r) continue;
      console.warn(
        "[csp-report-only]",
        JSON.stringify({
          directive: String(r["effective-directive"] || r.effectiveDirective || r["violated-directive"] || "").slice(0, 60),
          blocked: originOnly(r["blocked-uri"] ?? r.blockedURL),
          page: pathOnly(r["document-uri"] ?? r.documentURL),
        })
      );
    }
  } catch {
    // Ignore malformed reports.
  }
  return empty;
}
