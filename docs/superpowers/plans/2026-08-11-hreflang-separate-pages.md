# Hreflang + Separate EN/FR Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create separate `/` (EN) and `/fr/` (FR) routes with proper hreflang tags so Google serves the right language to the right users.

**Architecture:** Keep a shared `HomePageContent` component. Two page routes (`app/page.tsx` for EN, `app/fr/page.tsx` for FR) wrap it with different default language. LanguageContext initializes from URL path. Header language switcher uses `<Link>` navigation. Hreflang tags added via metadata exports.

**Tech Stack:** Next.js 16 App Router, React Context, TypeScript

## Global Constraints

- Next.js 16 App Router (Turbopack)
- Existing LanguageContext pattern must be preserved
- All components remain client components (`'use client'`)
- Build must pass with `pnpm build`
- No new dependencies

## File Structure

| File | Action | Purpose |
|------|--------|---------|
| `components/HomeContent.tsx` | **Create** | Shared page content extracted from `app/page.tsx` |
| `app/page.tsx` | **Modify** | English page, uses `HomeContent` with `en` default |
| `app/fr/page.tsx` | **Create** | French page, uses `HomeContent` with `fr` default |
| `context/LanguageContext.tsx` | **Modify** | Initialize from URL path instead of localStorage |
| `components/Header.tsx` | **Modify** | Language switcher uses `<Link href="/fr">` / `<Link href="/">` |
| `app/layout.tsx` | **Modify** | Add hreflang alternates to metadata |
| `app/fr/layout.tsx` | **Create** | FR-specific metadata with hreflang |
| `next.config.mjs` | **Modify** | Add FR sub-path to redirect exceptions if needed |

---

### Task 1: Extract shared HomeContent component

**Files:**
- Create: `components/HomeContent.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: all existing components (Header, Hero, Identity, Services, Stack, CaseStudies, Methodology, Differentiation, Contact, Footer, FloatingContact)
- Produces: `<HomeContent />` component used by both EN and FR pages

- [ ] **Step 1: Create `components/HomeContent.tsx`**

Move the `HomeContent` function from `app/page.tsx` into its own file:

```tsx
'use client'

import React, { useState, useEffect } from 'react'
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

export default function HomeContent() {
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
```

- [ ] **Step 2: Simplify `app/page.tsx` to EN-only**

```tsx
'use client'

import { LanguageProvider } from '@/context/LanguageContext'
import HomeContent from '@/components/HomeContent'

export default function Home() {
  return (
    <LanguageProvider defaultLanguage="en">
      <HomeContent />
    </LanguageProvider>
  )
}
```

- [ ] **Step 3: Build verification**

Run: `pnpm build`
Expected: Build succeeds, site renders identically to before

- [ ] **Step 4: Commit**

```bash
git add components/HomeContent.tsx app/page.tsx
git commit -m "refactor: extract shared HomeContent for EN/FR page split"
```

---

### Task 2: Update LanguageContext to accept defaultLanguage prop

**Files:**
- Modify: `context/LanguageContext.tsx`

**Interfaces:**
- Consumes: nothing new
- Produces: `LanguageProvider` accepts optional `defaultLanguage` prop

- [ ] **Step 1: Read current LanguageContext**

Verify current implementation at `context/LanguageContext.tsx`. It currently defaults to `'en'` and reads from localStorage on mount.

- [ ] **Step 2: Add `defaultLanguage` prop**

```tsx
'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children, defaultLanguage = 'en' }: { children: ReactNode; defaultLanguage?: Language }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check URL path for language detection
    const path = window.location.pathname
    if (path.startsWith('/fr')) {
      setLanguageState('fr')
    } else {
      setLanguageState('en')
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
```

- [ ] **Step 3: Build verification**

Run: `pnpm build`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add context/LanguageContext.tsx
git commit -m "feat: detect language from URL path (/fr prefix)"
```

---

### Task 3: Create FR page route

**Files:**
- Create: `app/fr/page.tsx`
- Create: `app/fr/layout.tsx`

**Interfaces:**
- Consumes: `HomeContent` component, `LanguageProvider` with `defaultLanguage="fr"`
- Produces: `/fr/` route renders French version

- [ ] **Step 1: Create `app/fr/page.tsx`**

```tsx
'use client'

import { LanguageProvider } from '@/context/LanguageContext'
import HomeContent from '@/components/HomeContent'

export default function FrenchHome() {
  return (
    <LanguageProvider defaultLanguage="fr">
      <HomeContent />
    </LanguageProvider>
  )
}
```

- [ ] **Step 2: Create `app/fr/layout.tsx`**

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GoSite | Expert WordPress & React Developer — Maroc',
  description: '7 ans à créer des sites WordPress et React haute performance. Audit gratuit, stratégie SEO, automatisation IA. Basé au Maroc, clients internationaux.',
  openGraph: {
    title: 'GoSite | Expert WordPress & React Developer — Maroc',
    description: '7 ans à créer des sites WordPress et React haute performance. Audit gratuit, stratégie SEO, automatisation IA.',
    url: 'https://www.gosite.digital/fr/',
    siteName: 'GoSite',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.gosite.digital/fr/',
    languages: {
      'en': 'https://www.gosite.digital/',
      'fr': 'https://www.gosite.digital/fr/',
    },
  },
}

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return children
}
```

- [ ] **Step 3: Build verification**

Run: `pnpm build`
Expected: `/fr/` route appears in build output

- [ ] **Step 4: Commit**

```bash
git add app/fr/
git commit -m "feat: add /fr/ route for French version"
```

---

### Task 4: Add hreflang to EN layout

**Files:**
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: nothing
- Produces: EN metadata includes hreflang alternates

- [ ] **Step 1: Add alternates to metadata**

In `app/layout.tsx`, update the `metadata` export to include `alternates`:

```tsx
export const metadata: Metadata = {
  // ... existing metadata ...
  alternates: {
    canonical: 'https://www.gosite.digital/',
    languages: {
      'en': 'https://www.gosite.digital/',
      'fr': 'https://www.gosite.digital/fr/',
    },
  },
}
```

- [ ] **Step 2: Build verification**

Run: `pnpm build`
Expected: Build succeeds, hreflang tags present in HTML output

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add hreflang alternates to EN layout metadata"
```

