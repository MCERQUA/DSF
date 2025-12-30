import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CTABanner from '@/components/CTABanner'
import Image from 'next/image'
import Link from 'next/link'
import { cities } from '@/data/cities'

export const metadata: Metadata = {
  title: 'Spray Foam Insulation | Desert Spray Foaming - Seminole, TX',
  description: 'Professional spray foam insulation services in Seminole, TX and surrounding areas. Superior air sealing and thermal performance for homes and businesses.',
}

export default function SprayFoamInsulationPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/spray-foam-insulation.jpg"
            alt="Spray Foam Insulation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-purple-dark/70" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide leading-tight mb-6">
              Spray Foam Insulation
            </h1>
            <p className="text-gray-200 text-lg mb-8">
              Experience superior air sealing and thermal performance with professional spray foam insulation from Desert Spray Foaming.
            </p>
            <Link href="/contact-us/" className="btn-primary">
              Request a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-gray-800 mb-6">
                Why Choose Spray Foam Insulation?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Spray foam insulation is one of the most effective insulation solutions available today. It expands to fill every gap, crack, and crevice, creating an airtight seal that traditional insulation simply cannot match.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-tan-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Superior air sealing prevents drafts and air leakage</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-tan-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Higher R-value per inch than traditional insulation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-tan-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Reduces energy costs significantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-tan-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Acts as a moisture and vapor barrier</span>
                </li>
              </ul>
              <Link href="/contact-us/" className="btn-secondary">
                Get a Free Quote
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/images/insulation-work.jpg"
                alt="Spray foam application"
                width={600}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Spray Foam */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-gray-800 text-center mb-12">
            Types of Spray Foam Insulation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-purple-dark uppercase mb-4">Open-Cell Spray Foam</h3>
              <p className="text-gray-600 mb-4">
                Open-cell spray foam is a lighter, more flexible option ideal for interior applications. It provides excellent sound dampening and is more cost-effective than closed-cell foam.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Great for interior walls and ceilings</li>
                <li>• Excellent sound absorption</li>
                <li>• More affordable option</li>
                <li>• Allows moisture to pass through</li>
              </ul>
            </div>
            <div className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-purple-dark uppercase mb-4">Closed-Cell Spray Foam</h3>
              <p className="text-gray-600 mb-4">
                Closed-cell spray foam is denser and provides a higher R-value per inch. It also adds structural strength and acts as a complete moisture barrier.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Higher R-value per inch</li>
                <li>• Adds structural strength</li>
                <li>• Complete moisture barrier</li>
                <li>• Ideal for exterior applications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-purple-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white uppercase mb-4">
                Get Your Free Spray Foam Quote
              </h2>
              <p className="text-gray-300 mb-8">
                Ready to upgrade your insulation? Contact us today for a free, no-obligation estimate.
              </p>
              <ContactForm darkBackground />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold text-tan-gold uppercase mb-4">
                Areas We Serve
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {cities.slice(0, 20).map((city) => (
                  <Link
                    key={city.slug}
                    href={`/spray-foam-insulation-${city.slug}-tx/`}
                    className="text-gray-300 hover:text-tan-gold text-sm"
                  >
                    {city.name}, TX
                  </Link>
                ))}
              </div>
              <Link href="/sitemap/" className="text-tan-gold mt-4 hover:underline">
                View all locations &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </>
  )
}
