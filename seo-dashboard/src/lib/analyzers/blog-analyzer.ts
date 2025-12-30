/**
 * Blog Connection Analyzer
 *
 * This analyzer examines how well blog content supports your service and location pages.
 * Having 700+ location pages means NOTHING if your blog doesn't mention them.
 *
 * Critical questions:
 * - How many services have ZERO blog coverage?
 * - How many locations are NEVER mentioned in any content?
 * - Are blog posts actually linking to relevant service/location pages?
 * - Is your blog supporting your SEO strategy or just existing?
 */

import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';
import { BlogPost, BlogConnectionAnalysis, SEOIssue } from '@/types/seo';
import { services, cities, SITE_URL, blogPosts as knownBlogPosts } from '../site-config';

export class BlogAnalyzer {
  private outputDir: string;

  constructor(outputDir: string) {
    this.outputDir = outputDir;
  }

  async analyze(): Promise<BlogConnectionAnalysis> {
    const blogPosts = await this.parseBlogPosts();

    // Track service mentions
    const serviceMentions = new Map<string, { count: number; posts: string[] }>();
    services.forEach(s => serviceMentions.set(s.slug, { count: 0, posts: [] }));

    // Track location mentions
    const locationMentions = new Map<string, { count: number; posts: string[] }>();
    cities.forEach(c => locationMentions.set(c.slug, { count: 0, posts: [] }));

    let totalBlogToServiceLinks = 0;
    let totalBlogToLocationLinks = 0;
    let totalWordCount = 0;

    // Analyze each blog post
    for (const post of blogPosts) {
      totalWordCount += post.wordCount;

      // Count service mentions
      for (const serviceSlug of post.mentionedServices) {
        const existing = serviceMentions.get(serviceSlug);
        if (existing) {
          existing.count++;
          existing.posts.push(post.url);
        }
      }

      // Count location mentions
      for (const locationSlug of post.mentionedLocations) {
        const existing = locationMentions.get(locationSlug);
        if (existing) {
          existing.count++;
          existing.posts.push(post.url);
        }
      }

      // Count links to service and location pages
      for (const link of post.internalLinks) {
        if (services.some(s => link.includes(s.slug) && !link.includes('-tx/'))) {
          totalBlogToServiceLinks++;
        }
        if (link.includes('-tx/')) {
          totalBlogToLocationLinks++;
        }
      }
    }

    // Find services never mentioned
    const servicesNeverMentioned = Array.from(serviceMentions.entries())
      .filter(([_, data]) => data.count === 0)
      .map(([slug, _]) => slug);

    // Find locations never mentioned
    const locationsNeverMentioned = Array.from(locationMentions.entries())
      .filter(([_, data]) => data.count === 0)
      .map(([slug, _]) => slug);

    // Build coverage arrays
    const servicesWithBlogCoverage = Array.from(serviceMentions.entries())
      .filter(([_, data]) => data.count > 0)
      .map(([slug, data]) => ({
        service: slug,
        mentionCount: data.count,
        blogPosts: data.posts,
      }))
      .sort((a, b) => b.mentionCount - a.mentionCount);

    const locationsWithBlogCoverage = Array.from(locationMentions.entries())
      .filter(([_, data]) => data.count > 0)
      .map(([slug, data]) => ({
        location: slug,
        mentionCount: data.count,
        blogPosts: data.posts,
      }))
      .sort((a, b) => b.mentionCount - a.mentionCount);

    // Find stale blog posts (this would need date parsing in real implementation)
    const staleBlogPosts: BlogPost[] = []; // Placeholder

    return {
      totalBlogPosts: blogPosts.length,
      servicesNeverMentioned,
      locationsNeverMentioned,
      servicesWithBlogCoverage,
      locationsWithBlogCoverage,
      blogToServiceLinks: totalBlogToServiceLinks,
      blogToLocationLinks: totalBlogToLocationLinks,
      averageBlogWordCount: blogPosts.length > 0 ? totalWordCount / blogPosts.length : 0,
      staleBlogPosts,
    };
  }

  private async parseBlogPosts(): Promise<BlogPost[]> {
    const posts: BlogPost[] = [];
    const blogDir = path.join(this.outputDir, 'blog');

    if (!fs.existsSync(blogDir)) {
      return posts;
    }

    // Read each blog post directory
    const entries = fs.readdirSync(blogDir, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      if (entry.name === 'index.html') continue;

      const postPath = path.join(blogDir, entry.name, 'index.html');
      if (!fs.existsSync(postPath)) continue;

      const html = fs.readFileSync(postPath, 'utf-8');
      const $ = cheerio.load(html);

      const url = `/blog/${entry.name}/`;
      const title = $('h1').first().text().trim() || entry.name;

      // Get content text
      const bodyText = $('main, article, .content, body').text().toLowerCase();
      const wordCount = bodyText.split(/\s+/).filter(w => w.length > 0).length;

      // Find mentioned services (by name or slug)
      const mentionedServices: string[] = [];
      for (const service of services) {
        const namePattern = service.name.toLowerCase();
        const slugPattern = service.slug.replace(/-/g, ' ');
        if (bodyText.includes(namePattern) || bodyText.includes(slugPattern)) {
          mentionedServices.push(service.slug);
        }
      }

      // Find mentioned locations
      const mentionedLocations: string[] = [];
      for (const city of cities) {
        const namePattern = city.name.toLowerCase();
        if (bodyText.includes(namePattern)) {
          mentionedLocations.push(city.slug);
        }
      }

      // Extract internal and external links
      const internalLinks: string[] = [];
      const externalLinks: string[] = [];

      $('a[href]').each((_, element) => {
        const href = $(element).attr('href');
        if (!href) return;

        if (href.startsWith('http') && !href.includes(SITE_URL.replace('https://', ''))) {
          externalLinks.push(href);
        } else if (href.startsWith('/') || href.startsWith(SITE_URL)) {
          const normalized = href.replace(SITE_URL, '');
          internalLinks.push(normalized.startsWith('/') ? normalized : '/' + normalized);
        }
      });

      posts.push({
        url,
        title,
        date: '', // Would need to extract from page
        wordCount,
        mentionedServices: [...new Set(mentionedServices)],
        mentionedLocations: [...new Set(mentionedLocations)],
        internalLinks: [...new Set(internalLinks)],
        externalLinks: [...new Set(externalLinks)],
      });
    }

    return posts;
  }

