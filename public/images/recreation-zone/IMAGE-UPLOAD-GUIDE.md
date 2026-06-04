# Recreation Zone Image Upload Guide

## Overview
The Recreation Zone section now has a 3-column responsive image gallery that displays 6 high-quality renders. Currently using placeholder images from other sections.

## Required Images

Upload the following images to this folder (`public/images/recreation-zone/`):

### Image 1: Zen Garden Seating
**Filename:** `zen-garden-seating.jpg`  
**Description:** Zen garden with wooden pergola, outdoor seating pods  
**From your screenshots:** First image (top-left)  
**Current placeholder:** `/assets/garden-pergola.jpeg`

### Image 2: Pool & Villas Aerial
**Filename:** `pool-villas-aerial.jpg`  
**Description:** Aerial view showing recreation zone, villas, and pool complex  
**From your screenshots:** Second image (top-center)  
**Current placeholder:** `/assets/clubhouse-aerial.jpeg`

### Image 3: Kids Play Area at Sunset
**Filename:** `kids-play-sunset.jpg`  
**Description:** Multi-level kids play area with sunset lighting  
**From your screenshots:** Third image (top-right)  
**Current placeholder:** `/assets/rec-courts.jpg`

### Image 4: Infinity Pool Deck
**Filename:** `infinity-pool-deck.jpg`  
**Description:** Rooftop infinity pool with deck chairs and cabanas  
**From your screenshots:** Fourth image (bottom-left)  
**Current placeholder:** `/assets/pool-deck.jpeg`

### Image 5: Landscaped Courtyard
**Filename:** `landscaped-courtyard.jpg`  
**Description:** Landscaped garden courtyard with flowering plants and seating  
**From your screenshots:** Fifth image (bottom-center)  
**Current placeholder:** `/assets/garden-pergola.jpeg`

### Image 6: Evening Entrance View
**Filename:** `evening-entrance.jpg`  
**Description:** Evening view of Recreation Zone with architectural lighting  
**From your screenshots:** Sixth/Seventh image (bottom-right area)  
**IMPORTANT:** Remove "Reliance Fresh" branding from this render before uploading  
**Current placeholder:** `/assets/rec-bridge.jpeg`

## Image Specifications

- **Format:** JPG or WebP
- **Dimensions:** Minimum 1200px width
- **Aspect Ratio:** 4:3 (to match layout)
- **Quality:** High-quality architectural renders
- **File Size:** Optimize to under 500KB per image (use tools like TinyJPG)
- **Color Space:** sRGB

## Legal & Branding Safety

### ⚠️ CRITICAL - Remove Third-Party Branding
**Image 6 & 7** in your screenshots show "Reliance Fresh" signage:
- This branding MUST be removed or blurred out
- Replace with generic "Supermarket" or "Retail Space" signage
- OR use "Ratnadeep Supermarket" (as mentioned in amenities list)
- Do NOT publish images with Reliance Fresh unless you have written permission

### Safe Alternative Text for Renders
If partnership is not confirmed:
- "Premium retail space planned"
- "Supermarket coming soon"
- "Retail anchor under finalization"

## After Uploading Images

Once you've uploaded the 6 images to this folder, update the following file:

**File:** `components/RecreationZone.tsx`  
**Lines:** ~210-285 (Recreation Zone Gallery section)

**Find and replace:**

```typescript
// OLD (placeholder)
backgroundImage: "url('/assets/garden-pergola.jpeg')"

// NEW (actual image)
backgroundImage: "url('/images/recreation-zone/zen-garden-seating.jpg')"
```

Do this for all 6 images according to the mapping below.

## Image Mapping

| Image Slot | Current Placeholder | Replace With |
|------------|-------------------|--------------|
| Image 1 | `/assets/garden-pergola.jpeg` | `/images/recreation-zone/zen-garden-seating.jpg` |
| Image 2 | `/assets/clubhouse-aerial.jpeg` | `/images/recreation-zone/pool-villas-aerial.jpg` |
| Image 3 | `/assets/rec-courts.jpg` | `/images/recreation-zone/kids-play-sunset.jpg` |
| Image 4 | `/assets/pool-deck.jpeg` | `/images/recreation-zone/infinity-pool-deck.jpg` |
| Image 5 | `/assets/garden-pergola.jpeg` | `/images/recreation-zone/landscaped-courtyard.jpg` |
| Image 6 | `/assets/rec-bridge.jpeg` | `/images/recreation-zone/evening-entrance.jpg` |

## Code Example

Current code (line ~217 in RecreationZone.tsx):
```typescript
<div
  className="aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden"
  style={{
    backgroundImage: "url('/assets/garden-pergola.jpeg')",
    background: "url('/assets/garden-pergola.jpeg') center/cover, var(--img-ph)"
  }}
  role="img"
  aria-label="Zen garden with wooden pergola seating at Bommaku Recreation Zone"
/>
```

Updated code (after uploading zen-garden-seating.jpg):
```typescript
<div
  className="aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden"
  style={{
    backgroundImage: "url('/images/recreation-zone/zen-garden-seating.jpg')",
    background: "url('/images/recreation-zone/zen-garden-seating.jpg') center/cover, var(--img-ph)"
  }}
  role="img"
  aria-label="Zen garden with wooden pergola seating at Bommaku Recreation Zone"
/>
```

## Testing After Upload

1. **Local Testing:**
   ```bash
   npm run dev
   ```
   Visit: http://localhost:3000/#recreation-zone

2. **Check images load:**
   - Open browser DevTools (F12)
   - Go to Network tab
   - Filter by "Img"
   - Refresh page
   - Verify all 6 images load with 200 status

3. **Build & Deploy:**
   ```bash
   npm run build
   git add public/images/recreation-zone/
   git add components/RecreationZone.tsx
   git commit -m "Update Recreation Zone gallery with actual renders"
   git push origin main
   npx vercel --prod
   ```

## Gallery Layout

The gallery is responsive:
- **Desktop (lg+):** 3 columns
- **Tablet (md):** 2 columns  
- **Mobile:** 1 column (stacked)

All images have:
- Rounded corners (`rounded-lg`)
- 4:3 aspect ratio (`aspect-[4/3]`)
- Cover background sizing
- Gap spacing between images
- Proper alt text for accessibility

## Current Status

✅ Gallery structure implemented  
✅ Responsive grid layout complete  
✅ Placeholder images active  
⏳ Awaiting actual Recreation Zone renders  
⏳ Reliance Fresh branding needs removal from Image 6

## Questions?

If you need help updating the image paths after upload, the changes are straightforward:
1. Upload 6 images to this folder
2. Update 6 `backgroundImage` URLs in `components/RecreationZone.tsx`
3. Build and deploy

**Live Preview:** https://bommakugroup.com/#recreation-zone
