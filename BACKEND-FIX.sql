-- BACKEND FIX: Clear Gallery Database So It Uses Code Fallback
-- Run this in Supabase SQL Editor

-- Step 1: Delete all gallery items from database
DELETE FROM gallery_items;

-- Step 2: Verify the table is empty
SELECT COUNT(*) as total_items FROM gallery_items;

-- Expected result: total_items = 0

-- After running this:
-- 1. The database will be empty
-- 2. GalleryDB.tsx will use the fallback code (which has no thumbnails and no preload)
-- 3. The website will show the correct version
