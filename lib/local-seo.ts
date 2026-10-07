/**
 * Local SEO utilities
 * NAP consistency, local business schema, area served data
 */

import { company, project } from "@/src/content/facts";

/**
 * Canonical NAP (Name, Address, Phone) for consistency across all citations
 * Use these exact values for directory listings, citations, and GBP
 */
export const NAP = {
  businessName: company.brandName,
  legalName: company.legalName,
  address: {
    street: company.address.street,
    city: company.address.city,
    state: company.address.state,
    pincode: company.address.pincode,
    formatted: company.address.full,
  },
  phone: company.contact.phoneDisplay,
  phoneE164: company.contact.phone,
  email: company.contact.email,
  website: "https://bommakugroup.com",
} as const;

/**
 * Geographic coordinates for local search
 */
export const GEO = {
  latitude: company.geo.latitude,
  longitude: company.geo.longitude,
  mapsUrl: company.geo.mapsUrl,
  embedUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d${company.geo.longitude}!3d${company.geo.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzU5LjAiTiA3OMKwMzQnMzIuMiJF!5e0!3m2!1sen!2sin!4v1234567890`,
} as const;

/**
 * Areas served for local SEO
 */
export const AREAS_SERVED = [
  { name: "Boduppal", type: "primary", distance: "0 km" },
  { name: "Surya Hills", type: "primary", distance: "0 km" },
  { name: "Uppal", type: "nearby", distance: "5 km" },
  { name: "Ghatkesar", type: "nearby", distance: "8 km" },
  { name: "Pocharam", type: "nearby", distance: "10 km" },
  { name: "Peerzadiguda", type: "nearby", distance: "6 km" },
  { name: "Medipally", type: "nearby", distance: "7 km" },
  { name: "Nagole", type: "metro", distance: "12 km" },
  { name: "LB Nagar", type: "metro", distance: "15 km" },
  { name: "East Hyderabad", type: "region", distance: "N/A" },
] as const;

/**
 * Service areas with postal codes
 */
export const SERVICE_AREAS = [
  { area: "Boduppal", pincode: "500092" },
  { area: "Uppal", pincode: "500039" },
  { area: "Ghatkesar", pincode: "501301" },
  { area: "Pocharam", pincode: "500088" },
  { area: "Peerzadiguda", pincode: "500039" },
  { area: "Medipally", pincode: "500098" },
] as const;

/**
 * Business categories for citations
 */
export const BUSINESS_CATEGORIES = {
  primary: "Real Estate Developer",
  secondary: [
    "Real Estate Agent",
    "Villa Builder",
    "Luxury Home Builder",
    "Residential Real Estate",
    "Property Developer",
  ],
  keywords: [
    "villas in boduppal",
    "standalone villas hyderabad",
    "luxury villas east hyderabad",
    "gp development boduppal",
    "3 bhk villas boduppal",
  ],
} as const;

/**
 * Social profiles for local SEO
 */
export const SOCIAL_PROFILES = {
  facebook: company.social.facebook !== "TODO_CONFIRM" ? company.social.facebook : null,
  instagram: company.social.instagram !== "TODO_CONFIRM" ? company.social.instagram : null,
  linkedin: company.social.linkedin !== "TODO_CONFIRM" ? company.social.linkedin : null,
  youtube: company.social.youtube !== "TODO_CONFIRM" ? company.social.youtube : null,
} as const;

/**
 * Business hours for GBP and citations
 */
export const BUSINESS_HOURS = {
  weekday: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "18:00",
  },
  sunday: {
    days: ["Sunday"],
    opens: "10:00",
    closes: "17:00",
  },
} as const;

/**
 * Generate LocalBusiness JSON-LD for local SEO
 */
export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${NAP.website}/#realestate`,
    "name": NAP.businessName,
    "legalName": NAP.legalName,
    "description": `Premium villa developer in ${project.location.area}, Hyderabad. ${project.overview.totalVillas} standalone ${project.overview.configuration} villas.`,
    "url": NAP.website,
    "telephone": NAP.phoneE164,
    "email": NAP.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": NAP.address.street,
      "addressLocality": NAP.address.city,
      "addressRegion": NAP.address.state,
      "postalCode": NAP.address.pincode,
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": GEO.latitude.toString(),
      "longitude": GEO.longitude.toString(),
    },
    "hasMap": GEO.mapsUrl,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": BUSINESS_HOURS.weekday.days,
        "opens": BUSINESS_HOURS.weekday.opens,
        "closes": BUSINESS_HOURS.weekday.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": BUSINESS_HOURS.sunday.days,
        "opens": BUSINESS_HOURS.sunday.opens,
        "closes": BUSINESS_HOURS.sunday.closes,
      },
    ],
    "areaServed": AREAS_SERVED.map(area => ({
      "@type": "City",
      "name": area.name,
    })),
    "sameAs": Object.values(SOCIAL_PROFILES).filter(Boolean),
    "priceRange": "₹₹₹",
  };
}

/**
 * NAP citation data for directory submissions
 * Copy-paste ready format for manual submissions
 */
export function getNAPCitationText(): string {
  return `
Business Name: ${NAP.businessName}
Legal Name: ${NAP.legalName}
Address: ${NAP.address.formatted}
Phone: ${NAP.phone}
Email: ${NAP.email}
Website: ${NAP.website}

Categories:
Primary: ${BUSINESS_CATEGORIES.primary}
Secondary: ${BUSINESS_CATEGORIES.secondary.join(", ")}

Business Hours:
Mon-Sat: ${BUSINESS_HOURS.weekday.opens} - ${BUSINESS_HOURS.weekday.closes}
Sunday: ${BUSINESS_HOURS.sunday.opens} - ${BUSINESS_HOURS.sunday.closes}

Description:
${company.brandName} develops premium standalone villas in ${project.location.area}, Hyderabad. ${project.name} offers ${project.overview.totalVillas} luxury ${project.overview.configuration} villas with 24,000 SFT recreation zone. From ${project.families.silver.priceDisplay}.

Keywords: ${BUSINESS_CATEGORIES.keywords.join(", ")}
  `.trim();
}
