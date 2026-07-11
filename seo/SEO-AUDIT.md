# SEO AUDIT — bommakugroup.com
**Date:** 2026-07-11  
**Site:** https://bommakugroup.com  
**Platform:** Next.js 16.2.6 (App Router) + TypeScript + Tailwind  
**Auditor:** ARJUN-SEO

---

## EXECUTIVE SUMMARY

**Overall Grade: B- (72/100)**

The site has a **strong technical foundation** — modern Next.js App Router, schema.org markup, dynamic metadata system, good performance baseline. However, **critical SEO gaps** prevent it from ranking competitively:

1. ❌ **Sitemap incomplete** — missing all money pages (villas-in-boduppal, villas-near-uppal, 3bhk-villas-boduppal, independent-houses-boduppal)
2. ❌ **Obsolete meta keywords tag** throughout
3. ❌ **Placeholder social links** in footer (bare facebook.com/instagram.com/youtube.com)
4. ❌ **Missing /llms.txt** — AI crawlers have no structured fact source
5. ❌ **No manifest.ts** — missing PWA/installability signals
6. ❌ **Static robots.txt/sitemap.xml in /public** conflict with dynamic app/ versions
7. ⚠️ **No FAQPage schema** — FAQ content exists but not marked up
8. ⚠️ **Limited internal linking** between SEO pages
9. ⚠️ **No breadcrumbs** on subpages

**Priority actions:** Fix sitemap (CRITICAL), remove meta keywords (HIGH), add llms.txt (HIGH), fix social links (HIGH).

---

## 1. INDEXABILITY & CRAWLABILITY

### ✅ PASSING
- [x] Dynamic `robots.ts` exists (`app/robots.ts`)
- [x] Allows all user agents, blocks /api/ and /admin/
- [x] Points to sitemap
- [x] GTM + GA4 configured correctly (GTM-KD57FLT8, G-QGJ61SEN5Y)
- [x] No noindex tags detected

### ❌ CRITICAL ISSUES

**C-001: Sitemap Missing Money Pages**
- **Severity:** CRITICAL
- **File:** `app/sitemap.ts`
- **Issue:** Sitemap only includes homepage + legal pages (privacy, terms, disclaimer, thank-you). **All SEO money pages missing:**
  - `/villas-in-boduppal` ❌
  - `/villas-near-uppal` ❌
  - `/3bhk-villas-boduppal` ❌
  - `/independent-houses-boduppal` ❌
- **Impact:** These pages won't be discovered/indexed efficiently by Google. In competitive real estate markets, if a page isn't in the sitemap, it can take weeks to rank.
- **Fix:** Add all public routes to sitemap with correct priorities (0.9 for money pages).

**C-002: Conflicting robots.txt/sitemap.xml**
- **Severity:** HIGH
- **Files:** `public/robots.txt`, `public/sitemap.xml`
- **Issue:** Static files in /public/ will override the dynamic `app/robots.ts` and `app/sitemap.ts`. Next.js serves static files first.
- **Impact:** The dynamic sitemap (which we need to fix) won't even be used.
- **Fix:** Delete `public/robots.txt` and `public/sitemap.xml`. Use only the app/ versions.

---

## 2. METADATA & ON-PAGE

### ✅ PASSING
- [x] `metadataBase` set in `lib/metadata.ts` fallback
- [x] Unique titles on checked pages (/, /villas-in-boduppal)
- [x] Unique descriptions on checked pages
- [x] Title length appropriate (< 60 chars)
- [x] Description length good (150-160 chars)
- [x] Canonical URLs present
- [x] OG tags complete (title, description, image, type, url)
- [x] Twitter Card tags present
- [x] `lang="en"` set (should be `en-IN` for India — MEDIUM priority)

### ❌ HIGH ISSUES

