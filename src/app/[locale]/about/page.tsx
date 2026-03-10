import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { generatePageMetadata } from '@/lib/metadata'
import { About } from '@/components/sections/About'
import { CtaBanner } from '@/components/sections/CtaBanner'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.about' })
  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    path: '/about',
    locale,
  })
}

export default function AboutPage() {
  return (
    <>
      <About showTeam />
      <CtaBanner />
    </>
  )
}
