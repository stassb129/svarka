import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { LeadModalProvider } from '@/components/LeadModal'
import CustomCursor from '@/components/CustomCursor'
import SmoothScroll from '@/components/SmoothScroll'
import ScrollProgress from '@/components/ScrollProgress'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: {
    default: 'СВАРКА-ПРО — Все виды сварки с выездом',
    template: '%s | СВАРКА-ПРО',
  },
  description:
    'MIG/MAG, аргонодуговая TIG, металлоконструкции, ремонт и наплавка. Выезд на объект, смета до начала работ, гарантия до 5 лет.',
  keywords: [
    'сварочные работы',
    'MIG MAG',
    'аргонодуговая сварка',
    'TIG',
    'металлоконструкции',
    'ремонт сваркой',
    'СВАРКА-ПРО',
  ],
  openGraph: {
    title: 'СВАРКА-ПРО — Все виды сварки с выездом',
    description: 'MIG/MAG, TIG, конструкции и ремонт узлов — выезд, смета и надёжный шов.',
    locale: 'ru_RU',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/logo.png?v=4', type: 'image/png' }],
    shortcut: '/logo.png?v=4',
    apple: '/logo.png?v=4',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0C10',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body className="flex min-h-screen flex-col bg-ink text-white">
        <SmoothScroll />
        <ScrollProgress />
        <CustomCursor />
        <LeadModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LeadModalProvider>
      </body>
    </html>
  )
}
