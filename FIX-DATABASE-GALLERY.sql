-- Complete Database Fix for Gallery Reorganization
-- Run this entire script in Supabase SQL Editor at once

-- STEP 1: Shift all existing gallery items down by 1 position to make room for new image at position 0
UPDATE gallery_items
SET
  display_order = display_order + 1,
  updated_at = NOW()
WHERE display_order >= 0;

-- STEP 2: Insert new Grand Entrance image at position 0
-- Note: You may need to update the image_id after uploading the image to Supabase Storage
INSERT INTO gallery_items (
  caption,
  alt_text,
  display_order,
  is_published,
  is_active,
  created_at,
  updated_at
)
VALUES (
  'Grand Entrance',
  'Grand Entrance of The Pavilion villa community in Boduppal',
  0,
  true,
  true,
  NOW(),
  NOW()
)
ON CONFLICT (display_order)
DO UPDATE SET
  caption = 'Grand Entrance',
  alt_text = 'Grand Entrance of The Pavilion villa community in Boduppal',
  updated_at = NOW();

-- STEP 3: Ensure Convenience Store is at position 1 (should already be there after shift)
UPDATE gallery_items
SET
  caption = 'Convenience Store',
  alt_text = 'Convenience Store at The Pavilion by Bommaku Group',
  updated_at = NOW()
WHERE display_order = 1;

-- STEP 4: Update the old Grand Entrance (now at position 3) to Recreation Zone
UPDATE gallery_items
SET
  caption = 'Recreation Zone',
  alt_text = 'Recreation Zone at The Pavilion villa community in Boduppal',
  updated_at = NOW()
WHERE display_order = 3
  AND caption != 'Convenience Store'
  AND caption != 'Grand Entrance';

-- STEP 5: Verify the final gallery order
SELECT
  id,
  caption,
  alt_text,
  display_order,
  is_published,
  is_active
FROM gallery_items
ORDER BY display_order;

-- Expected result:
-- display_order 0: Grand Entrance (new image)
-- display_order 1: Convenience Store
-- display_order 2: Recreation Zone (old Grand Entrance image)
-- display_order 3-9: Other existing images
