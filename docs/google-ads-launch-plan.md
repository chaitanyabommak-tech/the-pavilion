# Google Ads Launch Plan for The Pavillion

**IMPORTANT:** Google Ads is a **PAID** advertising platform. It is NOT free.  
This document provides instructions for manual campaign setup only.  
The website is prepared for Google Ads traffic, but campaigns must be created manually inside Google Ads.

## Free Traffic First

Before spending on Google Ads, maximize these FREE channels:
- ✅ Google Business Profile (FREE)
- ✅ Google organic SEO (FREE)
- ✅ Google Maps visibility (FREE)
- ✅ Social media posts (FREE)
- ✅ WhatsApp sharing (FREE)
- ✅ Real estate listing portals with free plans

## Google Ads Promotional Credit

Google sometimes offers promotional credits (₹20,000-₹40,000) for new advertisers.
- Check eligibility at: https://ads.google.com/intl/en_in/home/campaigns/
- Read terms carefully - credits often require minimum spend
- Credits expire after 60 days typically
- Only use if eligible and after reading ALL terms

## Campaign Strategy

### Campaign Type
**Search Campaigns Only** (to start)

Do NOT start with Performance Max - it gives less control for high-intent villa buyers.

### Campaign Structure

**Campaign 1: The Pavillion | Boduppal Villas**
- Ad Group 1: Villas in Boduppal
- Ad Group 2: Villas Near Uppal
- Ad Group 3: Gated Community Villas

**Campaign 2: The Pavillion | Brand Search**
- Ad Group 1: Bommaku Group
- Ad Group 2: The Pavillion

**Campaign 3: The Pavillion | High-Income Hyderabad** (Optional)
- Ad Group 1: Luxury Villa Buyers
- Ad Group 2: Investment Property

## Keywords

### Boduppal Villas (Phrase Match)
```
"villas in boduppal"
"villa for sale in boduppal"
"luxury villas in boduppal"
"gated community villas in boduppal"
"villas near uppal"
"villas near uppal metro"
"independent houses boduppal"
"3 bhk villas boduppal"
```

### East Hyderabad Villas
```
"villas in east hyderabad"
"luxury villas east hyderabad"
"gated community villas hyderabad"
"independent villas hyderabad"
```

### Brand Keywords (Exact Match)
```
[the pavilion villas]
[bommaku group]
[bommaku constructions]
[the pavilion boduppal]
```

## Negative Keywords (CRITICAL)

Add these to PREVENT wasted spend:
```
rent, rental, lease, leasing
jobs, career, hiring, recruitment
images, photos, wallpaper
free, cheap, low budget, affordable
apartment, flat, flats, 2bhk apartment
pg, hostel, paying guest
interior design, interior decorator
construction jobs, contractor jobs
architect, architecture course
real estate course, real estate jobs
```

## Ad Copy

### Headlines (Use 15 variations)
```
The Pavillion Villas Boduppal
40 Private Villas in East Hyderabad
Luxury Villas Near Uppal Metro
G+1+Penthouse Villas
Private Villa Community Boduppal
Book a Private Site Visit Today
Bommaku Group Premium Villas
Villas With 30,000 SFT Recreation
Premium Villas Starting ₹1.87 Cr
Clubhouse Amenities Included
40 Exclusive Villa Plots
Limited Villa Inventory
HMDA Registered Project
Bank Loan Support Available
View Floor Plans Online
```

### Descriptions (Use 4 variations)
```
Description 1:
Explore The Pavillion, a private villa community in Boduppal with 40 G+1+Penthouse villas, clubhouse amenities, and a 30,000 SFT recreation zone.

Description 2:
Book a private site visit for The Pavillion by Bommaku Group. View floor plans, master plan, location details, and current availability.

Description 3:
Premium villa living in East Hyderabad with private plots, internal roads, clubhouse amenities, and bank loan support.

Description 4:
Limited 40 villas. G+1+Penthouse configuration. 3BHK standalone homes. Book your site visit now.
```

## Sitelink Assets (MUST ADD)

### Sitelink 1: View Floor Plans
Description: See villa layouts, plot sizes, and total built-up area.  
URL: `https://bommakugroup.com/#floor-plans`

### Sitelink 2: Master Plan
Description: Explore the full community layout and villa positioning.  
URL: `https://bommakugroup.com/#master-plan`

### Sitelink 3: Book Site Visit
Description: Schedule a private visit to The Pavillion.  
URL: `https://bommakugroup.com/#book-site-visit`