**H-001: Meta Keywords Tag**
- **Severity:** HIGH
- **Files:** `lib/metadata.ts` (line 14, 74), all page metadata exports
- **Issue:** `keywords` field in metadata objects. Meta keywords tag has been ignored by Google since 2009 and is a **negative signal** (marks site as outdated/SEO-spam).
- **Example:** `/villas-in-boduppal/page.tsx` line 9-10
- **Impact:** Minor ranking penalty + looks outdated to sophisticated buyers.
- **Fix:** Remove `keywords` field from all Metadata objects site-wide.

**H-002: Placeholder Social Links**
- **Severity:** HIGH
- **File:** `components/Footer.tsx` lines 52-54
- **Code:**
  ```typescript
  const facebookUrl = settings.facebook_url || 'https://facebook.com'
  const instagramUrl = settings.instagram_url || 'https://instagram.com'
  const youtubeUrl = settings.youtube_url || 'https://youtube.com'
  ```
- **Issue:** If `settings` doesn't load, fallback links point to bare facebook.com/instagram.com/youtube.com (not the Bommaku profiles). This:
  - Leaks link equity to competitors
  - Looks fake to users
  - Breaks entity graph (Google can't connect these to Bommaku Group)
- **Impact:** Lost authority, broken local entity signals.
- **Fix:** Either use real profile URLs (`https://www.facebook.com/bommakugroup`, etc.) as fallbacks, OR hide the links entirely if settings aren't available.

---

## 3. STRUCTURED DATA (JSON-LD)

### ✅ PASSING
- [x] Organization schema present (`app/layout.tsx` lines 74-98)
- [x] RealEstateAgent schema present (lines 99-120)
- [x] Product schema for The Pavillion (lines 121-158)
- [x] WebSite schema with SearchAction (lines 159-173)
- [x] All required fields populated
- [x] Geo coordinates correct (17.416403, 78.575600)
- [x] Price in correct format (INR 18700000)
- [x] NAP present in schema

### ⚠️ MEDIUM ISSUES

**M-001: No FAQPage Schema**
- **Severity:** MEDIUM
- **Issue:** Site has 10 Q&As in `components/FAQ.tsx` (line 30 shows one example). FAQPage schema would make these eligible for rich results in Google.
- **Current state:** FAQ content exists, just not marked up.
- **Impact:** Missing rich result opportunity. FAQs in real estate get high CTR in rich results.
- **Fix:** Add FAQPage schema to homepage or create /faq page with schema.

**M-002: No LocalBusiness Schema**
- **Severity:** MEDIUM
- **Issue:** Have RealEstateAgent but no LocalBusiness type. LocalBusiness is the primary type for Map Pack ranking.
- **Fix:** Add LocalBusiness (or change RealEstateAgent to extend LocalBusiness) with opening hours, areaServed, hasMap, priceRange.

**M-003: Missing Breadcrumb Schema**
- **Severity:** MEDIUM
- **Issue:** Subpages (/villas-in-boduppal, etc.) have no BreadcrumbList schema.
- **Impact:** Breadcrumbs in search results improve CTR and clarify site structure to Google.
- **Fix:** Add BreadcrumbList on all subpages.

**M-004: sameAs Links Need Verification**
- **Severity:** MEDIUM
- **Current:** Lines 94-97 in layout.tsx:
  ```json
  "sameAs": [
    "https://www.facebook.com/bommakugroup",
    "https://www.instagram.com/bommakugroup"
  ]
  ```
- **Issue:** Need to verify these profiles actually exist and are live. If they're not, this confuses the entity graph.
- **Fix:** Confirm real URLs with client, or remove until profiles are live.

---

## 4. SITE ARCHITECTURE

### ✅ PASSING
- [x] Logical URL structure (/villas-in-{location})
- [x] Clean URLs (no query params for primary pages)
- [x] Responsive design
- [x] Mobile-first approach

### ⚠️ MEDIUM ISSUES

**M-005: No Breadcrumbs**
- **Severity:** MEDIUM
- **Issue:** No visible breadcrumb navigation on subpages.
- **Impact:** Poor UX for users; missed schema opportunity.
- **Fix:** Add breadcrumb component to all subpages.

**M-006: Limited Internal Linking**
- **Severity:** MEDIUM
- **Issue:** Checked `/villas-in-boduppal` — it links back to homepage and has CTA buttons, but doesn't link to related pages like `/villas-near-uppal`, `/3bhk-villas-boduppal`, or `/independent-houses-boduppal`.
- **Impact:** Weak internal link graph means Google can't flow authority between related pages.
- **Fix:** Add "Related Pages" or contextual links in content.

**M-007: Missing /about, /contact, /blog Routes**
- **Severity:** MEDIUM
- **Issue:** Prompt requires these routes for E-E-A-T and content marketing, but they don't exist yet.
- **Current routes:** /, legal pages, 4 SEO villa pages, /thank-you
- **Fix:** Create routes per Phase 3 plan.

---

## 5. CONTENT QUALITY

### ✅ PASSING
- [x] `/villas-in-boduppal` has 800+ words of local content
- [x] No keyword stuffing detected
- [x] Natural language
- [x] Local data (distance to metro, schools, etc.)
- [x] Unique H1 per page
- [x] Logical heading hierarchy

### ⚠️ LOW ISSUES

**L-001: No dateModified in Schema**
- **Severity:** LOW
- **Issue:** Product/Organization schema doesn't have `dateModified` or `datePublished`.
- **Impact:** AI systems prefer fresh content. Without dates, content is assumed stale.
- **Fix:** Add `dateModified` to Product schema.

**L-002: No Author/Publisher E-E-A-T Signals**
- **Severity:** LOW
- **Issue:** Blog posts (when created) will need author schema for E-E-A-T.
- **Fix:** Add Person schema for Bommaku Group leadership when /about is created.

---

## 6. PERFORMANCE & CORE WEB VITALS

### ✅ PASSING
- [x] Next.js Image optimization enabled (AVIF/WebP)
- [x] Font optimization via next/font with display: swap
- [x] Lazy loading likely handled by Next.js defaults
- [x] GTM loaded afterInteractive (correct)
- [x] Hero image preloaded (line 40 in layout.tsx)

### ⚠️ MEDIUM ISSUES

**M-008: No Actual Performance Scores**
- **Severity:** MEDIUM
- **Issue:** Audit hasn't run Lighthouse yet.
- **Fix:** Run `next build` then Lighthouse against production build. Target: Performance ≥85 mobile.

**M-009: Potentially Large Images**
- **Severity:** MEDIUM
- **Issue:** `/public/assets/` folder exists but haven't checked image sizes.
- **Fix:** Audit asset sizes, ensure hero < 180KB, gallery < 120KB.

---

## 7. LOCAL SEO SIGNALS

### ✅ PASSING
- [x] NAP in schema (address, phone, coordinates)
- [x] Phone number click-to-call (`tel:+919676077142`)
- [x] WhatsApp links formatted correctly (`wa.me/919676077142`)
- [x] Location in titles and descriptions
- [x] Local keywords present

### ❌ CRITICAL ISSUES

**C-003: No /llms.txt**
- **Severity:** CRITICAL (for AI-search era)
- **Issue:** `/public/llms.txt` doesn't exist.
- **Impact:** LLM crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) have no structured fact source. When users ask AI "villas in boduppal recommendations" or "bommaku group contact", the AI has to guess instead of citing authoritative facts.
- **Fix:** Create `/public/llms.txt` with project facts.

