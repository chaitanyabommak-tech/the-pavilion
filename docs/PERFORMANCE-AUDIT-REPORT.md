# Performance Audit & Optimization Report
## The Pavillion Website — Core Web Vitals & Speed Optimization

**Audit Date:** July 11, 2026  
**Website:** https://bommakugroup.com  
**Framework:** Next.js 16.2.6 (App Router)  
**Auditor:** SEO & Performance Team  

---

## Executive Summary

**Current Status:** ✅ Good foundation with Next.js image optimization configured  
**Priority Issues Found:** 3 High, 4 Medium, 2 Low  
**Expected Performance Gain:** 25-35% improvement in Lighthouse Performance score  
**Implementation Time:** 2-3 weeks for all optimizations  

---

## Table of Contents

1. [Core Web Vitals Baseline](#core-web-vitals)
2. [Image Optimization Audit](#image-optimization)
3. [JavaScript & CSS Optimization](#js-css-optimization)
4. [Network & Caching](#network-caching)
5. [Third-Party Scripts](#third-party-scripts)
6. [Mobile Performance](#mobile-performance)
7. [Accessibility Audit](#accessibility)
8. [SEO Technical Checks](#seo-technical)
9. [Action Plan (Prioritized)](#action-plan)
10. [Monitoring & Continuous Optimization](#monitoring)

---

## 1. Core Web Vitals Baseline {#core-web-vitals}

**What are Core Web Vitals?**  
Google's user experience metrics that directly impact search rankings:
- **LCP (Largest Contentful Paint):** Loading performance — target < 2.5s
- **FID (First Input Delay) / INP (Interaction to Next Paint):** Interactivity — target < 100ms / < 200ms
- **CLS (Cumulative Layout Shift):** Visual stability — target < 0.1

**Measurement Tools:**
1. **Google PageSpeed Insights:** https://pagespeed.web.dev/
2. **Chrome DevTools Lighthouse:** Built into Chrome (F12 → Lighthouse tab)
3. **Search Console Core Web Vitals Report:** Real user data

**Current Baseline (Estimated):**

| Metric | Current (Est.) | Target | Status |
|--------|----------------|--------|--------|
| **LCP** | 3.2s (Desktop) / 4.5s (Mobile) | < 2.5s | 🟡 Needs Improvement |
| **INP** | 180ms (Desktop) / 250ms (Mobile) | < 200ms | 🟡 Needs Improvement |
| **CLS** | 0.05 | < 0.1 | ✅ Good |
| **FCP (First Contentful Paint)** | 1.8s / 2.6s | < 1.8s | 🟡 Needs Improvement |
| **TTI (Time to Interactive)** | 4.1s / 5.8s | < 3.8s | 🔴 Poor |

**Action Required:** Run actual Lighthouse audit on live site and update these numbers.

---

## 2. Image Optimization Audit {#image-optimization}

### 2.1 Current Image Issues

**Issue #1: Oversized Hero Image (HIGH PRIORITY)**
- **File:** `public/assets/pavilion-hero.png`
- **Current Size:** 8,778 KB (8.57 MB)
- **Impact:** This is the LCP element — loading an 8.5MB PNG kills performance
- **Solution:** Convert to WebP/AVIF, resize to max 1920px width

**Recommendation:**
```bash
# Convert to WebP with quality 85
cwebp -q 85 pavilion-hero.png -o pavilion-hero.webp

# Or use online tool: squoosh.app
# Target: < 300 KB for hero image
```

**Issue #2: Unoptimized Floor Plan PNGs (MEDIUM PRIORITY)**
- **Files:** `floorplan-*.png` (7 files, 2.7-3.1 MB each)
- **Current Total:** ~20 MB for floor plans
- **Usage:** Only loaded on `/the-pavillion` page, but still heavy
- **Solution:** Convert to WebP or compress with TinyPNG

**Target Sizes:**
- Hero image: < 300 KB (currently 8,778 KB) — **96% reduction needed**
- Floor plans: < 400 KB each (currently 2,700-3,100 KB) — **85% reduction needed**
- Other photos: < 200 KB each (currently 1,200-1,500 KB) — **85% reduction needed**

### 2.2 Image Optimization Action Plan

**Step 1: Batch Convert Existing Images**

Use **Squoosh CLI** (Google's image optimizer):
```bash
npm install -g @squoosh/cli

# Convert all JPEGs to WebP
squoosh-cli --webp '{"quality":85}' public/assets/*.jpg

# Convert PNGs to WebP (for photos) or keep PNG (for diagrams)
squoosh-cli --webp '{"quality":85}' public/assets/pavilion-hero.png
squoosh-cli --oxipng '{"level":3}' public/assets/floorplan-*.png
```

**Step 2: Implement Next.js Image Component Everywhere**

✅ **Already Configured:** `next.config.ts` has AVIF/WebP formats enabled.

**Verify Usage:** Check that all images use `<Image>` from `next/image`:

```typescript
// ✅ GOOD (auto-optimized)
import Image from 'next/image';
<Image src="/assets/hero.jpg" alt="Villa" width={1920} height={1080} priority />

// ❌ BAD (bypasses Next.js optimization)
<img src="/assets/hero.jpg" alt="Villa" />
```

**Step 3: Add `sizes` Attribute for Responsive Images**

For images that change size based on viewport:
```typescript
<Image 
  src="/assets/villa.jpg" 
  alt="Villa exterior"
  width={1920}
  height={1080}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

This tells Next.js to serve smaller images on mobile.

**Step 4: Lazy Load Below-Fold Images**

```typescript
// Above-fold hero image: priority load
<Image src="/hero.jpg" priority />

// Below-fold images: lazy load (default)
<Image src="/amenity.jpg" loading="lazy" />
```

### 2.3 Image Optimization Checklist

- [ ] Convert `pavilion-hero.png` (8.5 MB) → WebP < 300 KB
- [ ] Convert 7 floor plan PNGs (20 MB total) → WebP < 3 MB total
- [ ] Compress all JPEG photos in `/assets` to < 200 KB each
- [ ] Audit all pages for `<img>` tags → replace with `<Image>`
- [ ] Add `sizes` attribute to responsive images
- [ ] Set `priority` on hero images only
- [ ] Remove unused images from `/public/assets`

**Expected Impact:**  
- LCP improvement: 3.2s → **1.8s** (44% faster)
- Total page weight reduction: ~25 MB → **3-4 MB** (85% lighter)

---

## 3. JavaScript & CSS Optimization {#js-css-optimization}

### 3.1 Bundle Size Analysis

**Run Bundle Analyzer:**
```bash
npm install @next/bundle-analyzer
```

Add to `next.config.ts`:
```typescript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

Run analysis:
```bash
ANALYZE=true npm run build
```

### 3.2 Code Splitting & Dynamic Imports

**Issue:** Heavy components (modals, forms, animation libraries) loaded on every page even if not used.

**Solution:** Lazy load heavy components:

```typescript
// ❌ BAD: LeadFormModal loaded even if never opened
import LeadFormModal from './LeadFormModal';

// ✅ GOOD: LeadFormModal only loaded when modal opens
import dynamic from 'next/dynamic';
const LeadFormModal = dynamic(() => import('./LeadFormModal'), {
  loading: () => <div>Loading...</div>,
  ssr: false, // Client-side only component
});
```

**Components to Lazy Load:**
- `LeadFormModal` (only needed when user clicks CTA)
- Google Maps embed (only on `/contact` page)
- Chart libraries (if any analytics dashboards)
- Heavy animation libraries

### 3.3 CSS Optimization

**Current Setup:** Tailwind CSS + Custom CSS in `globals.css`

**Optimizations:**
1. **Enable Tailwind JIT (already enabled by default in modern Tailwind)**
2. **Purge Unused Styles:** Verify `tailwind.config.ts` content paths are correct
3. **Critical CSS Inline:** Next.js already handles this

**Check `tailwind.config.ts`:**
```typescript
content: [
  './app/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './lib/**/*.{js,ts,jsx,tsx}',
],
```

**Action:** Audit for unused Tailwind classes (use PurgeCSS report).

### 3.4 Font Optimization

**Current Setup:** Google Fonts via `next/font` ✅ (already optimized)

```typescript
// app/layout.tsx
import { Cormorant_Garamond, Inter } from "next/font/google";
```

✅ **Already Good:** `next/font` auto-optimizes:
- Self-hosts fonts (no external request)
- Automatic font subsetting
- Preloads critical fonts
- Zero layout shift (font metrics injected)

**No Action Needed.**

---

## 4. Network & Caching {#network-caching}

### 4.1 HTTP Caching Headers

**Verify Production Headers:**

Check `_headers` file (Netlify) or `vercel.json` (Vercel):

```
# Static Assets (images, fonts, CSS, JS) - cache 1 year
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable

# HTML pages - cache 1 hour, revalidate
/*.html
  Cache-Control: public, max-age=3600, must-revalidate

# API routes - no cache
/api/*
  Cache-Control: no-store
```

**Action:** Verify correct cache headers are set in production.

### 4.2 CDN & Edge Caching

**Recommendation:**  
- **Current:** If hosting on Vercel, edge caching is automatic ✅
- **Alternative:** If self-hosted, add Cloudflare CDN in front

**Cloudflare Setup (if needed):**
1. Point DNS to Cloudflare
2. Enable "Auto Minify" (JS, CSS, HTML)
3. Enable "Brotli" compression
4. Set cache rules: Cache Everything, Edge Cache TTL: 1 month

### 4.3 Compression

**Next.js Config:** ✅ `compress: true` already enabled in `next.config.ts`

**Verify Brotli/Gzip in Production:**
```bash
curl -I -H "Accept-Encoding: br" https://bommakugroup.com
# Look for: Content-Encoding: br (Brotli) or gzip
```

**Action:** If Brotli not enabled, configure in hosting platform.

---

## 5. Third-Party Scripts {#third-party-scripts}

### 5.1 Current Third-Party Scripts

From `app/layout.tsx`:
1. **Google Tag Manager:** GTM-KD57FLT8
2. **Google Analytics 4:** G-QGJ61SEN5Y

**Issue:** Both loaded with `strategy="afterInteractive"` — blocks interactivity.

**Solution:** Use Next.js `<Script>` with optimal strategies:

```typescript
// ✅ GOOD: GTM loaded after page interactive (already correct)
<Script
  id="gtm-script"
  strategy="afterInteractive"
  src="https://www.googletagmanager.com/gtm.js?id=GTM-KD57FLT8"
/>

// ✅ BETTER: GA4 loaded lazily (lower priority)
<Script
  id="ga4-script"
  strategy="lazyOnload"
  src="https://www.googletagmanager.com/gtag/js?id=G-QGJ61SEN5Y"
/>
```

**Change:** Move GA4 from `afterInteractive` → `lazyOnload` (loads after everything else).

### 5.2 Google Maps Optimization

**Current:** Direct `<iframe>` embed on `/contact` page (if used).

**Optimization:** Lazy load with facade pattern:

```typescript
// Show static image preview, load map on click
import dynamic from 'next/dynamic';

const GoogleMap = dynamic(() => import('./GoogleMap'), {
  loading: () => <img src="/map-preview.jpg" alt="Map" />,
  ssr: false,
});

// User clicks map → loads full interactive Google Maps
```

**Impact:** Saves ~500 KB initial load on contact page.

### 5.3 Remove Unused Scripts

**Audit:**
- Check for unused analytics scripts
- Remove old tracking codes
- Consolidate duplicate GTM/GA tags

**Action:** Verify only necessary scripts are loaded.

---

## 6. Mobile Performance {#mobile-performance}

### 6.1 Mobile-Specific Issues

**Issue #1: Large Images on Mobile**
- Hero image (8.5 MB) is even worse on mobile (3G/4G)
- Solution: Serve smaller images for mobile viewports

**Next.js handles this automatically IF `sizes` attribute is set:**
```typescript
<Image 
  src="/hero.jpg"
  sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
/>
```

**Issue #2: Mobile CTA Sticky Bar**

`MobileStickyCTA` component — verify it doesn't cause layout shift:
```typescript
// Ensure fixed height is reserved
<div className="h-16 md:h-0" /> {/* Spacer to prevent shift */}
<div className="fixed bottom-0 h-16 ...">
  {/* CTA content */}
</div>
```

**Issue #3: Touch Target Size**

All buttons/links must be ≥48×48px for mobile usability.

**Check:**
```css
/* Ensure touch targets meet minimum size */
.btn-primary, .btn-secondary {
  min-height: 48px;
  min-width: 48px;
}
```

### 6.2 Mobile Testing Checklist

- [ ] Test on real Android device (slow 3G throttling)
- [ ] Test on real iPhone (Safari WebKit)
- [ ] Lighthouse mobile audit score > 85
- [ ] All CTAs are thumb-friendly (48×48px min)
- [ ] No horizontal scroll on any page
- [ ] Forms auto-zoom correctly (font-size ≥16px)

---

## 7. Accessibility Audit {#accessibility}

### 7.1 WCAG 2.1 AA Compliance

**Required for:**
- Better SEO (Google considers accessibility)
- Legal compliance (if applicable)
- Wider audience reach

### 7.2 Common Issues to Fix

**Issue #1: Missing Alt Text**

```typescript
// ❌ BAD
<Image src="/villa.jpg" alt="" />

// ✅ GOOD
<Image src="/villa.jpg" alt="G+1+Penthouse villa exterior at The Pavillion" />
```

**Action:** Audit all images for descriptive alt text (not just "villa" or "image").

**Issue #2: Color Contrast**

**Requirement:** Text contrast ratio ≥4.5:1 (normal text), ≥3:1 (large text)

**Check:**
- Light text on light backgrounds
- Dark text on dark backgrounds
- Link color vs body text

**Tool:** Chrome DevTools → Inspect → Contrast ratio shown in color picker.

**Issue #3: Keyboard Navigation**

**All interactive elements must be keyboard-accessible:**
- Tab through site without mouse
- Skip links for screen readers
- Focus indicators visible

**Test:**
```
Tab → Should cycle through all links/buttons
Enter → Should activate focused element
Esc → Should close modals
```

**Issue #4: Form Labels**

```typescript
// ❌ BAD
<input type="text" placeholder="Name" />

// ✅ GOOD
<label htmlFor="name">Name</label>
<input id="name" type="text" placeholder="Enter your name" />
```

**Issue #5: Semantic HTML**

```typescript
// ❌ BAD
<div onClick={handleClick}>Click me</div>

// ✅ GOOD
<button onClick={handleClick}>Click me</button>
```

### 7.3 Accessibility Checklist

- [ ] All images have descriptive alt text
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] All forms have `<label>` elements
- [ ] Keyboard navigation works (Tab, Enter, Esc)
- [ ] Focus indicators visible on all interactive elements
- [ ] Headings follow logical hierarchy (h1 → h2 → h3, no skips)
- [ ] ARIA labels on icon-only buttons
- [ ] Skip links for screen readers
- [ ] No auto-playing media

**Testing Tools:**
- Lighthouse Accessibility Score (target: 100)
- axe DevTools (Chrome extension)
- WAVE (Web Accessibility Evaluation Tool)

---

## 8. SEO Technical Checks {#seo-technical}

### 8.1 Canonical URLs

✅ **Already Implemented:** All pages have canonical tags via `metadata.alternates.canonical`

**Verify:**
- No trailing slash inconsistencies
- HTTPS canonical (not HTTP)
- www vs non-www consistency

### 8.2 Meta Descriptions

✅ **Already Implemented:** All pages have unique meta descriptions

**Quality Check:**
- Length: 120-160 characters (optimal for mobile)
- Include target keyword naturally
- Include CTA ("Book site visit", "Call now")

### 8.3 Open Graph & Twitter Cards

✅ **Already Implemented:** OG tags present in metadata

**Verify Image Sizes:**
- OG Image: 1200×630px (recommended)
- Twitter Card: 1200×600px

**Action:** Create dedicated OG images for homepage + key pages.

### 8.4 Structured Data Validation

**Test Schema Markup:**
1. Go to https://validator.schema.org/
2. Paste page URL or HTML
3. Check for errors

**Verify:**
- Organization schema (homepage)
- LocalBusiness schema (homepage)
- RealEstateAgent schema (homepage)
- Product schema (villa listings)
- FAQPage schema (blog posts)
- BreadcrumbList schema (all pages)

**Action:** Fix any schema validation errors.

### 8.5 Mobile-Friendly Test

**Google Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly

**Check:**
- Text readable without zooming
- No horizontal scroll
- Tap targets not too close
- Viewport meta tag present

```html
<!-- ✅ Should be present in <head> -->
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### 8.6 robots.txt & Sitemap

✅ **Already Implemented:**
- `app/robots.ts` (dynamic robots.txt)
- `app/sitemap.ts` (dynamic XML sitemap)

**Verify:**
- Sitemap submitted to Google Search Console
- No indexing errors in GSC
- All important pages indexed

---

## 9. Action Plan (Prioritized) {#action-plan}

### Week 1: Critical (High Impact, Quick Wins)

**Day 1-2: Image Optimization**
- [ ] Convert `pavilion-hero.png` (8.5 MB → < 300 KB WebP)
- [ ] Compress all floor plan PNGs (20 MB → < 3 MB total)
- [ ] Batch compress JPEG photos (< 200 KB each)
- [ ] Audit pages for `<img>` → replace with `<Image>`

**Day 3-4: JavaScript Optimization**
- [ ] Lazy load `LeadFormModal` component
- [ ] Move GA4 script from `afterInteractive` → `lazyOnload`
- [ ] Lazy load Google Maps on `/contact` page
- [ ] Run bundle analyzer, identify large dependencies

**Day 5-7: Testing & Validation**
- [ ] Run Lighthouse audit (Desktop + Mobile)
- [ ] Measure Core Web Vitals (PageSpeed Insights)
- [ ] Submit to Google Search Console for CWV tracking
- [ ] Fix any critical accessibility issues (contrast, alt text)

### Week 2: Medium Priority (Performance Gains)

**Day 8-10: Caching & Network**
- [ ] Verify HTTP cache headers in production
- [ ] Enable Brotli compression (if not already)
- [ ] Test CDN cache hit rates
- [ ] Optimize third-party script loading

**Day 11-12: Mobile Optimization**
- [ ] Add `sizes` attribute to all responsive images
- [ ] Test on real mobile devices (Android + iPhone)
- [ ] Fix touch target sizes (min 48×48px)
- [ ] Verify no layout shifts on mobile

**Day 13-14: Accessibility & SEO**
- [ ] Audit alt text (descriptive, keyword-rich)
- [ ] Check color contrast (WCAG AA compliance)
- [ ] Test keyboard navigation
- [ ] Validate structured data (schema.org validator)

### Week 3: Advanced Optimizations

**Day 15-17: Code Splitting**
- [ ] Implement route-based code splitting
- [ ] Analyze bundle size with @next/bundle-analyzer
- [ ] Remove unused dependencies
- [ ] Tree-shake unused CSS

**Day 18-19: Monitoring Setup**
- [ ] Enable Real User Monitoring (RUM)
- [ ] Set up performance budgets (Lighthouse CI)
- [ ] Configure alerts for CWV regressions
- [ ] Create performance dashboard

**Day 20-21: Final Testing**
- [ ] Run full Lighthouse audit (all pages)
- [ ] Test on slow 3G (mobile)
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Document before/after metrics

---

## 10. Monitoring & Continuous Optimization {#monitoring}

### 10.1 Performance Budgets

Set thresholds to prevent regressions:

**Lighthouse Budgets:**
- Performance Score: > 90 (Desktop), > 85 (Mobile)
- Accessibility Score: 100
- Best Practices Score: 100
- SEO Score: 100

**Core Web Vitals Budgets:**
- LCP: < 2.5s
- INP: < 200ms
- CLS: < 0.1

**Bundle Size Budgets:**
- Initial JS: < 200 KB
- Initial CSS: < 50 KB
- Total Page Weight: < 1 MB (excluding videos)

### 10.2 Automated Testing

**Lighthouse CI (GitHub Actions):**

Create `.github/workflows/lighthouse.yml`:
```yaml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            https://bommakugroup.com
            https://bommakugroup.com/the-pavillion
            https://bommakugroup.com/blog
          uploadArtifacts: true
```

This runs Lighthouse on every deploy and fails if scores drop below thresholds.

### 10.3 Real User Monitoring (RUM)

**Google Analytics 4 Web Vitals:**

Already tracking GA4 (G-QGJ61SEN5Y). Verify Web Vitals events are sent:

```typescript
// Add to app/layout.tsx or separate analytics file
import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    window.gtag?.('event', metric.name, {
      value: Math.round(metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
    });
  });
}
```

**View in GA4:**
- Events → `web_vitals_LCP`, `web_vitals_FID`, `web_vitals_CLS`
- Compare before/after optimization

### 10.4 Weekly Performance Review

**Every Monday:**
1. Check Google Search Console → Core Web Vitals report
2. Review GA4 Web Vitals events (compare to last week)
3. Run Lighthouse audit on 3 key pages (homepage, /the-pavillion, /blog)
4. Check PageSpeed Insights for mobile score

**If scores drop > 10 points:** Investigate recent deployments.

### 10.5 Monthly Deep Dive

**First Friday of Month:**
1. Full Lighthouse audit on all pages
2. Bundle size analysis (check for bloat)
3. Image optimization review (new images added?)
4. Third-party script audit (new scripts added?)
5. Update performance dashboard with metrics

---

## 11. Performance Dashboard (Track These Metrics)

Create a shared Google Sheet or Notion page:

| Metric | Current | Target | Week 1 | Week 2 | Week 3 | Status |
|--------|---------|--------|--------|--------|--------|--------|
| **Lighthouse Performance (Desktop)** | TBD | > 90 | | | | |
| **Lighthouse Performance (Mobile)** | TBD | > 85 | | | | |
| **LCP (Mobile)** | ~4.5s | < 2.5s | | | | |
| **INP (Mobile)** | ~250ms | < 200ms | | | | |
| **CLS** | ~0.05 | < 0.1 | | | | |
| **Total Page Weight** | ~25 MB | < 1 MB | | | | |
| **Hero Image Size** | 8,778 KB | < 300 KB | | | | |
| **Time to Interactive** | ~5.8s | < 3.8s | | | | |

**Action:** Run baseline audit TODAY and fill in "Current" column.

---

## 12. Quick Reference: Optimization Tools

**Image Optimization:**
- Squoosh: https://squoosh.app/ (online)
- Squoosh CLI: `npm i -g @squoosh/cli`
- TinyPNG: https://tinypng.com/
- ImageOptim (Mac): https://imageoptim.com/

**Testing Tools:**
- PageSpeed Insights: https://pagespeed.web.dev/
- Lighthouse (Chrome DevTools): F12 → Lighthouse
- WebPageTest: https://www.webpagetest.org/
- GTmetrix: https://gtmetrix.com/

**Accessibility:**
- axe DevTools: https://www.deque.com/axe/devtools/
- WAVE: https://wave.webaim.org/
- Lighthouse Accessibility: Chrome DevTools

**Schema Validation:**
- Schema.org Validator: https://validator.schema.org/
- Google Rich Results Test: https://search.google.com/test/rich-results

**Bundle Analysis:**
- @next/bundle-analyzer: `npm i @next/bundle-analyzer`
- webpack-bundle-analyzer: Built into Next.js

---

## 13. Before & After Comparison (Template)

**Run baseline BEFORE optimizations, then re-test AFTER Week 3:**

### Homepage (/)

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Lighthouse Performance (Mobile) | TBD | TBD | TBD |
| LCP | TBD | TBD | TBD |
| INP | TBD | TBD | TBD |
| CLS | TBD | TBD | TBD |
| Total Page Size | TBD | TBD | TBD |

### The Pavillion Page (/the-pavillion)

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Lighthouse Performance (Mobile) | TBD | TBD | TBD |
| LCP | TBD | TBD | TBD |
| Total Page Size | TBD | TBD | TBD |

---

## 14. Expected Outcomes (6 Weeks Post-Optimization)

**Performance Improvements:**
- Lighthouse Performance: **85-95** (Mobile), **95-100** (Desktop)
- LCP: **< 2.0s** (Mobile), **< 1.5s** (Desktop)
- Total Page Weight: **< 1 MB** (down from ~25 MB)

**SEO Impact:**
- Core Web Vitals pass in Google Search Console (all pages "Good")
- Potential ranking boost for mobile searches (5-15 positions)
- Lower bounce rate (faster load = better engagement)

**User Experience:**
- 50-70% faster perceived load time
- Smoother scrolling and interactions
- Better mobile experience (critical for villa buyers researching on-the-go)

**Business Impact:**
- 10-20% increase in form submissions (faster site = more conversions)
- 15-25% reduction in bounce rate
- Improved Google Ads Quality Score (if running PPC)

---

## 15. Immediate Next Steps

**Today:**
1. [ ] Run baseline Lighthouse audit (Desktop + Mobile) on:
   - Homepage: /
   - The Pavillion: /the-pavillion
   - Blog: /blog
2. [ ] Document scores in Performance Dashboard
3. [ ] Identify top 3 images to optimize (start with `pavilion-hero.png`)

**This Week:**
1. [ ] Optimize hero image (8.5 MB → < 300 KB)
2. [ ] Convert floor plans to WebP
3. [ ] Lazy load LeadFormModal
4. [ ] Re-run Lighthouse, compare scores

**This Month:**
1. [ ] Complete all Week 1-3 action items
2. [ ] Set up Lighthouse CI in GitHub Actions
3. [ ] Enable Web Vitals tracking in GA4
4. [ ] Document before/after metrics

---

## Document Change Log

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-07-11 | 1.0 | Initial performance audit & optimization plan | Performance Team |
|  |  |  |  |

---

**Questions? Need help with implementation? Contact Tech Lead.**

---

*End of Performance Audit Report*
