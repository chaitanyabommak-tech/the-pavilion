-- Update Gallery Image #02 Caption ONLY
-- Copy and paste this into Supabase SQL Editor

UPDATE gallery_items
SET
  caption = 'Convenience Store',
  alt_text = 'Convenience Store at The Pavilion by Bommaku Group',
  updated_at = NOW()
WHERE caption = 'Recreation Zone'
  OR display_order = 1;

-- Verify the update worked
SELECT id, caption, alt_text, display_order, is_published
FROM gallery_items
ORDER BY display_order;
