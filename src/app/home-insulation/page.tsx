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

export default function HomeInsulationPage() {
  return (
    <>
      <Header />

      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/home-insulation.jpg" alt="Home Insulation" fill className="object-cover" priority />
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
              Home Insulation
            </h1>
            <p className="text-gray-200 text-base md:text-lg mb-8">
              Comprehensive home insulation solutions to enhance comfort, reduce energy costs, and create a healthier living environment for your family.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/contact-us/" className="btn-primary">Request a Free Estimate</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollAnimation direction="left">
              <h2 className="section-title text-gray-800 mb-6">Complete Home Insulation Solutions</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                Your home deserves the best protection against the West Texas elements. Our comprehensive home insulation services cover every area of your house, from the attic to the crawl space, ensuring maximum comfort and energy efficiency year-round.
              </p>
              <StaggerContainer className="space-y-3 md:space-y-4 mb-8" staggerDelay={0.1}>
                {[
                  'Whole-home energy efficiency improvements',
                  'Reduced heating and cooling costs',
                  'Improved indoor air quality',
                  'Enhanced comfort in every room'
                ].map((item, index) => (
                  <StaggerItem key={index}>
                    <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-tan-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 text-sm md:text-base">{item}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <Link href="/contact-us/" className="btn-secondary">Get a Free Quote</Link>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Image src="/images/insulation-work.jpg" alt="Home insulation installation" width={600} height={450} className="w-full h-auto rounded-lg shadow-xl" />
              </motion.div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-purple-dark overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <ScrollAnimation direction="left">
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase mb-4">Get Your Free Home Insulation Quote</h2>
              <ContactForm darkBackground />
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2} className="flex flex-col justify-center">
              <h3 className="text-lg md:text-xl font-bold text-tan-gold uppercase mb-4">Areas We Serve</h3>
              <div className="grid grid-cols-2 gap-2">
                {cities.slice(0, 20).map((city) => (
                  <Link key={city.slug} href={`/home-insulation-${city.slug}-tx/`} className="text-gray-300 hover:text-tan-gold text-xs md:text-sm transition-colors">
                    {city.name}, TX
                  </Link>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  )
}
