'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CTABanner from '@/components/CTABanner'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollAnimation, { StaggerContainer, StaggerItem } from '@/components/ScrollAnimation'
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
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
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

        <div className="container-custom relative z-10 py-16 md:py-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide leading-tight mb-6">
              {serviceName} in {cityName}, TX
            </h1>
            <p className="text-gray-200 text-base md:text-lg mb-8">
              Professional {serviceName.toLowerCase()} services for homes and businesses in {cityName} and throughout {county}. Desert Spray Foaming delivers comfort, efficiency, and quality you can trust.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/contact-us/" className="btn-primary">
                Request a Free Estimate
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="py-16 md:py-20 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollAnimation direction="left">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -top-4 -left-4 w-full h-2 bg-purple-dark" />
                <Image
                  src="/images/insulation-work.jpg"
                  alt={`${serviceName} work in ${cityName}`}
                  width={600}
                  height={450}
                  className="w-full h-auto shadow-xl"
                />
              </motion.div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2}>
              <p className="section-subtitle mb-2">Expert Insulation Services in {cityName}</p>
              <h2 className="section-title text-gray-800 mb-6">
                Professional {serviceName} in {cityName}, TX
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                {serviceDescription}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                At Desert Spray Foaming, we understand the unique insulation needs of {cityName} residents and businesses in {county}. The West Texas climate presents challenges with extreme heat in summer and cold winters, making quality insulation essential. Our experienced team provides top-quality {serviceName.toLowerCase()} solutions tailored to {cityName}&apos;s specific climate requirements, ensuring maximum comfort and energy efficiency year-round.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                Whether you&apos;re a homeowner in {cityName} looking to reduce energy bills or a business owner needing commercial insulation services, Desert Spray Foaming has the expertise to deliver exceptional results. We serve all of {cityName}, TX and the surrounding {county} communities.
              </p>
              <Link href="/contact-us/" className="btn-secondary">
                Contact Our {cityName} Team
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-16 md:py-20 overflow-hidden">
        <div className="container-custom">
          <ScrollAnimation className="text-center mb-8 md:mb-12">
            <h2 className="section-title text-gray-800 mb-4">
              Common Insulation Problems We Solve in {cityName}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {cityName} homes and businesses face unique challenges. Here&apos;s how {serviceName.toLowerCase()} can help:
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              { title: 'High Energy Bills', description: `Reduce your ${cityName} energy costs by up to 50% with proper insulation that prevents heat transfer.` },
              { title: 'Uneven Temperatures', description: `Eliminate hot and cold spots in your ${cityName} home for consistent comfort in every room.` },
              { title: 'Dust & Allergens', description: `Spray foam creates an air barrier that keeps ${county} dust and allergens out of your living space.` },
              { title: 'Moisture Problems', description: `Prevent condensation and moisture damage common in ${cityName} buildings with closed-cell foam.` },
              { title: 'Noise Reduction', description: `Enjoy a quieter home by blocking outside noise from ${cityName} traffic and neighbors.` },
              { title: 'Pest Prevention', description: `Seal gaps and cracks that allow pests to enter your ${cityName} property.` },
            ].map((problem, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-gray-50 p-6 rounded-lg"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6 text-tan-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <h3 className="font-bold text-gray-800">{problem.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{problem.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
        <div className="container-custom">
          <ScrollAnimation className="text-center mb-8 md:mb-12">
            <h2 className="section-title text-gray-800 mb-4">
              Why Choose Desert Spray Foaming in {cityName}?
            </h2>
            <p className="section-subtitle">
              Benefits of Professional {serviceName}
            </p>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" staggerDelay={0.15}>
            <StaggerItem>
              <motion.div
                className="bg-white p-6 md:p-8 text-center shadow-sm rounded-lg"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 bg-purple-dark rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 uppercase mb-3">Energy Savings</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Reduce your energy bills significantly with proper insulation that keeps your space comfortable year-round.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                className="bg-white p-6 md:p-8 text-center shadow-sm rounded-lg"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 bg-purple-dark rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </motion.div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 uppercase mb-3">Improved Comfort</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Enjoy consistent temperatures throughout your home or business, eliminating hot and cold spots.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                className="bg-white p-6 md:p-8 text-center shadow-sm rounded-lg"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 bg-purple-dark rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </motion.div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 uppercase mb-3">Quality Guaranteed</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Our experienced team uses only the highest quality materials and follows industry best practices.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 bg-purple-dark overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <ScrollAnimation direction="left">
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase mb-4">
                Get a Free {serviceName} Quote in {cityName}
              </h2>
              <p className="text-gray-300 mb-8 text-sm md:text-base">
                Ready to improve your property&apos;s comfort and energy efficiency? Contact us today for a free, no-obligation quote.
              </p>
              <ContactForm darkBackground />
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="bg-gray-200 min-h-[350px] md:min-h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.8984!2d-102.6458!3d32.7193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQzJzA5LjUiTiAxMDLCsDM4JzQ0LjkiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '350px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Desert Spray Foaming serves ${cityName}, TX`}
                  className="md:min-h-[400px]"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Nearby Areas Section */}
      <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
        <div className="container-custom">
          <ScrollAnimation>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 uppercase mb-6">
              {serviceName} Services Near {cityName}
            </h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              We proudly serve {cityName} and the surrounding {county} area. Check out our {serviceName.toLowerCase()} services in nearby communities:
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {nearbyAreas.map((area) => {
                const areaCity = cities.find(c => c.name === area)
                if (!areaCity) return null
                return (
                  <Link
                    key={area}
                    href={`/${serviceSlug}-${areaCity.slug}-tx/`}
                    className="text-purple-dark hover:text-tan-gold transition-colors underline text-sm md:text-base"
                  >
                    {serviceName} in {area}, TX
                  </Link>
                )
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-300">
              <h4 className="text-base md:text-lg font-bold text-gray-800 uppercase mb-4">
                Other Insulation Services in {cityName}
              </h4>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {services
                  .filter(s => s.slug !== serviceSlug)
                  .slice(0, 4)
                  .map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}-${citySlug}-tx/`}
                      className="text-purple-dark hover:text-tan-gold transition-colors underline text-sm md:text-base"
                    >
                      {service.name} in {cityName}
                    </Link>
                  ))}
              </div>
            </div>
          </ScrollAnimation>
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
