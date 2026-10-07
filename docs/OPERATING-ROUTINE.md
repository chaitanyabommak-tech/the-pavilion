# Website Operating Routine

**Project:** The Pavillion by Bommaku Group  
**Website:** https://bommakugroup.com  
**Purpose:** Daily, weekly, and monthly operational procedures

---

## Daily Tasks (10 minutes, M-F)

**Owner:** Marketing/Web Team  
**Time:** 9:30 AM (before business hours start)

### 1. Monitor Lead Pipeline
- [ ] Check Supabase dashboard for new leads (last 24 hours)
- [ ] Verify all leads received response (within 2 hours)
- [ ] Flag any duplicate/spam submissions
- [ ] Export yesterday's leads to CRM/spreadsheet

**Access:** Supabase Dashboard > Leads table  
**Expected:** 1-3 leads per day average  
**Alert if:** Zero leads for 2+ consecutive days

---

### 2. Quick Analytics Check
- [ ] Open GA4 Realtime report
- [ ] Verify active users on site (check tracking works)
- [ ] Check yesterday's session count (goal: >100/day)
- [ ] Check yesterday's conversion events (goal: >1/day)

**Access:** GA4 > Reports > Realtime  
**Alert if:** Zero conversions yesterday, or sessions <50

---

### 3. Form Testing
- [ ] Test contact form submission (once per week minimum)
- [ ] Verify thank-you page redirect works
- [ ] Confirm email notification received (if configured)
- [ ] Check lead appears in Supabase

**Access:** https://bommakugroup.com/contact  
**Alert if:** Form error, no redirect, or lead not in database

---

