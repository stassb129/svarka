export type ProjectType = 'mig' | 'tig' | 'structures'

export type GalleryImage = {
  src: string
  alt: string
  caption?: string
}

export type PortfolioProject = {
  id: string
  title: string
  subtitle: string
  area: string
  year: string
  type: ProjectType
  image: string
  gallery: GalleryImage[]
  description: string
  details: string[]
  tone: string
}

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'warehouse-frame',
    title: 'КАРКАС СКЛАДА',
    subtitle: 'Логистический комплекс «Север»',
    area: '420 п.м. шва',
    year: '2025',
    type: 'structures',
    image: u('photo-1581092918056-0c4c3acd3789'),
    gallery: [
      { src: u('photo-1581092918056-0c4c3acd3789'), alt: 'Металлокаркас', caption: 'Каркас' },
      { src: u('photo-1504328345606-18bbc8c9d7d1'), alt: 'Сварка колонн', caption: 'Монтаж' },
      { src: u('photo-1581094794329-c8112a89af12'), alt: 'Цеховая сборка', caption: 'Сборка' },
      { src: u('photo-1581092162384-8987c1d64718'), alt: 'Готовый узел', caption: 'Узел' },
    ],
    description: 'Изготовление и монтаж металлокаркаса склада: колонны, балки, связи.',
    details: [
      'MIG/MAG на основных стыках',
      'Контроль катета и геометрии',
      'Срок — 24 дня',
    ],
    tone: 'from-[#1C222C] via-[#2A3140] to-[#12151C]',
  },
  {
    id: 'stainless-line',
    title: 'НЕРЖАВЕЮЩАЯ ОБВЯЗКА',
    subtitle: 'Пищевое производство',
    area: '86 п.м. шва',
    year: '2025',
    type: 'tig',
    image: u('photo-1565193566173-7a0ee3dbe261'),
    gallery: [
      { src: u('photo-1565193566173-7a0ee3dbe261'), alt: 'Нержавеющие трубы', caption: 'Трубы' },
      { src: u('photo-1621905252507-b35492cc74b4'), alt: 'TIG сварка', caption: 'TIG' },
      { src: u('photo-1581092335397-9583eb92d232'), alt: 'Сварочный пост', caption: 'Пост' },
      { src: u('photo-1581091226825-a6a2a5aee158'), alt: 'Готовый участок', caption: 'Готово' },
    ],
    description: 'Аргонодуговая сварка нержавеющего трубопровода с поддувом корня.',
    details: [
      'TIG DC, присадка ER316L',
      'Поддув аргона',
      'ВИК + капиллярный контроль',
    ],
    tone: 'from-[#141820] via-[#1C222C] to-[#0A0C10]',
  },
  {
    id: 'bridge-repair',
    title: 'РЕМОНТ УЗЛОВ',
    subtitle: 'Эстакада на объекте заказчика',
    area: '64 п.м. шва',
    year: '2024',
    type: 'mig',
    image: u('photo-1504328345606-18bbc8c9d7d1'),
    gallery: [
      { src: u('photo-1504328345606-18bbc8c9d7d1'), alt: 'Ремонтная сварка', caption: 'Ремонт' },
      { src: u('photo-1504917598105-6e5be9b5b1b1'), alt: 'Дуга', caption: 'Процесс' },
      { src: u('photo-1581092160562-40aa08e78837'), alt: 'Подготовка', caption: 'Подготовка' },
      { src: u('photo-1581092918056-0c4c3acd3789'), alt: 'Усиление', caption: 'Усиление' },
    ],
    description: 'Усиление и ремонт несущих узлов полуавтоматом с последующей зачисткой.',
    details: [
      'MAG, проволока 1,0 мм',
      'Работа на высоте',
      'Сдача по акту технадзора',
    ],
    tone: 'from-[#1A1E28] via-[#2A3140] to-[#0E1116]',
  },
  {
    id: 'aluminum-frame',
    title: 'АЛЮМИНИЕВАЯ РАМА',
    subtitle: 'Павильон выставочного комплекса',
    area: '52 п.м. шва',
    year: '2024',
    type: 'tig',
    image: u('photo-1621905252507-b35492cc74b4'),
    gallery: [
      { src: u('photo-1621905252507-b35492cc74b4'), alt: 'Алюминиевая сварка', caption: 'Алюминий' },
      { src: u('photo-1581092335397-9583eb92d232'), alt: 'Пост TIG', caption: 'Оборудование' },
      { src: u('photo-1565043666747-69ffa7078e4a'), alt: 'Сборка рамы', caption: 'Сборка' },
      { src: u('photo-1581094794329-c8112a89af12'), alt: 'Готовый каркас', caption: 'Каркас' },
    ],
    description: 'TIG AC по алюминиевому профилю с контролем тепловложения.',
    details: [
      'TIG AC, присадка ER4043',
      'Зачистка оксидной плёнки',
      'Гарантия 3 года на швы',
    ],
    tone: 'from-[#12151C] via-[#1C222C] to-[#0A0C10]',
  },
  {
    id: 'fence-line',
    title: 'ОГРАЖДЕНИЯ И ВОРОТА',
    subtitle: 'ЖК «Горизонт»',
    area: '210 п.м. шва',
    year: '2024',
    type: 'mig',
    image: u('photo-1581092162384-8987c1d64718'),
    gallery: [
      { src: u('photo-1581092162384-8987c1d64718'), alt: 'Металлическое ограждение', caption: 'Ограждение' },
      { src: u('photo-1504917598105-6e5be9b5b1b1'), alt: 'Сварка секций', caption: 'Секции' },
      { src: u('photo-1581092918056-0c4c3acd3789'), alt: 'Монтаж на объекте', caption: 'Монтаж' },
      { src: u('photo-1581091226825-a6a2a5aee158'), alt: 'Готовый периметр', caption: 'Периметр' },
    ],
    description: 'Изготовление и монтаж секций ограждения и откатных ворот.',
    details: [
      'Полуавтомат MAG',
      'Грунт и покраска по RAL',
      'Монтаж за 12 дней',
    ],
    tone: 'from-[#141820] via-[#243040] to-[#0A0C10]',
  },
  {
    id: 'shop-equipment',
    title: 'НЕСТАНДАРТНОЕ ОБОРУДОВАНИЕ',
    subtitle: 'Цех машиностроения',
    area: '38 узлов',
    year: '2023',
    type: 'structures',
    image: u('photo-1581094794329-c8112a89af12'),
    gallery: [
      { src: u('photo-1581094794329-c8112a89af12'), alt: 'Цеховая сварка', caption: 'Цех' },
      { src: u('photo-1565043666747-69ffa7078e4a'), alt: 'Оборудование', caption: 'Оснастка' },
      { src: u('photo-1504328345606-18bbc8c9d7d1'), alt: 'Сборка узла', caption: 'Сборка' },
      { src: u('photo-1581092160562-40aa08e78837'), alt: 'Контроль', caption: 'Контроль' },
    ],
    description: 'Сварка нестандартных рам и столов под производственное оборудование.',
    details: [
      'Комбинация MIG + TIG',
      'Чертежи заказчика',
      'Паспорт сварщика НАКС',
    ],
    tone: 'from-[#1C222C] via-[#2A3140] to-[#12151C]',
  },
]

export const typeLabels: Record<ProjectType, string> = {
  mig: 'Полуавтомат MIG/MAG',
  tig: 'Аргонодуговая TIG',
  structures: 'Металлоконструкции',
}