### Sitelink 4: Location Advantage
Description: See nearby metro, ORR, schools, hospitals, and city access.  
URL: `https://bommakugroup.com/#location`

## Callout Assets
```
40 Private Villas
G+1+Penthouse Homes
30,000 SFT Recreation Zone
Clubhouse & Pool
Bank Loan Support
Boduppal Location
Private Site Visits
Limited Inventory
HMDA Registered
```

## Location Assets
- Link your Google Business Profile
- Set radius targeting: 50km from Boduppal
- Focus on: Uppal, Nacharam, Habsiguda, Tarnaka, LB Nagar, Secunderabad

## Call Assets
Primary: +91 96760 77142  
Enable call reporting to track calls from ads

## Budget Recommendations

### Testing Phase (First 2 Weeks)
- Daily Budget: ₹1,500 - ₹2,000
- Total: ₹21,000 - ₹28,000
- Goal: Test keywords, ads, audience

### Scaling Phase (After Conversion Data)
- Daily Budget: ₹3,000 - ₹5,000
- Only if conversion tracking is working
- Only if cost per lead is acceptable

**DO NOT** start with ₹10,000/day before validating tracking.

## Conversion Tracking Setup

### Step 1: Add Conversion Action in Google Ads
1. Go to Google Ads → Tools → Conversions
2. Click "+ New conversion action"
3. Select "Website"
4. Name: "Site Visit Form Submission"
5. Category: "Submit lead form"
6. Value: Set to ₹10,000 (estimated lead value)
7. Count: One (don't count duplicates)

### Step 2: Get Conversion Tag
Copy the Conversion ID and Conversion Label

### Step 3: Add to .env.local
```
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=XXXXXXXXXXX
```

The website will automatically fire conversion tracking when forms are submitted.

## Manual Setup Checklist

Before launching campaigns:

- [ ] Create Google Ads account
- [ ] Add billing information
- [ ] Create Search campaign
- [ ] Set Network: Google Search only
- [ ] Link Google Business Profile
- [ ] Add all keywords (phrase match)
- [ ] Add all negative keywords
- [ ] Add 15 headlines
- [ ] Add 4 descriptions
- [ ] Add 4 sitelinks with descriptions
- [ ] Add callout assets
- [ ] Add call asset
- [ ] Set location targeting
- [ ] Set language: English
- [ ] Set conversion tracking
- [ ] Set daily budget (start low)
- [ ] Review and launch
- [ ] Monitor daily for first week

## Success Metrics to Track

### Week 1-2 (Testing)
- Click-through rate (CTR): Target 3%+
- Cost per click (CPC): Target ₹30-₹80
- Impressions: At least 1,000/day
- Clicks: At least 30/day

### Week 3-4 (Optimization)
- Form submissions: Target 3-5/day
- Cost per lead: Target ₹2,000-₹4,000
- Conversion rate: Target 5-10%

### Month 2+
- Site visits booked: Track manually
- Villa sales: Ultimate metric
- ROI: Revenue vs ad spend

## Common Mistakes to Avoid

❌ Starting with broad match keywords (wastes money)  
❌ Not adding negative keywords (wastes money)  
❌ Setting budget too high initially  
❌ Not tracking conversions properly  
❌ Running ads without Google Business Profile  
❌ Using Performance Max without Search data first  
❌ Not checking search terms report weekly  
❌ Sending traffic to homepage instead of landing page  
❌ Not having phone number clickable in mobile ads  
❌ Forgetting to set ad schedule (run 8 AM - 9 PM)  

## Ad Schedule Recommendation

Monday - Friday: 8 AM to 9 PM (₹1.2x bid adjustment)  
Saturday: 9 AM to 8 PM (₹1.1x bid adjustment)  
Sunday: 10 AM to 7 PM (₹1.0x normal bid)  

Reduce bids 11 PM - 6 AM (low quality traffic)

## When to Pause Campaigns

Pause immediately if:
- Cost per lead exceeds ₹8,000
- No conversions after spending ₹20,000
- Click-through rate below 1%
- Conversion tracking breaks
- All villas are sold

## Support Resources

- Google Ads Help: https://support.google.com/google-ads
- Keyword Planner: Use to find search volumes
- Google Ads Community: Ask questions from experts
- Call Google Ads Support: 1800-419-0200 (India)

---

**Final Reminder:**  
Google Ads is PAID advertising. Budget accordingly.  
Start small, track everything, optimize based on data.  
Free traffic from Google Business Profile and SEO should be maximized first.
