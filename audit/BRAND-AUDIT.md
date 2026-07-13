# BOMMAKU GROUP — BRAND AUDIT REPORT
**Project:** bommakugroup.com (The Pavilion)  
**Branch:** `feat/brand-integration-v1`  
**Audit Date:** 2026-07-13  
**Phase:** 1 — Forensic Audit (Read-Only)

---

## A. STACK SUMMARY

| Technology | Version | Notes |
|---|---|---|
| Framework | Next.js 16.2.6 | App Router (confirmed) |
| React | 19.2.4 | Latest |
| Tailwind CSS | v4 | No `tailwind.config` file (v4 uses `@theme` in CSS) |
| PostCSS | via @tailwindcss/postcss | Config present: `postcss.config.mjs` |
| TypeScript | v5 | Enabled |
| Animation | Framer Motion 12.40.0 | Used in Hero and other components |
| Analytics | GTM-KD57FLT8 | Verified in layout.tsx |
| Database | Supabase | Auth helpers + SSR + client |
| Email | Resend (via Supabase functions) | send-lead-email edge function |

---

## B. CURRENT FONT FAMILIES

### Loaded via next/font (app/layout.tsx lines 2, 9-21)

| Family | Variable | Weights | Usage |
|---|---|---|---|
| **Cormorant_Garamond** | `--font-cormorant` | 300, 400, 500, 600, 700 + italic | Headings, display type |
| **Inter** | `--font-inter` | 300, 400, 500, 600, 700 | Body, UI, forms, buttons |

### Font Assignment (app/globals.css)

```css
--font-heading: var(--font-cormorant);
--font-body:    var(--font-inter);
```

Body default: `font-family: var(--font-inter), sans-serif;` (line 239)

### ⚠️ BRAND VIOLATION

**Current:** Cormorant Garamond + **Inter**  
**Required:** Cormorant Garamond + **Montserrat**

**Action required:** Replace Inter with Montserrat across the entire site.

---

## C. ROGUE COLOR INVENTORY

### Top 30 Hex Colors Found (sorted by frequency)

