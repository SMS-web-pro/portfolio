'use client'

import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-white via-secondary/10 to-primary/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="animate-fade-in-up">
            <Link href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#0047ab] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="font-bold text-[#0047ab]">Sahab-Youssef</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              {language === 'fr' 
                ? 'Développeur spécialisé en WordPress, React, Node.js, n8n, Backend & Frontend. Expert en automatisation et solutions IA pour entreprises.'
                : 'Developer specialized in WordPress, React, Node.js, n8n, Backend & Frontend. Expert in automation and AI solutions for businesses.'}
            </p>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up stagger-1">
            <h4 className="font-semibold text-foreground mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === 'fr' ? 'Services' : 'Services'}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === 'fr' ? 'Projets' : 'Projects'}
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === 'fr' ? 'Expertise' : 'Expertise'}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === 'fr' ? 'Contact' : 'Contact'}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-fade-in-up stagger-2">
            <h4 className="font-semibold text-foreground mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === 'fr' ? 'À Propos' : 'About'}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === 'fr' ? 'Études de Cas' : 'Case Studies'}
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === 'fr' ? 'Stack Technique' : 'Tech Stack'}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === 'fr' ? 'Support' : 'Support'}
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="animate-fade-in-up stagger-3">
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <p>
                <a href="mailto:contact@siteupservices.online" className="text-primary font-semibold hover:text-primary/80 transition-colors break-all">
                  📧 contact@siteupservices.online
                </a>
              </p>
              <p>
                <a href="tel:+212751134318" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  📞 +212 751 134318
                </a>
              </p>
              <p className="text-xs text-muted-foreground mb-2 font-medium">
                {language === 'fr' 
                  ? 'Retrouvez mes projets et contributions'
                  : 'Find my projects and contributions'}
              </p>
              <p>
                <a 
                  href="https://github.com/youssefe-sa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  🔗 GitHub: Sahab-Youssef
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in-up stagger-4">
          <p className="text-xs text-muted-foreground">© {currentYear} Sahab Youssef. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
          <div className="flex gap-6 text-sm">
            <a href="/confidentialite" className="text-muted-foreground hover:text-primary transition-colors">
              {language === 'fr' ? 'Confidentialité' : 'Privacy'}
            </a>
            <a href="/conditions" className="text-muted-foreground hover:text-primary transition-colors">
              {language === 'fr' ? 'Conditions' : 'Terms'}
            </a>
            <a href="/mentions-legales" className="text-muted-foreground hover:text-primary transition-colors">
              {language === 'fr' ? 'Mentions Légales' : 'Legal Notices'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
