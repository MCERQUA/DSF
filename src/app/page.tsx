import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CTABanner from '@/components/CTABanner'
import Image from 'next/image'
import Link from 'next/link'

const benefits = [
  {
    text: 'Say goodbye to drafts and temperature fluctuations. Our insulation solutions create a consistent and comfortable indoor climate.',
  },
  {
    text: 'Reduce energy consumption and save on utility bills with our energy-efficient insulation.',
  },
  {
    text: 'Keep allergens and pollutants at bay with proper insulation, ensuring a healthier living space for you and your family.',
  },
]

const steps = [
  {
    number: 1,
    title: 'Consultation',
    description: 'We begin with a thorough consultation to understand your needs and assess your space.',
  },
  {
    number: 2,
    title: 'Customized Solution',
    description: 'Based on our assessment, we propose an insulation solution and provide you with a free quote.',
  },
  {
    number: 3,
    title: 'Professional Installation',
    description: 'Our experienced team insulates your property, ensuring optimal performance and long-lasting results.',
  },
]

// Spray bottle icon component
const SprayBottleIcon = () => (
  <svg className="w-10 h-10 text-purple-dark" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C11.45 2 11 2.45 11 3V5H9V3C9 2.45 8.55 2 8 2C7.45 2 7 2.45 7 3V5.08C5.84 5.56 5 6.7 5 8V10L3 12V14H5V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V14H21V12L19 10V8C19 6.7 18.16 5.56 17 5.08V3C17 2.45 16.55 2 16 2C15.45 2 15 2.45 15 3V5H13V3C13 2.45 12.55 2 12 2ZM7 8H17V10H7V8ZM7 14H17V20H7V14Z"/>
    <circle cx="19" cy="5" r="2" fill="currentColor" opacity="0.5"/>
    <circle cx="21" cy="3" r="1" fill="currentColor" opacity="0.3"/>
    <circle cx="22" cy="6" r="1.5" fill="currentColor" opacity="0.4"/>
  </svg>
)

// Phone icon
const PhoneIcon = () => (
  <svg className="w-12 h-12 text-purple-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

// Document icon
const DocumentIcon = () => (
  <svg className="w-12 h-12 text-purple-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

// Building icon
const BuildingIcon = () => (
  <svg className="w-12 h-12 text-purple-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG-20240227-WA0561.jpg"
            alt="Spray foam insulation being applied"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-purple-dark/50" />
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

      {/* Purple Divider Bar */}
      <div className="h-16 bg-purple-dark" />

      {/* Insulation Tailored Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image with purple bar ABOVE */}
            <div className="relative">
              <div className="absolute -top-4 left-0 w-3/4 h-3 bg-purple-dark" />
              <Image
                src="/images/insulation-work.jpg"
                alt="Insulation work in progress"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>
            {/* Right - Text */}
            <div>
              <p className="text-tan-gold uppercase tracking-widest font-semibold mb-2 text-sm">
                Exceptional Service and Results
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide mb-6">
                Insulation Tailored to Your Needs
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
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
      <section className="py-20 bg-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Title */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide mb-4">
                Experience the Benefits of Superior Insulation
              </h2>
              <p className="text-tan-gold uppercase tracking-widest font-semibold mb-6 text-sm">
                Transform Your Space for Lasting Comfort and Efficiency
              </p>
              <p className="text-gray-600 leading-relaxed">
                Discover how our advanced insulation solutions in Seminole, TX, and surrounding areas can revolutionize your indoor environment, providing unmatched comfort, savings, and peace of mind.
              </p>
            </div>
            {/* Right - Benefits List */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <SprayBottleIcon />
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide mb-4">
              Our Comprehensive Insulation Services in Seminole, TX
            </h2>
            <p className="text-tan-gold uppercase tracking-widest font-semibold text-sm">
              Elevate Your Space with Expert Insulation Solutions
            </p>
          </div>

          {/* 4 Service Images in a Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {/* Service 1 - Attic Insulation */}
            <Link href="/attic-insulation/" className="relative aspect-square group overflow-hidden">
              <Image
                src="/images/attic-insulation.jpg"
                alt="Attic Insulation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </Link>

            {/* Service 2 - Commercial Insulation */}
            <Link href="/commercial-insulation/" className="relative aspect-square group overflow-hidden">
              <Image
                src="/images/commercial-insulation.jpg"
                alt="Commercial Insulation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </Link>

            {/* Service 3 - Insulation Removal (with text overlay) */}
            <Link href="/insulation-removal/" className="relative aspect-square group overflow-hidden">
              <Image
                src="/images/insulation-removal.jpg"
                alt="Insulation Removal"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-purple-dark/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-3">
                  Insulation Removal
                </h3>
                <p className="text-gray-200 text-sm mb-4">
                  We remove old or damaged materials to prepare your space for new, energy-efficient installation.
                </p>
                <span className="btn-secondary text-sm">
                  Learn More
                </span>
              </div>
            </Link>

            {/* Service 4 - Spray Foam Insulation */}
            <Link href="/spray-foam-insulation/" className="relative aspect-square group overflow-hidden">
              <Image
                src="/images/spray-foam-insulation.jpg"
                alt="Spray Foam Insulation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide mb-2">
                Our 3-Step Process
              </h2>
              <p className="text-tan-gold uppercase tracking-widest font-semibold text-sm">
                How It Works
              </p>
            </div>
            <Link href="/contact-us/" className="btn-secondary mt-4 md:mt-0">
              Get Started
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center">
                <div className="flex justify-center mb-4">
                  {index === 0 && <PhoneIcon />}
                  {index === 1 && <DocumentIcon />}
                  {index === 2 && <BuildingIcon />}
                </div>
                <h3 className="text-xl font-bold text-gray-800 uppercase mb-3">
                  Step {step.number}: {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section - Purple box LEFT, Image RIGHT */}
      <section className="relative min-h-[500px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Left - Purple Content Box */}
          <div className="bg-purple-dark flex items-center py-16 px-8 lg:px-16">
            <div>
              <p className="text-tan-gold uppercase tracking-widest font-semibold mb-2 text-sm">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide mb-6">
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

          {/* Right - Image */}
          <div className="relative min-h-[400px] lg:min-h-full">
            <Image
              src="/images/IMG-20240227-WA0561.jpg"
              alt="Desert Spray Foaming at work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-purple-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Form */}
            <div>
              <p className="text-tan-gold uppercase tracking-widest font-semibold mb-6 text-sm">
                Top-Quality Insulation Solutions Await!
              </p>
              <ContactForm darkBackground />
            </div>

            {/* Right - Google Map */}
            <div className="bg-white min-h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.8984!2d-102.6458!3d32.7193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fb8fd758da36c3%3A0x3989e7b7a1c3d8b3!2sDesert%20Spray%20Foaming!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '450px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Desert Spray Foaming Location"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </>
  )
}
