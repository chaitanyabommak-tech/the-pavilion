# 🤖 Automated Performance Testing - Setup Guide

**Time to Setup:** 5 minutes  
**What You Get:** Automated weekly performance reports with zero manual work!

---

## 🎯 **THREE WAYS TO RUN TESTS**

### **Method 1: Run NOW (One-Time Test)**

```bash
cd the-pavilion
node scripts/performance-test.js
```

**What happens:**
- Tests 5 pages (homepage + 4 landing pages)
- Tests Mobile AND Desktop
- Generates beautiful HTML report
- Shows scores in terminal (color-coded!)
- Takes 2-3 minutes

**Output:**
```
performance-reports/performance-2026-07-12.html  ← Open this in browser!
performance-reports/performance-2026-07-12.json  ← Raw data
```

---

### **Method 2: Schedule Weekly (Windows Task Scheduler)**

**One-time setup (5 minutes):**

**Step 1:** Open Task Scheduler
- Press `Win + R`
- Type: `taskschd.msc`
- Press Enter

**Step 2:** Create New Task
- Click "Create Basic Task" (right sidebar)
- Name: `Website Performance Test`
- Description: `Weekly automated performance testing for The Pavillion website`
- Click "Next"

**Step 3:** Set Trigger
- When: `Weekly`
- Click "Next"
- Day: `Monday` (or your preferred day)
- Time: `09:00 AM` (or your preferred time)
- Click "Next"

**Step 4:** Set Action
- Action: `Start a program`
- Click "Next"
- Program/script: `node`
- Add arguments: `C:\Users\Himamala Bommaku\the-pavilion\scripts\performance-test.js`
- Start in: `C:\Users\Himamala Bommaku\the-pavilion`
- Click "Next"

**Step 5:** Finish
- Check "Open the Properties dialog"
- Click "Finish"

**Step 6:** Configure (in Properties dialog)**
- Tab: "General"
  - Check: `Run whether user is logged on or not`
  - Check: `Run with highest privileges`
- Tab: "Conditions"
  - Uncheck: `Start the task only if the computer is on AC power`
- Click "OK"
- Enter your Windows password

**✅ DONE! Tests run automatically every Monday at 9 AM!**

---

### **Method 3: GitHub Actions (Fully Automated)**

**Already set up for you!**

The file `.github/workflows/performance.yml` is configured to:
- ✅ Run every Monday at 9:00 AM IST
- ✅ Test all 5 pages
- ✅ Generate reports
- ✅ Save reports for 90 days
- ✅ Post results on Pull Requests

**To enable:**
1. Push this code to GitHub (already done!)
2. Go to repo → Actions tab
3. Enable workflows
4. That's it!

**To run manually:**
1. Go to repo → Actions tab
2. Click "Weekly Performance Tests"
3. Click "Run workflow"
4. Wait 3 minutes
5. Download report from Artifacts

---

## 📊 **UNDERSTANDING YOUR RESULTS**

### **HTML Report (Beautiful Visual Report)**

Open the HTML file in browser. You'll see:

**Summary Section:**
- Total pages tested
- Total tests run
- Timestamp

**Each Page Card Shows:**
- Performance score (0-100)
- Accessibility score
- Best Practices score
- SEO score
- Core Web Vitals (FCP, LCP, TBT, CLS, SI)

**Color Coding:**
- 🟢 Green (90-100): EXCELLENT!
- 🟡 Yellow (50-89): NEEDS IMPROVEMENT
- 🔴 Red (0-49): POOR

---

### **Terminal Output (Real-Time Feedback)**

While running, you'll see:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  AUTOMATED PERFORMANCE TESTING
  The Pavillion by Bommaku Group
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Testing https://bommakugroup.com (desktop)...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
URL: https://bommakugroup.com
Device: DESKTOP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCORES:
  Performance:     92/100  ← 🟢 EXCELLENT!
  Accessibility:   95/100
  Best Practices:  100/100
  SEO:             93/100

