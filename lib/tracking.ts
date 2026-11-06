// Privacy rules for analytics/advertising tags. Pure functions (no Next.js imports).

/** Medical treatment pages: no Meta Pixel and no GA4 are ever loaded here. */
export const TREATMENT_PATHS = ["/hair-transplant", "/cosmetic-surgery", "/dental-aesthetics"] as const;

export function isTreatmentPath(pathname: string): boolean {
  const p = pathname.replace(/\/+$/, "") || "/";
  return (TREATMENT_PATHS as readonly string[]).some((t) => p === t || p.startsWith(t + "/"));
}

/** Generic page titles sent to GA4 instead of document.title (which names treatments). */
const GENERIC_TITLES: Record<string, string> = {
  "/": "Home",
  "/why-turkey": "Why Turkiye",
  "/about": "About",
  "/privacy-policy": "Privacy Policy",
  "/terms": "Terms of Use",
};

export function genericTitle(pathname: string): string {
  const p = pathname.replace(/\/+$/, "") || "/";
  return GENERIC_TITLES[p] ?? "Other page";
}

const ALLOWED_QUERY = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

/** Page URL for analytics: path is kept only for non-treatment pages; query reduced to utm_* keys; no hash. */
export function sanitizeLocation(href: string): string {
  try {
    const u = new URL(href);
    const path = isTreatmentPath(u.pathname) ? "/treatment" : u.pathname;
    const q = new URLSearchParams();
    for (const k of ALLOWED_QUERY) {
      const v = u.searchParams.get(k);
      if (v) q.set(k, v.slice(0, 100));
    }
    const qs = q.toString();
    return `${u.origin}${path}${qs ? `?${qs}` : ""}`;
  } catch {
    return "";
  }
}

/** Referrer for analytics: origin only (never a path or query, so no internal treatment URLs or search terms). */
export function sanitizeReferrer(referrer: string): string {
  if (!referrer) return "";
  try {
    return new URL(referrer).origin + "/";
  } catch {
    return "";
  }
}

/** Only these GA4 event parameters may be sent; values are truncated strings. */
export function sanitizeEventParams(params: Record<string, unknown> = {}): Record<string, string> {
  const out: Record<string, string> = {};
  for (const key of ["event_category", "event_label"]) {
    const v = params[key];
    if (typeof v === "string") out[key] = v.slice(0, 60);
  }
  return out;
}

export const TRACKING_COOKIE_PATTERNS = [/^_ga($|_)/, /^_gid$/, /^_gat/, /^_fbp$/, /^_fbc$/];
