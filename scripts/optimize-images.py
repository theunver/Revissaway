"""Generate responsive WebP versions of every raster image referenced by the site.

Originals in public/images and public/icons are never modified. Output:
  public/media/img/<slug>-<width>.webp   (widths never exceed the original width)
  lib/media-manifest.json                (original path -> intrinsic size + srcset)
Run from the repository root: python3 scripts/optimize-images.py   (requires Pillow)
"""
import json
import os
import re
from urllib.parse import unquote

from PIL import Image, ImageOps

Image.MAX_IMAGE_PIXELS = None  # sources are trusted local files up to ~70 MP
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WIDTHS = [480, 768, 1080, 1600, 2400]
QUALITY = 80
OUT_DIR = os.path.join(ROOT, "public", "media", "img")
MANIFEST = os.path.join(ROOT, "lib", "media-manifest.json")
REF_RE = re.compile(r"""["'(](/(?:images|icons)/[^"')]+?\.(?:jpe?g|png))["')]""", re.I)


def referenced_images():
    refs = set()
    for base in ("app", "components"):
        for dirpath, _, files in os.walk(os.path.join(ROOT, base)):
            for f in files:
                if f.endswith((".tsx", ".ts", ".css")):
                    with open(os.path.join(dirpath, f), encoding="utf8") as fh:
                        refs.update(unquote(m) for m in REF_RE.findall(fh.read()))
    return sorted(refs)


def slug(path):
    return re.sub(r"[^a-z0-9]+", "-", os.path.splitext(path.strip("/"))[0].lower()).strip("-")


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    manifest = {}
    for ref in referenced_images():
        src = os.path.join(ROOT, "public", ref.lstrip("/"))
        if not os.path.exists(src):
            print("missing", ref)
            continue
        with Image.open(src) as im:
            im = ImageOps.exif_transpose(im)
            im = im.convert("RGBA" if im.mode in ("RGBA", "LA", "P") else "RGB")
            w, h = im.size
            widths = [x for x in WIDTHS if x < w] + [min(w, WIDTHS[-1])]
            srcset = []
            for tw in sorted(set(widths)):
                th = round(h * tw / w)
                name = f"{slug(ref)}-{tw}.webp"
                im.resize((tw, th), Image.LANCZOS).save(os.path.join(OUT_DIR, name), "WEBP", quality=QUALITY, method=6)
                srcset.append([tw, f"/media/img/{name}"])
            manifest[ref] = {"width": w, "height": h, "srcset": srcset}
            print(f"{ref}: {w}x{h} -> {', '.join(str(s[0]) for s in srcset)}")
    with open(MANIFEST, "w", encoding="utf8") as fh:
        json.dump(manifest, fh, indent=1, ensure_ascii=False)
        fh.write("\n")


if __name__ == "__main__":
    main()
