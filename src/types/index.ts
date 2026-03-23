export interface NavLink {
  label: string
  href: string
}

export interface Industry {
  title: string
  slug: string
  description: string
  icon: string
  roles: string[]
}

export interface Service {
  title: string
  description: string
  benefits: string[]
}

export interface Stat {
  value: number
  suffix?: string
  label: string
}

export interface ProcessStepData {
  number: string
  title: string
  description: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface FAQCategory {
  category: string
  items: FAQ[]
}

export interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
}

export interface FormFieldConfig {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  placeholder?: string
  required?: boolean
  options?: string[]
}