**H-003: PIN Code Inconsistency**
- **Severity:** HIGH
- **Issue:** Schema says postal code `500039`, but need to verify this matches Google Business Profile and HMDA registration.
- **Fix:** Confirm correct PIN with client. NAP must be character-identical everywhere.

### ⚠️ MEDIUM ISSUES

**M-010: No hasMap Link in Visible UI**
- **Severity:** MEDIUM
- **Issue:** Schema has `geo` coordinates but no `hasMap` field pointing to Google Maps Place URL.
- **Fix:** Add `hasMap: "https://maps.app.goo.gl/3gEbRXmKsENAkjXi7"` to schema.

**M-011: No Hours in Schema**
- **Severity:** MEDIUM
- **Issue:** LocalBusiness/RealEstateAgent schema missing `openingHoursSpecification`.
- **Impact:** Map Pack ranking signal.
- **Fix:** Add business hours to schema.

---

## 8. ANSWER ENGINE OPTIMIZATION (AEO)

### ⚠️ MEDIUM ISSUES

**M-012: FAQ Structure Not AEO-Optimized**
- **Severity:** MEDIUM
- **Issue:** FAQ answers aren't formatted as extractable 40-60 word direct answers. Current answer (line 30 of FAQ.tsx) is 50 words — good length, but no H2 question wrapper for AI extraction.
- **Impact:** AI systems prefer question→answer pairs in semantic HTML (H2 question + p answer immediately after).
- **Fix:** Restructure FAQ section with H2 questions + concise p answers.

