import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bommakugroup.com"),
  icons: {
    icon: "/tab-icon.png",
    apple: "/tab-icon.png",
  },
  title: "The Pavilion | Luxury Villas in Boduppal, Hyderabad | Bommaku Group",
  description:
    "45 luxury standalone villas in Boduppal, Hyderabad. G+1+Penthouse, 30,000 SFT recreation zone, 3BHK villas from ₹1.87 Cr. HMDA registered. Book site visit today.",
  keywords:
    "villas in Boduppal, villas near Uppal, luxury villas Hyderabad, standalone villas Hyderabad, independent villas Hyderabad, The Pavilion Bommaku Group, premium villas East Hyderabad, G+1 penthouse villas, villas for sale Boduppal, gated community villas Boduppal, Vastu villas Hyderabad, buy villas 2cr Hyderabad",
  openGraph: {
    title: "The Pavilion | Luxury Villas in Boduppal, Hyderabad | Bommaku Group",
    description:
      "Discover 45 luxury standalone villas in Boduppal. G+1+Penthouse, 3BHK, 30,000 SFT clubhouse. HMDA registered. From ₹1.87 Cr. Book your site visit now.",
    type: "website",
    url: "https://bommakugroup.com",
    siteName: "The Pavilion by Bommaku Group",
    locale: "en_IN",
    images: [
      {
        url: "/assets/pavilion-hero.png",
        width: 1200,
        height: 630,
        alt: "The Pavilion Luxury Villas in Boduppal, Hyderabad - Aerial View",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Pavilion | Luxury Villas in Boduppal, Hyderabad",
    description:
      "45 luxury standalone villas in Boduppal. G+1+Penthouse, 30,000 SFT recreation zone. HMDA registered. From ₹1.87 Cr. Book site visit.",
    images: ["/assets/pavilion-hero.png"],
  },
  alternates: {
    canonical: "https://bommakugroup.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Performance: preconnect for fonts already handled by next/font */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Preload hero image */}
        <link rel="preload" as="image" href="/assets/pavilion-hero.png" fetchPriority="high" />
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('pavilion-theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KD57FLT8');`,
          }}
        />
        {/* Google Analytics 4 — G-QGJ61SEN5Y */}
        <Script
          id="ga4-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-QGJ61SEN5Y"
        />
        <Script
          id="ga4-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-QGJ61SEN5Y');`,
          }}
        />
        {/* Schema.org structured data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://bommakugroup.com/#organization",
                  "name": "Bommaku Group",
                  "alternateName": "Bommaku Constructions",
                  "url": "https://bommakugroup.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://bommakugroup.com/tab-icon.png"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-9676077142",
                    "contactType": "Sales",
                    "areaServed": "IN",
                    "availableLanguage": ["English", "Hindi", "Telugu"]
                  },
                  "sameAs": [
                    "https://www.facebook.com/bommakugroup",
                    "https://www.instagram.com/bommakugroup"
                  ]
                },
                {
                  "@type": "RealEstateAgent",
                  "@id": "https://bommakugroup.com/#realestateagent",
                  "name": "Bommaku Constructions",
                  "description": "Premium villa developer in Hyderabad specializing in luxury standalone villa communities",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Surya Hills, Boduppal",
                    "addressLocality": "Hyderabad",
                    "addressRegion": "Telangana",
                    "postalCode": "500039",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "17.416403",
                    "longitude": "78.575600"
                  },
                  "telephone": "+91-9676077142",
                  "email": "bommakugroup@gmail.com",
                  "priceRange": "₹₹₹"
                },
                {
                  "@type": "Product",
                  "@id": "https://bommakugroup.com/#product",
                  "name": "The Pavilion - Luxury Villas in Boduppal",
                  "description": "45 luxury standalone villas in Boduppal, Hyderabad. G+1+Penthouse configuration with 3BHK, 30,000 SFT recreation zone, HMDA registered.",
                  "brand": {
                    "@id": "https://bommakugroup.com/#organization"
                  },
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "INR",
                    "lowPrice": "18700000",
                    "highPrice": "30000000",
                    "offerCount": "45",
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
                      "value": "G+1+Penthouse"
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "Configuration",
                      "value": "3 BHK + Pooja Room"
                    },
                    {
                      "@type": "PropertyValue",
                      "name": "Total Units",
                      "value": "45"
                    }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://bommakugroup.com/#website",
                  "url": "https://bommakugroup.com",
                  "name": "The Pavilion by Bommaku Group",
                  "publisher": {
                    "@id": "https://bommakugroup.com/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://bommakugroup.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        {/* GTM noscript */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KD57FLT8" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        {/* Skip navigation for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:text-sm">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
