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
    icon: "/tab-icon.jpeg",
    apple: "/tab-icon.jpeg",
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
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('pavilion-theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
