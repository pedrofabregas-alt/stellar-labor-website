'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  label: string
  onClick?: () => void
  className?: string
}

export default function NavLink({ href, label, onClick, className = '' }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'text-ink'
          : 'text-ink-subtle hover:text-ink'
      } ${className}`}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-1 left-0 right-0 h-px bg-emerald" />
      )}
    </Link>
  )
}
