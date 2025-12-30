import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities, services, parseLocationSlug, generateAllLocationSlugs } from '@/data/cities'
import LocationPageTemplate from '@/components/templates/LocationPageTemplate'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Generate all location page routes at build time
export async function generateStaticParams() {
  const slugs = generateAllLocationSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const parsed = parseLocationSlug(slug)

  if (!parsed) {
    return { title: 'Page Not Found' }
  }

  const { service, city } = parsed

  return {
    title: `${service.name} in ${city.name}, TX | Desert Spray Foaming`,
    description: `Professional ${service.name.toLowerCase()} services in ${city.name}, Texas. Desert Spray Foaming provides top-quality insulation solutions for homes and businesses. Call 432-300-7950 for a free estimate.`,
    keywords: `${service.name}, ${city.name} TX, insulation, spray foam, ${city.county}, Desert Spray Foaming`,
  }
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params
  const parsed = parseLocationSlug(slug)

  if (!parsed) {
    notFound()
  }

  const { service, city } = parsed

  return (
    <LocationPageTemplate
      serviceName={service.name}
      serviceSlug={service.slug}
      serviceDescription={service.description}
      cityName={city.name}
      citySlug={city.slug}
      county={city.county}
      nearbyAreas={city.nearbyAreas}
    />
  )
}
