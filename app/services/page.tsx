import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ServicesDetail from '@/components/ServicesDetail'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, buildMetadata, servicesPageJsonLd } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Услуги сварки',
  description:
    'MIG/MAG, аргонодуговая TIG, металлоконструкции, ремонт и наплавка. Выезд на объект, смета до начала работ, гарантия до 5 лет.',
  path: '/services',
  keywords: [
    'услуги сварки Москва',
    'MIG MAG сварка цена',
    'аргонодуговая сварка TIG',
    'сварка металлоконструкций',
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
            Все виды <span className="text-accent">сварки</span>
          </>
        }
        description="Подберу процесс под металл и задачу: от тонкой нержавейки до монтажа каркаса и восстановления узлов."
      />
      <ServicesDetail />
    </>
  )
}
