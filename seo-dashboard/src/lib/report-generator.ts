/**
 * SEO Report Generator
 *
 * This generates a comprehensive, CRITICAL SEO report.
 * It does NOT congratulate you for having many pages.
 * It finds what's WRONG and what's MISSING.
 */

import { SEOReport, SEOIssue, SeverityLevel } from '@/types/seo';
import { LinkAnalyzer } from './analyzers/link-analyzer';
import { BlogAnalyzer } from './analyzers/blog-analyzer';
import { ContentAnalyzer } from './analyzers/content-analyzer';
import { SITE_URL } from './site-config';

export interface ReportConfig {
  outputDir: string;
  siteUrl?: string;
}

export class ReportGenerator {
  private config: ReportConfig;

  constructor(config: ReportConfig) {
    this.config = {
      ...config,
      siteUrl: config.siteUrl || SITE_URL,
    };
  }

  async generateReport(): Promise<SEOReport> {
    console.log('Starting SEO analysis...');
    console.log('Output directory:', this.config.outputDir);

    // Run all analyzers
    console.log('\n📊 Analyzing internal link structure...');
    const linkAnalyzer = new LinkAnalyzer(this.config.outputDir);
    const linkAnalysis = await linkAnalyzer.analyze();
    const linkIssues = linkAnalyzer.generateIssues(linkAnalysis);
    console.log(`  Found ${linkAnalysis.totalPages} pages, ${linkAnalysis.orphanPages.length} orphans`);

    console.log('\n📝 Analyzing blog connections...');
    const blogAnalyzer = new BlogAnalyzer(this.config.outputDir);
    const blogAnalysis = await blogAnalyzer.analyze();
    const blogIssues = blogAnalyzer.generateIssues(blogAnalysis);
    console.log(`  Found ${blogAnalysis.totalBlogPosts} blog posts`);
    console.log(`  ${blogAnalysis.servicesNeverMentioned.length} services with NO blog coverage`);

    console.log('\n📄 Analyzing content depth...');
    const contentAnalyzer = new ContentAnalyzer(this.config.outputDir);
    const contentAnalysis = await contentAnalyzer.analyze();
    const contentIssues = contentAnalyzer.generateIssues(contentAnalysis);
    console.log(`  Average unique content ratio: ${(contentAnalysis.averageUniqueContentRatio * 100).toFixed(1)}%`);

    // Combine all issues
    const allIssues = [...linkIssues, ...blogIssues, ...contentIssues];

    // Sort by severity
    const severityOrder: Record<SeverityLevel, number> = {
      critical: 0,
      warning: 1,
      opportunity: 2,
      baseline: 3,
    };
    allIssues.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);

    // Count by severity
    const criticalCount = allIssues.filter(i => i.severity === 'critical').length;
    const warningCount = allIssues.filter(i => i.severity === 'warning').length;
    const opportunityCount = allIssues.filter(i => i.severity === 'opportunity').length;

    // Calculate overall health score (being HARSH)
    const healthScore = this.calculateHealthScore(allIssues, linkAnalysis, contentAnalysis);

    // Generate action items
    const actionItems = this.generateActionItems(allIssues);

    const report: SEOReport = {
      generatedAt: new Date().toISOString(),
      siteUrl: this.config.siteUrl!,
      summary: {
        criticalIssues: criticalCount,
        warnings: warningCount,
        opportunities: opportunityCount,
        overallHealthScore: healthScore,
      },
      issues: allIssues,
      linkAnalysis,
      blogAnalysis,
      contentAnalysis,
      actionItems,
      pageDetails: new Map(), // Would be populated for detailed page views
    };

    console.log('\n✅ Report generated');
    console.log(`  Critical issues: ${criticalCount}`);
    console.log(`  Warnings: ${warningCount}`);
    console.log(`  Opportunities: ${opportunityCount}`);
    console.log(`  Health score: ${healthScore}/100`);

