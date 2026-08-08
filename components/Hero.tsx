'use client'

import { ArrowDown, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { SectionPattern } from '@/components/SectionPattern'

export default function Hero() {
  const { language } = useLanguage()
  const copy = language === 'fr' ? {
    eyebrow: 'Agence digitale indépendante • Maroc & international',
    title: 'Des expériences web qui transforment votre ambition en croissance.',
    subtitle: 'GoSite conçoit avec Sahab Youssef des sites WordPress, produits Next.js et systèmes d’automatisation rapides, accessibles et pensés pour convertir.',
    primary: 'Parler de votre projet', secondary: 'Découvrir les réalisations', availability: 'Nouveaux projets — T4 2026',
    proof: ['Développement sur mesure', 'SEO technique intégré', 'Livraison claire et suivie']
  } : {
    eyebrow: 'Independent digital agency • Morocco & worldwide',
    title: 'Web experiences that turn ambition into sustainable growth.',
    subtitle: 'GoSite and Sahab Youssef craft fast, accessible and conversion-focused WordPress sites, Next.js products and automation systems.',
    primary: 'Discuss your project', secondary: 'Explore selected work', availability: 'New projects — Q4 2026',
    proof: ['Custom development', 'Technical SEO included', 'Clear, supported delivery']
  }

  return (
    <section className="relative flex min-h-[760px] items-center overflow-hidden bg-foreground px-4 pb-16 pt-28 text-background sm:px-6 sm:pt-32 lg:min-h-screen lg:px-8">
      <video className="absolute inset-0 size-full object-cover opacity-45" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
        <source src="/gosite-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-foreground/30" />
      <SectionPattern variant="grid" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-background/20 bg-background/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-background backdrop-blur-md animate-fade-in-down">
            <span className="size-2 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
            {copy.eyebrow}
          </div>
          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.06] tracking-[-0.04em] text-background animate-fade-in-up sm:text-6xl lg:text-7xl xl:text-8xl">
            {copy.title}
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-background/75 animate-fade-in-up sm:text-lg lg:text-xl">
            {copy.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 animate-fade-in-up sm:flex-row">
            <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background">
              {copy.primary}<ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a href="#projects" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-background/25 bg-background/10 px-6 py-3 font-semibold text-background backdrop-blur-md transition-colors hover:bg-background/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background">
              {copy.secondary}
            </a>
          </div>
          <ul className="mt-10 flex flex-col gap-3 text-sm text-background/70 sm:flex-row sm:flex-wrap sm:gap-6">
            {copy.proof.map((item) => <li key={item} className="flex items-center gap-2"><CheckCircle2 aria-hidden="true" className="size-4 text-accent" />{item}</li>)}
          </ul>
        </div>

        <div className="flex items-center justify-between gap-6 border-t border-background/20 pt-5 lg:w-64 lg:flex-col lg:items-start">
          <div><p className="font-mono text-xs uppercase tracking-[0.16em] text-background/50">GoSite</p><p className="mt-2 text-sm font-medium text-background">{copy.availability}</p></div>
          <a href="#about" aria-label={language === 'fr' ? 'Faire défiler vers la présentation' : 'Scroll to about'} className="flex size-11 items-center justify-center rounded-full border border-background/25 text-background transition-colors hover:bg-background hover:text-foreground"><ArrowDown aria-hidden="true" className="size-4 animate-bounce" /></a>
        </div>
      </div>
    </section>
  )
}
