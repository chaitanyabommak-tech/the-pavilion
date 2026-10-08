import type { Metadata } from "next";
import { Space_Grotesk, Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { Providers } from "./providers";
import { getMetadataForPage } from "@/lib/metadata";
import { getHomePageSchema } from "@/lib/schema";
import { company } from "@/src/content/facts";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Typography v2.1 amendment: Hero H1 "The Pavillion" serif exception (Rishi approved, Jul 2026)
// FORBIDDEN everywhere else on the site — use only via .type-hero-serif class
const heroSerif = Cormorant_Garamond({
  variable: "--font-hero-serif",
  subsets: ["latin"],
  weight: ["300"], // Light weight only - minimal payload
  display: "swap",
});

// Dynamic metadata from database (falls back to hardcoded if DB unavailable)
export async function generateMetadata(): Promise<Metadata> {
  return await getMetadataForPage('/')
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${heroSerif.variable}`} suppressHydrationWarning>
      <head>
        {/* Performance: preconnect for fonts already handled by next/font */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Preload critical LCP image - Desktop hero background */}
        <link rel="preload" as="image" href="/images/pavilion-desktop-hero.webp" fetchPriority="high" type="image/webp" media="(min-width: 1024px)" />
        {/* Preload critical LCP image - Mobile hero background */}
        <link rel="preload" as="image" href="/images/pavilion-mobile-hero.jpg" fetchPriority="high" type="image/jpeg" media="(max-width: 1023px)" />
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{document.documentElement.setAttribute('data-theme','light');localStorage.setItem('pavilion-theme','light');}catch(e){}})();`,
          }}
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${company.analytics.gtmId}');`,
          }}
        />
        {/* Google Analytics 4 */}
        <Script
          id="ga4-script"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${company.analytics.ga4Id}`}
        />
        <Script
          id="ga4-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${company.analytics.ga4Id}');`,
          }}
        />
        {/* Schema.org structured data — Generated from facts.ts */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getHomePageSchema())
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
        <Providers>
          {children}
          <MobileStickyCTA />
        </Providers>
      </body>
    </html>
  );
}
