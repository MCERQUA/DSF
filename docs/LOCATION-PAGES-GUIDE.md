# Location Pages Template System

This guide explains how to generate the 700+ location-specific service pages programmatically.

## Overview

The original WordPress site has location pages following predictable URL patterns. Instead of manually creating each page, we use:
1. A **template component** with placeholders for city/service names
2. A **data file** with all cities and their metadata
3. A **generation script** that creates static pages at build time

## URL Pattern Analysis

### Service Types (11 total)
```
spray-foam-insulation
attic-insulation
home-insulation
commercial-insulation
insulation-removal
insulation-contractor
insulation-company
metal-building-insulation
pole-barn-insulation
warehouse-insulation
new-construction-insulation
```

### URL Format
```
/{service-type}-{city}-tx/
```

### Examples
```
/spray-foam-insulation-lubbock-tx/
/attic-insulation-midland-tx/
/metal-building-insulation-odessa-tx/
/warehouse-insulation-big-spring-tx/
```

## Implementation

### Step 1: City Data File

Create `/src/data/cities.ts`:

```typescript
export interface City {
  name: string;           // Display name: "Big Spring"
  slug: string;           // URL slug: "big-spring"
  county: string;         // County name: "Howard County"
  nearbyAreas: string[];  // Related cities for internal linking
}

export const cities: City[] = [
  { name: "Ackerly", slug: "ackerly", county: "Dawson County", nearbyAreas: ["Lamesa", "Big Spring"] },
  { name: "Andrews", slug: "andrews", county: "Andrews County", nearbyAreas: ["Seminole", "Odessa"] },
  { name: "Anton", slug: "anton", county: "Hockley County", nearbyAreas: ["Levelland", "Lubbock"] },
  { name: "Big Spring", slug: "big-spring", county: "Howard County", nearbyAreas: ["Midland", "Stanton"] },
  // ... all 65+ cities
];

export const services = [
  { name: "Spray Foam Insulation", slug: "spray-foam-insulation", description: "..." },
  { name: "Attic Insulation", slug: "attic-insulation", description: "..." },
  { name: "Home Insulation", slug: "home-insulation", description: "..." },
  { name: "Commercial Insulation", slug: "commercial-insulation", description: "..." },
  { name: "Insulation Removal", slug: "insulation-removal", description: "..." },
  { name: "Insulation Contractor", slug: "insulation-contractor", description: "..." },
  { name: "Insulation Company", slug: "insulation-company", description: "..." },
  { name: "Metal Building Insulation", slug: "metal-building-insulation", description: "..." },
  { name: "Pole Barn Insulation", slug: "pole-barn-insulation", description: "..." },
  { name: "Warehouse Insulation", slug: "warehouse-insulation", description: "..." },
  { name: "New Construction Insulation", slug: "new-construction-insulation", description: "..." },
];
```

### Step 2: Location Page Template

Create `/src/app/[slug]/page.tsx`:

```typescript
import { cities, services } from '@/data/cities';
import { notFound } from 'next/navigation';
import LocationPageTemplate from '@/components/templates/LocationPageTemplate';

// Generate all possible location page routes at build time
export async function generateStaticParams() {
  const params: { slug: string }[] = [];

  for (const service of services) {
    for (const city of cities) {
      params.push({
        slug: `${service.slug}-${city.slug}-tx`
      });
    }
  }

  return params;
}

// Parse the slug to extract service and city
function parseSlug(slug: string) {
  // Remove "-tx" suffix
  const withoutTx = slug.replace(/-tx$/, '');

  // Find matching service (longest match first)
  const sortedServices = [...services].sort((a, b) => b.slug.length - a.slug.length);

  for (const service of sortedServices) {
    if (withoutTx.startsWith(service.slug + '-')) {
      const citySlug = withoutTx.slice(service.slug.length + 1);
      const city = cities.find(c => c.slug === citySlug);
      if (city) {
        return { service, city };
      }
    }
  }

  return null;
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const parsed = parseSlug(params.slug);

  if (!parsed) {
    notFound();
  }

  const { service, city } = parsed;

  return (
    <LocationPageTemplate
      serviceName={service.name}
      serviceSlug={service.slug}
      cityName={city.name}
      citySlug={city.slug}
      county={city.county}
      nearbyAreas={city.nearbyAreas}
    />
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const parsed = parseSlug(params.slug);

  if (!parsed) {
    return { title: 'Page Not Found' };
  }

  const { service, city } = parsed;

  return {
    title: `${service.name} in ${city.name}, TX | Desert Spray Foaming`,
    description: `Professional ${service.name.toLowerCase()} services in ${city.name}, Texas. Desert Spray Foaming provides top-quality insulation solutions. Call 432-300-7950 for a free estimate.`,
  };
}
```

