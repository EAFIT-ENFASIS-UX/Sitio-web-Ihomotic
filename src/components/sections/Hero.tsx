import { useTranslations } from 'next-intl'
import { Sparkles, ChevronDown } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { ROUTES } from '@/constants/routes'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-brand-navy">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/80" />

      {/* Decorative elements */}
      <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-brand-green/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-brand-orange/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center">
        <Badge variant="green" className="mb-6">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          {t('badge')}
        </Badge>

        <h1 className="mx-auto max-w-4xl font-heading text-4xl font-bold text-white md:text-6xl lg:text-7xl">
          {t('title')}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-white/70 md:text-xl">
          {t('subtitle')}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={ROUTES.services}>
            <Button variant="primary" size="lg">
              {t('cta_primary')}
            </Button>
          </Link>
          <Link href={ROUTES.contact}>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">
              {t('cta_secondary')}
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <ChevronDown
            className="h-8 w-8 animate-bounce text-white/50"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
