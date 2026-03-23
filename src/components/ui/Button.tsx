import Link from 'next/link'
import { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
  withArrow?: boolean
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string
  type?: never
  onClick?: never
  disabled?: never
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants = {
  primary: 'bg-emerald text-white hover:bg-emerald-light',
  secondary: 'bg-ink text-cream hover:bg-ink-muted',
  outline: 'border border-ink/20 text-ink hover:bg-ink hover:text-cream',
  ghost: 'text-ink-muted hover:text-ink',
  dark: 'bg-cream text-ink hover:bg-white',
}

const sizes = {
  sm: 'px-5 py-2.5 text-sm gap-2',
  md: 'px-7 py-3.5 text-sm gap-2',
  lg: 'px-9 py-4.5 text-base gap-3',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  withArrow = false,
  ...props
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center font-medium
    rounded-full transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-emerald/40 focus:ring-offset-2 focus:ring-offset-cream
    ${variants[variant]} ${sizes[size]} ${className}
  `.trim()

  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  )

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={`${baseClasses} group`}>
        {content}
      </Link>
    )
  }

  const { type = 'button', onClick, disabled } = props as ButtonAsButton
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} group ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {content}
    </button>
  )
}
