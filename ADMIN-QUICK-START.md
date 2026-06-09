# The Pavilion Admin Dashboard - Quick Start Guide

## What Was Implemented

### ✅ Backend Infrastructure (Phase 1 - COMPLETE)

**Complete database backend with:**
- 11 database tables
- Row-level security
- Authentication foundation
- Media management structure
- Gallery management
- Villa inventory system
- Lead capture system
- CMS for website content
- Audit logging

**This foundation allows:**
- Secure admin authentication
- Media uploads to cloud storage
- Gallery slide management
- Villa status changes (A1 is Sold Out)
- Lead capture from forms
- Content editing capability
- SEO metadata management
- Settings management

---

## What You Need To Do Now

### Step 1: Create Supabase Project (15 minutes)

1. **Go to:** https://supabase.com
2. **Sign up** or login
3. **Create new project:**
   - Name: `the-pavilion-admin`
   - Password: (save it securely)
   - Region: Asia Pacific (Mumbai) or closest
   - Plan: Free tier
4. **Wait** for provisioning (2-3 min)
5. **Get credentials:**
   - Settings → API
   - Copy: Project URL
   - Copy: `anon` `public` key
   - Copy: `service_role` `secret` key (KEEP PRIVATE!)

### Step 2: Run Database Migrations (5 minutes)

**In Supabase Dashboard:**
1. Go to **SQL Editor**
2. Open file: `supabase/migrations/001_initial_schema.sql` from project
3. Copy entire contents
4. Paste into Supabase SQL Editor
5. Click **Run**
6. Verify success message

**Then run seed data:**
1. Open file: `supabase/seed.sql`
2. Copy contents
3. Paste into SQL Editor
4. Click **Run**
5. Verify success

### Step 3: Add Environment Variables (2 minutes)

Create `.env.local` in project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Keep existing
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-QGJ61SEN5Y
NEXT_PUBLIC_GTM_ID=GTM-KD57FLT8
```

**Replace** `your-project.supabase.co` and keys with actual values from Step 1.

### Step 4: Create First Admin User (3 minutes)

**In Supabase Dashboard:**
1. Go to **Authentication** → **Users**
2. Click **Add User** → **Create new user**
3. Enter email and password
4. Enable **Auto Confirm User**
5. Click **Create User**
6. **Copy the User ID** (UUID)

**Then in SQL Editor:**
```sql
INSERT INTO admin_users (id, email, role, full_name, is_active)
VALUES (
  'paste-user-uuid-here',
  'your@email.com',
  'super_admin',
  'Your Name',
  true
);
```

### Step 5: Test Connection (1 minute)

```bash
cd "C:\Users\Himamala Bommaku\the-pavilion"
npm run dev
```

Open browser console and test:
```javascript
// This should work if setup is correct
const { createClient } = require('./lib/supabase/client')
const supabase = createClient()
supabase.from('villas').select('*').then(console.log)
```

---

## Current Capabilities (Via SQL)

Until Phase 2 UI is built, you can manage content via SQL:

### Replace Grand Entrance Image

```sql
-- 1. Upload image to Supabase Storage → media bucket first
-- 2. Get public URL
-- 3. Insert media record:

INSERT INTO media_assets (
  filename, original_filename, file_path, file_url,
  file_type, file_size, alt_text, category, is_active
) VALUES (
  'grand-entrance-new.jpg',
  'Clean Entrance.jpg',
  'media/grand-entrance-new.jpg',
  'https://your-project.supabase.co/storage/v1/object/public/media/grand-entrance-new.jpg',
  'image/jpeg',
  350000,
  'The Pavilion grand entrance gate by Bommaku Group',
  'grand_entrance',
  true
) RETURNING id;

-- 4. Update first gallery item:
UPDATE gallery_items 
SET image_id = 'paste-id-from-above',
    is_published = true
