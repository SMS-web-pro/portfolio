import React from "react"
import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import BackToTop from '@/components/BackToTop'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _ibmMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ['400', '500', '600'] });

export const metadata: Metadata = {
  title: 'Sahab Youssef - Developer Premium | WordPress • React • SEO • AI • Automation',
  description: 'Expert en WordPress, React, GitHub, Vercel, Bricks, SEO, Automation et AI. Portfolio de consultant premium transformant des visions en solutions numériques performantes.',
  generator: 'v0.app',
  icons: {
    icon: '/icon-light-32x32.png',
    shortcut: '/icon-light-32x32.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-icon.png',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <AnimatedBackground />
        {children}
        <Analytics />
        <BackToTop />
      </body>
    </html>
  )
}
