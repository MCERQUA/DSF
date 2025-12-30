import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us/' },
  { name: 'Services', href: '/services/' },
  { name: 'Contact', href: '/contact-us/' },
  { name: 'Find Us On The Web', href: '/find-us-on-the-web/' },
  { name: 'Sitemap', href: '/sitemap/' },
]

const serviceLinks = [
  { name: 'Attic Insulation', href: '/attic-insulation/' },
  { name: 'Commercial Insulation', href: '/commercial-insulation/' },
  { name: 'Insulation Removal', href: '/insulation-removal/' },
  { name: 'Spray Foam Insulation', href: '/spray-foam-insulation/' },
]

export default function Footer() {
  return (
    <footer className="bg-purple-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <Image
              src="/images/logo.webp"
              alt="Desert Spray Foaming"
              width={180}
              height={80}
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-300 leading-relaxed">
              Your premier choice for superior spray foam insulation in Seminole, TX, and surrounding areas- delivering comfort and quality every time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-tan-gold font-bold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-tan-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-tan-gold font-bold uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-tan-gold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-tan-gold font-bold uppercase tracking-wider mb-4">Follow Us</h3>
            <a
              href="https://www.facebook.com/profile.php?id=100092212498498"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 bg-white text-purple-dark rounded hover:bg-tan-gold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="border-t border-purple-medium">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-300">
            <a href="tel:432-300-7950" className="flex items-center gap-2 hover:text-tan-gold transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              432-300-7950
            </a>
            <a href="mailto:klass@desertsprayfoaming.com" className="flex items-center gap-2 hover:text-tan-gold transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              klass@desertsprayfoaming.com
            </a>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              150 Fm 1429 Seminole, TX 79360
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-purple-medium">
        <div className="container-custom py-4">
          <p className="text-center text-gray-400 text-sm">
            Copyright Desert Spray Foaming LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
