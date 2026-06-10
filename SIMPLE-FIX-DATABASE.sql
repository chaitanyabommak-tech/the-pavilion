-- SIMPLE DATABASE FIX (No conflicts, no errors)
-- Delete everything below in Supabase and paste this instead:

-- Step 1: Shift all items down by 1
UPDATE gallery_items
SET display_order = display_order + 1
WHERE display_order >= 0;

-- Step 2: Insert new Grand Entrance at position 0
INSERT INTO gallery_items (caption, alt_text, display_order, is_published, is_active, created_at, updated_at)
VALUES ('Grand Entrance', 'Grand Entrance of The Pavilion villa community in Boduppal', 0, true, true, NOW(), NOW());

-- Step 3: Fix Convenience Store at position 1 (should already be correct)
UPDATE gallery_items
SET caption = 'Convenience Store', alt_text = 'Convenience Store at The Pavilion by Bommaku Group'
WHERE display_order = 1;

-- Step 4: Fix Recreation Zone at position 3 (was old Grand Entrance)
UPDATE gallery_items
SET caption = 'Recreation Zone', alt_text = 'Recreation Zone at The Pavilion villa community in Boduppal'
WHERE display_order = 3;

-- Step 5: Check results
SELECT id, caption, display_order FROM gallery_items ORDER BY display_order;
