'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '@/data/faq'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { cn } from '@/lib/utils'

export function Faq() {
  const t = useTranslations()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle title={t('faq.title')} subtitle={t('faq.subtitle')} />

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <div key={index} className="rounded-xl bg-white shadow-sm">
                <button
                  id={buttonId}
                  onClick={() => toggle(index)}
                  className="flex min-h-[44px] w-full items-center justify-between px-6 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="pr-4 font-heading text-base font-semibold text-brand-navy">
                    {t(item.question)}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-brand-navy/50 transition-transform duration-200',
                      isOpen && 'rotate-180'
                    )}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    'overflow-hidden transition-all duration-200',
                    isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                  )}
                >
                  <p className="px-6 font-body text-brand-navy/70">{t(item.answer)}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
