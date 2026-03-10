import { cn } from '@/lib/utils'

type SectionTitleProps = {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionTitle({ title, subtitle, centered = true, className }: SectionTitleProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2 className="font-heading text-3xl font-bold text-brand-navy md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-brand-navy/70">{subtitle}</p>
      )}
    </div>
  )
}
