# Analytics Setup Guide

## 📊 Tracking Codes Installed

Your RevissaWay website now has **Google Ads** and **Meta Pixel** tracking codes installed globally.

---

## 🔧 How to Add Your Tracking IDs

Open `components/Analytics.tsx` and replace the placeholder IDs:

```typescript
const GOOGLE_ADS_ID = "AW-XXXXXXX"; // Replace with your Google Ads ID
const META_PIXEL_ID = "XXXXXXXXXXXXXXX"; // Replace with your Meta Pixel ID
```

### Where to Find Your IDs:

**Google Ads:**
1. Go to [Google Ads](https://ads.google.com/)
2. Tools & Settings → Measurement → Conversions
3. Your ID will look like: `AW-123456789`

**Meta Pixel:**
1. Go to [Meta Events Manager](https://business.facebook.com/events_manager)
2. Select your Pixel
3. Your ID will be a 15-16 digit number

---

## 📈 Conversion Tracking (Optional)

### Google Ads Conversion Tracking

Add this function to track form submissions or button clicks:

```javascript
// In your form submit handler or button click:
gtag('event', 'conversion', {
  'send_to': 'AW-XXXXXXX/CONVERSION_LABEL',
  'value': 1.0,
  'currency': 'AUD'
});
```

**Example for Contact Form:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Your form submission logic...
  
  // Track conversion
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-XXXXXXX/your_conversion_label',
      'value': 1.0,
      'currency': 'AUD'
    });
  }
};
```

### Meta Pixel Event Tracking

Track specific actions like consultation bookings:

```javascript
// Track consultation form submission
fbq('track', 'Lead');

// Track when user clicks WhatsApp button
fbq('track', 'Contact');

// Track when user views a service page
fbq('track', 'ViewContent', {
  content_name: 'Hair Transplant',
  content_category: 'Services'
});
```

**Example for WhatsApp Button:**
```typescript
<a 
  href="https://wa.me/61483898360"
  onClick={() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact');
    }
  }}
>
  WhatsApp Us
</a>
```

---

## 🎯 Recommended Events to Track

### 1. **Form Submissions** (Contact, Consultation)
- Google: `conversion` or `generate_lead`
- Meta: `Lead`

### 2. **WhatsApp Clicks**
- Google: `click_to_call` or custom event
- Meta: `Contact`

### 3. **Service Page Views**
- Google: `page_view` (automatic)
- Meta: `ViewContent`

### 4. **Scroll Depth** (Advanced)
- Track when users scroll 50%, 75%, 100%

---

## ✅ Testing Your Setup

### Google Ads:
1. Install [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Visit your site
3. Check if the tag fires correctly

### Meta Pixel:
1. Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Visit your site
3. Check if the pixel shows in green

---

## 🚀 Next Steps

1. ✅ Replace placeholder IDs in `components/Analytics.tsx`
2. ✅ Test tracking with browser extensions
3. ✅ Set up conversion tracking for forms and buttons
4. ✅ Create custom audiences in Google Ads and Meta
5. ✅ Monitor events in Google Ads and Meta Events Manager

---

## 📝 TypeScript Declarations (Optional)

If you get TypeScript errors, add this to a `types/global.d.ts` file:

```typescript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    fbq: (...args: any[]) => void;
    _fbq: any;
  }
}

export {};
```

---

## 🔒 Privacy & GDPR Compliance

Consider adding a cookie consent banner before tracking:
- Use a library like `react-cookie-consent`
- Only initialize tracking after user consent
- Add a Privacy Policy page
- Include opt-out instructions

---

## 📞 Support

For tracking issues:
- **Google Ads Support**: [support.google.com/google-ads](https://support.google.com/google-ads)
- **Meta Support**: [facebook.com/business/help](https://www.facebook.com/business/help)

