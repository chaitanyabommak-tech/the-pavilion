-- Update Gallery Image #02 Caption to "Convenience Store"
-- Run this in Supabase SQL Editor

-- Update the caption and alt_text for the second gallery item (display_order = 2 or 1)
UPDATE gallery_items
SET
  caption = 'Convenience Store',
  alt_text = 'Convenience Store at The Pavilion by Bommaku Group',
  updated_at = NOW()
WHERE caption = 'Recreation Zone'
  OR alt_text LIKE '%Recreation Zone%aerial%'
  OR display_order = 1; -- display_order starts at 0, so 1 is the second item

-- Verify the update
SELECT id, caption, alt_text, display_order
FROM gallery_items
ORDER BY display_order;
