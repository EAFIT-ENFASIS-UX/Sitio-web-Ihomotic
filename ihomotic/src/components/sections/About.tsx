import { useTranslations } from 'next-intl'
import { Check } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'

type AboutProps = {
  showTeam?: boolean
}

export function About({ showTeam = false }: AboutProps) {
  const t = useTranslations('about')

  const stats = [
    { label: t('stats.projects'), value: t('stats.projects_value') },
    { label: t('stats.clients'), value: t('stats.clients_value') },
    { label: t('stats.experience'), value: t('stats.experience_value') },
    { label: t('stats.cities'), value: t('stats.cities_value') },
  ]

  const values = [
    t('values.innovation'),
    t('values.sustainability'),
    t('values.quality'),
    t('values.support'),
  ]

  const team = [
    { name: t('team.member1.name'), role: t('team.member1.role'), initials: 'CR' },
    { name: t('team.member2.name'), role: t('team.member2.role'), initials: 'AM' },
    { name: t('team.member3.name'), role: t('team.member3.role'), initials: 'MS' },
    { name: t('team.member4.name'), role: t('team.member4.role'), initials: 'LT' },
  ]

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title={t('title')} subtitle={t('subtitle')} />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <p className="font-body text-lg leading-relaxed text-brand-navy/80">
              {t('description')}
            </p>

            <h3 className="mt-8 font-heading text-xl font-semibold text-brand-navy">
              {t('values_title')}
            </h3>
            <ul className="mt-4 space-y-3">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
                  <span className="font-body text-brand-navy/80">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-brand-light p-6 text-center">
                <p className="font-heading text-3xl font-bold text-brand-green">{stat.value}</p>
                <p className="mt-1 font-body text-sm text-brand-navy/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        {showTeam && (
          <div className="mt-20">
            <h3 className="mb-8 text-center font-heading text-2xl font-bold text-brand-navy">
              {t('team_title')}
            </h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand-light">
                    <span className="font-heading text-2xl font-bold text-brand-green">
                      {member.initials}
                    </span>
                  </div>
                  <h4 className="mt-4 font-heading text-lg font-semibold text-brand-navy">
                    {member.name}
                  </h4>
                  <p className="font-body text-sm text-brand-navy/70">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
