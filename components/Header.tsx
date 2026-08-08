'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BrandLogo } from '@/components/BrandLogo'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = translations[language]
  const navItems = [
    { label: t.header.services, href: '#services' },
    { label: t.header.projects, href: '#projects' },
    { label: t.header.expertise, href: '#expertise' },
    { label: language === 'fr' ? 'À propos' : 'About', href: '#about' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLogo />
        <nav aria-label="Navigation principale" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => <a key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{item.label}</a>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex rounded-lg border border-border p-1" aria-label="Language selector">
            {(['fr', 'en'] as const).map((code) => <button key={code} onClick={() => setLanguage(code)} aria-pressed={language === code} className={`min-h-9 rounded-md px-3 text-xs font-semibold uppercase transition-colors ${language === code ? 'bg-secondary text-primary' : 'text-muted-foreground hover:text-foreground'}`}>{code}</button>)}
          </div>
          <a href="#contact" className="inline-flex min-h-11 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">{t.header.startProject}</a>
        </div>
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} className="flex size-11 items-center justify-center rounded-lg border border-border text-foreground lg:hidden">
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="border-t border-border bg-background px-4 pb-6 pt-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center rounded-lg px-3 font-medium text-foreground hover:bg-secondary">{item.label}</a>)}
            <div className="mt-2 flex gap-2">{(['fr', 'en'] as const).map((code) => <button key={code} onClick={() => setLanguage(code)} className={`min-h-11 flex-1 rounded-lg border text-sm font-semibold uppercase ${language === code ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-foreground'}`}>{code}</button>)}</div>
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-5 font-semibold text-primary-foreground">{t.header.startProject}</a>
          </div>
        </nav>
      )}
    </header>
  )
}
