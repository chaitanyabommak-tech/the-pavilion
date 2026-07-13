# TYPOGRAPHY SYSTEM V2 — TYPE AUDIT REPORT
**Project:** bommakugroup.com (The Pavilion)  
**Branch:** `feat/typography-v2-space-grotesk` (branched from `feat/brand-integration-v1`)  
**Audit Date:** 2026-07-13  
**Phase:** 1 — Type Audit (Read-Only)  
**Migration:** Cormorant Garamond + Inter → **Space Grotesk + Inter**

---

## A. CURRENT FONT MAP

### Fonts Loading via next/font (app/layout.tsx)

**File:** `app/layout.tsx` lines 2, 9-21, 34

```typescript
import { Cormorant_Garamond, Inter } from "next/font/google";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Applied to HTML:
<html className={`${cormorant.variable} ${inter.variable}`}>
```

### Font Variable Assignment (app/globals.css)

**Line 16-17:**
```css
--font-heading: var(--font-cormorant);
--font-body:    var(--font-inter);
```

### Current Usage Map

| Token | Family | Actual Font | Weights | Current Usage |
|---|---|---|---|---|
| `--font-cormorant` | Cormorant Garamond | **SERIF ❌** | 300-700 | H1, H2, stats, quotes |
| `--font-inter` | Inter | Sans-serif ✅ | 300-700 | Body, UI, forms |

---

## B. SERIF USAGE MAP — THE KILL LIST

### Total Serif References: **8 locations**

| File | Line | Code | Component/Usage |
|---|---|---|---|
| **app/layout.tsx** | 2 | `import { Cormorant_Garamond, Inter }` | Font import |
| **app/layout.tsx** | 9 | `const cormorant = Cormorant_Garamond({` | Font config |
| **app/layout.tsx** | 10 | `variable: "--font-cormorant",` | Variable name |
| **app/layout.tsx** | 34 | `className={${cormorant.variable} ${inter.variable}}` | HTML class |
| **app/globals.css** | 16 | `--font-heading: var(--font-cormorant);` | Token assignment |
| **app/globals.css** | 255 | `.font-heading { font-family: var(--font-cormorant), Georgia, serif; }` | Utility class |
| **app/globals.css** | 1240 | `font-family: var(--font-cormorant), Georgia, serif !important;` | Mobile override |
| **app/globals.css** | 2066 | `font-family: var(--font-cormorant), Georgia, serif !important;` | Another mobile override |

### Usage Breakdown

**Where Cormorant/serif currently renders:**

1. **Hero H1** — "The Pavillion" (line 109-114 in Hero.tsx)
2. **Hero H2 subline** — "Your parents dreamed..." (line 116-125)
3. **Section H2 headings** — Throughout site (Gallery, Floor Plans, Master Plan, etc.)
4. **Stats strip numerals** — ❌ **PRIORITY FIX** — "33", "G+1", "3 Ac.", "24K", "Bodu." (Hero.tsx line 284, class `font-stat`)
5. **Pull quotes / blockquotes** — Testimonials, feature highlights
6. **Step numbers** — "01", "02", "03" in Clean Slate section

### Classes Using Serif

```bash
grep -rn "font-heading\|font-stat\|font-cormorant" app components
```

| Class | Usage | Current Family |
|---|---|---|
| `.font-heading` | H1, H2, major headlines | Cormorant Garamond ❌ |
| `.font-stat` | Stats strip numerals, large numbers | **Inter 700** (currently sans but styled like serif) |

---

## C. EXTERNAL FONT SOURCES (non-next/font)

### Email Templates (Out of Scope — Internal Supabase Functions)

| File | Line | Code |
|---|---|---|
| `supabase-edge-function.ts` | 39, 60, 82 | `font-family: Georgia, serif` |
| `supabase/functions/send-lead-email/index.ts` | 30, 47, 65, 98 | `font-family:Georgia,serif` |

**Note:** These are email HTML templates (not rendered on the website). Out of scope for this migration.

### Performance Test Script

| File | Line | Code |
|---|---|---|
| `scripts/performance-test.js` | 143 | System fonts for test report |

**Note:** Test script only. Not rendered on live site.

---

## D. TAILWIND FONT UTILITIES IN USE

```bash
grep -rnoE "\bfont-(serif|sans|mono|display|body|heading|stat)[a-z-]*\b" app components
```

**Results:**

| Utility | Count | Files |
|---|---|---|
| `.font-heading` | 87 | Throughout app/, components/ |
| `.font-stat` | 12 | Hero stats, Recreation Zone stats |
| `.font-body` | 3 | Explicit body text |

---

## E. INLINE FONT STYLES

No inline `fontFamily` React styles found in TSX components. All typography routed through utility classes or CSS variables.

