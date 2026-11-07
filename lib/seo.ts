import type { Metadata } from "next";

// Shared, factual SEO defaults. Primary market: English-language search in Australia.
// The site has ONE indexable (English, server-rendered) version per URL; Turkish is a client-side
// language switch on the same URL, so no hreflang/alternate-language annotations are emitted.
export const SITE_URL = "https://www.revissaway.com.au";
export const SITE_NAME = "RevissaWay";

// logo.png is 938x938 (square) – declared with its real size. A dedicated 1200x630 share image
// can replace it later (design asset, separate approval).
const OG_IMAGE = { url: "/logo.png", width: 938, height: 938, alt: "RevissaWay" };

/** Page metadata with self-referencing canonical and matching Open Graph / Twitter tags. */
export function pageMetadata({ path, title, description }: { path: string; title: string; description: string }): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_AU",
      siteName: SITE_NAME,
      url,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
