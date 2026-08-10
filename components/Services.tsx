'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { fadeIn, fadeInUp, staggerContainer, viewportOnce } from '@/lib/motion'

type Service = {
  number: string
  title: string
  description: string
  href: string
  image: string
}

const services: Service[] = [
  {
    number: '01',
    title: 'MIG/MAG',
    description: 'Полуавтомат для конструкций и монтажа',
    href: '/services#mig',
    image:
      'https://images.unsplash.com/photo-1504917598105-6e5be9b5b1b1?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '02',
    title: 'TIG / АРГОН',
    description: 'Точный шов по нержавейке и алюминию',
    href: '/services#tig',
    image:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80',
  },
  {
    number: '03',
    title: 'КОНСТРУКЦИИ',
    description: 'Каркасы, ограждения, нестандартные рамы',
    href: '/services#structures',
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '04',
    title: 'РЕМОНТ',
    description: 'Наплавка, восстановление узлов и MMA',
    href: '/services#repair',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-ink section-y">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-[70%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(46,196,255,0.16),transparent_70%)] blur-2xl" />
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
              Наши услуги
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="mt-4 text-balance text-4xl font-black uppercase leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Все виды <span className="text-accent">сварки</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 max-w-lg text-base font-light leading-relaxed text-white/50"
            >
              Подберу процесс под металл и задачу: от тонкой нержавейки до монтажа каркаса и ремонта
              узлов.
            </motion.p>
          </div>
          <motion.div variants={fadeInUp}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent"
            >
              Все услуги подробно
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="section-gap grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </motion.div>

        <motion.div
          id="works"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="section-gap scroll-mt-28"
        >
          <Link
            href="/portfolio"
            className="group glass-card flex flex-col justify-between gap-6 card-pad transition-colors duration-300 hover:border-accent/40 sm:flex-row sm:items-center"
          >
            <div>
              <span className="section-label">
                <span className="h-px w-8 bg-accent" />
                Наши работы
              </span>
              <h3 className="mt-4 text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">
                Каркасы, нержавейка, ремонт узлов
              </h3>
              <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-white/50">
                Реальные задачи: от ограждений и ворот до обвязки и восстановления изношенных деталей.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent">
              Смотреть портфолио
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  const { number, title, description, href, image } = service

  return (
    <motion.div variants={fadeIn}>
      <Link
        href={href}
        className="group relative block h-[380px] overflow-hidden rounded-[28px] shadow-[0_28px_50px_-24px_rgba(0,0,0,0.85)] sm:h-[420px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.2)_38%,rgba(0,0,0,0.35)_62%,rgba(0,0,0,0.75)_100%)]"
        />

        <div className="relative z-10 flex h-full flex-col justify-between card-pad">
          <div>
            <span className="text-[15px] font-semibold tracking-wide text-accent">{number}</span>
            <h3 className="mt-3 text-[1.75rem] font-extrabold uppercase leading-none tracking-tight text-white sm:text-[2rem]">
              {title}
            </h3>
            <p className="mt-3 max-w-[15rem] text-[14px] font-normal leading-snug text-white/90 sm:text-[15px]">
              {description}
            </p>
          </div>

          <div className="flex justify-end">
            <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/70 bg-black/25 text-white backdrop-blur-[2px] transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
              <ChevronRight size={22} strokeWidth={1.75} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
