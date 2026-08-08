'use client'

import React from 'react'
import { LanguageProvider } from '@/context/LanguageContext'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Identity from '@/components/Identity'
import Services from '@/components/Services'
import Stack from '@/components/Stack'
import CaseStudies from '@/components/CaseStudies'
import Methodology from '@/components/Methodology'
import Differentiation from '@/components/Differentiation'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

function HomeContent() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Identity />
      <Services />
      <Stack />
      <CaseStudies />
      <Methodology />
      <Differentiation />
      <Contact />
      <Footer />
    </main>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  )
}
