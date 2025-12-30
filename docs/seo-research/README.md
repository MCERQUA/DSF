# SEO Research Collection

> Building the Ultimate SEO Dashboard through comprehensive research on industry-standard tools and practices.

---

## Purpose

This collection documents research on SEO tools, AI-SEO practices, and technical SEO standards to inform the development of a comprehensive SEO dashboard that covers all aspects of website optimization.

---

## Completed Research

### Tool Analysis

| Document | Tool/Topic | Date | Key Findings |
|----------|------------|------|--------------|
| [semrush-site-audit-checks.md](./semrush-site-audit-checks.md) | Semrush Site Audit | Dec 30, 2025 | 223 distinct issue IDs, 140+ unique checks across 12 categories |

---

## Planned Research

### SEO Tool Analysis
- [ ] **Ahrefs Site Audit** - Comprehensive technical SEO crawler
- [ ] **Screaming Frog SEO Spider** - Desktop-based crawler with deep analysis
- [ ] **Google Search Console** - First-party Google data and issues
- [ ] **Google Lighthouse** - Performance and accessibility audits
- [ ] **Moz Site Crawl** - Moz's technical SEO tool
- [ ] **Sitebulb** - Visual SEO auditing tool
- [ ] **DeepCrawl/Lumar** - Enterprise crawling solution
- [ ] **Ryte** - Technical SEO platform

### AI-SEO Research
- [ ] **llms.txt Standard** - AI search optimization file format
- [ ] **AI Search Engines** - How Claude, Perplexity, SearchGPT crawl/index
- [ ] **Generative Engine Optimization (GEO)** - Best practices for AI visibility
- [ ] **Structured Data for AI** - Schema markup that helps AI understanding
- [ ] **Content Optimization for AI** - Writing for both humans and AI

### Technical SEO Deep Dives
- [ ] **Core Web Vitals** - Complete optimization guide
- [ ] **Schema.org Reference** - All schema types for local business
- [ ] **Mobile-First Indexing** - Google's mobile requirements
- [ ] **JavaScript SEO** - SPA and dynamic content handling
- [ ] **International SEO** - Hreflang implementation guide

### Local SEO Research
- [ ] **Google Business Profile** - Optimization factors
- [ ] **Local Citations** - NAP consistency and directories
- [ ] **Local Schema Markup** - LocalBusiness schema variations
- [ ] **Review Signals** - Review platforms and SEO impact
- [ ] **Local Link Building** - Community and local backlinks

### Content SEO Research
- [ ] **E-E-A-T Signals** - Experience, Expertise, Authority, Trust
- [ ] **Content Quality Metrics** - What makes content rank
- [ ] **Keyword Research** - Modern keyword strategy
- [ ] **Topic Clusters** - Content architecture for SEO

---

## Research Methodology

1. **Web Search** - Find official documentation and community discussions
2. **API Documentation** - Extract technical specifications
3. **Tool Comparison** - Cross-reference features across tools
4. **Best Practices** - Document industry consensus
5. **Implementation Notes** - Prioritize for dashboard development

---

## Integration with SEO Dashboard

Research findings directly inform the `seo-dashboard` project:

```
/home/mike/Mike-AI/DSF/seo-dashboard/
├── src/
│   ├── lib/
│   │   └── analyzers/       # Analysis logic based on research
│   └── components/          # UI components for each check category
└── scripts/
    └── generate-report.ts   # Report generation using research findings
```

### Priority Implementation

Based on Semrush research, prioritize these check categories:
1. **Critical**: Status codes, titles, meta descriptions, HTTPS
2. **Important**: Internal linking, redirects, structured data
3. **Advanced**: AI-SEO, hreflang, AMP, performance details

---

## Contributing

When adding new research:

1. Create a new `.md` file with descriptive name
2. Use consistent heading structure
3. Include sources with links
4. Add implementation priority notes
5. Update this README with the new document

---

## File Structure

```
docs/seo-research/
├── README.md                          # This index file
├── semrush-site-audit-checks.md       # Semrush Site Audit research
├── [future] ahrefs-site-audit.md
├── [future] google-lighthouse.md
├── [future] ai-search-optimization.md
└── [future] schema-markup-reference.md
```
