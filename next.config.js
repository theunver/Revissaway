/** @type {import('next').NextConfig} */

// Coordinated privacy release gate: draft consent/privacy wording must never reach production.
const privacyRelease = require('./privacy-release.json');
if (process.env.VERCEL_ENV === 'production' && privacyRelease.approved !== true) {
  throw new Error(
    'Privacy release not approved (privacy-release.json). Draft consent banner, contact-form consent, ' +
      'Privacy Policy and Terms of Use must not be deployed to production. Preview deployments are allowed.'
  );
}

// Content-Security-Policy is deployed in REPORT-ONLY mode first: browsers log
// and report violations to /api/csp-report but block nothing. Review reports,
// then switch the header name to "Content-Security-Policy" to enforce.
// 'unsafe-inline' is required for Next.js 14 inline bootstrap scripts and the
// GA4/Meta Pixel snippets until nonces are introduced.
const cspReportOnly = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "img-src 'self' data: blob: https://www.facebook.com https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://i.ytimg.com",
  "media-src 'self'",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://www.facebook.com https://connect.facebook.net",
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "report-uri /api/csp-report",
].join('; ');

const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Only disables powerful features the site never uses; video/YouTube features are left untouched.
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()' },
  { key: 'Content-Security-Policy-Report-Only', value: cspReportOnly },
];

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    // Next.js 16 only allows quality 75 by default; /about uses quality={90}.
    qualities: [75, 90],
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    // Strip debug logging in production but keep console.error/warn so server-side
    // security events (contact API failures, CSP reports) reach the Vercel logs.
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  // Pin the Turbopack workspace root to this project so a stray lockfile in a
  // parent directory (e.g. the user's home folder) is never picked up.
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      // The standalone /consultation page duplicated the homepage enquiry form
      // (and posted to a separate third-party processor). Consolidated into /#contact.
      { source: '/consultation', destination: '/#contact', permanent: true },
    ];
  },
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      // Keep Vercel Preview/Development deployments out of search engines.
      ...(process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production'
        ? [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }]
        : []),
      { source: '/api/:path*', headers: [{ key: 'Cache-Control', value: 'no-store' }] },
      // Treatment pages: links/navigation from them disclose only the origin, never the treatment URL.
      ...['/hair-transplant', '/cosmetic-surgery', '/dental-aesthetics'].map((source) => ({
        source,
        headers: [{ key: 'Referrer-Policy', value: 'strict-origin' }],
      })),
    ];
  },
}

module.exports = nextConfig
