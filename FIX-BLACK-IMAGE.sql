-- FIX BLACK IMAGE - Link Grand Entrance to existing image or delete the database record

-- OPTION 1: Delete the database record so it uses the fallback code (RECOMMENDED - QUICK FIX)
-- This makes the website use the hardcoded fallback images we already deployed
DELETE FROM gallery_items WHERE display_order = 0 AND caption = 'Grand Entrance';

-- After deleting, verify the gallery
SELECT id, title, caption, display_order FROM gallery_items ORDER BY display_order;

-- The website will now use the fallback images from Gallery.tsx/GalleryDB.tsx
-- which already have the correct image paths


-- OPTION 2: If you want to use database images (more complex)
-- First, you need to:
-- 1. Upload pavilion-grand-entrance-main.jpg to Supabase Storage
-- 2. Create a media_assets record for it
-- 3. Link the gallery_items record to that media_assets record
-- (Not recommended unless you need database-driven gallery)
