import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import BackToTop from '@/components/BackToTop'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const ibmMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-ibm-mono', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://gosite.digital'),
  title: { default: 'GoSite par Sahab Youssef | Agence web & SEO au Maroc', template: '%s | GoSite' },
  description: 'GoSite, agence digitale de Sahab Youssef à Casablanca : création de sites WordPress, développement Next.js, SEO technique et automatisation pour le Maroc et l’international.',
  keywords: ['agence web Maroc', 'développeur web Casablanca', 'création site WordPress', 'développement Next.js', 'SEO technique Maroc', 'automatisation IA'],
  authors: [{ name: 'Sahab Youssef', url: 'https://gosite.digital' }],
  creator: 'Sahab Youssef', publisher: 'GoSite',
  alternates: { canonical: '/', languages: { 'fr-MA': '/', 'en': '/?lang=en' } },
  openGraph: { type: 'website', locale: 'fr_MA', alternateLocale: ['en_US'], url: '/', siteName: 'GoSite', title: 'GoSite par Sahab Youssef | Expériences web performantes', description: 'Sites web, produits Next.js, SEO technique et automatisations pour le Maroc et l’international.' },
  twitter: { card: 'summary_large_image', title: 'GoSite par Sahab Youssef', description: 'Agence web, SEO technique et automatisation au Maroc.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  icons: { icon: '/icon-light-32x32.png', apple: '/apple-icon.png' },
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#07111f', colorScheme: 'light' }

const structuredData = {
  '@context': 'https://schema.org', '@graph': [
    { '@type': 'ProfessionalService', '@id': 'https://gosite.digital/#business', name: 'GoSite', founder: { '@id': 'https://gosite.digital/#person' }, url: 'https://gosite.digital', email: 'contact@gosite.digital', telephone: '+212751134318', address: { '@type': 'PostalAddress', addressLocality: 'Casablanca', addressCountry: 'MA' }, areaServed: ['Morocco', 'Worldwide'], knowsAbout: ['WordPress', 'Next.js', 'Technical SEO', 'Web automation'] },
    { '@type': 'Person', '@id': 'https://gosite.digital/#person', name: 'Sahab Youssef', jobTitle: 'Développeur web & consultant digital', worksFor: { '@id': 'https://gosite.digital/#business' } },
    { '@type': 'WebSite', '@id': 'https://gosite.digital/#website', url: 'https://gosite.digital', name: 'GoSite', publisher: { '@id': 'https://gosite.digital/#business' }, inLanguage: ['fr-MA', 'en'] }
  ]
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" className="bg-background"><body className={`${inter.variable} ${ibmMono.variable} font-sans antialiased`}><AnimatedBackground />{children}<Analytics /><BackToTop /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>
}
