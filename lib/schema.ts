/**
 * Schema.org structured data generators
 * All schema uses facts.ts as single source of truth
 */

import { company, project, banks } from "@/src/content/facts";

/**
 * Organization schema for Bommaku Group
 */
export function getOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": "https://bommakugroup.com/#organization",
    "name": company.brandName,
    "legalName": company.legalName,
    "alternateName": company.alternateNames,
    "url": "https://bommakugroup.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://bommakugroup.com/tab-icon.png"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": company.contact.phone,
      "contactType": "Sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Telugu"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": company.address.street,
      "addressLocality": company.address.city,
      "addressRegion": company.address.state,
      "postalCode": company.address.pincode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": company.geo.latitude.toString(),
      "longitude": company.geo.longitude.toString()
    },
    "email": company.contact.email,
    "sameAs": [
      company.social.facebook !== "TODO_CONFIRM" ? company.social.facebook : null,
      company.social.instagram !== "TODO_CONFIRM" ? company.social.instagram : null,
      company.social.linkedin !== "TODO_CONFIRM" ? company.social.linkedin : null,
    ].filter(Boolean)
  };
}

/**
 * LocalBusiness schema for real estate operations
 */
export function getLocalBusinessSchema() {
  return {
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": "https://bommakugroup.com/#realestateagent",
    "name": company.brandName,
    "description": `Premium villa developer in Hyderabad specializing in luxury standalone villa communities. ${project.overview.totalVillas} villas at ${project.name}.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": company.address.street,
      "addressLocality": company.address.city,
      "addressRegion": company.address.state,
      "postalCode": company.address.pincode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": company.geo.latitude.toString(),
      "longitude": company.geo.longitude.toString()
    },
    "hasMap": company.geo.mapsUrl,
    "telephone": company.contact.phone,
    "email": company.contact.email,
    "priceRange": "₹₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "17:00"
      }
    ],
    "areaServed": ["Boduppal", "Uppal", "Ghatkesar", "Pocharam", "Peerzadiguda", "Medipally", "East Hyderabad"]
  };
}

/**
 * Product schema for The Pavillion project
 */
export function getProductSchema() {
  return {
    "@type": "Product",
    "@id": "https://bommakugroup.com/#product",
    "name": `${project.name} - Luxury Villas in ${project.location.area}`,
    "description": `${project.overview.totalVillas} luxury standalone villas in ${project.location.area}, Hyderabad. ${project.overview.configuration} configuration with 3BHK, 24,000 SFT recreation zone.`,
    "brand": {
      "@id": "https://bommakugroup.com/#organization"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": project.families.silver.priceFrom.toString(),
      "highPrice": "30000000", // Approximate max for Platinum
      "offerCount": project.overview.totalVillas.toString(),
      "availability": "https://schema.org/InStock",
      "seller": {
        "@id": "https://bommakugroup.com/#organization"
      }
    },
    "category": "Residential Villa",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Villa Type",
        "value": project.overview.configuration
      },
      {
        "@type": "PropertyValue",
        "name": "Configuration",
        "value": "3 BHK + Pooja Room"
      },
      {
        "@type": "PropertyValue",
        "name": "Total Units",
        "value": project.overview.totalVillas.toString()
      },
      {
        "@type": "PropertyValue",
        "name": "Bank Approvals",
        "value": banks.approvedLenders.map(b => b.name).join(", ")
      }
    ]
  };
}

/**
 * WebSite schema with search action
 */
export function getWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": "https://bommakugroup.com/#website",
    "url": "https://bommakugroup.com",
    "name": `${project.name} by ${company.brandName}`,
    "publisher": {
      "@id": "https://bommakugroup.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bommakugroup.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * Complete schema graph for homepage
 */
export function getHomePageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getLocalBusinessSchema(),
      getProductSchema(),
      getWebSiteSchema()
    ]
  };
}
