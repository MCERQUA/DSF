// Site configuration for SEO analysis
// This file contains the source data from the main site

export const SITE_URL = 'https://desertsprayfoaming.com';

// Import data from main site (these would be synced or duplicated)
export const cities = [
  { name: "Ackerly", slug: "ackerly", county: "Dawson County" },
  { name: "Andrews", slug: "andrews", county: "Andrews County" },
  { name: "Anton", slug: "anton", county: "Hockley County" },
  { name: "Big Spring", slug: "big-spring", county: "Howard County" },
  { name: "Bledsoe", slug: "bledsoe", county: "Cochran County" },
  { name: "Brownfield", slug: "brownfield", county: "Terry County" },
  { name: "Bula", slug: "bula", county: "Bailey County" },
  { name: "Coahoma", slug: "coahoma", county: "Howard County" },
  { name: "Denver City", slug: "denver-city", county: "Yoakum County" },
  { name: "Enochs", slug: "enochs", county: "Bailey County" },
  { name: "Forsan", slug: "forsan", county: "Howard County" },
  { name: "Gail", slug: "gail", county: "Borden County" },
  { name: "Garden City", slug: "garden-city", county: "Glasscock County" },
  { name: "Gardendale", slug: "gardendale", county: "Ector County" },
  { name: "Goldsmith", slug: "goldsmith", county: "Ector County" },
  { name: "Idalou", slug: "idalou", county: "Lubbock County" },
  { name: "Kermit", slug: "kermit", county: "Winkler County" },
  { name: "Knott", slug: "knott", county: "Howard County" },
  { name: "Lamesa", slug: "lamesa", county: "Dawson County" },
  { name: "Lenorah", slug: "lenorah", county: "Martin County" },
  { name: "Levelland", slug: "levelland", county: "Hockley County" },
  { name: "Loop", slug: "loop", county: "Gaines County" },
  { name: "Lorenzo", slug: "lorenzo", county: "Crosby County" },
  { name: "Lubbock", slug: "lubbock", county: "Lubbock County" },
  { name: "Maple", slug: "maple", county: "Bailey County" },
  { name: "Meadow", slug: "meadow", county: "Terry County" },
  { name: "Mentone", slug: "mentone", county: "Loving County" },
  { name: "Midland", slug: "midland", county: "Midland County" },
  { name: "Monahans", slug: "monahans", county: "Ward County" },
  { name: "Morton", slug: "morton", county: "Cochran County" },
  { name: "New Deal", slug: "new-deal", county: "Lubbock County" },
  { name: "New Home", slug: "new-home", county: "Lynn County" },
  { name: "Notrees", slug: "notrees", county: "Ector County" },
  { name: "O'Donnell", slug: "odonnell", county: "Lynn County" },
  { name: "Odessa", slug: "odessa", county: "Ector County" },
  { name: "Orla", slug: "orla", county: "Reeves County" },
  { name: "Penwell", slug: "penwell", county: "Ector County" },
  { name: "Pep", slug: "pep", county: "Hockley County" },
  { name: "Petersburg", slug: "petersburg", county: "Hale County" },
  { name: "Pettit", slug: "pettit", county: "Hockley County" },
  { name: "Plains", slug: "plains", county: "Yoakum County" },
  { name: "Post", slug: "post", county: "Garza County" },
  { name: "Ralls", slug: "ralls", county: "Crosby County" },
  { name: "Ransom Canyon", slug: "ransom-canyon", county: "Lubbock County" },
  { name: "Ropesville", slug: "ropesville", county: "Hockley County" },
  { name: "Seagraves", slug: "seagraves", county: "Gaines County" },
  { name: "Seminole", slug: "seminole", county: "Gaines County" },
  { name: "Shallowater", slug: "shallowater", county: "Lubbock County" },
  { name: "Slaton", slug: "slaton", county: "Lubbock County" },
  { name: "Smyer", slug: "smyer", county: "Hockley County" },
  { name: "Stanton", slug: "stanton", county: "Martin County" },
  { name: "Sundown", slug: "sundown", county: "Hockley County" },
  { name: "Tahoka", slug: "tahoka", county: "Lynn County" },
  { name: "Tarzan", slug: "tarzan", county: "Martin County" },
  { name: "Tokio", slug: "tokio", county: "Terry County" },
  { name: "Welch", slug: "welch", county: "Dawson County" },
  { name: "Wellman", slug: "wellman", county: "Terry County" },
  { name: "Whiteface", slug: "whiteface", county: "Cochran County" },
  { name: "Whitharral", slug: "whitharral", county: "Hockley County" },
  { name: "Wickett", slug: "wickett", county: "Ward County" },
  { name: "Wilson", slug: "wilson", county: "Lynn County" },
  { name: "Wink", slug: "wink", county: "Winkler County" },
  { name: "Wolfforth", slug: "wolfforth", county: "Lubbock County" },
];

