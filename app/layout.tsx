import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { LeadModalProvider } from '@/components/LeadModal'
import ScrollProgress from '@/components/ScrollProgress'
import { site } from '@/lib/site'
import { buildMetadata, organizationJsonLd, websiteJsonLd } from '@/lib/seo'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-montserrat',
})

const homeTitle = `${site.name} — Все виды сварки с выездом`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...buildMetadata({
    title: homeTitle,
    description: site.description,
    path: '/',
  }),
  title: {
    default: homeTitle,
    template: `%s | ${site.name}`,
  },
  applicationName: site.name,
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [{ url: `${site.logo}?v=5`, type: 'image/png', sizes: 'any' }],
    shortcut: `${site.logo}?v=5`,
    apple: [{ url: `${site.logo}?v=5`, type: 'image/png' }],
  },
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_YANDEX_VERIFICATION
      ? { yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION }
      : {}),
  },
  other: {
    'geo.region': 'RU-MOW',
    'geo.placename': site.addressLocality,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0C10' },
    { media: '(prefers-color-scheme: light)', color: '#0A0C10' },
  ],
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <head>
        {/* Critical paint if external CSS is slow/truncated on the custom domain */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
html,body{background:#0A0C10;color:#fff;margin:0;font-family:system-ui,sans-serif}
a{color:#2EC4FF}
header,main,footer,section,h1,h2,h3,p,ul,li,nav,img{opacity:1!important;visibility:visible!important}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
`.replace(/\n/g, ''),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-ink text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-ink focus:outline-none"
        >
          Перейти к содержимому
        </a>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <ScrollProgress />
        <LeadModalProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </LeadModalProvider>
      </body>
    </html>
  )
}
