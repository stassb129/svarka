'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import { useLeadModal } from '@/components/LeadModal'
import { EASE, fadeInUp, slideInLeft, slideInRight, staggerContainer, viewportOnce } from '@/lib/motion'
import { stock } from '@/lib/stock'

type Spec = { label: string; value: string }

type Service = {
  id: string
  number: string
  title: string
  eyebrow: string
  description: string
  price: string
  unit: string
  image: string
  imageAlt: string
  bullets: string[]
  specs?: Spec[]
}

const services: Service[] = [
  {
    id: 'mig',
    number: '01',
    title: 'MIG/MAG',
    eyebrow: 'Полуавтомат',
    description:
      'Сварка плавящейся проволокой в среде газа: конструкции, монтаж, трубы и производственные работы. Высокая скорость и стабильный валик. На улице — ветрозащита или порошковая проволока.',
    price: 'от 500',
    unit: '₽/п.м.',
    image: stock.mig.src,
    imageAlt: stock.mig.alt,
    bullets: [
      'Проволока 0,8–1,2 мм, газ CO₂ / смесь',
      'Цех и выезд на объект',
      'Контроль катета и геометрии',
    ],
    specs: [
      { label: 'Процесс', value: 'MIG/MAG, short-arc / spray / импульс' },
      { label: 'Металлы', value: 'чёрная сталь, низколегированные' },
      { label: 'Позиции', value: 'нижняя, вертикаль, горизонталь' },
      { label: 'Гарантия на швы', value: 'до 5 лет' },
    ],
  },
  {
    id: 'heating',
    number: '02',
    title: 'ОТОПЛЕНИЕ',
    eyebrow: 'Трубы и радиаторы',
    description:
      'Врезка и замена радиаторов, полотенцесушители, коллекторная разводка. Сварка стальных труб отопления и ГВС с выездом в квартиру, дом или техподполье.',
    price: 'от 700',
    unit: '₽/п.м.',
    image: stock.heating.src,
    imageAlt: stock.heating.alt,
    bullets: [
      'Радиаторы, полотенцесушители, стояки',
      'Коллекторные узлы и обвязка',
      'Опрессовка и сдача без протечек',
    ],
    specs: [
      { label: 'Работы', value: 'врезка, замена, разводка' },
      { label: 'Точка (радиатор)', value: 'от 3 500 ₽' },
      { label: 'Объекты', value: 'квартира, дом, техподполье' },
      { label: 'Гарантия на швы', value: 'до 5 лет' },
    ],
  },
  {
    id: 'structures',
    number: '03',
    title: 'ИЗДЕЛИЯ',
    eyebrow: 'Металл на заказ',
    description:
      'Изготовление металлоизделий: мангалы, каркасы, ограждения, нестандартные рамы и верстаки. От эскиза до сдачи на объекте.',
    price: 'от 550',
    unit: '₽/п.м.',
    image: stock.structures.src,
    imageAlt: stock.structures.alt,
    bullets: [
      'Мангалы, каркасы, ограждения',
      'Сборка в цехе и монтаж на месте',
      'Фотоотчёт и приёмка',
    ],
    specs: [
      { label: 'Процессы', value: 'MIG/MAG, MMA по узлу' },
      { label: 'Сроки', value: 'по согласованному графику' },
      { label: 'Гарантия', value: 'до 5 лет на сварочные работы' },
    ],
  },
  {
    id: 'repair',
    number: '04',
    title: 'РЕМОНТ',
    eyebrow: 'Наплавка и авто',
    description:
      'Восстановление изношенных деталей, наплавка, ручная дуговая сварка (MMA) и ремонт выхлопных систем. Работаем в цехе, на подъёмнике и в полевых условиях.',
    price: 'от 600',
    unit: '₽/п.м.',
    image: stock.repair.src,
    imageAlt: stock.repair.alt,
    bullets: [
      'Наплавка и восстановление узлов',
      'Выхлоп, cut-out, локальный ремонт',
      'MMA электродом Ø 2,5–5 мм',
    ],
    specs: [
      { label: 'Процессы', value: 'MMA, наплавка, MIG по задаче' },
      { label: 'Условия', value: 'цех, автосервис, объект' },
      { label: 'Гарантия', value: 'до 5 лет на выполненные швы' },
    ],
  },
]

export default function ServicesDetail() {
  return (
    <section id="welding-services" className="scroll-mt-28 section-y pt-0">
      <div className="container-x flex flex-col gap-8 lg:gap-10">
        {services.map((service, index) => (
          <ServiceRow key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  )
}

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const { openLeadModal } = useLeadModal()
  const {
    id,
    number,
    title,
    eyebrow,
    description,
    price,
    unit,
    image,
    imageAlt,
    bullets,
    specs,
  } = service
  const [open, setOpen] = useState(false)
  const flipped = index % 2 === 1

  return (
    <motion.article
      id={id}
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="group relative scroll-mt-28 overflow-hidden rounded-[28px] border border-white/10 bg-ink-700/50 transition-colors duration-300 hover:border-accent/40"
    >
      <div className="absolute inset-x-0 top-0 h-1 w-0 bg-accent-gradient transition-all duration-700 group-hover:w-full" />

      <div
        className={`relative grid items-stretch lg:grid-cols-2 ${
          flipped ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <motion.div
          variants={flipped ? slideInRight : slideInLeft}
          className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-[420px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"
          />
          <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
            <span className="rounded-full bg-black/45 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
              {eyebrow}
            </span>
          </div>
          <span className="absolute bottom-3 right-5 select-none text-7xl font-black leading-none text-white/20 sm:text-8xl">
            {number}
          </span>
        </motion.div>

        <motion.div
          variants={flipped ? slideInLeft : slideInRight}
          className="relative flex flex-col justify-center card-pad lg:p-10"
        >
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-accent">
            {number} · {eyebrow}
          </span>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight lg:text-5xl xl:text-6xl">
            {title}
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-white/50 lg:text-lg">
            {description}
          </p>

          <ul className="mt-6 space-y-3">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 transition-colors duration-300 hover:border-accent/40 hover:bg-white/[0.06]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check size={15} />
                </span>
                <span className="text-sm font-medium text-white/80">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-white/10 pt-6">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                Работы без материалов
              </span>
              <p className="mt-1 flex items-baseline gap-1.5">
                <span className="text-3xl font-black tracking-tight text-accent">{price}</span>
                <span className="text-sm font-semibold text-white/50">{unit}</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/#calculator" className="btn-ghost px-5 py-3 text-xs">
                Калькулятор
              </Link>
              <button
                type="button"
                onClick={() => openLeadModal(`Услуги · ${title}`)}
                className="btn-accent group/link px-5 py-3 text-xs"
              >
                Заказать выезд
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </button>
            </div>
          </div>

          {specs && (
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/25">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={`${id}-specs`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-300 hover:bg-white/[0.04]"
              >
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                  Технические параметры
                </span>
                <motion.span
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent"
                >
                  <ChevronDown size={15} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    id={`${id}-specs`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <dl className="divide-y divide-white/5 border-t border-white/10 px-5">
                      {specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                        >
                          <dt className="text-xs font-medium text-white/40">{spec.label}</dt>
                          <dd className="text-sm font-semibold text-white/85 sm:text-right">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>

      <motion.span
        variants={fadeInUp}
        aria-hidden
        className={`pointer-events-none absolute bottom-0 select-none text-[9rem] font-black leading-none tracking-tighter text-white/[0.02] lg:text-[13rem] ${
          flipped ? 'left-6' : 'right-6'
        }`}
      >
        {number}
      </motion.span>
    </motion.article>
  )
}
