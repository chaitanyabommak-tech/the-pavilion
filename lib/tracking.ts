/**
 * Event Tracking for The Pavillion Website
 *
 * Supports Google Analytics 4, Google Tag Manager, and Google Ads conversion tracking
 * Safe for server-side rendering - only runs client-side
 */

// Type definitions for tracking events
export type TrackingEventName =
  | 'book_site_visit_click'
  | 'view_floor_plans_click'
  | 'floor_plan_view'
  | 'floor_plan_select'
  | 'floor_plan_cta_click'
  | 'master_plan_view'
  | 'master_plan_villa_select'
  | 'enquire_selected_villa_click'
  | 'phone_call_click'
  | 'whatsapp_click'
  | 'get_directions_click'
  | 'brochure_download_click'
  | 'enquiry_form_submit'
  | 'site_visit_form_submit'
  | 'thank_you_page_view'
  | 'recreation_zone_view'
  | 'recreation_zone_gallery_click'
  | 'recreation_zone_cta_click'
  | 'recreation_zone_member_benefits_click';

export interface TrackingEventParams {
  villa_id?: string;
  villa_block?: string;
  plot_size?: string;
  facing?: string;
  floor_plan?: string;
  cta_location?: string;
  form_type?: string;
  phone_number?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Track an event to Google Analytics and other platforms
 * Safe to call even if tracking IDs are not configured
 */
export function trackEvent(
  eventName: TrackingEventName,
  params?: TrackingEventParams
): void {
  // Only run client-side
  if (typeof window === 'undefined') return;

  try {
    // Google Analytics 4 (gtag.js)
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }

    // Google Tag Manager (dataLayer)
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }

    // Debug logging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Tracking Event]', eventName, params);
    }
  } catch (error) {
    // Silently fail - don't break user experience
    console.error('Tracking error:', error);
  }
}

/**
 * Track phone call click
 */
export function trackPhoneClick(phoneNumber: string, location: string): void {
  trackEvent('phone_call_click', {
    phone_number: phoneNumber,
    cta_location: location,
  });
}

/**
 * Track WhatsApp click
 */
export function trackWhatsAppClick(location: string): void {
  trackEvent('whatsapp_click', {
    cta_location: location,
  });
}

/**
 * Track villa selection in master plan
 */
export function trackVillaSelect(
  villaId: string,
  block: string,
  plotSize: string,
  facing: string
): void {
  trackEvent('master_plan_villa_select', {
    villa_id: villaId,
    villa_block: block,
    plot_size: plotSize,
    facing: facing,
  });
}

/**
 * Track form submission
 */
export function trackFormSubmit(
  formType: 'enquiry' | 'site_visit',
  villaId?: string
): void {
  const eventName = formType === 'site_visit'
    ? 'site_visit_form_submit'
    : 'enquiry_form_submit';

  trackEvent(eventName, {
    form_type: formType,
    villa_id: villaId,
  });
}

/**
 * Track page view (useful for thank you page)
 */
export function trackPageView(pageName: string, params?: TrackingEventParams): void {
  if (typeof window === 'undefined') return;

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: pageName,
        ...params,
      });
    }

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'page_view',
        page_title: pageName,
        ...params,
      });
    }
  } catch (error) {
    console.error('Page view tracking error:', error);
  }
}

/**
 * Google Ads conversion tracking
 * Call this for high-value conversions (form submit, site visit booking)
 */
export function trackConversion(conversionLabel?: string): void {
  if (typeof window === 'undefined') return;

  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const defaultLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

  if (!adsId) {
    console.warn('Google Ads ID not configured');
    return;
  }

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: `${adsId}/${conversionLabel || defaultLabel}`,
      });
    }
  } catch (error) {
    console.error('Conversion tracking error:', error);
  }
}

// Type declarations for global window objects
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
