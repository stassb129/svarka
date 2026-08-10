export const site = {
  name: 'СВАРКА-ПРО',
  tagline: 'МЕТАЛЛ · ТОЧНОСТЬ · СИЛА',
  logo: '/logo.png',
  phone: '+7 (495) 120-77-40',
  phoneHref: 'tel:+74951207740',
  schedule: 'Ежедневно с 8:00 до 20:00',
  email: 'info@svarka-pro.ru',
  address: 'Москва, ул. Складская, 8',
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
