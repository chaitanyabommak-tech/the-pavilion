/**
 * BOMMAKU GROUP — CANONICAL FACTS
 * Single source of truth for all website content
 * Last updated: 2026-10-07
 *
 * RULES:
 * - Every fact on the website MUST come from this file
 * - TODO_CONFIRM values are hidden from users until confirmed
 * - Never modify APPROVAL_LABEL without written approval
 */

// ═══════════════════════════════════════════════════════════════════
// COMPLIANCE & APPROVAL
// ═══════════════════════════════════════════════════════════════════

export const APPROVAL_LABEL = "GP Development" as const;

// ═══════════════════════════════════════════════════════════════════
// COMPANY INFORMATION
// ═══════════════════════════════════════════════════════════════════

export const company = {
  legalName: "Bommaku Group Private Limited",
  brandName: "Bommaku Group",
  alternateNames: ["Bommaku", "Bommaku Constructions"] as const,

  contact: {
    phone: "+919676077142",
    phoneDisplay: "+91 96760 77142",
    whatsappUrl: "https://wa.me/919676077142",
    telUrl: "tel:+919676077142",
    email: "bommakugroup@gmail.com",
    emailRecommended: "sales@bommakugroup.com", // TODO_CONFIRM: Set up domain email
  },

  address: {
    street: "Surya Hills, Boduppal",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500092", // TODO_CONFIRM: Verify (disclaimer shows 500039)
    full: "Surya Hills, Boduppal, Hyderabad, Telangana 500092",
  },

  geo: {
    latitude: 17.416403,
    longitude: 78.575600,
    mapsUrl: "https://maps.app.goo.gl/3gEbRXmKsENAkjXi7",
  },

  analytics: {
    gtmId: "GTM-KD57FLT8",
    ga4Id: "G-QGJ61SEN5Y", // TODO_CONFIRM: Verify GA4 measurement ID
  },

  social: {
    facebook: "TODO_CONFIRM", // Currently shows bare facebook.com
    instagram: "TODO_CONFIRM", // Currently shows bare instagram.com
    youtube: "TODO_CONFIRM", // Currently shows bare youtube.com
    linkedin: "TODO_CONFIRM",
  },

  portfolio: {
    functionHalls: 9, // TODO_CONFIRM: "close to nine function halls"
    adjacentVenue: "Bommak Convention",
    previousProject: {
      name: "RNS Dream Homes",
      location: "Boduppal",
      listings: ["Squareyards", "Houssed"],
      listedAs: "Bommaku Constructions",
    },
  },
} as const;

// ═══════════════════════════════════════════════════════════════════
// THE PAVILLION PROJECT
// ═══════════════════════════════════════════════════════════════════

