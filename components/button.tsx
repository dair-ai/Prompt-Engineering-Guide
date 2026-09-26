import cn from 'clsx'
import type { ReactNode, ReactElement } from 'react'

interface ButtonProps {
  children?: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  title?: string
  tabIndex?: number
}

export const Button = ({
  children,
  className,
  onClick,
  type = 'button',
  disabled,
  title,
  tabIndex
}: ButtonProps): ReactElement => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      tabIndex={tabIndex}
      className={cn(
        'nextra-button nx-transition-all active:nx-opacity-50',
        'nx-bg-primary-700/5 nx-border nx-border-black/5 nx-text-gray-600 hover:nx-text-gray-900 nx-rounded-md nx-p-1.5',
        'dark:nx-bg-primary-300/10 dark:nx-border-white/10 dark:nx-text-gray-400 dark:hover:nx-text-gray-50',
        className
      )}
    >
      {children}
    </button>
  )
}
