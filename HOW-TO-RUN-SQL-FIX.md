# 🎯 HOW TO RUN THE SQL FIX IN SUPABASE

## Quick Guide (5 Steps - Takes 2 Minutes)

---

## Step 1: Open Supabase Dashboard

1. Go to: **https://supabase.com/dashboard**
2. Log in with your account
3. Select your project: **The Pavilion** (or whatever name you used)

---

## Step 2: Open SQL Editor

1. Look at the **left sidebar**
2. Find and click: **SQL Editor** (icon looks like `</>`)
3. Click: **New query** button (top right)

![SQL Editor Location]
```
Dashboard → Left Sidebar → SQL Editor → New query
```

---

## Step 3: Copy the SQL Command

Open the file: **`RUN-THIS-SQL-NOW.sql`**

Copy **ALL the content** from that file.

**OR** just copy this:

```sql
-- Check current data
SELECT 
    'BEFORE DELETE' as status,
    COUNT(*) as total_villas,
    COUNT(DISTINCT block) as total_blocks
FROM villas;

-- Delete all villas
DELETE FROM villas;

-- Verify deletion
SELECT 
    'AFTER DELETE' as status,
    COUNT(*) as total_villas
FROM villas;
```

---

## Step 4: Paste and Run

1. **Paste** the SQL into the Supabase SQL Editor
2. Click the **RUN** button (or press `Ctrl + Enter`)
3. Wait for execution (takes ~1 second)

---

## Step 5: Check Results

You should see 3 result sets:

### Result 1 (BEFORE DELETE):
```
status          | total_villas | total_blocks
BEFORE DELETE   | 18          | 8
```
*(Your numbers may vary - shows what you had before)*

### Result 2 (Deletion):
```
Successfully deleted X rows
```

### Result 3 (AFTER DELETE):
```
status          | total_villas
AFTER DELETE    | 0
```
✅ **This is what you want to see!** `total_villas = 0`

---

## Step 6: Verify on Website

1. Go to: **https://bommakugroup.com**
2. Press: **`Ctrl + Shift + R`** (hard refresh to clear cache)
3. Scroll to: **Villa Configurations** section
4. Click: **"View Interactive Master Plan"** button
5. ✅ **All 40 units should now be visible!**

---

## What This SQL Does

### Before Running SQL:
```
Database has incomplete data (18 units)
    ↓
Website uses database
    ↓
Shows only 18 units ❌
```

### After Running SQL:
```
Database is empty (0 units)
    ↓
Website uses fallback data
    ↓
Fallback has all 40 units
    ↓
Shows all 40 units ✅
```

---

## Troubleshooting

### "I can't find SQL Editor"

**Solution:**
1. Make sure you're logged into Supabase
2. Make sure you selected the correct project
3. Look for the icon that looks like `</>` or database icon
4. It should be in the left sidebar under "Editor" section

### "I get an error: table 'villas' does not exist"

**Solution:**
This means the table might have a different name. Try:
```sql
-- Check all tables
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';
```

Then replace `villas` with the correct table name.

### "SQL ran but website still shows 18 units"

**Solution:**
1. Clear your browser cache completely
   - Press `Ctrl + Shift + Delete`
   - Select "All time"
   - Check "Cached images and files"
   - Click "Clear data"

2. Hard refresh the website
   - Press `Ctrl + Shift + R` multiple times

3. Try incognito/private window
   - Press `Ctrl + Shift + N` (Chrome/Edge)
   - Go to https://bommakugroup.com
   - Should show all 40 units

### "I accidentally ran it twice"

**Solution:**
No problem! It's safe to run multiple times. The second time it just deletes 0 records (since table is already empty).

---

## Alternative: If You Can't Access Supabase

If you don't have access to Supabase or can't run SQL:

**Good news!** I already deployed a code fix that forces the use of fallback data, so the website should already show all 40 units even WITHOUT running the SQL.

Just:
1. Go to: https://bommakugroup.com
2. Hard refresh: `Ctrl + Shift + R`
3. Check the Master Plan

The code fix (deployed) + SQL fix (optional) both achieve the same result.

---

## Screenshots Guide

### 1. Supabase Dashboard
```
┌─────────────────────────────────────────┐
│ [Logo] The Pavilion                     │
├─────────────────────────────────────────┤
│ 🏠 Home                                 │
│ 📊 Table Editor                         │
│ 📝 SQL Editor        ← Click this!      │
│ 🔐 Authentication                       │
│ 💾 Storage                              │
└─────────────────────────────────────────┘
```

### 2. SQL Editor
```
┌─────────────────────────────────────────┐
│ SQL Editor                  [New query] │← Click
├─────────────────────────────────────────┤
│                                         │
│  [Paste your SQL here]                  │
│                                         │
│                                         │
│                         [RUN]           │← Click
└─────────────────────────────────────────┘
```

### 3. Expected Result
```
┌─────────────────────────────────────────┐
│ Results:                                │
├─────────────────────────────────────────┤
│ status          | total_villas          │
│ AFTER DELETE    | 0                     │← Success!
└─────────────────────────────────────────┘
```

---

## Quick Reference

### SQL Command (Short Version)
```sql
DELETE FROM villas;
SELECT COUNT(*) as total_villas FROM villas;
```

### Supabase Dashboard
https://supabase.com/dashboard

### Live Website
https://bommakugroup.com

### Hard Refresh
`Ctrl + Shift + R` (Windows)  
`Cmd + Shift + R` (Mac)

---

## Need More Help?

If you're stuck:

1. **Take a screenshot** of the Supabase page you're on
2. **Tell me what you see** 
3. I'll guide you through it

---

**The SQL is ready! Just run it in Supabase SQL Editor.** 🎯
