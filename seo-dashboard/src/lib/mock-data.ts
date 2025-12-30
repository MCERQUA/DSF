/**
 * Mock data for the SEO Dashboard
 *
 * This data represents the LIVE site at desertsprayfoaming.com
 * NOT the local project clone. When the domain is migrated to the
 * new site, these issues should improve.
 *
 * Live Site Reality (as of Dec 2025):
 * - 576 pages in sitemap
 * - 3 placeholder blog posts with lorem ipsum (worthless)
 * - ~570 location/service pages
 * - Heavy template reliance, minimal unique content
 */

import {
  SEOReport,
  SEOIssue,
  LinkGraphAnalysis,
  BlogConnectionAnalysis,
  ContentDepthAnalysis,
  TechnicalSEOAnalysis,
  PageLinkData,
  PageContentAnalysis,
} from '@/types/seo';

// Generate realistic orphan pages based on live site structure
const generateOrphanPages = (): PageLinkData[] => {
  const pages: PageLinkData[] = [];
  const services = [
    'spray-foam-insulation',
    'attic-insulation',
    'home-insulation',
    'commercial-insulation',
    'insulation-removal',
    'insulation-contractor',
    'insulation-company',
    'metal-building-insulation',
    'pole-barn-insulation',
    'warehouse-insulation',
    'new-construction-insulation',
  ];
  const cities = [
    'ackerly', 'andrews', 'anton', 'big-spring', 'bledsoe', 'brownfield',
    'coahoma', 'denver-city', 'forsan', 'gail', 'garden-city', 'goldsmith',
    'kermit', 'lamesa', 'levelland', 'loop', 'lubbock', 'midland', 'morton',
    'odessa', 'plains', 'post', 'seminole', 'slaton', 'stanton', 'tahoka',
    'shallowater', 'wickett', 'wink', 'wilson', 'wolfforth', 'monahans',
    'idalou', 'lorenzo', 'meadow', 'new-deal', 'new-home', 'pep', 'ralls',
    'ransom-canyon', 'ropesville', 'seagraves', 'smyer', 'sundown', 'tarzan',
    'tokio', 'welch', 'wellman', 'whiteface', 'whitharral'
  ];

  // Location pages - most are orphaned (only linked from sitemap)
  let index = 0;
  for (const service of services) {
    for (const city of cities) {
      if (index >= 500) break;
      pages.push({
        url: `/${service}-${city}-tx/`,
        title: '',
        incomingLinks: ['/sitemap/'],  // Only linked from HTML sitemap
        outgoingLinks: ['/', '/contact-us/', `/${service}/`],
        incomingCount: 1,
        outgoingCount: 3,
        linkDepth: 2,  // Sitemap is 1 click from home, these are 2
        isOrphan: true,  // Less than 2 contextual links
        anchorTexts: [],
      });
      index++;
    }
  }

  return pages;
};

// Generate thin content pages for location pages
const generateThinContentPages = (): PageContentAnalysis[] => {
  const pages: PageContentAnalysis[] = [];
  const services = [
    'spray-foam-insulation', 'attic-insulation', 'home-insulation',
    'commercial-insulation', 'insulation-removal', 'metal-building-insulation',
    'pole-barn-insulation', 'warehouse-insulation', 'new-construction-insulation'
  ];
  const cities = ['ackerly', 'andrews', 'big-spring', 'brownfield', 'denver-city',
    'kermit', 'lamesa', 'levelland', 'lubbock', 'midland', 'odessa', 'seminole'];

  for (const service of services) {
    for (const city of cities) {
      const serviceName = service.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      const cityName = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

      pages.push({
        url: `/${service}-${city}-tx/`,
        title: `${serviceName} in ${cityName}, TX | Desert Spray Foaming`,
        titleLength: 50 + Math.floor(Math.random() * 20),
        isTitleUnique: false,  // Most use same template pattern
        metaDescription: `Professional ${serviceName.toLowerCase()} services in ${cityName}, TX. Contact Desert Spray Foaming for a free estimate.`,
        metaDescriptionLength: 95,
        isMetaUnique: false,
        h1Count: 1,
        h2Count: 2,
        h3Count: 1,
        hasHeadingHierarchyIssue: false,
        totalWordCount: 350 + Math.floor(Math.random() * 150),
        uniqueWordCount: 45 + Math.floor(Math.random() * 40),
        templateRatio: 0.85,
        hasFAQ: false,
        questionsAnswered: 0,
        hasSchema: false,
        schemaTypes: [],
        images: { total: 2, withAlt: 1, withoutAlt: 1 },
        readabilityScore: 62,
      });
    }
  }

  return pages;
};

