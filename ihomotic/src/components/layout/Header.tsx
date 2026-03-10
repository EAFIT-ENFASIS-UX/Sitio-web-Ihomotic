'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { ROUTES } from '@/constants/routes'
import { SITE_NAME } from '@/constants/site'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { TopBar } from './TopBar'
import { useScrolled } from '@/hooks/useScrolled'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import { cn } from '@/lib/utils'

export function Header() {
  const t = useTranslations('nav')
  const scrolled = useScrolled()
  const { isOpen, toggle, close } = useMobileMenu()
  const [servicesOpen, setServicesOpen] = useState(false)

  const navLinks = [
    { href: ROUTES.home, label: t('home') },
    { href: ROUTES.about, label: t('about') },
    {
      href: ROUTES.services,
      label: t('services'),
      children: [
        { href: `${ROUTES.services}#home-automation`, label: t('sub_services.home_automation') },
        { href: `${ROUTES.services}#smart-lighting`, label: t('sub_services.smart_lighting') },
        { href: `${ROUTES.services}#security-cctv`, label: t('sub_services.security_cctv') },
      ],
    },
    { href: ROUTES.projects, label: t('projects') },
    { href: ROUTES.faq, label: t('faq') },
    { href: ROUTES.blog, label: t('blog') },
    { href: ROUTES.contact, label: t('contact') },
  ]

  return (
    <>
      <TopBar />
      <header
        className={cn(
          'sticky top-0 z-50 bg-white transition-shadow duration-300',
          scrolled && 'shadow-md'
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href={ROUTES.home} className="flex items-center gap-2" onClick={close}>
            <span className="font-heading text-2xl font-bold text-brand-navy">
              <span className="text-brand-green">I</span>
              {SITE_NAME.slice(1)}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                    className="flex min-h-[44px] items-center gap-1 font-body text-sm font-medium text-brand-navy transition-colors hover:text-brand-green"
                    aria-expanded={servicesOpen}
                    aria-controls="services-dropdown"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        servicesOpen && 'rotate-180'
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  {servicesOpen && (
                    <div
                      id="services-dropdown"
                      className="absolute left-0 top-full mt-2 w-56 rounded-lg bg-white py-2 shadow-lg"
                      role="menu"
                    >
                      <Link
                        href={link.href}
                        className="block min-h-[44px] px-4 py-2 text-sm text-brand-navy transition-colors hover:bg-brand-light hover:text-brand-green"
                        role="menuitem"
                        onClick={() => setServicesOpen(false)}
                      >
                        {link.label}
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block min-h-[44px] px-4 py-2 text-sm text-brand-navy transition-colors hover:bg-brand-light hover:text-brand-green"
                          role="menuitem"
                          onClick={() => setServicesOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="min-h-[44px] flex items-center font-body text-sm font-medium text-brand-navy transition-colors hover:text-brand-green"
                >
                  {link.label}
                </Link>
              )
            )}
            <LanguageSwitcher />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={toggle}
            className="min-h-[44px] min-w-[44px] rounded-lg p-2 text-brand-navy lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={cn(
            'fixed inset-y-0 right-0 z-50 w-80 max-w-full transform bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between border-b border-brand-light p-4">
            <span className="font-heading text-xl font-bold text-brand-navy">
              <span className="text-brand-green">I</span>
              {SITE_NAME.slice(1)}
            </span>
            <button
              onClick={close}
              className="min-h-[44px] min-w-[44px] rounded-lg p-2 text-brand-navy"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="flex min-h-[44px] items-center rounded-lg px-4 py-3 font-body text-base font-medium text-brand-navy transition-colors hover:bg-brand-light hover:text-brand-green"
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={close}
                    className="flex min-h-[44px] items-center rounded-lg px-8 py-2 font-body text-sm text-brand-navy/70 transition-colors hover:bg-brand-light hover:text-brand-green"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="mt-4 border-t border-brand-light pt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Mobile overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={close}
            aria-hidden="true"
          />
        )}
      </header>
    </>
  )
}
