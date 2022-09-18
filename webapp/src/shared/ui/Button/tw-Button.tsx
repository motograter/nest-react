// Button.tsx
import React from 'react'
import clsx from 'clsx'

export const styles = {
  base: 'inline-flex leading-none rounded-md focus:outline-none focus:ring focus:ring-opacity-50',
  animate: 'transition duration-300 ease-in-out',
  small: 'px-4 py-2',
  medium: 'px-8 py-4',
  primary: 'text-white bg-indigo-500 hover:bg-indigo-600 ring-indigo-200',
  success: 'text-white bg-green-500 hover:bg-green-600 ring-green-200',
  warn: 'text-white bg-yellow-500 hover:bg-yellow-600 ring-yellow-200',
  danger: 'text-white bg-red-900 hover:bg-red-600 ring-red-200',
  fullWidth: 'w-full'
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'success' | 'warn' | 'danger'
  size?: 'small' | 'medium'
  fullWidth?: boolean
}
export const TWButton = React.forwardRef(function Button(
  {
    children,
    size = 'small',
    type = 'button',
    variant = 'primary',
    fullWidth,
    className,
    ...props
  }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>
): JSX.Element {
  const classes = clsx(
    styles.base,
    styles.animate,
    styles[size],
    styles[variant],
    { [styles.fullWidth]: fullWidth },
    className
  )
  return (
    <button ref={ref} type={type} className={classes} {...props}>
      {children}
    </button>
  )
})
