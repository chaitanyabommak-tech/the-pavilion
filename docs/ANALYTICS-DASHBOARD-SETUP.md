# Analytics Dashboard Setup Guide

**Project:** The Pavillion by Bommaku Group  
**GA4 Property:** G-QGJ61SEN5Y  
**GTM Container:** GTM-KD57FLT8  
**Purpose:** Complete analytics setup and KPI tracking

---

## 1. Google Analytics 4 (GA4) Setup

### Initial Configuration

**Property Details:**
- Property ID: `G-QGJ61SEN5Y`
- Measurement ID: Already integrated via GTM
- Timezone: (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi
- Currency: INR (₹)
- Industry Category: Real Estate

**Data Streams:**
- Stream Name: bommakugroup.com web stream
- Stream URL: https://bommakugroup.com
- Enhanced Measurement: ✅ Enabled (scroll, outbound clicks, site search, video, file downloads)

---

### Custom Events to Track

Configure these events in GA4 (Events > Create Event):

#### Conversion Events (mark as conversions)

1. **generate_lead** (Form submission)
   - Event parameters: `form_name`, `page_location`, `value: 25000`
   
2. **site_visit_booked** (Site visit booking)
   - Event parameters: `form_name`, `page_location`, `value: 50000`

3. **download_brochure** (PDF download)
   - Event parameters: `file_name`, `page_location`, `value: 5000`

4. **whatsapp_click** (WhatsApp engagement)
   - Event parameters: `link_url`, `page_location`, `value: 10000`

5. **phone_click** (Phone number click)
   - Event parameters: `phone_number`, `page_location`, `value: 10000`

#### Engagement Events

6. **scroll_depth** (Scroll tracking)
   - Event parameters: `depth`, `page` (25%, 50%, 75%, 90%, 100%)

7. **cta_click** (CTA button clicks)
   - Event parameters: `cta_text`, `cta_location`

8. **floor_plan_view** (Floor plan viewed)
   - Event parameters: `villa_type`, `page_location`

9. **gallery_view** (Image gallery opened)
   - Event parameters: `gallery_name`, `page_location`

---

### Custom Dimensions & Metrics

**User-Scoped Dimensions:**
- `user_type` (new_visitor, returning_visitor)
- `traffic_source_category` (organic, direct, social, referral, paid)

**Event-Scoped Dimensions:**
- `page_type` (homepage, landing_page, blog_post, product_page)
- `villa_type` (silver, signature)
- `form_name` (contact, site_visit, download)

**Custom Metrics:**
- `conversion_value` (estimated lead value)
- `scroll_percentage` (max scroll depth)
- `pages_visited` (pages per session)

---

### Conversion Goals & Values

Set these values in GA4 for ROI tracking:

| Conversion Event | Value (INR) | Currency | Purpose |
|------------------|-------------|----------|---------|
| generate_lead | ₹25,000 | INR | Lead form submission |
| site_visit_booked | ₹50,000 | INR | Site visit confirmed |
| download_brochure | ₹5,000 | INR | Brochure download |
| whatsapp_click | ₹10,000 | INR | WhatsApp conversation started |
| phone_click | ₹10,000 | INR | Phone call initiated |

---

## 2. GA4 Reports to Create

### Report 1: Lead Generation Overview

**Report Type:** Exploration > Free Form  
**Rows:** Date  
**Columns:** Event Name  
**Values:** Event Count, Total Users, Conversion Value  
**Filters:** Event Name contains "lead", "site_visit", "brochure"

**Purpose:** Daily tracking of lead generation activities

---

### Report 2: Landing Page Performance

**Report Type:** Exploration > Free Form  
**Rows:** Landing Page  
**Columns:** Page Type  
**Values:** Sessions, Conversions, Bounce Rate, Avg Session Duration  
**Filters:** Landing Page starts with "/villas-"

**Purpose:** Identify best-performing landing pages

---

### Report 3: Traffic Source Analysis

**Report Type:** Exploration > Free Form  
**Rows:** Source / Medium  
**Columns:** Device Category  
**Values:** Users, Sessions, Conversions, Conversion Rate  
**Filters:** None

**Purpose:** Understand which channels drive qualified leads

---

### Report 4: Content Engagement

**Report Type:** Exploration > Free Form  
**Rows:** Page Path  
**Columns:** Page Type  
**Values:** Views, Avg Time on Page, Scroll Depth (custom), Exits  
**Filters:** Page Type = "blog_post" OR "landing_page"

**Purpose:** Measure content engagement and identify drop-off points

---

### Report 5: Conversion Funnel

**Report Type:** Exploration > Funnel  
**Steps:**
1. Page View (any page)
2. Form Start (`form_start` event)
3. Form Submit (`form_submit` event)
4. Thank You Page View (`/thank-you`)

**Breakdown:** Source / Medium, Device Category, Page Type  
**Purpose:** Identify conversion bottlenecks

---

## 3. Google Tag Manager (GTM) Configuration

**Container ID:** GTM-KD57FLT8  
**Already Implemented:** ✅ Container loaded in app/layout.tsx

### Tags to Create

#### Tag 1: Form Submission Tracking

- **Tag Type:** GA4 Event
- **Event Name:** `form_submit`
- **Event Parameters:**
  - `form_name: {{Form Name}}`
  - `page_location: {{Page URL}}`
  - `value: 25000` (currency: INR)
- **Trigger:** Form Submission (built-in)

---

#### Tag 2: WhatsApp Click Tracking

- **Tag Type:** GA4 Event
- **Event Name:** `whatsapp_click`
- **Event Parameters:**
  - `link_url: {{Click URL}}`
  - `page_location: {{Page URL}}`
  - `value: 10000`
- **Trigger:** Click - All Elements
  - Click URL contains `wa.me`

---

#### Tag 3: Phone Click Tracking

- **Tag Type:** GA4 Event
- **Event Name:** `phone_click`
- **Event Parameters:**
  - `phone_number: +919676077142`
  - `page_location: {{Page URL}}`
  - `value: 10000`
- **Trigger:** Click - All Elements
  - Click URL starts with `tel:`

---

#### Tag 4: Brochure Download Tracking

- **Tag Type:** GA4 Event
- **Event Name:** `download_brochure`
- **Event Parameters:**
  - `file_name: {{Click URL}}`
  - `page_location: {{Page URL}}`
  - `value: 5000`
- **Trigger:** Click - All Elements
  - Click URL ends with `.pdf`

---

#### Tag 5: Scroll Depth Tracking

- **Tag Type:** GA4 Event
- **Event Name:** `scroll_depth`
- **Event Parameters:**
  - `depth: {{Scroll Depth Threshold}}`
  - `page: {{Page Path}}`
- **Trigger:** Scroll Depth (25%, 50%, 75%, 90%, 100%)

---

### Variables to Create

1. **Form Name**
   - Type: Form Element
   - Element ID or Name: `name` attribute

2. **Scroll Depth Threshold**
   - Type: Built-in Variable
   - Enable: Scroll Depth Threshold

3. **Click URL**
   - Type: Built-in Variable
   - Enable: Click URL

---

## 4. Key Performance Indicators (KPIs)

### Traffic KPIs (Monitor Weekly)

| KPI | Target | Data Source | Status |
|-----|--------|-------------|--------|
| Monthly Sessions | 5,000 | GA4 > Reports > Traffic | ⏸️ |
| Monthly Users | 3,500 | GA4 > Reports > Traffic | ⏸️ |
| Bounce Rate | <60% | GA4 > Reports > Engagement | ⏸️ |
| Avg Session Duration | >2:00 min | GA4 > Reports > Engagement | ⏸️ |
| Pages per Session | >2.5 | GA4 > Reports > Engagement | ⏸️ |

---

### Conversion KPIs (Monitor Daily)

| KPI | Target | Data Source | Status |
|-----|--------|-------------|--------|
| Monthly Leads | 50 | GA4 > Events > generate_lead | ⏸️ |
| Site Visit Bookings | 20 | GA4 > Events > site_visit_booked | ⏸️ |
| WhatsApp Conversations | 100 | GA4 > Events > whatsapp_click | ⏸️ |
| Brochure Downloads | 150 | GA4 > Events > download_brochure | ⏸️ |
| Visitor-to-Lead Rate | 1.0% | Custom Calculation | ⏸️ |

---

### Content KPIs (Monitor Weekly)

| KPI | Target | Data Source | Status |
|-----|--------|-------------|--------|
| Blog Post Avg Time | >3:00 min | GA4 > Page Path (blog) | ⏸️ |
| Landing Page Bounce | <50% | GA4 > Landing Pages | ⏸️ |
| Avg Scroll Depth | >60% | GA4 > Events > scroll_depth | ⏸️ |

---

### Traffic Source KPIs (Monitor Weekly)

| Source | Sessions Target | Conversion Rate Target | Status |
|--------|----------------|----------------------|--------|
| Organic Search | 2,500 (50%) | 1.5% | ⏸️ |
| Direct | 1,500 (30%) | 2.0% | ⏸️ |
| Social | 500 (10%) | 0.8% | ⏸️ |
| Referral | 500 (10%) | 1.2% | ⏸️ |

---

## 5. Google Search Console Integration

**Property:** https://bommakugroup.com (Already verified)

### Reports to Monitor

1. **Performance Report**
   - Total Clicks, Impressions, CTR, Avg Position
   - Filter by query: "villas boduppal", "standalone villas", "luxury villas hyderabad"
   - Goal: CTR >3%, Avg Position <10

2. **Pages Report**
   - Top performing pages by clicks
   - Identify low-CTR high-impression pages (opportunity)
   - Goal: All landing pages indexed

3. **Index Coverage**
   - Valid pages count
   - Errors/warnings to fix
   - Goal: All 45 routes indexed

4. **Core Web Vitals**
   - LCP, FID, CLS scores
   - Mobile vs Desktop
   - Goal: All metrics "Good" (green)

---

## 6. Supabase Lead Tracking

**Database:** Already configured via backend  
**Table:** `leads`  
**Columns:** name, email, phone, message, source, created_at

### Dashboard Queries

Create these views in Supabase Dashboard:

#### Query 1: Daily Lead Count
```sql
SELECT 
  DATE(created_at) as date,
  COUNT(*) as lead_count
FROM leads
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY DATE(created_at)
ORDER BY date DESC;
```

#### Query 2: Lead Source Breakdown
```sql
SELECT 
  source,
  COUNT(*) as count,
  ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 2) as percentage
FROM leads
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY source
ORDER BY count DESC;
```

#### Query 3: Hourly Lead Pattern
```sql
SELECT 
  EXTRACT(HOUR FROM created_at) as hour,
  COUNT(*) as leads
FROM leads
GROUP BY hour
ORDER BY hour;
```

**Purpose:** Identify best times for response team availability

---

## 7. Weekly Analytics Review Checklist

**When:** Every Monday 10:00 AM  
**Duration:** 30 minutes  
**Owner:** Marketing/Web Team

### Checklist

- [ ] Review last 7 days traffic (sessions, users, pageviews)
- [ ] Check conversion events (leads, site visits, downloads)
- [ ] Identify top 5 landing pages by conversions
- [ ] Review top 5 traffic sources
- [ ] Check bounce rate on key pages (flag if >60%)
- [ ] Review Search Console clicks and impressions
- [ ] Check for any GSC errors/warnings
- [ ] Review Supabase lead count and sources
- [ ] Compare week-over-week performance
- [ ] Note any anomalies or sudden drops/spikes
- [ ] Action items for next week

**Output:** Weekly performance summary (see template in OPERATING-ROUTINE.md)

---

## 8. Monthly Analytics Deep Dive

**When:** First Monday of each month  
**Duration:** 90 minutes  
**Owner:** Marketing Lead

### Deep Dive Checklist

- [ ] Full month traffic analysis (MoM comparison)
- [ ] Conversion funnel analysis (identify drop-offs)
- [ ] Content performance review (top 10 pages)
- [ ] Traffic source ROI analysis
- [ ] Device/browser breakdown
- [ ] Geographic analysis (if available)
- [ ] Landing page A/B test results (if running)
- [ ] User flow analysis (how users navigate)
- [ ] Exit page analysis (where users leave)
- [ ] Search query analysis (GSC)
- [ ] Core Web Vitals check
- [ ] Goals vs actuals review
- [ ] Recommendations for next month

**Output:** Monthly analytics report + action plan

---

## 9. Alerts to Set Up

### GA4 Custom Alerts

Create these in GA4 Admin > Custom Insights:

1. **Traffic Drop Alert**
   - Condition: Daily sessions < 100 (adjust based on baseline)
   - Notify: Email
   - Purpose: Catch sudden traffic drops

2. **Zero Conversions Alert**
   - Condition: Daily `generate_lead` events = 0
   - Notify: Email + Slack (if configured)
   - Purpose: Flag potential form/tracking issues

3. **High Bounce Alert**
   - Condition: Homepage bounce rate > 70% for 3 consecutive days
   - Notify: Email
   - Purpose: Identify UX issues

---

## 10. Tools Integration

### Recommended Tools

1. **Google Data Studio / Looker Studio** (Free)
   - Create custom dashboards combining GA4 + GSC + Supabase
   - URL: https://lookerstudio.google.com
   - Template: Create "Real Estate Lead Dashboard"

2. **Hotjar** (Optional - Heatmaps & Session Recording)
   - Track user behavior visually
   - Identify friction points
   - Free tier: 35 sessions/day

3. **Microsoft Clarity** (Free - Heatmaps & Recordings)
   - Unlimited session recordings
   - Heatmaps, scroll maps, click maps
   - URL: https://clarity.microsoft.com

---

## 11. Quick Reference - Key URLs

| Resource | URL |
|----------|-----|
| GA4 Dashboard | https://analytics.google.com/analytics/web/#/p[PROPERTY_ID]/reports/home |
| GTM Container | https://tagmanager.google.com/#/container/accounts/[ACCOUNT_ID]/containers/[CONTAINER_ID] |
| Search Console | https://search.google.com/search-console?resource_id=https://bommakugroup.com |
| Supabase Dashboard | https://supabase.com/dashboard/project/[PROJECT_ID] |
| Looker Studio | https://lookerstudio.google.com |

---

## 12. Troubleshooting

### Issue: Events not showing in GA4

**Fix:**
1. Check GTM Preview mode (GTM > Preview)
2. Verify GA4 tag fires on all pages
3. Check Realtime report in GA4 (5-minute delay)
4. Verify Measurement ID matches (`G-QGJ61SEN5Y`)

### Issue: Conversions not tracking

**Fix:**
1. Mark events as conversions (GA4 > Configure > Events > Mark as conversion)
2. Check event parameters are correct
3. Verify trigger conditions in GTM
4. Test in GTM Preview mode

### Issue: Search Console data missing

**Fix:**
1. Verify site ownership (Search Console > Settings)
2. Submit sitemap if not done: `https://bommakugroup.com/sitemap.xml`
3. Wait 48-72 hours for initial data
4. Check robots.txt allows Googlebot

---

**Setup Complete?** Proceed to `OPERATING-ROUTINE.md` for daily/weekly/monthly tasks.
