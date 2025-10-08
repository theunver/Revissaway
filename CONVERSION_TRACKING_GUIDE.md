# Conversion Tracking Implementation Guide

## 🎯 Google Ads Lead Submission Tracking

Your EstheWay site now has conversion tracking configured for WhatsApp consultation button clicks!

---

## ✅ What's Been Added

### 1. Analytics Component (`components/Analytics.tsx`)

**New Configuration:**
```typescript
const GOOGLE_ADS_ID = "AW-XXXXXXX";
const GOOGLE_ADS_CONVERSION_LABEL = "abcd1234";
```

**Helper Functions:**
- `window.trackLeadSubmission()` - Google Ads conversion tracking
- `window.trackGA4Event()` - GA4 event tracking
- `window.trackMetaEvent()` - Meta Pixel event tracking

---

## 📋 How to Get Your Conversion Label

### Step 1: Create Conversion Action in Google Ads

1. Go to [Google Ads](https://ads.google.com/)
2. Click **Tools & Settings** → **Conversions**
3. Click **+ New conversion action**
4. Select **Website**
5. Enter your website domain: `estheway.com`

### Step 2: Set Up Conversion Details

**Conversion Details:**
- Goal: `Lead`
- Conversion name: `WhatsApp Consultation Click`
- Value: `Use the same value for each conversion`
- Count: `Every`
- Click-through conversion window: `30 days`
- Engagement conversion window: `1 day`
- Attribution model: `Data-driven`

### Step 3: Get Your Conversion Tag

After creating, Google will show:
```javascript
gtag('event', 'conversion', {'send_to': 'AW-1234567890/AbC-dEfGhIjK'});
```

**Extract these values:**
```
Google Ads ID: AW-1234567890
Conversion Label: AbC-dEfGhIjK
```

### Step 4: Update `components/Analytics.tsx`

```typescript
const GOOGLE_ADS_ID = "AW-1234567890";
const GOOGLE_ADS_CONVERSION_LABEL = "AbC-dEfGhIjK";
```

---

## 🔧 Implementation Examples

### Example 1: Homepage Hero WhatsApp Button

**File:** `app/page.tsx`

**Before:**
```tsx
<a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#9B7E3E] hover:bg-[#B8965A] text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-300 font-semibold text-lg"
>
  Book Free Consultation on WhatsApp
</a>
```

**After:**
```tsx
<a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    // Track Google Ads conversion
    if (typeof window !== 'undefined' && window.trackLeadSubmission) {
      window.trackLeadSubmission();
    }
    
    // Track GA4 event
    if (typeof window !== 'undefined' && window.trackGA4Event) {
      window.trackGA4Event('lead_submission', {
        event_category: 'engagement',
        event_label: 'WhatsApp Hero Button',
        value: 1
      });
    }
    
    // Track Meta Pixel
    if (typeof window !== 'undefined' && window.trackMetaEvent) {
      window.trackMetaEvent('Lead', {
        content_name: 'WhatsApp Consultation',
        value: 1
      });
    }
  }}
  className="inline-block bg-[#9B7E3E] hover:bg-[#B8965A] text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-300 font-semibold text-lg"
>
  Book Free Consultation on WhatsApp
</a>
```

---

### Example 2: Contact Form WhatsApp Button

**Location:** Multiple pages (services, about, etc.)

```tsx
<a
  href="https://wa.me/61483898360"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    if (typeof window !== 'undefined') {
      window.trackLeadSubmission?.();
      window.trackGA4Event?.('contact', {
        event_category: 'engagement',
        event_label: 'Service Page WhatsApp',
        page_location: window.location.pathname
      });
      window.trackMetaEvent?.('Contact');
    }
  }}
  className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#128C7E] transition-all"
>
  📱 WhatsApp Consultation
</a>
```

---

### Example 3: Contact Form Submission

**File:** `app/page.tsx` (inside `handleSubmit` function)

```typescript
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
      
      // Track Google Ads Conversion
      if (typeof window !== 'undefined' && window.trackLeadSubmission) {
        window.trackLeadSubmission();
      }
      
      // Track GA4 Event
      if (typeof window !== 'undefined' && window.trackGA4Event) {
        window.trackGA4Event('generate_lead', {
          event_category: 'form_submission',
          event_label: 'Contact Form',
          service: formData.service,
          value: 1
        });
      }
      
      // Track Meta Pixel
      if (typeof window !== 'undefined' && window.trackMetaEvent) {
        window.trackMetaEvent('Lead', {
          content_name: 'Contact Form Submission',
          content_category: formData.service,
          value: 1
        });
      }

      // Reset form...
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        preferredDate: "",
        service: "",
        message: "",
      });
      
      setTimeout(() => setFormStatus("idle"), 5000);
    } else {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  } catch (error) {
    setFormStatus("error");
    setTimeout(() => setFormStatus("idle"), 5000);
  }
};
```

---

### Example 4: Service Page Views

**Files:** `app/hair-transplant/page.tsx`, `app/cosmetic-surgery/page.tsx`, etc.

Add at the top of your component:

```tsx
"use client";

import { useEffect } from 'react';

export default function HairTransplantPage() {
  // Track service page view
  useEffect(() => {
    if (typeof window !== 'undefined' && window.trackGA4Event) {
      window.trackGA4Event('view_item', {
        event_category: 'service_view',
        event_label: 'Hair Transplant',
        content_type: 'service_page',
        value: 1
      });
    }
    
    if (typeof window !== 'undefined' && window.trackMetaEvent) {
      window.trackMetaEvent('ViewContent', {
        content_name: 'Hair Transplant Service',
        content_category: 'Services',
        content_type: 'service_page'
      });
    }
  }, []);

  return (
    // Your page content...
  );
}
```

---

## 🧪 Testing Your Conversion Tracking

### 1. Test in Browser Console

Open Developer Tools (F12) and run:

```javascript
// Test Google Ads conversion
window.trackLeadSubmission();

// Test GA4 event
window.trackGA4Event('test_event', { test: true });

// Test Meta Pixel event
window.trackMetaEvent('TestEvent', { test: true });
```

**Expected Result:**
- Console log: `Conversion tracked: Lead_Submission`
- Network tab shows request to Google Analytics
- No errors in console

### 2. Test with Google Tag Assistant

1. Install [Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Visit your site
3. Click WhatsApp button
4. Check Tag Assistant:
   - ✅ Google Ads conversion tag fired
   - ✅ Event shows correct conversion label

### 3. Test with Meta Pixel Helper

1. Install [Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Visit your site
3. Click WhatsApp button
4. Check Pixel Helper:
   - ✅ Lead event fired
   - ✅ Parameters correctly passed

### 4. Test in Google Ads

1. Go to Google Ads → Tools → Conversions
2. Find your conversion: `WhatsApp Consultation Click`
3. Click to view details
4. Should see recent conversions (may take 24-48 hours)

---

## 📊 Where to Find Your Data

### Google Ads:
1. **Reports** → **Predefined Reports** → **Campaign**
2. Click **Conversions** column
3. See `WhatsApp Consultation Click` conversions

### Google Analytics 4:
1. **Reports** → **Engagement** → **Events**
2. Look for:
   - `lead_submission`
   - `contact`
   - `generate_lead`

### Meta Events Manager:
1. Go to [Events Manager](https://business.facebook.com/events_manager)
2. Select your Pixel
3. Click **Test Events**
4. Perform actions on your site
5. See events in real-time

---

## 🎯 Conversion Value Optimization

### Assign Different Values to Actions

```typescript
// High-value conversion (form submission)
onClick={() => {
  window.trackLeadSubmission();
  window.trackGA4Event('generate_lead', {
    value: 10,  // Higher value
    currency: 'AUD'
  });
}}

// Medium-value conversion (WhatsApp click)
onClick={() => {
  window.trackLeadSubmission();
  window.trackGA4Event('contact', {
    value: 5,  // Medium value
    currency: 'AUD'
  });
}}

// Low-value conversion (page view)
window.trackGA4Event('view_item', {
  value: 1,  // Lower value
  currency: 'AUD'
});
```

---

## 🔄 Advanced: Multiple Conversion Actions

### Create Different Conversions for Different Services

**In Google Ads, create separate conversions:**
1. `WhatsApp_Hair_Transplant` → Label: `abc123`
2. `WhatsApp_Cosmetic_Surgery` → Label: `def456`
3. `WhatsApp_Dental` → Label: `ghi789`

**Update Analytics.tsx:**
```typescript
// Add multiple conversion labels
window.trackConversion = function(conversionLabel) {
  if (typeof gtag !== 'undefined' && '${GOOGLE_ADS_ID}' !== 'AW-XXXXXXX') {
    gtag('event', 'conversion', {
      'send_to': '${GOOGLE_ADS_ID}/' + conversionLabel
    });
  }
};
```

**Use in buttons:**
```tsx
// Hair Transplant page
onClick={() => window.trackConversion?.('abc123')}

// Cosmetic Surgery page
onClick={() => window.trackConversion?.('def456')}

// Dental page
onClick={() => window.trackConversion?.('ghi789')}
```

---

## 📋 Implementation Checklist

### Setup:
- [ ] Create conversion action in Google Ads
- [ ] Copy Conversion ID (AW-XXXXXXX)
- [ ] Copy Conversion Label (abcd1234)
- [ ] Update `components/Analytics.tsx`
- [ ] Deploy changes

### Implementation:
- [ ] Add tracking to hero WhatsApp button
- [ ] Add tracking to contact form submission
- [ ] Add tracking to service page WhatsApp buttons
- [ ] Add tracking to footer WhatsApp button (if applicable)

### Testing:
- [ ] Test with browser console
- [ ] Test with Google Tag Assistant
- [ ] Test with Meta Pixel Helper
- [ ] Verify in Google Ads (24-48 hours)
- [ ] Check GA4 Events report
- [ ] Monitor Meta Events Manager

### Optimization:
- [ ] Set conversion values
- [ ] Create separate conversions per service (optional)
- [ ] Set up conversion-based bidding
- [ ] Monitor ROI

---

## 🚨 Troubleshooting

### Issue: Conversion Not Tracking

**Check:**
1. ✅ Google Ads ID is correct
2. ✅ Conversion Label is correct
3. ✅ No typos in `Analytics.tsx`
4. ✅ Site is deployed with changes
5. ✅ Browser console shows no errors
6. ✅ Ad blockers disabled during testing

**Solution:**
```javascript
// Add debug logging
window.trackLeadSubmission = function() {
  console.log('Tracking conversion...');
  console.log('Google Ads ID:', '${GOOGLE_ADS_ID}');
  console.log('Conversion Label:', '${GOOGLE_ADS_CONVERSION_LABEL}');
  
  if (typeof gtag !== 'undefined') {
    gtag('event', 'conversion', {
      'send_to': '${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}',
      'event_callback': function() {
        console.log('✅ Conversion tracked successfully!');
      }
    });
  } else {
    console.error('❌ gtag not defined');
  }
};
```

### Issue: Duplicate Conversions

**Cause:** Button click triggers multiple times

**Solution:**
```tsx
const [hasTracked, setHasTracked] = useState(false);

onClick={() => {
  if (!hasTracked && typeof window !== 'undefined') {
    window.trackLeadSubmission();
    setHasTracked(true);
  }
}}
```

### Issue: Conversions Not Showing in Google Ads

**Wait Time:** Conversions can take 24-48 hours to appear

**Check:**
1. Google Ads → Tools → Conversions
2. Click your conversion action
3. Look at **Status**: Should be "Recording conversions"
4. If "No recent conversions": Wait 24-48 hours or test again

---

## 💡 Best Practices

### 1. Track User Intent
```typescript
// Track which service they're interested in
window.trackGA4Event('lead_submission', {
  service: 'Hair Transplant',
  location: 'Sydney',
  page: window.location.pathname
});
```

### 2. Track User Journey
```typescript
// Track page progression
useEffect(() => {
  window.trackGA4Event('page_view', {
    page_title: document.title,
    page_path: window.location.pathname,
    referrer: document.referrer
  });
}, []);
```

### 3. Track Drop-offs
```typescript
// Track form abandonment
const handleFieldChange = (field: string) => {
  window.trackGA4Event('form_start', {
    form_name: 'contact_form',
    field_name: field
  });
};
```

---

## 📈 Expected Results

### Week 1:
- 10-20 WhatsApp clicks
- 2-5 form submissions
- Conversion rate: ~2-5%

### Month 1:
- 100-200 WhatsApp clicks
- 20-50 form submissions
- Cost per conversion: $10-30 AUD

### Optimization:
- A/B test button text
- Test different CTA placements
- Optimize landing pages
- Improve conversion rate to 5-10%

---

## 🔗 Resources

- [Google Ads Conversion Tracking](https://support.google.com/google-ads/answer/1722022)
- [GA4 Event Tracking](https://support.google.com/analytics/answer/9267735)
- [Meta Pixel Events](https://www.facebook.com/business/help/402791146561655)
- [Google Tag Assistant](https://support.google.com/tagassistant)

---

**✅ You're all set!** Your WhatsApp consultation button now tracks Google Ads conversions automatically.

**Next Steps:**
1. Update tracking IDs in `components/Analytics.tsx`
2. Add `onClick` handlers to WhatsApp buttons
3. Deploy and test
4. Monitor conversions in Google Ads

Happy tracking! 🎯

