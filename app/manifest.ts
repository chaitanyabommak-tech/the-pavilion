import { MetadataRoute } from 'next';
import { project, company } from '@/src/content/facts';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${project.name} by ${company.brandName}`,
    short_name: project.name,
    description: `${project.overview.totalVillas} luxury standalone villas in ${project.location.area}, Hyderabad. ${project.overview.configuration}, 24,000 SFT recreation zone. From ${project.families.silver.priceDisplay}.`,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1B5E20',
    icons: [
      {
        src: '/tab-icon.png',
        sizes: '192x192 512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
