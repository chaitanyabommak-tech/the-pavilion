-- ═══════════════════════════════════════════════════════════════════════
-- CLEAR VILLAS DATABASE - Force Website to Use Complete Fallback Data
-- ═══════════════════════════════════════════════════════════════════════
--
-- PROBLEM: Database has incomplete villa data (missing A5, B4, B5, C4, C5, etc.)
-- SOLUTION: Clear the database so the website uses the complete fallback data
--           from data/pavilionVillas.ts (which has all 40 villas A1-H5)
--
-- ═══════════════════════════════════════════════════════════════════════

-- Step 1: Delete all villas from database
DELETE FROM villas;

-- Step 2: Verify the table is empty
SELECT COUNT(*) as total_villas FROM villas;

-- Expected result: total_villas = 0

-- ═══════════════════════════════════════════════════════════════════════
-- VERIFICATION
-- ═══════════════════════════════════════════════════════════════════════
--
-- After running this SQL in Supabase:
--
-- 1. The villas table will be empty (0 records)
-- 2. VillaConfigurationsDB.tsx will fetch empty data
-- 3. VillaConfigurations.tsx will use fallbackPavilionVillas
-- 4. fallbackPavilionVillas has all 40 units complete:
--    - Block A: A1, A2, A3, A4, A5 ✅
--    - Block B: B1, B2, B3, B4, B5 ✅
--    - Block C: C1, C2, C3, C4, C5 ✅
--    - Block D: D1, D2, D3, D4, D5 ✅
--    - Block E: E1, E2, E3, E4, E5 ✅
--    - Block F: F1, F2, F3, F4, F5 ✅
--    - Block G: G1, G2, G3, G4, G5 ✅
--    - Block H: H1, H2, H3, H4, H5 ✅
--
-- 5. Website will show complete master plan with all units visible
--
-- ═══════════════════════════════════════════════════════════════════════

-- Optional: Check current data before deleting (run this first to see what's there)
-- SELECT villa_id, block, status FROM villas ORDER BY block, villa_id;
