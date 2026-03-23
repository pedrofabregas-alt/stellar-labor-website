'use client'

import useNetlifyForm from './useNetlifyForm'
import FormField from './FormField'
import FormSuccess from './FormSuccess'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/lib/i18n'
import { FORMS, INDUSTRIES_DATA } from '@/lib/translations'

export default function EmployerForm({ dark = false }: { dark?: boolean }) {
  const { locale } = useLanguage()
  const f = FORMS[locale]
  const industries = INDUSTRIES_DATA[locale]

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
        title={f.inquiryReceived}
        message={f.inquiryReceivedDetail}
      />
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value="employer-inquiry" />
      <div className="hidden"><input name="bot-field" /></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField dark={dark} name="companyName" label={f.companyName} required value={values.companyName} onChange={handleChange} error={errors.companyName} placeholder="Acme Industries" />
        <FormField dark={dark} name="contactName" label={f.contactName} required value={values.contactName} onChange={handleChange} error={errors.contactName} placeholder="Jane Doe" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField dark={dark} name="email" label={f.email} type="email" required value={values.email} onChange={handleChange} error={errors.email} placeholder="jane@acme.com" />
        <FormField dark={dark} name="phone" label={f.phone} type="tel" value={values.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          dark={dark}
          name="industry"
          label={f.industry}
          type="select"
          required
          value={values.industry}
          onChange={handleChange}
          error={errors.industry}
          placeholder={f.selectIndustry}
          options={industries.map((i) => i.title)}
        />
        <FormField dark={dark} name="workersNeeded" label={f.workersNeeded} value={values.workersNeeded} onChange={handleChange} placeholder={locale === 'es' ? 'ej., 25' : 'e.g., 25'} />
      </div>
      <FormField
        dark={dark}
        name="timeline"
        label={f.timeline}
        type="select"
        value={values.timeline}
        onChange={handleChange}
        placeholder={f.whenNeedWorkers}
        options={f.timelineOptions}
      />
      <FormField dark={dark} name="description" label={f.projectDetails} type="textarea" value={values.description} onChange={handleChange} placeholder={f.projectPlaceholder} />

      {errors._form && <p className="text-sm text-red-500">{errors._form}</p>}

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
        {isSubmitting ? f.submitting : f.submit}
      </Button>
    </form>
  )
}
