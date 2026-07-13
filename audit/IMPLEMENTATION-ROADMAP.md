# PAVILION INVENTORY V2 — IMPLEMENTATION ROADMAP
**Status:** Phase 1 Complete (Data Layer + Validation) ✅  
**Remaining:** Phases 2-6 require careful coordinate remapping + testing  
**Recommendation:** Stage completion in controlled releases

---

## ✅ PHASE 1 COMPLETE — DATA LAYER & VALIDATION

### Completed Files
1. **`data/villas-v2.ts`** — 33-villa generator with full validation
2. **`scripts/test-inventory-v2.ts`** — Test suite (all 27 checks passing)
3. **`audit/SOLD-CURRENT.md`** — Current inventory analysis
4. **`audit/CHECKPOINT-1-REPORT.md`** — Complete Phase 1 findings

### Validation Results
```
✅ Total: 33 villas
✅ Silver: 10 | Platinum: 22 | Special: 1  
✅ East: 17 | West: 16
✅ 2,400 SFT: 11 | 2,500 SFT: 22
✅ All structural checks pass
```

---

## ⚠️ WHY NOT DEPLOY IMMEDIATELY

### Critical Blocker: SVG Coordinate Remapping

The current `data/pavilionVillas.ts` includes **hand-mapped SVG coordinates** for each villa:

```typescript
mapPosition: { x: 83, y: 22, width: 6.5, height: 8 }
```

**Current layout:** 45 villas in SVG viewBox `0 0 100 100`
- Blocks A-H: 8 rows × 5 villas = 40 units
- Block I: 5 corner villas
- Each villa has precise x/y positioning

**New layout:** 33 villas
- Row A: 5 villas (keep existing coordinates)
- Rows B-H: 4 villas each (need NEW coordinates — position 5 removed)
- Block I: eliminated (5 villas gone)

**Impact:** Simply swapping `data/pavilionVillas.ts` → `data/villas-v2.ts` without remapping coordinates will cause:
1. ❌ Tiles render in wrong positions
2. ❌ Overlapping villa boxes
3. ❌ Broken grid layout
4. ❌ Filter counts correct but visual broken

---

## REMAINING PHASES (REQUIRES COORDINATE WORK)

### Phase 2: Filters & Tier Surfacing (2-3 hours)
- ✅ Remove NE/NW from direction filter (done)
- ⏳ Remove 2,200 SFT references (needs data swap first)
- ⏳ Add tier filter (Silver/Platinum/Special)
- ⏳ Add tier badges to villa tiles
- ⏳ Update `VillaBox.tsx` to show tier

### Phase 3: Grid & Diagram Restructure (4-6 hours)  
**CRITICAL — CANNOT SKIP**
- ⏳ Re-map all 33 villa SVG coordinates (x, y, width, height)
- ⏳ Test layout at 320/768/1440px
- ⏳ Update road/block labels for 4-villa rows
- ⏳ Verify no overlaps/gaps
- ⏳ Handle Row A special case (5 villas)

### Phase 4: SOLD Status Remapping (1-2 hours)
- ⏳ Create approved `statusMap` from `audit/SOLD-CURRENT.md`
- ⏳ Wire `generateVillas(statusMap)` to SchematicMasterPlan
- ⏳ Test sold badges render correctly
- ⏳ Assert sold count matches approved list

### Phase 5: Sitewide Copy Corrections (1 hour)
- ⏳ Update 6 locations: 40 → 33 villas
- ⏳ FAQ answer corrections
- ⏳ Meta description updates
- ⏳ Landing page copy

### Phase 6: Verification (2-3 hours)
- ⏳ Static greps (2200, NE/NW, position-5 IDs, 40-villa)
- ⏳ Runtime Playwright audit (filter counts, tile counts)
- ⏳ Visual QA screenshots
- ⏳ GTM/CTA regression testing
- ⏳ Lighthouse performance check

---

## RECOMMENDED APPROACH

### Option A: Staged Release (RECOMMENDED)
**Week 1:** Complete Phases 2-3 (coordinate remapping + testing)  
**Week 2:** Complete Phases 4-5 (SOLD mapping + copy)  
**Week 3:** Phase 6 verification + deploy

