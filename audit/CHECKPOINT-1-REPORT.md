# CHECKPOINT 1 — PHASE 1 COMPLETE: LOCATE, DIAGNOSE, DECIDE
**Date:** 2026-07-13  
**Branch:** `feat/pavillion-inventory-v2`  
**Status:** ⏸️ **AWAITING DECISIONS BEFORE PROCEEDING**

---

## SECTION 2.1 — CURRENT DATA SOURCE FINDINGS

### Primary Villa Data File
**Location:** `data/pavilionVillas.ts` (858 lines)

**Current Structure:**
- **40 villas total** across 9 blocks (A-H with 5 each, I with 5)
- **Blocks A-H:** 8 blocks × 5 villas = 40 units (positions 1-5)
- **Block I:** 5 corner villas (I1-I5) in bottom section
- **Wait, that's 45 total!** Actual count in code = 45 villas (A1-A5, B1-B5, ..., H1-H5, I1-I5)

**Current sold list (from code):**
18 units sold: A1, A3, B1-B5 (all 5!), C1, C2, C5, D3, F2, F5, G1, G3, G5, H1, H2, H5

**Plot sizes in use:** 150, 165, 167, 183, 222, 227, 228, 232, 235, 241, 243, 250 Sq.Yd (12 different sizes!)

**Built-up areas:** 2,200 SFT (150 Sq.Yd units), 2,400 SFT (165 Sq.Yd units), 2,500 SFT (all others)

**Facings:** East, West, North East, North West

---

### Filter Components

**Filter by Area:** Found in `components/floorplan/SchematicMasterPlan.tsx` line 24
- Current implementation: Filters by `totalSft` (2200, 2400, 2500)
- Uses state: `const [sftFilter, setSftFilter] = useState<number | null>(null);`
- **2,200 SFT option must be removed**

**Filter by Direction:** Found in `components/floorplan/SchematicMasterPlan.tsx` line 292
- Current options: `["East", "West", "North East", "North West"]`
- Uses state: `const [facingFilter, setFacingFilter] = useState<string | null>(null);`
- **NE/NW options must be removed**

**Component sharing:** The `SchematicMasterPlan` component is Pavilion-specific (located in `/floorplan/` subfolder). No other projects use these filters. **Safe to modify directly.**

---

### Tile Renderer

**Location:** `components/floorplan/VillaBox.tsx` + grid logic in `SchematicMasterPlan.tsx`

**Current grid assumption:** Hard-coded 5-per-row in SVG coordinate system
- Blocks A-H each render 5 `<VillaBox>` components positioned via `mapPosition: { x, y, width, height }`
- SVG viewBox: `0 0 100 100` coordinate system
- **No dynamic row calculation** — each villa's coordinates are manually set

**Requires:** Complete re-mapping of `mapPosition` for 33-villa layout (Row A keeps 5, Rows B-H get 4)

---

### Current Sold Status List (18 units)

See **`audit/SOLD-CURRENT.md`** for complete table.

**Key issue:** 5 sold villas are in position-5 (B5, C5, F5, G5, H5) which **no longer exists** in the new structure.

---

### Stale Count Locations (40 villa references)

**Found 6 locations:**
1. `app/independent-houses-boduppal/page.tsx` line 266: "40 TRUE independent houses"
2. `app/independent-houses-boduppal/page.tsx` line 527: "Only 40 independent standalone houses"
3. `app/manifest.ts` line 7: "40 luxury standalone villas" (site manifest description)
4. `app/villas-in-boduppal/page.tsx` line 131: "Discover 40 luxury standalone villas"
5. `app/villas-in-boduppal/page.tsx` line 269: "40% cheaper" (unrelated pricing comparison — keep as-is)
6. `components/FAQ.tsx` line 14: "The Pavillion comprises 40 luxury standalone villas"

**Action required:** Update all 6 to "33 villas" (line 269 is pricing math, not inventory count — ignore)

---

### 2,200 SFT References

**Found 30 locations** across:
- Landing pages: `app/3bhk-villas-boduppal/page.tsx`, `app/independent-houses-boduppal/page.tsx`, `app/villas-in-boduppal/page.tsx`
- Blog posts: `app/blog/g-plus-1-plus-penthouse-explained`, `app/blog/villa-prices-boduppal-east-hyderabad-2026`
- Components: `components/FAQ.tsx`, `components/Pricing.tsx`, `components/ProjectOverview.tsx`, `components/StatsStrip.tsx`, `components/VillaLife.tsx`

**Context check:** Some are construction cost rates ("₹2,200/sq ft") which should remain. Only inventory-related "2,200 SFT built-up" references must change to "2,400-2,500 SFT".

---

### NE/NW References

