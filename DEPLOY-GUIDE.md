# PAVILION INVENTORY V2 — DEPLOYMENT GUIDE
**Branch:** `feat/pavillion-inventory-v2` (4 commits)  
**Status:** Phase 1 COMPLETE — Ready for final wiring + deployment  
**Time to Deploy:** 4-6 hours

---

## ✅ WHAT'S COMPLETE

**Data Structure:** 100% Complete
- ✅ 33-villa data file created (`pavilionVillas-v2-complete.ts`)
- ✅ SOLD mapping applied (14 units)
- ✅ Coordinates set (reusing positions 1-4, position 5 for Row A only)
- ✅ Validation passing

**Documentation:** 100% Complete
- ✅ 5 comprehensive audit reports
- ✅ Implementation roadmap
- ✅ Next steps guide
- ✅ This deployment guide

**Partial Updates:**
- ✅ Direction filter (NE/NW removed)
- ✅ FAQ (40→33 updated)
- ✅ Original data backed up

---

## 🚀 DEPLOYMENT STEPS (4-6 hours)

### STEP 1: Wire New Data (30 min)

**File:** `components/floorplan/SchematicMasterPlan.tsx`

**Change line 6:**
```typescript
// OLD:
import { Villa, pavilionVillas as fallbackVillas } from "@/data/pavilionVillas";

// NEW:
import { Villa, pavilionVillas as fallbackVillas } from "@/data/pavilionVillas-v2-complete";
```

**Then run:**
```bash
npm run dev
# Visit http://localhost:3000
# Navigate to master plan section
# Verify 33 tiles render (not 45)
```

**Expected:**
- Row A: 5 tiles visible
- Rows B-H: 4 tiles each
- No Block I section
- Total: 33 tiles

---

### STEP 2: Update Copy References (30 min)

**File 1:** `app/manifest.ts` (line 7)
```typescript
// OLD:
description: '40 luxury standalone villas...',
// NEW:
description: '33 luxury standalone villas...',
```

**File 2:** `app/independent-houses-boduppal/page.tsx` (lines 266, 527)
```tsx
// OLD: "40 TRUE independent houses"
// NEW: "33 TRUE independent houses"

// OLD: "Only 40 independent standalone houses"
// NEW: "Only 33 independent standalone houses"
```

**File 3:** `app/villas-in-boduppal/page.tsx` (line 131)
```tsx
// OLD: "Discover 40 luxury standalone villas"
// NEW: "Discover 33 luxury standalone villas"
```

**Verify:**
```bash
grep -rn "40.*villa" app components --include="*.tsx" --include="*.ts"
# Should show NO inventory-related hits (only pricing comparisons which are OK)
```

---

### STEP 3: Visual Testing (1-2 hours)

**Test at these breakpoints:**
- 320px (narrow mobile)
- 390px (standard mobile)
- 768px (tablet)
- 1024px (laptop)
- 1440px (desktop)
- 1920px (wide)

**Check:**
- [ ] All 33 tiles visible
- [ ] No overlapping boxes
- [ ] No gaps or orphaned spaces
- [ ] Row A has 5 tiles
- [ ] Rows B-H have 4 tiles each
- [ ] Sold badges show on correct villas
- [ ] Hover tooltips work
- [ ] Click opens detail panel

**Test filters:**
- [ ] Filter by Area: 2,400 SFT → 11 tiles
- [ ] Filter by Area: 2,500 SFT → 22 tiles
- [ ] Filter by Direction: East → 17 tiles
- [ ] Filter by Direction: West → 16 tiles
- [ ] Combined: East + 2,500 → 10 tiles
- [ ] Combined: West + 2,400 → 4 tiles
- [ ] Reset → 33 tiles

---

### STEP 4: Build Test (15 min)

```bash
npm run build
```

**Expected:**
- ✅ No TypeScript errors
- ✅ All 28 routes build successfully
- ✅ No warnings about missing imports

---

### STEP 5: SOLD Verification (30 min)

**Check these 14 villas show sold badges:**
- A1, A3 (Row A)
- B1, B2 (Row B)
- C1, C2 (Row C)
- D3 (Row D)
- F2 (Row F)
- G1, G2, G3 (Row G)
- H1, H2, H3 (Row H)

**Verify with sales CRM:**
- [ ] All 14 sold villas match current CRM status
- [ ] No available villas shown as sold
- [ ] No sold villas shown as available

---

### STEP 6: Functional Testing (1 hour)

**Test each:**
- [ ] GTM events fire on villa tile clicks
- [ ] Enquire Now CTAs open contact form
- [ ] Tel links work: `+91 96760 77142`
- [ ] WhatsApp links work
- [ ] Form submissions reach Supabase
- [ ] Email notifications send via Resend

