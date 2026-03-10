import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/constants/site'

type MetadataParams = {
  title: string
  description: string
  path: string
  locale: string
}

export function generatePageMetadata({ title, description, path, locale }: MetadataParams): Metadata {
  const url = `${SITE_URL}/${locale}${path}`
  const fullTitle = `${title} | ${SITE_NAME}`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: ['/images/placeholder/og-image.jpg'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
      languages: {
        es: `${SITE_URL}/es${path}`,
        en: `${SITE_URL}/en${path}`,
      },
    },
  }
}
