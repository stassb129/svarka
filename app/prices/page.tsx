import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import PriceList from '@/components/PriceList'

export const metadata: Metadata = {
  title: 'Цены',
  description:
    'Стартовые цены на MIG/MAG, TIG, металлоконструкции, ремонт и наплавку. Точная смета после выезда на объект.',
}

export default function PricesPage() {
  return (
    <>
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