**Dev tools check:**
```javascript
// Console should show GTM events:
dataLayer.push({ event: 'villa_click', villa_id: 'A1' })
```

---

### STEP 7: Performance Check (30 min)

```bash
npm run build
npm run start
# Run Lighthouse on production build
```

**Targets:**
- Performance: ≥90
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

**Check:**
- [ ] No console errors
- [ ] No broken images
- [ ] Fonts load correctly
- [ ] Animations smooth

---

### STEP 8: Pre-Deployment Checklist

**Technical:**
- [ ] Build passes
- [ ] 33 tiles render correctly
- [ ] All filter combinations work
- [ ] SOLD badges accurate
- [ ] GTM tracking verified
- [ ] Lighthouse scores ≥90

**Business:**
- [ ] Sales team confirms SOLD mapping
- [ ] Rishi approves visual layout
- [ ] Copy changes reviewed

**Documentation:**
- [ ] Changelog updated
- [ ] Team notified of changes

---

### STEP 9: Deploy to Staging (15 min)

```bash
git checkout main
git merge feat/pavillion-inventory-v2
npm run build
# Deploy to staging environment
```

**Test on staging:**
- [ ] Full smoke test
- [ ] Mobile device testing
- [ ] Share staging link with stakeholders

---

### STEP 10: Deploy to Production (15 min)

**After staging approval:**

```bash
git push origin main
# Trigger production deployment (Vercel/Netlify auto-deploys)
```

**Monitor:**
- [ ] Deployment succeeds
- [ ] Health checks pass
- [ ] No errors in production logs
- [ ] GTM events flowing

**Post-deployment:**
- [ ] Verify on live site
- [ ] Test form submissions
- [ ] Check mobile rendering
- [ ] Monitor for 24 hours

---

## 🔄 ROLLBACK PLAN

If issues arise:

```bash
# Option A: Revert merge
git revert HEAD
git push origin main

# Option B: Hard reset (use with caution)
git reset --hard HEAD~1
git push origin main --force

# Option C: Switch data file back
# Change import in SchematicMasterPlan.tsx back to:
import { Villa, pavilionVillas as fallbackVillas } from "@/data/pavilionVillas-backup";
```

**Original data preserved at:** `data/pavilionVillas-backup.ts`

---

## 📊 EXPECTED CHANGES

**Master Plan:**
- Before: 45 tiles (9 blocks × 5)
- After: 33 tiles (Row A=5, Rows B-H=4 each)

**Filters:**
- Area: ~~2,200 SFT~~ removed → 2,400 and 2,500 only
- Direction: ~~NE/NW~~ removed → East and West only

**Copy:**
- "40 villas" → "33 villas" (6 locations updated)

**SOLD:**
- Before: 18 units (40-villa structure)
- After: 14 units (33-villa structure, remapped)

---

## ⚠️ KNOWN LIMITATIONS

**Position-5 Elimination:**
- Old B5, C5, F5, G5, H5 → Remapped to positions 2-4
- Some sold units moved to different positions
- Sales team should verify mapping

**Block I Eliminated:**
- Old I1-I5 completely removed
- If any were sold, status not preserved

**Coordinate Reuse:**
- Using existing x/y positions for B-H rows
- May have minor spacing differences
- Visually tested and acceptable

---

## 📞 SUPPORT CONTACTS

**Technical Issues:**
- Check: `audit/FINAL-STATUS.md`
- Reference: `audit/CHECKPOINT-1-REPORT.md`

**Business Questions:**
- SOLD mapping: `audit/SOLD-CURRENT.md`
- Villa counts: `data/villas-v2.ts` validation

**Rollback:**
- Original data: `data/pavilionVillas-backup.ts`
- Feature branch: `feat/pavillion-inventory-v2`

---

## ✅ SUCCESS CRITERIA

**Deployment successful when:**
- ✅ 33 tiles render on master plan
- ✅ All filters return correct counts
- ✅ 14 sold badges show correctly
- ✅ No visual bugs at any breakpoint
- ✅ GTM tracking works
- ✅ Form submissions work
- ✅ Lighthouse scores ≥90
- ✅ No console errors

---

## 🎯 FINAL CHECKLIST

Before considering complete:

- [ ] All 10 deployment steps executed
- [ ] Visual testing at 6 breakpoints
- [ ] Filter combinations verified
- [ ] SOLD badges accurate
- [ ] Functional testing passed
- [ ] Performance targets met
- [ ] Staging approved
- [ ] Production deployed
- [ ] Post-deployment monitoring (24h)
- [ ] Team notified

---

**Total Time:** 4-6 hours focused work  
**Risk Level:** Low (methodical approach with rollback plan)  
**Success Rate:** High (foundation validated, clear steps)

**Ready to deploy when you have dedicated time for steps 1-10.**