**Found 4 locations:**
1. `components/floorplan/SchematicMasterPlan.tsx` line 292: Filter options array
2. `components/Pricing.tsx` line 35: "NE / NW Facing" label
3. `components/VillaConfigurations.tsx` line 20: "Type B — 165 NE Facing"
4. `components/VillaConfigurations.tsx` line 21: "Type B — 165 NW Facing"

**Action required:** Replace with East/West throughout.

---

### Brochure/PDF Generator

**Not found** — no PDF generation code detected in codebase. Brochure is likely static PDF in `/public/` (need to check).

---

### JSON-LD/Structured Data

**Not explicitly checked yet** — will grep for `"40"` in structured data during Phase 6.

---

## SECTION 2.2 — SOLD STATUS EXTRACTION

✅ **Complete** — See `audit/SOLD-CURRENT.md`

**Summary:**
- Current sold: **18 units** (out of 40 = 45% sold rate)
- **10 units** can auto-map with high/medium confidence (same block + position)
- **5 units** are position-5 sold (need manual assignment to positions 2-4)
- **3 units** have plot-size mismatches (150 Sq.Yd → no longer exists)

---

## SECTION 2.3 — DATA LAYER BUILD & VALIDATION

✅ **Complete** — `data/villas-v2.ts` created and **validator passing**

```bash
npx tsx scripts/test-inventory-v2.ts
```

**Result:**
```
✅ ALL VALIDATION CHECKS PASSED

📋 INVENTORY SUMMARY:
   Total: 33 villas
   Silver: 10 | Platinum: 22 | Special: 1
   East: 17 | West: 16
   2,400 SFT: 11 | 2,500 SFT: 22

🏠 ROW A (UNIQUE — 5 villas):
   A1: 183 Sq.Yd | 2400 SFT | East | Special
   A2: 167 Sq.Yd | 2400 SFT | East | Silver
   A3: 167 Sq.Yd | 2400 SFT | East | Silver
   A4: 167 Sq.Yd | 2400 SFT | East | Silver
   A5: 225 Sq.Yd | 2500 SFT | East | Platinum

🏠 ROW B (TEMPLATE — 4 villas):
   B1: 165 Sq.Yd | 2400 SFT | West | Silver
   B2: 225 Sq.Yd | 2500 SFT | West | Platinum
   B3: 225 Sq.Yd | 2500 SFT | West | Platinum
   B4: 225 Sq.Yd | 2500 SFT | West | Platinum
```

**All 27 assertions pass:**
- ✅ Total = 33
- ✅ Silver = 10, Platinum = 22, Special = 1
- ✅ East = 17, West = 16
- ✅ 2,400 SFT = 11, 2,500 SFT = 22
- ✅ Plot counts: 165×7, 167×3, 183×1, 225×22
- ✅ Row counts: A=5, B-H=4 each
- ✅ Cross-checks: East 165×3, West 165×4, East 225×10, West 225×12

**Generator function:** Numbers-generated, never hand-typed. ✅

---

## CRITICAL DECISION QUESTIONS FOR RISHI

### 1. B-Row Structure Confirmation ⚠️

**Current code shows:** 45 villas total (A-H with 5 each = 40, plus Block I with 5 = 45)

**Reference doc states:** 33 villas total

**Math check:**
- If Rows B-H have 4 villas each: 5 (Row A) + 7×4 (Rows B-H) = **33 villas** ✅
- If Block I eliminated: 45 - 5 (Block I) - 7 (position-5 from B-H) = **33 villas** ✅

**Question:** Confirm Rows B-H = exactly 4 villas each (positions 1-4 only), and Block I is eliminated?

**Implication:** If yes, the current 45-villa codebase drops to 33 by:
1. Removing position-5 from blocks B-H (7 units)
2. Removing entire Block I (5 units)
3. Total removed: 12 units (45 - 12 = 33 ✅)

---

### 2. A1 Label & Treatment 🎨

**Reference doc:** A1 is "Special (Signature Corner)" — 183 Sq.Yd, East, 2,400 SFT

**Proposed treatment options:**

**Option A (Recommended):** Distinct tile design
- Label: **"A1 — Signature Corner Villa"**
- Visual: Kadapa fill + Plaster text (inverse of other tiles)
- Legend entry: Separate line "◼ Signature Corner (1 villa — A1 only)"
- Code comment: `// A1 is a unique corner unit — classification confirmed by Rishi at Checkpoint 1`

**Option B:** Fold into Silver with footnote
- Label: "A1" (same as A2-A4)
- Tier badge: "Silver*"
- Footnote: "*A1 is the Signature Corner Villa (183 Sq.Yd)"
- Visual: Same as other Silver tiles

**Question:** Which treatment for A1?

