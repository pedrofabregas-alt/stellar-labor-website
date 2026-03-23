'use client'

import useNetlifyForm from './useNetlifyForm'
import FormField from './FormField'
import FormSuccess from './FormSuccess'
import Button from '@/components/ui/Button'

export default function TalentForm({ dark = false }: { dark?: boolean }) {
  const { values, errors, isSubmitting, isSuccess, handleChange, handleSubmit } = useNetlifyForm(
    'talent-application',
    {
      fullName: '', email: '', phone: '', tradeArea: '',
      experience: '', certifications: '', availability: '',
    },
    ['fullName', 'email', 'tradeArea']
  )

  if (isSuccess) {
    return (
      <FormSuccess
        dark={dark}
        title="Application Received"
        message="Thank you for your interest. A recruiter will review your information and reach out shortly."
      />
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value="talent-application" />
      <div className="hidden"><input name="bot-field" /></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField dark={dark} name="fullName" label="Full Name" required value={values.fullName} onChange={handleChange} error={errors.fullName} placeholder="John Smith" />
        <FormField dark={dark} name="email" label="Email" type="email" required value={values.email} onChange={handleChange} error={errors.email} placeholder="john@email.com" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField dark={dark} name="phone" label="Phone" type="tel" value={values.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
        <FormField
          dark={dark}
          name="tradeArea"
          label="Trade / Skill Area"
          type="select"
          required
          value={values.tradeArea}
          onChange={handleChange}
          error={errors.tradeArea}
          placeholder="Select your trade"
          options={[
            'Electrician', 'Pipefitter', 'Welder', 'Millwright', 'Instrument Technician',
            'Heavy Equipment Operator', 'Carpenter', 'Iron Worker', 'General Labor',
            'Process Operator', 'Safety Professional', 'Other',
          ]}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          dark={dark}
          name="experience"
          label="Years of Experience"
          type="select"
          value={values.experience}
          onChange={handleChange}
          placeholder="Select experience"
          options={['Less than 1 year', '1-3 years', '3-5 years', '5-10 years', '10+ years']}
        />
        <FormField
          dark={dark}
          name="availability"
          label="Availability"
          type="select"
          value={values.availability}
          onChange={handleChange}
          placeholder="When can you start?"
          options={['Immediately', 'Within 1 week', 'Within 2 weeks', 'Within 1 month']}
        />
      </div>
      <FormField dark={dark} name="certifications" label="Certifications" type="textarea" value={values.certifications} onChange={handleChange} placeholder="List any relevant certifications (OSHA 10/30, NCCER, TWIC, etc.)" />

      <p className={`text-xs ${dark ? 'text-stone-dark' : 'text-ink-subtle'}`}>
        For a complete application, please also email your resume to{' '}
        <a href="mailto:careers@stellarlabor.com" className="text-emerald hover:text-emerald-light">
          careers@stellarlabor.com
        </a>
      </p>

      {errors._form && <p className="text-sm text-red-500">{errors._form}</p>}

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </Button>
    </form>
  )
}
