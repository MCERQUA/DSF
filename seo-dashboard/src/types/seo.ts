// Core SEO Analysis Types

export type SeverityLevel = 'critical' | 'warning' | 'opportunity' | 'baseline';

export interface SEOIssue {
  id: string;
  severity: SeverityLevel;
  category: string;
  title: string;
  description: string;
  affectedPages: string[];
  recommendation: string;
  impact: string;
}

// Internal Link Analysis
export interface PageLinkData {
  url: string;
  title: string;
  incomingLinks: string[];     // Pages that link TO this page
  outgoingLinks: string[];     // Pages this page links TO
  incomingCount: number;
  outgoingCount: number;
  linkDepth: number;           // Clicks from homepage
  isOrphan: boolean;           // Less than 2 incoming links
  anchorTexts: string[];       // Text used to link to this page
}

export interface LinkGraphAnalysis {
  totalPages: number;
  totalInternalLinks: number;
  orphanPages: PageLinkData[];
  weaklyLinkedPages: PageLinkData[];  // 2-5 incoming links
  hubPages: PageLinkData[];           // Pages with most outgoing links
  authorityPages: PageLinkData[];     // Pages with most incoming links
  averageLinksPerPage: number;
  maxLinkDepth: number;
  unreachablePages: string[];
  linkDistribution: {
    zeroLinks: number;
    oneToTwo: number;
    threeToFive: number;
    sixToTen: number;
    moreThanTen: number;
  };
}

// Blog Connection Analysis
export interface BlogPost {
  url: string;
  title: string;
  date: string;
  wordCount: number;
  mentionedServices: string[];
  mentionedLocations: string[];
  internalLinks: string[];
  externalLinks: string[];
}

export interface BlogConnectionAnalysis {
  totalBlogPosts: number;
  servicesNeverMentioned: string[];
  locationsNeverMentioned: string[];
  servicesWithBlogCoverage: {
    service: string;
    mentionCount: number;
    blogPosts: string[];
  }[];
  locationsWithBlogCoverage: {
    location: string;
    mentionCount: number;
    blogPosts: string[];
  }[];
  blogToServiceLinks: number;
  blogToLocationLinks: number;
  averageBlogWordCount: number;
  staleBlogPosts: BlogPost[];  // No updates in 6+ months
}

// Content Depth Analysis
export interface PageContentAnalysis {
  url: string;
  title: string;
  metaDescription: string;
  metaDescriptionLength: number;
  isMetaUnique: boolean;
  h1Count: number;
  h2Count: number;
  h3Count: number;
  totalWordCount: number;
  uniqueWordCount: number;      // Non-template words
  templateRatio: number;        // % of content that's template
  hasFAQ: boolean;
  questionsAnswered: number;
  hasSchema: boolean;
  schemaTypes: string[];
  images: {
    total: number;
    withAlt: number;
    withoutAlt: number;
  };
  readabilityScore: number;
}

export interface ContentDepthAnalysis {
  thinContentPages: PageContentAnalysis[];      // <300 unique words
  missingMetaDescriptions: string[];
  duplicateMetaDescriptions: { meta: string; pages: string[] }[];
  missingH1: string[];
  multipleH1: string[];
  pagesWithoutFAQ: string[];
  pagesWithoutSchema: string[];
  imagesWithoutAlt: { page: string; images: string[] }[];
  averageWordCount: number;
  averageUniqueContentRatio: number;
  contentQualityDistribution: {
    poor: number;       // <300 words, high template ratio
    thin: number;       // 300-500 words
    adequate: number;   // 500-1000 words
    good: number;       // 1000-2000 words
    comprehensive: number; // 2000+ words
  };
}

// Full SEO Report
export interface SEOReport {
  generatedAt: string;
  siteUrl: string;
  summary: {
    criticalIssues: number;
    warnings: number;
    opportunities: number;
    overallHealthScore: number;  // 0-100, but we're being HARSH
  };
  issues: SEOIssue[];
  linkAnalysis: LinkGraphAnalysis;
  blogAnalysis: BlogConnectionAnalysis;
  contentAnalysis: ContentDepthAnalysis;
  actionItems: {
    immediate: string[];    // Do this now
    shortTerm: string[];    // This week
    longTerm: string[];     // This month
  };
  pageDetails: Map<string, PageFullAnalysis>;
}

export interface PageFullAnalysis {
  url: string;
  linkData: PageLinkData;
  contentData: PageContentAnalysis;
  blogMentions: string[];
  issues: SEOIssue[];
  score: number;
}

// Dashboard State
export interface DashboardState {
  lastAnalysis: string | null;
  isAnalyzing: boolean;
  report: SEOReport | null;
  selectedPage: string | null;
  activeTab: 'overview' | 'links' | 'content' | 'blog' | 'report';
  filters: {
    severity: SeverityLevel[];
    category: string[];
  };
}

// Feature Flags for disabled features
export interface FeatureFlags {
  googleSearchConsole: boolean;
  pageSpeedInsights: boolean;
  keywordTracking: boolean;
  competitorAnalysis: boolean;
  backlinkMonitoring: boolean;
}

export const DEFAULT_FEATURE_FLAGS: FeatureFlags = {
  googleSearchConsole: false,
  pageSpeedInsights: false,
  keywordTracking: false,
  competitorAnalysis: false,
  backlinkMonitoring: false,
};