---

## F. ROUTE INVENTORY (23 routes)

All routes from previous audit maintained:

| Route | Type | Primary Content |
|---|---|---|
| `/` | Landing | Homepage (long-scroll Pavillion) |
| `/about` | Content | About Bommaku Group |
| `/contact` | Form | Contact + enquiry |
| `/thank-you` | Confirmation | Post-submission |
| `/privacy`, `/terms`, `/disclaimer` | Legal | Legal pages |
| `/the-pavillion` | Product | Project details |
| `/the-clean-slate` | Feature | Customization |
| `/bommaku-recreation-zone` | Feature | Amenities |
| 7 SEO landing pages | Landing | Villa marketing pages |
| `/blog` + 6 articles | Content | Blog |

**Total pages requiring font migration:** 23

---

## G. TEXT INVENTORY SUMMARY

### Priority Serif Elimination Targets

| Element | Current Font | Target Font | Location | Priority |
|---|---|---|---|---|
| **Stats strip numerals** | Cormorant via `.font-stat` | Space Grotesk 600 + `tnum` | Hero.tsx line 284 | 🔴 HIGH |
| Hero H1 | Cormorant | Space Grotesk 500 | Hero.tsx line 109 | 🔴 HIGH |
| Hero H2 subline | Cormorant | Space Grotesk 500 | Hero.tsx line 116 | 🔴 HIGH |
| Section H2s | Cormorant via `.font-heading` | Space Grotesk 500 | All sections | 🔴 HIGH |
| Pull quotes | Cormorant (assumed) | Space Grotesk 400 | Various | 🟡 MEDIUM |
| Clean Slate step numbers | Cormorant (if used) | Space Grotesk 600 | CleanSlate component | 🟡 MEDIUM |

### Component-by-Component Font Usage

| Component | Current Serif Usage | Current Sans Usage |
|---|---|---|
| **Navbar** | None | Inter (nav links, buttons) ✅ |
| **Hero** | H1, H2, stats (`.font-stat`) ❌ | Body copy (Inter) ✅ |
| **Stats Strip** | Numerals via `.font-heading` or `.font-stat` ❌ | Labels (Inter) ✅ |
| **Gallery** | Section H2 ❌ | Captions (Inter) ✅ |
| **Floor Plans** | Section H2, tab headers ❌ | Spec rows, body (Inter) ✅ |
| **Master Plan** | Section H2 ❌ | Body (Inter) ✅ |
| **Clean Slate** | H2, step numbers ❌ | Body copy, lists (Inter) ✅ |
| **East/West Facing** | Section H2s ❌ | Body (Inter) ✅ |
| **Recreation Zone** | H2, stat numerals ❌ | Amenity lists (Inter) ✅ |
| **Location** | H2 ❌ | Nearby table (Inter) ✅ |
| **FAQ** | Questions (likely Cormorant) ❌ | Answers (Inter) ✅ |
| **Contact** | H2 ❌ | Form, body (Inter) ✅ |
| **Footer** | Tagline italic (if Cormorant) ❌ | Meta, links (Inter) ✅ |

---

## H. HIDDEN STATE TEXT (Must Verify)

### Accordion/Tab Content

| Component | Hidden States | Current Font |
|---|---|---|
| **FAQ Accordion** | Collapsed answers (21+ questions) | Inter (answers), Cormorant? (questions) |
| **Floor Plan Tabs** | Type B, Type C tab panels | Mixed |
| **Mobile Menu** | Hamburger nav (if exists) | Inter |
| **Modals** | Floor plan modal, lead form modal | Mixed |
| **Tooltips** | "Tap to expand", form validation | Inter |

### Action Required

Must open all FAQ items, switch all floor plan tabs, and check mobile menu to verify no serif hiding in collapsed states.

---

## I. FONT FILE AUDIT (Before Migration)

### Expected Font Files Loading

Based on `next/font` configuration:

**Cormorant Garamond:**
- 300, 400, 500, 600, 700 (5 weights)
- Normal + italic (partial)
- Estimated: 6-8 font files

**Inter:**
- 300, 400, 500, 600, 700 (5 weights)
- Normal only
- Estimated: 5 font files

**Total:** ~11-13 font files currently loading

### Post-Migration Target

**Space Grotesk:**
- 400, 500, 600 (3 weights)
- Normal only
- Estimated: 3 font files

**Inter:**
- 400, 500, 600 (3 weights)
- Normal only
- Estimated: 3 font files

**Total:** ≤6 font files (per spec requirement)

---

## J. BASELINE SCREENSHOTS

**Status:** To be captured at Checkpoint 1 approval