CORE WEB VITALS:
  First Contentful Paint (FCP): 0.8 s
  Largest Contentful Paint (LCP): 1.9 s  ← Target: <2.5s ✓
  Total Blocking Time (TBT): 120 ms
  Cumulative Layout Shift (CLS): 0.05
  Speed Index (SI): 1.5 s
```

---

## 🔧 **CUSTOMIZATION**

### **Test Different Pages**

Edit `scripts/performance-test.js`:

```javascript
const config = {
  urls: [
    'https://bommakugroup.com',
    'https://bommakugroup.com/villas-in-boduppal',
    'https://bommakugroup.com/blog/is-boduppal-good-place-to-buy-villa-2026',  // Add blog!
    // Add more URLs here
  ],
  strategies: ['mobile', 'desktop']
};
```

---

### **Change Test Frequency**

**Windows Task Scheduler:**
- Open Task Scheduler
- Find "Website Performance Test"
- Right-click → Properties
- Tab: Triggers
- Edit → Change frequency

**GitHub Actions:**
Edit `.github/workflows/performance.yml`:

```yaml
on:
  schedule:
    - cron: '30 3 * * 1'  # Every Monday
    # Change to daily: '30 3 * * *'
    # Change to monthly: '30 3 1 * *'
```

---

## 📈 **TRACKING PERFORMANCE OVER TIME**

### **Week-over-Week Comparison**

**Week 1:**
```
Performance: 85/100
LCP: 2.8s
```

**Week 2 (after optimizations):**
```
Performance: 92/100  ← +7 improvement!
LCP: 1.9s            ← 32% faster!
```

### **Create Comparison Chart**

1. Keep all weekly HTML reports
2. Create spreadsheet:

| Date | Desktop Perf | Mobile Perf | LCP | Notes |
|------|--------------|-------------|-----|-------|
| July 12 | 92 | 78 | 1.9s | After Week 1 optimization |
| July 19 | 94 | 81 | 1.7s | Continued improvement |
| July 26 | 95 | 83 | 1.6s | Peak performance! |

3. Share with stakeholders monthly!

---

## 🚨 **ALERTS & NOTIFICATIONS**

### **Set Up Email Alerts**

Create `scripts/alert-if-slow.js`:

```javascript
const nodemailer = require('nodemailer');
const fs = require('fs');

// Read latest test results
const reports = fs.readdirSync('performance-reports')
  .filter(f => f.endsWith('.json'))
  .sort()
  .reverse();

const latestReport = JSON.parse(
  fs.readFileSync(`performance-reports/${reports[0]}`, 'utf8')
);

// Check if any page scored <80
const slowPages = latestReport.results.filter(
  r => r.scores.performance < 80
);

if (slowPages.length > 0) {
  // Send email alert
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: 'bommakugroup@gmail.com',
      pass: 'your-app-password'
    }
  });

  transporter.sendMail({
    from: 'bommakugroup@gmail.com',
    to: 'chaitanyabommak@gmail.com',
    subject: '⚠️ Website Performance Alert',
    text: `${slowPages.length} page(s) scored below 80!\n\nCheck the latest report.`
  });

  console.log('Alert sent!');
}
```

Run after each test:
```bash
node scripts/performance-test.js && node scripts/alert-if-slow.js
```

---

## 🎯 **SUCCESS CRITERIA**

### **Weekly Goals**

**Desktop Performance:**
- Target: ≥ 90
- Minimum: ≥ 80
- Alert if: < 80

**Mobile Performance:**
- Target: ≥ 75
- Minimum: ≥ 60
- Alert if: < 60

**LCP (Largest Contentful Paint):**
- Target: < 2.5s
- Minimum: < 3.0s
- Alert if: > 3.0s

---

## 🐛 **TROUBLESHOOTING**

### **Issue 1: "Node.js not found"**

**Install Node.js:**
1. Download: https://nodejs.org/
2. Install (default settings)
3. Restart terminal
4. Run: `node --version` (should show version)

---

### **Issue 2: "Cannot find module"**

**No packages needed!** This script uses built-in Node.js modules only:
- `https` (built-in)
- `fs` (built-in)
- `path` (built-in)

If still error, update Node.js:
```bash
node --version  # Should be 14+
```

---

### **Issue 3: "429 Too Many Requests"**

**You hit PageSpeed API rate limit.**

**Solution:**
- Wait 1 minute
- Reduce URLs in config (test fewer pages)
- Get free API key: https://developers.google.com/speed/docs/insights/v5/get-started

**To use API key:**
Edit `scripts/performance-test.js`:
```javascript
const config = {
  apiKey: 'YOUR_API_KEY_HERE',  // Add your key
  // ...
};
```

Then update API URL:
```javascript
const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&strategy=${strategy}&key=${config.apiKey}`;
```

