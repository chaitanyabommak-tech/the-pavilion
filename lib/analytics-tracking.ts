/**
 * Analytics tracking utilities
 * Event tracking, conversion tracking, and custom dimensions
 */

import { company } from "@/src/content/facts";

/**
 * Analytics IDs from facts.ts
 */
export const ANALYTICS_IDS = {
  gtm: company.analytics.gtmId,
  ga4: company.analytics.ga4Id,
} as const;

/**
 * Standard event names for consistency
 */
export const EVENTS = {
  // Form events
  FORM_SUBMIT: 'form_submit',
  FORM_START: 'form_start',
  FORM_ERROR: 'form_error',

  // Engagement events
  BOOK_SITE_VISIT: 'book_site_visit',
  DOWNLOAD_BROCHURE: 'download_brochure',
  WHATSAPP_CLICK: 'whatsapp_click',
  PHONE_CLICK: 'phone_click',
  EMAIL_CLICK: 'email_click',

  // Navigation events
  PAGE_VIEW: 'page_view',
  SCROLL_DEPTH: 'scroll_depth',
  TIME_ON_PAGE: 'time_on_page',

  // Conversion events
  LEAD_SUBMITTED: 'generate_lead',
  QUALIFIED_LEAD: 'qualified_lead',
  SITE_VISIT_BOOKED: 'site_visit_booked',

  // Content events
  BLOG_READ: 'blog_read',
  VIDEO_PLAY: 'video_play',
  GALLERY_VIEW: 'gallery_view',
  FLOOR_PLAN_VIEW: 'floor_plan_view',

  // CTA events
  CTA_CLICK: 'cta_click',
  STICKY_CTA_CLICK: 'sticky_cta_click',
} as const;

/**
 * Custom dimensions for enhanced tracking
 */
export const CUSTOM_DIMENSIONS = {
  user_type: 'dimension1', // new_visitor, returning_visitor
  traffic_source: 'dimension2', // organic, direct, referral, social, paid
  device_category: 'dimension3', // mobile, tablet, desktop
  page_type: 'dimension4', // homepage, landing_page, blog, product
  user_intent: 'dimension5', // research, comparison, ready_to_buy
} as const;

/**
 * Conversion goals and values
 */
export const CONVERSIONS = {
  site_visit_booking: {
    event_name: EVENTS.SITE_VISIT_BOOKED,
    value: 50000, // ₹50,000 estimated value per site visit
    currency: 'INR',
  },
  lead_generation: {
    event_name: EVENTS.LEAD_SUBMITTED,
    value: 25000, // ₹25,000 estimated value per lead
    currency: 'INR',
  },
  brochure_download: {
    event_name: EVENTS.DOWNLOAD_BROCHURE,
    value: 5000, // ₹5,000 estimated value per download
    currency: 'INR',
  },
  whatsapp_engagement: {
    event_name: EVENTS.WHATSAPP_CLICK,
    value: 10000, // ₹10,000 estimated value per WhatsApp conversation
    currency: 'INR',
  },
} as const;

/**
 * Key Performance Indicators to track
 */
export const KPIs = {
  traffic: {
    sessions: 'ga:sessions',
    users: 'ga:users',
    pageviews: 'ga:pageviews',
    bounce_rate: 'ga:bounceRate',
    avg_session_duration: 'ga:avgSessionDuration',
  },
  engagement: {
    pages_per_session: 'ga:pageviewsPerSession',
    time_on_page: 'ga:avgTimeOnPage',
    scroll_depth: 'custom:scrollDepth',
  },
  conversions: {
    lead_conversion_rate: 'custom:leadConversionRate',
    site_visit_bookings: 'custom:siteVisitBookings',
    whatsapp_clicks: 'custom:whatsappClicks',
    phone_calls: 'custom:phoneCalls',
  },
  sources: {
    organic_traffic: 'ga:organicSearches',
    direct_traffic: 'ga:directSessions',
    referral_traffic: 'ga:referralSessions',
    social_traffic: 'ga:socialSessions',
  },
} as const;

/**
 * Goals and targets
 */
export const TARGETS = {
  monthly: {
    sessions: 5000,
    leads: 50,
    site_visits: 20,
    whatsapp_conversations: 100,
  },
  conversion_rates: {
    visitor_to_lead: 1.0, // 1% of visitors become leads
    lead_to_site_visit: 40.0, // 40% of leads book site visit
    site_visit_to_sale: 25.0, // 25% of site visits convert (tracked offline)
  },
} as const;

/**
 * UTM parameter builder
 */
export function buildUTMUrl(baseUrl: string, params: {
  source: string;
  medium: string;
  campaign: string;
  term?: string;
  content?: string;
}): string {
  const url = new URL(baseUrl);
  url.searchParams.set('utm_source', params.source);
  url.searchParams.set('utm_medium', params.medium);
  url.searchParams.set('utm_campaign', params.campaign);
  if (params.term) url.searchParams.set('utm_term', params.term);
  if (params.content) url.searchParams.set('utm_content', params.content);
  return url.toString();
}

/**
 * Track conversion with value
 */
export function trackConversion(
  conversionType: keyof typeof CONVERSIONS,
  additionalParams?: Record<string, any>
) {
  const conversion = CONVERSIONS[conversionType];

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', conversion.event_name, {
      value: conversion.value,
      currency: conversion.currency,
      ...additionalParams,
    });
  }
}

/**
 * Track custom event
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
}

/**
 * Page type detector for enhanced tracking
 */
export function getPageType(pathname: string): string {
  if (pathname === '/') return 'homepage';
  if (pathname.startsWith('/blog/')) return 'blog_post';
  if (pathname === '/blog') return 'blog_index';
  if (pathname.startsWith('/villas-')) return 'landing_page';
  if (pathname === '/contact') return 'contact';
  if (pathname === '/thank-you') return 'conversion';
  if (pathname.includes('3bhk') || pathname.includes('independent-houses')) return 'product_page';
  return 'other';
}

/**
 * Scroll depth tracking
 */
export function initScrollTracking() {
  if (typeof window === 'undefined') return;

  const depths = [25, 50, 75, 90, 100];
  const tracked = new Set<number>();

  const checkScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = Math.round((scrollTop + windowHeight) / documentHeight * 100);

    depths.forEach(depth => {
      if (scrollPercent >= depth && !tracked.has(depth)) {
        tracked.add(depth);
        trackEvent(EVENTS.SCROLL_DEPTH, {
          depth: depth,
          page: window.location.pathname,
        });
      }
    });
  };

  window.addEventListener('scroll', checkScroll, { passive: true });

  return () => window.removeEventListener('scroll', checkScroll);
}
