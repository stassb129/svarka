import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Страница не найдена',
  description: 'Запрашиваемая страница не существует.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.35em] text-accent">404</p>
      <h1 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">Страница не найдена</h1>
      <p className="mt-4 max-w-md text-sm font-light text-white/50">
        Возможно, ссылка устарела. Вернитесь на главную или позвоните — подскажем по услугам.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link href="/" className="btn-accent">
          На главную
        </Link>
        <a href={site.phoneHref} className="btn-ghost">
          {site.phone}
        </a>
      </div>
    </section>
  )
}
