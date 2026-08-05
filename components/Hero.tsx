'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-6 animate-fade-in-down">
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
            🚀 {language === 'fr' ? 'Développeur Premium • Consultant Digital' : 'Premium Developer • Digital Consultant'}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up leading-tight text-balance">
          {language === 'fr' ? (
            <>
              Transformez votre <span className="text-primary">Vision Digitale</span> en Réalité
            </>
          ) : (
            <>
              Transform Your <span className="text-primary">Digital Vision</span> Into Reality
            </>
          )}
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up leading-relaxed text-pretty">
          {language === 'fr'
            ? 'Expert en WordPress, React, SEO & Automation. Je construis des solutions digitales premium qui rassurent, qui prouvent votre crédibilité et qui convertissent vos visiteurs en clients.'
            : 'Expert in WordPress, React, SEO & Automation. I build premium digital solutions that reassure, prove your credibility and convert your visitors into customers.'}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up">
          <button
            onClick={handleContactClick}
            className="px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 animate-breathe"
          >
            {t.hero.cta1}
          </button>
          <button
            onClick={handleProjectsClick}
            className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            {t.hero.cta2}
          </button>
        </div>

        {/* Trust Signals */}
        <div className="pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground mb-6 animate-fade-in-up uppercase tracking-widest font-semibold">
            {language === 'fr' ? 'TECHNOLOGIES MAÎTRISÉES' : 'MASTERED TECHNOLOGIES'}
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 animate-fade-in-up">
            {['WordPress', 'React', 'Node.js', 'Vercel', 'N8N', 'Make', language === 'fr' ? 'Expert SEO' : 'SEO Expert', 'AI Ready'].map((item, i) => (
              <div
                key={i}
                className="px-3 py-1 rounded-lg bg-card border border-border text-xs sm:text-sm font-medium text-foreground hover:border-primary/50 transition-colors duration-300"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
