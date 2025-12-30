import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CTABanner from '@/components/CTABanner'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Contact Us | Desert Spray Foaming - Get a Free Quote',
  description: 'Contact Desert Spray Foaming for a free insulation quote. Call 432-300-7950 or fill out our form. Serving Seminole, TX and surrounding areas.',
}

export default function ContactUsPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Contact Desert Spray Foaming"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-purple-dark/60" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-gray-200 text-lg">
              We&apos;re here to answer any questions you may have and provide assistance with your project. Call us today or drop us a message, and we&apos;ll get back to you promptly. Our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="section-subtitle mb-4">Top-Quality Insulation Solutions Await!</p>
              <ContactForm />
            </div>
            <div className="bg-gray-200 min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.8984!2d-102.6458!3d32.7193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQzJzA5LjUiTiAxMDLCsDM4JzQ0LjkiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Desert Spray Foaming Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white p-8 text-center shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-dark rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 uppercase mb-2">Phone</h3>
              <a href="tel:432-300-7950" className="text-purple-dark hover:text-tan-gold transition-colors text-lg">
                432-300-7950
              </a>
            </div>

            {/* Email */}
            <div className="bg-white p-8 text-center shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-dark rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 uppercase mb-2">Email</h3>
              <a href="mailto:klass@desertsprayfoaming.com" className="text-purple-dark hover:text-tan-gold transition-colors">
                klass@desertsprayfoaming.com
              </a>
            </div>

            {/* Address */}
            <div className="bg-white p-8 text-center shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-dark rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 uppercase mb-2">Address</h3>
              <p className="text-gray-600">
                150 Fm 1429<br />
                Seminole, TX 79360
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </>
  )
}