WHERE display_order = 1;
```

### Mark Villa as Sold Out

```sql
UPDATE villas 
SET 
  status = 'Sold Out',
  status_color = '#DC2626',
  is_published = true
WHERE villa_id = 'A1';
```

### Change Villa to Available

```sql
UPDATE villas 
SET 
  status = 'Available',
  status_color = '#C5A572',
  is_published = true
WHERE villa_id = 'B3';
```

### View All Leads

```sql
SELECT 
  name, phone, email, preferred_villa,
  enquiry_type, status, created_at
FROM leads
ORDER BY created_at DESC;
```

### Update Recreation Zone Content

```sql
UPDATE website_sections 
SET 
  headline = 'Your New Headline',
  body_copy = 'Updated description...',
  is_published = true
WHERE section_key = 'recreation_zone';
```

---

## What's Next (Phase 2)

### To Be Built:
- Admin login page UI
- Admin dashboard layout
- Media library interface
- Gallery manager (drag-and-drop)
- Villa status editor
- Lead management table
- Content editors for all sections
- Settings pages

### When Complete, You Can:
- ✅ Login to https://bommakugroup.com/admin
- ✅ Upload images via drag-and-drop
- ✅ Replace gallery images with clicks
- ✅ Change villa status with dropdown
- ✅ Edit Recreation Zone copy in form
- ✅ View and manage leads
- ✅ Update SEO metadata
- ✅ Change phone/WhatsApp numbers
- ✅ All without touching code!

---

## Files Created

### Backend Code:
- `lib/supabase/client.ts` - Browser client
- `lib/supabase/server.ts` - Server client
- `supabase/migrations/001_initial_schema.sql` - Database
- `supabase/seed.sql` - Default data

### Documentation:
- `docs/ADMIN-DASHBOARD-SETUP.md` - Complete guide (66KB)
- `docs/ADMIN-IMPLEMENTATION-STATUS.md` - Status tracking
- `ADMIN-QUICK-START.md` - This file
- `.env.example` - Environment template

---

## Database Tables

| Table | Records | Purpose |
|-------|---------|---------|
| admin_users | 0 | You'll create first one |
| media_assets | 0 | Upload images here |
| gallery_items | 0 | Manage carousel |
| villas | 20 | A1 is Sold Out |
| floor_plans | 0 | Floor plan data |
| website_sections | 4 | Default content |
| leads | 0 | Captured leads |
| seo_pages | 4 | SEO defaults |
| cta_settings | 8 | Phone, WhatsApp, etc. |
| tracking_settings | 4 | GA4, GTM IDs |
| audit_logs | 0 | Action tracking |

---

## Security

✅ Row-level security enabled
✅ Admin-only access to sensitive data
✅ Public can only submit leads (not read)
✅ Published content public
✅ Service key protected

---

## Cost

**Supabase Free Tier:**
- 500 MB database
- 1 GB file storage
- 50,000 monthly users

**More than enough for The Pavilion project.**

---

## Support

**Full Documentation:** `docs/ADMIN-DASHBOARD-SETUP.md`
**Implementation Status:** `docs/ADMIN-IMPLEMENTATION-STATUS.md`
**Supabase Docs:** https://supabase.com/docs

---

## Troubleshooting

### Can't connect to database
- Check `.env.local` has correct values
- Check Supabase project is running
- Check network connection

### Migrations failed
- Run migrations one section at a time
- Check for syntax errors
- Verify you're connected to correct project

### Can't create admin user
- Verify user was created in Authentication
- Check UUID is correct
- Verify admin_users table exists

---

## Summary

**✅ Phase 1 Backend: COMPLETE**
**🚧 Phase 2 Admin UI: PENDING**
**📋 Phase 3 Advanced Features: PLANNED**

The foundation is solid and production-ready.
Next step: Build the admin UI to make this usable by non-technical team.

**Estimated Phase 2 completion:** 2-3 weeks of development

---

**Last Updated:** June 9, 2026
**Version:** 1.0.0
