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
  title: "The Pavilion | Standalone Villas in Boduppal by Bommak Group",
  description:
    "The Pavilion — A Clean Slate. Most homes are built, then sold. Yours is built as you decide. 45 standalone G+1+Penthouse villas in Surya Hills, Boduppal, East Hyderabad by Bommak Constructions.",
  keywords:
    "standalone villas Boduppal, community living Hyderabad, The Pavilion Bommak Group, luxury villas East Hyderabad, G+1 penthouse villas, Surya Hills Boduppal",
  openGraph: {
    title: "The Pavilion | Standalone Villas in Boduppal by Bommak Group",
    description:
      "A Clean Slate. Most homes are built, then sold. Yours is built as you decide — a blank canvas handed to you before the first pour of concrete. 45 villas in Boduppal, East Hyderabad.",
    type: "website",
    url: "https://bommakugroup.com",
    siteName: "The Pavilion by Bommak Group",
    images: [
      {
        url: "/assets/pavilion-hero.png",
        width: 1200,
        height: 630,
        alt: "The Pavilion — Standalone Villas in Boduppal, East Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Pavilion | Standalone Villas in Boduppal by Bommak Group",
    description:
      "45 standalone G+1+Penthouse villas in Surya Hills, Boduppal, East Hyderabad. A clean slate — yours to design.",
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
