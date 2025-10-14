# Google Search Console & Analytics Setup Guide

## 🎯 Complete Setup for RevissaWay

This guide covers:
1. ✅ Google Search Console setup
2. ✅ Domain verification via DNS (GoDaddy/Cloudflare)
3. ✅ Google Analytics 4 (GA4) setup
4. ✅ Linking GSC to GA4
5. ✅ Submitting sitemap

---

## 📊 Part 1: Google Analytics 4 (GA4) Setup

### Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **"Admin"** (gear icon, bottom left)
3. Click **"Create Property"**

**Property Details:**
- Property name: `RevissaWay`
- Reporting time zone: `(GMT+11:00) Sydney`
- Currency: `Australian Dollar (AUD)`

4. Click **"Next"**

**Business Details:**
- Industry: `Health & Fitness`
- Business size: `Small` (1-10 employees)
- How you plan to use Analytics: Select all that apply
  - ☑ Measure advertising effectiveness
  - ☑ Get to know my customers
  - ☑ Analyze user behavior

5. Click **"Create"**
6. Accept Terms of Service
7. Click **"Create"** again

### Step 2: Set Up Data Stream

1. Choose platform: **Web**
2. Enter details:
   - Website URL: `https://estheway.com`
   - Stream name: `RevissaWay Website`
   - ☑ Enable enhanced measurement (recommended)

3. Click **"Create stream"**

**Enhanced Measurement Automatically Tracks:**
- ✅ Page views
- ✅ Scrolls (90%)
- ✅ Outbound clicks
- ✅ Site search
- ✅ Video engagement
- ✅ File downloads

### Step 3: Get Your Measurement ID

After creating the stream, you'll see:
```
Measurement ID: G-XXXXXXXXXX
```

**Copy this ID!** You'll need it for your website.

### Step 4: Add GA4 to Your Website

Open `components/Analytics.tsx` and update:

```typescript
// Replace this line:
const GOOGLE_ADS_ID = "AW-XXXXXXX";

// With your GA4 Measurement ID:
const GA4_MEASUREMENT_ID = "G-XXXXXXXXXX";
```

Then update the script:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA4_MEASUREMENT_ID}');
  `}
</Script>
```

### Step 5: Test GA4 Installation

1. Deploy your changes or test locally
2. Go to GA4 → **Reports** → **Realtime**
3. Visit your website
4. You should see your visit in real-time!

**Note**: Data takes 24-48 hours to fully populate in reports.

---

## 🔍 Part 2: Google Search Console Setup

### Step 1: Access Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click **"Add Property"**

### Step 2: Choose Property Type

You'll see two options:

**Option A: Domain Property (Recommended)**
- Verifies all URLs (http, https, www, subdomains)
- Requires DNS verification
- Best for long-term use

**Option B: URL Prefix**
- Verifies specific URL only
- Multiple verification methods
- Good for quick setup

**We'll use Domain Property (Option A)**

---

## 🌐 Part 3: DNS Verification

### Method A: Cloudflare DNS Verification

#### Step 1: Get TXT Record from Google

