# SEO Quick Start Guide
## The Pavillion — Your First 7 Days

**Status:** ✅ All 8 SEO phases implemented and committed  
**Ready for:** Immediate execution  
**Start Date:** ________________

---

## 🚨 CRITICAL: Do These FIRST (Day 1)

### 1. Run SEO Verification (5 minutes)

```bash
# Verify all SEO implementations are working
npx ts-node scripts/seo-verification.ts

# Expected: 90-100% overall score
# If any checks fail, review and fix before proceeding
```

### 2. Push to Production (10 minutes)

```bash
# Push all SEO commits to GitHub
git push origin main

# Deploy to production (Vercel/Netlify/your hosting)
# Verify live site loads correctly
```

### 3. Submit Sitemap to Google (5 minutes)

1. Go to: https://search.google.com/search-console
2. Add property: `https://bommakugroup.com`
3. Verify ownership (DNS or HTML file method)
4. Submit sitemap: `https://bommakugroup.com/sitemap.xml`
5. Wait 24-48 hours for indexing to begin

---

## 🔥 HIGH IMPACT: Week 1 Priorities

### Day 1: Performance Quick Win

**🎯 Goal:** Fix hero image (biggest performance blocker)

**Current:** `pavilion-hero.png` = 8,778 KB (8.5 MB)  
**Target:** < 300 KB (96% reduction)

**How to fix:**
1. Download image: `public/assets/pavilion-hero.png`
2. Go to: https://squoosh.app
3. Upload image
4. Resize: Max width 1920px
5. Format: WebP, Quality: 85
6. Download (should be < 300 KB)
7. Replace original file
8. Test: `npm run dev` → check homepage loads faster

**Expected improvement:** LCP 4.5s → 1.8s (60% faster load)

---

### Day 2: Google Business Profile Setup

**🎯 Goal:** Claim GBP listing & complete profile 100%

