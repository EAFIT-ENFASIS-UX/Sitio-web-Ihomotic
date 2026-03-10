'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'
import { cn } from '@/lib/utils'

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: 'es' | 'en') => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div className="flex items-center gap-1 rounded-lg bg-brand-light p-1">
      <button
        onClick={() => switchLocale('es')}
        className={cn(
          'min-h-[44px] min-w-[44px] rounded-md px-3 py-1 text-sm font-medium transition-colors',
          locale === 'es'
            ? 'bg-brand-green text-white'
            : 'text-brand-navy hover:bg-brand-green/10'
        )}
        aria-label="Cambiar a español"
      >
        ES
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={cn(
          'min-h-[44px] min-w-[44px] rounded-md px-3 py-1 text-sm font-medium transition-colors',
          locale === 'en'
            ? 'bg-brand-green text-white'
            : 'text-brand-navy hover:bg-brand-green/10'
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  )
}
