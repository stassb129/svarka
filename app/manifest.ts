import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — сварочные работы`,
    short_name: site.name,
    description: site.shortDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0C10',
    theme_color: '#0A0C10',
    lang: 'ru',
    icons: [
      {
        src: site.logo,
        sizes: 'any',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
