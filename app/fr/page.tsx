'use client'

import React, { useState, useEffect } from 'react'
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
import FloatingContact from '@/components/FloatingContact'

function HomeContent() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <FloatingContact />
    </main>
  )
}

export default function HomeFR() {
  return (
    <LanguageProvider defaultLanguage="fr">
      <HomeContent />
    </LanguageProvider>
  )
}
