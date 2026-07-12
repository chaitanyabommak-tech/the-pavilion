# Performance Testing Scripts

Automated performance monitoring for The Pavillion website.

## Quick Start

### 1. Install Node.js (if not installed)
Download from: https://nodejs.org/

### 2. Run Performance Test

```bash
cd the-pavilion
node scripts/performance-test.js
```

## What It Does

- ✅ Tests 5 key pages (homepage, landing pages)
- ✅ Tests both Mobile and Desktop
- ✅ Generates beautiful HTML report
- ✅ Saves JSON data for tracking
- ✅ Shows scores in terminal (color-coded!)

## Test Results

After running, you'll get:

1. **Terminal Output** - Color-coded scores in real-time
2. **HTML Report** - Beautiful visual report in `performance-reports/` folder
3. **JSON Data** - Raw data for analysis

## Configuration

Edit `performance-test.js` to customize:

```javascript
const config = {
  urls: [
    'https://bommakugroup.com',
    'https://bommakugroup.com/villas-in-boduppal',
    // Add more URLs here
  ],
  strategies: ['mobile', 'desktop']
};
```

## Schedule Automated Tests

### Option A: Manual (Run weekly)
```bash
node scripts/performance-test.js
```

### Option B: Windows Task Scheduler
1. Open Task Scheduler
2. Create Basic Task
3. Trigger: Weekly (every Monday 9 AM)
4. Action: Start a program
5. Program: `node`
6. Arguments: `C:\Users\Himamala Bommaku\the-pavilion\scripts\performance-test.js`

### Option C: GitHub Actions (Automated)
See `.github/workflows/performance.yml` (coming soon!)

## Reading Results

### Performance Scores

- **90-100**: 🟢 EXCELLENT (keep it up!)
- **50-89**: 🟡 NEEDS IMPROVEMENT (check metrics)
- **0-49**: 🔴 POOR (urgent fixes needed)

### Core Web Vitals

**LCP (Largest Contentful Paint)**
- Good: <2.5s
- Needs Improvement: 2.5s - 4.0s
- Poor: >4.0s

**TBT (Total Blocking Time)**
- Good: <300ms
- Needs Improvement: 300ms - 600ms
- Poor: >600ms

**CLS (Cumulative Layout Shift)**
- Good: <0.1
- Needs Improvement: 0.1 - 0.25
- Poor: >0.25

## Troubleshooting

### "Cannot find module 'https'"
→ Node.js not installed. Download from nodejs.org

### "429 Too Many Requests"
→ Rate limited. Wait 1 minute between tests.

### "Network error"
→ Check internet connection

### "Invalid API key"
→ Get free API key: https://developers.google.com/speed/docs/insights/v5/get-started

## Track Performance Over Time

Run weekly and compare reports:

```bash
# Week 1
node scripts/performance-test.js
# Report saved: performance-reports/performance-2026-07-12.html

# Week 2
node scripts/performance-test.js
# Report saved: performance-reports/performance-2026-07-19.html

# Compare both HTML files to see improvement!
```

## Pro Tips

1. **Test at same time weekly** (consistent results)
2. **Test after deployments** (catch regressions)
3. **Share reports with team** (transparency)
4. **Track trends** (getting better or worse?)

## Next Steps

After running this script:

1. Open the HTML report (beautiful!)
2. Check if Performance score ≥ 90 (Desktop)
3. Check if LCP < 2.5s (fast loading!)
4. Share report with stakeholders
5. Schedule weekly tests

## Support

Questions? Check:
- WEEK-2-PERFORMANCE-AUDIT.md (manual testing guide)
- DAY-1-PERFORMANCE-VALIDATION.md (quick validation)