1. In Google Search Console, enter your domain:
   ```
   estheway.com
   ```
   (without https:// or www)

2. Click **"Continue"**

3. You'll see a TXT record like:
   ```
   google-site-verification=abc123xyz456...
   ```

4. **Copy this value**

#### Step 2: Add TXT Record in Cloudflare

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Select your domain: `estheway.com`
3. Go to **DNS** → **Records**
4. Click **"Add record"**

**Record Details:**
- Type: `TXT`
- Name: `@` (or leave blank)
- Content: `google-site-verification=abc123xyz456...` (paste from step 1)
- TTL: `Auto` or `3600`
- Proxy status: `DNS only` (gray cloud)

5. Click **"Save"**

#### Step 3: Verify in Google Search Console

1. Go back to Google Search Console
2. Click **"Verify"**
3. Wait 10-60 seconds for DNS propagation
4. If verified: ✅ Success!
5. If failed: Wait a few minutes and try again

**Note**: DNS changes can take up to 24 hours, but usually verify within minutes.

---

### Method B: GoDaddy DNS Verification

#### Step 1: Get TXT Record from Google

(Same as Cloudflare Step 1 above)

#### Step 2: Add TXT Record in GoDaddy

1. Go to [GoDaddy DNS Management](https://dcc.godaddy.com/manage/dns)
2. Find your domain: `estheway.com`
3. Click **"DNS"** or **"Manage DNS"**
4. Scroll to **"Records"** section
5. Click **"Add"** or **"Add New Record"**

**Record Details:**
- Type: `TXT`
- Name: `@`
- Value: `google-site-verification=abc123xyz456...` (paste from Google)
- TTL: `1 Hour` (default)

6. Click **"Save"**

**GoDaddy Note**: Changes can take 1-48 hours to propagate.

#### Step 3: Verify in Google Search Console

1. Wait 5-10 minutes for DNS to update
2. Go back to Google Search Console
3. Click **"Verify"**
4. If failed, wait longer and try again

---

## 🔗 Part 4: Link Google Search Console to GA4

### Step 1: Link from Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property: `estheway.com`
3. Click **Settings** (gear icon, left sidebar)
4. Scroll to **"Associations"**
5. Click **"Associate"** next to Google Analytics

**Or:**

### Step 2: Link from Google Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Admin** (bottom left)
3. In **Property** column, click **"Product Links"**
4. Click **"Search Console Links"**
5. Click **"Link"**
6. Select your Search Console property: `estheway.com`
7. Select your Web Stream: `RevissaWay Website`
8. Click **"Next"**
9. Review and click **"Submit"**

**Benefits of Linking:**
- ✅ See search queries in GA4
- ✅ Track organic traffic performance
- ✅ Unified reporting
- ✅ Better insights

---

## 📄 Part 5: Submit Sitemap to Google

### Step 1: Verify Sitemap Exists

Your sitemap is located at:
```
https://estheway.com/sitemap.xml
```

Test it:
1. Visit the URL in your browser
2. You should see XML with all your pages

### Step 2: Submit to Search Console

1. In Google Search Console, select your property
2. Go to **Sitemaps** (left sidebar)
3. Under **"Add a new sitemap"**, enter:
   ```
   sitemap.xml
   ```
4. Click **"Submit"**

**You should see:**
- Status: `Success`
- Type: `Sitemap`
- Last read: `[current date]`

### Step 3: Check Sitemap Status

Wait 24-48 hours, then check:
- **Discovered URLs**: Should show all your pages
- **Coverage**: Should show indexed pages
- **Errors**: Should be 0

---

## 📊 Part 6: Set Up Enhanced Tracking

### Track Form Submissions in GA4

Update your form submission handler:

```typescript
// In app/page.tsx - handleSubmit function

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFormStatus("submitting");

  try {
    const response = await fetch("https://formspree.io/f/maypkdzz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        formType: "Consultation Request",
      }),
    });

    if (response.ok) {
      setFormStatus("success");
      
      // Track form submission in GA4
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: 'Consultation Form',
          value: 1
        });
      }

      // Rest of your code...
    }
  } catch (error) {
    // Error handling...
  }
};
```

### Track WhatsApp Clicks

```typescript
// In your WhatsApp button/link
<a
  href="https://wa.me/61483898360"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'contact', {
        event_category: 'engagement',
        event_label: 'WhatsApp Click',
        value: 1
      });
    }
  }}
  className="..."
>
  Book Free Consultation on WhatsApp
</a>
```

### Track Service Page Views

Add to each service page:

```typescript
// In hair-transplant/page.tsx, cosmetic-surgery/page.tsx, etc.

useEffect(() => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: 'Hair Transplant',
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  }
}, []);
```

---

## ✅ Verification Checklist

### Google Search Console
- [ ] Domain property added
- [ ] DNS TXT record added (Cloudflare/GoDaddy)
- [ ] Domain verified (green checkmark)
- [ ] Sitemap submitted
- [ ] Sitemap showing pages

### Google Analytics 4
- [ ] Property created
- [ ] Data stream set up
- [ ] Measurement ID copied
- [ ] Code added to website
- [ ] Real-time data showing

### Integration
- [ ] GSC linked to GA4
- [ ] Search queries visible in GA4
- [ ] Enhanced tracking configured
- [ ] Form submissions tracked
- [ ] WhatsApp clicks tracked

---

## 📈 What to Monitor (First Week)

### In Google Search Console:
1. **Performance** → Queries
   - What people search for
   - Click-through rates
   - Average position

2. **Coverage** → Indexed pages
   - How many pages Google found
   - Any errors or warnings

3. **Enhancements**
   - Mobile usability
   - Core Web Vitals

### In Google Analytics 4:
1. **Reports** → Realtime
   - Current visitors
   - Active pages

2. **Reports** → Acquisition → Traffic acquisition
   - Where visitors come from
   - Organic vs. paid traffic

3. **Reports** → Engagement → Events
   - Form submissions
   - WhatsApp clicks
   - Page scrolls

---

## 🔧 Troubleshooting

### Issue: "Verification Failed" in Search Console

**Solutions:**
1. Wait longer (DNS can take 24-48 hours)
2. Check TXT record in DNS:
   ```bash
   nslookup -type=TXT estheway.com
   ```
3. Make sure record is exact match (no extra spaces)
4. Try verification method again
5. If using Cloudflare, ensure Proxy is OFF (gray cloud)

### Issue: "No Data" in Google Analytics

**Solutions:**
1. Wait 24-48 hours for data to populate
2. Check Realtime report (instant data)
3. Verify Measurement ID is correct
4. Check browser console for errors
5. Disable ad blockers
6. Test with different browser

### Issue: "Sitemap Couldn't Be Read"

**Solutions:**
1. Verify sitemap URL works: `https://estheway.com/sitemap.xml`
2. Check robots.txt allows sitemap
3. Make sure sitemap is valid XML
4. Wait and try submitting again
5. Check Vercel deployment succeeded

### Issue: GSC and GA4 Not Linking

**Solutions:**
1. Make sure same Google account owns both
2. Try linking from GA4 side (not GSC)
3. Wait 24 hours and try again
4. Check property permissions
5. Use domain property (not URL prefix)

---

## 📊 Expected Timeline

| Time | What to Expect |
|------|----------------|
| **Immediately** | Realtime data in GA4 |
| **24 hours** | First page views in GA4 reports |
| **2-3 days** | Search Console starts showing data |
| **1 week** | Full search queries and clicks appear |
| **2 weeks** | Ranking data stabilizes |
| **1 month** | Comprehensive performance insights |

---

## 🎯 Key Metrics to Track

### Google Search Console:
- **Total Clicks**: How many people click your site in search
- **Total Impressions**: How often your site appears in search
- **Average CTR**: Click-through rate (aim for 3-5%)
- **Average Position**: Your ranking (aim for top 10)

### Google Analytics:
- **Users**: Unique visitors
- **Sessions**: Total visits
- **Bounce Rate**: People who leave immediately (aim for <60%)
- **Session Duration**: Time on site (aim for 2+ minutes)
- **Conversions**: Form submissions, WhatsApp clicks

---

## 🔐 Security & Access

### Share Access (Optional)

To give team members access:

**Google Analytics:**
1. Admin → Property → Property Access Management
2. Click "+" (Add users)
3. Enter email, select role (Viewer, Analyst, Editor, Admin)

**Google Search Console:**
1. Settings → Users and permissions
2. Add user
3. Enter email, select permission (Full, Restricted)

---

## 📚 Additional Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/10089681)
- [DNS Verification Guide](https://support.google.com/webmasters/answer/9008080)
- [Sitemap Best Practices](https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap)

---

## 🎉 You're All Set!

Once completed, you'll have:
- ✅ Full search performance visibility
- ✅ User behavior tracking
- ✅ Conversion monitoring
- ✅ Unified reporting
- ✅ SEO insights

**Next Steps:**
1. Monitor data daily for first week
2. Optimize pages with low CTR
3. Improve ranking for target keywords
4. A/B test headlines and CTAs
5. Track conversion rates

---

**Last Updated:** Ready for deployment  
**Support:** Refer to official Google documentation for detailed troubleshooting

