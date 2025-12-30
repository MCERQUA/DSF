import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { parseLocationSlug, generateAllLocationSlugs, isCityPage, isCountyPage } from '@/data/cities'
import LocationPageTemplate from '@/components/templates/LocationPageTemplate'
import CountyPageTemplate from '@/components/templates/CountyPageTemplate'

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

  if (isCityPage(parsed)) {
    const { service, city } = parsed
    return {
      title: `${service.name} in ${city.name}, TX | Desert Spray Foaming`,
      description: `Professional ${service.name.toLowerCase()} services in ${city.name}, Texas. Desert Spray Foaming provides top-quality insulation solutions for homes and businesses. Call 432-300-7950 for a free estimate.`,
      keywords: `${service.name}, ${city.name} TX, insulation, spray foam, ${city.county}, Desert Spray Foaming`,
    }
  }

  if (isCountyPage(parsed)) {
    const { service, county } = parsed
    return {
      title: `${service.name} in ${county.name}, TX | Desert Spray Foaming`,
      description: `Professional ${service.name.toLowerCase()} services throughout ${county.name}, Texas. Desert Spray Foaming serves ${county.cities.join(', ')} and surrounding areas. Call 432-300-7950 for a free estimate.`,
      keywords: `${service.name}, ${county.name} TX, insulation, spray foam, ${county.cities.join(', ')}, Desert Spray Foaming`,
    }
  }

  return { title: 'Page Not Found' }
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params
  const parsed = parseLocationSlug(slug)

  if (!parsed) {
    notFound()
  }

  if (isCityPage(parsed)) {
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

  if (isCountyPage(parsed)) {
    const { service, county } = parsed
    return (
      <CountyPageTemplate
        serviceName={service.name}
        serviceSlug={service.slug}
        serviceDescription={service.description}
        countyName={county.name}
        countySlug={county.slug}
        citiesInCounty={county.cities}
      />
    )
  }

  notFound()
}
