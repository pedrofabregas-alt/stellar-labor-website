'use client'

import useNetlifyForm from './useNetlifyForm'
import FormField from './FormField'
import FormSuccess from './FormSuccess'
import Button from '@/components/ui/Button'
import { INDUSTRIES } from '@/lib/constants'

export default function EmployerForm({ dark = false }: { dark?: boolean }) {
  const { values, errors, isSubmitting, isSuccess, handleChange, handleSubmit } = useNetlifyForm(
    'employer-inquiry',
    {
      companyName: '', contactName: '', email: '', phone: '',
      industry: '', workersNeeded: '', timeline: '', description: '',
    },
    ['companyName', 'contactName', 'email', 'industry']
  )

  if (isSuccess) {
    return (
      <FormSuccess
        dark={dark}
        title="Inquiry Received"
        message="Our staffing team will review your requirements and contact you within 24 hours."
      />
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value="employer-inquiry" />
      <div className="hidden"><input name="bot-field" /></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField dark={dark} name="companyName" label="Company Name" required value={values.companyName} onChange={handleChange} error={errors.companyName} placeholder="Acme Industries" />
        <FormField dark={dark} name="contactName" label="Contact Name" required value={values.contactName} onChange={handleChange} error={errors.contactName} placeholder="Jane Doe" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField dark={dark} name="email" label="Email" type="email" required value={values.email} onChange={handleChange} error={errors.email} placeholder="jane@acme.com" />
        <FormField dark={dark} name="phone" label="Phone" type="tel" value={values.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          dark={dark}
          name="industry"
          label="Industry"
          type="select"
          required
          value={values.industry}
          onChange={handleChange}
          error={errors.industry}
          placeholder="Select industry"
          options={INDUSTRIES.map((i) => i.title)}
        />
        <FormField dark={dark} name="workersNeeded" label="Workers Needed" value={values.workersNeeded} onChange={handleChange} placeholder="e.g., 25" />
      </div>
      <FormField
        dark={dark}
        name="timeline"
        label="Timeline"
        type="select"
        value={values.timeline}
        onChange={handleChange}
        placeholder="When do you need workers?"
        options={['Immediately', 'Within 1 week', 'Within 2 weeks', 'Within 1 month', 'Planning phase']}
      />
      <FormField dark={dark} name="description" label="Project Details" type="textarea" value={values.description} onChange={handleChange} placeholder="Describe your workforce needs, project scope, and any specific requirements..." />

      {errors._form && <p className="text-sm text-red-500">{errors._form}</p>}

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
      </Button>
    </form>
  )
}
