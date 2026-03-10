'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { projects } from '@/data/projects'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

export function Projects() {
  const t = useTranslations()
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { key: 'all', label: t('projects.filter_all') },
    { key: 'residential', label: t('projects.filter_residential') },
    { key: 'commercial', label: t('projects.filter_commercial') },
    { key: 'industrial', label: t('projects.filter_industrial') },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle title={t('projects.title')} subtitle={t('projects.subtitle')} />

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={cn(
                'min-h-[44px] rounded-full px-6 py-2 font-body text-sm font-medium transition-colors',
                activeFilter === filter.key
                  ? 'bg-brand-green text-white'
                  : 'bg-brand-light text-brand-navy hover:bg-brand-green/10'
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden p-0">
              <div className="aspect-video bg-gradient-to-br from-brand-navy/20 to-brand-green/20" />
              <div className="p-6">
                <span className="inline-block rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-medium capitalize text-brand-orange">
                  {project.category}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-brand-navy">
                  {project.title}
                </h3>
                <p className="mt-2 font-body text-sm text-brand-navy/70">
                  {t(project.description)}
                </p>
                <p className="mt-2 font-body text-xs text-brand-navy/50">
                  📍 {project.location}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