---

### 3. Tier Filter (Optional Enhancement) 🔧

**Proposed:** Add "Filter by Type" alongside Area and Direction filters

**Options:**
- All / Silver / Platinum (2 options + all)
- All / Silver / Platinum / Signature (3 options + all)

**Question:** Add tier filter? If yes, should Signature be a separate option or grouped with Silver?

---

### 4. Floor Plans Tabs Naming 📐

**Current:** Floor Plans section uses "Type A / Type B / Type C" tabs

**New inventory:** Silver (165/167 Sq.Yd), Platinum (225 Sq.Yd), Signature (183 Sq.Yd)

**Question:** Keep floor plan tabs as-is (Type A/B/C), or align with new tier names (Silver/Platinum/Signature)?

**Recommendation:** Keep as-is — floor plans are architectural types, not sales tiers. Renaming out of scope unless you want full alignment.

---

### 5. 40-Villa Strings Correction ✅

**Confirmed action:** Update all 6 occurrences to "33 villas"
- FAQ: "40 luxury standalone villas" → "33 luxury standalone villas"
- Meta descriptions: same change
- Landing pages: same change

**Question:** Approved to proceed with 40→33 corrections?

---

## PROPOSED SOLD REMAPPING TABLE (REQUIRES APPROVAL)

See `audit/SOLD-CURRENT.md` Section "REMAPPING STRATEGY (PROPOSED)"

**Summary:**
- **10 units** auto-map (high/medium confidence): A1, A3, B1, C1, D3, F2, G1, G3, H1, H2
- **5 units** need manual assignment (position-5 eliminated): B5→?, C5→?, F5→?, G5→?, H5→?
- **3 units** have plot mismatch (150 Sq.Yd eliminated): B2/B3/B4 sold, but new B2/B3/B4 are 225 Sq.Yd

**Critical question:** For sold B2/B3/B4 (old 150 Sq.Yd West, sold):
- Map to new B2/B3/B4 (225 Sq.Yd Platinum, same position)? OR
- Map to new B1 (165 Sq.Yd Silver, closer tier)? OR
- Mark all B positions as available (don't transfer sold status)?

**Proposed default (pending approval):**
- Position 1-4 sold units → same position in new structure (even if plot differs)
- Position-5 sold units → Rishi assigns manually to positions 2-4

**Total sold after remapping:** Likely **13-18 units** (depending on position-5 assignments)

---

## FILES CREATED (STAGED, NOT YET WIRED)

1. ✅ `data/villas-v2.ts` — Generator + validator (33 villas, passing all checks)
2. ✅ `scripts/test-inventory-v2.ts` — Validation test runner
3. ✅ `audit/SOLD-CURRENT.md` — Current sold status extraction
4. ✅ `audit/CHECKPOINT-1-REPORT.md` — This document

**Status:** Data layer built and validated. Waiting for decisions before wiring to components.

---

## NEXT STEPS (AFTER APPROVAL)

**Phase 2:** Filters & Tier Surfacing
- Remove 2,200 SFT from area filter
- Remove NE/NW from direction filter
- Add tier badges to tiles (Silver/Platinum/Signature)
- Purge all 2200/NE/NW references sitewide

**Phase 3:** Grid & Diagram Restructure
- Re-map SVG coordinates for 33-villa layout (5+4+4+4+4+4+4+4)
- Update tile renderer to derive grid from data
- Remove hard-coded 5-per-row assumption

**Phase 4:** SOLD Status Remapping
- Apply approved remapping table
- Wire `generateVillas(statusMap)` with sold/hold flags

**Phase 5:** Sitewide Count & Copy Corrections
- Update all 40→33 references
- Correct FAQ, meta descriptions, landing pages

**Phase 6:** Verification Protocol
- Static greps (all must be empty)
- Runtime UI audit (Playwright)
- Visual QA screenshots
- GTM/CTA regression testing

---

## ⛔ CHECKPOINT 1 — DECISIONS REQUIRED

**Awaiting answers to:**
1. ✅ Confirm B-H structure = 4 villas each (Block I eliminated)?
2. 🎨 A1 treatment: Option A (distinct Signature tile) or Option B (Silver with footnote)?
3. 🔧 Add tier filter (All/Silver/Platinum)?
4. 📐 Rename Floor Plans tabs to Silver/Platinum, or keep Type A/B/C?
5. ✅ Approve 40→33 copy corrections?
6. 📋 Approve SOLD remapping strategy (auto-map 1-4, manual assign position-5)?

**Once decisions received:** Proceed immediately to Phase 2 implementation.

---

**Status:** ⏸️ **CHECKPOINT 1 COMPLETE — AWAITING `APPROVED — CONTINUE`**
