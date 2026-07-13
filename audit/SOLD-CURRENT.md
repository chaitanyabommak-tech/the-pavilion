# SOLD/HOLD STATUS — CURRENT INVENTORY (40-villa structure)
**Extracted from:** `data/pavilionVillas.ts`  
**Date:** 2026-07-13  
**Purpose:** Input for Section 5 remapping to 33-villa structure

---

## SOLD VILLAS (18 units)

| Old ID | Plot Size | Built-up | Facing | Status | Position in Block |
|---|---|---|---|---|---|
| A1 | 183 Sq.Yd | 2,400 SFT | North East | sold | 1/5 |
| A3 | 167 Sq.Yd | 2,500 SFT | East | sold | 3/5 |
| B1 | 165 Sq.Yd | 2,400 SFT | West | sold | 1/5 |
| B2 | 150 Sq.Yd | 2,200 SFT | West | sold | 2/5 |
| B3 | 150 Sq.Yd | 2,200 SFT | West | sold | 3/5 |
| B4 | 150 Sq.Yd | 2,200 SFT | West | sold | 4/5 |
| B5 | 228 Sq.Yd | 2,500 SFT | West | sold | 5/5 ← **NO 5TH IN NEW** |
| C1 | 165 Sq.Yd | 2,400 SFT | North East | sold | 1/5 |
| C2 | 150 Sq.Yd | 2,200 SFT | East | sold | 2/5 |
| C5 | 232 Sq.Yd | 2,500 SFT | East | sold | 5/5 ← **NO 5TH IN NEW** |
| D3 | 150 Sq.Yd | 2,200 SFT | West | sold | 3/5 |
| F2 | 150 Sq.Yd | 2,200 SFT | West | sold | 2/5 |
| F5 | 243 Sq.Yd | 2,500 SFT | West | sold | 5/5 ← **NO 5TH IN NEW** |
| G1 | 165 Sq.Yd | 2,400 SFT | North East | sold | 1/5 |
| G3 | 150 Sq.Yd | 2,200 SFT | East | sold | 3/5 |
| G5 | 227 Sq.Yd | 2,500 SFT | East | sold | 5/5 ← **NO 5TH IN NEW** |
| H1 | 165 Sq.Yd | 2,400 SFT | North West | sold | 1/5 |
| H2 | 150 Sq.Yd | 2,200 SFT | West | sold | 2/5 |
| H5 | 222 Sq.Yd | 2,500 SFT | West | sold | 5/5 ← **NO 5TH IN NEW** |

---

## AVAILABLE VILLAS (22 units)

All other villas (A2, A4, A5, C3, C4, D1, D2, D4, D5, E1-E5, F1, F3, F4, G2, G4, H3, H4, I1-I5) are available.

---

## KEY OBSERVATIONS FOR REMAPPING

### 1. Position 5 villas (5 sold)
**CRITICAL:** The current structure has 5th-position villas in blocks A-H (9 blocks × 5 = 45 units, minus 5 in Block I = 40 total). The new structure eliminates position 5 for blocks B-H.

Sold position-5 units that **no longer exist**:
- B5 (228 Sq.Yd, 2,500 SFT, West) ← sold
- C5 (232 Sq.Yd, 2,500 SFT, East) ← sold
- F5 (243 Sq.Yd, 2,500 SFT, West) ← sold
- G5 (227 Sq.Yd, 2,500 SFT, East) ← sold
- H5 (222 Sq.Yd, 2,500 SFT, West) ← sold

**Human decision required:** Which of the NEW 225 Sq.Yd Platinum villas (positions 2-4) in each block should inherit these sold statuses?

### 2. Plot size changes
- **150 Sq.Yd (2,200 SFT)** → **Does not exist in new structure**
  - Current sold: B2, B3, B4 (West); C2, F2, H2 (West); G3 (East) = 7 units
  - New structure has only 165/167/183/225 Sq.Yd
  
- **165 Sq.Yd** remains but with **2,400 SFT** (not 2,200)
  - Current sold 165s: A1 (183 NE), B1, C1, G1, H1 = 5 units (but A1 is 183, not 165)
  - Direct map possible for B1, C1, G1, H1 (all position 1)

- **167 Sq.Yd** remains with **2,400 SFT** (not 2,500 as currently)
  - Current sold: A3 (167, 2,500 SFT, East)
  - New A3 = 167 Sq.Yd, 2,400 SFT, East — plot matches, built-up differs

- **Large plots (222-250 Sq.Yd)** → **Becomes 225 Sq.Yd uniformly**
  - All position-5 sold units were large plots (222-243 Sq.Yd, 2,500 SFT)
  - New structure: A5 = 225 Sq.Yd, 2,500 SFT; positions 2-4 in B-H = 225 Sq.Yd, 2,500 SFT

### 3. Facing changes
- **North East / North West** → **East / West only**
  - Current sold NE/NW: A1 (NE), C1 (NE), G1 (NE), H1 (NW) = 4 units
  - New structure:
    - A1 = East (was NE) — SIGNATURE CORNER
    - C1 = East (was NE)
    - G1 = East (was NE)
    - H1 = West (was NW)