**Steps:**
1. Go to: https://business.google.com
2. Search for "The Pavillion Boduppal" OR "Bommaku Group"
3. Claim listing (or create if doesn't exist)
4. Verify ownership (postcard or phone verification)
5. Complete profile using checklist in: `docs/GBP-OPTIMIZATION-PLAYBOOK.md` (Page 1, Section 3)

**Critical fields:**
- Business name: `The Pavillion by Bommaku Group`
- Address: `Surya Hills, Boduppal, Hyderabad, Telangana 500039`
- Phone: `+91 96760 77142`
- Website: `https://bommakugroup.com`
- Hours: Mon-Sat 10AM-6PM, Sun 10AM-5PM
- Category: Real Estate Developer (primary)

---

### Day 3: First 5 Google Reviews

**🎯 Goal:** Get social proof started

**How:**
1. Create short review link:
   - Go to GBP dashboard → Get more reviews
   - Copy short link (e.g., `https://g.page/r/YOUR_ID/review`)

2. Ask 5 recent buyers/site visitors:
   ```
   Hi [Name], thank you for visiting The Pavillion! 
   We'd love your feedback. Please leave us a Google review: [link]
   It takes 2 minutes and helps other families discover us.
   - Team Bommaku
   ```

3. Respond to every review within 24 hours (template in GBP playbook)

---

### Day 4-5: Image Optimization Batch

**🎯 Goal:** Reduce total page weight by 85%

**Floor plans to compress (7 files):**
```
public/assets/floorplan-150e.png (2,864 KB)
public/assets/floorplan-150w.png (2,766 KB)
public/assets/floorplan-165ne.png (2,777 KB)
public/assets/floorplan-165nw.png (2,927 KB)
public/assets/floorplan-167e.png (2,935 KB)
public/assets/floorplan-222w.png (3,128 KB)
public/assets/floorplan-227e.png (3,169 KB)
```

**Batch process:**
1. Install Squoosh CLI: `npm install -g @squoosh/cli`
2. Run batch conversion:
   ```bash
   cd public/assets
   squoosh-cli --webp '{"quality":85}' floorplan-*.png
   ```
3. Replace original files with optimized versions
4. Test: Check `/the-pavillion` page loads faster

**Target:** Each file < 400 KB (total < 3 MB vs current 20 MB)

---

### Day 6: Quick Facts Tables (AEO)

**🎯 Goal:** Make content citation-worthy for AI

**Add Quick Facts table to `/villas-in-boduppal` page:**

Location: `app/villas-in-boduppal/page.tsx`

Add after hero section, before "Why Boduppal" section:

```typescript
{/* Quick Facts Table */}
<section className="py-12 px-6" style={{ background: "var(--bg-subtle)" }}>
  <div className="max-w-4xl mx-auto">
    <h2 style={{ color: "var(--ink)" }} className="text-3xl font-light mb-6">
      Quick Facts
    </h2>
    
    <div className="overflow-x-auto">
      <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
        <tbody style={{ color: "var(--ink-2)" }}>
          <tr>
            <td className="border p-3 font-medium" style={{ borderColor: "var(--ink-4)" }}>Location</td>
            <td className="border p-3" style={{ borderColor: "var(--ink-4)" }}>Surya Hills, Boduppal, Hyderabad 500039</td>
          </tr>
          <tr>
            <td className="border p-3 font-medium" style={{ borderColor: "var(--ink-4)" }}>Total Villas</td>
            <td className="border p-3" style={{ borderColor: "var(--ink-4)" }}>33 standalone (no shared walls)</td>
          </tr>
          <tr>
            <td className="border p-3 font-medium" style={{ borderColor: "var(--ink-4)" }}>Plot Sizes</td>
            <td className="border p-3" style={{ borderColor: "var(--ink-4)" }}>150-228 Sq. Yds</td>
          </tr>
          <tr>
            <td className="border p-3 font-medium" style={{ borderColor: "var(--ink-4)" }}>Built-Up Area</td>
            <td className="border p-3" style={{ borderColor: "var(--ink-4)" }}>2,200-2,500 SFT (G+1+Penthouse)</td>
          </tr>
          <tr>
            <td className="border p-3 font-medium" style={{ borderColor: "var(--ink-4)" }}>Configuration</td>
            <td className="border p-3" style={{ borderColor: "var(--ink-4)" }}>3 BHK + Pooja Room</td>
          </tr>
          <tr>
            <td className="border p-3 font-medium" style={{ borderColor: "var(--ink-4)" }}>Pricing</td>
            <td className="border p-3" style={{ borderColor: "var(--ink-4)" }}>₹1.87 Cr - ₹3.0 Cr</td>
          </tr>
          <tr>
            <td className="border p-3 font-medium" style={{ borderColor: "var(--ink-4)" }}>Metro Distance</td>
            <td className="border p-3" style={{ borderColor: "var(--ink-4)" }}>8 minutes to Uppal Metro (3.5 km)</td>
          </tr>
          <tr>
            <td className="border p-3 font-medium" style={{ borderColor: "var(--ink-4)" }}>Recreation Zone</td>
            <td className="border p-3" style={{ borderColor: "var(--ink-4)" }}>24,000 SFT (750 SFT per family)</td>
          </tr>
          <tr>
            <td className="border p-3 font-medium" style={{ borderColor: "var(--ink-4)" }}>Bank Approvals</td>
            <td className="border p-3" style={{ borderColor: "var(--ink-4)" }}>SBI, ICICI, HDFC, Kotak, Bajaj, Karur Vysya</td>
          </tr>
          <tr>
            <td className="border p-3 font-medium" style={{ borderColor: "var(--ink-4)" }}>Legal Status</td>
            <td className="border p-3" style={{ borderColor: "var(--ink-4)" }}>HMDA registered, GP Layout, 30-year EC</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
```

**Why:** Tables are 3-5× more likely to be cited by AI systems (ChatGPT, Claude, Perplexity)

---

### Day 7: Test AI Citations

**🎯 Goal:** See if AI can extract and cite your content

**Test queries in ChatGPT/Claude/Perplexity:**
1. "What are the best villa projects in Boduppal?"
2. "Villa prices in Boduppal 2026"
3. "How far is The Pavillion from Uppal Metro?"
4. "What's the recreation zone like at The Pavillion?"
5. "Can NRIs buy villas at The Pavillion?"

**Check:**
- Does AI mention The Pavillion?
- Does it cite bommakugroup.com as source?
- What facts does it extract? (verify accuracy)

**Document results** → if citation rate < 40%, review AEO strategy in `docs/AEO-OPTIMIZATION-STRATEGY.md`

---

## 📅 Monthly Maintenance (First Friday of Each Month)

### SEO Health Check (30 min)
```bash
# 1. Run verification script
npm run seo:verify

# 2. Check Google Search Console
# - Any crawl errors?
# - Core Web Vitals passing?
# - New keywords ranking?

# 3. Review Google Analytics
# - Organic traffic trend (up or down?)
# - Top landing pages
# - Bounce rate changes
```

### GBP Maintenance (1 hour)
- [ ] Publish 4 Google Posts (use templates in playbook)
- [ ] Respond to all reviews (< 24 hour SLA)
- [ ] Upload 2-3 new photos (construction progress)
- [ ] Check GBP Insights (views, clicks, calls)

### Content Updates (30 min)
- [ ] Update `public/llms.txt` if facts changed (pricing, availability)
- [ ] Add 1 new FAQ to money pages (based on user questions)

### Performance Check (30 min)
- [ ] Run Lighthouse on 3 key pages (homepage, /the-pavillion, top blog post)
- [ ] Fix any regressions (score drops > 10 points)

---

## 🎯 Success Metrics Dashboard

**Track these weekly in a Google Sheet:**

| Metric | Week 1 | Week 2 | Week 3 | Week 4 | Target (Month 1) |
|--------|--------|--------|--------|--------|------------------|
| Organic Traffic | | | | | 2× baseline |
| Google Reviews | | | | | 10+ |
| GBP Phone Calls | | | | | 10+ |
| Keywords in Top 10 | | | | | 5+ |
| Hero Image Size (KB) | 8778 | | | | < 300 |
| Lighthouse Performance | | | | | > 85 |

**How to measure:**
- Organic traffic: Google Analytics → Acquisition → Organic Search
- Reviews: Google Business Profile dashboard
- Phone calls: GBP Insights → Actions
- Rankings: Google Search Console → Performance → Queries
- Image size: File properties
- Lighthouse: Chrome DevTools → Lighthouse tab

---

## 📚 Reference Documents

**All strategic playbooks in `/docs/` folder:**

1. **`GBP-OPTIMIZATION-PLAYBOOK.md`** (827 lines)
   - Complete GBP setup checklist
   - Review generation system
   - Photo/video strategy
   - 6-month roadmap to Map Pack #1

2. **`PERFORMANCE-AUDIT-REPORT.md`** (869 lines)
   - Image optimization guide
   - Core Web Vitals improvement plan
   - JavaScript optimization
   - 3-week action plan

3. **`AEO-OPTIMIZATION-STRATEGY.md`** (714 lines)
   - Citation-worthy content formats
   - Target queries for AI
   - Testing protocol
   - Enhancement priorities

4. **`FINAL-SEO-REPORT.md`** (600+ lines)
   - Executive summary
   - Complete implementation overview
   - Metrics & KPIs
   - Maintenance schedules

---

## ⚡ Quick Commands

```bash
# Run SEO verification
npm run seo:verify

# Start dev server
npm run dev

# Build for production
npm run build

# Optimize images with Squoosh CLI
squoosh-cli --webp '{"quality":85}' public/assets/image.jpg

# Check file sizes
du -sh public/assets/*
```

---

## 🆘 Troubleshooting

**"Verification script shows failures"**
→ Review failed checks, fix issues, re-run script

**"Images still large after optimization"**
→ Use Squoosh.app (online), ensure WebP format, quality 80-85

**"Google won't index my pages"**
→ Check Search Console for errors, ensure sitemap submitted, wait 48-72 hours

**"No GBP reviews coming in"**
→ Follow review request templates in GBP playbook, ask in-person after site visits

**"AI not citing my content"**
→ Add more tables, ensure 40-60 word direct answers, update llms.txt

---

## ✅ Week 1 Completion Checklist

By end of Week 1, you should have:

- [x] SEO verification script run (90%+ score)
- [x] All commits pushed to production
- [x] Sitemap submitted to Google Search Console
- [x] Hero image optimized (8.5 MB → < 300 KB)
- [x] Floor plans optimized (20 MB → < 3 MB)
- [x] Google Business Profile claimed & 100% complete
- [x] First 5 Google reviews collected
- [x] Quick Facts table added to 1 money page
- [x] AI citation test completed (documented results)
- [x] Monthly maintenance calendar scheduled

**Once complete, you're ready for Month 2-6 execution!**

Refer to `docs/FINAL-SEO-REPORT.md` for the full roadmap.

---

**Questions?** Review the strategic playbooks in `/docs/`

**Need help?** All implementation details documented in commit messages: `git log`

**Track progress:** Use the metrics dashboard above

---

*Quick Start Guide Version 1.0 | July 11, 2026*
