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
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Video Hero Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
          poster=""
        >
          <source src="/perso.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-6 animate-fade-in-down">
          <span className="px-5 py-2.5 rounded-full text-sm font-semibold bg-[#0047ab] text-white shadow-lg shadow-[#0047ab]/20">
            {language === 'fr' ? 'Développeur Premium • Consultant Digital' : 'Premium Developer • Digital Consultant'}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#0f1419] mb-6 animate-fade-in-up leading-tight text-balance tracking-tight">
          {language === 'fr' ? (
            <>
              Je crée des sites{' '}
              <span className="relative inline-block text-[#0047ab]">
                WordPress & React
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 8 Q50 0 100 8 T200 8" fill="none" stroke="#0047ab" strokeWidth="3" strokeLinecap="round" opacity="0.4">
                    <animate attributeName="d" values="M0 8 Q50 0 100 8 T200 8;M0 6 Q50 10 100 4 T200 6;M0 8 Q50 0 100 8 T200 8" dur="3s" repeatCount="indefinite" />
                  </path>
                  <path d="M0 8 Q50 0 100 8 T200 8" fill="none" stroke="#0047ab" strokeWidth="2" strokeLinecap="round">
                    <animate attributeName="d" values="M0 8 Q50 0 100 8 T200 8;M0 6 Q50 10 100 4 T200 6;M0 8 Q50 0 100 8 T200 8" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
                  </path>
                </svg>
              </span>{' '}
              qui rankent, convertissent et font grandir votre business.
            </>
          ) : (
            <>
              I Build{' '}
              <span className="relative inline-block text-[#0047ab]">
                WordPress & React
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0 8 Q50 0 100 8 T200 8" fill="none" stroke="#0047ab" strokeWidth="3" strokeLinecap="round" opacity="0.4">
                    <animate attributeName="d" values="M0 8 Q50 0 100 8 T200 8;M0 6 Q50 10 100 4 T200 6;M0 8 Q50 0 100 8 T200 8" dur="3s" repeatCount="indefinite" />
                  </path>
                  <path d="M0 8 Q50 0 100 8 T200 8" fill="none" stroke="#0047ab" strokeWidth="2" strokeLinecap="round">
                    <animate attributeName="d" values="M0 8 Q50 0 100 8 T200 8;M0 6 Q50 10 100 4 T200 6;M0 8 Q50 0 100 8 T200 8" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
                  </path>
                </svg>
              </span>{' '}
              That Rank, Convert, and Grow Your Business.
            </>
          )}
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-[#111827] mb-8 max-w-2xl mx-auto animate-fade-in-up leading-relaxed text-pretty font-semibold" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}>
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up stagger-3">
          <button
            onClick={handleContactClick}
            className="group relative px-8 py-4 bg-[#0047ab] text-white font-semibold rounded-lg hover:bg-[#003a8c] shadow-lg shadow-[#0047ab]/20 hover:shadow-xl hover:shadow-[#0047ab]/30 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative">{t.hero.cta1}</span>
          </button>
          <button
            onClick={handleProjectsClick}
            className="group px-8 py-4 bg-white text-[#0f1419] font-semibold rounded-lg border-2 border-[#e5e7eb] hover:border-[#0047ab] hover:text-[#0047ab] hover:shadow-lg hover:shadow-[#0047ab]/10 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative">{t.hero.cta2}</span>
          </button>
        </div>

        {/* Trust Signals - Infinite Scroll Marquee */}
        <div className="pt-12 border-t border-[#e5e7eb] overflow-hidden">
          <p className="text-sm text-[#0f1419] mb-6 animate-fade-in-up uppercase tracking-widest font-bold">
            {language === 'fr' ? 'TECHNOLOGIES MAÎTRISÉES' : 'MASTERED TECHNOLOGIES'}
          </p>
          <div className="relative">
            {/* Gradient masks for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
            {/* Scrolling container */}
            <div className="flex animate-[marquee_30s_linear_infinite] hover:pause">
              {[
                'WordPress', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS',
                'Vercel', 'PostgreSQL', 'MongoDB', 'Supabase', 'Firebase',
                'N8N', 'Make', 'Zapier', 'Docker', 'GitHub Actions',
                'SEO Expert', 'Google Analytics', 'SEMrush', 'Ahrefs',
                'AI Ready', 'GPT Integration', 'Bricks Builder', 'Elementor Pro',
                'REST APIs', 'GraphQL', 'CI/CD', 'Git',
                'WordPress', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS',
                'Vercel', 'PostgreSQL', 'MongoDB', 'Supabase', 'Firebase',
                'N8N', 'Make', 'Zapier', 'Docker', 'GitHub Actions',
                'SEO Expert', 'Google Analytics', 'SEMrush', 'Ahrefs',
                'AI Ready', 'GPT Integration', 'Bricks Builder', 'Elementor Pro',
                'REST APIs', 'GraphQL', 'CI/CD', 'Git',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 mx-1.5 px-4 py-2 rounded-lg bg-white/80 border border-[#e5e7eb] text-sm font-medium text-[#0f1419] hover:border-[#0047ab] hover:bg-[#0047ab] hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