// Mock issues reflecting LIVE site problems
const mockIssues: SEOIssue[] = [
  // CRITICAL: Blog is completely worthless
  {
    id: 'placeholder-blog-content',
    severity: 'critical',
    category: 'Content Quality',
    title: 'Blog has 3 placeholder posts with lorem ipsum text',
    description: 'The blog section contains only 3 posts titled "This Is a Blog Post" with generic lorem ipsum placeholder text. This provides zero value to users or search engines.',
    affectedPages: [
      '/this-is-a-blog-post/',
      '/this-is-a-blog-post-2/',
      '/this-is-a-blog-post-3/',
    ],
    recommendation: 'Either remove the placeholder posts entirely or replace them with real, valuable content about spray foam insulation topics.',
    impact: 'Placeholder content looks unprofessional and provides no SEO value. Search engines may penalize sites with obvious filler content.',
  },
  {
    id: 'location-pages-isolated',
    severity: 'critical',
    category: 'Internal Linking',
    title: '500+ location pages have almost no internal links',
    description: 'Location pages are only linked from the HTML sitemap page. They have no contextual links from blog posts, service pages, or other location pages.',
    affectedPages: generateOrphanPages().slice(0, 20).map(p => p.url),
    recommendation: 'Create "nearby areas" links between location pages. Add location mentions with links in blog posts. Service pages should link to top locations.',
    impact: 'Location pages have minimal link equity and may not rank well despite existing.',
  },
  {
    id: 'no-real-blog-content',
    severity: 'critical',
    category: 'Content Strategy',
    title: 'No actual blog content exists - 0 real articles',
    description: 'The site has no legitimate blog content. All 11 services have ZERO blog coverage because the only posts are lorem ipsum placeholders.',
    affectedPages: ['/blog/'],
    recommendation: 'Create at least 2-3 blog posts per service covering benefits, FAQs, case studies, and comparison guides.',
    impact: 'Missing opportunity to build topical authority and capture informational search queries.',
  },
  {
    id: 'thin-content-majority',
    severity: 'critical',
    category: 'Content Quality',
    title: '90%+ of pages have less than 100 words of unique content',
    description: 'Location pages rely almost entirely on template content with only the city/service name swapped. The actual unique, valuable content per page is minimal.',
    affectedPages: [],
    recommendation: 'Add location-specific information: local weather considerations, regional building types, nearby project examples, area-specific FAQs.',
    impact: 'Google may see these as thin content or near-duplicates, limiting ranking potential.',
  },
  {
    id: 'duplicate-title-tags',
    severity: 'warning',
    category: 'Technical SEO',
    title: '500+ pages use templated title tags',
    description: 'Title tags follow the exact same pattern "[Service] in [City], TX | Desert Spray Foaming" with no differentiation.',
    affectedPages: generateOrphanPages().slice(0, 15).map(p => p.url),
    recommendation: 'Add unique value propositions or differentiators to each title tag.',
    impact: 'Identical patterns make it hard for search engines to understand page uniqueness.',
  },
  {
    id: 'duplicate-meta-descriptions',
    severity: 'warning',
    category: 'Technical SEO',
    title: '500+ pages share templated meta descriptions',
    description: 'Meta descriptions follow the same template pattern with only city names swapped. This provides no differentiation in search results.',
    affectedPages: generateOrphanPages().slice(0, 15).map(p => p.url),
    recommendation: 'Write unique meta descriptions that highlight specific value propositions for each page.',
    impact: 'Identical metas reduce click-through rates and make pages indistinguishable in search results.',
  },
  {
    id: 'no-schema-markup',
    severity: 'warning',
    category: 'Technical SEO',
    title: 'Most pages have no structured data',
    description: 'Location and service pages lack LocalBusiness, Service, or FAQPage schema markup.',
    affectedPages: ['/spray-foam-insulation/', '/attic-insulation/', '/commercial-insulation/'],
    recommendation: 'Add LocalBusiness schema to location pages, Service schema to service pages.',
    impact: 'Missing opportunity for rich results in search.',
  },
  {
    id: 'no-faq-sections',
    severity: 'opportunity',
    category: 'Content Enhancement',
    title: 'No FAQ sections on service or location pages',
    description: 'Pages lack FAQ content that could help answer common questions and improve search visibility.',
    affectedPages: [
      '/spray-foam-insulation/',
      '/attic-insulation/',
      '/commercial-insulation/',
      '/home-insulation/',
    ],
    recommendation: 'Add FAQ sections with schema markup covering common customer questions.',
    impact: 'Missing opportunity for rich results and comprehensive content.',
  },
  {
    id: 'no-llms-txt',
    severity: 'opportunity',
    category: 'AI Search',
    title: 'No llms.txt file for AI search optimization',
    description: 'The site lacks an llms.txt file which helps AI search engines understand the site structure and content.',
    affectedPages: [],
    recommendation: 'Create an llms.txt file in the root directory with site overview and key pages.',
    impact: 'Missing optimization for AI-powered search engines like Perplexity, ChatGPT, Claude.',
  },
  {
    id: 'images-missing-alt',
    severity: 'warning',
    category: 'Accessibility & SEO',
    title: 'Many images lack alt text',
    description: 'Images across the site are missing descriptive alt attributes.',
    affectedPages: [],
    recommendation: 'Add descriptive alt text to all images.',
    impact: 'Missing accessibility compliance and image SEO opportunities.',
  },
];

