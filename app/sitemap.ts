import type { MetadataRoute } from 'next'
import { servicePages } from '@/lib/seo-pages'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://gosite.digital'
  const staticPages = ['', '/confidentialite', '/conditions', '/mentions-legales'].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path ? 'yearly' as const : 'weekly' as const, priority: path ? 0.4 : 1 }))
  const services = servicePages.map(({ slug }) => ({ url: `${base}/services/${slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 }))
  return [...staticPages, ...services]
}
