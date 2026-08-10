import type { Metadata } from 'next'
import { seoKeywords, site } from '@/lib/site'

type PageSeo = {
  title: string
  description: string
  path?: string
  keywords?: string[]
  image?: string
  noIndex?: boolean
}

export function absoluteUrl(path = '/'): string {
  if (!path || path === '/') return site.url
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`
}

export function buildMetadata({
  title,
  description,
  path = '/',
  keywords = [...seoKeywords],
  image = site.logo,
  noIndex = false,
}: PageSeo): Metadata {
  const url = absoluteUrl(path)
  const imageUrl = image.startsWith('http') ? image : absoluteUrl(image)
  const fullTitle = path === '/' ? title : undefined

  return {
    title: fullTitle ?? title,
    description,
    keywords,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.name,
    category: 'business',
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: site.locale,
      url,
      siteName: site.name,
      title: path === '/' ? title : `${title} | ${site.name}`,
      description,
      images: [
        {
          url: imageUrl,
          width: 1536,
          height: 1024,
          alt: `${site.name} — ${site.tagline}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: path === '/' ? title : `${title} | ${site.name}`,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
  }
}

/** Organization + LocalBusiness JSON-LD for the whole site. */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    logo: absoluteUrl(site.logo),
    image: absoluteUrl(site.logo),
    telephone: site.phoneE164,
    email: site.email,
    priceRange: '₽₽',
    currenciesAccepted: 'RUB',
    paymentAccepted: 'Cash, Card, BankTransfer',
    openingHours: site.openingHours,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.streetAddress,
      addressLocality: site.addressLocality,
      addressCountry: site.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: [
      { '@type': 'City', name: 'Москва' },
      { '@type': 'AdministrativeArea', name: 'Московская область' },
    ],
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Сварочные услуги',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Полуавтомат MIG/MAG',
            url: absoluteUrl('/services#mig'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Аргонодуговая сварка TIG',
            url: absoluteUrl('/services#tig'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Металлоконструкции',
            url: absoluteUrl('/services#structures'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ремонт и наплавка',
            url: absoluteUrl('/services#repair'),
          },
        },
      ],
    },
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.shortDescription,
    inLanguage: site.language,
    publisher: { '@id': `${site.url}/#organization` },
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function servicesPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Услуги сварки',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'MIG/MAG',
        url: absoluteUrl('/services#mig'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'TIG / Аргон',
        url: absoluteUrl('/services#tig'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Металлоконструкции',
        url: absoluteUrl('/services#structures'),
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Ремонт и наплавка',
        url: absoluteUrl('/services#repair'),
      },
    ],
  }
}