// Link Analysis - reflects actual live site structure
const mockLinkAnalysis: LinkGraphAnalysis = {
  totalPages: 576,
  totalInternalLinks: 1800,
  orphanPages: generateOrphanPages(),
  weaklyLinkedPages: generateOrphanPages().slice(0, 30).map(p => ({ ...p, incomingCount: 2 })),
  hubPages: [
    { url: '/', title: 'Home', incomingLinks: [], outgoingLinks: [], incomingCount: 576, outgoingCount: 25, linkDepth: 0, isOrphan: false, anchorTexts: [] },
    { url: '/sitemap/', title: 'Sitemap', incomingLinks: [], outgoingLinks: [], incomingCount: 5, outgoingCount: 576, linkDepth: 1, isOrphan: false, anchorTexts: [] },
    { url: '/services/', title: 'Services', incomingLinks: [], outgoingLinks: [], incomingCount: 20, outgoingCount: 11, linkDepth: 1, isOrphan: false, anchorTexts: [] },
  ],
  authorityPages: [
    { url: '/', title: 'Home', incomingLinks: [], outgoingLinks: [], incomingCount: 576, outgoingCount: 25, linkDepth: 0, isOrphan: false, anchorTexts: [] },
    { url: '/contact-us/', title: 'Contact', incomingLinks: [], outgoingLinks: [], incomingCount: 550, outgoingCount: 3, linkDepth: 1, isOrphan: false, anchorTexts: [] },
    { url: '/spray-foam-insulation/', title: 'Spray Foam', incomingLinks: [], outgoingLinks: [], incomingCount: 100, outgoingCount: 8, linkDepth: 1, isOrphan: false, anchorTexts: [] },
  ],
  averageLinksPerPage: 3.1,
  maxLinkDepth: 3,
  unreachablePages: [],
  linkDistribution: {
    zeroLinks: 0,
    oneToTwo: 520,   // Most location pages only have sitemap link
    threeToFive: 40,
    sixToTen: 10,
    moreThanTen: 6,
  },
};

