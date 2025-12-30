import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Find Us On The Web | Desert Spray Foaming',
  description: 'Find Desert Spray Foaming on various online platforms. Connect with us on social media and business directories.',
}

const webPresence = [
  {
    name: 'Google Business Profile',
    url: 'https://www.google.com/maps/place/Desert+Spray+Foaming',
    description: 'View our Google Business listing, reviews, and location.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100092212498498',
    description: 'Follow us on Facebook for updates, photos, and community engagement.',
    icon: (
      <svg className="w-8 h-8 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Yelp',
    url: 'https://www.yelp.com/biz/desert-spray-foaming-seminole',
    description: 'Read customer reviews and ratings on Yelp.',
    icon: (
      <svg className="w-8 h-8 text-[#D32323]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.694 1.459zm-3.984 5.387l-4.44-2.66c-.839-.502-.56-1.752.42-1.882l5.044-.665a1.073 1.073 0 0 1 1.16.75 9.195 9.195 0 0 1-.073 4.028 1.073 1.073 0 0 1-1.542.643l-.569-.214zm-5.893-.38l1.433 4.995a1.073 1.073 0 0 1-.694 1.46 9.194 9.194 0 0 1-3.252-.252 1.073 1.073 0 0 1-.75-1.16l.665-5.043c.13-.98 1.38-1.26 1.882-.42l.716.42zm-3.24-5.387L2.05 10.78a1.073 1.073 0 0 1-.206-1.596 9.195 9.195 0 0 1 2.893-2.364 1.073 1.073 0 0 1 1.459.694l1.433 4.995c.276.96-.8 1.74-1.63 1.176l-.063-.047zm-.59-5.48l4.308-2.905c.83-.564 1.906.216 1.63 1.176L11.96 9.98c-.276.96-1.537.883-1.882.036L8.13 5.04a1.072 1.072 0 0 1 .323-1.306z"/>
      </svg>
    ),
  },
]

export default function FindUsPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-purple-dark py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide text-center mb-4">
            Find Us On The Web
          </h1>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Connect with Desert Spray Foaming across various online platforms. Follow us for updates, read reviews, and stay connected!
          </p>
        </div>
      </section>

      {/* Web Presence Cards */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webPresence.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  {platform.icon}
                  <h2 className="text-xl font-bold text-gray-800 group-hover:text-purple-dark transition-colors">
                    {platform.name}
                  </h2>
                </div>
                <p className="text-gray-600">{platform.description}</p>
                <div className="mt-4 text-tan-gold font-semibold uppercase text-sm">
                  Visit &rarr;
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-800 uppercase mb-8">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-purple-dark uppercase mb-2">Phone</h3>
              <a href="tel:432-300-7950" className="text-gray-600 hover:text-tan-gold">
                432-300-7950
              </a>
            </div>
            <div>
              <h3 className="font-bold text-purple-dark uppercase mb-2">Email</h3>
              <a href="mailto:klass@desertsprayfoaming.com" className="text-gray-600 hover:text-tan-gold">
                klass@desertsprayfoaming.com
              </a>
            </div>
            <div>
              <h3 className="font-bold text-purple-dark uppercase mb-2">Address</h3>
              <p className="text-gray-600">
                150 Fm 1429<br />
                Seminole, TX 79360
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </>
  )
}
