import Hero from '@/components/Hero'
import Services from '@/components/Services'
import HowWeWork from '@/components/HowWeWork'
import Calculator from '@/components/Calculator'
import Stats from '@/components/Stats'
import Faq from '@/components/Faq'
import JsonLd from '@/components/JsonLd'
import { site } from '@/lib/site'
import { absoluteUrl } from '@/lib/seo'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Какие виды сварки вы выполняете?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MIG/MAG (полуавтомат), аргонодуговую TIG, металлоконструкции, ремонт и наплавку, а также MMA при необходимости на объекте.',
      },
    },
    {
      '@type': 'Question',
      name: 'Есть ли выезд на объект?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да. Выезжаем по Москве и области, оцениваем объём на месте и фиксируем смету до начала работ.',
      },
    },
    {
      '@type': 'Question',
      name: 'Как считается стоимость?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ориентир можно получить в калькуляторе на сайте по длине шва и типу работ. Точная смета — после выезда и оценки объёма.',
      },
    },
    {
      '@type': 'Question',
      name: 'Какая гарантия на швы?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Гарантия на сварочные швы — до 5 лет в зависимости от вида работ.',
      },
    },
  ],
}

const homeServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Сварочные работы с выездом',
  serviceType: 'Welding',
  provider: { '@id': `${site.url}/#organization` },
  areaServed: ['Москва', 'Московская область'],
  url: absoluteUrl('/'),
  description: site.description,
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={[faqJsonLd, homeServiceJsonLd]} />
      <Hero />
      <Services />
      <HowWeWork />
      <Calculator />
      <Stats />
      <Faq />
    </>
  )
}