**Required viewports:**
- Mobile: 390px
- Tablet: 768px  
- Desktop: 1280px
- Wide: 1536px

**Critical screens:**
- Homepage (full scroll)
- Hero + stats strip (zoomed)
- Floor plans (all tabs)
- FAQ (all items opened)
- Mobile menu (if exists)
- Legal pages

**Location:** `audit/screens/type-before/`

---

## K. SURPRISES & NOTES

### 1. Stats Already Using Sans-Serif

**Finding:** The `.font-stat` class (line 260 in globals.css) already uses:
```css
.font-stat {
  font-family: var(--font-inter), system-ui, sans-serif;
  font-weight: 700;
  letter-spacing: -0.03em;
}
```

**Implication:** Stats strip numerals are **already sans-serif** (Inter 700), not Cormorant! This simplifies migration — just need to:
1. Change to Space Grotesk 600
2. Apply `font-feature-settings: "tnum" 1` for tabular numerals
3. Update tracking to `--ls-tight` (-0.02em)

### 2. Mobile Overrides Use Serif

**Lines 1240, 2066** force Cormorant via `!important`:
```css
font-family: var(--font-cormorant), Georgia, serif !important;
```

These mobile overrides will need removal/replacement.

### 3. Branching from brand-integration-v1

This branch includes the brand audit work from the previous master prompt. If that work contains Cormorant + Montserrat documentation in `/brand-check`, it will need updating to reflect Space Grotesk + Inter per the supersession notice.

### 4. No /brand-check Page Exists Yet

The brand integration v1 branch does not appear to have created the `/brand-check` specimen page. Will need to create it fresh during Phase 2.

---

## L. MIGRATION STRATEGY SUMMARY

### Phase 2: Font Pipeline Swap
1. Replace `Cormorant_Garamond` import with `Space_Grotesk`
2. Rename variable `--font-cormorant` → `--font-display`  
3. Update `--font-heading` → `--font-display`
4. Keep Inter import, update variable to `--font-body`
5. Remove weights 300, 700 from both (keep 400, 500, 600)
6. Create `/brand-check` page

### Phase 3: Application Sweep
1. **Priority 1:** Stats strip → `.type-stat` (Space Grotesk 600 + `tnum`)
2. **Priority 2:** All H1/H2 → `.type-display` / `.type-h2` (Space Grotesk 500)
3. **Priority 3:** Section eyebrows → `.type-eyebrow` (Space Grotesk 500 UPPERCASE)
4. **Priority 4:** Buttons/nav → `.type-button` / `.type-nav` (Space Grotesk 500)
5. **Priority 5:** Pull quotes → Space Grotesk 400
6. Replace `.font-heading` class globally with `.type-display` or component-specific tokens

### Phase 4: Verification
1. Kill list grep → empty
2. Runtime audit → Space Grotesk + Inter only
3. Screenshots → no serif visible anywhere (especially stats)
4. Network panel → ≤6 font files
5. Content diff → byte-identical text

---

## M. BRANCH SITUATION

**Current branch:** `feat/typography-v2-space-grotesk`  
**Parent branch:** `feat/brand-integration-v1` (unmerged)  
**Status:** Branched from brand-integration-v1 per instructions

**Implication:** This migration includes any work from the brand integration branch. If that branch is later merged to main, this typography work will come along with it.

---

## SUMMARY FOR CHECKPOINT 1

### Current State
- ✅ **Fonts loading:** Cormorant Garamond (5 weights) + Inter (5 weights) = ~11-13 files
- ❌ **Serif usage:** 8 references to Cormorant across layout + globals.css
- ❌ **Priority target:** Stats strip, H1/H2, section headings using Cormorant
- ⚠️ **Surprise:** Stats numerals already using Inter 700 (easy to migrate to Space Grotesk 600)

### Migration Scope
- **23 routes** requiring font changes
- **87 uses** of `.font-heading` class to replace
- **12 uses** of `.font-stat` class to update
- **2 mobile overrides** with `!important` to remove

### Post-Migration Target
- ✅ **Space Grotesk** (400, 500, 600) for display, headings, stats, UI
- ✅ **Inter** (400, 500, 600) for body, supporting text
- ✅ **≤6 font files** total
- ✅ **Zero serif** anywhere on site

### Kill List Count
**8 serif references** across 2 files (app/layout.tsx, app/globals.css)

### No Surprises
- Email templates use Georgia (out of scope — internal only)
- No third-party fonts loaded
- No inline font styles to clean up
- Tailwind utilities limited to `.font-heading`, `.font-stat`, `.font-body`

---

**CHECKPOINT 1 STATUS: READY FOR REVIEW**

Awaiting: `APPROVED — CONTINUE` before proceeding to Phase 2 (Font Pipeline Swap)
