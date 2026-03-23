'use client'

import { useState, ChangeEvent, FormEvent } from 'react'

interface UseNetlifyFormReturn {
  values: Record<string, string>
  errors: Record<string, string>
  isSubmitting: boolean
  isSuccess: boolean
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  handleSubmit: (e: FormEvent) => Promise<void>
  setFieldValue: (name: string, value: string) => void
}

export default function useNetlifyForm(
  formName: string,
  initialValues: Record<string, string>,
  requiredFields: string[] = []
): UseNetlifyFormReturn {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const setFieldValue = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}

    for (const field of requiredFields) {
      if (!values[field]?.trim()) {
        newErrors[field] = 'This field is required'
      }
    }

    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': formName,
          ...values,
        }).toString(),
      })

      if (response.ok) {
        setIsSuccess(true)
      } else {
        setErrors({ _form: 'Something went wrong. Please try again.' })
      }
    } catch {
      setErrors({ _form: 'Network error. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return { values, errors, isSubmitting, isSuccess, handleChange, handleSubmit, setFieldValue }
}
