'use client'

import Link from 'next/link'

export function BrandLogo({ compact = false, inverse = false }: { compact?: boolean; inverse?: boolean }) {
  return (
    <Link href="/" aria-label="GoSite par Sahab Youssef — Accueil" className="group inline-flex items-center gap-3">
      <span className="brand-mark relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-[0.85rem] bg-primary text-primary-foreground shadow-lg shadow-primary/20 ring-1 ring-primary/20 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[-2deg]">
        <span aria-hidden="true" className="relative z-10 font-sans text-[17px] font-black tracking-[-0.14em]">
          G<span className="ml-px text-accent">S</span>
        </span>
        <span aria-hidden="true" className="absolute bottom-1.5 left-2 right-2 h-px origin-left bg-primary-foreground/60 transition-transform duration-500 group-hover:scale-x-50" />
        <span aria-hidden="true" className="brand-spark absolute right-1.5 top-1.5 size-1.5 rounded-full bg-accent" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className={`text-xl font-bold tracking-[-0.04em] ${inverse ? 'text-primary-foreground' : 'text-foreground'}`}>
            Go<span className="text-primary">Site</span>
          </span>
          <span className={`mt-1 text-[10px] font-mono uppercase tracking-[0.18em] ${inverse ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
            par Sahab Youssef
          </span>
        </span>
      )}
    </Link>
  )
}
