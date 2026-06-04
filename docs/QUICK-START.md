# Quick Start Guide - Google Visibility Setup

**For:** The Pavillion by Bommaku Group  
**Goal:** Get free organic traffic + be ready for paid ads

---

## ✅ What's Already Done

You now have:
- ✅ Complete tracking infrastructure (events, UTM capture)
- ✅ Mobile sticky CTA bar (Call, WhatsApp, Book Visit)
- ✅ SEO metadata & structured data optimized
- ✅ Google Ads campaign documentation (manual setup)
- ✅ Google Business Profile optimization guide
- ✅ Some CTAs already tracked (Hero, Location, Thank You page)

---

## 🚀 PRIORITY 1: Set Up Google Business Profile (FREE - Do This First!)

**Time:** 2-3 hours  
**Cost:** FREE  
**Impact:** Immediate visibility in Google Maps & local search

### Steps:

1. **Go to:** https://business.google.com/
2. **Click:** "Manage now"
3. **Add business:**
   - Name: `Bommaku Constructions - The Pavillion`
   - Category: Real estate developer
   - Address: Surya Hills, Boduppal, Hyderabad 500039
   - Phone: +91 96760 77142
   - Website: https://bommakugroup.com

4. **Verify business** (postcard, phone, or email)

5. **Complete profile:**
   - Upload 15-20 photos (villa renders, clubhouse, location)
   - Add business description (template in docs)
   - Set business hours
   - Enable messaging

6. **Create first 3 Google Posts** (templates in `docs/google-business-profile-free-plan.md`)

**Full guide:** See `docs/google-business-profile-free-plan.md` (22KB)

---

## 🔧 PRIORITY 2: Add Tracking to Remaining CTAs

**Time:** 1-2 hours  
**Impact:** Track ALL user actions (calls, WhatsApp, form submits)

### Phone Links

**Find all instances of:** `<a href="tel:+919676077142">`

**Add tracking:**
```tsx
import { trackPhoneClick } from '@/lib/tracking';

<a 
  href="tel:+919676077142"
  onClick={() => trackPhoneClick('+919676077142', 'footer')}
>
  Call Now
</a>
```

**Files to update:**
- `components/Footer.tsx`
- `components/Contact.tsx`
- `components/FloatingCTA.tsx`
- All landing pages

### WhatsApp Links

**Find all instances of:** `<a href="https://wa.me/919676077142"`

**Add tracking:**
```tsx
import { trackWhatsAppClick } from '@/lib/tracking';

<a 
  href="https://wa.me/919676077142"
  onClick={() => trackWhatsAppClick('footer')}
  target="_blank"
  rel="noopener noreferrer"
>
  WhatsApp Us
</a>
```

### Form Submissions

**Update:** `components/LeadFormModal.tsx` or `components/Contact.tsx`

```tsx
import { enrichFormData } from '@/lib/utm';
import { trackFormSubmit, trackConversion } from '@/lib/tracking';

const handleSubmit = async (formData) => {
  // Enrich with UTM params
  const enrichedData = enrichFormData(formData);
  
  // Submit to backend
  await submitLead(enrichedData);
  
  // Track event
  trackFormSubmit('site_visit', selectedVilla?.id);
  
  // Track Google Ads conversion
  trackConversion();
  
  // Redirect
  window.location.href = '/thank-you';
};
```

---

## 📍 PRIORITY 3: Add Section Anchor IDs

**Time:** 30 minutes  
**Impact:** Google Ads sitelinks will work

**Edit:** `app/page.tsx` (homepage)

Add `id` attributes to sections:
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

**Test anchors work:**
- Visit: `https://bommakugroup.com/#floor-plans`
- Should scroll smoothly to section

**If navbar blocks content, add CSS:**
```css
section[id] {
  scroll-margin-top: 80px; /* navbar height */
}
```

---

## 🧪 PRIORITY 4: Test Tracking

### Development Testing

1. **Run dev server:** `npm run dev`
2. **Open browser DevTools** (F12)
3. **Go to Console tab**
4. **Click CTAs and look for:**
   ```
   [Tracking Event] book_site_visit_click { cta_location: 'hero_desktop' }
   [UTM Tracking] Captured params: {...}
   ```

### Production Testing

