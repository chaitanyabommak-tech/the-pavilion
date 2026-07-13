import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The Pavillion by Bommaku Group',
    short_name: 'The Pavillion',
    description: '33 luxury standalone villas in Boduppal, Hyderabad. G+1+Penthouse, 24,000 SFT recreation zone. From ₹1.87 Cr.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1B5E20',
    icons: [
      {
        src: '/tab-icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
