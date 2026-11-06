import type { CSSProperties } from "react";
import manifest from "@/lib/media-manifest.json";

// Serves pre-generated, responsive WebP versions of an original image (see scripts/optimize-images.py).
// No runtime image transformation is involved; the original file stays untouched and is used as a
// fallback when an image is not in the manifest.
type Entry = { width: number; height: number; srcset: [number, string][] };
const MEDIA = manifest as unknown as Record<string, Entry>;

interface Props {
  src: string;
  alt: string;
  /** CSS `sizes` hint, e.g. "(min-width: 768px) 50vw, 100vw". */
  sizes?: string;
  /** Above-the-fold / LCP image: loaded eagerly with high priority. */
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
}

export default function ResponsiveImage({ src, alt, sizes = "100vw", priority = false, className, style }: Props) {
  const entry = MEDIA[src];
  const loading = priority ? "eager" : "lazy";
  if (!entry) {
    return <img src={src} alt={alt} loading={loading} decoding="async" className={className} style={style} />;
  }
  const fallback = (entry.srcset.find(([w]) => w >= 1080) ?? entry.srcset[entry.srcset.length - 1])[1];
  return (
    <img
      src={fallback}
      srcSet={entry.srcset.map(([w, url]) => `${url} ${w}w`).join(", ")}
      sizes={sizes}
      width={entry.width}
      height={entry.height}
      alt={alt}
      loading={loading}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={className}
      style={style}
    />
  );
}