### Step 3: Location Page Template Component

Create `/src/components/templates/LocationPageTemplate.tsx`:

```typescript
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import CTABanner from '@/components/CTABanner';

interface LocationPageTemplateProps {
  serviceName: string;
  serviceSlug: string;
  cityName: string;
  citySlug: string;
  county: string;
  nearbyAreas: string[];
}

export default function LocationPageTemplate({
  serviceName,
  serviceSlug,
  cityName,
  citySlug,
  county,
  nearbyAreas,
}: LocationPageTemplateProps) {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-purple-dark text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {serviceName} in {cityName}, TX
          </h1>
          <p className="text-xl text-tan-gold mb-8">
            Professional {serviceName.toLowerCase()} services for homes and businesses in {cityName} and {county}
          </p>
          <a href="/contact-us/" className="btn-primary">
            Request a Free Estimate
          </a>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Expert {serviceName} Services in {cityName}
          </h2>
          <p className="text-lg mb-4">
            At Desert Spray Foaming, we provide top-quality {serviceName.toLowerCase()}
            to residential and commercial properties throughout {cityName}, TX and the
            surrounding {county} area. Our experienced team is dedicated to improving
            your property's energy efficiency and comfort.
          </p>
          {/* Add more service-specific content */}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Desert Spray Foaming in {cityName}?
          </h2>
          {/* Benefits grid */}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Get a Free {serviceName} Quote in {cityName}
          </h2>
          <ContactForm source={`${serviceSlug}-${citySlug}-tx`} />
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-purple-dark text-white py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">
            We Also Serve These Nearby Areas
          </h3>
          <div className="flex flex-wrap gap-4">
            {nearbyAreas.map(area => (
              <a
                key={area}
                href={`/${serviceSlug}-${area.toLowerCase().replace(' ', '-')}-tx/`}
                className="text-tan-gold hover:underline"
              >
                {serviceName} in {area}, TX
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}
```

## How Next.js Generates the Pages

### At Build Time (`npm run build`)

1. Next.js calls `generateStaticParams()` which returns all 700+ route combinations
2. For each route, it renders the page with the appropriate data
3. Static HTML files are generated in the `.next` output directory

### The Math
```
11 services × 65 cities = 715 location pages
```

## Adding New Cities

To add a new city:

1. Open `/src/data/cities.ts`
2. Add the city object:
```typescript
{ name: "New City", slug: "new-city", county: "County Name", nearbyAreas: ["City1", "City2"] }
```
3. Run `npm run build` to regenerate all pages

## Adding New Services

To add a new service type:

1. Open `/src/data/cities.ts`
2. Add to the services array:
```typescript
{ name: "New Service", slug: "new-service", description: "Service description..." }
```
3. Run `npm run build` to generate pages for all cities with this service

## Content Variations

To make pages more unique (better for SEO), you can add content variations:

```typescript
// In cities.ts
export const cityContent: Record<string, { intro: string; localInfo: string }> = {
  'lubbock': {
    intro: 'As the largest city in the South Plains region...',
    localInfo: 'Lubbock residents face extreme temperature swings...'
  },
  'midland': {
    intro: 'In the heart of the Permian Basin...',
    localInfo: 'Midland\'s oil industry economy means...'
  },
  // etc.
};
```

## Verifying URLs Match Original

Run this script to compare generated URLs with the original sitemap:

```bash
# scripts/verify-urls.sh
#!/bin/bash

# Fetch original sitemap URLs
curl -s https://desertsprayfoaming.com/page-sitemap1.xml | \
  grep -oP '(?<=<loc>)[^<]+' > /tmp/original-urls.txt

# List generated pages
find .next/server/app -name "*.html" -type f | \
  sed 's|.next/server/app||' | \
  sed 's|/page.html|/|' > /tmp/generated-urls.txt

# Compare
diff /tmp/original-urls.txt /tmp/generated-urls.txt
```

## Troubleshooting

### "Page not found" for a location page
- Check that the city exists in `cities.ts`
- Verify the slug format matches (lowercase, hyphens)
- Run `npm run build` to regenerate

### Missing city
- Add it to `cities.ts`
- Rebuild the project

### URL doesn't match original
- Check the original URL pattern in the WordPress sitemap
- Adjust the slug generation logic if needed
