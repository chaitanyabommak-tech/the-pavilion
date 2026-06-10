-- Disable RLS on storage buckets to allow uploads
-- Run this in Supabase SQL Editor

-- First, check if storage.objects table exists and disable RLS
ALTER TABLE storage.objects DISABLE ROW LEVEL SECURITY;

-- Also disable on storage.buckets
ALTER TABLE storage.buckets DISABLE ROW LEVEL SECURITY;
