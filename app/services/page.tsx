import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ServicesDetail from '@/components/ServicesDetail'

export const metadata: Metadata = {
  title: 'Услуги сварки',
  description:
    'MIG/MAG, аргонодуговая TIG, металлоконструкции, ремонт и наплавка. Выезд на объект, смета до начала работ, гарантия до 5 лет.',
}

export default function ServicesPage() {
  return (
    <>
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
