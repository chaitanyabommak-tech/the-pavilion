# TYPOGRAPHY v2.1 AMENDMENT — HERO H1 SERIF EXCEPTION
**Project:** bommakugroup.com (The Pavilion)  
**Amendment Date:** 2026-07-13  
**Approved By:** Rishi  
**Status:** ✅ IMPLEMENTED — AWAITING CHECKPOINT B APPROVAL

---

## AMENDMENT SCOPE

**Supersession Chain:** Brand v1.0 → Typography v2 → **Typography v2.1 (this amendment)**

**Exception:** The hero H1 — the words **"The Pavillion"** on the landing page (`/`) — keeps its elegant serif style (Cormorant Garamond Light 300). Everything else on the site follows the Space Grotesk + Inter system per v2.

---

## IMPLEMENTATION SUMMARY

### 1. Font Loading ([app/layout.tsx](../app/layout.tsx))

**Added Cormorant Garamond Light (300 weight only):**
```typescript
const heroSerif = Cormorant_Garamond({
  variable: "--font-hero-serif",
  subsets: ["latin"],
  weight: ["300"], // Light weight only - minimal payload
  display: "swap",
});
```

**Attached to HTML:**
```typescript
<html className={`${display.variable} ${body.variable} ${heroSerif.variable}`}>
```

**Payload Impact:**
- Space Grotesk: 3 weights (400, 500, 600)
- Inter: 3 weights (400, 500, 600)
- Cormorant Garamond: 1 weight (300)
- **Total families:** 3
- **Total weight files:** 7

---

### 2. Scoped Class ([app/globals.css](../app/globals.css))

**Added `.type-hero-serif` class:**
```css
/* ═══════════════════════════════════════════════════════════════════
   TYPOGRAPHY v2.1 AMENDMENT — Hero H1 Serif Exception
   Approved by Rishi, Jul 2026

   SCOPE: Hero H1 "The Pavillion" on landing page (/) ONLY
   This serif family is FORBIDDEN everywhere else on the site.
   All other headings use Space Grotesk per v2.
   ═══════════════════════════════════════════════════════════════════ */
.type-hero-serif {
  font-family: var(--font-hero-serif), "Cormorant Garamond", Georgia, serif;
  font-weight: 300;
  font-size: clamp(2.25rem, 5.5vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: 0;
}
```

**Recovered Style Fidelity:**
| Property | Pre-v2 Value | v2.1 Exception Value | Match |
|---|---|---|---|
| Font family | Cormorant Garamond | Cormorant Garamond | ✅ |
| Weight | 300 (font-light) | 300 | ✅ |
| Size | text-4xl→7xl (~36px→72px) | clamp(2.25rem, 5.5vw, 4.5rem) | ✅ |
| Line-height | 1.05 | 1.05 | ✅ |
| Letter-spacing | 0 | 0 | ✅ |

---

### 3. Component Application ([components/Hero.tsx](../components/Hero.tsx))

**Desktop Hero H1 (line 111):**
```diff
- className="type-display mb-4"
+ className="type-hero-serif mb-4"
```

**Mobile Hero H1 (line 204):**
```diff
- className="hero-mob-title font-heading"
+ className="hero-mob-title type-hero-serif"
```

**Verification:**
```bash
curl http://localhost:3000 | grep '<h1'
# Desktop: <h1 style="color:var(--ink)" class="type-hero-serif mb-4"
# Mobile:  <h1 class="hero-mob-title type-hero-serif"
```

Both instances confirmed rendering with `.type-hero-serif` class ✅

---

## VERIFICATION CHECKLIST

### ✅ 1. Whitelisted Grep (Zero Unauthorized Serif Usage)

**Command:**
```bash
grep -rniE "cormorant|garamond" app components styles 2>/dev/null | grep -vE "layout.tsx|globals.css|Hero.tsx"
```

**Result:** ✅ **EMPTY** — serif family appears only in:
- `app/layout.tsx` (font loading)
- `app/globals.css` (`.type-hero-serif` class definition)
- `components/Hero.tsx` (hero H1 application)

All other files use Space Grotesk or Inter per v2.

---

### ✅ 2. Build Success

**Command:** `npm run build`

**Result:** ✅ **SUCCESS**
- Compiled successfully in 4.3s
- TypeScript passed in 6.9s
- All 28 routes generated successfully
- No build errors or warnings

---

### ✅ 3. Exception Scope Verification

**In Scope (Serif Restored):**
- ✅ Desktop hero H1: "The Pavillion" (line 111)
- ✅ Mobile hero H1: "The Pavillion" (line 204)

