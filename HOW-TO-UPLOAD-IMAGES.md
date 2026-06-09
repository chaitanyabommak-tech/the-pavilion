# How to Upload Your 27 Images - Step by Step Guide

## Quick Overview
You need to save the 27 images from wherever you have them (your computer, cloud, or the images you showed me) into specific folders, then push them to GitHub.

---

## Step 1: Organize Your Source Images

**Do you have the original 27 images on your computer?**

If YES → Skip to Step 2
If NO → You need to get them from your source (designer, architect, etc.)

---

## Step 2: Save Images to Correct Folders

### Location: `C:\Users\Himamala Bommaku\the-pavilion\public\images\pavilion\`

I've created these folders for you:
```
✅ C:\Users\Himamala Bommaku\the-pavilion\public\images\pavilion\exteriors\
✅ C:\Users\Himamala Bommaku\the-pavilion\public\images\pavilion\interiors\
✅ C:\Users\Himamala Bommaku\the-pavilion\public\images\pavilion\recreation-zone\
✅ C:\Users\Himamala Bommaku\the-pavilion\public\images\pavilion\entrance\
```

### Image Mapping Guide

Based on the images you showed me, here's where each one goes:

#### **EXTERIORS FOLDER** (8 images)
Save to: `public\images\pavilion\exteriors\`

Look at your images and match them:
- **Wide villa street views** (like images 1, 4, 7):
  - `villa-street-view-01.jpg` ← First street view with golden lighting
  - `villa-street-view-02.jpg` ← Second street view with wooden detailing
  - `villa-street-view-03.jpg` ← Evening view with warm interior lights

- **Close-up villa facades** (like images 5, 6, 8):
  - `villa-front-elevation-01.jpg` ← Front facing, modern architecture
  - `villa-front-elevation-02.jpg` ← Contemporary facade with glass balconies
  - `villa-elevation-sunset.jpg` ← Villa at sunset/evening

- **Corner/Cluster views** (like images 9, 12):
  - `corner-villa-view.jpg` ← Corner villa with landscaping
  - `villa-cluster-aerial.jpg` ← Aerial view showing multiple villas

#### **INTERIORS FOLDER** (8 images)
Save to: `public\images\pavilion\interiors\`

- **Living Rooms** (images 16, 17):
  - `living-room-01.jpg` ← Light-toned living space with natural light
  - `living-room-02.jpg` ← Modern living area with accent furniture

- **Kitchens** (images 18, 19, 20):
  - `kitchen-01.jpg` ← Kitchen with marble backsplash
  - `kitchen-02.jpg` ← Luxury kitchen with wooden cabinetry
  - `dining-kitchen.jpg` ← Family dining area with kitchen

- **Bedrooms** (images 21, 22, 23):
  - `master-bedroom-01.jpg` ← Master bedroom with balcony access
  - `master-bedroom-02.jpg` ← Spacious bedroom with large windows
  - `bedroom-03.jpg` ← Contemporary bedroom with wooden slat wall

#### **RECREATION ZONE FOLDER** (4 images)
Save to: `public\images\pavilion\recreation-zone\`

Look for aerial/overhead views (images 2, 3, 13, 14):
- `aerial-view-01.jpg` ← Main recreation zone aerial with pool & courts
- `aerial-view-02.jpg` ← Evening aerial view of recreation area
- `aerial-layout.jpg` ← Complete layout showing all facilities
- `sports-courts-aerial.jpg` ← Sports courts and landscaping from above

#### **ENTRANCE FOLDER** (2 images)
Save to: `public\images\pavilion\entrance\`

Look for main gate images (images 15, 16):
- `main-gate-01.jpg` ← Main entrance with "The Pavilion" branding
- `entry-gate-evening.jpg` ← Evening view of entry gate

---

## Step 3: Easy Method Using Windows Explorer

### Method 1: Copy-Paste from Your Source Folder

1. **Open File Explorer** (Windows + E)

2. **Navigate to where you have the original images**

3. **Open another File Explorer window**

4. **Navigate to:** 
   ```
   C:\Users\Himamala Bommaku\the-pavilion\public\images\pavilion\
   ```

5. **Copy each image** from your source and **paste into the correct subfolder** with the correct filename

### Method 2: Drag and Drop

1. Have your source folder open
2. Have the destination folder open
3. Drag images one by one
4. Rename them to match the names above

---

## Step 4: Verify Images Are Saved

Check that you have files in these locations:

### Check Exteriors (should have 8 files):
```bash
dir "C:\Users\Himamala Bommaku\the-pavilion\public\images\pavilion\exteriors"
```

### Check Interiors (should have 8 files):
```bash
dir "C:\Users\Himamala Bommaku\the-pavilion\public\images\pavilion\interiors"
```

### Check Recreation Zone (should have 4 files):
```bash
dir "C:\Users\Himamala Bommaku\the-pavilion\public\images\pavilion\recreation-zone"
```

### Check Entrance (should have 2 files):
```bash
dir "C:\Users\Himamala Bommaku\the-pavilion\public\images\pavilion\entrance"
```

**Total should be: 22 image files** (some images used in multiple places)

---

## Step 5: Commit and Push to GitHub

Once all images are saved, run these commands:

### Option A: Using Git Bash or Terminal

```bash
# Navigate to project
cd "C:\Users\Himamala Bommaku\the-pavilion"

