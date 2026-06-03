# Interactive Master Plan - Implementation Guide

## 🎯 What Was Built

A premium, production-ready interactive master plan experience where users select villas **directly from the actual bird's-eye master plan image** of The Pavilion project.

## 📁 Files Created/Modified

### **New Components**

1. **`components/floorplan/InteractiveMasterPlan.tsx`**
   - Uses the actual master plan image (`/assets/master-plan.png`) as the visual base
   - Overlays clickable SVG rectangles on each villa plot
   - Real-time tooltips on hover/touch
   - Visual highlighting for selected/hovered/sold villas
   - Responsive legend showing availability status
   - Touch-optimized for mobile devices

2. **`components/floorplan/FloorPlanViewer.tsx`**
   - Displays the floor plan for the selected villa
   - Shows villa code, type, facing, and status badge
   - Click-to-expand lightbox for detailed view
   - Empty state when no villa is selected

3. **`components/floorplan/SelectedVillaPanel.tsx`**
   - Complete villa details panel
   - Plot size, facing, dimensions, built-up area
   - Configuration (G+1+Penthouse)
   - Pricing and status badge
   - Context-aware CTA: "Enquire for Villa A5"
   - Feature list included

### **Modified Files**

4. **`components/VillaConfigurations.tsx`** - Complete rebuild
   - Master plan is now the PRIMARY selector (not secondary)
   - Desktop layout: Floor plan (2 cols) + Details panel (1 col) on top, Master plan below
   - Optional filters: Facing (All/East/West/North) and Size (All/150/165/200+)
   - URL deep linking support: `?villa=A5`
   - Auto-scroll to floor plan when villa is selected
   - Mobile-optimized with horizontal scroll for master plan

5. **`data/pavilionVillas.ts`** - Already exists
   - All 45 villas with accurate data
   - `mapPosition` coordinates for SVG overlay
   - Floor plan image mappings
   - Helper functions

6. **`app/globals.css`** - Added styles
   - Master plan container optimizations
   - Mobile horizontal scroll with touch support
   - Smooth transitions and hover effects
   - Select dropdown theming

## 🗺️ How Villa Coordinates Work

Each villa in `data/pavilionVillas.ts` has a `mapPosition` object:

```typescript
mapPosition: {
  x: 15,      // X position (percentage of viewBox 0-100)
  y: 45,      // Y position (percentage of viewBox 0-100)
  width: 8,   // Width (percentage)
  height: 12  // Height (percentage)
}
```

The SVG overlay uses `viewBox="0 0 100 100"` and scales automatically with the master plan image.

**Important:** These are **percentage-based coordinates**, not pixels, so they remain responsive.

## 🔧 How to Update Villa Data

### Change a Villa's Status

Edit `data/pavilionVillas.ts`:

```typescript
{
  id: "A5",
  status: "reserved",  // Change to: "available", "reserved", or "sold"
  // ... other fields
}
```

Visual effect:
- **Available**: White overlay with light border
- **Reserved**: Gold tinted overlay
- **Sold**: Dark greyed out, not clickable

### Update Villa Pricing

```typescript
{
  id: "A5",
  price: "₹2.75 Cr onwards",  // Update here
  // ... other fields
}
```

### Add/Update Floor Plan Images

```typescript
{
  id: "A5",
  floorPlanImages: {
    east: "/assets/floorplan-227e.png",   // East-facing plan
    west: "/assets/floorplan-227w.png",   // West-facing plan (if applicable)
    northEast: "/assets/floorplan-165ne.png",  // NE-facing
    northWest: "/assets/floorplan-165nw.png",  // NW-facing
  },
  // ... other fields
}
```

The system automatically picks the correct image based on the villa's `facing` property.

### Adjust Villa Position on Master Plan

If a villa's clickable area doesn't align perfectly with the image:

```typescript
mapPosition: {
  x: 16,     // Move right (increase) or left (decrease)
  y: 46,     // Move down (increase) or up (decrease)
  width: 9,  // Make wider/narrower
  height: 13 // Make taller/shorter
}
```

Use the browser's developer tools to inspect the SVG and fine-tune visually.

## 📱 Mobile Behavior

### Desktop (1024px+)
- Floor plan and villa details shown side-by-side at top
- Full-width interactive master plan below
- Hover tooltips on villa plots
- Click to select

### Tablet (768px - 1023px)
- Similar to desktop but slightly more compact
- Master plan gets horizontal scroll if needed

### Mobile (< 768px)
- Floor plan viewer shown first
- Villa details panel below it
- Interactive master plan at bottom with horizontal scroll
- Minimum width: 600px for master plan (swipeable)
- Touch-optimized: tap to see tooltip, tap again to select

## 🎨 Design & Visual States

### Selected Villa
- **Highlight**: Accent color (blue-grey) fill with glow effect
- **Border**: 2px solid accent color with outer shadow
- **Label**: White text, bold and clear

### Hovered Villa
- **Highlight**: Lighter accent fill
- **Border**: 2px solid accent
- **Tooltip**: Black card with villa code, plot size, facing, price

### Available Villa (default)
- **Fill**: Subtle white overlay (8% opacity)
- **Border**: Light white border
- **Cursor**: Pointer

