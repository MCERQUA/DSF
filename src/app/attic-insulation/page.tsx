import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CTABanner from '@/components/CTABanner'
import Image from 'next/image'
import Link from 'next/link'
import { cities } from '@/data/cities'

export const metadata: Metadata = {
  title: 'Attic Insulation | Desert Spray Foaming - Seminole, TX',
  description: 'Professional attic insulation services in Seminole, TX. Improve energy efficiency and comfort with expert insulation from Desert Spray Foaming.',
}

export default function AtticInsulationPage() {
  return (
    <>
      <Header />

      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/attic-insulation.jpg" alt="Attic Insulation" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-purple-dark/70" />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide leading-tight mb-6">
              Attic Insulation
            </h1>
            <p className="text-gray-200 text-lg mb-8">
              Improve your home&apos;s energy efficiency with professional attic insulation services from Desert Spray Foaming.
            </p>
            <Link href="/contact-us/" className="btn-primary">Request a Free Estimate</Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-gray-800 mb-6">Why Attic Insulation Matters</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Your attic is one of the most important areas to insulate properly. Heat rises, and without adequate insulation, you could be losing a significant amount of your heating and cooling energy through your roof.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-tan-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Reduces energy bills by up to 30%</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-tan-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Maintains consistent temperatures throughout your home</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-tan-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Prevents ice dams and roof damage</span>
                </li>
              </ul>
              <Link href="/contact-us/" className="btn-secondary">Get a Free Quote</Link>
            </div>
            <div className="relative">
              <Image src="/images/insulation-work.jpg" alt="Attic insulation installation" width={600} height={450} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white uppercase mb-4">Get Your Free Attic Insulation Quote</h2>
              <ContactForm darkBackground />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold text-tan-gold uppercase mb-4">Areas We Serve</h3>
              <div className="grid grid-cols-2 gap-2">
                {cities.slice(0, 20).map((city) => (
                  <Link key={city.slug} href={`/attic-insulation-${city.slug}-tx/`} className="text-gray-300 hover:text-tan-gold text-sm">
                    {city.name}, TX
                  </Link>
                ))}
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