# Add all new images
git add public/images/pavilion/

# Check what's being added
git status

# Commit
git commit -m "feat: Add 27 premium villa images for Pavilion sections

- Added 8 exterior villa images
- Added 8 interior space images
- Added 4 recreation zone aerial images
- Added 2 entrance gate images

Images now complete for:
- Gallery section
- Clean Slate section
- East Facing villa section
- West Facing villa section
- Recreation Zone section

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

# Push to GitHub
git push origin main
```

### Option B: Using VS Code

1. Open VS Code
2. Go to Source Control panel (Ctrl+Shift+G)
3. You'll see all new images listed
4. Click the **"+" button** next to "public/images/pavilion/" to stage all images
5. Type commit message: "Add premium villa images"
6. Click **✓ Commit**
7. Click **Push** (or Sync)

---

## Step 6: Wait for Vercel Deployment

After pushing to GitHub:

1. **Vercel will automatically detect** the new commit
2. **Deployment will start** (takes ~30 seconds)
3. **Visit:** https://vercel.com/chaitanyabommak-techs-projects/the-pavilion
4. **Wait for "Ready"** status
5. **Visit:** https://bommakugroup.com

---

## Troubleshooting

### "I don't have the images on my computer"

If the images are:
- **With your architect/designer:** Ask them to send you all renders
- **In Google Drive/Dropbox:** Download them first
- **In email:** Save attachments to a folder first
- **On another device:** Transfer them via USB or cloud

### "Image file sizes are too large"

If images are bigger than 2MB each:
- Use an online compressor: https://tinypng.com/ or https://squoosh.app/
- Recommended: Under 500KB per image
- Format: Keep as JPG

### "I'm not sure which image is which"

Look at the content:
- **Street views** = Multiple villas in a row
- **Facades** = Single villa close-up
- **Aerials** = Bird's eye view from above
- **Interiors** = Inside rooms (living, kitchen, bedroom)
- **Recreation** = Pool, courts, facilities
- **Entrance** = Main gate with signage

---

## Quick Verification Checklist

Before pushing to GitHub, verify:

- [ ] All folders have images (not empty)
- [ ] Filenames match exactly (case-sensitive)
- [ ] File extensions are `.jpg` or `.jpeg` (lowercase)
- [ ] Total of ~22 image files saved
- [ ] Images are optimized (under 1MB each ideally)

---

## After Deployment

Once deployed, check:

1. Visit https://bommakugroup.com
2. Scroll through the page
3. Verify all new sections show images:
   - Gallery section
   - Clean Slate section
   - East Facing section (exteriors + interiors)
   - West Facing section (exteriors + interiors)
   - Recreation Zone section

---

**Need Help?** Let me know if you get stuck at any step!
