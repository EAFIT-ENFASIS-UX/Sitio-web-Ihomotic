'use client'

import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { SITE_ADDRESS, SITE_PHONE, SITE_EMAIL } from '@/constants/site'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

function useContactSchema() {
  const t = useTranslations('contact.validation')

  return z.object({
    name: z.string().min(1, t('name_required')),
    email: z.string().min(1, t('email_required')).email(t('email_invalid')),
    phone: z.string().optional(),
    subject: z.string().min(1, t('subject_required')),
    message: z.string().min(1, t('message_required')).min(10, t('message_min')),
  })
}

type ContactFormData = z.infer<ReturnType<typeof useContactSchema>>

export function ContactForm() {
  const t = useTranslations()
  const schema = useContactSchema()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full rounded-lg border border-brand-navy/20 bg-white px-4 py-3 font-body text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 min-h-[44px]'

  return (
    <div className="grid gap-12 lg:grid-cols-3">
      {/* Form */}
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block font-body text-sm font-medium text-brand-navy">
                {t('contact.form.name')}
              </label>
              <input
                id="name"
                type="text"
                placeholder={t('contact.form.name_placeholder')}
                className={cn(inputClasses, errors.name && 'border-red-500')}
                {...register('name')}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500" role="alert">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block font-body text-sm font-medium text-brand-navy">
                {t('contact.form.email')}
              </label>
              <input
                id="email"
                type="email"
                placeholder={t('contact.form.email_placeholder')}
                className={cn(inputClasses, errors.email && 'border-red-500')}
                {...register('email')}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500" role="alert">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="mb-2 block font-body text-sm font-medium text-brand-navy">
                {t('contact.form.phone')}
              </label>
              <input
                id="phone"
                type="tel"
                placeholder={t('contact.form.phone_placeholder')}
                className={inputClasses}
                {...register('phone')}
              />
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block font-body text-sm font-medium text-brand-navy">
                {t('contact.form.subject')}
              </label>
              <input
                id="subject"
                type="text"
                placeholder={t('contact.form.subject_placeholder')}
                className={cn(inputClasses, errors.subject && 'border-red-500')}
                {...register('subject')}
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-500" role="alert">{errors.subject.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block font-body text-sm font-medium text-brand-navy">
              {t('contact.form.message')}
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder={t('contact.form.message_placeholder')}
              className={cn(inputClasses, 'resize-none', errors.message && 'border-red-500')}
              {...register('message')}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500" role="alert">{errors.message.message}</p>
            )}
          </div>

          <Button type="submit" disabled={status === 'loading'} size="lg">
            {status === 'loading' ? t('common.loading') : t('common.send')}
          </Button>

          {status === 'success' && (
            <p className="text-sm font-medium text-brand-green" role="alert">{t('common.success')}</p>
          )}
          {status === 'error' && (
            <p className="text-sm font-medium text-red-500" role="alert">{t('common.error')}</p>
          )}
        </form>
      </div>

      {/* Contact info */}
      <div className="rounded-2xl bg-brand-light p-8">
        <h3 className="font-heading text-xl font-semibold text-brand-navy">
          {t('contact.info.title')}
        </h3>
        <div className="mt-6 space-y-6">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
            <div>
              <p className="font-body text-sm font-medium text-brand-navy">{t('contact.info.address')}</p>
              <p className="font-body text-sm text-brand-navy/70">{SITE_ADDRESS}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
            <div>
              <p className="font-body text-sm font-medium text-brand-navy">{t('contact.info.phone')}</p>
              <a href={`tel:${SITE_PHONE}`} className="font-body text-sm text-brand-navy/70 hover:text-brand-green">
                {SITE_PHONE}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
            <div>
              <p className="font-body text-sm font-medium text-brand-navy">{t('contact.info.email')}</p>
              <a href={`mailto:${SITE_EMAIL}`} className="font-body text-sm text-brand-navy/70 hover:text-brand-green">
                {SITE_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
