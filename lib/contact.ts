// Pure helpers for the contact/consultation API: validation, escaping and email rendering.
// Kept free of Next.js imports so they can be unit-tested in isolation.
import privacyRelease from "@/privacy-release.json";

/** Privacy Policy version the contact-form consent refers to (single source: privacy-release.json). */
export const CONSENT_VERSION: string = privacyRelease.policyVersion;

export const MAX_BODY_BYTES = 16 * 1024;

export const ALLOWED_SERVICES = [
  "Hair Transplant",
  "Esthetic Surgery Applications",
  "Dental Aesthetics",
] as const;

const LIMITS = {
  name: 160,
  firstName: 80,
  lastName: 80,
  email: 254,
  phone: 32,
  message: 5000,
  service: 80,
  preferredDate: 40,
  formType: 60,
  website: 200,
} as const;

type Field = keyof typeof LIMITS;

export interface ContactSubmission {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  service: string;
  preferredDate: string;
  consentVersion: string;
}

export type ValidationResult =
  | { ok: true; data: ContactSubmission; isSpam: boolean }
  | { ok: false; fields: string[] };

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]{2,}$/;
const PHONE_RE = /^[+0-9()\-.\s]{6,32}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2})?)?$/;
// Control characters except tab/newline/carriage return (kept only in the message field).
const CONTROL_RE = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const LINEBREAK_RE = /[\r\n\t]+/g;

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function clean(value: string, multiline: boolean): string {
  const stripped = value.replace(CONTROL_RE, "");
  return (multiline ? stripped : stripped.replace(LINEBREAK_RE, " ")).trim();
}

export function validateContactPayload(input: unknown): ValidationResult {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    return { ok: false, fields: ["body"] };
  }
  const raw = input as Record<string, unknown>;
  const bad: string[] = [];
  const v: Partial<Record<Field, string>> = {};

  for (const key of Object.keys(LIMITS) as Field[]) {
    const value = raw[key];
    if (value === undefined || value === null) continue;
    if (typeof value !== "string") {
      bad.push(key);
      continue;
    }
    const cleaned = clean(value, key === "message");
    if (cleaned.length > LIMITS[key]) {
      bad.push(key);
      continue;
    }
    v[key] = cleaned;
  }

  const fullName = (v.name || `${v.firstName ?? ""} ${v.lastName ?? ""}`).trim();
  if (!fullName) bad.push("name");

  const email = v.email ?? "";
  if (!EMAIL_RE.test(email)) bad.push("email");

  const phone = v.phone ?? "";
  if (phone && (!PHONE_RE.test(phone) || (phone.match(/\d/g) || []).length < 6)) bad.push("phone");

  const service = v.service ?? "";
  if (service && !(ALLOWED_SERVICES as readonly string[]).includes(service)) bad.push("service");

  const preferredDate = v.preferredDate ?? "";
  if (preferredDate && !DATE_RE.test(preferredDate)) bad.push("preferredDate");

  // Explicit consent (incl. health information) must be given for the current Privacy Policy version.
  if (raw.consent !== true || raw.consentVersion !== CONSENT_VERSION) bad.push("consent");

  if (bad.length) return { ok: false, fields: [...new Set(bad)] };

  return {
    ok: true,
    // Honeypot: a hidden field real users never fill in.
    isSpam: Boolean(v.website),
    data: { fullName, email, phone, message: v.message ?? "", service, preferredDate, consentVersion: CONSENT_VERSION },
  };
}

export function buildContactEmailHtml(d: ContactSubmission, now: Date = new Date()): string {
  const e = (s: string, fallback: string) => (s ? escapeHtml(s) : fallback);
  const message = d.message ? escapeHtml(d.message).replace(/\r?\n/g, "<br>") : "No message provided";
  const time = escapeHtml(now.toLocaleString("en-AU", { timeZone: "Australia/Sydney" }));

  return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f5f0; border-radius: 10px;">
          <div style="background-color: #9B7E3E; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="color: white; margin: 0;">New Inquiry from RevissaWay Website</h2>
          </div>

          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
              You have received a new consultation request:
            </p>

            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px 0; color: #9B7E3E; font-weight: bold; width: 40%;">Name:</td>
                <td style="padding: 12px 0; color: #333;">${e(d.fullName, "Not provided")}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px 0; color: #9B7E3E; font-weight: bold;">Email:</td>
                <td style="padding: 12px 0; color: #333;">${e(d.email, "Not provided")}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px 0; color: #9B7E3E; font-weight: bold;">Phone:</td>
                <td style="padding: 12px 0; color: #333;">${e(d.phone, "Not provided")}</td>
              </tr>
              ${d.service ? `
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px 0; color: #9B7E3E; font-weight: bold;">Service:</td>
                <td style="padding: 12px 0; color: #333;">${escapeHtml(d.service)}</td>
              </tr>
              ` : ''}
              ${d.preferredDate ? `
              <tr style="border-bottom: 1px solid #e0e0e0;">
                <td style="padding: 12px 0; color: #9B7E3E; font-weight: bold;">Preferred Date:</td>
                <td style="padding: 12px 0; color: #333;">${escapeHtml(d.preferredDate)}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 12px 0; color: #9B7E3E; font-weight: bold; vertical-align: top;">Message:</td>
                <td style="padding: 12px 0; color: #333;">${message}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #9B7E3E; font-weight: bold; vertical-align: top;">Consent:</td>
                <td style="padding: 12px 0; color: #333;">Given in the website form (Privacy Policy version ${escapeHtml(d.consentVersion)})</td>
              </tr>
            </table>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #9B7E3E;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                Sent from RevissaWay Contact Form<br>
                Time: ${time}
              </p>
            </div>
          </div>
        </div>
      `;
}

const PRODUCTION_ORIGINS = ["https://www.revissaway.com.au", "https://revissaway.com.au"];

/**
 * Accept only same-origin browser requests (or the production domains).
 * Browsers always send Origin on cross-origin and same-origin POST fetches.
 */
export function isAllowedOrigin(origin: string | null, requestHost: string | null, secFetchSite: string | null): boolean {
  if (!origin) return false;
  if (PRODUCTION_ORIGINS.includes(origin)) return true;
  if (secFetchSite && secFetchSite !== "same-origin") return false;
  try {
    return !!requestHost && new URL(origin).host === requestHost;
  } catch {
    return false;
  }
}
