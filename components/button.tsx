import cn from 'clsx'
import type { ComponentProps, ReactElement } from 'react'

export const Button = ({
  children,
  className,
  ...props
}: ComponentProps<'button'>): ReactElement => {
  return (
    <button
      className={cn(
        'nextra-button nx-transition-all active:nx-opacity-50',
        'nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5',
        'dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
