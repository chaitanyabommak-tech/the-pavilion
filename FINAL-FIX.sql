-- FINAL FIX - Disable RLS on media_assets to allow uploads
-- Run this in Supabase SQL Editor

ALTER TABLE media_assets DISABLE ROW LEVEL SECURITY;
