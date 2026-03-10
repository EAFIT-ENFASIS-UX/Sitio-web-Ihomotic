import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { generatePageMetadata } from '@/lib/metadata'
import { Services } from '@/components/sections/Services'
import { CtaBanner } from '@/components/sections/CtaBanner'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.services' })
  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    path: '/services',
    locale,
  })
}

export default function ServicesPage() {
  return (
    <>
      <Services />
      <CtaBanner />
    </>
  )
}
