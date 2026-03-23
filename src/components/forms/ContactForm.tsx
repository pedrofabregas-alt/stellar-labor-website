'use client'

import useNetlifyForm from './useNetlifyForm'
import FormField from './FormField'
import FormSuccess from './FormSuccess'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/lib/i18n'
import { FORMS } from '@/lib/translations'

export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const { locale } = useLanguage()
  const f = FORMS[locale]

  const { values, errors, isSubmitting, isSuccess, handleChange, handleSubmit } = useNetlifyForm(
    'contact',
    { name: '', email: '', phone: '', company: '', subject: '', message: '' },
    ['name', 'email', 'message']
  )

  if (isSuccess) return <FormSuccess dark={dark} title={f.messageSent} message={f.messageSentDetail} />

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value="contact" />
      <div className="hidden">
        <input name="bot-field" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField dark={dark} name="name" label={f.fullName} required value={values.name} onChange={handleChange} error={errors.name} placeholder="John Smith" />
        <FormField dark={dark} name="email" label={f.email} type="email" required value={values.email} onChange={handleChange} error={errors.email} placeholder="john@company.com" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField dark={dark} name="phone" label={f.phone} type="tel" value={values.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
        <FormField dark={dark} name="company" label={f.company} value={values.company} onChange={handleChange} placeholder={locale === 'es' ? 'Nombre de empresa' : 'Company name'} />
      </div>
      <FormField
        dark={dark}
        name="subject"
        label={f.subject}
        type="select"
        value={values.subject}
        onChange={handleChange}
        placeholder={f.selectTopic}
        options={f.subjectOptions}
      />
      <FormField dark={dark} name="message" label={f.message} type="textarea" required value={values.message} onChange={handleChange} error={errors.message} placeholder={locale === 'es' ? 'Cuéntenos cómo podemos ayudar...' : 'Tell us how we can help...'} />

      {errors._form && <p className="text-sm text-red-500">{errors._form}</p>}

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
        {isSubmitting ? f.sending : f.send}
      </Button>
    </form>
  )
}
