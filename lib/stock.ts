import { assetUrl } from '@/lib/assets'

/** Stock imagery for marketing surfaces (hero, services). Portfolio uses /portfolio only. */
export const stock = {
  hero: {
    src: assetUrl('/stock/hero.jpg'),
    alt: 'Сварщик в маске выполняет дуговую сварку металла',
  },
  mig: {
    src: assetUrl('/stock/mig.jpg'),
    alt: 'Дуговая сварка полуавтоматом, искры на шве',
  },
  heating: {
    src: assetUrl('/stock/heating.jpg'),
    alt: 'Сварка стальных труб на объекте',
  },
  structures: {
    src: assetUrl('/stock/structures.jpg'),
    alt: 'Сварка металлоконструкций на высоте',
  },
  repair: {
    src: assetUrl('/stock/repair.jpg'),
    alt: 'Ремонт и обработка металла в автомастерской',
  },
} as const
