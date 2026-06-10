-- DELETE ALL GALLERY DATABASE RECORDS
-- This makes the website use the hardcoded fallback images (which have correct paths)

DELETE FROM gallery_items;

-- Verify it's empty
SELECT COUNT(*) as total_records FROM gallery_items;

-- Expected result: total_records = 0
-- After this, the website will use the fallback images from Gallery.tsx/GalleryDB.tsx