### 4. Uptime Check
- [ ] Visit homepage (https://bommakugroup.com)
- [ ] Check site loads within 3 seconds
- [ ] Verify no console errors (F12 > Console)
- [ ] Spot-check mobile view (responsive)

**Access:** Browser DevTools (F12)  
**Alert if:** 500 error, slow load (>5s), or broken layout

---

## Weekly Tasks (30 minutes, Every Monday)

**Owner:** Marketing Lead  
**Time:** Monday 10:00 AM

### 1. Analytics Review

#### Traffic Metrics (Last 7 Days)
- [ ] Total Sessions: _____ (Target: >700/week)
- [ ] Total Users: _____ (Target: >500/week)
- [ ] Bounce Rate: _____ (Target: <60%)
- [ ] Avg Session Duration: _____ (Target: >2:00)
- [ ] Pages per Session: _____ (Target: >2.5)

**Access:** GA4 > Reports > Traffic Acquisition (Date range: Last 7 days)

---

#### Conversion Metrics (Last 7 Days)
- [ ] Leads (generate_lead): _____ (Target: >10/week)
- [ ] Site Visit Bookings: _____ (Target: >4/week)
- [ ] WhatsApp Clicks: _____ (Target: >20/week)
- [ ] Brochure Downloads: _____ (Target: >30/week)
- [ ] Visitor-to-Lead Rate: _____ (Target: >1.0%)

**Access:** GA4 > Reports > Events (Filter: Conversions)

---

#### Top Landing Pages (Last 7 Days)
- [ ] Identify top 5 pages by sessions
- [ ] Note bounce rate for each
- [ ] Flag any page with bounce >70%

**Access:** GA4 > Reports > Landing Pages

---

#### Traffic Sources (Last 7 Days)
- [ ] Organic Search: _____ sessions
- [ ] Direct: _____ sessions
- [ ] Social: _____ sessions
- [ ] Referral: _____ sessions

**Access:** GA4 > Reports > Traffic Acquisition

---

### 2. Search Console Check
- [ ] Total Clicks (last 7 days): _____
- [ ] Total Impressions (last 7 days): _____
- [ ] Average CTR: _____ (Target: >2%)
- [ ] Average Position: _____ (Target: <15)
- [ ] Coverage Issues: _____ (Target: 0)

**Access:** Google Search Console > Performance

---

### 3. Content Review
- [ ] Check blog posts published in last 7 days: _____
- [ ] Review avg time on blog posts (target: >3:00)
- [ ] Identify underperforming content (high bounce, low time)
- [ ] Note ideas for new content based on search queries

**Access:** GA4 > Pages and Screens (filter: /blog/)

---

### 4. Lead Quality Review
- [ ] Review all leads from last 7 days
- [ ] Categorize: Hot / Warm / Cold
- [ ] Flag spam/junk leads
- [ ] Calculate lead-to-site-visit conversion rate
- [ ] Note common questions/objections

**Access:** Supabase + CRM (if applicable)

---

### 5. Weekly Summary Template

**Copy-paste this into team Slack/email:**

```
📊 WEEKLY WEBSITE SUMMARY (Week of [Date])

TRAFFIC:
• Sessions: [X] ([+/-Y%] vs last week)
• Users: [X]
• Bounce Rate: [X]%
• Avg Session: [X]:[XX]

CONVERSIONS:
• Leads: [X] ([+/-Y%] vs last week)
• Site Visits Booked: [X]
• WhatsApp Conversations: [X]
• Conversion Rate: [X]%

TOP PERFORMERS:
1. [Page Name] - [X] sessions, [X]% bounce
2. [Page Name] - [X] sessions, [X]% bounce
3. [Page Name] - [X] sessions, [X]% bounce

TOP TRAFFIC SOURCES:
1. [Source] - [X] sessions
2. [Source] - [X] sessions
3. [Source] - [X] sessions

SEARCH CONSOLE:
• Clicks: [X] ([+/-Y%] vs last week)
• Impressions: [X,XXX]
• CTR: [X]%
• Avg Position: [X]

⚠️ ISSUES/ALERTS:
[List any concerning metrics or issues]

✅ ACTION ITEMS FOR NEXT WEEK:
1. [Action item]
2. [Action item]
3. [Action item]

---
Generated: [Date] | Next review: [Next Monday]
```

---

## Monthly Tasks (90 minutes, First Monday)

**Owner:** Marketing Lead + Developer  
**Time:** First Monday of month, 10:00 AM

### 1. Full Analytics Deep Dive

#### Traffic Analysis (Last 30 Days)
- [ ] Month-over-month comparison (sessions, users, pageviews)
- [ ] Week-by-week trend analysis
- [ ] Device breakdown (mobile vs desktop vs tablet)
- [ ] Browser breakdown (Chrome, Safari, Edge, etc.)
- [ ] New vs returning visitors ratio
- [ ] Geographic breakdown (if available)

**Access:** GA4 > Reports > Custom > Exploration

---

#### Conversion Funnel Analysis
- [ ] Homepage → Landing Page → Form → Thank You
- [ ] Identify biggest drop-off step
- [ ] Calculate conversion rate at each step
- [ ] Compare to previous month

**Access:** GA4 > Explore > Funnel Exploration

---

#### Content Performance
- [ ] Top 10 pages by sessions
- [ ] Top 10 pages by conversions
- [ ] Underperforming pages (high traffic, low conversions)
- [ ] Blog post performance (engagement time)
- [ ] Landing page effectiveness (conversion rate)

**Access:** GA4 > Reports > Pages and Screens

---

#### Search Queries Analysis
- [ ] Top 20 queries by clicks
- [ ] Top 20 queries by impressions
- [ ] Low-CTR high-impression queries (opportunity)
- [ ] New keywords appearing in top 100
- [ ] Branded vs non-branded search ratio

**Access:** Google Search Console > Performance > Queries

---

### 2. Technical Health Check

#### Core Web Vitals
- [ ] LCP (Largest Contentful Paint): Target <2.5s
- [ ] FID (First Input Delay): Target <100ms
- [ ] CLS (Cumulative Layout Shift): Target <0.1
- [ ] Mobile vs Desktop scores

**Access:** Google Search Console > Core Web Vitals

---

#### Site Indexing
- [ ] Total pages indexed: _____ (Target: 45)
- [ ] Coverage errors: _____ (Target: 0)
- [ ] Coverage warnings: _____ (investigate)
- [ ] Excluded pages: _____ (review why)

**Access:** Google Search Console > Index > Coverage

---

#### Sitemap Health
- [ ] Sitemap submitted: https://bommakugroup.com/sitemap.xml
- [ ] Image sitemap submitted: https://bommakugroup.com/image-sitemap.xml
- [ ] Sitemap errors: _____ (Target: 0)
- [ ] Last read date: _____ (should be recent)

**Access:** Google Search Console > Sitemaps

---

### 3. Content Calendar Planning

#### Blog Posts (Plan next month)
- [ ] Identify 2-3 new blog post topics based on:
  - Search queries with high impressions, low clicks
  - Common lead questions
  - Competitor content gaps
- [ ] Assign deadlines
- [ ] Outline internal links to landing pages

---

#### Landing Pages (Review existing)
- [ ] Review all 15 landing pages for freshness
- [ ] Update any outdated information (pricing, inventory)
- [ ] Check internal linking structure
- [ ] Identify new landing page opportunities

---

### 4. Local SEO Audit

#### Citations Check
- [ ] Verify NAP consistency on top 10 directories
- [ ] Check for new citations appeared
- [ ] Respond to any reviews (GBP, JustDial, etc.)
- [ ] Update business hours if changed

**Access:** Manual review + BrightLocal (if subscribed)

---

#### Google Business Profile
- [ ] Upload 3-5 new photos
- [ ] Post 1-2 updates/offers
- [ ] Respond to all Q&A questions
- [ ] Review GBP Insights (views, clicks, calls)
- [ ] Check competitor GBP profiles (benchmark)

**Access:** Google Business Profile Dashboard

---

### 5. Lead Quality & Sales Funnel

#### Lead Analysis (Last 30 Days)
- [ ] Total leads: _____
- [ ] Lead sources breakdown (organic, direct, social, etc.)
- [ ] Lead quality score (% of qualified leads)
- [ ] Lead-to-site-visit conversion: _____% (Target: 40%)
- [ ] Site-visit-to-sale conversion: _____% (Target: 25%, tracked offline)

**Access:** Supabase + Sales CRM

---

#### Form Optimization
- [ ] Check form abandonment rate (form_start vs form_submit)
- [ ] Review form error logs (if configured)
- [ ] Test form on 3 devices (mobile, tablet, desktop)
- [ ] Check spam submissions count

---

### 6. Competitor Monitoring

- [ ] Review 3 competitor websites for changes
- [ ] Note any new features/content
- [ ] Check their Google rankings for key terms
- [ ] Review their GBP profiles and reviews
- [ ] Identify gaps we can exploit

**Competitors:** (List top 3 competitors in Boduppal/East Hyderabad)

---

### 7. Monthly Report Template

**Copy-paste this into leadership presentation:**

```
📈 MONTHLY WEBSITE PERFORMANCE (Month of [Month Year])

=== EXECUTIVE SUMMARY ===
• Sessions: [X,XXX] ([+/-Y%] MoM)
• Leads Generated: [XX] ([+/-Y%] MoM)
• Site Visits Booked: [XX] ([+/-Y%] MoM)
• Visitor-to-Lead Conversion: [X.X]%
• Lead-to-Site-Visit Conversion: [XX]%

=== TRAFFIC BREAKDOWN ===
Total Sessions: [X,XXX]
• Organic Search: [X,XXX] ([XX]%)
• Direct: [X,XXX] ([XX]%)
• Social: [XXX] ([XX]%)
• Referral: [XXX] ([XX]%)

Device Split:
• Mobile: [XX]%
• Desktop: [XX]%
• Tablet: [XX]%

=== CONVERSION METRICS ===
• Form Submissions: [XX]
• WhatsApp Clicks: [XXX]
• Phone Calls: [XX]
• Brochure Downloads: [XXX]

Conversion Rate by Source:
• Organic: [X.X]%
• Direct: [X.X]%
• Social: [X.X]%

=== TOP CONTENT ===
Top 5 Pages by Sessions:
1. [Page] - [X,XXX] sessions
2. [Page] - [X,XXX] sessions
3. [Page] - [X,XXX] sessions
4. [Page] - [XXX] sessions
5. [Page] - [XXX] sessions

Top 5 Pages by Conversions:
1. [Page] - [XX] conversions
2. [Page] - [XX] conversions
3. [Page] - [XX] conversions
4. [Page] - [XX] conversions
5. [Page] - [X] conversions

=== SEARCH PERFORMANCE ===
• Total Clicks: [X,XXX] ([+/-Y%] MoM)
• Total Impressions: [XX,XXX] ([+/-Y%] MoM)
• Average CTR: [X.X]%
• Average Position: [X.X]

Top 5 Queries:
1. "[query]" - [XXX] clicks
2. "[query]" - [XXX] clicks
3. "[query]" - [XXX] clicks
4. "[query]" - [XX] clicks
5. "[query]" - [XX] clicks

=== TECHNICAL HEALTH ===
• Core Web Vitals: [Good/Needs Improvement/Poor]
• Pages Indexed: [XX]/45
• Coverage Errors: [X]
• Mobile Usability Issues: [X]

=== GOALS vs ACTUALS ===
| Metric | Goal | Actual | Status |
|--------|------|--------|--------|
| Sessions | 5,000 | [X,XXX] | [✅/⚠️/❌] |
| Leads | 50 | [XX] | [✅/⚠️/❌] |
| Site Visits | 20 | [XX] | [✅/⚠️/❌] |
| WhatsApp | 100 | [XXX] | [✅/⚠️/❌] |

=== KEY INSIGHTS ===
1. [Insight about traffic/conversion trend]
2. [Insight about content performance]
3. [Insight about user behavior]

=== RECOMMENDATIONS FOR NEXT MONTH ===
1. [Action item with rationale]
2. [Action item with rationale]
3. [Action item with rationale]

=== CONTENT PUBLISHED ===
• Blog Posts: [X] new posts
• Landing Pages: [X] new pages
• Updates: [List major updates]

---
Report Date: [Date]
Next Report: [First Monday of next month]
```

---

## Quarterly Tasks (Q1, Q2, Q3, Q4)

**Owner:** Marketing Lead + Developer + Stakeholders  
**Time:** First week of Jan/Apr/Jul/Oct

### 1. Comprehensive Website Audit
- [ ] Full SEO audit (technical, on-page, off-page)
- [ ] Accessibility audit (WCAG compliance)
- [ ] Performance audit (Lighthouse, GTmetrix)
- [ ] Security audit (SSL, headers, dependencies)
- [ ] UX audit (heatmaps, session recordings)

---

### 2. Strategy Review
- [ ] Review OKRs/KPIs from last quarter
- [ ] Set goals for next quarter
- [ ] Competitive analysis deep dive
- [ ] Content strategy refresh
- [ ] Traffic source optimization plan

---

### 3. Technical Upgrades
- [ ] Update Next.js and dependencies (patch/minor versions)
- [ ] Review and fix any deprecation warnings
- [ ] Optimize images (compress, WebP conversion)
- [ ] Database cleanup (old leads, test data)
- [ ] Backup verification

---

## Emergency Procedures

### Site Down (500 Error)

**Immediate Actions:**
1. Check Vercel dashboard for deployment errors
2. Check recent deployments (rollback if needed)
3. Review error logs (Vercel > Logs)
4. Test database connection (Supabase status)
5. Contact developer if issue persists >15 minutes

**Escalation:** Developer → Vercel Support → Supabase Support

---

### Form Not Working

**Immediate Actions:**
1. Test form yourself (screenshot error)
2. Check browser console for JavaScript errors
3. Verify Supabase credentials (env variables)
4. Check Vercel logs for API errors
5. Post "Temporary Issue" notice on contact page (if >1 hour)

**Workaround:** Direct users to WhatsApp/phone temporarily

---

### Analytics Not Tracking

**Immediate Actions:**
1. Check GTM container published (not draft)
2. Verify GA4 Measurement ID correct
3. Test in GTM Preview mode
4. Check Realtime report in GA4
5. Review recent code changes (tracking script removed?)

**Impact:** Low urgency, fix within 24 hours

---

### Sudden Traffic Drop (>50%)

**Investigation:**
1. Check Google Search Console for manual actions
2. Verify sitemap still accessible
3. Check robots.txt not blocking
4. Review recent code deployments
5. Check for Google algorithm update news
6. Verify site accessible from different locations

**Escalation:** Developer + SEO Specialist

---

## Tools & Access Checklist

Ensure these team members have access:

| Tool | URL | Owner | Backup |
|------|-----|-------|--------|
| Vercel Dashboard | https://vercel.com | [Name] | [Name] |
| GA4 Property | https://analytics.google.com | [Name] | [Name] |
| GTM Container | https://tagmanager.google.com | [Name] | [Name] |
| Search Console | https://search.google.com/search-console | [Name] | [Name] |
| Supabase Project | https://supabase.com/dashboard | [Name] | [Name] |
| GitHub Repository | https://github.com/[org]/[repo] | [Name] | [Name] |
| GBP Profile | https://business.google.com | [Name] | [Name] |

---

## Performance Targets Summary

**Copy-paste for quick reference:**

### Traffic Targets
- Monthly Sessions: 5,000
- Monthly Users: 3,500
- Bounce Rate: <60%
- Avg Session Duration: >2:00
- Pages per Session: >2.5

### Conversion Targets
- Monthly Leads: 50
- Site Visit Bookings: 20
- WhatsApp Conversations: 100
- Brochure Downloads: 150
- Visitor-to-Lead Rate: 1.0%
- Lead-to-Site-Visit Rate: 40%

### Search Targets
- Avg CTR: >2%
- Avg Position: <15
- Monthly Clicks: 1,500
- Coverage Errors: 0

### Technical Targets
- LCP: <2.5s
- FID: <100ms
- CLS: <0.1
- Mobile Score: >90 (Lighthouse)
- Pages Indexed: 45/45

---

**Questions?** Refer to:
- Analytics setup: `ANALYTICS-DASHBOARD-SETUP.md`
- Local SEO: `GOOGLE-BUSINESS-PROFILE-SETUP.md`
- Citations: `LOCAL-CITATIONS-CHECKLIST.md`
- Code tracking: `/lib/analytics-tracking.ts`
