import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ServicesDetail from '@/components/ServicesDetail'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, buildMetadata, servicesPageJsonLd } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Услуги сварки',
  description:
    'MIG/MAG, трубы и отопление, металлоизделия, ремонт и наплавка. Выезд на объект, смета до начала работ, гарантия до 5 лет.',
  path: '/services',
  keywords: [
    'услуги сварки Москва',
    'MIG MAG сварка цена',
    'сварка труб отопления',
    'мангал на заказ сварка',
    'ремонт и наплавка металла',
  ],
})

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Главная', path: '/' },
            { name: 'Услуги', path: '/services' },
          ]),
          servicesPageJsonLd(),
        ]}
      />
      <PageHero
        label="Наши услуги"
        title={
          <>
            Сварка под <span className="text-accent">ваши задачи</span>
          </>
        }
        description="От врезки радиатора и полотенцесушителя до мангала во дворе и ремонта выхлопа — подберу процесс под металл и условия."
      />
      <ServicesDetail />
    </>
  )
}
