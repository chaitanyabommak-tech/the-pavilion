/**
 * Image optimization utilities
 * Helpers for alt text, Open Graph images, and structured data
 */

import { project, company } from "@/src/content/facts";

/**
 * Generate SEO-optimized alt text for project images
 */
export function getProjectImageAlt(imageType: string): string {
  const alts: Record<string, string> = {
    hero: `${project.name} - ${project.overview.totalVillas} luxury villas in ${project.location.area}, Boduppal, East Hyderabad`,
    entrance: `${project.name} grand entrance gate in ${project.location.area}`,
    villa_exterior: `${project.overview.configuration} standalone villa at ${project.name}, no shared walls`,
    villa_interior: `${project.name} villa interior - 3 BHK with pooja room`,
    recreation: `24,000 SFT Bommaku Recreation Zone at ${project.name}`,
    aerial: `${project.name} aerial view showing ${project.overview.totalVillas} standalone villas`,
    floor_plan: `${project.overview.configuration} villa floor plan at ${project.name}`,
    amenities: `${project.name} amenities - swimming pool, gym, sports courts`,
  };

  return alts[imageType] || `${project.name} luxury villas in ${project.location.area}`;
}

/**
 * Get Open Graph image metadata for a page
 */
export function getOGImageMetadata(pageType: 'home' | 'blog' | 'landing' = 'home') {
  const baseUrl = 'https://bommakugroup.com';

  return {
    images: [
      {
        url: `${baseUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${project.name} - ${project.overview.totalVillas} Villas in ${project.location.area}`,
        type: 'image/png',
      },
    ],
    siteName: `${project.name} by ${company.brandName}`,
    type: pageType === 'blog' ? 'article' : 'website',
    locale: 'en_IN',
  };
}

/**
 * Generate Twitter Card metadata
 */
export function getTwitterCardMetadata() {
  return {
    card: 'summary_large_image',
    title: `${project.name} - ${project.overview.totalVillas} Luxury Villas`,
    description: `${project.overview.configuration} villas in ${project.location.area}. 24,000 SFT recreation zone. From ${project.families.silver.priceDisplay}.`,
    images: ['https://bommakugroup.com/opengraph-image'],
  };
}

/**
 * Image sizes for responsive loading
 */
export const imageSizes = {
  hero: {
    mobile: '100vw',
    tablet: '100vw',
    desktop: '(max-width: 1920px) 55vw, 1920px',
  },
  gallery: {
    mobile: '100vw',
    tablet: '50vw',
    desktop: '33vw',
  },
  thumbnail: {
    mobile: '100vw',
    tablet: '33vw',
    desktop: '25vw',
  },
} as const;

/**
 * Priority loading for above-the-fold images
 */
export const criticalImages = [
  '/images/pavilion-mobile-hero.jpg',
  '/images/pavilion-desktop-hero.webp',
] as const;

/**
 * Check if an image should be loaded with priority
 */
export function shouldPrioritize(imagePath: string): boolean {
  return criticalImages.some(critical => imagePath.includes(critical));
}
