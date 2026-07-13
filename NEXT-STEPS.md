# PAVILION INVENTORY V2 — IMMEDIATE NEXT STEPS
**Priority:** Medium (foundation complete, implementation staged)  
**Risk Level:** High if rushed, Low if methodical  
**Time Required:** 10-15 hours focused work

---

## CURRENT STATE ✅

**Branch:** `feat/pavillion-inventory-v2` (2 commits, not merged)

**Completed:**
- ✅ 33-villa data structure validated
- ✅ SOLD status analysis complete
- ✅ Direction filter updated (NE/NW removed)
- ✅ Comprehensive documentation (4 reports)
- ✅ Test infrastructure built

**Build Status:** ✅ Passing (28/28 routes)

---

## WHY PAUSED ⏸️

**Technical Reality:** The master plan SVG uses 45 hand-mapped coordinates. Converting to 33 villas requires:

1. **Coordinate Remapping** (4-6 hours)
   - Row A: Keep 5-villa coordinates (unchanged)
   - Rows B-H: Remove position-5, adjust spacing
   - Block I: Completely remove (5 villas eliminated)
   - Test at 320/768/1440/1920px
   - Verify no overlaps/gaps

2. **Visual Testing** (2-3 hours)
   - Screenshots all breakpoints
   - Both light/dark themes
   - All filter combinations
   - Sold badge accuracy

3. **Business Approval** (External dependency)
   - Sales team: Verify SOLD mapping
   - Rishi: Approve A1 Signature design

**Rushing this risks visual bugs on production site.**

---

## OPTION A: COMPLETE PROPERLY (RECOMMENDED)

### Session 1: Coordinate Remapping (3 hours)
1. Create `data/pavilionVillas-complete-v2.ts` with all 33 villas
2. Map coordinates: Keep existing for positions 1-4, remove position-5
3. Wire to `SchematicMasterPlan` component
4. Test dev server visually at all breakpoints
5. Fix any overlaps/gaps

### Session 2: Features & Testing (2 hours)
1. Add tier filter (Silver/Platinum/Signature)
2. Add tier badges to villa tiles
3. Run Playwright verification suite
4. Screenshot QA

### Session 3: Copy & Deploy (2 hours)
1. Update 40→33 references (6 files)
2. Final build test
3. Deploy to staging
4. Rishi approval
5. Deploy to production

**Total Time:** 7 hours over 3 sessions  
**Risk:** Low (methodical approach)

---

## OPTION B: QUICK IMPLEMENTATION (HIGHER RISK)

### Fast-Track Approach (4-6 hours continuous)
1. Accept some visual imperfection initially
2. Deploy with "known issues" list
3. Fix coordinate bugs post-launch
4. Iterate based on user feedback

**Pros:** Gets to production faster  
**Cons:** Potential customer-visible bugs  
**Risk:** Medium-High

---

## OPTION C: WAIT FOR REDESIGN

If master plan visual redesign is planned:
1. Keep Phase 1 work on branch
2. Coordinate inventory update with redesign
3. Implement both together

**Timeline:** Depends on redesign schedule

---

## IMMEDIATE ACTION ITEMS

### For Developer (You)
- [ ] Review `audit/FINAL-STATUS.md` for complete details
- [ ] Decide: Option A, B, or C
- [ ] Schedule implementation time if choosing A or B

### For Sales Team
- [ ] Review `audit/SOLD-CURRENT.md`
- [ ] Approve position-5 SOLD mapping:
  - B5 (228 Sq.Yd, sold) → Which of B2/B3/B4?
  - C5 (232 Sq.Yd, sold) → Which of C2/C3/C4?
  - G5 (227 Sq.Yd, sold) → Which of G2/G3/G4?
  - H5 (222 Sq.Yd, sold) → H3 or H4?

### For Rishi
- [ ] Approve A1 "Signature Corner" tile design
- [ ] Confirm: Add tier filter (Silver/Platinum)?
- [ ] Approve deployment timeline

---

## FILES TO REFERENCE

**Documentation:**
- `audit/CHECKPOINT-1-REPORT.md` — Full Phase 1 analysis
- `audit/SOLD-CURRENT.md` — SOLD mapping details
- `audit/IMPLEMENTATION-ROADMAP.md` — Technical roadmap
- `audit/FINAL-STATUS.md` — Complete project status

**Code:**
- `data/villas-v2.ts` — Validated generator
- `scripts/test-inventory-v2.ts` — Test suite
- `data/pavilionVillas-backup.ts` — Original backed up

---

## WHAT NOT TO DO ⛔

- ❌ Don't merge to `main` yet
- ❌ Don't deploy this branch
- ❌ Don't manually edit coordinates without testing
- ❌ Don't update copy (40→33) before visual works
- ❌ Don't rush coordinate mapping

**Why:** Half-implemented = broken master plan on production

---

## QUICK REFERENCE

**Current sold count:** 18 units (40-villa structure)  
**Target sold count:** 13-14 units (33-villa structure)  
**Total villas:** 40 → 33 (12 eliminated)  
**Blocks eliminated:** I (5 villas) + position-5 from B-H (7 villas)

**Filter changes:**
- Direction: East/West only (NE/NW removed) ✅
- Area: 2,400/2,500 SFT only (2,200 eliminated) ⏳
- Tier: Silver/Platinum/Signature (new) ⏳

---

## ESTIMATED COMPLETION

**Option A (Recommended):**
- Week 1: Coordinate mapping
- Week 2: Features + testing
- Week 3: Deploy

**Option B (Fast-track):**
- Day 1-2: Core implementation
- Day 3: Bug fixes
- Day 4: Deploy

**Option C (Wait):**
- TBD based on redesign timeline

---

## SUPPORT AVAILABLE

**Documentation:** Complete (600+ lines)  
**Foundation:** Validated and tested  
**Risk Assessment:** Documented  
**Timeline:** Estimated  
**Blockers:** Identified

**Everything needed for successful completion is documented.**

---

## DECISION NEEDED

**Which option?**
- [ ] Option A: Complete properly (7 hours, low risk)
- [ ] Option B: Fast-track (4-6 hours, medium risk)
- [ ] Option C: Wait for redesign (TBD)

**Once decided, next session can proceed immediately with clear plan.**

---

**Current Status:** ⏸️ Paused at Phase 1 complete  
**Next Session:** Ready to continue with chosen option  
**Production Impact:** None (feature branch only)

**All work preserved safely on `feat/pavillion-inventory-v2` branch.**