export const project = {
  name: "The Pavillion",

  // IMPORTANT: Both spellings for search visibility
  alternateNames: [
    "The Pavilion",
    "The Pavilion Boduppal",
    "The Pavillion Boduppal",
    "Pavilion Villas Boduppal",
    "Pavillion Villas Surya Hills",
  ] as const,

  tagline: "33 Villas · G+1+Penthouse · Surya Hills, Boduppal",

  overview: {
    totalVillas: 33,
    totalBlocks: 8,
    blockLabels: ["A", "B", "C", "D", "E", "F", "G", "H"] as const,
    configuration: "G+1+Penthouse",
    siteArea: "About 3 acres",
  },

  facing: {
    eastRows: ["A", "C", "E", "G"] as const,
    westRows: ["B", "D", "F", "H"] as const,
    eastCount: 17,
    westCount: 16,
    note: "Only East and West facing villas. NO NE or NW villas exist.",
  },

  families: {
    silver: {
      name: "Silver",
      label: "Silver Type",
      plotSizes: [165, 167],
      builtUpSft: 2400,
      unitCount: 10,
      breakdown: "165 Sq.Yd × 7 units, 167 Sq.Yd × 3 units",
      jacuzzi: false,
      priceFrom: 195_00_000, // ₹1.95 Cr
      priceDisplay: "₹1.95 Cr",
    },
    signature: {
      name: "Signature",
      label: "Signature Type",
      plotSizes: [183, 225],
      builtUpSft: "TODO_CONFIRM", // 2,500 or 2,600 SFT?
      unitCount: "TODO_CONFIRM",
      breakdown: "Corner A1 (183 Sq.Yd, East-facing) plus 225 Sq.Yd units",
      jacuzzi: true,
      priceFrom: 250_00_000, // ₹2.50 Cr for 225 Sq.Yd
      priceDisplay: "₹2.50 Cr",
    },
    platinum: {
      name: "Platinum",
      label: "Platinum Type",
      plotSizes: [222, 227, 250], // TODO_CONFIRM: exact range
      builtUpSft: "TODO_CONFIRM",
      unitCount: "TODO_CONFIRM",
      breakdown: "Larger end plots",
      jacuzzi: true,
      priceFrom: "TODO_CONFIRM",
      priceDisplay: "TODO_CONFIRM",
    },
  },

  included: [
    "3 BHK + Pooja Room",
    "Home theatre on penthouse level",
    "Covered car parking",
    "Private compound wall and gate",
    "100% Vastu-compliant layout",
  ] as const,

  cleanSlate: {
    description: "Buyer-personalized internal planning before plan freeze",
    note: "The RCC framework stays fixed",
  },

  modelVilla: {
    plotSize: 167,
    unit: "Sq.Yd",
    status: "Fully furnished",
    special: "MD's office is on the penthouse level",
  },

  infrastructure: {
    mainRoad: "30 ft main road running east-west",
    subRoads: "25 ft sub-roads",
    security: ["Security cabin", "24-hour surveillance", "CCTV on every lane"] as const,
  },

  status: "TODO_CONFIRM", // Construction stage, possession timeline

  location: {
    area: "Surya Hills, Boduppal",
    administrativeDivision: "Malkajgiri Municipal Corporation (MMC), Uppal Zone",
    administrationHistory: [
      "Boduppal gram panchayats merged into Boduppal Municipality (2016)",
      "Upgraded to Municipal Corporation",
      "Merged into GHMC (December 2025)",
      "Falls under Malkajgiri Municipal Corporation since 11 February 2026",
    ] as const,
  },
} as const;

// ═══════════════════════════════════════════════════════════════════
// RECREATION ZONE (24,000 SFT)
// ═══════════════════════════════════════════════════════════════════

export const recreation = {
  totalArea: 24_000,
  totalAreaDisplay: "24,000 SFT",
  blocks: 2,

  block1: {
    ground: [
      "Supermarket (Reliance Fresh)", // TODO_CONFIRM: Was "Ratnadeep (10,000 SFT)" in some places
      "Game room",
    ] as const,
    terrace: "Infinity pool with party area",
  },

  skyWalk: "Open-sky sun deck / sky walk connecting both blocks at first-floor level",

  block2: {
    ground: "Yoga and Zumba patio studio",
    upper: "Full professional gym",
  },

  grounds: [
    "Zen garden",
    "2 Pickleball courts",
    "1 Basketball court",
    "Box cricket turf",
    "Visitor waiting lobby",
  ] as const,

  ownerBenefit: {
    year1: "Free access once facility is operational",
    year2Plus: "35% member benefit (subject to final membership terms)",
  },

  // Confirmed amenities only (hide unconfirmed)
  confirmed: [
    "Swimming pool",
    "Infinity pool",
    "Professional gym",
    "Yoga studio",
    "Zumba studio",
    "Pickleball courts (2)",
    "Basketball court",
    "Box cricket turf",
    "Zen garden",
    "Game room",
    "Supermarket",
    "Party area",
    "Visitor lobby",
  ] as const,

  // Unconfirmed — hide these until verified
  unconfirmedExtras: [
    "Sauna",
    "Spa",
    "Salon",
    "Crèche",
    "Banquet hall",
    "Library",
    "Pet zone",
    "Valet laundry",
    "EV charging",
    "Key-card access",
    "Driver dormitory",
    "Badminton",
    "Jogging track",
    "Beach deck",
    "Cabana pods",
    "Coffee shop",
    "Restaurant",
    "Aroma garden",
    "Hanging garden",
    "Football",
  ] as const,
} as const;

