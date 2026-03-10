import { MapPin, Phone, Mail } from 'lucide-react'
import { SITE_EMAIL, SITE_PHONE, SITE_ADDRESS } from '@/constants/site'

export function TopBar() {
  return (
    <div className="bg-brand-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 text-sm sm:flex-row">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            <span>{SITE_ADDRESS}</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href={`tel:${SITE_PHONE}`} className="flex items-center gap-1 transition-colors hover:text-brand-green">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>{SITE_PHONE}</span>
          </a>
          <a href={`mailto:${SITE_EMAIL}`} className="flex items-center gap-1 transition-colors hover:text-brand-green">
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>{SITE_EMAIL}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
