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
  { name: 'Andrews County', href: '/spray-foam-insulation-andrews-county-tx/' },
  { name: 'Gaines County', href: '/spray-foam-insulation-gaines-county-tx/' },
  { name: 'Lubbock County', href: '/spray-foam-insulation-lubbock-county-tx/' },
  { name: 'Terry County', href: '/spray-foam-insulation-terry-county-tx/' },
  { name: 'Yoakum County', href: '/spray-foam-insulation-yoakum-county-tx/' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)

  return (
    <header className="bg-purple-dark sticky top-0 z-50">
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.webp"
              alt="Desert Spray Foaming"
              width={180}
              height={80}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white font-bold uppercase tracking-wider hover:text-tan-gold transition-colors">
              Home
            </Link>
            <Link href="/about-us/" className="text-white font-bold uppercase tracking-wider hover:text-tan-gold transition-colors">
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-white font-bold uppercase tracking-wider hover:text-tan-gold transition-colors flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-3 text-gray-800 hover:bg-purple-dark hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Areas We Serve Dropdown */}
            <div className="relative group">
              <button className="text-white font-bold uppercase tracking-wider hover:text-tan-gold transition-colors flex items-center">
                Areas We Serve
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {areasWeServe.map((area) => (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="block px-4 py-3 text-gray-800 hover:bg-purple-dark hover:text-white transition-colors"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/services-gallery/" className="text-white font-bold uppercase tracking-wider hover:text-tan-gold transition-colors">
              Gallery
            </Link>

            <Link href="/contact-us/" className="btn-primary">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
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
          <div className="lg:hidden pb-4">
            <Link href="/" className="block py-3 text-white font-bold uppercase tracking-wider">
              Home
            </Link>
            <Link href="/about-us/" className="block py-3 text-white font-bold uppercase tracking-wider">
              About Us
            </Link>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between py-3 text-white font-bold uppercase tracking-wider"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block py-2 text-tan-gold"
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
                className="w-full flex items-center justify-between py-3 text-white font-bold uppercase tracking-wider"
              >
                Areas We Serve
                <svg className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {areasOpen && (
                <div className="pl-4">
                  {areasWeServe.map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      className="block py-2 text-tan-gold"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/services-gallery/" className="block py-3 text-white font-bold uppercase tracking-wider">
              Gallery
            </Link>

            <Link href="/contact-us/" className="block mt-4 btn-primary text-center">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
