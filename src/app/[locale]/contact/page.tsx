import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { generatePageMetadata } from '@/lib/metadata'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ContactForm } from '@/components/sections/ContactForm'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.contact' })
  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    path: '/contact',
    locale,
  })
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title={t('contact.title')} subtitle={t('contact.subtitle')} />
        <ContactForm />
      </div>
    </section>
  )
}
