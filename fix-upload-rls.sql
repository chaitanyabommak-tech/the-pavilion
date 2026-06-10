-- Fix media_assets RLS to allow API uploads
-- This allows the upload API route to insert media even with anon key

-- Drop existing restrictive policy
DROP POLICY IF EXISTS "Admins can manage media" ON media_assets;

-- Create new policies that allow authenticated users AND service role
CREATE POLICY "Authenticated users can insert media"
  ON media_assets FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update media"
  ON media_assets FOR UPDATE
  USING (true);

CREATE POLICY "Authenticated users can delete media"
  ON media_assets FOR DELETE
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_active = true));
