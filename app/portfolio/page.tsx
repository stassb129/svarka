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
    'Портфолио сварочных работ МЕТАЛЛШОВ: каркасы, нержавейка, алюминий, ремонт узлов. Фотоотчёты и отзывы заказчиков.',
  path: '/portfolio',
  keywords: [
    'портфолио сварочных работ',
    'примеры сварки металлоконструкций',
    'отзывы сварщик Москва',
    'работы по аргонной сварке',
  ],
})

const portfolioJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Наши работы',
  url: `${site.url}/portfolio`,
  isPartOf: { '@id': `${site.url}/#website` },
  about: 'Примеры сварочных работ',
  hasPart: portfolioProjects.slice(0, 6).map((project) => ({
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: project.image,
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
        description="Каркасы, нержавейка, алюминий, ремонт узлов. Листайте кейсы — по каждому есть фотоотчёт этапов."
      />
      <HorizontalPortfolio />
      <Reviews />
    </>
  )
}
