import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import ServiceCard from '@/components/ServiceCard'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services | Desert Spray Foaming - Insulation Services in Seminole, TX',
  description: 'Explore our comprehensive insulation services including spray foam, attic insulation, commercial insulation, and insulation removal in Seminole, TX.',
}

const services = [
  {
    title: 'Attic Insulation',
    description: 'Improve your home\'s energy efficiency with professional attic insulation services.',
    image: '/images/attic-insulation.jpg',
    href: '/attic-insulation/',
  },
  {
    title: 'Commercial Insulation',
    description: 'Comprehensive insulation solutions for commercial and industrial buildings.',
    image: '/images/commercial-insulation.jpg',
    href: '/commercial-insulation/',
  },
  {
    title: 'Insulation Removal',
    description: 'We remove old or damaged materials to prepare your space for new, energy-efficient installation.',
    image: '/images/insulation-removal.jpg',
    href: '/insulation-removal/',
  },
  {
    title: 'Spray Foam Insulation',
    description: 'Superior air sealing and thermal performance with professional spray foam application.',
    image: '/images/spray-foam-insulation.jpg',
    href: '/spray-foam-insulation/',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center">
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

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide leading-tight mb-6">
              Trusted Insulation Services in Seminole, TX, and Beyond
            </h1>
            <p className="text-gray-200 text-lg mb-8">
              With a comprehensive range of services tailored to meet your needs, we&apos;re here to transform your spaces into comfortable, energy-efficient environments.
            </p>
            <Link href="/contact-us/" className="btn-primary">
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-2 bg-purple-dark" />
              <Image
                src="/images/warehouse-insulation.jpg"
                alt="Commercial warehouse with insulation"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <p className="section-subtitle mb-2">Your Comfort is Our Priority</p>
              <h2 className="section-title text-gray-800 mb-6">
                Work With Seminole&apos;s Insulation Specialists
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Desert Spray Foaming, we know that drafts, fluctuating temperatures, and high energy bills can make your space feel anything but cozy. That&apos;s where we come in. With our top-quality insulation services in Seminole and surrounding areas, we aim to create indoor environments that are not only comfortable but truly welcoming.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From the moment you step through your door, you&apos;ll feel the difference – a consistent temperature, reduced noise, and improved air quality. It&apos;s about more than just insulation; it&apos;s about creating a space where you can relax, unwind, and truly feel at home.
              </p>
              <Link href="/contact-us/" className="btn-secondary">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title text-gray-800 mb-4">
              Our Comprehensive Insulation Services in Seminole, TX
            </h2>
            <p className="section-subtitle">
              Elevate Your Space with Expert Insulation Solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </>
  )
}
