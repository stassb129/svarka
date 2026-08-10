import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import HorizontalPortfolio from '@/components/HorizontalPortfolio'
import Reviews from '@/components/Reviews'

export const metadata: Metadata = {
  title: 'Наши работы и отзывы',
  description:
    'Портфолио сварочных объектов СВАРКА-ПРО: каркасы, нержавейка, алюминий, ремонт узлов. Реальные отзывы заказчиков.',
}

export default function PortfolioPage() {
  return (
    <>
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
