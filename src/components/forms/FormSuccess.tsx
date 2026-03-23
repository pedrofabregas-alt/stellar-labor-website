import { CheckCircle } from 'lucide-react'
import StarMotif from '@/components/brand/StarMotif'

interface FormSuccessProps {
  title?: string
  message?: string
  dark?: boolean
}

export default function FormSuccess({
  title = 'Message Sent',
  message = 'Thank you for reaching out. Our team will be in touch within one business day.',
  dark = false,
}: FormSuccessProps) {
  return (
    <div className="text-center py-12">
      <div className="relative inline-block mb-4">
        <CheckCircle className="w-16 h-16 text-emerald" />
        <StarMotif size={12} className="text-emerald/40 absolute -top-1 -right-1" />
      </div>
      <h3 className={`text-2xl font-serif mb-2 ${dark ? 'text-cream' : 'text-ink'}`}>{title}</h3>
      <p className={dark ? 'text-stone-dark' : 'text-ink-subtle'}>{message}</p>
    </div>
  )
}
