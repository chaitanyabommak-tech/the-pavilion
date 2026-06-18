-- ═══════════════════════════════════════════════════════════════════════
-- MASTER PLAN DATABASE FIX - Run This in Supabase SQL Editor
-- ═══════════════════════════════════════════════════════════════════════
--
-- PURPOSE: Clear incomplete villa data from database
-- RESULT: Website will use complete fallback data (40 units)
--
-- HOW TO RUN:
-- 1. Go to: https://supabase.com/dashboard
-- 2. Select your project (The Pavilion)
-- 3. Click: SQL Editor (left sidebar)
-- 4. Click: New query
-- 5. Copy and paste this entire file
-- 6. Click: RUN
--
-- ═══════════════════════════════════════════════════════════════════════

-- Step 1: Check current data (BEFORE deletion)
SELECT
    'BEFORE DELETE' as status,
    COUNT(*) as total_villas,
    COUNT(DISTINCT block) as total_blocks
FROM villas;

-- Show what villas exist currently
SELECT villa_id, block, status
FROM villas
ORDER BY block, villa_id;

-- ═══════════════════════════════════════════════════════════════════════

-- Step 2: DELETE all villas (clears incomplete data)
DELETE FROM villas;

-- ═══════════════════════════════════════════════════════════════════════

-- Step 3: Verify deletion (AFTER deletion)
SELECT
    'AFTER DELETE' as status,
    COUNT(*) as total_villas
FROM villas;

-- Expected result: total_villas = 0

-- ═══════════════════════════════════════════════════════════════════════
-- WHAT HAPPENS AFTER THIS SQL RUNS
-- ═══════════════════════════════════════════════════════════════════════
--
-- 1. villas table = EMPTY (0 records)
-- 2. VillaConfigurationsDB.tsx fetches empty data
-- 3. VillaConfigurations.tsx uses fallback data
-- 4. Fallback data (pavilionVillas.ts) has ALL 40 units:
--    - Block A: A1, A2, A3, A4, A5 ✅
--    - Block B: B1, B2, B3, B4, B5 ✅
--    - Block C: C1, C2, C3, C4, C5 ✅
--    - Block D: D1, D2, D3, D4, D5 ✅
--    - Block E: E1, E2, E3, E4, E5 ✅
--    - Block F: F1, F2, F3, F4, F5 ✅
--    - Block G: G1, G2, G3, G4, G5 ✅
--    - Block H: H1, H2, H3, H4, H5 ✅
-- 5. Website shows complete master plan with all 40 units ✅
--
-- ═══════════════════════════════════════════════════════════════════════

-- VERIFICATION:
-- After running this SQL, go to:
-- https://bommakugroup.com
-- Press: Ctrl + Shift + R (hard refresh)
-- Scroll to: Villa Configurations section
-- Click: "View Interactive Master Plan"
-- Result: All 40 units should be visible! ✅

-- ═══════════════════════════════════════════════════════════════════════
