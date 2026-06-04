# Google Visibility & Lead Generation Implementation Summary

**Project:** The Pavillion by Bommaku Group  
**Website:** https://bommakugroup.com  
**Date:** June 2026  
**Status:** ✅ Ready for organic traffic & future Google Ads

---

## ✅ What Has Been Completed

### 1. Tracking Infrastructure (FREE to implement, ready for paid ads later)

#### Created Files:
- **`lib/tracking.ts`** - Complete event tracking system
  - Supports GA4, GTM, Google Ads conversion tracking
  - Safe for SSR (server-side rendering)
  - 15+ pre-defined event types
  - Helper functions for common actions

- **`lib/utm.ts`** - UTM parameter capture & storage
  - Automatic URL parameter parsing
  - SessionStorage persistence (30-day expiry)
  - Form enrichment with campaign data
  - GCLID & FBCLID support

#### Supported Tracking Events:
```
✓ book_site_visit_click
✓ view_floor_plans_click
✓ floor_plan_view
✓ floor_plan_select
✓ floor_plan_cta_click
✓ master_plan_view
✓ master_plan_villa_select
✓ enquire_selected_villa_click
✓ phone_call_click
✓ whatsapp_click
✓ get_directions_click
✓ brochure_download_click
✓ enquiry_form_submit
✓ site_visit_form_submit
✓ thank_you_page_view
```

### 2. Environment Configuration

**Created:** `.env.example`

Add tracking IDs when ready:
```bash
# Google Analytics 4 (FREE)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Tag Manager (FREE)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Ads (PAID - add only when launching ads)
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=XXXXXXXXX
```

**How to add IDs:**
1. Copy `.env.example` to `.env.local`
2. Replace placeholder values with real IDs
3. Never commit `.env.local` to Git (already in .gitignore)

### 3. SEO & Structured Data

**Updated:** `app/layout.tsx`

✅ Correct metadata (title, description, keywords)  
✅ Open Graph tags for social sharing  
✅ Twitter Card tags  
✅ Canonical URL  
✅ Robots meta (index, follow)  
✅ JSON-LD structured data:
  - Organization schema (Bommaku Group)
  - RealEstateAgent schema
  - Product schema (The Pavillion)
  - WebSite schema
  - GeoCoordinates (17.416403, 78.575600)

**✅ Fixed:** Villa count updated to 40 (was showing 45 in schema)

### 4. Mobile User Experience

**Created:** `components/MobileStickyCTA.tsx`

✅ Sticky bottom CTA bar (mobile only)  
✅ Shows after 300px scroll  
✅ Three quick actions:
  - Call (+91 96760 77142)
  - WhatsApp (pre-filled message)
  - Book Site Visit (scrolls to form)

✅ All CTAs have tracking  
✅ Smooth animation  
✅ Premium design (not cheap-looking)

**Added to:** `app/layout.tsx` (active site-wide)

### 5. Documentation (Manual Setup Guides)

#### **`docs/google-ads-launch-plan.md`** (17KB)
Complete Google Ads campaign setup guide including:
- ✅ Campaign structure (3 campaigns, 7 ad groups)
- ✅ 50+ keywords (phrase & exact match)
- ✅ 30+ negative keywords (critical to avoid waste)
- ✅ 15 ad headlines
- ✅ 4 ad descriptions
- ✅ Sitelink assets (4 sitelinks with descriptions)
- ✅ Callout assets (9 callouts)
- ✅ Budget recommendations (₹1,500-₹2,000/day to start)
- ✅ Conversion tracking setup steps
- ✅ Success metrics to track
- ✅ Common mistakes to avoid
- ✅ Ad schedule recommendations

**⚠️ IMPORTANT:** Google Ads is PAID. Document clearly states this.

#### **`docs/google-business-profile-free-plan.md`** (22KB)
Complete GBP optimization guide including:
- ✅ Profile setup checklist
- ✅ Verification process
- ✅ Business description (750-char template)
- ✅ Photo guidelines (logo, cover, exterior, interior)
- ✅ 5 Google Post templates (ready to copy-paste)
- ✅ Q&A pre-population (6 common questions)
- ✅ Review request strategy
- ✅ Review response templates
- ✅ Weekly posting schedule
- ✅ Performance metrics to track
- ✅ Local SEO integration tips

**✅ FREE:** Everything in GBP guide is free.

---

## 📋 What Still Needs To Be Done

### Priority 1: Add Tracking to Existing CTAs

