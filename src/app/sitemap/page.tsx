import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { cities, services, counties } from '@/data/cities'

export const metadata: Metadata = {
  title: 'Sitemap | Desert Spray Foaming',
  description: 'Browse all pages on the Desert Spray Foaming website. Find insulation services in Seminole, TX and surrounding areas.',
}

export default function SitemapPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-purple-dark py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-white uppercase tracking-wide text-center">
            Sitemap
          </h1>
        </div>
      </section>

      {/* Main Pages */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Main Pages */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 uppercase mb-4 border-b-2 border-tan-gold pb-2">
                Main Pages
              </h2>
              <ul className="space-y-2">
                <li><Link href="/" className="text-purple-dark hover:text-tan-gold">Home</Link></li>
                <li><Link href="/about-us/" className="text-purple-dark hover:text-tan-gold">About Us</Link></li>
                <li><Link href="/services/" className="text-purple-dark hover:text-tan-gold">Services</Link></li>
                <li><Link href="/contact-us/" className="text-purple-dark hover:text-tan-gold">Contact Us</Link></li>
                <li><Link href="/services-gallery/" className="text-purple-dark hover:text-tan-gold">Gallery</Link></li>
                <li><Link href="/blog/" className="text-purple-dark hover:text-tan-gold">Blog</Link></li>
                <li><Link href="/find-us-on-the-web/" className="text-purple-dark hover:text-tan-gold">Find Us On The Web</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 uppercase mb-4 border-b-2 border-tan-gold pb-2">
                Our Services
              </h2>
              <ul className="space-y-2">
                {services.slice(0, 6).map((service) => (
                  <li key={service.slug}>
                    <Link href={`/${service.slug}/`} className="text-purple-dark hover:text-tan-gold">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Counties */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 uppercase mb-4 border-b-2 border-tan-gold pb-2">
                Counties We Serve
              </h2>
              <ul className="space-y-2">
                {counties.map((county) => (
                  <li key={county.slug}>
                    <Link href={`/spray-foam-insulation-${county.slug}-tx/`} className="text-purple-dark hover:text-tan-gold">
                      {county.name}, TX
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Pages by Service */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-800 uppercase mb-8 text-center">
            Service Locations
          </h2>

          {services.map((service) => (
            <div key={service.slug} className="mb-12">
              <h3 className="text-xl font-bold text-purple-dark uppercase mb-4 border-b border-gray-300 pb-2">
                {service.name}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {cities.map((city) => (
                  <Link
                    key={`${service.slug}-${city.slug}`}
                    href={`/${service.slug}-${city.slug}-tx/`}
                    className="text-sm text-gray-600 hover:text-purple-dark"
                  >
                    {city.name}, TX
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