// Blog Analysis - reflects reality: 3 worthless placeholder posts
const mockBlogAnalysis: BlogConnectionAnalysis = {
  totalBlogPosts: 3,  // All are placeholder garbage
  servicesNeverMentioned: [
    'spray-foam-insulation',
    'attic-insulation',
    'home-insulation',
    'commercial-insulation',
    'insulation-removal',
    'insulation-contractor',
    'insulation-company',
    'metal-building-insulation',
    'pole-barn-insulation',
    'warehouse-insulation',
    'new-construction-insulation',
  ],
  locationsNeverMentioned: [
    'ackerly', 'andrews', 'anton', 'big-spring', 'bledsoe', 'brownfield',
    'coahoma', 'denver-city', 'forsan', 'gail', 'garden-city', 'goldsmith',
    'kermit', 'lamesa', 'levelland', 'loop', 'lubbock', 'midland', 'morton',
    'odessa', 'plains', 'post', 'seminole', 'slaton', 'stanton', 'tahoka',
  ],
  servicesWithBlogCoverage: [],  // NONE - all posts are lorem ipsum
  locationsWithBlogCoverage: [], // NONE - all posts are lorem ipsum
  blogToServiceLinks: 0,
  blogToLocationLinks: 0,
  averageBlogWordCount: 0,  // Lorem ipsum doesn't count
  staleBlogPosts: [
    {
      url: '/this-is-a-blog-post/',
      title: 'This Is a Blog Post',
      date: '2023-03-31',
      wordCount: 0,
      mentionedServices: [],
      mentionedLocations: [],
      internalLinks: [],
      externalLinks: [],
    },
    {
      url: '/this-is-a-blog-post-2/',
      title: 'This Is a Blog Post',
      date: '2023-03-31',
      wordCount: 0,
      mentionedServices: [],
      mentionedLocations: [],
      internalLinks: [],
      externalLinks: [],
    },
    {
      url: '/this-is-a-blog-post-3/',
      title: 'This Is a Blog Post',
      date: '2023-03-31',
      wordCount: 0,
      mentionedServices: [],
      mentionedLocations: [],
      internalLinks: [],
      externalLinks: [],
    },
  ],
};

// Content Analysis - reflects actual thin content situation
const mockContentAnalysis: ContentDepthAnalysis = {
  thinContentPages: generateThinContentPages(),
  missingMetaDescriptions: [],
  duplicateMetaDescriptions: [
    {
      meta: 'Professional spray foam insulation services. Energy efficient solutions for your home or business. Contact us for a free estimate.',
      pages: generateOrphanPages().slice(0, 60).map(p => p.url),
    },
    {
      meta: 'Expert attic insulation services. Reduce energy bills and improve comfort. Free estimates available.',
      pages: generateOrphanPages().slice(60, 120).map(p => p.url),
    },
    {
      meta: 'Quality insulation contractor services in your area. Contact us today for professional insulation solutions.',
      pages: generateOrphanPages().slice(120, 180).map(p => p.url),
    },
  ],
  missingH1: [],
  multipleH1: [],
  pagesWithoutFAQ: [
    '/spray-foam-insulation/',
    '/attic-insulation/',
    '/home-insulation/',
    '/commercial-insulation/',
    '/insulation-removal/',
    '/insulation-contractor/',
    '/insulation-company/',
    '/metal-building-insulation/',
    '/pole-barn-insulation/',
    '/warehouse-insulation/',
    '/new-construction-insulation/',
  ],
  pagesWithoutSchema: generateOrphanPages().slice(0, 100).map(p => p.url),
  imagesWithoutAlt: generateOrphanPages().slice(0, 50).map(p => ({ page: p.url, images: [] })),
  averageWordCount: 380,
  averageUniqueContentRatio: 0.12,  // Only 12% of content is unique - very bad
  contentQualityDistribution: {
    poor: 480,      // Most location pages
    thin: 70,
    adequate: 20,
    good: 5,
    comprehensive: 1,
  },
  // NEW: Title Tag Analysis
  missingTitles: [],
  duplicateTitles: [
    {
      title: 'Spray Foam Insulation in [City], TX | Desert Spray Foaming',
      pages: generateOrphanPages().slice(0, 50).map(p => p.url),
    },
    {
      title: 'Attic Insulation in [City], TX | Desert Spray Foaming',
      pages: generateOrphanPages().slice(50, 90).map(p => p.url),
    },
  ],
  titlesTooShort: [],
  titlesTooLong: generateOrphanPages().slice(0, 15).map(p => p.url),  // Some long service+city combos
  // NEW: URL Issues
  urlsWithUnderscores: [],  // Site uses hyphens correctly
  urlsTooLong: [],
  // NEW: Heading Hierarchy
  headingHierarchyIssues: [],
  pagesWithoutH2: generateOrphanPages().slice(0, 20).map(p => p.url),
};

