import Link from 'next/link'
import { ArrowRight, CalendarCheck, Flame, Phone, ShieldCheck } from 'lucide-react'
import { site } from '@/lib/site'
import { stock } from '@/lib/stock'

const highlights = [
  { icon: Flame, text: 'MIG/MAG, отопление, изделия, ремонт' },
  { icon: ShieldCheck, text: 'Гарантия до 5 лет на швы' },
  { icon: CalendarCheck, text: 'Выезд, смета и сдача в срок' },
]

/** Server-rendered hero — no Framer Motion, always visible without JS. */
export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink section-y pt-14 lg:pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(46,196,255,0.18),transparent_65%)] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="container-x relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8 xl:gap-12">
          <div className="max-w-xl xl:max-w-2xl">
            <span className="section-label">
              <span className="h-px w-10 bg-accent" />
              Сварочные услуги с выездом
            </span>

            <h1 className="mt-4 text-balance text-3xl font-bold uppercase leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
              Сварка с выездом
              <br />
              <span className="text-accent">для ваших задач</span>
            </h1>

            <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/60 sm:text-base lg:text-lg">
              MIG/MAG, трубы и отопление, металлоизделия и ремонт узлов. Приеду на объект, оценю
              объём и зафиксирую смету до начала работ.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a href="#calculator" className="btn-accent group">
                Ориентир по стоимости
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 px-2 py-3 text-sm font-semibold text-white/80 transition-colors hover:text-white"
              >
                <Phone size={20} className="text-accent" />
                {site.phone}
              </a>
            </div>

            <div className="mt-4">
              <Link
                href="/portfolio"
                className="text-sm font-semibold text-white/45 transition-colors hover:text-accent"
              >
                Смотреть наши работы →
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-sm font-medium text-white/50">
                  <Icon size={15} className="text-accent" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(46,196,255,0.32),transparent_68%)] blur-3xl"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={stock.hero.src}
              alt={stock.hero.alt}
              width={1200}
              height={900}
              className="relative z-10 h-auto w-full rounded-[5px] object-cover shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
