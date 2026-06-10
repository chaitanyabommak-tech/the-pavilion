-- CORRECT DATABASE FIX
-- Copy and paste this entire script into Supabase SQL Editor

-- Step 1: Shift all existing items down by 1 to make room at position 0
UPDATE gallery_items
SET display_order = display_order + 1
WHERE display_order >= 0;

-- Step 2: Insert new Grand Entrance at position 0
INSERT INTO gallery_items (caption, alt_text, display_order, is_published, is_active, created_at, updated_at)
VALUES ('Grand Entrance', 'Grand Entrance of The Pavilion villa community in Boduppal', 0, true, true, NOW(), NOW());

-- Step 3: Ensure Convenience Store is at position 1 (should already be there after the shift)
UPDATE gallery_items
SET caption = 'Convenience Store', alt_text = 'Convenience Store at The Pavilion by Bommaku Group'
WHERE display_order = 1;

-- Step 4: Update Recreation Zone at position 2 (was position 1 before shift, now position 2)
-- The old "Grand Entrance" is now at position 2 after we inserted at 0 and shifted everything
UPDATE gallery_items
SET caption = 'Recreation Zone', alt_text = 'Recreation Zone at The Pavilion villa community in Boduppal'
WHERE display_order = 2;

-- Step 5: Verify the results
SELECT id, caption, display_order FROM gallery_items ORDER BY display_order;

-- Expected output:
-- display_order 0: Grand Entrance (NEW)
-- display_order 1: Convenience Store
-- display_order 2: Recreation Zone (old Grand Entrance, now renamed)
-- display_order 3-9: Other images
