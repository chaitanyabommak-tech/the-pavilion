# Week 2 Performance Audit — The Pavillion

**Purpose:** Validate Week 1 image optimization improvements  
**Test Date:** July 12, 2026 (2 days after optimizations deployed)  
**Optimization Deployed:** Hero image (96.3% reduction), Floor plans (80.9% reduction)

---

## 🎯 **Expected Improvements from Week 1**

### **Before Week 1 (Baseline):**
- Hero image: 8.57 MB
- Floor plans (7 files): 20.08 MB
- **Total:** 28.65 MB of images
- **LCP (Largest Contentful Paint):** ~4.5s
- **Lighthouse Performance:** ~50-60

### **After Week 1 (Target):**
- Hero image: 326 KB (96.3% reduction)
- Floor plans: 3.83 MB (80.9% reduction)
- **Total:** 4.16 MB of images (85.5% reduction)
- **LCP Target:** <2.5s (60% faster)
- **Lighthouse Performance Target:** 90+

**Expected Gains:**
- LCP improvement: 4.5s → 1.5-1.8s
- Lighthouse score: +30-40 points
- Core Web Vitals: PASS (was FAIL)
- Google ranking: Improvement expected

---

## 📊 **Pages to Test (3 Priority Pages)**

### **1. Homepage (/)** 
**Why:** Hero image optimization (8.57 MB → 326 KB)  
**Expected Impact:** Massive LCP improvement  
**Primary Metric:** LCP

### **2. /the-pavillion**
**Why:** 7 floor plan images optimized (20.08 MB → 3.83 MB)  
**Expected Impact:** Gallery loading speed  
**Primary Metric:** Total Blocking Time, Speed Index

### **3. /villas-in-boduppal**
**Why:** Money page, Quick Facts table added  
**Expected Impact:** Overall performance + AEO  
**Primary Metric:** LCP, CLS

---

## 🧪 **How to Run Performance Tests**

### **Method 1: Chrome DevTools Lighthouse (Recommended)**

**Step-by-step:**

1. **Open Chrome (or Edge)**
   - Make sure you're using the latest version

2. **Open Developer Tools**
   - Windows: Press `F12` or `Ctrl+Shift+I`
   - Mac: Press `Cmd+Option+I`

