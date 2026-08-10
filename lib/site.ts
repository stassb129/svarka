export const site = {
  name: 'МЕТАЛЛШОВ',
  legalName: 'МЕТАЛЛШОВ',
  tagline: 'МЕТАЛЛ · ТОЧНОСТЬ · СИЛА',
  logo: '/logo.png',
  /** Production origin without trailing slash. Override via NEXT_PUBLIC_SITE_URL. */
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://metalshov.ru').replace(/\/$/, ''),
  phone: '+7 (977) 652-77-77',
  phoneHref: 'tel:+79776527777',
  /** E.164 for schema.org */
  phoneE164: '+79776527777',
  schedule: 'Ежедневно с 8:00 до 20:00',
  /** Opening hours for schema.org */
  openingHours: 'Mo-Su 08:00-20:00',
  email: 'info@metalshov.ru',
  address: 'Москва, ул. Складская, 8',
  addressLocality: 'Москва',
  addressCountry: 'RU',
  streetAddress: 'ул. Складская, 8',
  geo: {
    latitude: 55.7558,
    longitude: 37.6173,
  },
  locale: 'ru_RU',
  language: 'ru',
  description:
    'MIG/MAG, аргонодуговая TIG, металлоконструкции, ремонт и наплавка. Выезд на объект по Москве и области, смета до начала работ, гарантия до 5 лет.',
  shortDescription: 'Все виды сварки с выездом: MIG/MAG, TIG, конструкции и ремонт узлов.',
} as const

export const navLinks = [
  { label: 'Услуги', href: '/services' },
  { label: 'Наши работы', href: '/portfolio' },
  { label: 'Цены', href: '/prices' },
  { label: 'Контакты', href: '/#contacts' },
] as const

export const servicesNav = [
  { label: 'Полуавтомат MIG/MAG', href: '/services#mig' },
  { label: 'Аргонодуговая TIG', href: '/services#tig' },
  { label: 'Металлоконструкции', href: '/services#structures' },
  { label: 'Ремонт и наплавка', href: '/services#repair' },
] as const

export const seoKeywords = [
  'сварочные работы Москва',
  'сварка с выездом',
  'MIG MAG сварка',
  'аргонодуговая сварка TIG',
  'металлоконструкции сварка',
  'ремонт сваркой',
  'наплавка металла',
  'сварочные услуги',
  'МЕТАЛЛШОВ',
] as const
