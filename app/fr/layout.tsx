import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GoSite | Expert WordPress & React Developer — Maroc',
  description: '7 ans à créer des sites WordPress et React haute performance. Audit gratuit disponible. Basé au Maroc, clients internationaux.',
  openGraph: {
    locale: 'fr_FR',
    url: 'https://www.gosite.digital/fr/',
  },
}

export default function FRLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