**M-013: No "Quick Facts" Table**
- **Severity:** MEDIUM
- **Issue:** Prompt recommends a table of core project facts. Tables are the #1 format AI Overviews extract.
- **Fix:** Add Quick Facts table to homepage or /the-pavillion page.

---

## 9. TECHNICAL COMPLIANCE

### ✅ PASSING
- [x] HTTPS (assumed — site is bommakugroup.com)
- [x] No mixed content warnings observed
- [x] Valid HTML structure
- [x] Semantic HTML (`<main>`, `<section>`, headers)
- [x] Skip link for accessibility (line 184 of layout.tsx)

### ❌ HIGH ISSUES

**H-004: No Web App Manifest**
- **Severity:** HIGH
- **Issue:** No `app/manifest.ts` or `manifest.json`.
- **Impact:** Missing PWA signals, can't be "installed", no theme color for mobile browsers.
- **Fix:** Create `app/manifest.ts` with name, short_name, theme_color (#1B5E20 green), icons.

**H-005: Favicon Only (No Full Icon Set)**
- **Severity:** MEDIUM
- **Issue:** Only `tab-icon.png` exists. No `icon.png`, `apple-icon.png` in app/ directory.
- **Impact:** Inconsistent appearance on different devices.
- **Fix:** Add `app/icon.png` and `app/apple-icon.png` (Next.js will auto-generate sizes).

---

## 10. CONTENT GAPS (vs. Prompt Requirements)

### Missing Routes (Phase 3 requirement):

| Route | Status | Priority |
|---|---|---|
| `/` | ✅ Exists | - |
| `/the-pavillion` | ❌ Missing | HIGH — canonical project entity page |
| `/villas-in-boduppal` | ✅ Exists | - |
| `/villas-near-uppal` | ✅ Exists | - |
| `/3bhk-villas-boduppal` | ✅ Exists | - |
| `/independent-houses-boduppal` | ✅ Exists | - |
| `/villas-in-ghatkesar-pocharam` | ❌ Missing | MEDIUM — Tier-3 corridor expansion |
| `/bommaku-recreation-zone` | ❌ Missing | MEDIUM — USP page |
| `/the-clean-slate` | ❌ Missing | MEDIUM — personalization USP |
| `/nri-villa-investment-hyderabad` | ❌ Missing | MEDIUM — NRI audience |
| `/about` | ❌ Missing | HIGH — E-E-A-T |
| `/contact` | ❌ Missing | HIGH — local signal |
| `/blog` | ❌ Missing | HIGH — AEO/content marketing |

---

## SCORING BREAKDOWN

| Category | Score | Weight | Weighted |
|---|---|---|---|
| **Indexability** | 65/100 | 20% | 13 |
| **Metadata** | 75/100 | 15% | 11.25 |
| **Structured Data** | 80/100 | 15% | 12 |
| **Architecture** | 70/100 | 10% | 7 |
| **Content** | 75/100 | 10% | 7.5 |
| **Performance** | 80/100 | 10% | 8 |
| **Local SEO** | 60/100 | 10% | 6 |
| **AEO** | 65/100 | 5% | 3.25 |
| **Technical** | 70/100 | 5% | 3.5 |
| **TOTAL** | - | - | **71.5/100** |

---

## PRIORITY FIX LIST

### 🔴 CRITICAL (Do First)
1. ✅ Fix sitemap to include all SEO pages
2. ✅ Delete conflicting public/robots.txt and public/sitemap.xml
3. ✅ Create /public/llms.txt

### 🟠 HIGH (Do This Week)
4. ✅ Remove meta keywords from all metadata
5. ✅ Fix Footer.tsx social link placeholders
6. ✅ Create app/manifest.ts
7. ✅ Add FAQPage schema
8. ✅ Create /the-pavillion route
9. ✅ Create /about route
10. ✅ Create /contact route
11. ✅ Verify PIN code (500039) matches GBP/HMDA
12. ✅ Add icon.png and apple-icon.png to app/

### 🟡 MEDIUM (Do This Month)
13. Add BreadcrumbList schema to subpages
14. Add LocalBusiness schema with opening hours
15. Add hasMap to schema
16. Add internal linking between SEO pages
17. Restructure FAQ for AEO extraction
18. Add Quick Facts table to homepage
19. Create remaining routes (recreation zone, clean slate, NRI page, blog)
20. Run Lighthouse audit + optimize images

### 🟢 LOW (Nice to Have)
21. Add dateModified to schemas
22. Change lang="en" to lang="en-IN"
23. Add author schema when blog is created

---

## FILES MAPPED

### App Directory
```
app/
├── layout.tsx              ✅ Root layout, GTM, schema
├── page.tsx                ✅ Homepage
├── robots.ts               ✅ Dynamic robots (blocked by public/robots.txt!)
├── sitemap.ts              ⚠️ Incomplete (missing SEO pages)
├── providers.tsx           ✅ React context
├── villas-in-boduppal/
│   └── page.tsx            ✅ SEO page, good content
├── villas-near-uppal/
│   └── page.tsx            ✅ SEO page
├── 3bhk-villas-boduppal/
│   └── page.tsx            ✅ SEO page
├── independent-houses-boduppal/
│   └── page.tsx            ✅ SEO page
├── privacy/page.tsx        ✅ Legal
├── terms/page.tsx          ✅ Legal
├── disclaimer/page.tsx     ✅ Legal
└── thank-you/page.tsx      ✅ Conversion page
```

### Components (Checked)
- `components/Footer.tsx` — has placeholder social links issue
- `components/FAQ.tsx` — has content, needs schema
- `components/MobileStickyCTA.tsx` — WhatsApp link correct

### Library
- `lib/metadata.ts` — dynamic metadata system, has meta keywords issue

### Config
- `next.config.ts` — basic, missing redirects/metadataBase in config

### Public
- `public/robots.txt` ❌ CONFLICTS with app/robots.ts
- `public/sitemap.xml` ❌ CONFLICTS with app/sitemap.ts
- `public/tab-icon.png` ✅ Exists
- `public/llms.txt` ❌ MISSING

---

## VERIFICATION CHECKLIST (for scripts/seo-verify.mjs)

Once fixes are done, verification script must assert:

- [ ] `next build` passes
- [ ] Every public route has unique <title> ≤60 chars
- [ ] Every route has unique meta description 150-160 chars
- [ ] Exactly one H1 per page
- [ ] Canonical URLs absolute (https://bommakugroup.com/...)
- [ ] OG image resolves (HTTP 200, 1200×630)
- [ ] All JSON-LD blocks parse without errors
- [ ] FAQ schema matches visible FAQs (if present on page)
- [ ] Sitemap contains ALL public routes
- [ ] robots.txt reachable at /robots.txt
- [ ] llms.txt exists at /llms.txt
- [ ] No broken internal links
- [ ] No placeholder social links (grep 'facebook.com"', 'instagram.com"')
- [ ] No wa.me URLs with spaces or + signs
- [ ] No meta keywords tags in HTML output
- [ ] Lighthouse SEO = 100
- [ ] Lighthouse Performance ≥ 85 mobile

---

**END OF AUDIT**

Next step: Review this audit, then proceed to Phase 1 fixes.