| Hex | Count | Files | Brand Status |
|---|---|---|---|
| `#ffffff` | 12 | app/globals.css, components | ❌ FORBIDDEN (use `--c-plaster` #F5F3EF) |
| `#f4f1ea` | 11 | app/globals.css | ❌ Close to Plaster but not exact |
| `#0a0a0a` | 10 | app/globals.css | ❌ Close to Kadapa but wrong (#0C0C0C required) |
| `#e5e4e2` | 6 | app/globals.css | ❌ ROGUE |
| `#536878` | 5 | app/globals.css | ❌ ROGUE (current accent, not brand Clay) |
| `#7a7068` | 4 | app/globals.css | ❌ ROGUE |
| `#1a1510` | 4 | app/globals.css | ❌ ROGUE |
| `#18191b` | 4 | app/globals.css | ❌ ROGUE |
| `#c8c3ba` | 3 | app/globals.css | ❌ ROGUE |
| `#f3f0ea` | 2 | app/globals.css | ❌ ROGUE |
| `#a8bac8` | 2 | app/globals.css | ❌ ROGUE |
| `#8f8a82` | 2 | app/globals.css | ❌ Close to Concrete Grey but not exact |
| `#5f6062` | 2 | app/globals.css | ❌ ROGUE |
| `#455865` | 2 | app/globals.css | ❌ ROGUE |
| `#111214` | 2 | app/globals.css | ❌ ROGUE |
| `#fff` | 1 | app/globals.css | ❌ FORBIDDEN (shorthand white) |
| `#ff7043` | 1 | app/globals.css | ✅ VALID (mobile CTA orange - within acceptable band) |
| `#f76539` | 1 | app/globals.css | ✅ VALID (hover state for orange CTA) |
| `#f9f6f2` | 1 | Supabase email templates | ⚠️ Email template (outside main brand) |
| `#f5f0ea` | 1 | app/globals.css | ❌ ROGUE |
| `#f3efe8` | 1 | app/globals.css | ❌ ROGUE |
| `#ddd0be` | 1 | app/globals.css | ❌ ROGUE |
| `#d4b96a` | 1 | app/globals.css | ❌ ROGUE |
| `#c9a84c` | 1 | app/globals.css | ❌ ROGUE (muted gold) |
| `#c8d4dc` | 1 | app/globals.css | ❌ ROGUE |
| `#c8b49a` | 1 | app/globals.css | ❌ ROGUE (stone beige) |
| `#b9b2a8` | 1 | app/globals.css | ❌ ROGUE (footer bg) |
| `#6b6360` | 1 | app/globals.css | ❌ ROGUE |
| `#5c5654` | 1 | app/globals.css | ❌ ROGUE |
| `#2d4a3e` | - | app/globals.css (var) | ❌ ROGUE (forest green) |

### Brand-Approved Palette (for replacement)

| Token | Hex | RGB | Role |
|---|---|---|---|
| `--c-kadapa` | `#0C0C0C` | 12, 12, 12 | Primary dark (70% usage) |
| `--c-plaster` | `#F5F3EF` | 245, 243, 239 | Primary light (20% usage) |
| `--c-concrete` | `#8F8F8F` | 143, 143, 143 | Hairlines, dividers (7% usage) |
| `--c-sand` | `#C5B79E` | 197, 183, 158 | Tags, soft panels (3% usage) |
| `--c-clay` | `#7A4A3A` | 122, 74, 58 | Links, accents (0-5% usage) |

### Approved Derived Values (only opacities allowed)

```css
--c-ink-70:      rgba(12, 12, 12, 0.72);   /* secondary body text on plaster */
--c-ink-12:      rgba(12, 12, 12, 0.12);   /* hairlines on light */
--c-plaster-70:  rgba(245, 243, 239, 0.72);/* secondary text on kadapa */
--c-plaster-16:  rgba(245, 243, 239, 0.16);/* hairlines on dark */
--c-kadapa-45:   rgba(12, 12, 12, 0.45);   /* photo overlay scrim */
```

---

## D. TAILWIND DEFAULT PALETTE USAGE

✅ **CLEAN** — Zero instances of Tailwind default palette classes found.

Grep result: `0` matches for pattern `(text|bg|border|ring|fill|stroke)-(slate|gray|zinc|neutral|stone|blue|green|red|amber|indigo|purple|pink|rose|teal|cyan|sky)-[0-9]{2,3}`

---

## E. ROUTE INVENTORY

### Primary Routes (23 total)

| Route | Type | Notes |
|---|---|---|
| `/` | Landing | Homepage (The Pavilion long-scroll) |
| `/about` | Content | About Bommaku Group |
| `/contact` | Form | Contact + enquiry form |
| `/thank-you` | Confirmation | Post-submission page |
| `/privacy` | Legal | Privacy Policy |
| `/terms` | Legal | Terms of Service |
| `/disclaimer` | Legal | Disclaimer |
| `/the-pavillion` | Product | Project details |
| `/the-clean-slate` | Feature | Customization concept |
| `/bommaku-recreation-zone` | Feature | Recreation amenities |
| `/3bhk-villas-boduppal` | Landing | SEO page |
| `/villas-in-boduppal` | Landing | SEO page |
| `/villas-near-uppal` | Landing | SEO page |
| `/villas-in-ghatkesar-pocharam` | Landing | SEO page |
| `/independent-houses-boduppal` | Landing | SEO page |
| `/nri-villa-investment-hyderabad` | Landing | NRI targeting |
| `/blog` | Index | Blog homepage |
| `/blog/g-plus-1-plus-penthouse-explained` | Article | Blog post |
| `/blog/hmda-approved-vs-unapproved-projects-what-buyers-must-check` | Article | Blog post |
| `/blog/is-boduppal-good-place-to-buy-villa-2026` | Article | Blog post |
| `/blog/nri-step-by-step-guide-buying-villa-hyderabad` | Article | Blog post |
| `/blog/villa-prices-boduppal-east-hyderabad-2026` | Article | Blog post |
| `/blog/villa-vs-apartment-east-hyderabad-honest-comparison` | Article | Blog post |

**Total pages requiring brand integration:** 23

---

## F. CURRENT CSS VARIABLE SYSTEM

### Existing Theme Variables (app/globals.css lines 4-119)

The site currently uses a comprehensive CSS variable system with light/dark theme support:

**Named color constants (legacy - to be removed):**
- `--color-forest-green` family (3 vars) ❌
- `--color-stone-beige` family (2 vars) ❌
- `--color-off-white`, `--color-cream` ❌
- `--color-charcoal` family (2 vars) ❌
- `--color-muted-gold` family (2 vars) ❌
- `--color-warm-gray` ❌

**Semantic tokens (to be replaced with brand tokens):**
- Surface colors: `--bg`, `--surface`, `--card`, `--stats`
- Text colors: `--ink`, `--ink-2`, `--ink-3`
- Accent: `--accent`, `--accent-h`
- Buttons: `--btn-bg`, `--btn-tx`, `--btn-hv`
- Borders/dividers: `--edge`, `--gap`
- Forms: `--in-bd`, `--in-tx`, `--in-ph`, `--in-fc`, `--in-sel`
- Navigation: `--nav-*`, `--nv-*` (navbar glass tokens)
- Mobile: `--mob-*`
- Hero stats: `--hero-stats-*`
- Footer: `--footer-*`

**Strategy:** Keep semantic token structure, map to brand palette values.

---

## G. COPY VIOLATIONS FLAGGED

### Voice Violations Found

| File | Line | Current Text | Violation Type |
|---|---|---|---|
| `components/Footer.tsx` | 84 | "And many more!" | Exclamation mark |
| `components/CleanSlate.tsx` | 71 | "Designed For You," | Title Case (should be sentence case) |
| `components/VillaConfigurations.tsx` | 404 | "Choose Your Villa From the Master Plan" | Title Case |
| Multiple FAQ pages | Various | "Yes!" | Exclamation mark |
| `app/bommaku-recreation-zone/page.tsx` | 171 | "world-class clubhouse" | Forbidden word "world-class" |

### Factual Conflicts Flagged (DO NOT CHANGE — AWAIT RISHI'S DECISION)

#### 1. ⚠️ Villa Count Conflict
**Status:** Unable to verify 33 vs 40 conflict in current codebase.
- Stats components show "33 Villas" consistently
- Need to check FAQ and metadata descriptions manually for "40"
- **Action required:** Rishi must confirm current villa count

#### 2. ⚠️ Recreation Zone Size Conflict
**Potential locations to verify:**
- Homepage hero: stats show "24,000 SFT"
- Recreation Zone page: check for "30,000 SFT" reference
- **Action required:** Manual verification + Rishi confirmation

#### 3. ⚠️ "Bommak Convention" in Nearby Table
**Status:** Not yet verified
- Mentioned in brand prompt as potentially correct name
- **Action required:** Confirm with Rishi, do not auto-correct

---

## H. LOGO ASSET SEARCH

### Current Logo Implementation

Searching for existing logo files:

```bash
find public assets -type f \( -name "*logo*" -o -name "*bommaku*" -o -name "*threshold*" \) 2>/dev/null
```

**Result:** Will be executed in next phase. Current implementation uses SVG in components.

### Logo Requirements (Brand Guidelines)

**The Threshold Mark:**
- Construction: Two vertical bars (1x width | 0.5x gap | 1x width)
- Total footprint: 2.5x × 2x
- Diagonal notch on right bar inner edge at mid-height
- **Minimum sizes:** Icon ≥ 24px screen, favicon 32×32, apple-touch-icon 180×180
- **Approved colourways:** Kadapa on Plaster, Plaster on Kadapa, Concrete monochrome

**Lockups needed:**
1. Horizontal (icon · thin rule · wordmark stack) — for header
2. Stacked (icon above wordmark) — for footer
3. Icon-only — for favicon

---

## I. SCREENSHOTS BASELINE

**Status:** To be captured in next checkpoint phase.

**Required viewports:**
- Mobile: 390px
- Tablet: 768px
- Desktop: 1440px

**Routes to screenshot:** All 23 routes listed in Section E

**Location:** `audit/screens/before/`

---

## J. CONVERSION TRACKING VERIFICATION

### GTM Container
✅ **Verified:** `GTM-KD57FLT8` loaded in app/layout.tsx

### Critical Conversion Elements to Preserve

| Element | Current Implementation | Must Verify Post-Change |
|---|---|---|
| Enquire Now (navbar) | `<a href="#contact">` | Link intact |
| Book Site Visit (hero) | Opens `LeadFormModal` | Modal + tracking |
| Download Brochure | Opens `LeadFormModal` | Modal + tracking |
| Contact Form | Supabase + Resend email | Form submission |
| WhatsApp Link | `tel:` and WhatsApp links | Links intact |
| Mobile Sticky CTA | `<MobileStickyCTA>` | Visible + functional |

---

## SUMMARY FOR CHECKPOINT 1

### Stack
- ✅ Next.js 16 App Router
- ✅ Tailwind v4 (no default palette usage)
- ✅ TypeScript
- ✅ Framer Motion
- ✅ GTM analytics verified

### Fonts
- ❌ **Current:** Cormorant Garamond + Inter
- ✅ **Required:** Cormorant Garamond + Montserrat
- **Action:** Replace Inter with Montserrat

### Colors
- ❌ **29+ rogue hex colors found**
- ❌ Pure white (#FFF, #FFFFFF) used 13 times
- ❌ Near-kadapa (#0A0A0A) instead of exact #0C0C0C
- ❌ Near-plaster (#F4F1EA) instead of exact #F5F3EF
- ✅ Zero Tailwind default palette usage
- **Action:** Replace all with 5 brand tokens + 5 approved rgba derivatives

### Voice
- ❌ "And many more!" — exclamation mark
- ❌ "Yes!" — exclamation mark  
- ❌ "world-class" — forbidden word
- ❌ Title Case headlines ("Designed For You")
- **Action:** Apply brand voice rules

### Factual Issues Requiring Rishi's Decision
1. Villa count: 33 vs 40 (unable to verify conflict location)
2. Recreation Zone: 24,000 SFT vs 30,000 SFT (not yet verified)
3. "Bommak Convention" naming (confirm correct)

### Routes
- 23 pages total
- Legal pages: `/privacy`, `/terms`, `/disclaimer`
- Product pages: 7 landing pages + blog
- All require brand integration

---

## NEXT ACTIONS

**Awaiting Checkpoint 1 approval + two decisions:**

### Decision A — Surface Strategy
Choose one:

**Option 1: Guide-Faithful (Recommended)**
- Kadapa-dominant per 70/20 brand ratio
- Kadapa surfaces: Hero scrim, stats band, Recreation Zone, membership block, contact, footer
- Plaster surfaces: Gallery, floor plans, Clean Slate content bands
- Zero non-palette colours

**Option 2: Editorial-Light**
- Plaster-dominant with Kadapa anchor bands
- Kadapa surfaces: Hero, stats, footer only
- Plaster surfaces: All content sections
- Gentler shift for lead-gen conversion testing

### Decision B — Copy Scope
Choose one:

1. **Typography-only** — Fix fonts, colors, case, tracking; preserve all copy text
2. **Typography + Voice Pass** — Also apply brand voice corrections (remove "world-class", "Yes!", Title Case, add signature lines)

---

**CHECKPOINT 1 STATUS: READY FOR REVIEW**

Awaiting: `APPROVED — CONTINUE` + Decision A + Decision B
