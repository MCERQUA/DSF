'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const services = [
  { name: 'Spray Foam Insulation', href: '/spray-foam-insulation/' },
  { name: 'Attic Insulation', href: '/attic-insulation/' },
  { name: 'Commercial Insulation', href: '/commercial-insulation/' },
  { name: 'Insulation Removal', href: '/insulation-removal/' },
]

const areasWeServe = [
  { name: 'Andrews, TX', href: '/spray-foam-insulation-andrews-tx/' },
  { name: 'Seminole, TX', href: '/spray-foam-insulation-seminole-tx/' },
  { name: 'Lubbock, TX', href: '/spray-foam-insulation-lubbock-tx/' },
  { name: 'Midland, TX', href: '/spray-foam-insulation-midland-tx/' },
  { name: 'Odessa, TX', href: '/spray-foam-insulation-odessa-tx/' },
  { name: 'View All Areas', href: '/sitemap/' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar - Dark Purple with contact info */}
      <div className="bg-[#391f56] hidden md:block">
        <div className="container-custom">
          <div className="flex items-center justify-center py-3 gap-8">
            {/* Phone */}
            <a href="tel:432-300-7950" className="flex items-center gap-2 text-white text-sm tracking-[2px] hover:text-tan-gold transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>432-300-7950</span>
            </a>

            {/* Email */}
            <a href="mailto:klass@desertsprayfoaming.com" className="flex items-center gap-2 text-white text-sm tracking-[2px] hover:text-tan-gold transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>klass@desertsprayfoaming.com</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61556003634087"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-tan-gold transition-colors"
            >
              <span className="text-sm tracking-[2px]">Follow</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Lighter Purple */}
      <div className="bg-[#46276a]">
        <div className="container-custom">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/new-logo.png"
                alt="Desert Spray Foaming"
                width={240}
                height={134}
                className="h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link href="/" className="text-white font-bold uppercase text-sm tracking-[3px] hover:text-tan-gold transition-colors">
                Home
              </Link>
              <Link href="/about-us/" className="text-white font-bold uppercase text-sm tracking-[3px] hover:text-tan-gold transition-colors">
                About Us
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <Link href="/services/" className="text-white font-bold uppercase text-sm tracking-[3px] hover:text-tan-gold transition-colors flex items-center">
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute left-0 mt-2 w-56 bg-white border border-tan-gold shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-[#333333] hover:bg-gray-100 transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Areas We Serve Dropdown */}
              <div className="relative group">
                <button className="text-white font-bold uppercase text-sm tracking-[3px] hover:text-tan-gold transition-colors flex items-center">
                  Areas We Serve
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white border border-tan-gold shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {areasWeServe.map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      className="block px-4 py-3 text-[#333333] hover:bg-gray-100 transition-colors text-sm"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/services-gallery/" className="text-white font-bold uppercase text-sm tracking-[3px] hover:text-tan-gold transition-colors">
                Gallery
              </Link>

              <Link
                href="/contact-us/"
                className="bg-tan-gold hover:bg-white hover:text-[#46276a] text-white font-bold uppercase text-sm tracking-[3px] px-4 py-2.5 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-tan-gold p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 bg-[#46276a] border-t border-tan-gold">
              <Link href="/" className="block py-3 text-white font-bold uppercase tracking-[3px] text-sm">
                Home
              </Link>
              <Link href="/about-us/" className="block py-3 text-white font-bold uppercase tracking-[3px] text-sm">
                About Us
              </Link>

              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between py-3 text-white font-bold uppercase tracking-[3px] text-sm"
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="pl-4 border-l-2 border-tan-gold ml-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block py-2 text-white hover:text-tan-gold text-sm"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setAreasOpen(!areasOpen)}
                  className="w-full flex items-center justify-between py-3 text-white font-bold uppercase tracking-[3px] text-sm"
                >
                  Areas We Serve
                  <svg className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {areasOpen && (
                  <div className="pl-4 border-l-2 border-tan-gold ml-2">
                    {areasWeServe.map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        className="block py-2 text-white hover:text-tan-gold text-sm"
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/services-gallery/" className="block py-3 text-white font-bold uppercase tracking-[3px] text-sm">
                Gallery
              </Link>

              {/* Mobile contact info */}
              <div className="mt-4 pt-4 border-t border-tan-gold/30">
                <a href="tel:432-300-7950" className="block py-2 text-tan-gold text-sm">
                  432-300-7950
                </a>
                <a href="mailto:klass@desertsprayfoaming.com" className="block py-2 text-tan-gold text-sm">
                  klass@desertsprayfoaming.com
                </a>
              </div>

              <Link href="/contact-us/" className="block mt-4 bg-tan-gold text-white font-bold uppercase text-sm tracking-[3px] px-4 py-3 text-center">
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