---

### **Issue 4: Task Scheduler not running**

**Check:**
1. Task Scheduler → Task History (enable if disabled)
2. Last Run Result: Should be `0x0` (success)
3. Last Run Time: Should be recent

**Common fixes:**
- Run as administrator
- Check "Run with highest privileges"
- Uncheck "Start only if on AC power"
- Test manually: Right-click task → Run

---

## 📝 **MANUAL TEST INSTRUCTIONS**

**If automation fails, run manually:**

1. Open terminal (PowerShell or CMD)
2. Navigate to project:
   ```bash
   cd C:\Users\Himamala Bommaku\the-pavilion
   ```
3. Run script:
   ```bash
   node scripts/performance-test.js
   ```
4. Wait 2-3 minutes
5. Open HTML report in browser

---

## 🎉 **WHAT YOU GET**

### **Every Week Automatically:**

✅ **10 Performance Tests**
- 5 URLs × 2 devices (Mobile + Desktop)

✅ **Beautiful HTML Report**
- Visual scores with color coding
- Core Web Vitals breakdown
- Professional presentation

✅ **JSON Data**
- Raw numbers for analysis
- Track trends over time
- Export to Excel/Sheets

✅ **Zero Manual Work**
- Runs while you sleep
- Results in email (if configured)
- Historical tracking

---

## 📊 **SAMPLE WEEKLY ROUTINE**

**Monday 9:00 AM:** Test runs automatically  
**Monday 9:03 AM:** Report generated  
**Monday 9:10 AM:** You check email/folder  
**Monday 9:15 AM:** Open HTML report, review scores  
**Monday 9:20 AM:** Share with team if needed  

**Total time:** 10 minutes/week to review!

---

## 🚀 **NEXT STEPS**

**Today (5 min):**
1. Run test once manually
2. Open HTML report
3. Celebrate 90+ scores!

**This Week:**
4. Set up Task Scheduler (automated weekly tests)
5. Create "performance-reports" folder bookmark
6. Share first report with stakeholders

**Next Month:**
7. Compare 4 weekly reports
8. Track trends (improving or declining?)
9. Share monthly summary

---

## 💡 **PRO TIPS**

### **For Best Results:**

✓ **Test same time weekly** (consistent network conditions)  
✓ **Test after deployments** (catch regressions immediately)  
✓ **Keep all reports** (track long-term trends)  
✓ **Share with team** (transparency builds trust)  
✓ **Set score targets** (90+ Desktop, 75+ Mobile)  
✓ **Investigate drops** (what changed if score drops?)

### **Advanced: Compare Before/After**

Before major changes:
```bash
node scripts/performance-test.js  # Baseline
```

After changes:
```bash
node scripts/performance-test.js  # New results
```

Compare both HTML reports side-by-side!

---

## 📞 **SUPPORT**

**Questions?**
- Check: [scripts/README.md](scripts/README.md)
- Check: [WEEK-2-PERFORMANCE-AUDIT.md](WEEK-2-PERFORMANCE-AUDIT.md)
- Manual testing: [DAY-1-PERFORMANCE-VALIDATION.md](DAY-1-PERFORMANCE-VALIDATION.md)

---

**Setup Time:** 5 minutes  
**Weekly Time:** 10 minutes (just review results!)  
**Impact:** MASSIVE (track performance trends, catch regressions, prove ROI!)

**START NOW! 🚀**

```bash
node scripts/performance-test.js
```