1. **Install:** [Tag Assistant extension](https://chrome.google.com/webstore)
2. **Visit:** https://bommakugroup.com
3. **Click extension icon**
4. **Should show:**
   - GA4 tag firing ✅
   - GTM container loaded ✅
   - Events tracking ✅

### UTM Capture Test

1. **Visit with params:**
   ```
   https://bommakugroup.com/?utm_source=test&utm_medium=manual&utm_campaign=tracking_test
   ```

2. **Open DevTools → Application → Session Storage**
3. **Look for:** `the_pavillion_utm_params`
4. **Submit form** - UTM params should be included

---

## 📊 PRIORITY 5: Monitor Free Traffic

### Week 1-4: Google Business Profile

**Check weekly:**
- Profile views (target: 500+)
- Direction requests
- Phone calls from profile
- Website clicks

**Actions:**
- Post 2-3 times per week
- Respond to all reviews within 24 hours
- Add new photos monthly

### Month 2+: Organic SEO

**Monitor in Google Search Console:**
- Impressions (target: 1,000+/month)
- Clicks (target: 50+/month)
- Average position (target: top 10)

**Top keywords to track:**
- villas in Boduppal
- villas near Uppal
- luxury villas East Hyderabad
- The Pavillion Boduppal

---

## 💰 Optional: Launch Google Ads (PAID)

**⚠️ IMPORTANT:** Google Ads is PAID advertising. Only do this if:
- You've maxed out free channels (GBP, SEO)
- You need MORE leads faster
- You have budget: ₹1,500-₹2,000/day minimum

**Before launching:**
1. ✅ Verify ALL tracking works (test in dev)
2. ✅ Google Business Profile is active
3. ✅ Lead forms capture UTM params
4. ✅ You have budget for 2-4 weeks minimum

**Setup guide:** See `docs/google-ads-launch-plan.md` (17KB)

**Conversion tracking:**
1. Google Ads → Tools → Conversions
2. Create "Site Visit Form Submission" action
3. Copy Conversion ID & Label
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
   NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=XXXXXXXXXXX
   ```

---

## 📋 Weekly Checklist

### Week 1 (FREE Traffic Focus)
- [ ] Set up Google Business Profile
- [ ] Upload 15-20 photos
- [ ] Create first 3 Google Posts
- [ ] Add tracking to all phone CTAs
- [ ] Add tracking to all WhatsApp CTAs
- [ ] Test tracking in dev

### Week 2 (SEO & Forms)
- [ ] Add section anchor IDs
- [ ] Update lead form with UTM capture
- [ ] Verify Google Search Console
- [ ] Submit sitemap
- [ ] Monitor GBP insights

### Week 3 (Testing & Optimization)
- [ ] Test all tracking events in production
- [ ] Test UTM capture end-to-end
- [ ] Review GBP performance
- [ ] Optimize low-performing posts
- [ ] Check Search Console data

### Week 4 (Scale Free Traffic)
- [ ] Post 3x on Google Business Profile
- [ ] Collect 3-5 genuine reviews
- [ ] Monitor lead quality
- [ ] Document lead sources
- [ ] Decide: Need paid ads? Or continue free?

---

## 🆘 Troubleshooting

### Tracking not working in dev
**Check:**
- Console shows `[Tracking Event]` logs?
- `.env.local` exists with tracking IDs?
- Import statements correct?

### UTM params not captured
**Check:**
- URL has `?utm_source=...`?
- Session Storage shows `the_pavillion_utm_params`?
- `initUTMTracking()` called on page load?

### Google Business Profile not verified
**Solutions:**
- Postcard takes 7-14 days
- Try phone verification
- Try email verification (if eligible)

### Google Ads conversion not tracking
**Check:**
- Conversion ID in `.env.local` correct?
- `trackConversion()` called after form submit?
- Wait 24 hours for first conversion to show

---

## 📞 Support

**Tracking issues:** Check `docs/IMPLEMENTATION-SUMMARY.md`  
**Google Ads:** See `docs/google-ads-launch-plan.md`  
**Google Business Profile:** See `docs/google-business-profile-free-plan.md`

**Google Ads Support:** 1800-419-0200 (India)  
**GBP Support:** https://support.google.com/business/

---

## ✅ Success Metrics

### Month 1 (Free Traffic Only)
- GBP profile views: 500-1,000
- Direction requests: 20-50
- Phone calls from GBP: 5-15
- Organic search clicks: 30-100

### Month 2-3 (Optimized Free Traffic)
- GBP profile views: 1,500-3,000
- Leads from organic: 10-30/month
- Cost per lead: ₹0 (FREE)

### If launching paid ads (Month 2+)
- Google Ads clicks: 30-50/day
- Cost per click: ₹30-₹80
- Cost per lead: ₹2,000-₹4,000
- Leads: 3-5/day additional

---

**Remember:**
1. **Free first** - Maximize GBP & SEO before spending
2. **Track everything** - Can't optimize what you don't measure
3. **Test before launch** - Verify tracking works in dev
4. **Start small** - If doing ads, start with ₹1,500/day
5. **Be patient** - Free traffic takes 4-8 weeks to build

**Next Step:** Set up Google Business Profile (it's free and takes 2 hours)

---

**Last Updated:** June 4, 2026  
**Status:** Ready for free organic traffic ✅
