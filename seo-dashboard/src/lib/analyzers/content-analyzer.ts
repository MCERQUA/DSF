/**
 * Content Depth Analyzer
 *
 * Having 700+ pages is MEANINGLESS if they're all thin, templated garbage.
 * This analyzer looks at the QUALITY of content, not just quantity.
 *
 * Critical questions:
 * - How much of each page is unique vs template content?
 * - Do pages answer real questions or just exist?
 * - Are meta descriptions unique or copy-pasted?
 * - Is there actual value or just filler?
 */

import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';
import { PageContentAnalysis, ContentDepthAnalysis, SEOIssue } from '@/types/seo';
import { categorizeUrl, services, cities } from '../site-config';

// Common template phrases that appear on many pages
const TEMPLATE_PHRASES = [
  'contact us today',
  'free estimate',
  'call now',
  'get a quote',
  'years of experience',
  'professional service',
  'quality workmanship',
  'customer satisfaction',
  'licensed and insured',
  'serving the',
  'we offer',
  'our team',
  'trusted by',
];

export class ContentAnalyzer {
  private outputDir: string;
  private templateFingerprints: Map<string, string[]> = new Map();

  constructor(outputDir: string) {
    this.outputDir = outputDir;
  }

  async analyze(): Promise<ContentDepthAnalysis> {
    // First pass: collect template fingerprints from multiple pages
    await this.collectTemplatePatterns();

    // Second pass: analyze each page
    const pageAnalyses = await this.analyzeAllPages();

    // Build the analysis
    return this.buildAnalysis(pageAnalyses);
  }

  private async collectTemplatePatterns(): Promise<void> {
    // Sample pages from different categories to identify template content
    const samplePaths = [
      'index.html', // Homepage
      'services/index.html',
      'about-us/index.html',
    ];

    for (const samplePath of samplePaths) {
      const fullPath = path.join(this.outputDir, samplePath);
      if (!fs.existsSync(fullPath)) continue;

      const html = fs.readFileSync(fullPath, 'utf-8');
      const $ = cheerio.load(html);

      // Extract text blocks that likely appear on every page (header, footer, etc.)
      const headerText = $('header').text().toLowerCase().trim();
      const footerText = $('footer').text().toLowerCase().trim();

      if (headerText) this.templateFingerprints.set('header', headerText.split(/\s+/));
      if (footerText) this.templateFingerprints.set('footer', footerText.split(/\s+/));
    }
  }

  private async analyzeAllPages(): Promise<Map<string, PageContentAnalysis>> {
    const analyses = new Map<string, PageContentAnalysis>();
    await this.scanDirectory(this.outputDir, '', analyses);
    return analyses;
  }

