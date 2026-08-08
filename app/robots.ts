import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/', disallow: ['/api/'] }, sitemap: 'https://gosite.digital/sitemap.xml', host: 'https://gosite.digital' }
}
