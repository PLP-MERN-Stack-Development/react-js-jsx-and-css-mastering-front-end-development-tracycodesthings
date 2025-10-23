import React from 'react'

export default function Button({ children, variant = 'primary', className = '', ...rest }) {
  const base = 'px-4 py-2 rounded-lg font-medium focus:outline-none transition-transform active:scale-95 disabled:opacity-60'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  }
  return (
    <button className={`${base} ${variants[variant] || variants.primary} ${className}`} {...rest}>
      {children}
    </button>
  )
}
