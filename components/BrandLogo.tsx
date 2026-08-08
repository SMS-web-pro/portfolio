'use client'

import Link from 'next/link'

export function BrandLogo({ compact = false, inverse = false }: { compact?: boolean; inverse?: boolean }) {
  return (
    <Link href="/" aria-label="GoSite par Sahab Youssef — Accueil" className="group inline-flex items-center gap-3">
      <span className="brand-mark relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
        <svg viewBox="0 0 40 40" aria-hidden="true" className="size-7">
          <path className="brand-path" d="M29 11.5A12 12 0 1 0 29 28.5V21H20" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path className="brand-spark" d="M26 8h6M29 5v6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className={`text-xl font-bold tracking-tight ${inverse ? 'text-primary-foreground' : 'text-foreground'}`}>Go<span className="text-primary">Site</span></span>
          <span className={`mt-1 text-[10px] font-mono uppercase tracking-[0.18em] ${inverse ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>par Sahab Youssef</span>
        </span>
      )}
    </Link>
  )
}
