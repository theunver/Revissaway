# RevissaWay Deployment Guide

## 🚀 Vercel Deployment (Sydney Region)

### Prerequisites
- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Repository pushed to GitHub

---

## 📦 Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - RevissaWay"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/estheway.git
git push -u origin main
```

---

## 🌏 Step 2: Deploy to Vercel (Sydney Region)

### Option A: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"New Project"**
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

5. **Set Region** (IMPORTANT):
   - Go to **Project Settings** → **Functions**
   - Select **Region**: `Sydney (syd1)` or `Singapore (sin1)`
   - This ensures low latency for AU/NZ users

6. Click **"Deploy"**

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (first time)
vercel

# Follow prompts:
# - Link to existing project? No
# - What's your project's name? estheway
# - In which directory is your code located? ./
# - Want to override the settings? No

# Production deployment
vercel --prod
```

---

## ⚙️ Step 3: Configure Environment Variables (Optional)

If you have API keys or secrets:

1. Go to **Project Settings** → **Environment Variables**
2. Add variables:
   ```
   NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXX
   NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXX
   FORMSPREE_FORM_ID=maypkdzz
   ```

---

## 🖼️ Step 4: Image Optimization (Already Configured)

Your project is already configured for automatic image optimization:

✅ **AVIF & WebP** format conversion  
✅ **Responsive images** (multiple sizes)  
✅ **Lazy loading** by default  
✅ **Cache optimization** (60s minimum)  
✅ **Automatic compression**

### How It Works:

Next.js automatically:
- Converts PNG/JPEG → WebP/AVIF
- Generates multiple sizes
- Serves optimal format based on browser support
- Lazy loads images on scroll

---

## 🎯 Step 5: Custom Domain Setup

### Add Your Domain:

1. Go to **Project Settings** → **Domains**
2. Add your domain: `estheway.com`
3. Configure DNS:

**Option A: Vercel Nameservers (Recommended)**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Option B: A Records**
```
A    @    76.76.21.21
AAAA @    2606:4700:4700::1111
```

**Option C: CNAME**
```
CNAME www cname.vercel-dns.com
```

4. Wait for DNS propagation (5-60 minutes)
5. Vercel automatically provisions SSL certificate

---

## 📊 Step 6: Analytics & Monitoring

### Vercel Analytics (Built-in)

1. Go to **Project** → **Analytics**
2. Enable **Web Analytics**
3. Track:
   - Page views
   - Visitors
   - Top pages
   - Countries

### Google Analytics (Already Configured)

Your site already has Google Ads tracking installed:
- Update your tracking ID in `components/Analytics.tsx`
- IDs are automatically injected into every page

---

## 🔧 Configuration Files Explained

### `vercel.json`
```json
{
  "regions": ["syd1"],  // Sydney region for AU/NZ low latency
  "images": {
    "formats": ["image/avif", "image/webp"],
    "minimumCacheTTL": 60
  }
}
```

### `next.config.js`
```js
{
  images: {
    formats: ['image/avif', 'image/webp'],  // Auto conversion
    compress: true,  // Compression enabled
    minimumCacheTTL: 60  // 60 second cache
  }
}
```

---

## 🌐 Alternative: Cloudflare Pages

If you prefer Cloudflare Pages:

### Deploy to Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. **Workers & Pages** → **Create application** → **Pages**
3. Connect GitHub repository
4. Configure build:
   - **Framework**: Next.js
   - **Build command**: `npx @cloudflare/next-on-pages@1`
   - **Build output**: `.vercel/output/static`
   - **Root directory**: `/`

5. Environment variables:
   ```
   NODE_VERSION=18
   ```

6. Deploy!

### Cloudflare Edge Locations (Auto)
- Closest edge to user is automatically selected
- 300+ global locations including Sydney, Melbourne, Auckland

---

## 📈 Performance Optimization

### Image Formats Served:
1. **AVIF** (smallest, best quality) - Modern browsers
2. **WebP** (small, good quality) - Most browsers
3. **JPEG/PNG** (fallback) - Old browsers

### Expected Savings:
- **AVIF**: ~80% smaller than JPEG
- **WebP**: ~30-50% smaller than JPEG

---

## 🧪 Testing Your Deployment

### 1. Test Image Optimization
```bash
# Check image format in DevTools Network tab
# Right-click image → Inspect → Network → img → Headers
# Look for: content-type: image/avif or image/webp
```

### 2. Test Performance
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- Target: 90+ score

### 3. Test from AU/NZ
- Use VPN or ask someone in AU/NZ
- Check response times (should be <100ms)

---

## 🔄 Continuous Deployment

Every push to `main` branch automatically:
1. Builds your site
2. Runs tests
3. Deploys to production
4. Invalidates CDN cache

### Preview Deployments
- Each pull request gets a unique preview URL
- Test changes before merging to main

---

## 📝 Deployment Checklist

Before going live:

- [ ] Replace analytics IDs in `components/Analytics.tsx`
- [ ] Update WhatsApp number (currently: +61 483 898 360)
- [ ] Update email address (currently: contact@mehmetaliunvers.com)
- [ ] Test contact form submission
- [ ] Test all navigation links
- [ ] Check mobile responsiveness
- [ ] Verify SEO meta tags
- [ ] Test image loading on slow 3G
- [ ] Add custom domain
- [ ] Set up SSL certificate (auto via Vercel)
- [ ] Submit sitemap to Google Search Console
- [ ] Test from AU/NZ location

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild locally
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Optimizing
- Check `next.config.js` settings
- Ensure images are in `/public` directory
- Use `next/image` component (not `<img>`)

### Slow Loading in AU/NZ
- Verify region is set to `syd1` in `vercel.json`
- Check Vercel dashboard → Settings → Functions → Region

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Check DNS records with `nslookup estheway.com`
- Verify A records point to Vercel IPs

---

## 📞 Support

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)

---

## 🎉 Post-Deployment

Once deployed:
1. ✅ Submit sitemap to Google: `https://estheway.com/sitemap.xml`
2. ✅ Add to Google Search Console
3. ✅ Set up Google Ads campaigns
4. ✅ Configure Meta Pixel events
5. ✅ Monitor Vercel Analytics
6. ✅ Test WhatsApp button functionality
7. ✅ Share with team for feedback

---

## 🌟 Production URL

Your site will be available at:
- **Vercel subdomain**: `https://estheway.vercel.app`
- **Custom domain**: `https://estheway.com` (after setup)

Happy deploying! 🚀

