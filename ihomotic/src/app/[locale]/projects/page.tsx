import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { generatePageMetadata } from '@/lib/metadata'
import { Projects } from '@/components/sections/Projects'
import { CtaBanner } from '@/components/sections/CtaBanner'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.projects' })
  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    path: '/projects',
    locale,
  })
}

export default function ProjectsPage() {
  return (
    <>
      <Projects />
      <CtaBanner />
    </>
  )
}