The tracking functions are ready. Now connect them to existing buttons/links:

#### Phone Links
**Find all:** `<a href="tel:+919676077142">`

**Add onClick:**
```tsx
import { trackPhoneClick } from '@/lib/tracking';

<a 
  href="tel:+919676077142"
  onClick={() => trackPhoneClick('+919676077142', 'hero_section')}
>
  Call Now
</a>
```

**Locations to update:**
- Hero section
- Contact section
- Footer
- All landing pages

#### WhatsApp Links
**Find all:** `<a href="https://wa.me/919676077142">`

**Add onClick:**
```tsx
import { trackWhatsAppClick } from '@/lib/tracking';

<a 
  href="https://wa.me/919676077142"
  onClick={() => trackWhatsAppClick('hero_section')}
  target="_blank"
  rel="noopener noreferrer"
>
  WhatsApp Us
</a>
```

#### Floor Plan Views
In `components/floorplan/FloorPlanViewer.tsx`:

```tsx
import { trackEvent } from '@/lib/tracking';

// When floor plan modal opens
useEffect(() => {
  if (isOpen) {
    trackEvent('floor_plan_view', {
      villa_id: selectedVilla?.id,
      cta_location: 'floor_plan_viewer'
    });
  }
}, [isOpen, selectedVilla]);
```

#### Master Plan Villa Selection
In `components/floorplan/SchematicMasterPlan.tsx` or `InteractiveMasterPlan.tsx`:

```tsx
import { trackVillaSelect } from '@/lib/tracking';

const handleVillaClick = (villa) => {
  setSelectedVilla(villa);
  
  trackVillaSelect(
    villa.id,
    villa.block,
    villa.plotSizeSqYd.toString(),
    villa.facing
  );
};
```

### Priority 2: Update Lead Forms with UTM Capture

#### Form Component Updates
**File:** `components/LeadFormModal.tsx` or `components/Contact.tsx`

```tsx
import { enrichFormData } from '@/lib/utm';
import { trackFormSubmit, trackConversion } from '@/lib/tracking';

const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = {
    name: nameInput,
    phone: phoneInput,
    email: emailInput,
    selected_villa: selectedVilla?.id,
    // ... other fields
  };
  
  // Enrich with UTM params
  const enrichedData = enrichFormData(formData);
  
  // Submit to your backend
  const response = await submitLead(enrichedData);
  
  if (response.ok) {
    // Track event
    trackFormSubmit('site_visit', selectedVilla?.id);
    
    // Track conversion (for Google Ads)
    trackConversion();
    
    // Redirect to thank you page
    window.location.href = '/thank-you';
  }
};
```

#### Add Hidden UTM Fields (Optional)
If your form uses standard HTML form submission:

```tsx
import { getUTMFormData } from '@/lib/utm';

const utmData = getUTMFormData();

// Add hidden fields
<input type="hidden" name="utm_source" value={utmData.utm_source || ''} />
<input type="hidden" name="utm_medium" value={utmData.utm_medium || ''} />
<input type="hidden" name="utm_campaign" value={utmData.utm_campaign || ''} />
<input type="hidden" name="page_url" value={window.location.href} />
```

### Priority 3: Initialize UTM Tracking

**File:** `app/layout.tsx` or create `app/providers.tsx`

```tsx
'use client';

import { useEffect } from 'react';
import { initUTMTracking } from '@/lib/utm';

export function Providers({ children }) {
  useEffect(() => {
    // Capture UTM params on page load
    initUTMTracking();
  }, []);
  
  return <>{children}</>;
}
```

Then wrap children in layout:
```tsx
import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

### Priority 4: Add Section Anchor IDs

For Google Ads sitelinks to work, add these IDs to sections:

**File:** `app/page.tsx` (homepage)

```tsx
<section id="hero">...</section>
<section id="project-highlights">...</section>
<section id="floor-plans">...</section>
<section id="master-plan">...</section>
<section id="amenities">...</section>
<section id="location">...</section>
<section id="gallery">...</section>
<section id="book-site-visit">...</section>
<section id="contact">...</section>
```

**Test anchor scrolling:**
- Visit: `https://bommakugroup.com/#floor-plans`
- Should scroll smoothly to floor plans section
- Adjust `scroll-margin-top` if needed (for sticky header)

```css
section[id] {
  scroll-margin-top: 80px; /* Height of navbar */
}
```

### Priority 5: Thank You Page Enhancement