**Why:** Coordinate remapping requires visual testing at multiple breakpoints. Rushing risks broken master plan on live site.

### Option B: Fast-Track (RISKY)
Complete all phases in 1-2 days with manual coordinate estimation. Higher risk of visual bugs.

### Option C: Pause at Phase 1 (SAFEST)
- Commit Phase 1 work (data layer + validation)
- Document remaining work
- Resume when dedicated time available for coordinate work

---

## WHAT'S SAFE TO COMMIT NOW

✅ **Phase 1 files (complete & validated):**
- `data/villas-v2.ts`
- `scripts/test-inventory-v2.ts`
- `audit/SOLD-CURRENT.md`
- `audit/CHECKPOINT-1-REPORT.md`
- `audit/IMPLEMENTATION-ROADMAP.md` (this file)

✅ **Partial Phase 2 (filter fix only):**
- `components/floorplan/SchematicMasterPlan.tsx` (NE/NW removal)

❌ **NOT safe to wire yet:**
- Swapping `pavilionVillas` → `villas-v2` (breaks layout)
- Copy corrections (makes site inconsistent with visual inventory)
- SOLD remapping (visual won't match)

---

## COORDINATE REMAPPING TEMPLATE

For future completion of Phase 3, here's the approach:

```typescript
// Calculate x positions for 4-per-row layout
const BLOCK_WIDTH = 6.5;
const BLOCK_GAP = 1.5;
const VIEWBOX_WIDTH = 100;

// Right-to-left blocks: A B C D E F G H
const blockXPositions = {
  A: 83,    // Rightmost (keep existing)
  B: 74.5,  // (keep existing)  
  C: 66,    // (keep existing)
  D: 57.5,  // (keep existing)
  E: 49,    // (keep existing)
  F: 40.5,  // (keep existing)
  G: 32,    // (keep existing)
  H: 23.5,  // (keep existing)
};

// Y positions for 4 villas per row (positions 1-4)
const positionYMap = {
  5: 10,  // Top (large plot) — only Row A
  1: 22,  // Position 1
  2: 31,  // Position 2
  3: 40,  // Position 3
  4: 49,  // Position 4
};

// Row A unique: A1-A5 (5 villas)
// Rows B-H: R1-R4 (4 villas each, skip position 5)
```

---

## DECISION POINT

**Question for Rishi:**

Do you want to:

**A)** Commit Phase 1 now, complete Phases 2-6 in next session (staged, safer)  
**B)** Continue all phases now with manual coordinate work (2-3 more hours, riskier)  
**C)** Abort and revisit when master plan redesign is ready

---

## CURRENT COMMIT READY

If choosing Option A, ready to commit:

```
feat(pavillion): Phase 1 — 33-villa data layer + validation

PHASE 1 COMPLETE:
- New villa generator (Silver 10, Platinum 22, Signature 1)
- Full validation suite (27 checks, all passing)
- SOLD status analysis (18 current units mapped)
- Comprehensive audit reports

DATA LAYER:
✅ data/villas-v2.ts — Generator function (165/167/183/225 Sq.Yd only)
✅ scripts/test-inventory-v2.ts — Validation test suite
✅ Facing rule: A/C/E/G=East, B/D/F/H=West
✅ Built-up: 2,400 and 2,500 SFT only

PARTIAL PHASE 2:
✅ Remove NE/NW from direction filter (SchematicMasterPlan)

DOCUMENTATION:
✅ audit/SOLD-CURRENT.md — Current inventory extraction
✅ audit/CHECKPOINT-1-REPORT.md — Phase 1 findings
✅ audit/IMPLEMENTATION-ROADMAP.md — Remaining work plan

NOT WIRED YET:
⏳ SVG coordinate remapping (Phase 3 — required before data swap)
⏳ Tier badges + tier filter (Phase 2 completion)
⏳ SOLD status remapping (Phase 4)
⏳ 40→33 copy corrections (Phase 5)

NEXT SESSION: Complete Phases 2-6 with coordinate remapping + testing

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

Ready to commit Phase 1 and document remaining work?
