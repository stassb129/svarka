'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/motion'

type Review = {
  name: string
  date: string
  object: string
  rating: number
  text: string
}

const reviews: Review[] = [
  {
    name: 'Алексей Ковалёв',
    date: '14 марта 2025',
    object: 'Мангал, Одинцово',
    rating: 5,
    text: 'Сварили мангал под размеры двора. Каркас жёсткий, топка ровная, швы зачистили под покраску. Сделали за четыре дня как обещали.',
  },
  {
    name: 'Марина Дорохова',
    date: '2 февраля 2025',
    object: 'Полотенцесушитель, ЖК «Ривер Парк»',
    rating: 5,
    text: 'Врезали змеевик в стояк аккуратно, стены и плитку защитили. После опрессовки всё сухо — рекомендую.',
  },
  {
    name: 'Игорь Севастьянов',
    date: '19 ноября 2024',
    object: 'Радиатор отопления, вторичка',
    rating: 5,
    text: 'Заменили батарею с врезкой в стояк. Пол закрыли, уровень выдержали, краны поставили. Без грязи и лишней болтовни.',
  },
  {
    name: 'Екатерина Лисовская',
    date: '5 сентября 2024',
    object: 'Выхлоп, автосервис',
    rating: 5,
    text: 'Поставили клапаны в выхлопную трассу. Подгонка точная, стыки герметичные, на слух всё ок. Спасибо!',
  },
]

export default function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', containScroll: 'trimSnaps' })
  const [selected, setSelected] = useState(0)
  const [snaps, setSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelected(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section id="reviews" className="relative scroll-mt-28 overflow-hidden border-t border-white/10 section-y">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#0A0C10_0%,#141820_50%,#0A0C10_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(46,196,255,0.16),transparent_60%)]" />
      </div>

      <div className="container-x">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <motion.span variants={fadeInUp} className="section-label">
              <span className="h-px w-10 bg-accent" />
              Отзывы заказчиков
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="mt-4 text-balance text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Нам доверяют <span className="text-accent">объекты</span>
            </motion.h2>
          </div>
          <motion.div variants={fadeInUp} className="flex gap-2">
            <CarouselButton onClick={scrollPrev} label="Предыдущий отзыв">
              <ChevronLeft size={18} />
            </CarouselButton>
            <CarouselButton onClick={scrollNext} label="Следующий отзыв">
              <ChevronRight size={18} />
            </CarouselButton>
          </motion.div>
        </motion.div>

        <div className="section-gap overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review) => (
              <article
                key={review.name + review.date}
                className="min-w-0 shrink-0 grow-0 basis-full pr-5 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="glass-card flex h-full flex-col card-pad">
                  <Quote size={22} className="text-accent" />
                  <div className="mt-4 flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-white/65">{review.text}</p>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-sm font-bold">{review.name}</p>
                    <p className="mt-1 text-xs text-white/40">
                      {review.object} · {review.date}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Отзыв ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                selected === i ? 'w-6 bg-accent' : 'w-2 bg-white/25'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function CarouselButton({
  onClick,
  label,
  children,
}: {
  onClick: () => void
  label: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-accent hover:bg-accent hover:text-ink"
    >
      {children}
    </button>
  )
}
