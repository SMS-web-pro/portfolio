'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Identity() {
  const { language } = useLanguage()
  const t = translations[language]
  const [showCvModal, setShowCvModal] = useState(false)

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Profile Image Placeholder */}
          <div className="relative order-2 md:order-1 animate-slide-in-left">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/10 border border-border p-2 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
              <img 
                src="/sahab.jpg" 
                alt="Sahab Youssef" 
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            
            {/* CV Download Button */}
            <div className="mt-6 text-center animate-fade-in-up stagger-3">
              <p className="text-sm text-muted-foreground mb-4 font-medium">
                {language === 'fr' 
                  ? 'Découvrez mon parcours et mes réalisations'
                  : 'Discover my background and achievements'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/cv.pdf.pdf"
                  download="sahab-youssef-cv.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary/90 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                  </svg>
                  <span>{language === 'fr' ? 'Télécharger CV' : 'Download CV'}</span>
                </a>
                
                <button
                  onClick={() => setShowCvModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary text-sm font-medium rounded-md hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>{language === 'fr' ? 'Voir CV' : 'View CV'}</span>
                </button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-3">
                {language === 'fr' ? 'PDF • Mis à jour 2026' : 'PDF • Updated 2026'}
              </p>
            </div>
          </div>

          {/* Right: Identity Content */}
          <div className="order-1 md:order-2 animate-slide-in-right">
            <div className="mb-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
                {language === 'fr' ? 'Bonjour, je suis' : 'Hi, I\'m'} <span className="text-primary">{t.identity.name}</span>
              </h2>
              <p className="text-lg font-semibold text-primary mb-4">{t.identity.tagline}</p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {language === 'fr'
                  ? `Je suis un développeur spécialisé en WordPress, React et SEO. Depuis plus de 7 ans, j'aide des entreprises et des consultants à transformer leurs ambitions digitales en réalité.`
                  : `I'm a developer specialized in WordPress, React and SEO. For over 7 years, I've been helping businesses and consultants turn their digital ambitions into reality.`}
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {language === 'fr'
                  ? `Mon expertise couvre la construction de sites web performants, l'optimisation SEO avancée, l'automatisation intelligente des processus et l'intégration d'IA pour booster vos conversions.`
                  : `My expertise covers building high-performance websites, advanced SEO optimization, smart process automation and AI integration to boost your conversions.`}
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                {language === 'fr'
                  ? `Je combine technique rigoureuse et stratégie commerciale pour créer des solutions qui ne sont pas seulement belles, mais surtout rentables.`
                  : `I combine rigorous technique and commercial strategy to create solutions that aren't just beautiful, but above all profitable.`}
              </p>

              {/* Key Values */}
              <div className="pt-4 space-y-3">
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all mt-1">
                    ✓
                  </div>
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    <strong>Premium</strong>: Solutions haut de gamme, jamais de compromis
                  </span>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all mt-1">
                    ✓
                  </div>
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    <strong>Consultant</strong>: Je pense comme un business person, pas seulement comme un dev
                  </span>
                </div>
                <div className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all mt-1">
                    ✓
                  </div>
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    <strong>Autonome</strong>: Capable de gérer un projet de A à Z
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CV Modal */}
      {showCvModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-xl border border-border shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-xl font-semibold text-foreground">
                {language === 'fr' ? 'CV - Sahab Youssef' : 'CV - Sahab Youssef'}
              </h3>
              <button
                onClick={() => setShowCvModal(false)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* iframe Container */}
            <div className="relative h-[600px] bg-gray-100">
              <iframe
                src="https://drive.google.com/file/d/1DCz4fWs0T47J9OKW3-gEVTe9X_sjQa3S/preview?usp=sharing"
                className="w-full h-full border-0"
                title="CV - Sahab Youssef"
                loading="lazy"
                onLoad={() => {
                  const loader = document.getElementById('cv-iframe-loader');
                  if (loader) {
                    loader.style.display = 'none';
                  }
                }}
              />
              {/* Loading indicator */}
              <div className="absolute inset-0 flex items-center justify-center bg-white/90 pointer-events-none" id="cv-iframe-loader">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-muted-foreground">
                    {language === 'fr' ? 'Chargement du CV...' : 'Loading CV...'}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-border bg-secondary/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {language === 'fr' ? 'URL:' : 'URL:'}
                  </span>
                  <code className="text-sm font-mono bg-primary/10 text-primary px-2 py-1 rounded">
                    https://drive.google.com/file/d/1DCz4fWs0T47J9OKW3-gEVTe9X_sjQa3S/preview?usp=sharing
                  </code>
                </div>
                <a
                  href="https://drive.google.com/file/d/1DCz4fWs0T47J9OKW3-gEVTe9X_sjQa3S/preview?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center gap-2"
                >
                  <span>{language === 'fr' ? 'Ouvrir dans un nouvel onglet' : 'Open in new tab'}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
