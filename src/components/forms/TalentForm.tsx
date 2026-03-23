'use client'

import useNetlifyForm from './useNetlifyForm'
import FormField from './FormField'
import FormSuccess from './FormSuccess'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/lib/i18n'
import { FORMS } from '@/lib/translations'

export default function TalentForm({ dark = false }: { dark?: boolean }) {
  const { locale } = useLanguage()
  const f = FORMS[locale]

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
        title={f.appReceived}
        message={f.appReceivedDetail}
      />
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value="talent-application" />
      <div className="hidden"><input name="bot-field" /></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField dark={dark} name="fullName" label={f.fullName} required value={values.fullName} onChange={handleChange} error={errors.fullName} placeholder="John Smith" />
        <FormField dark={dark} name="email" label={f.email} type="email" required value={values.email} onChange={handleChange} error={errors.email} placeholder="john@email.com" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField dark={dark} name="phone" label={f.phone} type="tel" value={values.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
        <FormField
          dark={dark}
          name="tradeArea"
          label={f.tradeArea}
          type="select"
          required
          value={values.tradeArea}
          onChange={handleChange}
          error={errors.tradeArea}
          placeholder={f.selectTrade}
          options={f.tradeOptions}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          dark={dark}
          name="experience"
          label={f.yearsExp}
          type="select"
          value={values.experience}
          onChange={handleChange}
          placeholder={f.selectExp}
          options={f.expOptions}
        />
        <FormField
          dark={dark}
          name="availability"
          label={f.availability}
          type="select"
          value={values.availability}
          onChange={handleChange}
          placeholder={f.whenStart}
          options={f.availOptions}
        />
      </div>
      <FormField dark={dark} name="certifications" label={f.certifications} type="textarea" value={values.certifications} onChange={handleChange} placeholder={f.certPlaceholder} />

      <p className={`text-xs ${dark ? 'text-stone-dark' : 'text-ink-subtle'}`}>
        {f.resumeNote}{' '}
        <a href="mailto:careers@stellarlabor.com" className="text-emerald hover:text-emerald-light">
          careers@stellarlabor.com
        </a>
      </p>

      {errors._form && <p className="text-sm text-red-500">{errors._form}</p>}

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
        {isSubmitting ? f.submitting : f.submitApp}
      </Button>
    </form>
  )
}
