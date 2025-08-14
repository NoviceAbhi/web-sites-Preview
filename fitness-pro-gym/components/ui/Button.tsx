'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'sm', children, ...props }, ref) => {
    return (
      <button
        className={clsx(
          'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-300 relative overflow-hidden group',
          {
            'bg-primary-500 hover:bg-primary-600 text-white shadow-lg': variant === 'primary',
            'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white': variant === 'secondary',
            'bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white': variant === 'outline',
            'bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white': variant === 'ghost',
          },
          {
            'px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm': size === 'sm',
            'px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base': size === 'md',
            'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button