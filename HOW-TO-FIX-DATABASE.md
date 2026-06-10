# How to Fix the Database - Simple Steps

## Step 1: Open Supabase SQL Editor

Click this link:
**https://supabase.com/dashboard/project/sgzhxgfspmsurrymcuvz/sql/new**

---

## Step 2: Copy the SQL Script

Open the file: **`FIX-DATABASE-GALLERY.sql`**

Or copy this SQL:

```sql
-- Complete Database Fix for Gallery Reorganization

-- STEP 1: Shift all existing gallery items down by 1 position
UPDATE gallery_items
SET
  display_order = display_order + 1,
  updated_at = NOW()
WHERE display_order >= 0;

-- STEP 2: Insert new Grand Entrance image at position 0
INSERT INTO gallery_items (
  caption,
  alt_text,
  display_order,
  is_published,
  is_active,
  created_at,
  updated_at
)
VALUES (
  'Grand Entrance',
  'Grand Entrance of The Pavilion villa community in Boduppal',
  0,
  true,
  true,
  NOW(),
  NOW()
)
ON CONFLICT (display_order)
DO UPDATE SET
  caption = 'Grand Entrance',
  alt_text = 'Grand Entrance of The Pavilion villa community in Boduppal',
  updated_at = NOW();

-- STEP 3: Ensure Convenience Store is at position 1
UPDATE gallery_items
SET
  caption = 'Convenience Store',
  alt_text = 'Convenience Store at The Pavilion by Bommaku Group',
  updated_at = NOW()
WHERE display_order = 1;

-- STEP 4: Update old Grand Entrance to Recreation Zone at position 3
UPDATE gallery_items
SET
  caption = 'Recreation Zone',
  alt_text = 'Recreation Zone at The Pavilion villa community in Boduppal',
  updated_at = NOW()
WHERE display_order = 3
  AND caption != 'Convenience Store'
  AND caption != 'Grand Entrance';

-- STEP 5: Verify the results
SELECT
  id,
  caption,
  alt_text,
  display_order,
  is_published,
  is_active
FROM gallery_items
ORDER BY display_order;
```

---

## Step 3: Paste and Run

1. Paste the entire SQL into the Supabase SQL Editor
2. Click the green **"RUN"** button
3. Wait for it to complete

---

## Step 4: Check the Results

You should see a table showing 10 rows with:

- **Row 1:** display_order = 0, caption = "Grand Entrance"
- **Row 2:** display_order = 1, caption = "Convenience Store"
- **Row 3:** display_order = 2, caption = "Recreation Zone"
- **Rows 4-10:** Other gallery images

---

## Step 5: Verify on Live Website

1. Go to: **https://bommakugroup.com**
2. Press **Ctrl + Shift + R** (hard refresh)
3. Scroll to the **Visual Gallery** section
4. Check:
   - **01 / 10** should show "Grand Entrance"
   - **02 / 10** should show "Convenience Store"
   - **03 / 10** should show "Recreation Zone"

---

## If Something Goes Wrong

If you see an error, copy the error message and share it with me.

Common issues:
- **"unique constraint violation"** - The display_order might already have that value
- **"column image_id cannot be null"** - You may need to upload the new image to Supabase Storage first

---

## That's It!

After running the SQL, your database will match the deployed code and the website will display correctly.

**Current Status:**
- ✅ Code deployed to production
- ⏳ Database needs this SQL update
