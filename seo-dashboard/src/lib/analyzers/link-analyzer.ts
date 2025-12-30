/**
 * Internal Link Graph Analyzer
 *
 * This analyzer is CRITICAL and HARSH. It doesn't care that you have 700+ pages.
 * It cares about:
 * - How many pages are orphaned (no internal links pointing to them)
 * - How poorly distributed your link equity is
 * - Which important pages are being neglected
 * - The actual connectivity of your site graph
 */

import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';
import { PageLinkData, LinkGraphAnalysis, SEOIssue } from '@/types/seo';
import { SITE_URL, getPageImportance, categorizeUrl } from '../site-config';

interface RawLinkData {
  sourceUrl: string;
  targetUrls: string[];
  anchorTexts: Map<string, string[]>;
}

export class LinkAnalyzer {
  private outputDir: string;
  private linkData: Map<string, RawLinkData> = new Map();
  private allPages: Set<string> = new Set();

  constructor(outputDir: string) {
    this.outputDir = outputDir;
  }

  /**
   * Crawl the static output directory and build the link graph
   */
  async analyze(): Promise<LinkGraphAnalysis> {
    // First, discover all pages
    await this.discoverPages(this.outputDir);

    // Then, parse each page for links
    await this.extractLinks();

    // Finally, analyze the graph
    return this.buildAnalysis();
  }

