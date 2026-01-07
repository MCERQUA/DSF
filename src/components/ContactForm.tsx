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
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formDataObj = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj as unknown as Record<string, string>).toString(),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          consent: false,
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (err) {
      console.error('Form submission error:', err)
      setError('There was a problem submitting your form. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className={`mb-6 ${darkBackground ? 'text-tan-gold' : 'text-purple-dark'}`}>
          <svg
            className="w-16 h-16 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className={`text-2xl font-bold mb-4 ${darkBackground ? 'text-white' : 'text-gray-800'}`}>
          Thank You!
        </h3>
        <p className={`mb-6 ${darkBackground ? 'text-gray-300' : 'text-gray-600'}`}>
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
        <p className={`text-sm ${darkBackground ? 'text-gray-400' : 'text-gray-500'}`}>
          Need immediate assistance? Call us at{' '}
          <a
            href="tel:432-300-7950"
            className={`font-semibold ${darkBackground ? 'text-tan-gold hover:text-white' : 'text-purple-dark hover:text-purple-light'}`}
          >
            432-300-7950
          </a>
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className={`mt-6 text-sm underline ${darkBackground ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`}
        >
          Submit another message
        </button>
      </div>
    )
  }

  const inputClasses = darkBackground
    ? 'w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/60 focus:border-tan-gold focus:outline-none transition-colors'
    : 'w-full px-4 py-3 border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-purple-dark focus:outline-none transition-colors'

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={className}
    >
      {/* Hidden fields for Netlify Forms */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          className={inputClasses}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          className={inputClasses}
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className={`${inputClasses} mb-4`}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className={`${inputClasses} mb-4`}
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className={`${inputClasses} mb-4 resize-y`}
      />

      <label className={`flex items-start gap-3 mb-6 cursor-pointer ${darkBackground ? 'text-gray-300' : 'text-gray-600'}`}>
        <input
          type="checkbox"
          name="consent"
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
        {isSubmitting ? 'Submitting...' : 'Get Your Free Quote'}
      </button>
    </form>
  )
}
