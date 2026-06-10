-- Update Gallery with New Grand Entrance Image and Reorganize
-- Run this in Supabase SQL Editor

-- STEP 1: Insert the new Grand Entrance image as position 0
-- First, shift all existing display_order up by 1 to make room
UPDATE gallery_items
SET display_order = display_order + 1
WHERE display_order >= 0;

-- STEP 2: Check if we need to create a media_assets entry for the new image
-- (You may need to upload the image to Supabase Storage first)
-- For now, we'll insert a placeholder that you can update with the actual image_id

-- STEP 3: Insert new Grand Entrance at position 0
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
);

-- STEP 4: Update the old "Grand Entrance" (now at position 3) to "Recreation Zone"
UPDATE gallery_items
SET
  caption = 'Recreation Zone',
  alt_text = 'Recreation Zone at The Pavilion villa community in Boduppal',
  updated_at = NOW()
WHERE display_order = 3
  AND caption != 'Convenience Store';

-- STEP 5: Verify the new gallery order
SELECT id, caption, alt_text, display_order, is_published
FROM gallery_items
ORDER BY display_order;

-- Expected result:
-- display_order 0: Grand Entrance (new image)
-- display_order 1: Convenience Store
-- display_order 2: Recreation Zone (old Grand Entrance image)
-- display_order 3+: Other images
