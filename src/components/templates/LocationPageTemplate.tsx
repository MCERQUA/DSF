import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CTABanner from '@/components/CTABanner'
import Image from 'next/image'
import Link from 'next/link'
import { cities, services } from '@/data/cities'

interface LocationPageTemplateProps {
  serviceName: string
  serviceSlug: string
  serviceDescription: string
  cityName: string
  citySlug: string
  county: string
  nearbyAreas: string[]
}

export default function LocationPageTemplate({
  serviceName,
  serviceSlug,
  serviceDescription,
  cityName,
  citySlug,
  county,
  nearbyAreas,
}: LocationPageTemplateProps) {
  // Get service-specific image
  const serviceImage = `/images/${serviceSlug}.jpg`

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={serviceImage}
            alt={`${serviceName} in ${cityName}, TX`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-purple-dark/70" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide leading-tight mb-6">
              {serviceName} in {cityName}, TX
            </h1>
            <p className="text-gray-200 text-lg mb-8">
              Professional {serviceName.toLowerCase()} services for homes and businesses in {cityName} and throughout {county}. Desert Spray Foaming delivers comfort, efficiency, and quality you can trust.
            </p>
            <Link href="/contact-us/" className="btn-primary">
              Request a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-2 bg-purple-dark" />
              <Image
                src="/images/insulation-work.jpg"
                alt={`${serviceName} work in ${cityName}`}
                width={600}
                height={450}
                className="w-full h-auto"
              />
            </div>
            <div>
              <p className="section-subtitle mb-2">Expert Insulation Services</p>
              <h2 className="section-title text-gray-800 mb-6">
                Professional {serviceName} in {cityName}, TX
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {serviceDescription}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Desert Spray Foaming, we understand the unique insulation needs of {cityName} residents and businesses. Our experienced team provides top-quality {serviceName.toLowerCase()} solutions tailored to your specific requirements, ensuring maximum comfort and energy efficiency.
              </p>
              <Link href="/contact-us/" className="btn-secondary">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title text-gray-800 mb-4">
              Why Choose Desert Spray Foaming in {cityName}?
            </h2>
            <p className="section-subtitle">
              Benefits of Professional {serviceName}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-dark rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 uppercase mb-3">Energy Savings</h3>
              <p className="text-gray-600">
                Reduce your energy bills significantly with proper insulation that keeps your space comfortable year-round.
              </p>
            </div>

            <div className="bg-white p-8 text-center shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-dark rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 uppercase mb-3">Improved Comfort</h3>
              <p className="text-gray-600">
                Enjoy consistent temperatures throughout your home or business, eliminating hot and cold spots.
              </p>
            </div>

            <div className="bg-white p-8 text-center shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-dark rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 uppercase mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">
                Our experienced team uses only the highest quality materials and follows industry best practices.
              </p>
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
                Get a Free {serviceName} Quote in {cityName}
              </h2>
              <p className="text-gray-300 mb-8">
                Ready to improve your property&apos;s comfort and energy efficiency? Contact us today for a free, no-obligation quote.
              </p>
              <ContactForm darkBackground />
            </div>
            <div className="bg-gray-200 min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.8984!2d-102.6458!3d32.7193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQzJzA5LjUiTiAxMDLCsDM4JzQ0LjkiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Desert Spray Foaming serves ${cityName}, TX`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h3 className="text-2xl font-bold text-gray-800 uppercase mb-6">
            {serviceName} Services Near {cityName}
          </h3>
          <p className="text-gray-600 mb-6">
            We proudly serve {cityName} and the surrounding {county} area. Check out our {serviceName.toLowerCase()} services in nearby communities:
          </p>
          <div className="flex flex-wrap gap-4">
            {nearbyAreas.map((area) => {
              const areaCity = cities.find(c => c.name === area)
              if (!areaCity) return null
              return (
                <Link
                  key={area}
                  href={`/${serviceSlug}-${areaCity.slug}-tx/`}
                  className="text-purple-dark hover:text-tan-gold transition-colors underline"
                >
                  {serviceName} in {area}, TX
                </Link>
              )
            })}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-300">
            <h4 className="text-lg font-bold text-gray-800 uppercase mb-4">
              Other Insulation Services in {cityName}
            </h4>
            <div className="flex flex-wrap gap-4">
              {services
                .filter(s => s.slug !== serviceSlug)
                .slice(0, 4)
                .map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}-${citySlug}-tx/`}
                    className="text-purple-dark hover:text-tan-gold transition-colors underline"
                  >
                    {service.name} in {cityName}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title={`NEED ${serviceName.toUpperCase()} IN ${cityName.toUpperCase()}, TX,`}
        highlightText="AND SURROUNDING AREAS?"
      />

      <Footer />
    </>
  )
}
