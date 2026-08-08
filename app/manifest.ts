import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return { name: 'GoSite par Sahab Youssef', short_name: 'GoSite', description: 'Agence web, SEO technique et automatisation au Maroc.', start_url: '/', display: 'standalone', background_color: '#ffffff', theme_color: '#07111f', icons: [{ src: '/apple-icon.png', sizes: '180x180', type: 'image/png' }] }
}
