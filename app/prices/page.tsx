import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import PriceList from '@/components/PriceList'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo'
import { site } from '@/lib/site'

export const metadata: Metadata = buildMetadata({
  title: 'Цены на сварочные работы',
  description:
    'Стартовые цены на MIG/MAG, TIG, металлоконструкции, ремонт и наплавку. Точная смета после выезда на объект по Москве и области.',
  path: '/prices',
  keywords: [
    'цены на сварку Москва',
    'стоимость MIG MAG',
    'цена аргонной сварки',
    'сварка металлоконструкций цена',
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
      price: '900',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '900',
        priceCurrency: 'RUB',
        unitText: 'п.м.',
      },
      url: `${site.url}/services#mig`,
    },
    {
      '@type': 'Offer',
      name: 'Аргонодуговая TIG',
      priceCurrency: 'RUB',
      price: '1400',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '1400',
        priceCurrency: 'RUB',
        unitText: 'п.м.',
      },
      url: `${site.url}/services#tig`,
    },
    {
      '@type': 'Offer',
      name: 'Металлоконструкции',
      priceCurrency: 'RUB',
      price: '1100',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '1100',
        priceCurrency: 'RUB',
        unitText: 'п.м.',
      },
      url: `${site.url}/services#structures`,
    },
    {
      '@type': 'Offer',
      name: 'Ремонт и наплавка',
      priceCurrency: 'RUB',
      price: '1200',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '1200',
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
        description="Стартовые ставки без материалов. Итоговую смету зафиксируем после выезда и оценки объёма."
      />
      <PriceList />
    </>
  )
}
