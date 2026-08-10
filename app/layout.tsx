import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3, IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import BackToTop from '@/components/BackToTop'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import './globals.css'

const _playfair = Playfair_Display({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800'], variable: '--font-heading' });
const _sourceSans = Source_Sans_3({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'], variable: '--font-body' });
const _ibmMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ['400', '500', '600'] });

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://www.gosite.digital/#person',
      'name': 'Sahab Youssef',
      'jobTitle': 'Expert WordPress, React & SEO Developer',
      'url': 'https://www.gosite.digital',
      'email': 'contact@gosite.digital',
      'telephone': '+212751134318',
      'image': 'https://www.gosite.digital/sahab-office.jpg',
      'sameAs': [
        'https://github.com/youssefe-sa',
        'https://wa.me/212644627826',
      ],
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'MA',
        'addressLocality': 'Morocco',
      },
      'knowsAbout': ['WordPress', 'React', 'Next.js', 'SEO', 'Web Automation', 'Artificial Intelligence'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.gosite.digital/#website',
      'url': 'https://www.gosite.digital',
      'name': 'GoSite',
      'description': 'Expert WordPress, React and SEO developer. High-performance websites that convert visitors into customers.',
      'author': { '@id': 'https://www.gosite.digital/#person' },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://www.gosite.digital/#service',
      'name': 'GoSite Digital Services',
      'url': 'https://www.gosite.digital',
      'provider': { '@id': 'https://www.gosite.digital/#person' },
      'serviceType': ['Web Development', 'WordPress Development', 'React Development', 'SEO Optimization', 'Digital Consulting'],
      'areaServed': {
        '@type': 'GeoCircle',
        'geoMidpoint': { '@type': 'GeoCoordinates', 'latitude': 33.9716, 'longitude': -6.8498 },
        'geoRadius': '10000000',
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '50',
        'bestRating': '5',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'GoSite | Expert WordPress & React Developer — Morocco',
  description: '7 years building high-performance WordPress and React websites. Free audit available. Based in Morocco, serving clients worldwide.',
  keywords: ['wordpress developer morocco', 'react developer', 'seo expert morocco', 'freelance web developer casablanca', 'wordpress seo agency morocco'],
  authors: [{ name: 'Sahab Youssef' }],
  creator: 'GoSite',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.gosite.digital',
    siteName: 'GoSite',
    title: 'GoSite | Expert WordPress & React Developer — Morocco',
    description: '7 years building high-performance WordPress and React websites. Free audit available.',
    images: [
      {
        url: 'https://www.gosite.digital/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GoSite — Expert WordPress & React Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoSite | Expert WordPress & React Developer',
    description: '7 years building high-performance websites. Free audit available.',
    images: ['https://www.gosite.digital/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.gosite.digital" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${_playfair.variable} ${_sourceSans.variable} font-sans antialiased`}>
        <AnimatedBackground />
        {children}
        <Analytics />
        <BackToTop />
      </body>
    </html>
  )
}
