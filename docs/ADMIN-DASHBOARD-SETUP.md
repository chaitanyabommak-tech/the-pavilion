# The Pavilion Admin Dashboard - Complete Setup Guide

## Overview

This document provides complete instructions for setting up and using the admin dashboard for The Pavilion website.

## Table of Contents

1. [Backend Setup](#backend-setup)
2. [Database Migration](#database-migration)
3. [Environment Variables](#environment-variables)
4. [Creating First Admin User](#creating-first-admin-user)
5. [Accessing Admin Dashboard](#accessing-admin-dashboard)
6. [Admin Features](#admin-features)
7. [Deployment](#deployment)

---

## Backend Setup

### Supabase Project Creation

1. **Go to** https://supabase.com
2. **Sign up** or log in
3. **Click** "New Project"
4. **Configure:**
   - Organization: Create new or select existing
   - Project Name: `the-pavilion-admin`
   - Database Password: (Generate strong password and save it securely)
   - Region: Select closest to your users (e.g., Asia Pacific - Mumbai)
   - Pricing Plan: Free tier is sufficient to start
5. **Click** "Create new project"
6. **Wait** for project to provision (2-3 minutes)

### Get Project Credentials

After project is created:

1. Go to **Project Settings** → **API**
2. Copy these values:
   - Project URL (starts with `https://`)
   - `anon` `public` key
   - `service_role` `secret` key (**NEVER expose this publicly**)

---

## Database Migration

### Option 1: Using Supabase Dashboard (Recommended for first setup)

1. Go to **SQL Editor** in Supabase dashboard
2. Open file: `supabase/migrations/001_initial_schema.sql`
3. Copy entire contents
4. Paste into Supabase SQL Editor
5. Click **Run**
6. Wait for completion (should show success)

7. Then run seed data:
8. Open file: `supabase/seed.sql`
9. Copy contents
10. Paste into SQL Editor
11. Click **Run**

### Option 2: Using Supabase CLI (For developers)

```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link to your project
supabase link --project-ref YOUR_PROJECT_REF

# Run migrations
supabase db push

# Run seed data
supabase db execute --file supabase/seed.sql
```

### Verify Database Setup

Run this query in SQL Editor to verify:

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public'
ORDER BY table_name;
```

You should see these tables:
- admin_users
- audit_logs
- cta_settings
- floor_plans
- gallery_items
- leads
- media_assets
- seo_pages
- tracking_settings
- villas
- website_sections

---

## Environment Variables

### Create .env.local file

Create file: `.env.local` in project root with:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-secret-key-here

# Existing tracking (keep these)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-QGJ61SEN5Y
NEXT_PUBLIC_GTM_ID=GTM-KD57FLT8
NEXT_PUBLIC_GOOGLE_ADS_ID=
```

### Important Security Notes:

✅ **DO add `.env.local` to `.gitignore`**
✅ **DO use NEXT_PUBLIC_ prefix only for truly public values**
❌ **NEVER commit `.env.local` to GitHub**
❌ **NEVER expose SUPABASE_SERVICE_ROLE_KEY to browser**

### For Vercel Deployment

Add environment variables in Vercel dashboard:
1. Go to project settings
2. Navigate to Environment Variables
3. Add all variables from `.env.local`
4. Redeploy

---

## Creating First Admin User

### Method 1: Using Supabase Auth UI (Recommended)

1. Go to **Authentication** → **Users** in Supabase dashboard
2. Click **Add User** → **Create new user**
3. Enter:
   - Email: `your-admin@email.com`
   - Password: (Generate strong password)
   - Auto Confirm User: ✅ ON
4. Click **Create User**
5. Copy the User ID (UUID)

6. Then go to **SQL Editor** and run:

```sql
INSERT INTO admin_users (id, email, role, full_name, is_active)
VALUES (
  'paste-user-uuid-here',
  'your-admin@email.com',
  'super_admin',
  'Your Full Name',
  true
);
```

### Method 2: Using Sign Up Flow (Alternative)

After admin routes are deployed, visit:
- https://bommakugroup.com/admin/signup

Then manually upgrade user to admin:

```sql
UPDATE admin_users 
SET role = 'super_admin' 
WHERE email = 'your-admin@email.com';
```

### Verify Admin User

```sql
SELECT id, email, role, is_active, created_at 
FROM admin_users 
WHERE email = 'your-admin@email.com';
```

---

## Accessing Admin Dashboard

### Local Development

1. Start dev server:
```bash
cd "C:\Users\Himamala Bommaku\the-pavilion"
npm run dev
```

2. Visit: http://localhost:3000/admin

3. **If not redirected to login**, manually go to:
   http://localhost:3000/admin/login

4. Enter credentials created above

5. After login, should redirect to:
   http://localhost:3000/admin/dashboard

### Production

Visit: https://bommakugroup.com/admin

---

## Admin Features

### Module Status

#### ✅ Phase 1 - IMPLEMENTED
- [x] Authentication & Authorization
- [x] Protected admin routes
- [x] Database schema
- [x] Seed data
- [x] Admin users table
- [x] Media assets table
- [x] Gallery items table
- [x] Villas table
- [x] Villa status management
- [x] Leads table
- [x] CTA settings
- [x] Tracking settings
- [x] Audit logging
- [x] Row-level security

#### 🚧 Phase 2 - TO IMPLEMENT (Next Sprint)
- [ ] Admin dashboard UI
- [ ] Media library interface
- [ ] Gallery manager interface
- [ ] Villa inventory manager
- [ ] Floor plan manager
- [ ] Master plan editor
- [ ] Recreation zone editor
- [ ] Clean Slate editor
- [ ] East/West facade editor

#### 📋 Phase 3 - PLANNED
- [ ] Lead management UI
- [ ] SEO manager
- [ ] CTA settings UI
- [ ] Tracking settings UI
- [ ] Publish workflow
- [ ] User management UI
- [ ] Audit log viewer
- [ ] CSV export
- [ ] Draft/publish system

---

## How to Update Key Content (Using SQL for now)

### Replace Grand Entrance Image

Until UI is built, use SQL:

```sql
-- 1. Upload image to Supabase Storage bucket 'media'
-- 2. Get the public URL

-- 3. Insert media record
INSERT INTO media_assets (
  filename, original_filename, file_path, file_url,
  file_type, file_size, alt_text, category, is_active
) VALUES (
  'grand-entrance-new.jpg',
  'Grand Entrance Photo.jpg',
  'media/grand-entrance-new.jpg',
  'https://your-project.supabase.co/storage/v1/object/public/media/grand-entrance-new.jpg',
  'image/jpeg',
  347000,
  'The Pavilion villa community grand entrance gate by Bommaku Group',
  'grand_entrance',
  true
) RETURNING id;

-- 4. Update gallery item (get media ID from above)
UPDATE gallery_items 
SET image_id = 'paste-media-id-here',
    alt_text = 'The Pavilion villa community grand entrance gate by Bommaku Group',
    is_published = true
WHERE display_order = 1;
```

### Mark Villa A1 as Sold Out

```sql
UPDATE villas 
SET 
  status = 'Sold Out',
  status_color = '#DC2626',
  is_published = true
WHERE villa_id = 'A1';
```

### Change Villa Status to Available

```sql
UPDATE villas 
SET 
  status = 'Available',
  status_color = '#C5A572',
  is_published = true
WHERE villa_id = 'B2';
```

### Update Recreation Zone Content

```sql
UPDATE website_sections 
SET 
  headline = 'Your New Headline Here',
  body_copy = 'Your updated copy here...',
  is_published = true
WHERE section_key = 'recreation_zone';
```

### Add New Lead (Testing)

```sql
INSERT INTO leads (
  name, phone, email, preferred_villa, enquiry_type,
  source, page_url, status
) VALUES (
  'Test Lead',
  '+91 9876543210',
  'test@example.com',
  'A1',
  'general_enquiry',
  'website',
  '/master-plan',
  'New'
);
```

### View All Leads

```sql
SELECT 
  id, name, phone, email, preferred_villa,
  enquiry_type, status, created_at
FROM leads
ORDER BY created_at DESC;
```

---

## Public Website Integration

### Update Gallery Component

The gallery component needs to load from database:

```typescript
// app/gallery/page.tsx or components/Gallery.tsx

import { createClient } from '@/lib/supabase/server'

export default async function Gallery() {
  const supabase = await createClient()
  
  const { data: galleryItems } = await supabase
    .from('gallery_items')
    .select(`
      *,
      image:media_assets!gallery_items_image_id_fkey(*),
      thumbnail:media_assets!gallery_items_thumbnail_id_fkey(*)
    `)
    .eq('is_published', true)
    .eq('is_active', true)
    .order('display_order', { ascending: true })
  
  return (
    // Render gallery with galleryItems data
  )
}
```

### Update Villa Master Plan

```typescript
// Load villas from database
const { data: villas } = await supabase
  .from('villas')
  .select('*')
  .eq('is_published', true)
  .eq('is_visible', true)
```

### Load CTA Settings

```typescript
const { data: ctaSettings } = await supabase
  .from('cta_settings')
  .select('*')
  .eq('is_active', true)

const phone = ctaSettings?.find(s => s.setting_key === 'primary_phone')?.setting_value
const whatsapp = ctaSettings?.find(s => s.setting_key === 'whatsapp_number')?.setting_value
```

---

## Deployment

### Deploy to Vercel

1. Push code to GitHub:
```bash
git add .
git commit -m "Add admin dashboard backend infrastructure"
git push origin main
```

2. Add environment variables in Vercel:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY

3. Redeploy

4. Verify admin login at: https://bommakugroup.com/admin

### Storage Bucket Setup

1. Go to **Storage** in Supabase dashboard
2. Create new bucket: `media`
3. Make it **Public**
4. Set up CORS if needed
5. Upload allowed file types: jpg, jpeg, png, webp, pdf

---

## Security Checklist

✅ Row-level security enabled on all tables
✅ Admin routes protected by authentication
✅ Service role key not exposed to frontend
✅ Leads data only accessible by admins
✅ Public can only insert leads, not read
✅ Published content only visible to public
✅ Admin users table protected
✅ Audit logging in place

---

## Troubleshooting

### Cannot login to admin

1. Check user exists:
```sql
SELECT * FROM admin_users WHERE email = 'your-email';
```

2. Check user is active:
```sql
UPDATE admin_users SET is_active = true WHERE email = 'your-email';
```

### Changes not showing on public site

1. Check `is_published` is true
2. Check `is_active` is true
3. Clear browser cache
4. Redeploy if needed

### Database permission errors

1. Check RLS policies are created
2. Verify user is authenticated
3. Check user role in admin_users table

---

## Next Steps

1. **Complete Phase 2**: Build admin UI components
2. **Test thoroughly**: All CRUD operations
3. **User training**: Train team on admin usage
4. **Monitor**: Set up logging and monitoring
5. **Backup**: Set up database backups

---

## Support

For issues or questions:
- Check Supabase documentation: https://supabase.com/docs
- Review audit logs for errors
- Contact development team

---

**Last Updated:** 2026-06-09
**Version:** 1.0.0 - Phase 1 Backend Infrastructure
