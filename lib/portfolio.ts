import { assetUrl } from '@/lib/assets'

export type ProjectType = 'mig' | 'heating' | 'structures' | 'repair'

export type GalleryItem = {
  src: string
  alt: string
  caption?: string
  type?: 'image' | 'video'
}

export type PortfolioProject = {
  id: string
  title: string
  subtitle: string
  area: string
  year: string
  type: ProjectType
  image: string
  gallery: GalleryItem[]
  description: string
  details: string[]
  tone: string
}

function isVideo(src: string) {
  return /\.(mp4|webm|mov)(\?|$)/i.test(src)
}

/** Normalize gallery item: detect video by extension when type is omitted. */
export function galleryItemType(item: GalleryItem): 'image' | 'video' {
  return item.type ?? (isVideo(item.src) ? 'video' : 'image')
}

const rawPortfolioProjects: PortfolioProject[] = [
  {
    id: 'mangal',
    title: 'МАНГАЛ',
    subtitle: 'Частный двор, Одинцово',
    area: 'каркас + топка',
    year: '2025',
    type: 'structures',
    image: '/portfolio/mangal/1.jpg',
    gallery: [
      { src: '/portfolio/mangal/1.jpg', alt: 'Готовый каркас мангала', caption: 'Каркас' },
      { src: '/portfolio/mangal/2.jpg', alt: 'Сборка топки мангала', caption: 'Топка' },
      { src: '/portfolio/mangal/3.jpg', alt: 'Мангал на площадке', caption: 'Готово' },
    ],
    description:
      'Изготовление мангала под заказ: каркас из профильной трубы, топка из листовой стали, полка для дров и боковые консоли.',
    details: [
      'MIG/MAG по чёрной стали 3–4 мм',
      'Зачистка швов и подготовка под покраску',
      'Срок изготовления — 4 дня',
    ],
    tone: 'from-[#1C222C] via-[#2A3140] to-[#12151C]',
  },
  {
    id: 'polotencesushitel',
    title: 'ПОЛОТЕНЦЕСУШИТЕЛЬ',
    subtitle: 'Квартира, ЖК «Ривер Парк»',
    area: 'змеевик на стене',
    year: '2025',
    type: 'heating',
    image: '/portfolio/polotencesushitel/1.jpg',
    gallery: [
      {
        src: '/portfolio/polotencesushitel/1.jpg',
        alt: 'Змеевик полотенцесушителя на бетонной стене',
        caption: 'Змеевик',
      },
      {
        src: '/portfolio/polotencesushitel/2.jpg',
        alt: 'Крепление полотенцесушителя',
        caption: 'Крепление',
      },
      {
        src: '/portfolio/polotencesushitel/3.jpg',
        alt: 'Подключение к стояку',
        caption: 'Подключение',
      },
      {
        src: '/portfolio/polotencesushitel/4.mp4',
        alt: 'Видео монтажа полотенцесушителя',
        caption: 'Монтаж',
        type: 'video',
      },
    ],
    description:
      'Изготовление и монтаж полотенцесушителя-змеевика из стальной трубы с врезкой в стояк ГВС и аккуратным креплением к стене.',
    details: [
      'Сварка стыков и U-отводов',
      'Опрессовка после монтажа',
      'Защита отделки на объекте',
    ],
    tone: 'from-[#141820] via-[#1C222C] to-[#0A0C10]',
  },
  {
    id: 'radiator',
    title: 'РАДИАТОР ОТОПЛЕНИЯ',
    subtitle: 'Квартира, вторичка',
    area: '1 точка + врезка',
    year: '2025',
    type: 'heating',
    image: '/portfolio/radiator/1.jpg',
    gallery: [
      {
        src: '/portfolio/radiator/1.jpg',
        alt: 'Установка радиатора Rifar с врезкой в стояк',
        caption: 'Монтаж',
      },
      {
        src: '/portfolio/radiator/2.jpg',
        alt: 'Сварные подводы к радиатору',
        caption: 'Подводы',
      },
    ],
    description:
      'Замена радиатора с врезкой стальных подводов в стояк: ровная геометрия, краны, защита пола и стен на время работ.',
    details: [
      'Врезка в стояк полуавтоматом',
      'Уровень и краны на подаче/обратке',
      'Сдача без протечек',
    ],
    tone: 'from-[#1A1E28] via-[#2A3140] to-[#0E1116]',
  },
  {
    id: 'razvodka',
    title: 'КОЛЛЕКТОРНАЯ РАЗВОДКА',
    subtitle: 'Частный дом, Истринский р-н',
    area: '2 коллектора',
    year: '2024',
    type: 'heating',
    image: '/portfolio/razvodka/1.jpg',
    gallery: [
      {
        src: '/portfolio/razvodka/1.jpg',
        alt: 'Коллекторный узел отопления',
        caption: 'Коллектор',
      },
      {
        src: '/portfolio/razvodka/2.jpg',
        alt: 'Обвязка коллектора',
        caption: 'Обвязка',
      },
      {
        src: '/portfolio/razvodka/3.jpg',
        alt: 'Готовый узел разводки',
        caption: 'Готово',
      },
    ],
    description:
      'Сборка и монтаж коллекторного узла отопления: контуры, манометры, запорная арматура и аккуратная обвязка на щите.',
    details: [
      'Два коллектора на несколько контуров',
      'Контроль давления по манометрам',
      'Чистая сборка под сдачу объекта',
    ],
    tone: 'from-[#12151C] via-[#1C222C] to-[#0A0C10]',
  },
  {
    id: 'vihlop',
    title: 'ВЫХЛОПНАЯ СИСТЕМА',
    subtitle: 'Автосервис, Москва',
    area: 'cut-out клапаны',
    year: '2025',
    type: 'repair',
    image: '/portfolio/vihlop/1.jpg',
    gallery: [
      {
        src: '/portfolio/vihlop/1.jpg',
        alt: 'Установка выхлопных клапанов',
        caption: 'Клапаны',
      },
      {
        src: '/portfolio/vihlop/2.jpg',
        alt: 'Интеграция в выхлопную трассу',
        caption: 'Трасса',
      },
      {
        src: '/portfolio/vihlop/3.mp4',
        alt: 'Видео работы выхлопной системы',
        caption: 'Результат',
        type: 'video',
      },
    ],
    description:
      'Врезка управляемых клапанов в выхлопную трассу: подгонка, сварка и проверка герметичности на подъёмнике.',
    details: [
      'Подгонка и сварка по месту',
      'Герметичные стыки без подсоса',
      'Проверка на работающем двигателе',
    ],
    tone: 'from-[#141820] via-[#243040] to-[#0A0C10]',
  },
  {
    id: 'pipes-basement',
    title: 'СВАРКА ТРУБ',
    subtitle: 'Техподполье, жилой дом',
    area: 'стояки ГВС/отопления',
    year: '2024',
    type: 'mig',
    image: '/portfolio/photo_2026-09-30_06-50-09.jpg',
    gallery: [
      {
        src: '/portfolio/photo_2026-09-30_06-50-09.jpg',
        alt: 'Сварка труб в стеснённом пространстве',
        caption: 'На объекте',
      },
    ],
    description:
      'Ремонтная сварка стальных труб в стеснённом техподполье: работа в неудобной позе, аккуратный провар и контроль шва.',
    details: [
      'Выезд в подвал / техподполье',
      'Полуавтомат и MMA по месту',
      'Сдача без протечек',
    ],
    tone: 'from-[#1C222C] via-[#2A3140] to-[#12151C]',
  },
]

export const portfolioProjects: PortfolioProject[] = rawPortfolioProjects.map((project) => ({
  ...project,
  image: assetUrl(project.image),
  gallery: project.gallery.map((item) => ({ ...item, src: assetUrl(item.src) })),
}))

export const typeLabels: Record<ProjectType, string> = {
  mig: 'Полуавтомат MIG/MAG',
  heating: 'Трубы и отопление',
  structures: 'Металлоизделия',
  repair: 'Ремонт и авто',
}