    return report;
  }

  private calculateHealthScore(
    issues: SEOIssue[],
    linkAnalysis: any,
    contentAnalysis: any
  ): number {
    // Start at 100 and deduct aggressively
    let score = 100;

    // Deduct for issues (critical = -15, warning = -5, opportunity = -2)
    for (const issue of issues) {
      switch (issue.severity) {
        case 'critical':
          score -= 15;
          break;
        case 'warning':
          score -= 5;
          break;
        case 'opportunity':
          score -= 2;
          break;
      }
    }

    // Additional deductions for systemic problems

    // Poor internal linking
    if (linkAnalysis.averageLinksPerPage < 3) {
      score -= 10;
    }

    // High orphan rate
    const orphanRate = linkAnalysis.orphanPages.length / linkAnalysis.totalPages;
    if (orphanRate > 0.5) {
      score -= 15;
    } else if (orphanRate > 0.3) {
      score -= 10;
    }

    // Poor content quality
    if (contentAnalysis.averageUniqueContentRatio < 0.3) {
      score -= 15;
    } else if (contentAnalysis.averageUniqueContentRatio < 0.5) {
      score -= 10;
    }

    // Thin content dominance
    const qualityValues = Object.values(contentAnalysis.contentQualityDistribution) as number[];
    const totalQualityPages = qualityValues.reduce((a, b) => a + b, 0);
    const thinRate = (contentAnalysis.contentQualityDistribution.poor +
      contentAnalysis.contentQualityDistribution.thin) / totalQualityPages;
    if (thinRate > 0.7) {
      score -= 20;
    } else if (thinRate > 0.5) {
      score -= 10;
    }

    // Cap the minimum at 0
    return Math.max(0, Math.min(100, Math.round(score)));
  }

  private generateActionItems(issues: SEOIssue[]): {
    immediate: string[];
    shortTerm: string[];
    longTerm: string[];
  } {
    const immediate: string[] = [];
    const shortTerm: string[] = [];
    const longTerm: string[] = [];

    for (const issue of issues) {
      const action = `[${issue.category}] ${issue.recommendation}`;

      switch (issue.severity) {
        case 'critical':
          immediate.push(action);
          break;
        case 'warning':
          shortTerm.push(action);
          break;
        case 'opportunity':
          longTerm.push(action);
          break;
      }
    }

    // Deduplicate and limit
    return {
      immediate: [...new Set(immediate)].slice(0, 10),
      shortTerm: [...new Set(shortTerm)].slice(0, 10),
      longTerm: [...new Set(longTerm)].slice(0, 10),
    };
  }

  /**
   * Generate a human-readable report
   */
  formatReportAsMarkdown(report: SEOReport): string {
    let md = `# SEO Analysis Report\n\n`;
    md += `**Site:** ${report.siteUrl}\n`;
    md += `**Generated:** ${new Date(report.generatedAt).toLocaleString()}\n\n`;

    // Health Score
    md += `## Overall Health Score: ${report.summary.overallHealthScore}/100\n\n`;

    if (report.summary.overallHealthScore < 30) {
      md += `> ⚠️ **CRITICAL**: This site has major SEO issues that need immediate attention.\n\n`;
    } else if (report.summary.overallHealthScore < 60) {
      md += `> ⚡ **NEEDS WORK**: Significant improvements are needed across multiple areas.\n\n`;
    } else if (report.summary.overallHealthScore < 80) {
      md += `> 📊 **FAIR**: The foundation is there but optimization is needed.\n\n`;
    }

    // Summary
    md += `## Summary\n\n`;
    md += `| Metric | Value |\n`;
    md += `|--------|-------|\n`;
    md += `| Critical Issues | ${report.summary.criticalIssues} |\n`;
    md += `| Warnings | ${report.summary.warnings} |\n`;
    md += `| Opportunities | ${report.summary.opportunities} |\n`;
    md += `| Total Pages | ${report.linkAnalysis.totalPages} |\n`;
    md += `| Orphan Pages | ${report.linkAnalysis.orphanPages.length} |\n`;
    md += `| Blog Posts | ${report.blogAnalysis.totalBlogPosts} |\n`;
    md += `| Avg Links/Page | ${report.linkAnalysis.averageLinksPerPage.toFixed(1)} |\n`;
    md += `| Unique Content Ratio | ${(report.contentAnalysis.averageUniqueContentRatio * 100).toFixed(1)}% |\n\n`;

    // Critical Issues
    const criticalIssues = report.issues.filter(i => i.severity === 'critical');
    if (criticalIssues.length > 0) {
      md += `## 🚨 Critical Issues\n\n`;
      md += `These issues are actively hurting your SEO performance.\n\n`;
      for (const issue of criticalIssues) {
        md += `### ${issue.title}\n\n`;
        md += `**Category:** ${issue.category}\n\n`;
        md += `${issue.description}\n\n`;
        md += `**Impact:** ${issue.impact}\n\n`;
        md += `**Recommendation:** ${issue.recommendation}\n\n`;
        if (issue.affectedPages.length > 0) {
          md += `**Affected Pages (${issue.affectedPages.length} total):**\n`;
          for (const page of issue.affectedPages.slice(0, 5)) {
            md += `- ${page}\n`;
          }
          if (issue.affectedPages.length > 5) {
            md += `- ... and ${issue.affectedPages.length - 5} more\n`;
          }
          md += `\n`;
        }
        md += `---\n\n`;
      }
    }

    // Warnings
    const warnings = report.issues.filter(i => i.severity === 'warning');
    if (warnings.length > 0) {
      md += `## ⚠️ Warnings\n\n`;
      for (const issue of warnings) {
        md += `### ${issue.title}\n\n`;
        md += `**Category:** ${issue.category}\n\n`;
        md += `${issue.description}\n\n`;
        md += `**Recommendation:** ${issue.recommendation}\n\n`;
        md += `---\n\n`;
      }
    }

    // Link Analysis Details
    md += `## Internal Link Analysis\n\n`;
    md += `| Distribution | Count |\n`;
    md += `|--------------|-------|\n`;
    md += `| 0 internal links | ${report.linkAnalysis.linkDistribution.zeroLinks} |\n`;
    md += `| 1-2 internal links | ${report.linkAnalysis.linkDistribution.oneToTwo} |\n`;
    md += `| 3-5 internal links | ${report.linkAnalysis.linkDistribution.threeToFive} |\n`;
    md += `| 6-10 internal links | ${report.linkAnalysis.linkDistribution.sixToTen} |\n`;
    md += `| 10+ internal links | ${report.linkAnalysis.linkDistribution.moreThanTen} |\n\n`;

    // Blog Analysis Details
    md += `## Blog Coverage Analysis\n\n`;
    if (report.blogAnalysis.servicesNeverMentioned.length > 0) {
      md += `### Services With No Blog Coverage\n\n`;
      for (const service of report.blogAnalysis.servicesNeverMentioned) {
        md += `- ${service}\n`;
      }
      md += `\n`;
    }

    md += `### Blog-to-Page Links\n\n`;
    md += `- Links to service pages: ${report.blogAnalysis.blogToServiceLinks}\n`;
    md += `- Links to location pages: ${report.blogAnalysis.blogToLocationLinks}\n\n`;

    // Content Quality
    md += `## Content Quality Distribution\n\n`;
    md += `| Quality Level | Pages |\n`;
    md += `|---------------|-------|\n`;
    md += `| Poor (<100 unique words) | ${report.contentAnalysis.contentQualityDistribution.poor} |\n`;
    md += `| Thin (100-300 words) | ${report.contentAnalysis.contentQualityDistribution.thin} |\n`;
    md += `| Adequate (300-600 words) | ${report.contentAnalysis.contentQualityDistribution.adequate} |\n`;
    md += `| Good (600-1200 words) | ${report.contentAnalysis.contentQualityDistribution.good} |\n`;
    md += `| Comprehensive (1200+ words) | ${report.contentAnalysis.contentQualityDistribution.comprehensive} |\n\n`;

    // Action Items
    md += `## Recommended Actions\n\n`;

    if (report.actionItems.immediate.length > 0) {
      md += `### Immediate (This Week)\n\n`;
      for (const action of report.actionItems.immediate) {
        md += `- [ ] ${action}\n`;
      }
      md += `\n`;
    }

    if (report.actionItems.shortTerm.length > 0) {
      md += `### Short Term\n\n`;
      for (const action of report.actionItems.shortTerm) {
        md += `- [ ] ${action}\n`;
      }
      md += `\n`;
    }

    if (report.actionItems.longTerm.length > 0) {
      md += `### Long Term\n\n`;
      for (const action of report.actionItems.longTerm) {
        md += `- [ ] ${action}\n`;
      }
      md += `\n`;
    }

    return md;
  }
}

/**
 * Export report to JSON file
 */
export function exportReportToJSON(report: SEOReport, filePath: string): void {
  const fs = require('fs');

  // Convert Map to object for JSON serialization
  const serializable = {
    ...report,
    pageDetails: Object.fromEntries(report.pageDetails),
  };

  fs.writeFileSync(filePath, JSON.stringify(serializable, null, 2));
}

/**
 * Load report from JSON file
 */
export function loadReportFromJSON(filePath: string): SEOReport | null {
  const fs = require('fs');

  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return {
      ...data,
      pageDetails: new Map(Object.entries(data.pageDetails || {})),
    };
  } catch {
    return null;
  }
}
