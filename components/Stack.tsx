'use client'

import { useLanguage } from '@/context/LanguageContext'
import { SectionPattern } from '@/components/SectionPattern'

const tracks = [
  ['WordPress', 'WooCommerce', 'Bricks', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Vercel', 'Git & GitHub'],
  ['PostgreSQL', 'REST API', 'GraphQL', 'Stripe', 'Docker', 'CI/CD', 'n8n', 'Make', 'Zapier', 'OpenAI', 'Figma'],
  ['SEO technique', 'Schema.org', 'Core Web Vitals', 'GA4', 'Search Console', 'Ahrefs', 'SEMrush', 'Accessibilité', 'Performance', 'pSEO']
]

export default function Stack() {
  const { language } = useLanguage()
  return (
    <section id="expertise" className="relative overflow-hidden bg-foreground py-20 text-background sm:py-28">
      <SectionPattern variant="dots" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">{language === 'fr' ? 'Technologies maîtrisées' : 'Technology expertise'}</p>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-background sm:text-5xl">{language === 'fr' ? 'Une stack complète, choisie selon le problème.' : 'A complete stack, chosen around the problem.'}</h2>
          </div>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-background/65 sm:text-base">{language === 'fr' ? 'Du site éditorial au produit SaaS, GoSite assemble les bons outils pour la performance, la maintenabilité et la croissance.' : 'From editorial websites to SaaS products, GoSite combines the right tools for performance, maintainability and growth.'}</p>
        </div>
      </div>
      <div className="relative z-10 mt-14 flex flex-col gap-4">
        {tracks.map((track, index) => (
          <div key={index} className="marquee-viewport marquee-mask overflow-hidden py-1" tabIndex={0} aria-label={language === 'fr' ? 'Défilement des technologies, mettre au focus pour suspendre' : 'Technology marquee, focus to pause'}>
            <div className={`marquee-track gap-3 px-2 ${index === 1 ? 'marquee-reverse' : ''}`}>
              {[...track, ...track].map((item, itemIndex) => <span key={`${item}-${itemIndex}`} aria-hidden={itemIndex >= track.length} className="inline-flex min-h-12 shrink-0 items-center rounded-full border border-background/15 bg-background/5 px-5 font-mono text-sm text-background/85 backdrop-blur-sm transition-colors hover:border-accent/50 hover:bg-accent/10 hover:text-background">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
      <div className="relative z-10 mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-background/10 bg-background/10 sm:grid-cols-4">
        {[
          ['7+', language === 'fr' ? 'ans d’expérience' : 'years of experience'],
          ['30+', language === 'fr' ? 'technologies mobilisées' : 'technologies used'],
          ['360°', language === 'fr' ? 'vision produit & acquisition' : 'product & acquisition view'],
          ['2', language === 'fr' ? 'marchés : Maroc & monde' : 'markets: Morocco & world']
        ].map(([value, label]) => <div key={label} className="bg-foreground p-5 sm:p-7"><p className="text-3xl font-bold text-background sm:text-4xl">{value}</p><p className="mt-2 text-xs leading-relaxed text-background/55 sm:text-sm">{label}</p></div>)}
      </div>
    </section>
  )
}