// NEW: Technical SEO Analysis
const mockTechnicalAnalysis: TechnicalSEOAnalysis = {
  hasSitemapXml: true,
  hasRobotsTxt: true,
  sitemapInRobots: true,  // Points to sitemaps.xml (note: typo in their robots.txt)
  sitemapUrl: 'https://desertsprayfoaming.com/sitemaps.xml',
  robotsTxtIssues: [
    'Sitemap URL in robots.txt has typo: "sitemaps.xml" instead of "sitemap.xml"',
  ],
  crawlDepthDistribution: {
    depth0: 1,      // Homepage
    depth1: 20,     // Main pages (services, about, contact, blog)
    depth2: 555,    // Most location pages (linked from sitemap)
    depth3: 0,
    depth4Plus: 0,
  },
  pagesAt4PlusDepth: [],
  isHttps: true,
  hasMixedContent: false,
  hasLlmsTxt: false,
  llmsTxtIssues: ['No llms.txt file found - missing AI search optimization'],
};

// Full Report
export const mockReport: SEOReport = {
  generatedAt: new Date().toISOString(),
  siteUrl: 'https://desertsprayfoaming.com',
  summary: {
    criticalIssues: mockIssues.filter(i => i.severity === 'critical').length,
    warnings: mockIssues.filter(i => i.severity === 'warning').length,
    opportunities: mockIssues.filter(i => i.severity === 'opportunity').length,
    overallHealthScore: 22,  // Very harsh - the live site has major issues
  },
  issues: mockIssues,
  linkAnalysis: mockLinkAnalysis,
  blogAnalysis: mockBlogAnalysis,
  contentAnalysis: mockContentAnalysis,
  technicalAnalysis: mockTechnicalAnalysis,
  actionItems: {
    immediate: [
      '[Content] Remove or replace 3 lorem ipsum placeholder blog posts',
      '[Internal Linking] Add "Nearby Areas" section to all location pages',
      '[Content] Add 200+ words of unique, location-specific content to each location page',
      '[Technical] Create real blog content covering each service (at least 2 posts per service)',
    ],
    shortTerm: [
      '[Technical SEO] Fix sitemap URL typo in robots.txt',
      '[Technical SEO] Write unique meta descriptions for all location pages',
      '[Schema] Add LocalBusiness schema to all location pages',
      '[Content] Add FAQ sections with schema to all service pages',
    ],
    longTerm: [
      '[AI SEO] Create llms.txt file for AI search optimization',
      '[Content Strategy] Create case studies for completed projects',
      '[Internal Linking] Implement topic clusters linking blog to service pages',
      '[Content] Add customer testimonials and reviews to location pages',
    ],
  },
  pageDetails: new Map(),
};
