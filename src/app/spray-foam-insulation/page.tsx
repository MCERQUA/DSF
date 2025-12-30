'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CTABanner from '@/components/CTABanner'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollAnimation, { StaggerContainer, StaggerItem } from '@/components/ScrollAnimation'
import { cities } from '@/data/cities'

export default function SprayFoamInsulationPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
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

        <div className="container-custom relative z-10 py-16 md:py-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide leading-tight mb-6">
              Spray Foam Insulation
            </h1>
            <p className="text-gray-200 text-base md:text-lg mb-8">
              Experience superior air sealing and thermal performance with professional spray foam insulation from Desert Spray Foaming.
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

      {/* Service Details */}
      <section className="py-16 md:py-20 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollAnimation direction="left">
              <h2 className="section-title text-gray-800 mb-6">
                Why Choose Spray Foam Insulation?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Spray foam insulation is one of the most effective insulation solutions available today. It expands to fill every gap, crack, and crevice, creating an airtight seal that traditional insulation simply cannot match.
              </p>
              <StaggerContainer className="space-y-3 md:space-y-4 mb-8" staggerDelay={0.1}>
                {[
                  'Superior air sealing prevents drafts and air leakage',
                  'Higher R-value per inch than traditional insulation',
                  'Reduces energy costs significantly',
                  'Acts as a moisture and vapor barrier'
                ].map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-tan-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 text-sm md:text-base">{item}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <Link href="/contact-us/" className="btn-secondary">
                Get a Free Quote
              </Link>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2}>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/insulation-work.jpg"
                  alt="Spray foam application"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </motion.div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Types of Spray Foam */}
      <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
        <div className="container-custom">
          <ScrollAnimation className="text-center mb-8 md:mb-12">
            <h2 className="section-title text-gray-800">
              Types of Spray Foam Insulation
            </h2>
          </ScrollAnimation>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" staggerDelay={0.2}>
            <StaggerItem>
              <motion.div
                className="bg-white p-6 md:p-8 shadow-sm rounded-lg h-full"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg md:text-xl font-bold text-purple-dark uppercase mb-4">Open-Cell Spray Foam</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Open-cell spray foam is a lighter, more flexible option ideal for interior applications. It provides excellent sound dampening and is more cost-effective than closed-cell foam.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm md:text-base">
                  <li>• Great for interior walls and ceilings</li>
                  <li>• Excellent sound absorption</li>
                  <li>• More affordable option</li>
                  <li>• Allows moisture to pass through</li>
                </ul>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div
                className="bg-white p-6 md:p-8 shadow-sm rounded-lg h-full"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg md:text-xl font-bold text-purple-dark uppercase mb-4">Closed-Cell Spray Foam</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  Closed-cell spray foam is denser and provides a higher R-value per inch. It also adds structural strength and acts as a complete moisture barrier.
                </p>
                <ul className="text-gray-600 space-y-2 text-sm md:text-base">
                  <li>• Higher R-value per inch</li>
                  <li>• Adds structural strength</li>
                  <li>• Complete moisture barrier</li>
                  <li>• Ideal for exterior applications</li>
                </ul>
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
                Get Your Free Spray Foam Quote
              </h2>
              <p className="text-gray-300 mb-8 text-sm md:text-base">
                Ready to upgrade your insulation? Contact us today for a free, no-obligation estimate.
              </p>
              <ContactForm darkBackground />
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2} className="flex flex-col justify-center">
              <h3 className="text-lg md:text-xl font-bold text-tan-gold uppercase mb-4">
                Areas We Serve
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {cities.slice(0, 20).map((city) => (
                  <Link
                    key={city.slug}
                    href={`/spray-foam-insulation-${city.slug}-tx/`}
                    className="text-gray-300 hover:text-tan-gold text-xs md:text-sm transition-colors"
                  >
                    {city.name}, TX
                  </Link>
                ))}
              </div>
              <Link href="/sitemap/" className="text-tan-gold mt-4 hover:underline text-sm md:text-base">
                View all locations &rarr;
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </>
  )
}
