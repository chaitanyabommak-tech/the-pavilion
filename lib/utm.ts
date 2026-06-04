/**
 * UTM Parameter Capture and Storage
 *
 * Captures UTM parameters from URL and stores them for form submissions
 * Persists across pages using sessionStorage
 */

export interface UTMParams {
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
  utm_id?: string | null;
  gclid?: string | null; // Google Ads click ID
  fbclid?: string | null; // Facebook click ID
}

const STORAGE_KEY = 'the_pavilion_utm_params';
const STORAGE_EXPIRY_KEY = 'the_pavilion_utm_expiry';
const EXPIRY_DAYS = 30;

/**
 * Parse UTM parameters from current URL
 */
export function parseUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
    utm_content: params.get('utm_content'),
    utm_term: params.get('utm_term'),
    utm_id: params.get('utm_id'),
    gclid: params.get('gclid'),
    fbclid: params.get('fbclid'),
  };
}

/**
 * Save UTM parameters to sessionStorage
 */
export function saveUTMParams(params: UTMParams): void {
  if (typeof window === 'undefined') return;

  try {
    // Remove null/undefined values
    const cleanParams = Object.fromEntries(
      Object.entries(params).filter(([_, v]) => v != null)
    );

    if (Object.keys(cleanParams).length > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(cleanParams));

      // Set expiry timestamp
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + EXPIRY_DAYS);
      sessionStorage.setItem(STORAGE_EXPIRY_KEY, expiryDate.getTime().toString());
    }
  } catch (error) {
    console.error('Error saving UTM params:', error);
  }
}

/**
 * Get stored UTM parameters from sessionStorage
 */
export function getStoredUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    const expiry = sessionStorage.getItem(STORAGE_EXPIRY_KEY);

    if (!stored) return {};

    // Check if expired
    if (expiry && Date.now() > parseInt(expiry)) {
      sessionStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem(STORAGE_EXPIRY_KEY);
      return {};
    }

    return JSON.parse(stored);
  } catch (error) {
    console.error('Error reading UTM params:', error);
    return {};
  }
}

/**
 * Capture UTM parameters from URL and save them
 * Call this on page load
 */
export function captureUTMParams(): UTMParams {
  const urlParams = parseUTMParams();
  const hasUTM = Object.values(urlParams).some(v => v != null);

  if (hasUTM) {
    saveUTMParams(urlParams);
    return urlParams;
  }

  // Return stored params if no new ones in URL
  return getStoredUTMParams();
}

/**
 * Get UTM params formatted for form submission
 * Returns object ready to be added to form data
 */
export function getUTMFormData(): Record<string, string> {
  const params = getStoredUTMParams();
  const formData: Record<string, string> = {};

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      formData[key] = value;
    }
  });

  return formData;
}

/**
 * Get current page URL (for tracking where form was submitted from)
 */
export function getCurrentPageURL(): string {
  if (typeof window === 'undefined') return '';
  return window.location.href;
}

/**
 * Get referrer URL (where user came from)
 */
export function getReferrer(): string {
  if (typeof window === 'undefined') return '';
  return document.referrer || '';
}

/**
 * Build complete form submission data with UTM params and tracking info
 */
export interface FormSubmissionData {
  // User inputs
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  selected_villa?: string;
  preferred_date?: string;
  budget?: string;

  // Tracking data
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  utm_id?: string;
  gclid?: string;
  fbclid?: string;
  page_url?: string;
  referrer?: string;
  timestamp?: string;
}

/**
 * Enrich form data with UTM params and tracking info
 */
export function enrichFormData(formData: Partial<FormSubmissionData>): FormSubmissionData {
  const utmParams = getUTMFormData();

  return {
    ...formData,
    ...utmParams,
    page_url: getCurrentPageURL(),
    referrer: getReferrer(),
    timestamp: new Date().toISOString(),
  };
}

/**
 * Initialize UTM tracking on page load
 * Call this in a useEffect or component mount
 */
export function initUTMTracking(): void {
  if (typeof window === 'undefined') return;

  // Capture on initial load
  const params = captureUTMParams();

  // Log in development
  if (process.env.NODE_ENV === 'development' && Object.keys(params).length > 0) {
    console.log('[UTM Tracking] Captured params:', params);
  }
}
