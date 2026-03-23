interface FormFieldProps {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  placeholder?: string
  required?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  error?: string
  options?: string[]
  dark?: boolean
}

export default function FormField({
  name,
  label,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
  error,
  options,
  dark = false,
}: FormFieldProps) {
  const baseClasses = dark
    ? 'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-cream text-sm placeholder:text-stone-dark focus:outline-none focus:border-emerald/50 focus:ring-1 focus:ring-emerald/50 transition-colors'
    : 'w-full bg-white border border-stone rounded-xl px-4 py-3.5 text-ink text-sm placeholder:text-ink-subtle/50 focus:outline-none focus:border-emerald/50 focus:ring-1 focus:ring-emerald/50 transition-colors'

  return (
    <div>
      <label htmlFor={name} className={`block text-sm font-medium mb-2 ${dark ? 'text-stone-dark' : 'text-ink-muted'}`}>
        {label}
        {required && <span className="text-emerald ml-1">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={4}
          className={`${baseClasses} resize-none`}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      ) : type === 'select' ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseClasses} appearance-none`}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        >
          <option value="">{placeholder || 'Select...'}</option>
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={baseClasses}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      )}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
