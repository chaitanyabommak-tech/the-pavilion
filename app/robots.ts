import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // Explicitly allow AI crawlers (they're a growth channel for local search)
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-Web', 'PerplexityBot', 'Google-Extended'],
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: 'https://bommakugroup.com/sitemap.xml',
  }
}
