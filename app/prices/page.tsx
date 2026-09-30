import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import PriceList from '@/components/PriceList'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo'
import { site } from '@/lib/site'

export const metadata: Metadata = buildMetadata({
  title: 'Цены на сварочные работы',
  description:
    'Стартовые цены на MIG/MAG, трубы и отопление, металлоизделия, ремонт и наплавку. Точная смета после выезда на объект по Москве и области.',
  path: '/prices',
  keywords: [
    'цены на сварку Москва',
    'стоимость MIG MAG',
    'цена сварки труб отопления',
    'сварка металлоизделий цена',
  ],
})

const offerCatalogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Прайс сварочных работ',
  url: `${site.url}/prices`,
  itemListElement: [
    {
      '@type': 'Offer',
      name: 'Полуавтомат MIG/MAG',
      priceCurrency: 'RUB',
      price: '500',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '500',
        priceCurrency: 'RUB',
        unitText: 'п.м.',
      },
      url: `${site.url}/services#mig`,
    },
    {
      '@type': 'Offer',
      name: 'Трубы и отопление',
      priceCurrency: 'RUB',
      price: '700',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '700',
        priceCurrency: 'RUB',
        unitText: 'п.м.',
      },
      url: `${site.url}/services#heating`,
    },
    {
      '@type': 'Offer',
      name: 'Металлоизделия',
      priceCurrency: 'RUB',
      price: '550',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '550',
        priceCurrency: 'RUB',
        unitText: 'п.м.',
      },
      url: `${site.url}/services#structures`,
    },
    {
      '@type': 'Offer',
      name: 'Ремонт и наплавка',
      priceCurrency: 'RUB',
      price: '600',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '600',
        priceCurrency: 'RUB',
        unitText: 'п.м.',
      },
      url: `${site.url}/services#repair`,
    },
  ],
}

export default function PricesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Главная', path: '/' },
            { name: 'Цены', path: '/prices' },
          ]),
          offerCatalogJsonLd,
        ]}
      />
      <PageHero
        label="Цены"
        title={
          <>
            Прозрачные <span className="text-accent">расценки</span>
          </>
        }
        description="Стартовые ставки по рынку Москвы, без материалов. Минимум за выезд — от 3 000 ₽. Итоговую смету зафиксируем после оценки объёма."
      />
      <PriceList />
    </>
  )
}
