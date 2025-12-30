'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollAnimation, { StaggerContainer, StaggerItem } from '@/components/ScrollAnimation'

const services = [
  {
    title: 'Attic Insulation',
    description: 'Keep your home comfortable year-round with professional attic insulation services.',
    image: '/images/attic-insulation.jpg',
    href: '/attic-insulation/',
  },
  {
    title: 'Commercial Insulation',
    description: 'Efficient insulation solutions for businesses and commercial properties.',
    image: '/images/commercial-insulation.jpg',
    href: '/commercial-insulation/',
  },
  {
    title: 'Insulation Removal',
    description: 'We remove old or damaged materials to prepare your space for new, energy-efficient installation.',
    image: '/images/full-insulation-bag.jpg',
    href: '/insulation-removal/',
  },
  {
    title: 'Spray Foam Insulation',
    description: 'Superior air sealing and insulation with open-cell and closed-cell spray foam options.',
    image: '/images/hero-bg.jpg',
    href: '/spray-foam-insulation/',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Insulation services"
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
              Trusted Insulation Services in Seminole, TX, and Beyond
            </h1>
            <p className="text-gray-200 text-base md:text-lg mb-8">
              With a comprehensive range of services tailored to meet your needs, we&apos;re here to transform your spaces into comfortable, energy-efficient environments.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/contact-us/" className="btn-primary">
                Request a Free Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
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
                  src="/images/warehouse-insulation.jpg"
                  alt="Commercial warehouse with insulation"
                  width={600}
                  height={400}
                  className="w-full h-auto shadow-xl"
                />
              </motion.div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2}>
              <p className="section-subtitle mb-2">Your Comfort is Our Priority</p>
              <h2 className="section-title text-gray-800 mb-6">
                Work With Seminole&apos;s Insulation Specialists
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                At Desert Spray Foaming, we know that drafts, fluctuating temperatures, and high energy bills can make your space feel anything but cozy. That&apos;s where we come in. With our top-quality insulation services in Seminole and surrounding areas, we aim to create indoor environments that are not only comfortable but truly welcoming.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
                From the moment you step through your door, you&apos;ll feel the difference – a consistent temperature, reduced noise, and improved air quality. It&apos;s about more than just insulation; it&apos;s about creating a space where you can relax, unwind, and truly feel at home.
              </p>
              <Link href="/contact-us/" className="btn-secondary">
                Contact Our Team
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Grid Section - Matching Homepage */}
      <section className="py-16 md:py-20 overflow-hidden">
        <div className="container-custom">
          <ScrollAnimation className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-[34px] font-bold text-[#333333] uppercase tracking-[3px] md:tracking-[5px] leading-[1.3] mb-4">
              Our Comprehensive Insulation Services in Seminole, TX
            </h2>
            <h4 className="text-tan-gold text-xs md:text-[14px] font-medium uppercase tracking-[3px] md:tracking-[5px] leading-[1.3]">
              Elevate Your Space with Expert Insulation Solutions
            </h4>
          </ScrollAnimation>

          {/* 4 Service Cards - Same as Homepage */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0" staggerDelay={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.href}>
                <Link href={service.href} className="relative aspect-square group overflow-hidden block">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-purple-dark/70 transition-all duration-300 group-hover:bg-purple-dark/80" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-6">
                    <motion.div
                      initial={{ y: 0 }}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center"
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-[2px] md:tracking-[3px] mb-3 md:mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-200 text-xs md:text-sm tracking-[1px] leading-[1.6] mb-4 md:mb-6">
                        {service.description}
                      </p>
                      <span className="inline-block bg-[#46276A] group-hover:bg-tan-gold text-white font-bold uppercase text-xs md:text-sm tracking-[2px] px-4 py-2 transition-all duration-300">
                        Learn More
                      </span>
                    </motion.div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </>
  )
}