  private async scanDirectory(
    dir: string,
    basePath: string,
    analyses: Map<string, PageContentAnalysis>
  ): Promise<void> {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const urlPath = path.join(basePath, entry.name);

      if (entry.isDirectory()) {
        await this.scanDirectory(fullPath, urlPath, analyses);
      } else if (entry.name === 'index.html') {
        const pageUrl = basePath === '' ? '/' : `/${basePath}/`;
        const analysis = await this.analyzePage(fullPath, pageUrl);
        analyses.set(pageUrl, analysis);
      }
    }
  }

  private async analyzePage(filePath: string, url: string): Promise<PageContentAnalysis> {
    const html = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(html);

    // Extract meta information
    const title = $('title').text().trim();
    const metaDescription = $('meta[name="description"]').attr('content') || '';

    // Count headings
    const h1Count = $('h1').length;
    const h2Count = $('h2').length;
    const h3Count = $('h3').length;

    // Extract main content (excluding header/footer)
    const mainContent = $('main, article, .content').text() || $('body').text();
    const headerFooterText = $('header, footer, nav').text();

    // Calculate word counts
    const allWords = mainContent.toLowerCase().split(/\s+/).filter(w => w.length > 2);
    const totalWordCount = allWords.length;

    // Calculate unique content by removing template phrases
    const uniqueWords = this.removeTemplateContent(allWords);
    const uniqueWordCount = uniqueWords.length;
    const templateRatio = totalWordCount > 0
      ? (totalWordCount - uniqueWordCount) / totalWordCount
      : 0;

    // Check for FAQ content
    const hasFAQ = this.detectFAQ($, mainContent);
    const questionsAnswered = this.countQuestions($, mainContent);

    // Check for schema markup
    const schemaScripts = $('script[type="application/ld+json"]');
    const hasSchema = schemaScripts.length > 0;
    const schemaTypes: string[] = [];
    schemaScripts.each((_, el) => {
      try {
        const json = JSON.parse($(el).html() || '{}');
        if (json['@type']) {
          schemaTypes.push(json['@type']);
        }
      } catch {}
    });

    // Count images
    const allImages = $('img');
    const imagesWithAlt = $('img[alt]:not([alt=""])');

    // Simple readability score (0-100)
    const readabilityScore = this.calculateReadability(mainContent);

    return {
      url,
      title,
      metaDescription,
      metaDescriptionLength: metaDescription.length,
      isMetaUnique: true, // Will be determined in aggregate analysis
      h1Count,
      h2Count,
      h3Count,
      totalWordCount,
      uniqueWordCount,
      templateRatio,
      hasFAQ,
      questionsAnswered,
      hasSchema,
      schemaTypes,
      images: {
        total: allImages.length,
        withAlt: imagesWithAlt.length,
        withoutAlt: allImages.length - imagesWithAlt.length,
      },
      readabilityScore,
    };
  }

  private removeTemplateContent(words: string[]): string[] {
    const templateWords = new Set<string>();

    // Add header/footer words
    for (const [_, templateWordList] of this.templateFingerprints) {
      templateWordList.forEach(w => templateWords.add(w.toLowerCase()));
    }

    // Add common template phrases
    for (const phrase of TEMPLATE_PHRASES) {
      phrase.toLowerCase().split(/\s+/).forEach(w => templateWords.add(w));
    }

    // Add city names and service names (these are often just template insertions)
    cities.forEach(c => {
      c.name.toLowerCase().split(/\s+/).forEach(w => templateWords.add(w));
    });
    services.forEach(s => {
      s.name.toLowerCase().split(/\s+/).forEach(w => templateWords.add(w));
    });

    return words.filter(w => !templateWords.has(w) && w.length > 3);
  }

  private detectFAQ($: cheerio.CheerioAPI, content: string): boolean {
    // Check for FAQ schema
    const hasFAQSchema = $('script[type="application/ld+json"]').text().includes('FAQPage');
    if (hasFAQSchema) return true;

    // Check for FAQ section
    const lowerContent = content.toLowerCase();
    return (
      lowerContent.includes('frequently asked') ||
      lowerContent.includes('faq') ||
      $('h2, h3').filter((_, el) => $(el).text().toLowerCase().includes('faq')).length > 0
    );
  }

  private countQuestions($: cheerio.CheerioAPI, content: string): number {
    // Count question marks in headings
    let count = 0;
    $('h2, h3, h4').each((_, el) => {
      if ($(el).text().includes('?')) count++;
    });

    // Also count question patterns in content
    const questionPatterns = content.match(/\b(what|how|why|when|where|which|who)\s+[^.?!]*\?/gi);
    if (questionPatterns) {
      count += questionPatterns.length;
    }

    return count;
  }

  private calculateReadability(content: string): number {
    // Simple readability based on sentence and word length
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const words = content.split(/\s+/).filter(w => w.length > 0);

    if (sentences.length === 0 || words.length === 0) return 0;

    const avgWordsPerSentence = words.length / sentences.length;
    const avgWordLength = words.reduce((sum, w) => sum + w.length, 0) / words.length;

    // Score: 100 is perfect (around 15-20 words/sentence, 4-5 chars/word)
    let score = 100;
    score -= Math.abs(avgWordsPerSentence - 17) * 2;
    score -= Math.abs(avgWordLength - 4.5) * 10;

    return Math.max(0, Math.min(100, score));
  }

  private buildAnalysis(pages: Map<string, PageContentAnalysis>): ContentDepthAnalysis {
    const thinContentPages: PageContentAnalysis[] = [];
    const missingMetaDescriptions: string[] = [];
    const duplicateMetaDescriptions: Map<string, string[]> = new Map();
    const missingH1: string[] = [];
    const multipleH1: string[] = [];
    const pagesWithoutFAQ: string[] = [];
    const pagesWithoutSchema: string[] = [];
    const imagesWithoutAlt: { page: string; images: string[] }[] = [];

    const contentQualityDistribution = {
      poor: 0,
      thin: 0,
      adequate: 0,
      good: 0,
      comprehensive: 0,
    };

    let totalWordCount = 0;
    let totalUniqueRatio = 0;

    // Track meta descriptions for duplicate detection
    const metaDescriptionMap = new Map<string, string[]>();

    for (const [url, analysis] of pages) {
      totalWordCount += analysis.totalWordCount;
      totalUniqueRatio += (1 - analysis.templateRatio);

      // Categorize by content quality
      if (analysis.uniqueWordCount < 100 || analysis.templateRatio > 0.8) {
        contentQualityDistribution.poor++;
        thinContentPages.push(analysis);
      } else if (analysis.uniqueWordCount < 300) {
        contentQualityDistribution.thin++;
        thinContentPages.push(analysis);
      } else if (analysis.uniqueWordCount < 600) {
        contentQualityDistribution.adequate++;
      } else if (analysis.uniqueWordCount < 1200) {
        contentQualityDistribution.good++;
      } else {
        contentQualityDistribution.comprehensive++;
      }

      // Check meta description
      if (!analysis.metaDescription || analysis.metaDescription.length < 50) {
        missingMetaDescriptions.push(url);
      } else {
        const normalized = analysis.metaDescription.toLowerCase().trim();
        const existing = metaDescriptionMap.get(normalized) || [];
        existing.push(url);
        metaDescriptionMap.set(normalized, existing);
      }

      // Check H1
      if (analysis.h1Count === 0) {
        missingH1.push(url);
      } else if (analysis.h1Count > 1) {
        multipleH1.push(url);
      }

      // Check FAQ (only for service and blog pages)
      const category = categorizeUrl(url);
      if ((category === 'service' || category === 'blog') && !analysis.hasFAQ) {
        pagesWithoutFAQ.push(url);
      }

      // Check schema
      if (category !== 'location' && !analysis.hasSchema) {
        pagesWithoutSchema.push(url);
      }

      // Check images
      if (analysis.images.withoutAlt > 0) {
        imagesWithoutAlt.push({
          page: url,
          images: [], // Would need to track actual image srcs
        });
      }
    }

    // Find duplicate meta descriptions
    const duplicateMetas: { meta: string; pages: string[] }[] = [];
    for (const [meta, urls] of metaDescriptionMap) {
      if (urls.length > 1) {
        duplicateMetas.push({ meta, pages: urls });
      }
    }

    // Mark unique status
    for (const [url, analysis] of pages) {
      const normalized = analysis.metaDescription.toLowerCase().trim();
      analysis.isMetaUnique = (metaDescriptionMap.get(normalized)?.length || 0) <= 1;
    }

    // Sort thin content by severity
    thinContentPages.sort((a, b) => a.uniqueWordCount - b.uniqueWordCount);

    return {
      thinContentPages: thinContentPages.slice(0, 100),
      missingMetaDescriptions,
      duplicateMetaDescriptions: duplicateMetas,
      missingH1,
      multipleH1,
      pagesWithoutFAQ,
      pagesWithoutSchema,
      imagesWithoutAlt,
      averageWordCount: pages.size > 0 ? totalWordCount / pages.size : 0,
      averageUniqueContentRatio: pages.size > 0 ? totalUniqueRatio / pages.size : 0,
      contentQualityDistribution,
    };
  }

  /**
   * Generate critical issues from content analysis
   */
  generateIssues(analysis: ContentDepthAnalysis): SEOIssue[] {
    const issues: SEOIssue[] = [];

    // Critical: High percentage of thin content
    const totalPages = Object.values(analysis.contentQualityDistribution).reduce((a, b) => a + b, 0);
    const thinPercentage = ((analysis.contentQualityDistribution.poor + analysis.contentQualityDistribution.thin) / totalPages) * 100;

    if (thinPercentage > 50) {
      issues.push({
        id: 'majority-thin-content',
        severity: 'critical',
        category: 'Content Quality',
        title: `${thinPercentage.toFixed(0)}% of pages have thin or poor content`,
        description: 'The majority of pages have less than 300 words of unique content. This indicates heavy reliance on templates.',
        affectedPages: analysis.thinContentPages.slice(0, 20).map(p => p.url),
        recommendation: 'Add unique, valuable content to each page. Location pages should have local-specific information, not just city name swaps.',
        impact: 'Thin content pages rarely rank well and may be seen as low-quality by Google.',
      });
    }

    // Critical: Duplicate meta descriptions
    if (analysis.duplicateMetaDescriptions.length > 0) {
      const totalDuplicates = analysis.duplicateMetaDescriptions.reduce((sum, d) => sum + d.pages.length, 0);
      issues.push({
        id: 'duplicate-meta-descriptions',
        severity: 'critical',
        category: 'Technical SEO',
        title: `${totalDuplicates} pages share duplicate meta descriptions`,
        description: 'Meta descriptions should be unique for each page to improve click-through rates in search results.',
        affectedPages: analysis.duplicateMetaDescriptions.flatMap(d => d.pages).slice(0, 20),
        recommendation: 'Write unique meta descriptions for each page that accurately describe the specific content.',
        impact: 'Duplicate metas reduce CTR and make it harder for Google to differentiate pages.',
      });
    }

    // Warning: Missing meta descriptions
    if (analysis.missingMetaDescriptions.length > 0) {
      issues.push({
        id: 'missing-meta-descriptions',
        severity: 'warning',
        category: 'Technical SEO',
        title: `${analysis.missingMetaDescriptions.length} pages missing meta descriptions`,
        description: 'Pages without meta descriptions rely on Google to generate snippets, which may not be optimal.',
        affectedPages: analysis.missingMetaDescriptions.slice(0, 20),
        recommendation: 'Add descriptive meta descriptions (150-160 characters) to all pages.',
        impact: 'Missing control over how pages appear in search results.',
      });
    }

    // Warning: Missing H1 tags
    if (analysis.missingH1.length > 0) {
      issues.push({
        id: 'missing-h1',
        severity: 'warning',
        category: 'On-Page SEO',
        title: `${analysis.missingH1.length} pages have no H1 heading`,
        description: 'Every page should have exactly one H1 that describes the main topic.',
        affectedPages: analysis.missingH1.slice(0, 20),
        recommendation: 'Add a clear, keyword-rich H1 heading to each page.',
        impact: 'Missing H1 makes it harder for search engines to understand page topics.',
      });
    }

    // Warning: Multiple H1 tags
    if (analysis.multipleH1.length > 0) {
      issues.push({
        id: 'multiple-h1',
        severity: 'warning',
        category: 'On-Page SEO',
        title: `${analysis.multipleH1.length} pages have multiple H1 headings`,
        description: 'Best practice is to have exactly one H1 per page.',
        affectedPages: analysis.multipleH1.slice(0, 20),
        recommendation: 'Consolidate to a single H1 and use H2/H3 for subheadings.',
        impact: 'Dilutes the importance signal of the main heading.',
      });
    }

    // Opportunity: Service pages without FAQ
    if (analysis.pagesWithoutFAQ.length > 0) {
      issues.push({
        id: 'service-pages-no-faq',
        severity: 'opportunity',
        category: 'Content Enhancement',
        title: `${analysis.pagesWithoutFAQ.length} service/blog pages have no FAQ section`,
        description: 'FAQ content helps answer user questions and can appear as rich results in Google.',
        affectedPages: analysis.pagesWithoutFAQ.slice(0, 20),
        recommendation: 'Add FAQ sections with schema markup to service and blog pages.',
        impact: 'Missing opportunity for rich results and comprehensive content.',
      });
    }

    // Opportunity: Pages without schema
    if (analysis.pagesWithoutSchema.length > 0) {
      issues.push({
        id: 'pages-no-schema',
        severity: 'opportunity',
        category: 'Technical SEO',
        title: `${analysis.pagesWithoutSchema.length} pages have no structured data`,
        description: 'Schema markup helps search engines understand your content better.',
        affectedPages: analysis.pagesWithoutSchema.slice(0, 20),
        recommendation: 'Add LocalBusiness, Service, and FAQPage schema where appropriate.',
        impact: 'Missing opportunity for rich results.',
      });
    }

    // Warning: Low unique content ratio
    if (analysis.averageUniqueContentRatio < 0.4) {
      issues.push({
        id: 'low-unique-content-ratio',
        severity: 'warning',
        category: 'Content Quality',
        title: `Only ${(analysis.averageUniqueContentRatio * 100).toFixed(0)}% of content is unique on average`,
        description: 'The majority of page content is template/boilerplate text that appears across many pages.',
        affectedPages: [],
        recommendation: 'Reduce template content and add more page-specific, valuable information.',
        impact: 'Search engines may see pages as near-duplicates.',
      });
    }

    // Warning: Images without alt text
    if (analysis.imagesWithoutAlt.length > 10) {
      issues.push({
        id: 'images-no-alt',
        severity: 'warning',
        category: 'Accessibility & SEO',
        title: `${analysis.imagesWithoutAlt.length} pages have images without alt text`,
        description: 'Alt text is important for accessibility and helps with image search rankings.',
        affectedPages: analysis.imagesWithoutAlt.slice(0, 20).map(i => i.page),
        recommendation: 'Add descriptive alt text to all images.',
        impact: 'Missing accessibility compliance and image SEO opportunities.',
      });
    }

    return issues;
  }
}
