'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import AnimatedLogo from '@/components/AnimatedLogo'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [isHomePage, setIsHomePage] = useState(true)
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    setIsHomePage(window.location.pathname === '/')
  }, [])

  const navItems = [
    { label: t.header.services, href: isHomePage ? '#services' : '/#services' },
    { label: t.header.projects, href: isHomePage ? '#projects' : '/#projects' },
    { label: t.header.expertise, href: isHomePage ? '#expertise' : '/#expertise' },
    { label: t.header.contact, href: isHomePage ? '#contact' : '/#contact' },
  ]

  const handleContactClick = () => {
    if (isHomePage) {
      const contactSection = document.getElementById('contact')
      contactSection?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/#contact'
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <AnimatedLogo size="md" showText={true} />
          </Link>

          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#0f1419] hover:text-[#0047ab] transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0047ab] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary border border-[#e5e7eb] rounded-lg hover:border-[#0047ab] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className="uppercase tracking-wide">{language}</span>
                <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${languageOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {languageOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-[#e5e7eb] rounded-xl shadow-xl overflow-hidden animate-scale-in min-w-[160px]">
                  <button
                    onClick={() => {
                      setLanguage('fr')
                      setLanguageOpen(false)
                    }}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 ${language === 'fr' ? 'bg-[#0047ab]/10 text-[#0047ab]' : 'text-foreground hover:bg-[#f5f6f8]'}`}
                  >
                    <span className="text-sm font-bold text-[#0047ab] bg-[#0047ab]/10 px-1.5 py-0.5 rounded">FR</span>
                    <span>Français</span>
                    {language === 'fr' && <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                  </button>
                  <div className="border-t border-[#e5e7eb]" />
                  <button
                    onClick={() => {
                      setLanguage('en')
                      setLanguageOpen(false)
                    }}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 ${language === 'en' ? 'bg-[#0047ab]/10 text-[#0047ab]' : 'text-foreground hover:bg-[#f5f6f8]'}`}
                  >
                    <span className="text-sm font-bold text-[#0047ab] bg-[#0047ab]/10 px-1.5 py-0.5 rounded">EN</span>
                    <span>English</span>
                    {language === 'en' && <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                  </button>
                </div>
              )}
            </div>

            {/* CTA Button Desktop */}
            <button
              onClick={handleContactClick}
              className="px-6 py-2 bg-[#0047ab] text-white rounded-lg font-medium hover:bg-[#003a8c] shadow-md shadow-[#0047ab]/20 hover:shadow-lg hover:shadow-[#0047ab]/30 transition-all duration-300"
            >
              {t.header.startProject}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 animate-fade-in-down">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setLanguage('fr')}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${language === 'fr' ? 'bg-[#0047ab] text-white' : 'bg-[#f5f6f8] text-foreground hover:bg-[#e8f0f9]'}`}
              >
                <span className="text-xs font-bold bg-[#0047ab]/10 text-[#0047ab] px-1.5 py-0.5 rounded">FR</span> Français
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${language === 'en' ? 'bg-[#0047ab] text-white' : 'bg-[#f5f6f8] text-foreground hover:bg-[#e8f0f9]'}`}
              >
                <span className="text-xs font-bold bg-[#0047ab]/10 text-[#0047ab] px-1.5 py-0.5 rounded">EN</span> English
              </button>
            </div>
            <button onClick={handleContactClick} className="w-full px-4 py-2 bg-[#0047ab] text-white rounded-lg font-medium mt-2">
              {t.header.startProject}
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