### Reserved Villa
- **Fill**: Gold tint (15% opacity)
- **Border**: Gold border
- **Badge**: "Reserved" in gold on info panel

### Sold Villa
- **Fill**: Dark grey (50% opacity)
- **Border**: Dark border
- **Cursor**: Not-allowed
- **State**: Not clickable

## 🚀 How to Test Locally

1. **Start dev server** (if not running):
   ```bash
   cd the-pavilion
   npm run dev
   ```

2. **Open browser**: http://localhost:3000

3. **Navigate to Floor Plans section** (scroll down or click navbar link)

4. **Test interactions**:
   - Click any villa on the master plan
   - Floor plan should update above
   - Villa details should show on right
   - Selected villa should be highlighted
   - URL should update to `?villa=A5`

5. **Test mobile**:
   - Open DevTools (F12)
   - Toggle device emulation (Ctrl+Shift+M)
   - Select iPhone or Android device
   - Swipe horizontally on master plan
   - Tap villas to select

6. **Test filters**:
   - Use "All Facings" / "East" / "West" dropdowns
   - Use "All Sizes" / "150" / "165" / "200+" dropdowns
   - Only matching villas should remain visible on master plan

## 🌐 Deploying to Live Site

Your site is likely deployed via **Vercel** (based on the `.vercel` folder).

### Deploy via Git Push (Recommended)

1. **Commit changes**:
   ```bash
   git add .
   git commit -m "Add interactive master plan villa selector"
   ```

2. **Push to GitHub**:
   ```bash
   git push origin main
   ```

3. **Auto-deploy**: Vercel will automatically detect the push and deploy

4. **Check deployment**:
   - Go to https://vercel.com/dashboard
   - Find your project "the-pavilion"
   - Wait for deployment to complete (~2-3 minutes)
   - Visit https://bommakugroup.com

### Deploy via Vercel CLI (Alternative)

```bash
npm run build        # Build production version
vercel --prod        # Deploy to production
```

### Manual Deploy via Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Select "the-pavilion" project
3. Click "Deployments" → "Redeploy"
4. Confirm deployment

## ✅ Pre-Deployment Checklist

- [ ] All villa data is accurate (plot sizes, facings, prices)
- [ ] Floor plan images are uploaded to `/public/assets/`
- [ ] Master plan image exists at `/public/assets/master-plan.png`
- [ ] Villa statuses are correct (available/reserved/sold)
- [ ] Tested on desktop Chrome, Safari, Firefox
- [ ] Tested on mobile (iPhone Safari, Android Chrome)
- [ ] Tested all filters (facing, size)
- [ ] Tested deep linking (`?villa=A5`)
- [ ] No console errors in browser DevTools
- [ ] Build command runs successfully: `npm run build`

## 🔄 Future Updates

### To Add More Villas

1. Open `data/pavilionVillas.ts`
2. Add new villa object with all required fields
3. Determine `mapPosition` by inspecting the master plan
4. Test locally before deploying

### To Replace Master Plan Image

1. Export new master plan as PNG/JPG
2. Optimize image (use https://tinypng.com or similar)
3. Replace `/public/assets/master-plan.png`
4. **Important**: If aspect ratio changes, update `aspectRatio` in `InteractiveMasterPlan.tsx`
5. Recalibrate all `mapPosition` coordinates

### To Change Design Colors

Edit CSS variables in `app/globals.css`:
- `--accent`: Main highlight color
- `--ink`: Text color
- `--card`: Card background
- `--edge`: Border color

## 📊 Villa Data Summary

**Total Villas**: 45 (A1-A5, B1-B5, C1-C5, D1-D5, E1-E5, F1-F5, G1-G5, H1-H5, I1-I5)

**Plot Sizes**:
- 94 - 150 sq. yds (Type A)
- 165 - 167 sq. yds (Type B)
- 222 - 250 sq. yds (Type C)

**Facings**: East, West, North East, North West

**Floor Plans Available**:
- Type A: 150 East, 150 West
- Type B: 165 NE, 165 NW, 167 East
- Type C: 222 West, 227 East

## 🐛 Troubleshooting

### Villa clicks not working
- Check browser console for errors
- Verify `mapPosition` coordinates are within 0-100 range
- Ensure `pointerEvents: "all"` is set on SVG rects

### Floor plan not updating
- Check that villa has `floorPlanImages` defined
- Verify image path exists in `/public/assets/`
- Check browser Network tab for 404 errors

### Master plan looks stretched/squished
- Verify `aspectRatio` in `InteractiveMasterPlan.tsx` matches actual image
- Check image dimensions (should be ~16:9 ratio)

### Mobile scroll not smooth
- Ensure `-webkit-overflow-scrolling: touch` is in CSS
- Check `min-width` on master plan container
- Test on actual device, not just emulator

## 📞 Support

For any issues or questions:
- Check browser console for error messages
- Review this guide
- Test on different devices/browsers
- Check villa data in `pavilionVillas.ts`

---

**Last Updated**: June 2, 2026  
**Version**: 1.0  
**Live Site**: https://bommakugroup.com
