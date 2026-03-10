import { useTranslations } from 'next-intl'
import { Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Card } from '@/components/ui/Card'

export function Testimonials() {
  const t = useTranslations()

  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          title={t('testimonials.title')}
          subtitle={t('testimonials.subtitle')}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              <Quote
                className="absolute right-6 top-6 h-8 w-8 text-brand-green/20"
                aria-hidden="true"
              />
              <p className="font-body text-brand-navy/80">
                {t(testimonial.content)}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light">
                  <span className="font-heading text-sm font-bold text-brand-green">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-brand-navy">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-xs text-brand-navy/60">
                    {testimonial.role}
                    {testimonial.company && ` · ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
