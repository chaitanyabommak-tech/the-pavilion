import { project } from "@/src/content/facts";

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://bommakugroup.com';

  // Key project images for Google Images
  const images = [
    {
      loc: `${baseUrl}/images/pavilion-mobile-hero.jpg`,
      title: `${project.name} - Luxury Villas in ${project.location.area}`,
      caption: `${project.overview.totalVillas} ${project.overview.configuration} villas in ${project.location.area}, Boduppal, East Hyderabad`,
      geo_location: `${project.location.area}, Hyderabad, Telangana`,
    },
    {
      loc: `${baseUrl}/images/pavilion-desktop-hero.webp`,
      title: `${project.name} Villa Community Aerial View`,
      caption: `${project.overview.configuration} standalone villas with 24,000 SFT recreation zone`,
      geo_location: `${project.location.area}, Hyderabad, Telangana`,
    },
    {
      loc: `${baseUrl}/images/pavilion/entrance/grand-entrance-main.jpg`,
      title: `${project.name} Grand Entrance`,
      caption: `Main entrance to ${project.name} villa community`,
      geo_location: `${project.location.area}, Hyderabad, Telangana`,
    },
    {
      loc: `${baseUrl}/images/pavilion/exteriors/villa-front-elevation-01.jpg`,
      title: `${project.name} Villa Front Elevation`,
      caption: `${project.overview.configuration} villa architecture in Boduppal`,
      geo_location: `${project.location.area}, Hyderabad, Telangana`,
    },
    {
      loc: `${baseUrl}/images/pavilion/exteriors/corner-villa-view.jpg`,
      title: `${project.name} Standalone Villa`,
      caption: `Four-side open standalone villa with no shared walls`,
      geo_location: `${project.location.area}, Hyderabad, Telangana`,
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${images.map(img => `
  <url>
    <loc>${baseUrl}/</loc>
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
      <image:geo_location>${img.geo_location}</image:geo_location>
    </image:image>
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
