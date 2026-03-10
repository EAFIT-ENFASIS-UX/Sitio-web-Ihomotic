import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { generatePageMetadata } from '@/lib/metadata'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { About } from '@/components/sections/About'
import { Testimonials } from '@/components/sections/Testimonials'
import { BlogPreview } from '@/components/sections/BlogPreview'
import { CtaBanner } from '@/components/sections/CtaBanner'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.home' })
  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    path: '',
    locale,
  })
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services preview />
      <About />
      <Testimonials />
      <BlogPreview />
      <CtaBanner />
    </>
  )
}
