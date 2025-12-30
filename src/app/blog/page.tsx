'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollAnimation, { StaggerContainer, StaggerItem } from '@/components/ScrollAnimation'

const blogPosts = [
  {
    title: 'Benefits of Spray Foam Insulation for Your Home',
    slug: 'benefits-of-spray-foam-insulation',
    excerpt: 'Discover why spray foam insulation is one of the most effective ways to improve your home\'s energy efficiency and comfort. Learn about the different types and their advantages.',
    date: 'December 2024',
    image: '/images/gallery/Quick-And-Easy-Spray-foam-Install-in-Texas.jpg',
    category: 'Tips & Guides',
  },
  {
    title: 'How to Know When Your Insulation Needs Replacement',
    slug: 'when-to-replace-insulation',
    excerpt: 'Learn the warning signs that indicate your home\'s insulation may need to be replaced or upgraded, including high energy bills and temperature inconsistencies.',
    date: 'December 2024',
    image: '/images/gallery/Long-lasting-attic-spray-foam-insulation-in-Texas.jpg',
    category: 'Maintenance',
  },
  {
    title: 'Commercial Insulation: What Business Owners Need to Know',
    slug: 'commercial-insulation-guide',
    excerpt: 'A comprehensive guide to commercial insulation options for warehouses, offices, and industrial buildings. Maximize efficiency and reduce costs.',
    date: 'November 2024',
    image: '/images/gallery/Premium-Desert-Spray-Foaming-Insulation-Installation-SEMINOLE-TX.jpg',
    category: 'Commercial',
  },
  {
    title: 'Open-Cell vs Closed-Cell Spray Foam: Which is Right for You?',
    slug: 'open-cell-vs-closed-cell',
    excerpt: 'Understanding the differences between open-cell and closed-cell spray foam insulation can help you make the best choice for your specific needs.',
    date: 'November 2024',
    image: '/images/gallery/Expert-Desert-Spray-Foaming-Insulation-Solutions.jpg',
    category: 'Tips & Guides',
  },
  {
    title: 'Energy Savings: How Proper Insulation Pays for Itself',
    slug: 'energy-savings-insulation',
    excerpt: 'Calculate the potential savings from upgrading your insulation. Most homeowners see significant reductions in their monthly energy bills.',
    date: 'October 2024',
    image: '/images/gallery/Energy-Efficient-Desert-Spray-Foaming-Insulation-SEMINOLE-TX.jpg',
    category: 'Savings',
  },
  {
    title: 'Preparing Your Home for West Texas Summers',
    slug: 'preparing-for-texas-summers',
    excerpt: 'West Texas heat can be brutal. Learn how proper insulation helps keep your home cool and comfortable during the hottest months.',
    date: 'October 2024',
    image: '/images/gallery/Durable-Desert-Spray-Foaming-Insulation-Solutions.jpg',
    category: 'Seasonal',
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-purple-dark py-16 md:py-20 overflow-hidden">
        <div className="container-custom">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide mb-4">
              Blog
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              Stay informed with the latest insulation tips, industry news, and helpful guides from Desert Spray Foaming.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-20 overflow-hidden">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" staggerDelay={0.1}>
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <motion.article
                  className="bg-white shadow-lg overflow-hidden group rounded-lg h-full flex flex-col"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-dark text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 md:p-6 flex flex-col flex-grow">
                    <p className="text-tan-gold text-xs md:text-sm font-semibold mb-2">{post.date}</p>
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-dark transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 text-sm md:text-base flex-grow">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="text-purple-dark font-semibold uppercase text-sm hover:text-tan-gold transition-colors inline-flex items-center gap-2"
                    >
                      Read More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Coming Soon Notice */}
          <ScrollAnimation className="mt-12 md:mt-16 text-center">
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-wide mb-3">
                More Content Coming Soon
              </h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                We&apos;re working on bringing you more helpful articles about insulation, energy efficiency, and home improvement tips for West Texas homeowners.
              </p>
              <Link
                href="/contact-us/"
                className="inline-block bg-purple-dark hover:bg-tan-gold text-white font-bold uppercase text-sm tracking-wider px-6 py-3 transition-all duration-300"
              >
                Have Questions? Contact Us
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </>
  )
}