---

### Task 5: Update Header language switcher to use navigation

**Files:**
- Modify: `components/Header.tsx`

**Interfaces:**
- Consumes: current URL path
- Produces: language switcher navigates to `/` or `/fr/` via `<Link>`

- [ ] **Step 1: Replace language toggle with Link navigation**

Replace the desktop language switcher dropdown with links. Replace the mobile language buttons with links.

Key changes in `Header.tsx`:
- Import `usePathname` from `next/navigation` instead of using `useLanguage` for language display
- Language buttons become `<Link href="/fr">` and `<Link href="/">`
- Remove `setLanguage` calls (URL handles language now)

```tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AnimatedLogo from '@/components/AnimatedLogo'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isHomePage, setIsHomePage] = useState(true)
  const pathname = usePathname()
  const { language } = useLanguage()
  const t = translations[language]
  const isFr = pathname.startsWith('/fr')

  useEffect(() => {
    setIsHomePage(window.location.pathname === '/' || window.location.pathname === '/fr')
  }, [pathname])

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
      window.location.href = isFr ? '/fr/#contact' : '/#contact'
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={isFr ? '/fr' : '/'} className="flex items-center gap-2 group">
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
            {/* Language Switcher - Navigation Links */}
            <div className="flex items-center gap-1 bg-[#f5f6f8] rounded-lg p-1">
              <Link
                href="/"
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                  !isFr ? 'bg-[#0047ab] text-white shadow-sm' : 'text-[#0f1419] hover:text-[#0047ab]'
                }`}
              >
                EN
              </Link>
              <Link
                href="/fr"
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                  isFr ? 'bg-[#0047ab] text-white shadow-sm' : 'text-[#0f1419] hover:text-[#0047ab]'
                }`}
              >
                FR
              </Link>
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
              <Link
                href="/"
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${!isFr ? 'bg-[#0047ab] text-white' : 'bg-[#f5f6f8] text-foreground hover:bg-[#e8f0f9]'}`}
              >
                <span className="text-xs font-bold bg-[#0047ab]/10 text-[#0047ab] px-1.5 py-0.5 rounded">EN</span> English
              </Link>
              <Link
                href="/fr"
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isFr ? 'bg-[#0047ab] text-white' : 'bg-[#f5f6f8] text-foreground hover:bg-[#e8f0f9]'}`}
              >
                <span className="text-xs font-bold bg-[#0047ab]/10 text-[#0047ab] px-1.5 py-0.5 rounded">FR</span> Français
              </Link>
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
```

- [ ] **Step 2: Build verification**

Run: `pnpm build`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add components/Header.tsx
git commit -m "feat: language switcher navigates to / or /fr routes"
```

---

### Task 6: Update Footer language links

**Files:**
- Modify: `components/Footer.tsx`

**Interfaces:**
- Consumes: current pathname
- Produces: Footer language links navigate to correct routes

- [ ] **Step 1: Add URL-based language detection and link navigation**

In `Footer.tsx`, import `usePathname` and replace any language toggle buttons with `<Link>` navigation:

```tsx
import { usePathname } from 'next/navigation'

// Inside the component:
const pathname = usePathname()
const isFr = pathname.startsWith('/fr')

// Replace language buttons with:
<Link href="/" className={...}>EN</Link>
<Link href="/fr" className={...}>FR</Link>
```

- [ ] **Step 2: Build verification**

Run: `pnpm build`

- [ ] **Step 3: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: footer language links use route navigation"
```

---

### Task 7: Final build verification and hreflang validation

**Files:** None (verification only)

- [ ] **Step 1: Full build**

Run: `pnpm build`
Expected: Both `/` and `/fr/` routes appear in build output

- [ ] **Step 2: Start dev server and verify**

Run: `pnpm dev`
Visit: `http://localhost:3000/` — should show EN content
Visit: `http://localhost:3000/fr/` — should show FR content
Language switcher should navigate between routes (not toggle state)

- [ ] **Step 3: Verify hreflang in HTML source**

View source of `http://localhost:3000/`:
- Should contain `<link rel="alternate" hreflang="en" href="https://www.gosite.digital/" />`
- Should contain `<link rel="alternate" hreflang="fr" href="https://www.gosite.digital/fr/" />`

View source of `http://localhost:3000/fr/`:
- Should contain same hreflang tags

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: complete EN/FR page split with hreflang tags"
```
