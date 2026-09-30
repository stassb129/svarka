import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import HorizontalPortfolio from '@/components/HorizontalPortfolio'
import Reviews from '@/components/Reviews'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo'
import { portfolioProjects } from '@/lib/portfolio'
import { site } from '@/lib/site'

export const metadata: Metadata = buildMetadata({
  title: 'Наши работы и отзывы',
  description:
    'Портфолио сварочных работ МЕТАЛЛШОВ: мангалы, отопление, коллекторная разводка, выхлоп. Фото и видео с объектов, отзывы заказчиков.',
  path: '/portfolio',
  keywords: [
    'портфолио сварочных работ',
    'примеры сварки отопления',
    'отзывы сварщик Москва',
    'мангал на заказ сварка',
  ],
})

const portfolioJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Наши работы',
  url: `${site.url}/portfolio`,
  isPartOf: { '@id': `${site.url}/#website` },
  about: 'Примеры сварочных работ',
  hasPart: portfolioProjects.map((project) => ({
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: project.image.startsWith('http') ? project.image : `${site.url}${project.image}`,
  })),
}

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Главная', path: '/' },
            { name: 'Наши работы', path: '/portfolio' },
          ]),
          portfolioJsonLd,
        ]}
      />
      <PageHero
        label="Портфолио"
        title={
          <>
            Наши <span className="text-accent">работы</span>
          </>
        }
        description="Мангалы, отопление, разводка, выхлоп. Листайте кейсы — у каждого фотоотчёт, у части есть видео."
      />
      <HorizontalPortfolio />
      <Reviews />
    </>
  )
}