  /**
   * Generate critical issues from blog analysis
   */
  generateIssues(analysis: BlogConnectionAnalysis): SEOIssue[] {
    const issues: SEOIssue[] = [];

    // Critical: No blog posts at all
    if (analysis.totalBlogPosts === 0) {
      issues.push({
        id: 'no-blog-content',
        severity: 'critical',
        category: 'Content Strategy',
        title: 'No blog content exists',
        description: 'The blog section has no published content. Blog posts are essential for topical authority and internal linking.',
        affectedPages: ['/blog/'],
        recommendation: 'Create blog content covering each service type, FAQ content, and location-specific guides.',
        impact: 'Missing opportunity to build topical authority and support service pages with contextual links.',
      });
    } else if (analysis.totalBlogPosts < 10) {
      issues.push({
        id: 'insufficient-blog-content',
        severity: 'warning',
        category: 'Content Strategy',
        title: `Only ${analysis.totalBlogPosts} blog posts exist`,
        description: 'The blog has minimal content. Each service should have multiple supporting articles.',
        affectedPages: ['/blog/'],
        recommendation: 'Aim for at least 3-5 blog posts per service type, plus seasonal and FAQ content.',
        impact: 'Limited content means limited opportunities to rank for informational queries.',
      });
    }

    // Critical: Services with no blog coverage
    if (analysis.servicesNeverMentioned.length > 0) {
      const percentage = (analysis.servicesNeverMentioned.length / services.length) * 100;
      issues.push({
        id: 'services-no-blog-coverage',
        severity: percentage > 50 ? 'critical' : 'warning',
        category: 'Content Gaps',
        title: `${analysis.servicesNeverMentioned.length} services have ZERO blog mentions`,
        description: `These services are not mentioned in any blog content: ${analysis.servicesNeverMentioned.join(', ')}`,
        affectedPages: analysis.servicesNeverMentioned.map(s => `/${s}/`),
        recommendation: 'Create dedicated blog posts for each service explaining benefits, process, FAQs, and case studies.',
        impact: 'Service pages have no supporting content to build topical relevance.',
      });
    }

    // Warning: Locations never mentioned
    const locationCoveragePercent = ((cities.length - analysis.locationsNeverMentioned.length) / cities.length) * 100;
    if (locationCoveragePercent < 10) {
      issues.push({
        id: 'locations-no-blog-coverage',
        severity: 'warning',
        category: 'Content Gaps',
        title: `${analysis.locationsNeverMentioned.length} of ${cities.length} locations (${(100 - locationCoveragePercent).toFixed(0)}%) have no blog mentions`,
        description: 'The vast majority of location pages have no supporting blog content.',
        affectedPages: analysis.locationsNeverMentioned.slice(0, 20).map(l => `/${l}/`),
        recommendation: 'Create regional blog posts (by county or area) that mention multiple cities. Create case studies from specific locations.',
        impact: 'Location pages are not supported by any topical content.',
      });
    }

    // Critical: Blog posts not linking to service pages
    if (analysis.totalBlogPosts > 0 && analysis.blogToServiceLinks < analysis.totalBlogPosts) {
      issues.push({
        id: 'blog-not-linking-services',
        severity: 'critical',
        category: 'Internal Linking',
        title: `Blog posts average only ${(analysis.blogToServiceLinks / analysis.totalBlogPosts).toFixed(1)} links to service pages`,
        description: 'Blog posts are not effectively linking to service pages to pass link equity and drive conversions.',
        affectedPages: ['/blog/'],
        recommendation: 'Each blog post should include 2-3 contextual links to relevant service pages.',
        impact: 'Blog content is not supporting service page rankings.',
      });
    }

    // Warning: Blog not linking to location pages
    if (analysis.totalBlogPosts > 0 && analysis.blogToLocationLinks === 0) {
      issues.push({
        id: 'blog-not-linking-locations',
        severity: 'warning',
        category: 'Internal Linking',
        title: 'Blog posts have ZERO links to location pages',
        description: 'No blog content links to any location-specific pages.',
        affectedPages: ['/blog/'],
        recommendation: 'When mentioning areas or providing location-specific information, link to relevant location pages.',
        impact: 'Location pages receive no contextual link support.',
      });
    }

    // Warning: Thin blog content
    if (analysis.averageBlogWordCount > 0 && analysis.averageBlogWordCount < 800) {
      issues.push({
        id: 'thin-blog-content',
        severity: 'warning',
        category: 'Content Quality',
        title: `Blog posts average only ${Math.round(analysis.averageBlogWordCount)} words`,
        description: 'Blog posts are too short to provide comprehensive value. Aim for 1,500-2,500 words for pillar content.',
        affectedPages: ['/blog/'],
        recommendation: 'Expand blog posts with more detail, examples, FAQs, and related topics.',
        impact: 'Thin content is less likely to rank well for competitive queries.',
      });
    }

    return issues;
  }
}