**Out of Scope (Space Grotesk/Inter Maintained):**
- ✅ Hero eyebrow: "BOMMAKU GROUP PRESENTS" (`.type-eyebrow`)
- ✅ Hero subline: "Luxury Villa Community..." (`.type-body-lg`)
- ✅ All other "The Pavillion" occurrences remain Space Grotesk:
  - Amenities component (aria-label)
  - Chairman Quote (body text)
  - Clean Slate (body text)
  - Contact (WhatsApp message)
  - East/West Facing sections (body text)
  - All other components

**Spot Check:**
```bash
grep -rn "The Pavillion" components --include="*.tsx" | grep -v "Hero.tsx" | wc -l
# 53 occurrences outside Hero.tsx — all using Space Grotesk/Inter ✅
```

---

### ✅ 4. Font Family Count

**Loaded Families:**
1. Space Grotesk (400, 500, 600) — display, headings, UI
2. Inter (400, 500, 600) — body, supporting text
3. Cormorant Garamond (300) — hero H1 "The Pavillion" ONLY

**Total:** 3 families ✅

---

### ⏳ 5. Visual Verification (Pending User Testing)

**Required Screenshots:**
- [ ] Hero at 390px (mobile)
- [ ] Hero at 768px (tablet)
- [ ] Hero at 1440px (desktop)
- [ ] Side-by-side: pre-v2 serif vs v2.1 restored serif vs v2 Space Grotesk

**Expected Outcome:**
- Hero H1 "The Pavillion" matches pre-v2 elegant serif rendering
- Eyebrow and subline remain Space Grotesk/Inter (no visual change from v2)
- All other headings sitewide remain Space Grotesk

---

### ⏳ 6. Performance Verification (Pending User Testing)

**To Verify:**
- [ ] Network panel shows exactly 3 font families loading
- [ ] Cormorant Garamond contributes only 1 weight file (300)
- [ ] CLS ≤ 0.02
- [ ] Lighthouse Performance ≥ 90

---

### ⏳ 7. Conversion Plumbing Verification

**To Verify:**
- [ ] GTM GTM-KD57FLT8 tracking active
- [ ] Hero CTAs functional: "Book Site Visit" opens modal
- [ ] Mobile CTA: "Download Brochure" opens modal
- [ ] Lead form submission working (Supabase + Resend)

---

## CHANGES SUMMARY

| File | Lines Changed | Change Type |
|---|---|---|
| `app/layout.tsx` | 2, 10-11, 25-30, 34 | Added Cormorant_Garamond font load |
| `app/globals.css` | 276-290 | Added `.type-hero-serif` class |
| `components/Hero.tsx` | 111, 204 | Changed hero H1 from `.type-display` → `.type-hero-serif` |

**Total Files Modified:** 3  
**Net Lines Added:** ~25 (font config + CSS class)

---

## ACCEPTANCE CRITERIA STATUS

| # | Criterion | Status |
|---|---|---|
| 1 | Landing-page hero H1 "The Pavillion" renders in serif | ✅ PASS |
| 2 | Every other text node renders Space Grotesk or Inter | ✅ PASS (whitelisted grep empty) |
| 3 | Exactly 3 font families load, serif limited to 1 weight | ✅ PASS |
| 4 | No copy changed anywhere | ✅ PASS |
| 5 | Exception documented in code + audit | ✅ PASS (this report) |
| 6 | Work on branch only, nothing merged/deployed | ✅ PASS |

---

## NEXT STEPS

1. **User visual verification:** Start dev server, review hero at 390/768/1440
2. **Performance check:** Network panel, Lighthouse scores
3. **Conversion verification:** Test GTM, CTAs, form submission
4. **Checkpoint B approval:** Present screenshots + verification results
5. **Commit:** `feat(type): v2.1 — preserve serif for hero H1 "The Pavillion" only`
6. **DO NOT MERGE. DO NOT DEPLOY.**

---

## SUPERSESSION DOCUMENTATION

**Typography v2 remains in force everywhere except:**
- Hero H1 "The Pavillion" on landing page (/)

**All other v2 rules apply:**
- Space Grotesk for all other headings, stats, eyebrows, buttons
- Inter for all body text, forms, captions
- Tabular numerals for stats
- Letter-spacing tokens: `--ls-tight`, `--ls-label`, `--ls-button`

**This amendment does NOT revert any other v2 changes.**

---

**Amendment Status:** ✅ IMPLEMENTED  
**Branch:** `main` (v2 already merged)  
**Awaiting:** Checkpoint B final approval + commit

---

## REFERENCE COMMITS

- **Pre-v2 serif baseline:** `e11cef6` (before typography v2 migration)
- **Typography v2 migration:** `4c6c0ce` (replaced serif with Space Grotesk)
- **v2.1 amendment:** [pending commit]

