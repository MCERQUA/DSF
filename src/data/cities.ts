export interface City {
  name: string;
  slug: string;
  county: string;
  nearbyAreas: string[];
}

export interface Service {
  name: string;
  slug: string;
  description: string;
}

export const cities: City[] = [
  { name: "Ackerly", slug: "ackerly", county: "Dawson County", nearbyAreas: ["Lamesa", "Big Spring", "Stanton"] },
  { name: "Andrews", slug: "andrews", county: "Andrews County", nearbyAreas: ["Seminole", "Odessa", "Midland"] },
  { name: "Anton", slug: "anton", county: "Hockley County", nearbyAreas: ["Levelland", "Lubbock", "Littlefield"] },
  { name: "Big Spring", slug: "big-spring", county: "Howard County", nearbyAreas: ["Midland", "Stanton", "Lamesa"] },
  { name: "Bledsoe", slug: "bledsoe", county: "Cochran County", nearbyAreas: ["Morton", "Levelland", "Plains"] },
  { name: "Brownfield", slug: "brownfield", county: "Terry County", nearbyAreas: ["Lubbock", "Levelland", "Lamesa"] },
  { name: "Bula", slug: "bula", county: "Bailey County", nearbyAreas: ["Morton", "Levelland", "Littlefield"] },
  { name: "Coahoma", slug: "coahoma", county: "Howard County", nearbyAreas: ["Big Spring", "Midland", "Stanton"] },
  { name: "Denver City", slug: "denver-city", county: "Yoakum County", nearbyAreas: ["Seminole", "Plains", "Hobbs"] },
  { name: "Enochs", slug: "enochs", county: "Bailey County", nearbyAreas: ["Morton", "Levelland", "Muleshoe"] },
  { name: "Forsan", slug: "forsan", county: "Howard County", nearbyAreas: ["Big Spring", "Midland", "Stanton"] },
  { name: "Gail", slug: "gail", county: "Borden County", nearbyAreas: ["Big Spring", "Lamesa", "Snyder"] },
  { name: "Garden City", slug: "garden-city", county: "Glasscock County", nearbyAreas: ["Midland", "Big Spring", "Stanton"] },
  { name: "Gardendale", slug: "gardendale", county: "Ector County", nearbyAreas: ["Odessa", "Midland", "Andrews"] },
  { name: "Goldsmith", slug: "goldsmith", county: "Ector County", nearbyAreas: ["Odessa", "Andrews", "Kermit"] },
  { name: "Idalou", slug: "idalou", county: "Lubbock County", nearbyAreas: ["Lubbock", "Slaton", "Lorenzo"] },
  { name: "Kermit", slug: "kermit", county: "Winkler County", nearbyAreas: ["Odessa", "Andrews", "Monahans"] },
  { name: "Knott", slug: "knott", county: "Howard County", nearbyAreas: ["Big Spring", "Lamesa", "Ackerly"] },
  { name: "Lamesa", slug: "lamesa", county: "Dawson County", nearbyAreas: ["Big Spring", "Lubbock", "Seminole"] },
  { name: "Lenorah", slug: "lenorah", county: "Martin County", nearbyAreas: ["Stanton", "Midland", "Big Spring"] },
  { name: "Levelland", slug: "levelland", county: "Hockley County", nearbyAreas: ["Lubbock", "Brownfield", "Morton"] },
  { name: "Loop", slug: "loop", county: "Gaines County", nearbyAreas: ["Seminole", "Seagraves", "Denver City"] },
  { name: "Lorenzo", slug: "lorenzo", county: "Crosby County", nearbyAreas: ["Lubbock", "Ralls", "Idalou"] },
  { name: "Lubbock", slug: "lubbock", county: "Lubbock County", nearbyAreas: ["Levelland", "Slaton", "Brownfield"] },
  { name: "Maple", slug: "maple", county: "Bailey County", nearbyAreas: ["Morton", "Muleshoe", "Levelland"] },
  { name: "Meadow", slug: "meadow", county: "Terry County", nearbyAreas: ["Brownfield", "Lubbock", "Levelland"] },
  { name: "Mentone", slug: "mentone", county: "Loving County", nearbyAreas: ["Pecos", "Kermit", "Monahans"] },
  { name: "Midland", slug: "midland", county: "Midland County", nearbyAreas: ["Odessa", "Big Spring", "Stanton"] },
  { name: "Monahans", slug: "monahans", county: "Ward County", nearbyAreas: ["Odessa", "Kermit", "Pecos"] },
  { name: "Morton", slug: "morton", county: "Cochran County", nearbyAreas: ["Levelland", "Muleshoe", "Plains"] },
  { name: "New Deal", slug: "new-deal", county: "Lubbock County", nearbyAreas: ["Lubbock", "Idalou", "Abernathy"] },
  { name: "New Home", slug: "new-home", county: "Lynn County", nearbyAreas: ["Lubbock", "Tahoka", "Slaton"] },
  { name: "Notrees", slug: "notrees", county: "Ector County", nearbyAreas: ["Odessa", "Andrews", "Kermit"] },
  { name: "O'Donnell", slug: "odonnell", county: "Lynn County", nearbyAreas: ["Lamesa", "Tahoka", "Lubbock"] },
  { name: "Odessa", slug: "odessa", county: "Ector County", nearbyAreas: ["Midland", "Andrews", "Big Spring"] },
  { name: "Orla", slug: "orla", county: "Reeves County", nearbyAreas: ["Pecos", "Mentone", "Kermit"] },
  { name: "Penwell", slug: "penwell", county: "Ector County", nearbyAreas: ["Odessa", "Midland", "Monahans"] },
  { name: "Pep", slug: "pep", county: "Hockley County", nearbyAreas: ["Levelland", "Morton", "Littlefield"] },
  { name: "Petersburg", slug: "petersburg", county: "Hale County", nearbyAreas: ["Lubbock", "Plainview", "Idalou"] },
  { name: "Pettit", slug: "pettit", county: "Hockley County", nearbyAreas: ["Levelland", "Lubbock", "Anton"] },
  { name: "Plains", slug: "plains", county: "Yoakum County", nearbyAreas: ["Denver City", "Seminole", "Brownfield"] },
  { name: "Post", slug: "post", county: "Garza County", nearbyAreas: ["Lubbock", "Slaton", "Snyder"] },
  { name: "Ralls", slug: "ralls", county: "Crosby County", nearbyAreas: ["Lubbock", "Lorenzo", "Floydada"] },
  { name: "Ransom Canyon", slug: "ransom-canyon", county: "Lubbock County", nearbyAreas: ["Lubbock", "Slaton", "Idalou"] },
  { name: "Ropesville", slug: "ropesville", county: "Hockley County", nearbyAreas: ["Levelland", "Lubbock", "Brownfield"] },
  { name: "Seagraves", slug: "seagraves", county: "Gaines County", nearbyAreas: ["Seminole", "Brownfield", "Denver City"] },
  { name: "Seminole", slug: "seminole", county: "Gaines County", nearbyAreas: ["Andrews", "Denver City", "Lamesa"] },
  { name: "Shallowater", slug: "shallowater", county: "Lubbock County", nearbyAreas: ["Lubbock", "Levelland", "Anton"] },
  { name: "Slaton", slug: "slaton", county: "Lubbock County", nearbyAreas: ["Lubbock", "Post", "Idalou"] },
  { name: "Smyer", slug: "smyer", county: "Hockley County", nearbyAreas: ["Levelland", "Lubbock", "Ropesville"] },
  { name: "Stanton", slug: "stanton", county: "Martin County", nearbyAreas: ["Midland", "Big Spring", "Lamesa"] },
  { name: "Sundown", slug: "sundown", county: "Hockley County", nearbyAreas: ["Levelland", "Brownfield", "Seagraves"] },
  { name: "Tahoka", slug: "tahoka", county: "Lynn County", nearbyAreas: ["Lubbock", "Lamesa", "Brownfield"] },
  { name: "Tarzan", slug: "tarzan", county: "Martin County", nearbyAreas: ["Stanton", "Midland", "Lamesa"] },
  { name: "Tokio", slug: "tokio", county: "Terry County", nearbyAreas: ["Brownfield", "Plains", "Denver City"] },
  { name: "Welch", slug: "welch", county: "Dawson County", nearbyAreas: ["Lamesa", "Brownfield", "Tahoka"] },
  { name: "Wellman", slug: "wellman", county: "Terry County", nearbyAreas: ["Brownfield", "Lamesa", "Seagraves"] },
  { name: "Whiteface", slug: "whiteface", county: "Cochran County", nearbyAreas: ["Morton", "Levelland", "Bledsoe"] },
  { name: "Whitharral", slug: "whitharral", county: "Hockley County", nearbyAreas: ["Levelland", "Littlefield", "Anton"] },
  { name: "Wickett", slug: "wickett", county: "Ward County", nearbyAreas: ["Monahans", "Kermit", "Odessa"] },
  { name: "Wilson", slug: "wilson", county: "Lynn County", nearbyAreas: ["Slaton", "Tahoka", "Lubbock"] },
  { name: "Wink", slug: "wink", county: "Winkler County", nearbyAreas: ["Kermit", "Monahans", "Odessa"] },
  { name: "Wolfforth", slug: "wolfforth", county: "Lubbock County", nearbyAreas: ["Lubbock", "Levelland", "Brownfield"] },
];