### 4. Block I (bottom corner section)
Block I exists in current structure (5 villas: I1-I5) but **is not mentioned in the revised reference document**. 

**CRITICAL DECISION NEEDED:** Does Block I still exist in the 33-villa structure, or is it eliminated?
- If eliminated: Total drops from 40 to 35, not 33 — math doesn't work
- If kept: Need confirmation of Block I configuration

---

## SOLD COUNT VERIFICATION

Current sold count: **18 units** (out of 40 = 45% sold)

After remapping to 33-villa structure:
- Expected sold count should be **≤18** (some may not map cleanly)
- Positions 1-4 sold units should map directly (if plot/facing match)
- Position-5 sold units need manual assignment

---

## REMAPPING STRATEGY (PROPOSED — REQUIRES APPROVAL)

### AUTO-MAP (High confidence — block, position, facing match)

| Old ID | Old Plot | Status | → New ID | New Plot | Confidence | Basis |
|---|---|---|---|---|---|---|
| A1 | 183 | sold | A1 | 183 | ✅ HIGH | Unique corner unit, plot exact match |
| A3 | 167 | sold | A3 | 167 | ✅ HIGH | Block + position + plot match |
| B1 | 165 | sold | B1 | 165 | ✅ HIGH | Block + position + facing match |
| C1 | 165 | sold | C1 | 165 | ✅ HIGH | Block + position + facing match (NE→E) |
| D3 | 150 | sold | D3 | 225 | ⚠️ MEDIUM | Block + position match, **plot differs** |
| F2 | 150 | sold | F2 | 225 | ⚠️ MEDIUM | Block + position match, **plot differs** |
| G1 | 165 | sold | G1 | 165 | ✅ HIGH | Block + position + facing match (NE→E) |
| G3 | 150 | sold | G3 | 225 | ⚠️ MEDIUM | Block + position match, **plot differs** |
| H1 | 165 | sold | H1 | 165 | ✅ HIGH | Block + position + facing match (NW→W) |
| H2 | 150 | sold | H2 | 225 | ⚠️ MEDIUM | Block + position match, **plot differs** |

**Count:** 10 auto-mapped (6 high confidence, 4 medium)

### NEEDS HUMAN DECISION (position 5 sold units — no direct equivalent)

| Old ID | Old Plot | Status | Candidates in New Structure | Decision Needed |
|---|---|---|---|---|
| B5 | 228 W | sold | B2, B3, B4 (all 225 Sq.Yd, 2,500 SFT, West, Platinum) | Which one inherits sold status? |
| C5 | 232 E | sold | C2, C3, C4 (all 225 Sq.Yd, 2,500 SFT, East, Platinum) | Which one inherits sold status? |
| F5 | 243 W | sold | F2, F3, F4 (all 225 Sq.Yd, 2,500 SFT, West, Platinum) | Which one inherits sold status? |
| G5 | 227 E | sold | G2, G3, G4 (G3 already sold from old G3) | Likely G2 or G4 |
| H5 | 222 W | sold | H2, H3, H4 (H2 already sold from old H2) | Likely H3 or H4 |

**Count:** 5 units need manual assignment

### NEEDS HUMAN DECISION (150 Sq.Yd units — plot size eliminated)

| Old ID | Old Plot | Status | New Structure Reality | Decision Needed |
|---|---|---|---|---|
| B2 | 150 W | sold | NEW B2 = 225 Sq.Yd (Platinum, not Silver) | Map to B2? Or to B1 (165, Silver)? |
| B3 | 150 W | sold | NEW B3 = 225 Sq.Yd (Platinum) | Same question |
| B4 | 150 W | sold | NEW B4 = 225 Sq.Yd (Platinum) | Same question |
| C2 | 150 E | sold | NEW C2 = 225 Sq.Yd (Platinum) | Map to C2? Or to C1 (165, Silver)? |

**Note:** Old B2/B3/B4/C2 were 150 Sq.Yd (Type-A, 2,200 SFT, ₹1.87 Cr). New positions 2-4 are 225 Sq.Yd (Platinum, 2,500 SFT, higher price). **Plot/tier mismatch.**

---

## CHECKPOINT 1 QUESTIONS FOR RISHI

1. **Block I status:** Does Block I (5 corner villas) still exist in the 33-villa plan? If yes, what is its configuration? If no, where do those 5 villas go?

2. **Position-5 sold remapping:** For the 5 sold position-5 units (B5, C5, F5, G5, H5), which of the new Platinum villas (positions 2-4) should inherit each sold status?

3. **150 Sq.Yd sold units:** Old B2/B3/B4 (West, 150 Sq.Yd, Silver-tier) are sold. New B2/B3/B4 are 225 Sq.Yd Platinum. Should we:
   - Map to new B2/B3/B4 (same position, wrong plot/tier)?
   - Map to new B1 (165 Sq.Yd Silver, closer tier but different position)?
   - Mark as "not transferred" and show all B positions as available?

4. **Total sold count after remapping:** Current sold = 18 units. After remapping to 33 villas, what is the expected/approved sold count?

---

**Status:** ⏸️ CHECKPOINT 1 — AWAITING DECISIONS BEFORE PROCEEDING TO DATA LAYER BUILD
