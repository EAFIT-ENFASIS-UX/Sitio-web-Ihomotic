import { cn } from '@/lib/utils'

type BadgeProps = {
  children: React.ReactNode
  variant?: 'default' | 'green' | 'orange'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-brand-light text-brand-navy',
    green: 'bg-brand-green/10 text-brand-green',
    orange: 'bg-brand-orange/10 text-brand-orange',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
