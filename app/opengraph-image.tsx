import { ImageResponse } from 'next/og';
import { project, company } from '@/src/content/facts';

export const runtime = 'edge';
export const alt = `${project.name} - ${project.overview.totalVillas} Luxury Villas in ${project.location.area}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          color: 'white',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 300,
            marginBottom: 20,
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}
        >
          {project.name}
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 400,
            marginBottom: 40,
            textAlign: 'center',
            opacity: 0.9,
          }}
        >
          {project.overview.totalVillas} {project.overview.configuration} Villas in {project.location.area}
        </div>
        <div
          style={{
            display: 'flex',
            gap: 40,
            fontSize: 28,
            opacity: 0.85,
          }}
        >
          <div>{project.overview.totalVillas} Villas</div>
          <div>•</div>
          <div>24,000 SFT Recreation</div>
          <div>•</div>
          <div>From {project.families.silver.priceDisplay}</div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 24,
            opacity: 0.7,
          }}
        >
          {company.brandName} • bommakugroup.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
