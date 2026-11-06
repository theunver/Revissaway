#!/usr/bin/env bash
# Regenerates optimised website media from the ORIGINAL files (originals are never modified).
# Requirements (developer machine only, not used at build/runtime): ffmpeg (libx264, libwebp), python3 + Pillow.
#   Images -> public/media/img/<name>-<width>.webp + lib/media-manifest.json  (scripts/optimize-images.py)
#   Videos -> public/media/video/<name>-720.mp4 + <name>-poster.webp (large screens keep the original 1080p banner)
# Usage: bash scripts/optimize-media.sh            (from the repository root)
set -euo pipefail
cd "$(dirname "$0")/.."
OUT=public/media/video; mkdir -p "$OUT"

enc() { # src out scale crf audio(yes/no)
  local src="$1" out="$2" scale="$3" crf="$4" audio="$5"
  local a=(-an); [ "$audio" = yes ] && a=(-c:a aac -b:a 96k -ac 2)
  ffmpeg -nostdin -loglevel error -y -i "$src" -vf "scale=${scale}:flags=lanczos,format=yuv420p" \
    -c:v libx264 -preset slow -crf "$crf" -profile:v high -movflags +faststart "${a[@]}" "$out"
}
poster() { ffmpeg -nostdin -loglevel error -y -ss 0.5 -i "$1" -frames:v 1 -vf "scale=$2:-2:flags=lanczos" -c:v libwebp -quality 78 "$3"; }

# Full-width banners (muted, no audio track): 720p for small screens (large screens use the original), + poster
# Re-encoding at 1080p gave no size benefit (originals are already efficient), so it is not produced.
for b in lowbannerfirst_optimized aboutbanner; do
  enc "public/videos/$b.mp4" "$OUT/$b-720.mp4" "1280:-2" 27 no
  poster "public/videos/$b.mp4" 1280 "$OUT/$b-poster.webp"
done
# Portrait banner on Why Turkey (no audio): 720 px wide
enc public/videos/002bane_optimized.mp4 "$OUT/002bane_optimized-720.mp4" "720:-2" 27 no
poster public/videos/002bane_optimized.mp4 720 "$OUT/002bane_optimized-poster.webp"
# Portrait clips with controls (keep audio): 720 px wide max, never upscaled. CRF 29 measured SSIM >= 0.984.
for c in dental-collage dental9 dental10 hairreels1 hairreels2 hairreels3 hairreels4 surgery1 surgery2 surgery3 surgery4; do
  enc "public/videos/$c.mp4" "$OUT/$c-720.mp4" "'min(720,iw)':-2" 29 yes
  poster "public/videos/$c.mp4" 480 "$OUT/$c-poster.webp"
done
echo "videos done"
python3 scripts/optimize-images.py