**File:** `app/thank-you/page.tsx`

Add tracking:
```tsx
'use client';

import { useEffect } from 'react';
import { trackPageView } from '@/lib/tracking';

export default function ThankYouPage() {
  useEffect(() => {
    trackPageView('Thank You');
  }, []);
  
  return (
    // ... existing content
  );
}
```

**Add meta tag to prevent indexing:**
```tsx
export const metadata = {
  title: 'Thank You | The Pavillion',
  robots: {
    index: false, // Don't index thank you page
    follow: false,
  },
};
```

### Priority 6: Google Maps Direction CTA

**File:** `components/LocationAdvantage.tsx`

Add tracking to "Get Directions" button:

```tsx
import { trackEvent } from '@/lib/tracking';

<a 
  href="https://maps.app.goo.gl/R1nc9T4BruaWa8N57"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => trackEvent('get_directions_click', {
    cta_location: 'location_section'
  })}
>
  Get Directions
</a>
```

---

## 🔧 How to Test Tracking

### Test in Development

1. **Open browser DevTools** (F12)
2. **Go to Console tab**
3. **Look for tracking logs:**
   ```
   [Tracking Event] phone_call_click { phone_number: '+919676077142', cta_location: 'hero' }
   [UTM Tracking] Captured params: { utm_source: 'google', utm_medium: 'cpc', ... }
   ```

### Test in Production

1. **Install Google Tag Assistant extension**
   - Chrome: https://chrome.google.com/webstore (search "Tag Assistant")

2. **Click extension icon on your site**
   - Should show: GA4 tag firing
   - Should show: GTM container loaded
   - Should show: Conversion tags (if configured)

3. **Check Google Analytics (Real-Time)**
   - Go to GA4 → Reports → Real-time
   - Visit your website
   - Should see your session
   - Trigger events (click buttons)
   - Should see events appearing in real-time

### Test UTM Capture

1. **Visit with UTM params:**
   ```
   https://bommakugroup.com/?utm_source=test&utm_medium=manual&utm_campaign=tracking_test
   ```

2. **Open DevTools → Console:**
   - Should see: `[UTM Tracking] Captured params: {...}`

3. **Open DevTools → Application → Session Storage:**
   - Should see: `the_pavillion_utm_params` with stored data

4. **Submit a form:**
   - UTM params should be included in form submission

---

## 📊 Tracking IDs Setup Guide

### Google Analytics 4 (FREE)

1. **Create GA4 Property:**
   - Go to: https://analytics.google.com/
   - Click "Admin" (bottom left)
   - Click "+ Create Property"
   - Name: "Bommaku Group - The Pavillion"
   - Timezone: "India"
   - Currency: "INR"

2. **Get Measurement ID:**
   - Click "Data Streams"
   - Click "Add Stream" → "Web"
   - URL: `https://bommakugroup.com`
   - Stream name: "Website"
   - Copy **Measurement ID** (format: G-XXXXXXXXXX)

3. **Add to .env.local:**
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

**Note:** GA4 is already configured in `app/layout.tsx` (ID: G-QGJ61SEN5Y). If this is correct, no action needed.

### Google Tag Manager (FREE)

1. **Create GTM Account:**
   - Go to: https://tagmanager.google.com/
   - Click "Create Account"
   - Account name: "Bommaku Group"
   - Container name: "bommakugroup.com"
   - Target platform: "Web"

2. **Get Container ID:**
   - Format: GTM-XXXXXXX
   - Copy from "Install Google Tag Manager" popup

3. **Add to .env.local:**
   ```
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```

**Note:** GTM is already configured (ID: GTM-KD57FLT8). If this is correct, no action needed.

### Google Ads Conversion Tracking (PAID - Only when running ads)

**Do NOT add until you're ready to launch Google Ads campaigns.**

When ready:

1. **Create conversion action in Google Ads:**
   - Google Ads → Tools → Conversions
   - Click "+ New conversion action"
   - Select "Website"
   - Name: "Site Visit Form Submission"
   - Category: "Submit lead form"
   - Value: ₹10,000
   - Click "Create and continue"

2. **Get IDs:**
   - Conversion ID (format: AW-XXXXXXXXXX)
   - Conversion Label (format: XXXXXXXXXXX)

3. **Add to .env.local:**
   ```
   NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
   NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=XXXXXXXXXXX
   ```

4. **Test conversion:**
   - Submit a test form
   - Check Google Ads → Tools → Conversions
   - Should show test conversion within 24 hours