3. **Go to Lighthouse Tab**
   - Click "Lighthouse" tab in DevTools
   - (If you don't see it, click the `>>` arrows to find it)

4. **Configure Test Settings**
   - Mode: Navigation (default)
   - Device: Desktop (test both Desktop and Mobile)
   - Categories: Check "Performance" only (faster)
   - Clear storage: ✓ (for accurate results)

5. **Run Test**
   - Click "Analyze page load"
   - Wait 30-60 seconds
   - **IMPORTANT:** Don't interact with the page during test

6. **Save Results**
   - Click "View report" when done
   - Take screenshot or save as HTML
   - Note the scores

7. **Repeat for Mobile**
   - Change Device to "Mobile"
   - Run test again
   - Compare Desktop vs Mobile scores

---

### **Method 2: PageSpeed Insights (Google's Tool)**

**URL:** https://pagespeed.web.dev/

**Step-by-step:**

1. Go to https://pagespeed.web.dev/
2. Enter URL (e.g., `https://bommakugroup.com`)
3. Click "Analyze"
4. Wait 1-2 minutes for results
5. Review both Mobile and Desktop scores
6. Screenshot or save results

**Pros:**
- Official Google tool
- Tests from Google's servers (more accurate for real-world)
- Shows field data (real user metrics) if available
- Automatically tests both mobile & desktop

**Cons:**
- Slower than Lighthouse (2 min vs 30 sec)
- Requires internet connection

---

### **Method 3: WebPageTest (Advanced)**

**URL:** https://www.webpagetest.org/

**Step-by-step:**

1. Go to https://www.webpagetest.org/
2. Enter URL: `https://bommakugroup.com`
3. Test Location: Choose "Mumbai, India" (closest to Hyderabad)
4. Browser: Chrome
5. Connection: Cable/FIOS (fast), 4G (mobile)
6. Number of Tests: 3 (for average)
7. Click "Start Test"
8. Wait 3-5 minutes
9. Review detailed waterfall, filmstrip, metrics

**Pros:**
- Most detailed analysis
- Shows visual filmstrip of page loading
- Tests from real locations (Mumbai server)
- Waterfall chart shows every resource

**Cons:**
- Takes longest (3-5 min)
- More complex interface
- Requires account for advanced features

---

## 📋 **Performance Audit Results Template**

Copy this table and fill in your results:

### **DESKTOP SCORES**

| Page | Performance | LCP | FID | CLS | Speed Index | Notes |
|------|-------------|-----|-----|-----|-------------|-------|
| **Homepage (/)** | | | | | | |
| **(Before)** | 50-60 | 4.5s | | | | Baseline estimate |
| **(After - Expected)** | 90+ | <1.8s | <100ms | <0.1 | <3.0s | Target |
| **(After - Actual)** | ___ | ___s | ___ms | ___ | ___s | Fill this in |
| **Improvement** | +___ | -___% | | | | Calculate |
| | | | | | | |
| **/the-pavillion** | | | | | | |
| **(Before)** | 45-55 | ~5.0s | | | | Floor plan heavy |
| **(After - Expected)** | 85+ | <2.0s | <100ms | <0.1 | <3.5s | Target |
| **(After - Actual)** | ___ | ___s | ___ms | ___ | ___s | Fill this in |
| **Improvement** | +___ | -___% | | | | Calculate |
| | | | | | | |
| **/villas-in-boduppal** | | | | | | |
| **(Before)** | 60-70 | ~3.5s | | | | Text heavy page |
| **(After - Expected)** | 90+ | <2.0s | <100ms | <0.1 | <2.5s | Target |
| **(After - Actual)** | ___ | ___s | ___ms | ___ | ___s | Fill this in |
| **Improvement** | +___ | -___% | | | | Calculate |

---

### **MOBILE SCORES**

| Page | Performance | LCP | FID | CLS | Speed Index | Notes |
|------|-------------|-----|-----|-----|-------------|-------|
| **Homepage (/)** | | | | | | |
| **(Before)** | 30-40 | 6.0s | | | | Mobile slower |
| **(After - Expected)** | 75+ | <2.5s | <100ms | <0.1 | <4.0s | Target |
| **(After - Actual)** | ___ | ___s | ___ms | ___ | ___s | Fill this in |
| **Improvement** | +___ | -___% | | | | Calculate |
| | | | | | | |
| **/the-pavillion** | | | | | | |
| **(Before)** | 25-35 | 7.0s | | | | Heavy gallery |
| **(After - Expected)** | 70+ | <3.0s | <100ms | <0.1 | <4.5s | Target |
| **(After - Actual)** | ___ | ___s | ___ms | ___ | ___s | Fill this in |
| **Improvement** | +___ | -___% | | | | Calculate |
| | | | | | | |
| **/villas-in-boduppal** | | | | | | |
| **(Before)** | 40-50 | 5.0s | | | | |
| **(After - Expected)** | 75+ | <2.5s | <100ms | <0.1 | <3.5s | Target |
| **(After - Actual)** | ___ | ___s | ___ms | ___ | ___s | Fill this in |
| **Improvement** | +___ | -___% | | | | Calculate |

---

## 🎯 **Core Web Vitals Targets**

### **What are Core Web Vitals?**

Google's 3 key performance metrics that affect SEO ranking:

| Metric | Name | What It Measures | Good | Needs Improvement | Poor |
|--------|------|------------------|------|-------------------|------|
| **LCP** | Largest Contentful Paint | How fast main content loads | <2.5s | 2.5-4.0s | >4.0s |
| **FID** | First Input Delay | How fast page responds to clicks | <100ms | 100-300ms | >300ms |
| **CLS** | Cumulative Layout Shift | How much content jumps around | <0.1 | 0.1-0.25 | >0.25 |

**Goal:** All 3 metrics in "Good" range = SEO boost!

---

## 🔍 **What to Look For in Results**

### **🟢 GOOD SIGNS (Success):**

1. **Performance Score 90+** (Desktop) or 75+ (Mobile)
   - Lighthouse is happy with your site
   - No major issues

2. **LCP <2.5s**
   - Hero image loads fast
   - User sees content quickly

3. **CLS <0.1**
   - No layout jumps
   - Smooth visual experience

4. **All Core Web Vitals Green**
   - Google will rank you higher
   - Better user experience

5. **Speed Index <3.0s** (Desktop) or <4.0s (Mobile)
   - Page feels fast to users

---

### **🟡 NEEDS IMPROVEMENT:**

1. **Performance Score 60-89** (Desktop) or 50-74 (Mobile)
   - Room for optimization
   - Not terrible, but not great

2. **LCP 2.5-4.0s**
   - Could be faster
   - Check if images are still too large

3. **CLS 0.1-0.25**
   - Some layout shift
   - Check image dimensions, font loading

4. **Opportunities Section Has Items**
   - Lighthouse suggests improvements
   - Review "Opportunities" section carefully

---

### **🔴 RED FLAGS (Issues):**

1. **Performance Score <60** (Desktop) or <50 (Mobile)
   - Something's wrong
   - Image optimization didn't work?
   - Check if WebP files are being served

2. **LCP >4.0s**
   - Still too slow
   - Hero image might not be optimized
   - Check Network tab for actual file size

3. **CLS >0.25**
   - Major layout shift issues
   - Images missing width/height attributes
   - Font loading causing shifts

4. **Errors in Diagnostics**
   - Red items in diagnostics
   - Must fix these

---

## 🐛 **Troubleshooting Common Issues**

### **Issue 1: Performance Score Didn't Improve**

**Possible Causes:**
- WebP images not being served (server config issue)
- Browser cache serving old PNG files
- CDN not updated yet

**How to Check:**
1. Open DevTools → Network tab
2. Reload page
3. Look for `pavilion-hero.webp` in list
4. Click it → check actual size delivered
5. Should be ~326 KB, not 8.57 MB

**Fix:**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Wait 24 hours for CDN propagation

---

### **Issue 2: LCP Still Slow (>3.0s)**

**Possible Causes:**
- Hero image not preloaded
- WebP not supported by browser
- Slow server response time

**How to Check:**
1. Look at Lighthouse "Diagnostics" section
2. Check "Preload key requests" item
3. Check "Properly size images" item

**Fix:**
- Verify layout.tsx has hero preload tag
- Check if WEBP is in preload tag, not JPG
- Consider adding CDN for image delivery

---

### **Issue 3: CLS (Layout Shift) Issues**

**Possible Causes:**
- Images missing width/height attributes
- Fonts loading late
- Ads or dynamic content

**How to Check:**
1. Lighthouse → "Avoid large layout shifts"
2. Shows which elements are shifting
3. Usually images or fonts

**Fix:**
- Add explicit width/height to Image components
- Use next/font for font loading
- Reserve space for dynamic content

---

### **Issue 4: Different Scores on Different Tools**

**This is Normal!**

**Why Scores Differ:**
- **Lighthouse (DevTools):** Tests from YOUR computer, YOUR internet
- **PageSpeed Insights:** Tests from Google's servers (cloud)
- **WebPageTest:** Tests from specific location (Mumbai server)

**What to Trust:**
- PageSpeed Insights = most accurate for SEO (Google's official tool)
- Lighthouse = good for debugging (run many tests quickly)
- WebPageTest = best for detailed analysis

**Rule of Thumb:**
- If PageSpeed Insights shows green, you're good
- If DevTools Lighthouse shows yellow, might be your slow internet

---

## 📸 **How to Document Results**

### **Screenshot Checklist:**

For each page tested, capture:

1. **Overall Lighthouse Score**
   - Screenshot showing Performance number
   - Include date/time in screenshot

2. **Core Web Vitals Section**
   - LCP, FID, CLS values
   - Should all be green

3. **Opportunities Section** (if any)
   - Shows what could be improved
   - Note top 3 opportunities

4. **Diagnostics Section** (if any)
   - Red/yellow items to fix

5. **Network Tab (Optional)**
   - Shows actual file sizes loaded
   - Useful for debugging

---

## ✅ **Success Criteria**

### **Minimum Acceptable (PASS):**
- Desktop Performance: ≥80
- Mobile Performance: ≥60
- LCP: <3.0s (Desktop), <4.0s (Mobile)
- All Core Web Vitals: Good or Needs Improvement (not Poor)

### **Target (GOOD):**
- Desktop Performance: ≥90
- Mobile Performance: ≥75
- LCP: <2.0s (Desktop), <2.5s (Mobile)
- All Core Web Vitals: Good (Green)

### **Excellent (GREAT):**
- Desktop Performance: 95+
- Mobile Performance: 85+
- LCP: <1.5s (Desktop), <2.0s (Mobile)
- All Core Web Vitals: Good + All diagnostics green

---

## 📊 **After Testing: Next Steps**

### **If Results are GOOD (90+ Desktop, 75+ Mobile):**
✅ Week 1 optimizations worked!  
✅ Document results in this file  
✅ Move to next Week 2 task  
✅ Monitor Core Web Vitals in Google Search Console (after 28 days)

### **If Results are MEDIUM (70-89 Desktop, 50-74 Mobile):**
⚠️ Partial success  
⚠️ Review "Opportunities" section in Lighthouse  
⚠️ Check if WebP images are being served  
⚠️ Consider additional optimizations (font optimization, code splitting)

### **If Results are POOR (<70 Desktop, <50 Mobile):**
❌ Something went wrong  
❌ Check if image files were actually replaced  
❌ Verify Hero.tsx and VillaConfigurations.tsx reference .webp not .png  
❌ Hard refresh browser (Ctrl+Shift+R)  
❌ Check Network tab for actual file sizes  
❌ May need to investigate server/CDN configuration

---

## 🔗 **Useful Links**

- **PageSpeed Insights:** https://pagespeed.web.dev/
- **WebPageTest:** https://www.webpagetest.org/
- **Core Web Vitals Guide:** https://web.dev/vitals/
- **Lighthouse Docs:** https://developer.chrome.com/docs/lighthouse/
- **Next.js Image Optimization:** https://nextjs.org/docs/pages/building-your-application/optimizing/images

---

## 📝 **Test Results (Fill This In)**

### **Test Conducted By:** _______________
### **Test Date:** _______________
### **Test Time:** _______________
### **Internet Speed:** _______________ Mbps (run speed test: fast.com)

---

### **HOMEPAGE (/) RESULTS:**

**Desktop:**
- Performance Score: ___/100
- LCP: ___s
- FID: ___ms
- CLS: ___
- Speed Index: ___s
- Total Blocking Time: ___ms

**Mobile:**
- Performance Score: ___/100
- LCP: ___s
- FID: ___ms
- CLS: ___
- Speed Index: ___s
- Total Blocking Time: ___ms

**Notes:**
_______________________________________
_______________________________________

---

### **/THE-PAVILLION RESULTS:**

**Desktop:**
- Performance Score: ___/100
- LCP: ___s
- FID: ___ms
- CLS: ___
- Speed Index: ___s

**Mobile:**
- Performance Score: ___/100
- LCP: ___s
- FID: ___ms
- CLS: ___
- Speed Index: ___s

**Notes:**
_______________________________________
_______________________________________

---

### **/VILLAS-IN-BODUPPAL RESULTS:**

**Desktop:**
- Performance Score: ___/100
- LCP: ___s
- FID: ___ms
- CLS: ___
- Speed Index: ___s

**Mobile:**
- Performance Score: ___/100
- LCP: ___s
- FID: ___ms
- CLS: ___
- Speed Index: ___s

**Notes:**
_______________________________________
_______________________________________

---

## 🎯 **Overall Assessment**

**Did Week 1 Image Optimization Succeed?**
- [ ] Yes - All targets met
- [ ] Partial - Some improvement, needs more work
- [ ] No - No significant improvement

**Next Actions:**
1. _______________________________________
2. _______________________________________
3. _______________________________________

---

**Last Updated:** July 12, 2026  
**Next Audit:** July 26, 2026 (2-week follow-up)
