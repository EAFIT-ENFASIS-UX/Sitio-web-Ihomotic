import { useTranslations } from 'next-intl'
import { Linkedin, Instagram, Facebook, Twitter } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { ROUTES } from '@/constants/routes'
import { SITE_NAME, SOCIAL_LINKS } from '@/constants/site'

export function Footer() {
  const t = useTranslations()
  const currentYear = new Date().getFullYear()

  const serviceLinks = [
    { label: t('services.items.home_automation.title'), href: `${ROUTES.services}#home-automation` },
    { label: t('services.items.smart_lighting.title'), href: `${ROUTES.services}#smart-lighting` },
    { label: t('services.items.security_cctv.title'), href: `${ROUTES.services}#security-cctv` },
    { label: t('services.items.energy_saving.title'), href: `${ROUTES.services}#energy-saving` },
    { label: t('services.items.voice_control.title'), href: `${ROUTES.services}#voice-control` },
    { label: t('services.items.iot_integration.title'), href: `${ROUTES.services}#iot-integration` },
  ]

  const companyLinks = [
    { label: t('nav.about'), href: ROUTES.about },
    { label: t('nav.projects'), href: ROUTES.projects },
    { label: t('nav.blog'), href: ROUTES.blog },
    { label: t('nav.faq'), href: ROUTES.faq },
    { label: t('nav.contact'), href: ROUTES.contact },
  ]

  const legalLinks = [
    { label: t('footer.privacy'), href: '#' },
    { label: t('footer.terms'), href: '#' },
    { label: t('footer.cookies'), href: '#' },
  ]

  const socialLinks = [
    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
    { icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
    { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'X (Twitter)' },
  ]

  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-heading text-2xl font-bold">
              <span className="text-brand-green">I</span>
              {SITE_NAME.slice(1)}
            </span>
            <p className="mt-4 font-body text-sm text-white/70">{t('footer.description')}</p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-brand-green"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold">{t('footer.services_title')}</h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/70 transition-colors hover:text-brand-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-lg font-semibold">{t('footer.company_title')}</h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/70 transition-colors hover:text-brand-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading text-lg font-semibold">{t('footer.legal_title')}</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/70 transition-colors hover:text-brand-green"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="font-body text-sm text-white/50">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