export const services: Service[] = [
  {
    name: "Spray Foam Insulation",
    slug: "spray-foam-insulation",
    description: "Professional spray foam insulation services providing superior air sealing and thermal performance for residential and commercial properties."
  },
  {
    name: "Attic Insulation",
    slug: "attic-insulation",
    description: "Expert attic insulation services to improve energy efficiency, reduce utility bills, and maintain comfortable indoor temperatures year-round."
  },
  {
    name: "Home Insulation",
    slug: "home-insulation",
    description: "Comprehensive home insulation solutions to enhance comfort, reduce energy costs, and create a healthier living environment."
  },
  {
    name: "Commercial Insulation",
    slug: "commercial-insulation",
    description: "Professional insulation services for commercial buildings, warehouses, and industrial facilities to optimize energy efficiency and comfort."
  },
  {
    name: "Insulation Removal",
    slug: "insulation-removal",
    description: "Safe and efficient removal of old, damaged, or contaminated insulation to prepare your space for new, high-performance insulation."
  },
  {
    name: "Insulation Contractor",
    slug: "insulation-contractor",
    description: "Licensed and experienced insulation contractors providing expert installation, consultation, and insulation services."
  },
  {
    name: "Insulation Company",
    slug: "insulation-company",
    description: "Your trusted local insulation company delivering quality insulation solutions with exceptional customer service."
  },
  {
    name: "Metal Building Insulation",
    slug: "metal-building-insulation",
    description: "Specialized insulation solutions for metal buildings, providing temperature control, condensation prevention, and energy savings."
  },
  {
    name: "Pole Barn Insulation",
    slug: "pole-barn-insulation",
    description: "Professional pole barn insulation services to regulate temperature, reduce moisture, and protect your equipment and livestock."
  },
  {
    name: "Warehouse Insulation",
    slug: "warehouse-insulation",
    description: "Industrial-grade warehouse insulation solutions to maintain consistent temperatures and reduce operational costs."
  },
  {
    name: "New Construction Insulation",
    slug: "new-construction-insulation",
    description: "Expert insulation services for new construction projects, ensuring optimal energy efficiency from the start."
  },
];

