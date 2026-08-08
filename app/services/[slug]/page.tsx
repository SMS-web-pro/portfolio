import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { BrandLogo } from '@/components/BrandLogo'
import { servicePages } from '@/lib/seo-pages'

export function generateStaticParams() { return servicePages.map(({ slug }) => ({ slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = servicePages.find((item) => item.slug === slug)
  if (!page) return {}
  return { title: page.title, description: page.intro, alternates: { canonical: `/services/${page.slug}` }, openGraph: { title: page.title, description: page.intro, url: `/services/${page.slug}` } }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = servicePages.find((item) => item.slug === slug)
  if (!page) notFound()
  const schema = { '@context': 'https://schema.org', '@type': 'Service', name: page.service, provider: { '@type': 'ProfessionalService', name: 'GoSite', url: 'https://gosite.digital' }, areaServed: page.location, description: page.intro, url: `https://gosite.digital/services/${page.slug}` }
  return <main className="min-h-screen bg-background">
    <header className="border-b border-border"><div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6"><BrandLogo /><a href="/#contact" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Parler du projet</a></div></header>
    <section className="relative overflow-hidden bg-foreground px-4 py-20 text-background sm:px-6 sm:py-28"><div className="mx-auto max-w-6xl"><p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">GoSite • {page.location}</p><h1 className="mt-5 max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-6xl">{page.title}</h1><p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-background/70">{page.intro}</p><a href="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground">Demander un échange<ArrowRight aria-hidden="true" className="size-4" /></a></div></section>
    <section className="px-4 py-16 sm:px-6 sm:py-24"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Une approche utile</p><h2 className="mt-4 text-3xl font-bold text-foreground">Un socle technique pensé pour vos objectifs</h2><p className="mt-5 leading-relaxed text-muted-foreground">Chaque mission commence par le contexte : audience, objectifs, contenu, contraintes et indicateurs. GoSite transforme ensuite ces éléments en une solution claire, mesurable et facile à faire évoluer.</p></div><ul className="grid gap-3">{page.benefits.map((benefit) => <li key={benefit} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 font-medium text-card-foreground"><CheckCircle2 aria-hidden="true" className="size-5 text-primary" />{benefit}</li>)}</ul></div></section>
    <section className="border-y border-border bg-secondary px-4 py-16 sm:px-6"><div className="mx-auto max-w-4xl text-center"><h2 className="text-balance text-3xl font-bold text-secondary-foreground">Construisons une présence digitale crédible et performante.</h2><p className="mx-auto mt-4 max-w-2xl text-secondary-foreground/75">Échange direct avec Sahab Youssef pour cadrer le besoin, les priorités et la prochaine étape.</p><a href="mailto:contact@gosite.digital" className="mt-7 inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground">contact@gosite.digital</a></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>
}
