import { Metadata } from 'next'
import { createClient } from './supabase/server'

// Fallback metadata (current hardcoded values)
const fallbackMetadata: Metadata = {
  metadataBase: new URL("https://bommakugroup.com"),
  icons: {
    icon: "/tab-icon.png",
    apple: "/tab-icon.png",
  },
  title: "The Pavillion | Luxury Villas in Boduppal, Hyderabad | Bommaku Group",
  description:
    "40 luxury standalone villas in Boduppal, Hyderabad. G+1+Penthouse, 30,000 SFT Bommaku Recreation Zone, 3BHK villas from ₹1.87 Cr. HMDA registered. Book site visit today.",
  keywords:
    "villas in Boduppal, villas near Uppal, villa community Boduppal, luxury villas Hyderabad, standalone villas Hyderabad, independent villas Hyderabad, The Pavillion Bommaku Group, Bommaku Recreation Zone, premium villas East Hyderabad, G+1 penthouse villas, villas for sale Boduppal, private villa community Hyderabad, Vastu villas Hyderabad, buy villas 2cr Hyderabad",
  openGraph: {
    title: "The Pavillion | Luxury Villas in Boduppal, Hyderabad | Bommaku Group",
    description:
      "Discover 40 luxury standalone villas in Boduppal. G+1+Penthouse, 3BHK, 30,000 SFT Bommaku Recreation Zone. HMDA registered. From ₹1.87 Cr. Book your site visit now.",
    type: "website",
    url: "https://bommakugroup.com",
    siteName: "The Pavillion by Bommaku Group",
    locale: "en_IN",
    images: [
      {
        url: "/assets/pavilion-hero.png",
        width: 1200,
        height: 630,
        alt: "The Pavillion Luxury Villas in Boduppal, Hyderabad - Aerial View",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Pavillion | Luxury Villas in Boduppal, Hyderabad",
    description:
      "40 luxury standalone villas in Boduppal. G+1+Penthouse, 30,000 SFT recreation zone. HMDA registered. From ₹1.87 Cr. Book site visit.",
    images: ["/assets/pavilion-hero.png"],
  },
  alternates: {
    canonical: "https://bommakugroup.com",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export async function getMetadataForPage(pagePath: string = '/'): Promise<Metadata> {
  try {
    const supabase = await createClient()

    // Fetch SEO data for this page
    const { data: seoPage } = await supabase
      .from('seo_pages')
      .select('*')
      .eq('page_path', pagePath)
      .eq('is_active', true)
      .single()

    if (!seoPage) {
      return fallbackMetadata
    }

    // Build metadata from database
    return {
      metadataBase: new URL(seoPage.canonical_url || "https://bommakugroup.com"),
      icons: {
        icon: "/tab-icon.png",
        apple: "/tab-icon.png",
      },
      title: seoPage.meta_title || fallbackMetadata.title,
      description: seoPage.meta_description || fallbackMetadata.description,
      keywords: seoPage.meta_keywords || fallbackMetadata.keywords,
      openGraph: {
        title: seoPage.og_title || seoPage.meta_title || fallbackMetadata.openGraph?.title,
        description: seoPage.og_description || seoPage.meta_description || fallbackMetadata.openGraph?.description,
        type: "website",
        url: seoPage.canonical_url || "https://bommakugroup.com",
        siteName: "The Pavillion by Bommaku Group",
        locale: "en_IN",
        images: seoPage.og_image_url ? [
          {
            url: seoPage.og_image_url,
            width: 1200,
            height: 630,
            alt: seoPage.og_image_alt || "The Pavillion Luxury Villas",
          },
        ] : fallbackMetadata.openGraph?.images,
      },
      twitter: {
        card: "summary_large_image",
        title: seoPage.twitter_title || seoPage.og_title || seoPage.meta_title,
        description: seoPage.twitter_description || seoPage.og_description || seoPage.meta_description,
        images: seoPage.twitter_image_url ? [seoPage.twitter_image_url] : fallbackMetadata.twitter?.images,
      },
      alternates: {
        canonical: seoPage.canonical_url || "https://bommakugroup.com",
      },
      robots: {
        index: seoPage.robots_index !== false,
        follow: seoPage.robots_follow !== false,
      },
    }
  } catch (error) {
    console.error('Error fetching SEO metadata:', error)
    return fallbackMetadata
  }
}
