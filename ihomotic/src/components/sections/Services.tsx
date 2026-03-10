import { useTranslations } from 'next-intl'
import { Home, Lightbulb, Shield, Zap, Mic, Wifi } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { services } from '@/data/services'
import { Card } from '@/components/ui/Card'
import { SectionTitle } from '@/components/ui/SectionTitle'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Home,
  Lightbulb,
  Shield,
  Zap,
  Mic,
  Wifi,
}

type ServicesProps = {
  preview?: boolean
}

export function Services({ preview = false }: ServicesProps) {
  const t = useTranslations()
  const items = preview ? services.slice(0, 3) : services

  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title={t('services.title')} subtitle={t('services.subtitle')} />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <Card key={service.id} className="group">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-green/10 transition-colors group-hover:bg-brand-green">
                  {Icon && (
                    <Icon
                      className="h-7 w-7 text-brand-green transition-colors group-hover:text-white"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="font-heading text-xl font-semibold text-brand-navy">
                  {t(service.title)}
                </h3>
                <p className="mt-2 font-body text-brand-navy/70">{t(service.description)}</p>
                <Link
                  href={`/services#${service.id}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-brand-green transition-colors hover:text-brand-green/80"
                >
                  {t('common.read_more')} →
                </Link>
              </Card>
            )
          })}
        </div>

        {preview && (
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center font-body text-brand-green transition-colors hover:text-brand-green/80"
            >
              {t('common.view_all')} →
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