// ═══════════════════════════════════════════════════════════════════
// BANK APPROVALS (User Override: KEEP AS IS)
// ═══════════════════════════════════════════════════════════════════

export const banks = {
  showLenderLogos: true, // User override: keep bank section
  approvedLenders: [
    { name: "SBI", logo: "/assets/banks/sbi.svg" },
    { name: "ICICI Bank", logo: "/assets/banks/icici.svg" },
    { name: "HDFC Bank", logo: "/assets/banks/hdfc.svg" },
    { name: "Bajaj Finance", logo: "/assets/banks/bajaj.svg" },
    { name: "Kotak Bank", logo: "/assets/banks/kotak.svg" },
    { name: "Karur Vysya Bank", logo: "/assets/banks/canara.svg" }, // NOTE: File is canara.svg but displays Karur Vysya
  ] as const,
  heading: "Approved for project finance by",
  faqAnswer: "Yes, the project is approved by major banks including SBI, ICICI, HDFC, Bajaj Finance, Kotak, and Karur Vysya Bank for home loan financing.",
} as const;

// ═══════════════════════════════════════════════════════════════════
// NEARBY LOCATIONS (All distances need verification)
// ═══════════════════════════════════════════════════════════════════

export const nearby = [
  { name: "Uppal Main Road", distance: "5 minutes", verified: false, verifiedOn: null },
  { name: "Uppal Metro Station", distance: "8 minutes", verified: false, verifiedOn: null },
  { name: "ORR Exit No. 9", distance: "12 km", verified: false, verifiedOn: null },
  // TODO_VERIFY: Add schools, hospitals, markets with Google Maps drive times
] as const;

// ═══════════════════════════════════════════════════════════════════
// BLOG DEFAULTS
// ═══════════════════════════════════════════════════════════════════

export const blog = {
  basePath: "/insights",
  authorDefault: {
    name: "TODO_CONFIRM", // "Rishi Bommaku" or full name?
    role: "Managing Director",
    bio: "TODO_CONFIRM",
    photo: "TODO_CONFIRM",
    linkedinUrl: "TODO_CONFIRM",
  },
} as const;

// ═══════════════════════════════════════════════════════════════════
// LANGUAGE SUPPORT
// ═══════════════════════════════════════════════════════════════════

export const i18n = {
  defaultLang: "en",
  supportedLangs: ["en", "te"] as const,
  teluguEnabled: true,
} as const;

// ═══════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

/**
 * Check if a value is TODO_CONFIRM
 */
export function isTodoConfirm(value: unknown): boolean {
  return value === "TODO_CONFIRM";
}

/**
 * Get display value, returning null for TODO_CONFIRM
 */
export function getDisplayValue<T>(value: T | "TODO_CONFIRM"): T | null {
  return isTodoConfirm(value) ? null : (value as T);
}

/**
 * Format price for display
 */
export function formatPrice(amount: number): string {
  const crores = amount / 10_000_000;
  return `₹${crores.toFixed(2)} Cr`;
}

// ═══════════════════════════════════════════════════════════════════
// FREEZE ALL EXPORTS
// ═══════════════════════════════════════════════════════════════════

Object.freeze(company);
Object.freeze(project);
Object.freeze(recreation);
Object.freeze(banks);
Object.freeze(nearby);
Object.freeze(blog);
Object.freeze(i18n);
