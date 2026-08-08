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

export const metadata: Metadata = {
  title: 'GoSite - Développeur Expert WordPress, React & SEO | Consultant Digital',
  description: 'Développeur expert WordPress, React et SEO. Je crée des sites web performants qui convertissent vos visiteurs en clients. Audit gratuit disponible.',
  keywords: ['wordpress', 'react', 'seo', 'développeur web', 'consultant digital', 'automation', 'intelligence artificielle'],
  authors: [{ name: 'Sahab Youssef' }],
  creator: 'GoSite',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://gosite.digital',
    siteName: 'GoSite',
    title: 'GoSite - Développeur Expert WordPress, React & SEO',
    description: 'Développeur expert WordPress, React et SEO. Je crée des sites web performants qui convertissent vos visiteurs en clients.',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_playfair.variable} ${_sourceSans.variable} font-sans antialiased`}>
        <AnimatedBackground />
        {children}
        <Analytics />
        <BackToTop />
      </body>
    </html>
  )
}
