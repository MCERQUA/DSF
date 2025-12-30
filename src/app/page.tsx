import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CTABanner from '@/components/CTABanner'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Header />

      {/* SECTION 0: Hero Section - Background image with text left, form right */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-main.jpg)' }}
      >
        <div className="absolute inset-0 bg-purple-dark/60" />
        <div className="container-custom relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Title + Description + Button */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white uppercase tracking-[5px] leading-[1.3] mb-6">
                Top-Quality Insulation Solutions in Seminole, TX
              </h1>
              <p className="text-gray-200 text-[15px] tracking-[2px] leading-[1.8] mb-8">
                At Desert Spray Foaming, we prioritize your comfort and well-being. Our expert insulation services allow you to enjoy a cozy, energy-efficient, and healthy indoor environment year-round.
              </p>
              <Link
                href="/contact-us/"
                className="inline-block bg-[#46276A] hover:bg-tan-gold text-white font-bold uppercase text-base tracking-[3px] px-6 py-3 transition-all duration-300 hover:-translate-y-1"
              >
                Request a Free Estimate
              </Link>
            </div>

            {/* Right: Contact Form */}
            <div>
              <ContactForm darkBackground />
            </div>
          </div>
        </div>
      </section>

      {/* Purple Divider */}
      <div className="h-16 bg-purple-dark" />

      {/* SECTION 1: Insulation Tailored - Image left with box-shadow, text right */}
      <section className="py-[120px]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image with purple box-shadow offset */}
            <div className="relative">
              <div
                className="relative inline-block"
                style={{ boxShadow: '-25px -25px 0px 0px #46276A' }}
              >
                <Image
                  src="/images/insulation-work.jpg"
                  alt="Insulation work in progress"
                  width={440}
                  height={744}
                  className="w-full max-w-[440px] h-auto"
                />
              </div>
            </div>

            {/* Right: Text content */}
            <div>
              <h4 className="text-tan-gold text-[14px] font-medium uppercase tracking-[5px] leading-[1.3] mb-4">
                Exceptional Service and Results
              </h4>
              <h2 className="text-[34px] font-bold text-[#333333] uppercase tracking-[5px] leading-[1.3] mb-5">
                Insulation Tailored to Your Needs
              </h2>
              <p className="text-[#A6A6A6] text-[15px] tracking-[2px] leading-[1.8] mb-8">
                We understand how crucial it is to have a comfortable, and energy-efficient home or business. Our team of insulation experts isn&apos;t just about delivering results; we&apos;re here to listen to your needs, understand your concerns, and ensure that every detail is just right for you. So whether you&apos;re looking to save on energy bills, enjoy some peace and quiet, or simply cozy up in your home, we&apos;re here to make it happen, with care and dedication every step of the way.
              </p>
              <Link
                href="/contact-us/"
                className="inline-block bg-[#46276A] hover:bg-tan-gold text-white font-bold uppercase text-base tracking-[3px] px-4 py-2.5 transition-all duration-300 hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Benefits Section */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Title */}
            <div>
              <h2 className="text-[34px] font-bold text-[#333333] uppercase tracking-[5px] leading-[1.3] mb-4">
                Experience the Benefits of Superior Insulation
              </h2>
              <h4 className="text-tan-gold text-[14px] font-medium uppercase tracking-[5px] leading-[1.3] mb-6">
                Transform Your Space for Lasting Comfort and Efficiency
              </h4>
              <p className="text-[#A6A6A6] text-[15px] tracking-[2px] leading-[1.8]">
                Discover how our advanced insulation solutions in Seminole, TX, and surrounding areas can revolutionize your indoor environment, providing unmatched comfort, savings, and peace of mind.
              </p>
            </div>

            {/* Right: Benefits with spray bottle icons */}
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10 text-purple-dark" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2v2h1v1.17A3.001 3.001 0 006 8v2H5v2h1v8a2 2 0 002 2h8a2 2 0 002-2v-8h1v-2h-1V8a3.001 3.001 0 00-2-2.83V4h1V2H7zm2 3h6a1 1 0 011 1v2H8V6a1 1 0 011-1zm-1 7h8v8H8v-8z"/>
                    <circle cx="18" cy="4" r="1.5" opacity="0.6"/>
                    <circle cx="19" cy="6" r="1" opacity="0.4"/>
                    <circle cx="17" cy="5.5" r="0.75" opacity="0.5"/>
                  </svg>
                </div>
                <p className="text-[#A6A6A6] text-[15px] tracking-[2px] leading-[1.8]">
                  Say goodbye to drafts and temperature fluctuations. Our insulation solutions create a consistent and comfortable indoor climate.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10 text-purple-dark" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2v2h1v1.17A3.001 3.001 0 006 8v2H5v2h1v8a2 2 0 002 2h8a2 2 0 002-2v-8h1v-2h-1V8a3.001 3.001 0 00-2-2.83V4h1V2H7zm2 3h6a1 1 0 011 1v2H8V6a1 1 0 011-1zm-1 7h8v8H8v-8z"/>
                    <circle cx="18" cy="4" r="1.5" opacity="0.6"/>
                    <circle cx="19" cy="6" r="1" opacity="0.4"/>
                    <circle cx="17" cy="5.5" r="0.75" opacity="0.5"/>
                  </svg>
                </div>
                <p className="text-[#A6A6A6] text-[15px] tracking-[2px] leading-[1.8]">
                  Reduce energy consumption and save on utility bills with our energy-efficient insulation.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <svg className="w-10 h-10 text-purple-dark" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2v2h1v1.17A3.001 3.001 0 006 8v2H5v2h1v8a2 2 0 002 2h8a2 2 0 002-2v-8h1v-2h-1V8a3.001 3.001 0 00-2-2.83V4h1V2H7zm2 3h6a1 1 0 011 1v2H8V6a1 1 0 011-1zm-1 7h8v8H8v-8z"/>
                    <circle cx="18" cy="4" r="1.5" opacity="0.6"/>
                    <circle cx="19" cy="6" r="1" opacity="0.4"/>
                    <circle cx="17" cy="5.5" r="0.75" opacity="0.5"/>
                  </svg>
                </div>
                <p className="text-[#A6A6A6] text-[15px] tracking-[2px] leading-[1.8]">
                  Keep allergens and pollutants at bay with proper insulation, ensuring a healthier living space for you and your family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-[34px] font-bold text-[#333333] uppercase tracking-[5px] leading-[1.3] mb-4">
              Our Comprehensive Insulation Services in Seminole, TX
            </h2>
            <h4 className="text-tan-gold text-[14px] font-medium uppercase tracking-[5px] leading-[1.3]">
              Elevate Your Space with Expert Insulation Solutions
            </h4>
          </div>

          {/* 4 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {/* Attic Insulation */}
            <Link href="/attic-insulation/" className="relative aspect-square group overflow-hidden block">
              <Image
                src="/images/attic-insulation.jpg"
                alt="Attic Insulation"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
            </Link>

            {/* Commercial Insulation */}
            <Link href="/commercial-insulation/" className="relative aspect-square group overflow-hidden block">
              <Image
                src="/images/commercial-insulation.jpg"
                alt="Commercial Insulation"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
            </Link>

            {/* Insulation Removal - with overlay */}
            <Link href="/insulation-removal/" className="relative aspect-square group overflow-hidden block">
              <Image
                src="/images/insulation-removal.jpg"
                alt="Insulation Removal"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-purple-dark/70" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-2xl font-bold text-white uppercase tracking-[3px] mb-4">
                  Insulation Removal
                </h3>
                <p className="text-gray-200 text-sm tracking-[1px] leading-[1.6] mb-6">
                  We remove old or damaged materials to prepare your space for new, energy-efficient installation.
                </p>
                <span className="inline-block bg-[#46276A] hover:bg-tan-gold text-white font-bold uppercase text-sm tracking-[2px] px-4 py-2 transition-all duration-300">
                  Learn More
                </span>
              </div>
            </Link>

            {/* Spray Foam Insulation */}
            <Link href="/spray-foam-insulation/" className="relative aspect-square group overflow-hidden block">
              <Image
                src="/images/spray-foam-insulation.jpg"
                alt="Spray Foam Insulation"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: 3-Step Process */}
      <section className="py-20 bg-[#f7f7f7]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-[34px] font-bold text-[#333333] uppercase tracking-[5px] leading-[1.3] mb-2">
                Our 3-Step Process
              </h2>
              <h4 className="text-tan-gold text-[14px] font-medium uppercase tracking-[5px] leading-[1.3]">
                How It Works
              </h4>
            </div>
            <Link
              href="/contact-us/"
              className="inline-block bg-[#46276A] hover:bg-tan-gold text-white font-bold uppercase text-base tracking-[3px] px-4 py-2.5 transition-all duration-300 hover:-translate-y-1 mt-4 md:mt-0"
            >
              Get Started
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-purple-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#333333] uppercase tracking-[3px] mb-3">
                Step 1: Consultation
              </h3>
              <p className="text-[#A6A6A6] text-[15px] tracking-[1px] leading-[1.8]">
                We begin with a thorough consultation to understand your needs and assess your space.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-purple-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#333333] uppercase tracking-[3px] mb-3">
                Step 2: Customized Solution
              </h3>
              <p className="text-[#A6A6A6] text-[15px] tracking-[1px] leading-[1.8]">
                Based on our assessment, we propose an insulation solution and provide you with a free quote.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-purple-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#333333] uppercase tracking-[3px] mb-3">
                Step 3: Professional Installation
              </h3>
              <p className="text-[#A6A6A6] text-[15px] tracking-[1px] leading-[1.8]">
                Our experienced team insulates your property, ensuring optimal performance and long-lasting results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: About Us - Purple box left, image right */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Purple Content */}
          <div className="bg-purple-dark py-20 px-8 lg:px-16 flex items-center">
            <div>
              <h4 className="text-tan-gold text-[14px] font-medium uppercase tracking-[5px] leading-[1.3] mb-4">
                About Us
              </h4>
              <h2 className="text-[34px] font-bold text-white uppercase tracking-[5px] leading-[1.3] mb-6">
                Introducing Desert Spray Foaming
              </h2>
              <p className="text-gray-300 text-[15px] tracking-[2px] leading-[1.8] mb-8">
                With over 6 years of experience in the insulation industry and a passion for his work, Klass started Desert Spray Foaming in 2023. Our mission is to provide value, a comfortable indoor environment, customer satisfaction, affordable pricing, and a quality product. Whether commercial or residential, big or small, we&apos;ve got you covered with our range of services, including open-cell and closed-cell spray foam options, attic insulation, and insulation removal. At Desert Spray Foaming, we&apos;re not just about insulation but about creating lasting relationships and spaces you&apos;ll love.
              </p>
              <Link
                href="/contact-us/"
                className="inline-block bg-tan-gold hover:bg-white hover:text-purple-dark text-white font-bold uppercase text-base tracking-[3px] px-6 py-3 transition-all duration-300 hover:-translate-y-1"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative min-h-[500px]">
            <Image
              src="/images/insulation-work.jpg"
              alt="Desert Spray Foaming at work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 9: Contact Form Section */}
      <section className="py-20 bg-purple-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Form */}
            <div>
              <h4 className="text-tan-gold text-[14px] font-medium uppercase tracking-[5px] leading-[1.3] mb-6">
                Top-Quality Insulation Solutions Await!
              </h4>
              <ContactForm darkBackground />
            </div>

            {/* Right: Google Map */}
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
