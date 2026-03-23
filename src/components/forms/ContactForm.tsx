'use client'

import useNetlifyForm from './useNetlifyForm'
import FormField from './FormField'
import FormSuccess from './FormSuccess'
import Button from '@/components/ui/Button'

export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const { values, errors, isSubmitting, isSuccess, handleChange, handleSubmit } = useNetlifyForm(
    'contact',
    { name: '', email: '', phone: '', company: '', subject: '', message: '' },
    ['name', 'email', 'message']
  )

  if (isSuccess) return <FormSuccess dark={dark} />

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value="contact" />
      <div className="hidden">
        <input name="bot-field" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField dark={dark} name="name" label="Full Name" required value={values.name} onChange={handleChange} error={errors.name} placeholder="John Smith" />
        <FormField dark={dark} name="email" label="Email" type="email" required value={values.email} onChange={handleChange} error={errors.email} placeholder="john@company.com" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField dark={dark} name="phone" label="Phone" type="tel" value={values.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
        <FormField dark={dark} name="company" label="Company" value={values.company} onChange={handleChange} placeholder="Company name" />
      </div>
      <FormField
        dark={dark}
        name="subject"
        label="Subject"
        type="select"
        value={values.subject}
        onChange={handleChange}
        placeholder="Select a topic"
        options={['Staffing Inquiry', 'Employment Opportunity', 'Partnership', 'General Question', 'Other']}
      />
      <FormField dark={dark} name="message" label="Message" type="textarea" required value={values.message} onChange={handleChange} error={errors.message} placeholder="Tell us how we can help..." />

      {errors._form && <p className="text-sm text-red-500">{errors._form}</p>}

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
