'use client'

import { useState } from 'react'

interface ContactFormProps {
  className?: string
  darkBackground?: boolean
}

export default function ContactForm({ className = '', darkBackground = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In production, this would send to your form handler
    // For now, we'll just simulate a submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)
  }

  if (submitted) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <h3 className={`text-2xl font-bold mb-4 ${darkBackground ? 'text-white' : 'text-gray-800'}`}>
          Thank You!
        </h3>
        <p className={darkBackground ? 'text-gray-300' : 'text-gray-600'}>
          We&apos;ve received your message and will get back to you shortly.
        </p>
      </div>
    )
  }

  const inputClasses = darkBackground
    ? 'w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/60 focus:border-tan-gold focus:outline-none transition-colors'
    : 'w-full px-4 py-3 border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-purple-dark focus:outline-none transition-colors'

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="First Name"
          required
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          className={inputClasses}
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          className={inputClasses}
        />
      </div>

      <input
        type="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className={`${inputClasses} mb-4`}
      />

      <input
        type="tel"
        placeholder="Phone Number"
        required
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className={`${inputClasses} mb-4`}
      />

      <textarea
        placeholder="Your Message"
        rows={5}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className={`${inputClasses} mb-4 resize-y`}
      />

      <label className={`flex items-start gap-3 mb-6 cursor-pointer ${darkBackground ? 'text-gray-300' : 'text-gray-600'}`}>
        <input
          type="checkbox"
          required
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-1 w-4 h-4"
        />
        <span className="text-sm">
          By checking this box you agree to be contacted by us via email, SMS, and phone calls for the purpose of receiving your consultation.
        </span>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}
