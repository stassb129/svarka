'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { EASE, fadeInUp, staggerContainer, viewportOnce } from '@/lib/motion'

const faqs = [
  {
    q: 'Какие виды сварки вы выполняете?',
    a: 'MIG/MAG (полуавтомат), аргонодуговую TIG, металлоконструкции, ремонт и наплавку, а также MMA при необходимости на объекте.',
  },
  {
    q: 'Есть ли выезд на объект?',
    a: 'Да. Выезжаем по Москве и области, оцениваем объём на месте и фиксируем смету до начала работ.',
  },
  {
    q: 'Как считается стоимость?',
    a: 'Ориентир можно получить в калькуляторе на сайте по длине шва и типу работ. Точная смета — после выезда и оценки объёма.',
  },
  {
    q: 'Какая гарантия на швы?',
    a: 'Гарантия на сварочные швы — до 5 лет в зависимости от вида работ.',
  },
] as const

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative scroll-mt-28 section-y">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(46,196,255,0.1),transparent_50%)]" />
      </div>

      <div className="container-x">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl"
        >
          <motion.span variants={fadeInUp} className="section-label">
            <span className="h-px w-10 bg-accent" />
            Вопросы
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-balance text-4xl font-black uppercase leading-[1.02] tracking-tight sm:text-5xl"
          >
            Частые <span className="text-accent">вопросы</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="section-gap mx-auto max-w-3xl space-y-3"
        >
          {faqs.map((item, index) => {
            const isOpen = open === index
            return (
              <motion.div
                key={item.q}
                variants={fadeInUp}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.04] sm:px-6 sm:py-5"
                >
                  <span className="text-base font-bold tracking-tight sm:text-lg">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent"
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-white/10 px-5 pb-5 pt-4 text-sm font-light leading-relaxed text-white/55 sm:px-6">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
