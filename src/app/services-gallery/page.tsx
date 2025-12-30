import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Gallery | Desert Spray Foaming - Our Work in Seminole, TX',
  description: 'View our insulation project gallery. See examples of spray foam insulation, attic insulation, and commercial projects in Seminole, TX and surrounding areas.',
}

const galleryImages = [
  { src: '/images/spray-foam-insulation.jpg', alt: 'Spray foam insulation application' },
  { src: '/images/attic-insulation.jpg', alt: 'Attic insulation project' },
  { src: '/images/commercial-insulation.jpg', alt: 'Commercial building insulation' },
  { src: '/images/warehouse-insulation.jpg', alt: 'Warehouse insulation' },
  { src: '/images/insulation-work.jpg', alt: 'Insulation work in progress' },
  { src: '/images/insulation-removal.jpg', alt: 'Professional insulation service' },
  { src: '/images/hero-bg.jpg', alt: 'Spray foam application' },
  { src: '/images/about-work.jpg', alt: 'Insulation installation' },
]

export default function GalleryPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-purple-dark py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide text-center mb-4">
            Our Work
          </h1>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Browse through our gallery of completed insulation projects in Seminole, TX and the surrounding areas.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] group overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-purple-dark/0 group-hover:bg-purple-dark/50 transition-colors flex items-center justify-center">
                  <p className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity text-center px-4">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </>
  )
}
