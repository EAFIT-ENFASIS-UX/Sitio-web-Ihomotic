import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { ROUTES } from '@/constants/routes'
import { Button } from '@/components/ui/Button'

export function CtaBanner() {
  const t = useTranslations('cta_banner')

  return (
    <section className="bg-gradient-to-r from-brand-green to-brand-green/80 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
          {t('title')}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-white/90">
          {t('subtitle')}
        </p>
        <div className="mt-8">
          <Link href={ROUTES.contact}>
            <Button variant="secondary" size="lg">
              {t('button')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
