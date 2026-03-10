import { cn } from '@/lib/utils'

type CardProps = {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-white p-6 shadow-sm',
        hover && 'transition-shadow duration-300 hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  )
}