// County pages
export interface County {
  name: string;
  slug: string;
  cities: string[]; // Cities in this county
}

export const counties: County[] = [
  { name: "Andrews County", slug: "andrews-county", cities: ["Andrews"] },
  { name: "Gaines County", slug: "gaines-county", cities: ["Seminole", "Seagraves", "Loop"] },
  { name: "Lubbock County", slug: "lubbock-county", cities: ["Lubbock", "Idalou", "Slaton", "Wolfforth", "Shallowater", "Ransom Canyon", "New Deal"] },
  { name: "Terry County", slug: "terry-county", cities: ["Brownfield", "Meadow", "Wellman", "Tokio"] },
  { name: "Yoakum County", slug: "yoakum-county", cities: ["Denver City", "Plains"] },
];

// Services that have county pages (based on original site)
export const countyServices = [
  "spray-foam-insulation",
  "attic-insulation",
  "insulation-contractor",
];

// Helper function to generate all location page slugs
export function generateAllLocationSlugs(): string[] {
  const slugs: string[] = [];

  // Generate city pages for all services
  for (const service of services) {
    for (const city of cities) {
      slugs.push(`${service.slug}-${city.slug}-tx`);
    }
  }

  // Generate county pages for specific services
  for (const serviceSlug of countyServices) {
    for (const county of counties) {
      slugs.push(`${serviceSlug}-${county.slug}-tx`);
    }
  }

  return slugs;
}

// Helper function to parse a location slug (city or county)
export function parseLocationSlug(slug: string): { service: Service; city: City } | { service: Service; county: County } | null {
  const withoutTx = slug.replace(/-tx$/, '');

  // Sort services by slug length (longest first) to match correctly
  const sortedServices = [...services].sort((a, b) => b.slug.length - a.slug.length);

  for (const service of sortedServices) {
    if (withoutTx.startsWith(service.slug + '-')) {
      const locationSlug = withoutTx.slice(service.slug.length + 1);

      // Check if it's a county
      const county = counties.find(c => c.slug === locationSlug);
      if (county) {
        return { service, county };
      }

      // Check if it's a city
      const city = cities.find(c => c.slug === locationSlug);
      if (city) {
        return { service, city };
      }
    }
  }

  return null;
}

// Type guard to check if result is a city page
export function isCityPage(result: { service: Service; city: City } | { service: Service; county: County }): result is { service: Service; city: City } {
  return 'city' in result;
}

// Type guard to check if result is a county page
export function isCountyPage(result: { service: Service; city: City } | { service: Service; county: County }): result is { service: Service; county: County } {
  return 'county' in result;
}
