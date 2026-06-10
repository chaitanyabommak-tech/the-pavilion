# Solution: Update Gallery Caption in Database

## Problem
The website is still showing "Grand Entrance" or "Recreation Zone" for gallery image #02 because the live website loads data from the **Supabase database**, not the hardcoded fallback.

## Solution
You need to update the database caption. Follow these steps:

---

## Step 1: Open Supabase SQL Editor

1. Go to: **https://supabase.com/dashboard/project/sgzhxgfspmsurrymcuvz/sql/new**
2. This opens a new SQL query editor

---

## Step 2: Run This SQL Query

Copy and paste this SQL into the editor:

```sql
-- Update Gallery Image #02 Caption to "Convenience Store"

UPDATE gallery_items
SET
  caption = 'Convenience Store',
  alt_text = 'Convenience Store at The Pavilion by Bommaku Group',
  updated_at = NOW()
WHERE caption = 'Recreation Zone'
  OR alt_text LIKE '%Recreation Zone%aerial%'
  OR display_order = 1;

-- Verify the update
SELECT id, caption, alt_text, display_order
FROM gallery_items
ORDER BY display_order;
```

3. Click **"RUN"** button

---

## Step 3: Verify the Change

After running the SQL, you should see a result showing the updated gallery items with:
- `caption = 'Convenience Store'`
- `alt_text = 'Convenience Store at The Pavilion by Bommaku Group'`

---

## Step 4: Check Live Website

1. Go to: **https://bommakugroup.com**
2. **Hard refresh** the page: Press `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
3. Scroll to the "Visual Gallery" section
4. Click the right arrow or click the 2nd thumbnail
5. You should now see: **"02 / 09 · CONVENIENCE STORE"**

---

## Alternative: If No Database Records Exist

If the database `gallery_items` table is empty, the website will use the **fallback data** which I already updated. To check:

Run this in Supabase SQL Editor:
```sql
SELECT COUNT(*) FROM gallery_items;
```

- **If count = 0:** The website uses the fallback (already updated ✅)
- **If count > 0:** You need to run the UPDATE query above

---

## What I Already Updated

✅ **Fallback data** in `components/GalleryDB.tsx` (Line 32)  
✅ **Static gallery** in `components/Gallery.tsx` (Line 9)  
✅ **Deployed to production** on Vercel

**What still needs updating:**
❌ **Database records** in Supabase `gallery_items` table ← **YOU NEED TO DO THIS**

---

## Quick Fix (If Database is Empty)

If you want to bypass the database entirely and use the hardcoded fallback:

**Option A:** Empty the database table:
```sql
DELETE FROM gallery_items;
```

**Option B:** Update the database record (recommended):
```sql
UPDATE gallery_items
SET caption = 'Convenience Store', alt_text = 'Convenience Store at The Pavilion by Bommaku Group'
WHERE display_order = 1;
```

---

## Summary

**The code is deployed ✅**  
**The database needs updating ❌**

Run the SQL query in Supabase to update the database, then hard refresh https://bommakugroup.com to see the change.

---

**SQL File:** `update-gallery-caption.sql` (already created in your project folder)
