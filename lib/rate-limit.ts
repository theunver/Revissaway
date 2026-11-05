// Rate limiting for API routes.
//
// IMPORTANT: The default limiter below is BEST-EFFORT ONLY. On Vercel each
// serverless instance has its own memory, instances are recycled, and requests
// are spread across instances and regions, so an attacker can exceed the limit.
// It is defence-in-depth (it slows a single client hammering one warm instance),
// NOT a production-grade guarantee. A shared store (e.g. Upstash Redis) or a
// platform rule (e.g. Vercel Firewall rate limiting) is required for that, and
// can be plugged in by implementing `RateLimiter` without changing the route.

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
}

export interface RateLimiter {
  check(key: string): Promise<RateLimitResult>;
}

export function createMemoryRateLimiter(limit: number, windowMs: number, maxKeys = 5000): RateLimiter {
  const hits = new Map<string, { count: number; resetAt: number }>();

  return {
    async check(key: string) {
      const now = Date.now();
      let entry = hits.get(key);
      if (!entry || entry.resetAt <= now) {
        if (hits.size >= maxKeys) {
          // Bound memory: drop expired entries, then the oldest if still full.
          hits.forEach((e, k) => {
            if (e.resetAt <= now) hits.delete(k);
          });
          if (hits.size >= maxKeys) {
            const oldest = hits.keys().next().value;
            if (oldest !== undefined) hits.delete(oldest);
          }
        }
        entry = { count: 0, resetAt: now + windowMs };
        hits.set(key, entry);
      }
      entry.count += 1;
      return {
        allowed: entry.count <= limit,
        remaining: Math.max(0, limit - entry.count),
        retryAfterSeconds: Math.max(1, Math.ceil((entry.resetAt - now) / 1000)),
      };
    },
  };
}

/** Client IP as reported by Vercel's edge (x-forwarded-for is set by the platform). */
export function clientKey(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return headers.get("x-real-ip")?.trim() || "unknown";
}