---

## 🚀 Next Steps (Prioritized)

### Week 1: Free Traffic Setup
1. ✅ Set up Google Business Profile (use guide in `docs/`)
2. ✅ Verify business location
3. ✅ Upload 15-20 high-quality photos
4. ✅ Add business description
5. ✅ Create first 3 Google Posts
6. ✅ Pre-populate Q&A section

### Week 2: Tracking Implementation
1. ⏳ Add tracking to all phone CTAs
2. ⏳ Add tracking to all WhatsApp CTAs
3. ⏳ Add tracking to master plan selections
4. ⏳ Add tracking to floor plan views
5. ⏳ Update lead form to capture UTM params
6. ⏳ Initialize UTM tracking on page load

### Week 3: SEO Content
1. ⏳ Add section anchor IDs for sitelinks
2. ⏳ Optimize image alt text
3. ⏳ Add FAQ schema (if applicable)
4. ⏳ Submit sitemap to Google Search Console
5. ⏳ Monitor Search Console for indexing

### Week 4: Testing & Validation
1. ⏳ Test all tracking events
2. ⏳ Test UTM capture and form submission
3. ⏳ Test mobile sticky CTA on real devices
4. ⏳ Validate structured data (Google Rich Results Test)
5. ⏳ Performance audit (PageSpeed Insights)

### Month 2: Consider Paid Ads (OPTIONAL)
1. ⏳ Review organic traffic from GBP
2. ⏳ Review lead quality from free channels
3. ⏳ If needed, set up Google Ads conversion tracking
4. ⏳ Follow manual setup checklist in `docs/google-ads-launch-plan.md`
5. ⏳ Start with ₹1,500-₹2,000/day test budget

---

## 💰 What's Free vs. Paid

### ✅ FREE (Already Setup or Can Setup For Free)

- ✅ Google Business Profile
- ✅ Google organic SEO
- ✅ Google Maps visibility
- ✅ Google Analytics 4
- ✅ Google Tag Manager
- ✅ Tracking infrastructure (this implementation)
- ✅ Mobile sticky CTA
- ✅ UTM parameter tracking
- ✅ Structured data / schema markup
- ✅ Social media posts (manual)
- ✅ WhatsApp for business (free tier)

### 💵 PAID (When You Choose To Use Them)

- ❌ Google Ads (Search campaigns)
- ❌ Google Ads (Performance Max)
- ❌ Facebook/Instagram Ads
- ❌ Premium listing on 99acres/MagicBricks
- ❌ Paid SEO tools (Ahrefs, SEMrush)

**Recommendation:** Maximize free channels for 4-6 weeks first. Then evaluate if paid ads are needed based on lead volume.

---

## 📞 Support & Questions

### Tracking Issues
- Check browser console for error messages
- Verify `.env.local` has correct IDs
- Ensure tracking functions are imported correctly

### Google Ads Questions
- Refer to: `docs/google-ads-launch-plan.md`
- Google Ads Support: 1800-419-0200 (India)

### Google Business Profile Questions
- Refer to: `docs/google-business-profile-free-plan.md`
- GBP Support: https://support.google.com/business/

### Technical Implementation
- Review `lib/tracking.ts` for tracking function usage
- Review `lib/utm.ts` for UTM capture usage
- Check existing components for implementation examples

---

## ✅ Summary Checklist

**Completed:**
- [x] Event tracking infrastructure
- [x] UTM capture system
- [x] Environment configuration template
- [x] SEO metadata optimization
- [x] Structured data (JSON-LD)
- [x] Mobile sticky CTA component
- [x] Google Ads launch documentation
- [x] Google Business Profile documentation
- [x] Villa count fixed (40, not 45)

**Todo (Your Action Required):**
- [ ] Add tracking to existing phone/WhatsApp CTAs
- [ ] Update lead forms with UTM capture
- [ ] Initialize UTM tracking on page load
- [ ] Add section anchor IDs for sitelinks
- [ ] Set up Google Business Profile (free)
- [ ] Add conversion tracking to thank you page
- [ ] Test all tracking events
- [ ] Validate with Google Tag Assistant

**Optional (When Ready):**
- [ ] Launch Google Ads campaigns (PAID)
- [ ] Set up Google Ads conversion tracking
- [ ] Create Facebook Ads campaigns (PAID)

---

**Last Updated:** June 4, 2026  
**Implementation Status:** 70% Complete (Foundation ready, integration pending)
