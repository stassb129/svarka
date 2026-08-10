'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Boxes, Flame, Wrench, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/motion'

type Price = {
  title: string
  note: string
  price: string
  unit: string
  icon: LucideIcon
  href: string
}

const prices: Price[] = [
  {
    title: 'Полуавтомат MIG/MAG',
    note: 'Проволока и газ считаются отдельно',
    price: 'от 900',
    unit: '₽/п.м.',
    icon: Zap,
    href: '/services#mig',
  },
  {
    title: 'Аргонодуговая TIG',
    note: 'Нержавейка, алюминий, тонкая сталь',
    price: 'от 1 400',
    unit: '₽/п.м.',
    icon: Flame,
    href: '/services#tig',
  },
  {
    title: 'Металлоконструкции',
    note: 'Каркасы, ограждения, нестандартные узлы',
    price: 'от 1 100',
    unit: '₽/п.м.',
    icon: Boxes,
    href: '/services#structures',
  },
  {
    title: 'Ремонт и наплавка',
    note: 'Восстановление узлов, MMA на объекте',
    price: 'от 1 200',
    unit: '₽/п.м.',
    icon: Wrench,
    href: '/services#repair',
  },
]

export default function PriceList() {
  return (
    <section id="prices" className="scroll-mt-28 bg-mist text-ink section-y">
      <div className="container-x">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-accent-dark"
            >
              <span className="h-px w-10 bg-accent-dark" />
              Прайс-лист
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="mt-4 text-balance text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Стартовые <span className="text-accent-dark">цены</span>
            </motion.h2>
          </div>
          <motion.p variants={fadeInUp} className="max-w-md text-sm font-light leading-relaxed text-ink/60">
            Указана минимальная стоимость работ без материалов. Точную цену зафиксируем после выезда
            и оценки объёма.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="section-gap grid card-gap sm:grid-cols-2 lg:grid-cols-4"
        >
          {prices.map(({ icon: Icon, ...price }) => (
            <motion.article
              key={price.title}
              variants={fadeInUp}
              className="group flex flex-col border border-ink/10 bg-white p-6 transition-colors duration-300 hover:border-accent-dark sm:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink/5 text-accent-dark transition-colors group-hover:bg-accent-dark group-hover:text-white">
                <Icon size={22} />
              </span>
              <h3 className="mt-6 text-lg font-extrabold uppercase tracking-tight">{price.title}</h3>
              <p className="mt-2 text-sm font-light text-ink/50">{price.note}</p>
              <p className="mt-6 flex items-baseline gap-1.5">
                <span className="text-3xl font-black tracking-tight text-accent-dark">{price.price}</span>
                <span className="text-sm font-semibold text-ink/45">{price.unit}</span>
              </p>
              <Link
                href={price.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent-dark"
              >
                Подробнее
                <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
