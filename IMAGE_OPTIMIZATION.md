# Image Optimization Guide

## 📸 Current Status

Your Next.js project is configured for automatic image optimization. However, for best performance, you should:

1. Convert source images to WebP
2. Replace `<img>` tags with `<Image>` component
3. Specify dimensions for all images

---

## 🔄 Converting Images to WebP

### Option 1: Online Tools (Easiest)
- [Squoosh.app](https://squoosh.app/) - Google's image converter
- [CloudConvert](https://cloudconvert.com/) - Batch conversion
- [TinyPNG](https://tinypng.com/) - Also compresses WebP

### Option 2: Using Sharp (Recommended for Batch)

Install sharp:
```bash
npm install --save-dev sharp
```

Create conversion script `scripts/convert-images.js`:
```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images';
const outputDir = './public/images/webp';

// Create output directory
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

// Convert all images
fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath)
      .then(info => console.log(`✅ Converted: ${file} → ${path.basename(outputPath)}`))
      .catch(err => console.error(`❌ Error: ${file}`, err));
  }
});
```

Run:
```bash
node scripts/convert-images.js
```

### Option 3: ImageMagick (Command Line)
```bash
# Install ImageMagick
brew install imagemagick  # macOS
apt-get install imagemagick  # Ubuntu

# Convert single image
convert input.jpg -quality 85 output.webp

# Batch convert
for img in *.jpg; do convert "$img" -quality 85 "${img%.jpg}.webp"; done
```

---

## 🖼️ Using Next.js Image Component

### ❌ Before (Plain HTML)
```jsx
<img 
  src="/images/banner.jpg" 
  alt="Banner"
  className="w-full h-auto"
/>
```

### ✅ After (Next.js Image)
```jsx
import Image from 'next/image';

<Image 
  src="/images/banner.webp" 
  alt="Banner"
  width={1920}
  height={1080}
  className="w-full h-auto"
  priority  // For above-the-fold images
/>
```

---

## 📋 Images to Optimize (Priority Order)

### 1. Hero/Banner Images (HIGH PRIORITY)
- `/public/images/banner2.jpg` (Cosmetic Surgery)
- `/public/images/banner-dental.jpg` (Dental)
- `/public/images/hair-banner.jpg` (Hair Transplant)
- `/public/images/hakkinda-logo.png` (About page)

**Impact**: These are loaded first, biggest impact on performance

### 2. Service Images (MEDIUM PRIORITY)
- `/public/images/services/hair.jpg`
- `/public/images/services/cosmetic.jpg`
- `/public/images/services/dental.jpg`

### 3. Procedure Images (MEDIUM PRIORITY)
All files in `/public/icons/`:
- `rhinoplasty.jpg`
- `Face Lift.jpg`
- `Breast Implants.jpg`
- `Liposuction.jpg`
- etc.

### 4. Gallery Images (LOW PRIORITY)
- `/public/images/1.png`
- `/public/images/2.png`
- `/public/images/3.png`
- `/public/images/4.png`

---

## 🔧 Image Component Best Practices

### 1. Always Specify Dimensions
```jsx
<Image 
  src="/logo.png"
  alt="RevissaWay"
  width={120}
  height={60}
/>
```

### 2. Use `fill` for Responsive Containers
```jsx
<div className="relative w-full h-[400px]">
  <Image 
    src="/banner.webp"
    alt="Banner"
    fill
    className="object-cover"
  />
</div>
```

### 3. Use `priority` for Above-the-Fold
```jsx
<Image 
  src="/hero.webp"
  alt="Hero"
  width={1920}
  height={1080}
  priority  // Loads immediately, no lazy load
/>
```

### 4. Use `loading="lazy"` for Below-the-Fold (default)
```jsx
<Image 
  src="/gallery.webp"
  alt="Gallery"
  width={800}
  height={600}
  loading="lazy"  // This is default, can omit
/>
```

### 5. Use `quality` Prop for Fine-tuning
```jsx
<Image 
  src="/hero.webp"
  alt="Hero"
  width={1920}
  height={1080}
  quality={90}  // Default is 75, higher = larger file
/>
```

---

## 📊 Expected Performance Gains

### Before Optimization:
- Hero image: 2.5 MB (JPEG)
- Service images: 800 KB each
- Total page weight: ~8 MB
- Load time: 5-8 seconds (3G)

### After Optimization:
- Hero image: 250 KB (WebP)
- Service images: 80 KB each
- Total page weight: ~1 MB
- Load time: 1-2 seconds (3G)

**Result**: ~90% reduction in image size! 🎉

---

## 🎯 Quick Wins (Do These First)

### 1. Update Navbar Logo
```jsx
// components/Navbar.tsx
import Image from 'next/image';

<Image 
  src="/logo.png" 
  alt="RevissaWay Logo" 
  width={150}
  height={75}
  className="w-auto object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]"
/>
```

### 2. Update Footer Logo
```jsx
// components/Footer.tsx
// Already using Image component ✅
<Image 
  src="/logo.png" 
  alt="RevissaWay" 
  width={120} 
  height={60} 
  className="mx-auto mb-3" 
/>
```

### 3. Convert Hero Video Background
```jsx
// Keep video as is, but add poster image
<video
  autoPlay
  loop
  muted
  playsInline
  poster="/images/hero-poster.webp"  // Add this
  className="absolute top-0 left-0 w-full h-full object-cover"
>
  <source src="/videos/8955660-uhd_3840_2160_24fps.mp4" type="video/mp4" />
</video>
```

---

## 🧪 Testing Image Optimization

### 1. DevTools Network Tab
- Open DevTools (F12)
- Go to Network tab
- Reload page
- Look for images
- Check:
  - ✅ Format: `image/webp` or `image/avif`
  - ✅ Size: Should be much smaller
  - ✅ Status: 200 (not 404)

### 2. Lighthouse Audit
```bash
# Run locally
npm run build
npm start

# Open Chrome DevTools → Lighthouse
# Run audit → Check "Properly size images" score
```

### 3. PageSpeed Insights
- Go to [pagespeed.web.dev](https://pagespeed.web.dev/)
- Enter your URL
- Check "Serve images in next-gen formats" score

---

## 🚨 Common Issues

### Issue: Images Not Loading
**Solution**: Check file path is correct, starts with `/`

### Issue: Image Blurry
**Solution**: Increase `quality` prop or check source image resolution

### Issue: Layout Shift
**Solution**: Always specify `width` and `height` props

### Issue: Large Bundle Size
**Solution**: Images in `/public` are NOT bundled, they're served as-is

---

## 📦 Automatic Optimization (Vercel)

When deployed to Vercel, images are automatically:
1. ✅ Converted to AVIF (if browser supports)
2. ✅ Converted to WebP (fallback)
3. ✅ Resized to multiple sizes
4. ✅ Compressed
5. ✅ Cached on CDN
6. ✅ Lazy loaded

**No manual work needed on production!**

---

## 🎨 SVG Icons (Already Optimized)

Your SVG icons are already optimal:
- `/public/icons/dhi.svg`
- `/public/icons/fue.svg`
- `/public/icons/sapphire.svg`
- etc.

SVGs are:
- ✅ Vector (scalable)
- ✅ Tiny file size
- ✅ Sharp at any resolution

---

## ✅ Checklist

- [ ] Convert hero/banner images to WebP
- [ ] Update banner images to use `<Image>`
- [ ] Add `width` and `height` to all images
- [ ] Use `priority` for above-the-fold images
- [ ] Test image loading in DevTools
- [ ] Run Lighthouse audit
- [ ] Check PageSpeed Insights score
- [ ] Deploy to Vercel (automatic optimization)
- [ ] Test from slow 3G connection

---

## 🔗 Resources

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)
- [Squoosh.app](https://squoosh.app/)
- [Sharp Documentation](https://sharp.pixelplumbing.com/)

---

**Note**: For local development, image optimization might be slower. On Vercel production, it's blazing fast! 🚀

