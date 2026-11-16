import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

// lastModified/changeFrequency/priority omitted on purpose: Google ignores changefreq/priority and only uses lastmod
// when it is consistently accurate (it was "build time" before).
const PATHS = ['', '/hair-transplant', '/cosmetic-surgery', '/dental-aesthetics', '/why-turkey', '/about', '/consultation', '/privacy-policy', '/terms']

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({ url: `${SITE_URL}${path}` }))
}
