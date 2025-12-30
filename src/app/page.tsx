import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CTABanner from '@/components/CTABanner'
import ServiceCard from '@/components/ServiceCard'
import Image from 'next/image'
import Link from 'next/link'

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

const benefits = [
  {
    icon: (
      <svg className="w-10 h-10 text-purple-dark" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    text: 'Say goodbye to drafts and temperature fluctuations. Our insulation solutions create a consistent and comfortable indoor climate.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-purple-dark" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    text: 'Reduce energy consumption and save on utility bills with our energy-efficient insulation.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-purple-dark" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    text: 'Keep allergens and pollutants at bay with proper insulation, ensuring a healthier living space for you and your family.',
  },
]

const steps = [
  {
    number: 1,
    title: 'Consultation',
    description: 'We begin with a thorough consultation to understand your needs and assess your space.',
    icon: (
      <svg className="w-12 h-12 text-purple-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Customized Solution',
    description: 'Based on our assessment, we propose an insulation solution and provide you with a free quote.',
    icon: (
      <svg className="w-12 h-12 text-purple-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Professional Installation',
    description: 'Our experienced team insulates your property, ensuring optimal performance and long-lasting results.',
    icon: (
      <svg className="w-12 h-12 text-purple-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Spray foam insulation being applied"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-purple-dark/60" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide leading-tight mb-6">
                Top-Quality Insulation Solutions in Seminole, TX
              </h1>
              <p className="text-gray-200 text-lg mb-8">
                At Desert Spray Foaming, we prioritize your comfort and well-being. Our expert insulation services allow you to enjoy a cozy, energy-efficient, and healthy indoor environment year-round.
              </p>
              <Link href="/contact-us/" className="btn-primary">
                Request a Free Estimate
              </Link>
            </div>

            {/* Right Form */}
            <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
              <ContactForm darkBackground />
            </div>
          </div>
        </div>
      </section>

      {/* Insulation Tailored Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-2 bg-purple-dark" />
              <Image
                src="/images/insulation-work.jpg"
                alt="Insulation work in progress"
                width={600}
                height={450}
                className="w-full h-auto"
              />
            </div>
            <div>
              <p className="section-subtitle mb-2">Exceptional Service and Results</p>
              <h2 className="section-title text-gray-800 mb-6">
                Insulation Tailored to Your Needs
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We understand how crucial it is to have a comfortable, and energy-efficient home or business. Our team of insulation experts isn&apos;t just about delivering results; we&apos;re here to listen to your needs, understand your concerns, and ensure that every detail is just right for you. So whether you&apos;re looking to save on energy bills, enjoy some peace and quiet, or simply cozy up in your home, we&apos;re here to make it happen, with care and dedication every step of the way.
              </p>
              <Link href="/contact-us/" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title text-gray-800 mb-4">
                Experience the Benefits of Superior Insulation
              </h2>
              <p className="section-subtitle mb-6">
                Transform Your Space for Lasting Comfort and Efficiency
              </p>
              <p className="text-gray-600 leading-relaxed">
                Discover how our advanced insulation solutions in Seminole, TX, and surrounding areas can revolutionize your indoor environment, providing unmatched comfort, savings, and peace of mind.
              </p>
            </div>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">{benefit.icon}</div>
                  <p className="text-gray-600">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
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

      {/* 3-Step Process */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="section-title text-gray-800 mb-2">Our 3-Step Process</h2>
              <p className="section-subtitle">How It Works</p>
            </div>
            <Link href="/contact-us/" className="btn-secondary mt-4 md:mt-0">
              Get Started
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 uppercase mb-3">
                  Step {step.number}: {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/about-bg.jpg"
            alt="Spray foam application"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-purple-dark/80" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <p className="text-tan-gold uppercase tracking-wider font-semibold mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-6">
              Introducing Desert Spray Foaming
            </h2>
            <p className="text-gray-200 leading-relaxed mb-8">
              With over 6 years of experience in the insulation industry and a passion for his work, Klass started Desert Spray Foaming in 2023. Our mission is to provide value, a comfortable indoor environment, customer satisfaction, affordable pricing, and a quality product. Whether commercial or residential, big or small, we&apos;ve got you covered with our range of services, including open-cell and closed-cell spray foam options, attic insulation, and insulation removal. At Desert Spray Foaming, we&apos;re not just about insulation but about creating lasting relationships and spaces you&apos;ll love.
            </p>
            <Link href="/contact-us/" className="btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-purple-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-tan-gold uppercase tracking-wider font-semibold mb-2">
                Top-Quality Insulation Solutions Await!
              </p>
              <ContactForm darkBackground />
            </div>
            <div className="bg-gray-200 min-h-[400px] flex items-center justify-center">
              {/* Google Map placeholder - will be replaced with actual embed */}
              <div className="w-full h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.8984!2d-102.6458!3d32.7193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQzJzA5LjUiTiAxMDLCsDM4JzQ0LjkiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </>
  )
}
