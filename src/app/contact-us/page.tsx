'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CTABanner from '@/components/CTABanner'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollAnimation, { StaggerContainer, StaggerItem } from '@/components/ScrollAnimation'

export default function ContactUsPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[350px] md:min-h-[400px] flex items-center overflow-hidden">
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

        <div className="container-custom relative z-10 py-16 md:py-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-gray-200 text-base md:text-lg">
              We&apos;re here to answer any questions you may have and provide assistance with your project. Call us today or drop us a message, and we&apos;ll get back to you promptly. Our team is ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 md:py-20 overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <ScrollAnimation direction="left">
              <p className="section-subtitle mb-4">Top-Quality Insulation Solutions Await!</p>
              <ContactForm />
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="bg-gray-200 min-h-[400px] md:min-h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.8984!2d-102.6458!3d32.7193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQzJzA5LjUiTiAxMDLCsDM4JzQ0LjkiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Desert Spray Foaming Location"
                  className="md:min-h-[500px]"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" staggerDelay={0.15}>
            {/* Phone */}
            <StaggerItem>
              <motion.div
                className="bg-white p-6 md:p-8 text-center shadow-sm rounded-lg"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 bg-purple-dark rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </motion.div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 uppercase mb-2">Phone</h3>
                <a href="tel:432-300-7950" className="text-purple-dark hover:text-tan-gold transition-colors text-base md:text-lg">
                  432-300-7950
                </a>
              </motion.div>
            </StaggerItem>

            {/* Email */}
            <StaggerItem>
              <motion.div
                className="bg-white p-6 md:p-8 text-center shadow-sm rounded-lg"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 bg-purple-dark rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 uppercase mb-2">Email</h3>
                <a href="mailto:klass@desertsprayfoaming.com" className="text-purple-dark hover:text-tan-gold transition-colors text-sm md:text-base break-all">
                  klass@desertsprayfoaming.com
                </a>
              </motion.div>
            </StaggerItem>

            {/* Address */}
            <StaggerItem>
              <motion.div
                className="bg-white p-6 md:p-8 text-center shadow-sm rounded-lg"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 bg-purple-dark rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </motion.div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 uppercase mb-2">Address</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  150 Fm 1429<br />
                  Seminole, TX 79360
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </>
  )
}
