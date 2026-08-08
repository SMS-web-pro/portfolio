'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import AnimatedLogo from '@/components/AnimatedLogo'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]
  const currentYear = new Date().getFullYear()
  const [isHomePage, setIsHomePage] = useState(true)

  useEffect(() => {
    setIsHomePage(window.location.pathname === '/')
  }, [])

  return (
    <footer className="bg-[#f8fafc] border-t border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <AnimatedLogo size="sm" showText={true} />
            </Link>
            <p className="text-[#6b7280] text-sm mb-4">
              {language === 'fr' 
                ? 'Développeur spécialisé en WordPress, React, Node.js, n8n, Backend & Frontend. Expert en automatisation et solutions IA pour entreprises.'
                : 'Developer specialized in WordPress, React, Node.js, n8n, Backend & Frontend. Expert in automation and AI solutions for businesses.'}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#0f1419] mb-4 text-sm uppercase tracking-wider">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={isHomePage ? '#services' : '/#services'} className="text-[#6b7280] hover:text-[#0047ab] transition-colors">
                  {language === 'fr' ? 'Services' : 'Services'}
                </Link>
              </li>
              <li>
                <Link href={isHomePage ? '#projects' : '/#projects'} className="text-[#6b7280] hover:text-[#0047ab] transition-colors">
                  {language === 'fr' ? 'Projets' : 'Projects'}
                </Link>
              </li>
              <li>
                <Link href={isHomePage ? '#expertise' : '/#expertise'} className="text-[#6b7280] hover:text-[#0047ab] transition-colors">
                  {language === 'fr' ? 'Expertise' : 'Expertise'}
                </Link>
              </li>
              <li>
                <Link href={isHomePage ? '#contact' : '/#contact'} className="text-[#6b7280] hover:text-[#0047ab] transition-colors">
                  {language === 'fr' ? 'Contact' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#0f1419] mb-4 text-sm uppercase tracking-wider">{language === 'fr' ? 'Ressources' : 'Resources'}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-[#6b7280] hover:text-[#0047ab] transition-colors">
                  {language === 'fr' ? 'À Propos' : 'About'}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[#6b7280] hover:text-[#0047ab] transition-colors">
                  {language === 'fr' ? 'Études de Cas' : 'Case Studies'}
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-[#6b7280] hover:text-[#0047ab] transition-colors">
                  {language === 'fr' ? 'Stack Technique' : 'Tech Stack'}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#6b7280] hover:text-[#0047ab] transition-colors">
                  {language === 'fr' ? 'Support' : 'Support'}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#0f1419] mb-4 text-sm uppercase tracking-wider">{language === 'fr' ? 'Contact' : 'Contact'}</h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:contact@gosite.digital" className="flex items-center gap-3 text-[#0047ab] font-semibold hover:text-[#003a8c] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="break-all">contact@gosite.digital</span>
              </a>
              <a href="tel:+212751134318" className="flex items-center gap-3 text-[#0047ab] font-semibold hover:text-[#003a8c] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+212 751 134318</span>
              </a>
              <a href="https://github.com/youssefe-sa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#0047ab] font-semibold hover:text-[#003a8c] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                <span>GitHub: GoSite</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e5e7eb] mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#6b7280]">&copy; {currentYear} GoSite. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
          <div className="flex gap-6 text-sm">
            <a href="/confidentialite" className="text-[#6b7280] hover:text-[#0047ab] transition-colors">
              {language === 'fr' ? 'Confidentialité' : 'Privacy'}
            </a>
            <a href="/conditions" className="text-[#6b7280] hover:text-[#0047ab] transition-colors">
              {language === 'fr' ? 'Conditions' : 'Terms'}
            </a>
            <a href="/mentions-legales" className="text-[#6b7280] hover:text-[#0047ab] transition-colors">
              {language === 'fr' ? 'Mentions Légales' : 'Legal Notices'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
