import { ReactNode } from 'react'

interface SectionContainerProps {
  children: ReactNode
  className?: string
  as?: 'section' | 'div'
  id?: string
  wide?: boolean
  padding?: 'sm' | 'md' | 'lg' | 'xl'
}

const paddings = {
  sm: 'py-12 lg:py-16',
  md: 'py-16 lg:py-24',
  lg: 'py-20 lg:py-32',
  xl: 'py-24 lg:py-40',
}

export default function SectionContainer({
  children,
  className = '',
  as: Component = 'section',
  id,
  wide = false,
  padding = 'lg',
}: SectionContainerProps) {
  return (
    <Component id={id} className={`${paddings[padding]} ${className}`}>
      <div className={`mx-auto px-5 sm:px-8 lg:px-12 ${wide ? 'max-w-[1440px]' : 'max-w-7xl'}`}>
        {children}
      </div>
    </Component>
  )
}
