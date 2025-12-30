import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CTABanner from '@/components/CTABanner'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Desert Spray Foaming - Insulation Experts in Seminole, TX',
  description: 'Learn about Desert Spray Foaming, your trusted insulation experts in Seminole, TX. Founded in 2023, we deliver comfort, satisfaction, and affordability.',
}

const values = [
  {
    title: 'Transparency',
    description: 'From initial consultations to project completion, we keep you informed and involved, ensuring full transparency and peace of mind.',
    icon: (
      <svg className="w-10 h-10 text-purple-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Efficiency',
    description: 'Our streamlined processes and experienced team allow us to complete projects promptly without compromising on quality, saving you time and hassle.',
    icon: (
      <svg className="w-10 h-10 text-purple-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Quality',
    description: 'Quality is at the heart of everything we do. From the products we use to the craftsmanship we deliver, we never compromise on quality.',
    icon: (
      <svg className="w-10 h-10 text-purple-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
]

export default function AboutUsPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Spray foam insulation application"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-purple-dark/70" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide leading-tight mb-6">
              Your Insulation Experts in Seminole, TX
            </h1>
            <p className="text-gray-200 text-lg mb-8">
              We&apos;re your partners in creating spaces that are comfortable, efficient, and tailored to your needs. Connect with us now and experience why Desert Spray Foaming is the go-to for insulation solutions in Seminole, TX, and beyond!
            </p>
            <Link href="/contact-us/" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Quality Solutions Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <p className="section-subtitle mb-4">Quality Insulation Solutions in Seminole, TX</p>
            <h2 className="section-title text-gray-800 mb-6">
              Experience Comfort, Satisfaction, and Affordability with Desert Spray Foaming
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We&apos;re here to make your spaces cozier, your experiences more satisfying, and your wallets happier. From crafting comfortable indoor havens to ensuring your complete satisfaction, we&apos;re dedicated to providing exceptional service at prices that won&apos;t break the bank.
            </p>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/about-work.jpg"
            alt="Insulation work in progress"
            fill
            className="object-cover"
          />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-xl bg-white p-8 md:p-12">
            <p className="section-subtitle mb-2">About Desert Spray Foaming</p>
            <h2 className="section-title text-gray-800 mb-6">
              Your Partner in Comfort and Efficiency
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 2023, Desert Spray Foaming has rapidly become a trusted name in the insulation industry, proudly serving Seminole, TX, and its surrounding areas. Our mission is simple yet profound: to deliver value, foster comfortable indoor environments, ensure unwavering customer satisfaction, offer competitive pricing, and provide the best products.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you&apos;re a commercial enterprise or a homeowner, no project is too big or small for Desert Spray Foaming. We offer a comprehensive range of services, including open-cell and closed-cell spray foam options, attic insulation, and insulation removal.
            </p>
            <Link href="/contact-us/" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title text-gray-800 mb-4">
                Values That Set Us Apart
              </h2>
              <p className="section-subtitle mb-6">
                Transparency, Efficiency, Quality
              </p>
              <p className="text-gray-600 leading-relaxed">
                At Desert Spray Foaming, we ensure every project is completed to the highest standards. Combined with competitive pricing, we strive to provide our customers with the most value for their investment.
              </p>
            </div>
            <div className="space-y-8">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 uppercase mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
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
            <div className="bg-gray-200 min-h-[400px]">
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
      </section>

      <CTABanner />

      <Footer />
    </>
  )
}