  private async discoverPages(dir: string, basePath: string = ''): Promise<void> {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const urlPath = path.join(basePath, entry.name);

      if (entry.isDirectory()) {
        await this.discoverPages(fullPath, urlPath);
      } else if (entry.name === 'index.html') {
        // Convert file path to URL path
        const pagePath = basePath === '' ? '/' : `/${basePath}/`;
        this.allPages.add(pagePath);
      }
    }
  }

  private async extractLinks(): Promise<void> {
    for (const pageUrl of this.allPages) {
      const filePath = this.urlToFilePath(pageUrl);

      if (!fs.existsSync(filePath)) continue;

      const html = fs.readFileSync(filePath, 'utf-8');
      const $ = cheerio.load(html);

      const targetUrls: string[] = [];
      const anchorTexts = new Map<string, string[]>();

      // Find all internal links
      $('a[href]').each((_, element) => {
        const href = $(element).attr('href');
        if (!href) return;

        // Normalize the URL
        const normalizedUrl = this.normalizeUrl(href);
        if (!normalizedUrl) return; // Skip external links

        // Only count links to pages we know exist
        if (this.allPages.has(normalizedUrl)) {
          targetUrls.push(normalizedUrl);

          // Track anchor text
          const anchorText = $(element).text().trim();
          if (anchorText) {
            const existing = anchorTexts.get(normalizedUrl) || [];
            existing.push(anchorText);
            anchorTexts.set(normalizedUrl, existing);
          }
        }
      });

      this.linkData.set(pageUrl, {
        sourceUrl: pageUrl,
        targetUrls: [...new Set(targetUrls)], // Deduplicate
        anchorTexts,
      });
    }
  }

  private normalizeUrl(href: string): string | null {
    // Skip external links, anchors, javascript, etc.
    if (href.startsWith('http') && !href.startsWith(SITE_URL)) return null;
    if (href.startsWith('mailto:')) return null;
    if (href.startsWith('tel:')) return null;
    if (href.startsWith('#')) return null;
    if (href.startsWith('javascript:')) return null;

    // Remove the site URL if present
    let url = href.replace(SITE_URL, '');

    // Ensure leading slash
    if (!url.startsWith('/')) url = '/' + url;

    // Ensure trailing slash for consistency
    if (!url.endsWith('/') && !url.includes('.')) url += '/';

    // Remove any anchor fragments
    url = url.split('#')[0];

    return url;
  }

  private urlToFilePath(url: string): string {
    const relativePath = url === '/' ? '' : url.slice(1, -1);
    return path.join(this.outputDir, relativePath, 'index.html');
  }

  private buildAnalysis(): LinkGraphAnalysis {
    const pageAnalysis: Map<string, PageLinkData> = new Map();

    // Build incoming links for each page
    const incomingLinks: Map<string, Set<string>> = new Map();
    const anchorTextsPerPage: Map<string, string[]> = new Map();

    for (const pageUrl of this.allPages) {
      incomingLinks.set(pageUrl, new Set());
      anchorTextsPerPage.set(pageUrl, []);
    }

    // Count incoming links
    for (const [sourceUrl, data] of this.linkData) {
      for (const targetUrl of data.targetUrls) {
        incomingLinks.get(targetUrl)?.add(sourceUrl);

        const anchors = data.anchorTexts.get(targetUrl);
        if (anchors) {
          anchorTextsPerPage.get(targetUrl)?.push(...anchors);
        }
      }
    }

    // Calculate link depth using BFS from homepage
    const linkDepth = this.calculateLinkDepth();

    // Build analysis for each page
    for (const pageUrl of this.allPages) {
      const data = this.linkData.get(pageUrl);
      const incoming = incomingLinks.get(pageUrl) || new Set();
      const anchors = anchorTextsPerPage.get(pageUrl) || [];

      pageAnalysis.set(pageUrl, {
        url: pageUrl,
        title: '', // Will be filled when we have the data
        incomingLinks: Array.from(incoming),
        outgoingLinks: data?.targetUrls || [],
        incomingCount: incoming.size,
        outgoingCount: data?.targetUrls.length || 0,
        linkDepth: linkDepth.get(pageUrl) ?? -1,
        isOrphan: incoming.size < 2, // Less than 2 incoming links = orphan
        anchorTexts: [...new Set(anchors)],
      });
    }

    // Categorize pages
    const orphanPages: PageLinkData[] = [];
    const weaklyLinkedPages: PageLinkData[] = [];
    const hubPages: PageLinkData[] = [];
    const authorityPages: PageLinkData[] = [];
    const unreachablePages: string[] = [];

    const linkDistribution = {
      zeroLinks: 0,
      oneToTwo: 0,
      threeToFive: 0,
      sixToTen: 0,
      moreThanTen: 0,
    };

    let totalLinks = 0;
    let maxDepth = 0;

    for (const [url, data] of pageAnalysis) {
      totalLinks += data.outgoingCount;
      maxDepth = Math.max(maxDepth, data.linkDepth);

      // Categorize by incoming links
      if (data.incomingCount === 0) {
        linkDistribution.zeroLinks++;
        orphanPages.push(data);
      } else if (data.incomingCount <= 2) {
        linkDistribution.oneToTwo++;
        if (data.incomingCount < 2) orphanPages.push(data);
        else weaklyLinkedPages.push(data);
      } else if (data.incomingCount <= 5) {
        linkDistribution.threeToFive++;
        weaklyLinkedPages.push(data);
      } else if (data.incomingCount <= 10) {
        linkDistribution.sixToTen++;
      } else {
        linkDistribution.moreThanTen++;
        authorityPages.push(data);
      }

      // Check for unreachable pages
      if (data.linkDepth === -1) {
        unreachablePages.push(url);
      }

      // Identify hub pages (lots of outgoing links)
      if (data.outgoingCount > 20) {
        hubPages.push(data);
      }
    }

    // Sort by severity/impact
    orphanPages.sort((a, b) => getPageImportance(b.url) - getPageImportance(a.url));
    weaklyLinkedPages.sort((a, b) => a.incomingCount - b.incomingCount);
    hubPages.sort((a, b) => b.outgoingCount - a.outgoingCount);
    authorityPages.sort((a, b) => b.incomingCount - a.incomingCount);

    return {
      totalPages: this.allPages.size,
      totalInternalLinks: totalLinks,
      orphanPages: orphanPages.slice(0, 100), // Limit for report
      weaklyLinkedPages: weaklyLinkedPages.slice(0, 50),
      hubPages: hubPages.slice(0, 20),
      authorityPages: authorityPages.slice(0, 20),
      averageLinksPerPage: totalLinks / this.allPages.size,
      maxLinkDepth: maxDepth,
      unreachablePages,
      linkDistribution,
    };
  }

  private calculateLinkDepth(): Map<string, number> {
    const depth = new Map<string, number>();
    const queue: string[] = ['/'];
    depth.set('/', 0);

    while (queue.length > 0) {
      const current = queue.shift()!;
      const currentDepth = depth.get(current)!;

      const data = this.linkData.get(current);
      if (!data) continue;

      for (const target of data.targetUrls) {
        if (!depth.has(target)) {
          depth.set(target, currentDepth + 1);
          queue.push(target);
        }
      }
    }

    return depth;
  }

  /**
   * Generate critical issues from link analysis
   */
  generateIssues(analysis: LinkGraphAnalysis): SEOIssue[] {
    const issues: SEOIssue[] = [];

    // Critical: Unreachable pages
    if (analysis.unreachablePages.length > 0) {
      issues.push({
        id: 'unreachable-pages',
        severity: 'critical',
        category: 'Internal Linking',
        title: `${analysis.unreachablePages.length} pages are completely unreachable`,
        description: 'These pages have no path from the homepage. Search engines cannot discover them through crawling.',
        affectedPages: analysis.unreachablePages,
        recommendation: 'Add internal links from relevant pages to make these discoverable.',
        impact: 'These pages will not be indexed or ranked.',
      });
    }

    // Critical: High-value orphan pages
    const importantOrphans = analysis.orphanPages.filter(p =>
      getPageImportance(p.url) >= 8 && p.incomingCount < 2
    );
    if (importantOrphans.length > 0) {
      issues.push({
        id: 'important-orphan-pages',
        severity: 'critical',
        category: 'Internal Linking',
        title: `${importantOrphans.length} important pages have almost no internal links`,
        description: 'These are high-priority pages (services, blog posts) with fewer than 2 internal links pointing to them.',
        affectedPages: importantOrphans.map(p => p.url),
        recommendation: 'Add contextual links from related content. Blog posts should link to services. Services should cross-link.',
        impact: 'Important pages are not receiving link equity and may underperform in rankings.',
      });
    }

    // Warning: Low average links per page
    if (analysis.averageLinksPerPage < 5) {
      issues.push({
        id: 'low-internal-linking',
        severity: 'warning',
        category: 'Internal Linking',
        title: `Average of only ${analysis.averageLinksPerPage.toFixed(1)} internal links per page`,
        description: 'Your pages are not well interconnected. Best practice is 5-10+ contextual internal links per page.',
        affectedPages: [],
        recommendation: 'Add relevant internal links within content, not just navigation.',
        impact: 'Link equity is not flowing effectively through the site.',
      });
    }

    // Warning: Poor link distribution
    const poorlyLinked = analysis.linkDistribution.zeroLinks + analysis.linkDistribution.oneToTwo;
    const poorlyLinkedPercent = (poorlyLinked / analysis.totalPages) * 100;
    if (poorlyLinkedPercent > 50) {
      issues.push({
        id: 'poor-link-distribution',
        severity: 'warning',
        category: 'Internal Linking',
        title: `${poorlyLinkedPercent.toFixed(0)}% of pages have 2 or fewer internal links`,
        description: 'The majority of your pages are barely connected to the rest of the site.',
        affectedPages: [],
        recommendation: 'Implement a systematic internal linking strategy. Each page should link to 3-5 related pages.',
        impact: 'Most pages are isolated and not benefiting from site authority.',
      });
    }

    // Warning: Deep pages
    const deepPages = analysis.orphanPages.filter(p => p.linkDepth > 4);
    if (deepPages.length > 10) {
      issues.push({
        id: 'deep-pages',
        severity: 'warning',
        category: 'Site Architecture',
        title: `${deepPages.length} pages are more than 4 clicks from homepage`,
        description: 'Search engines give less weight to pages that are far from the homepage.',
        affectedPages: deepPages.map(p => p.url),
        recommendation: 'Create hub pages or add direct links to reduce click depth.',
        impact: 'Deep pages may be crawled less frequently and rank lower.',
      });
    }

    // Opportunity: Location pages not cross-linking
    const locationOrphans = analysis.orphanPages.filter(p =>
      categorizeUrl(p.url) === 'location' && p.incomingCount < 3
    );
    if (locationOrphans.length > 50) {
      issues.push({
        id: 'location-pages-isolated',
        severity: 'opportunity',
        category: 'Internal Linking',
        title: `${locationOrphans.length} location pages are isolated`,
        description: 'Location pages only receive links from navigation/sitemap but not from contextual content.',
        affectedPages: locationOrphans.slice(0, 20).map(p => p.url),
        recommendation: 'Create "nearby areas" links between location pages. Link from blog posts mentioning specific areas.',
        impact: 'Location pages compete with each other instead of supporting each other.',
      });
    }

    return issues;
  }
}
