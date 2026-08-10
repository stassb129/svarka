'use client'

import { motion } from 'framer-motion'
import { ClipboardList, Hammer, PhoneCall, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/motion'

const steps: { number: string; title: string; text: string; icon: LucideIcon }[] = [
  {
    number: '01',
    title: 'Звонок или заявка',
    text: 'Опишите задачу: материал, объём, адрес. Отвечу в тот же день.',
    icon: PhoneCall,
  },
  {
    number: '02',
    title: 'Выезд и смета',
    text: 'Оценю объём на месте и зафиксирую стоимость до начала работ.',
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Сварка',
    text: 'Подберу процесс под металл: MIG, TIG, MMA или наплавка.',
    icon: Hammer,
  },
  {
    number: '04',
    title: 'Сдача',
    text: 'Проверка шва, фотоотчёт при необходимости, гарантия на работу.',
    icon: ShieldCheck,
  },
]

export default function HowWeWork() {
  return (
    <section id="process" className="relative overflow-hidden bg-ink section-y">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(46,196,255,0.1),transparent_55%)]" />
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
            Как работаем
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-balance text-4xl font-black uppercase leading-[1.02] tracking-tight sm:text-5xl"
          >
            От заявки до <span className="text-accent">готового шва</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-base font-light leading-relaxed text-white/50"
          >
            Без лишних этапов: понятный процесс, понятная цена, результат на объекте.
          </motion.p>
        </motion.div>

        <motion.ol
          variants={staggerContainer(0.1, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="section-gap grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map(({ number, title, text, icon: Icon }) => (
            <motion.li
              key={number}
              variants={fadeInUp}
              className="relative rounded-3xl border border-white/10 bg-white/[0.03] card-pad transition-colors duration-300 hover:border-accent/40"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
                  <Icon size={20} />
                </span>
                <span className="text-2xl font-black text-white/15">{number}</span>
              </div>
              <h3 className="mt-5 text-lg font-extrabold uppercase tracking-tight">{title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-white/50">{text}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
