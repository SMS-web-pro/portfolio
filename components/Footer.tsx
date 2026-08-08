'use client'

import { Github, Mail, MapPin, Phone } from 'lucide-react'
import { BrandLogo } from '@/components/BrandLogo'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { language } = useLanguage()
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <BrandLogo />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{language === 'fr' ? 'GoSite est l’agence digitale indépendante de Sahab Youssef. Nous créons des sites, produits web et automatisations utiles, performants et durables.' : 'GoSite is Sahab Youssef’s independent digital agency. We build useful, fast and durable websites, web products and automations.'}</p>
          </div>
          <div><h3 className="font-semibold text-foreground">{language === 'fr' ? 'Navigation' : 'Navigation'}</h3><ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground"><li><a className="hover:text-primary" href="#services">Services</a></li><li><a className="hover:text-primary" href="#projects">{language === 'fr' ? 'Réalisations' : 'Work'}</a></li><li><a className="hover:text-primary" href="#expertise">Expertise</a></li><li><a className="hover:text-primary" href="#contact">Contact</a></li></ul></div>
          <div><h3 className="font-semibold text-foreground">{language === 'fr' ? 'Expertises' : 'Expertise'}</h3><ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground"><li>WordPress</li><li>Next.js</li><li>SEO technique</li><li>Automation & IA</li></ul></div>
          <div><h3 className="font-semibold text-foreground">Contact</h3><ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground"><li><a className="flex items-center gap-2 hover:text-primary" href="mailto:contact@gosite.digital"><Mail aria-hidden="true" className="size-4" />contact@gosite.digital</a></li><li><a className="flex items-center gap-2 hover:text-primary" href="tel:+212751134318"><Phone aria-hidden="true" className="size-4" />+212 751 134318</a></li><li className="flex items-center gap-2"><MapPin aria-hidden="true" className="size-4" />Casablanca, Maroc</li><li><a className="flex items-center gap-2 hover:text-primary" href="https://github.com/youssefe-sa" target="_blank" rel="noreferrer"><Github aria-hidden="true" className="size-4" />GitHub</a></li></ul></div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-border pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} GoSite par Sahab Youssef. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
          <div className="flex flex-wrap gap-5"><a href="/confidentialite" className="hover:text-primary">{language === 'fr' ? 'Confidentialité' : 'Privacy'}</a><a href="/conditions" className="hover:text-primary">{language === 'fr' ? 'Conditions' : 'Terms'}</a><a href="/mentions-legales" className="hover:text-primary">{language === 'fr' ? 'Mentions légales' : 'Legal notices'}</a></div>
        </div>
      </div>
    </footer>
  )
}
