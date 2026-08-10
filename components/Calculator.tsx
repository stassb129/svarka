'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Calculator as CalcIcon, ChevronDown, Ruler, Wrench } from 'lucide-react'
import { fadeInUp, scaleIn, staggerContainer, viewportOnce } from '@/lib/motion'
import { useLeadModal } from '@/components/LeadModal'

/** Rate per п.м.: [работы, работы + базовые материалы] */
const WORK_TYPES = [
  { id: 'mig', label: 'Полуавтомат MIG/MAG', workRate: 900, fullRate: 1250 },
  { id: 'tig', label: 'Аргонодуговая TIG', workRate: 1400, fullRate: 1900 },
  { id: 'structures', label: 'Металлоконструкции', workRate: 1100, fullRate: 1550 },
  { id: 'repair', label: 'Ремонт и наплавка', workRate: 1200, fullRate: 1650 },
] as const

const LENGTH_PRESETS = [10, 50, 100, 150, 200] as const

const MIN_LENGTH = 5
const MAX_LENGTH = 300
const DEFAULT_LENGTH = 75

const formatPrice = (value: number) => new Intl.NumberFormat('ru-RU').format(Math.round(value))

export default function Calculator() {
  const { openLeadModal } = useLeadModal()
  const [seamLength, setSeamLength] = useState<number>(DEFAULT_LENGTH)
  const [workTypeId, setWorkTypeId] = useState<string>(WORK_TYPES[0].id)
  const [prices, setPrices] = useState(() => ({
    work: DEFAULT_LENGTH * WORK_TYPES[0].workRate,
    full: DEFAULT_LENGTH * WORK_TYPES[0].fullRate,
  }))

  const workType = useMemo(
    () => WORK_TYPES.find((t) => t.id === workTypeId) ?? WORK_TYPES[0],
    [workTypeId],
  )

  useEffect(() => {
    setPrices({
      work: seamLength * workType.workRate,
      full: seamLength * workType.fullRate,
    })
  }, [seamLength, workType])

  const sliderProgress = ((seamLength - MIN_LENGTH) / (MAX_LENGTH - MIN_LENGTH)) * 100

  return (
    <section id="calculator" className="relative overflow-hidden section-y">
      <Backdrop />

      <div className="container-x relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span variants={fadeInUp} className="section-label">
              <span className="h-px w-10 bg-accent" />
              Ориентир по цене
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="mt-4 text-balance text-4xl font-black uppercase leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Примерная стоимость <span className="text-accent">по длине шва</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 max-w-md text-base font-light leading-relaxed text-white/50"
            >
              Калькулятор даёт ориентир. Точную смету согласуем после выезда и оценки объёма — без
              скрытых доплат в процессе.
            </motion.p>

            <motion.ul variants={fadeInUp} className="section-gap space-y-4">
              {[
                { icon: Ruler, title: 'Выезд на объект', text: 'Оценка объёма до начала работ' },
                { icon: Wrench, title: 'Фиксированная смета', text: 'Цена понятна до старта' },
              ].map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
                    <Icon size={19} />
                  </span>
                  <span>
                    <span className="block text-sm font-bold uppercase tracking-wide">{title}</span>
                    <span className="mt-1 block text-sm font-light text-white/45">{text}</span>
                  </span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="glass-card relative overflow-hidden card-pad sm:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/25 blur-3xl"
            />

            <div className="relative flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-gradient shadow-accent">
                <CalcIcon size={22} />
              </span>
              <h3 className="text-xl font-black uppercase tracking-tight sm:text-2xl">
                Калькулятор-ориентир
              </h3>
            </div>

            <div className="relative mt-8">
              <div className="flex items-end justify-between gap-4">
                <label htmlFor="seam-slider" className="text-sm font-semibold text-white/60">
                  Длина шва
                </label>
                <span className="flex items-baseline gap-1.5">
                  <motion.span
                    key={seamLength}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-3xl font-black leading-none text-accent"
                  >
                    {seamLength}
                  </motion.span>
                  <span className="text-sm font-semibold text-white/50">п.м.</span>
                </span>
              </div>

              <div className="relative mt-5">
                <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-white/10" />
                <div
                  className="absolute left-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-accent-gradient"
                  style={{ width: `${sliderProgress}%` }}
                />
                <input
                  id="seam-slider"
                  type="range"
                  min={MIN_LENGTH}
                  max={MAX_LENGTH}
                  step={1}
                  value={seamLength}
                  onChange={(e) => setSeamLength(Number(e.target.value))}
                  aria-label="Длина шва в погонных метрах"
                  className="relative w-full"
                />
              </div>

              <div className="mt-5 grid grid-cols-5 gap-2">
                {LENGTH_PRESETS.map((preset) => {
                  const active = seamLength === preset
                  return (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setSeamLength(preset)}
                      aria-pressed={active}
                      className={`rounded-xl border px-1 py-2.5 text-xs font-bold transition-all duration-300 sm:text-sm ${
                        active
                          ? 'border-accent bg-accent text-white shadow-accent'
                          : 'border-white/[0.12] bg-white/5 text-white/60 hover:border-accent/50 hover:text-white'
                      }`}
                    >
                      {preset}
                      <span className="ml-0.5 text-[10px] font-medium opacity-70">п.м.</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="relative mt-6">
              <label htmlFor="work-type" className="text-sm font-semibold text-white/60">
                Тип работ
              </label>
              <div className="relative mt-3">
                <select
                  id="work-type"
                  value={workTypeId}
                  onChange={(e) => setWorkTypeId(e.target.value)}
                  className="w-full cursor-pointer appearance-none rounded-2xl border border-white/[0.12] bg-ink-700/80 px-5 py-4 pr-12 text-sm font-semibold text-white outline-none transition-colors duration-300 hover:border-accent/50 focus:border-accent"
                >
                  {WORK_TYPES.map((type) => (
                    <option key={type.id} value={type.id} className="bg-ink-800 text-white">
                      {type.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={18}
                  className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-accent"
                />
              </div>
            </div>

            <div className="relative mt-6 rounded-2xl border border-white/10 bg-black/25 p-5 sm:p-6">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
                Примерный ориентир
              </span>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <PriceBlock label="Только работы" value={prices.work} />
                <PriceBlock label="Работы + материалы" value={prices.full} highlighted />
              </div>

              <p className="mt-4 border-t border-white/10 pt-4 text-xs font-light text-white/40">
                {formatPrice(workType.workRate)} ₽/п.м. за работы · {formatPrice(workType.fullRate)} ₽/п.м. с
                базовыми материалами. Не окончательная смета.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                openLeadModal(`Калькулятор · ${workType.label} · ${seamLength} п.м.`)
              }
              className="btn-accent group relative mt-6 w-full !py-4"
            >
              Получить точную смету
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <p className="relative mt-3.5 text-center text-xs font-light text-white/40">
              Заявка бесплатная и ни к чему не обязывает
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function PriceBlock({
  label,
  value,
  highlighted = false,
}: {
  label: string
  value: number
  highlighted?: boolean
}) {
  const display = useAnimatedNumber(value)

  return (
    <div
      className={`rounded-xl px-4 py-4 transition-colors duration-300 ${
        highlighted ? 'bg-accent/[0.12] ring-1 ring-inset ring-accent/35' : 'bg-white/[0.04]'
      }`}
    >
      <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/45">{label}</span>
      <span
        className={`mt-2 block whitespace-nowrap text-2xl font-black tracking-tight sm:text-[1.75rem] ${
          highlighted ? 'text-accent' : 'text-white'
        }`}
      >
        {formatPrice(display)} ₽
      </span>
    </div>
  )
}

function useAnimatedNumber(target: number, duration = 450) {
  const [display, setDisplay] = useState(target)
  const fromRef = useRef(target)
  const frameRef = useRef<number>()

  useEffect(() => {
    const from = fromRef.current
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = from + (target - from) * eased
      setDisplay(current)
      fromRef.current = current
      if (progress < 1) frameRef.current = requestAnimationFrame(tick)
      else fromRef.current = target
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [target, duration])

  return display
}

function Backdrop() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0A0C10_0%,#141414_45%,#0A0C10_100%)]" />
      <div className="absolute inset-0 grid-lines opacity-60" />
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute -left-32 top-1/4 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(46,196,255,0.28),transparent_65%)] blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.4, delay: 0.15, ease: 'easeOut' }}
        className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(140,140,190,0.16),transparent_65%)] blur-3xl"
      />
    </div>
  )
}
