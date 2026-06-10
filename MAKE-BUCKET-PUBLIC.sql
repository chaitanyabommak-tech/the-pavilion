-- Make the storage bucket public to allow uploads
-- Run this in Supabase SQL Editor

UPDATE storage.buckets
SET public = true
WHERE id = 'website-media';
