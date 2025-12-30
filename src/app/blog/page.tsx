import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Blog | Desert Spray Foaming - Insulation Tips & News',
  description: 'Read our blog for insulation tips, industry news, and helpful information about spray foam insulation in West Texas.',
}

const blogPosts = [
  {
    title: 'Benefits of Spray Foam Insulation for Your Home',
    slug: 'this-is-a-blog-post',
    excerpt: 'Discover why spray foam insulation is one of the most effective ways to improve your home\'s energy efficiency and comfort.',
    date: 'March 2023',
    image: '/images/spray-foam-insulation.jpg',
  },
  {
    title: 'How to Know When Your Insulation Needs Replacement',
    slug: 'this-is-a-blog-post-2',
    excerpt: 'Learn the warning signs that indicate your home\'s insulation may need to be replaced or upgraded.',
    date: 'March 2023',
    image: '/images/attic-insulation.jpg',
  },
  {
    title: 'Commercial Insulation: What Business Owners Need to Know',
    slug: 'this-is-a-blog-post-3',
    excerpt: 'A comprehensive guide to commercial insulation options for warehouses, offices, and industrial buildings.',
    date: 'March 2023',
    image: '/images/commercial-insulation.jpg',
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-purple-dark py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide text-center mb-4">
            Blog
          </h1>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Stay informed with the latest insulation tips, industry news, and helpful guides from Desert Spray Foaming.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white shadow-lg overflow-hidden group">
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-tan-gold text-sm font-semibold mb-2">{post.date}</p>
                  <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-dark transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="text-purple-dark font-semibold uppercase text-sm hover:text-tan-gold transition-colors"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </>
  )
}