export const services = [
  { name: "Spray Foam Insulation", slug: "spray-foam-insulation" },
  { name: "Attic Insulation", slug: "attic-insulation" },
  { name: "Home Insulation", slug: "home-insulation" },
  { name: "Commercial Insulation", slug: "commercial-insulation" },
  { name: "Insulation Removal", slug: "insulation-removal" },
  { name: "Insulation Contractor", slug: "insulation-contractor" },
  { name: "Insulation Company", slug: "insulation-company" },
  { name: "Metal Building Insulation", slug: "metal-building-insulation" },
  { name: "Pole Barn Insulation", slug: "pole-barn-insulation" },
  { name: "Warehouse Insulation", slug: "warehouse-insulation" },
  { name: "New Construction Insulation", slug: "new-construction-insulation" },
];

export const counties = [
  { name: "Andrews County", slug: "andrews-county", cities: ["Andrews"] },
  { name: "Gaines County", slug: "gaines-county", cities: ["Seminole", "Seagraves", "Loop"] },
  { name: "Lubbock County", slug: "lubbock-county", cities: ["Lubbock", "Idalou", "Slaton", "Wolfforth", "Shallowater", "Ransom Canyon", "New Deal"] },
  { name: "Terry County", slug: "terry-county", cities: ["Brownfield", "Meadow", "Wellman", "Tokio"] },
  { name: "Yoakum County", slug: "yoakum-county", cities: ["Denver City", "Plains"] },
];

export const countyServices = ["spray-foam-insulation", "attic-insulation", "insulation-contractor"];

// Static pages (not dynamically generated)
export const staticPages = [
  { path: '/', name: 'Home', priority: 'high' },
  { path: '/about-us/', name: 'About Us', priority: 'high' },
  { path: '/services/', name: 'Services', priority: 'high' },
  { path: '/contact-us/', name: 'Contact Us', priority: 'high' },
  { path: '/services-gallery/', name: 'Gallery', priority: 'medium' },
  { path: '/blog/', name: 'Blog', priority: 'medium' },
  { path: '/sitemap/', name: 'Sitemap', priority: 'low' },
  { path: '/find-us-on-the-web/', name: 'Find Us On The Web', priority: 'low' },
];

// Service pages (main service landing pages)
export const servicePages = services.map(s => ({
  path: `/${s.slug}/`,
  name: s.name,
  priority: 'high',
}));

// Blog posts - LIVE SITE REALITY: Only 3 placeholder posts with lorem ipsum (worthless)
export const blogPosts = [
  { slug: 'this-is-a-blog-post', title: 'This Is a Blog Post', isPlaceholder: true },
  { slug: 'this-is-a-blog-post-2', title: 'This Is a Blog Post', isPlaceholder: true },
  { slug: 'this-is-a-blog-post-3', title: 'This Is a Blog Post', isPlaceholder: true },
];

// Generate all expected URLs
export function getAllExpectedUrls(): string[] {
  const urls: string[] = [];

  // Static pages
  staticPages.forEach(p => urls.push(p.path));

  // Service pages
  servicePages.forEach(p => urls.push(p.path));

  // Blog posts
  blogPosts.forEach(p => urls.push(`/blog/${p.slug}/`));

  // Location pages (city + service)
  services.forEach(service => {
    cities.forEach(city => {
      urls.push(`/${service.slug}-${city.slug}-tx/`);
    });
  });

  // County pages (limited services)
  countyServices.forEach(serviceSlug => {
    counties.forEach(county => {
      urls.push(`/${serviceSlug}-${county.slug}-tx/`);
    });
  });

  return urls;
}

// Categorize a URL
export function categorizeUrl(url: string): 'static' | 'service' | 'blog' | 'location' | 'county' | 'unknown' {
  if (staticPages.some(p => p.path === url)) return 'static';
  if (servicePages.some(p => p.path === url)) return 'service';
  if (url.startsWith('/blog/')) return 'blog';
  if (url.match(/-county-tx\/$/)) return 'county';
  if (url.match(/-tx\/$/)) return 'location';
  return 'unknown';
}

// Get page importance score (for calculating orphan severity)
export function getPageImportance(url: string): number {
  const category = categorizeUrl(url);
  switch (category) {
    case 'static': return 10;
    case 'service': return 9;
    case 'blog': return 8;
    case 'county': return 6;
    case 'location': return 4; // Location pages are less critical individually
    default: return 5;
  }
}
