# Semrush Site Audit - Complete SEO Checks Reference

> **Research Date:** December 30, 2025
> **Source:** Semrush Knowledge Base, API Documentation, and Community Resources
> **Purpose:** Reference for building the Ultimate SEO Dashboard

---

## Overview

Semrush Site Audit is one of the most comprehensive technical SEO audit tools available. According to their API documentation, it includes **223 distinct issue IDs** covering **140+ unique checks** across multiple dimensions of website health.

### Severity Classification

| Level | Description | Priority |
|-------|-------------|----------|
| **Errors** | Most severe issues that critically impact SEO | Immediate fix required |
| **Warnings** | Medium severity issues affecting performance | Should address soon |
| **Notices** | Informational findings for optimization | Optional improvements |

---

## Complete Issue Categories

### 1. Crawlability & Site Architecture

The foundation of technical SEO - ensuring search engines can discover and access your content.

#### Errors
| Issue | Description | Impact |
|-------|-------------|--------|
| Pages returning 5XX status code | Server errors preventing page access | Critical - pages cannot be indexed |
| Pages couldn't be crawled | General crawl failures | Critical - content invisible to search |
| Pages couldn't be crawled (DNS issues) | Domain name resolution failures | Critical - site unreachable |
| Pages couldn't be crawled (incorrect URL formats) | Malformed URLs | Critical - broken navigation |
| Format errors in robots.txt | Syntax errors in robots.txt | Critical - may block all crawling |
| Format errors in sitemap.xml | Malformed XML in sitemap | Critical - sitemap unusable |
| Incorrect pages in sitemap.xml | URLs with errors/redirects in sitemap | High - wastes crawl budget |
| Pages with WWW resolve issue | Both www and non-www versions indexed | High - duplicate content |
| Size of HTML on page too large | Excessive HTML size | High - slow crawling, timeout risk |

#### Warnings
| Issue | Description | Impact |
|-------|-------------|--------|
| Sitemap.xml not indicated in robots.txt | Sitemap location not declared | Medium - harder to discover |
| Sitemap.xml not found | No sitemap present | Medium - slower indexing |
| Robots.txt not found | No robots.txt file | Medium - no crawl guidance |
| Too many URL parameters | Excessive query strings | Medium - crawl budget waste |
| URLs longer than 200 characters | Excessively long URLs | Medium - user/SEO unfriendly |
| Too long link URLs | Internal links with very long URLs | Medium - crawl issues |
| Sitemap.xml files too large | Exceeds 50MB or 50,000 URLs | Medium - may timeout |

#### Notices
| Issue | Description | Impact |
|-------|-------------|--------|
| Pages need 3+ clicks to reach | Deep site architecture | Low - hard to find content |
| Orphaned pages (from GA) | Pages with traffic but no internal links | Low - poor internal linking |
| Orphaned pages (in sitemap) | Sitemap pages with no internal links | Low - may not get indexed |
| Pages blocked by X-Robots-Tag: noindex | HTTP header blocking indexing | Info - intentional or not? |
| Blocked external resources in robots.txt | External JS/CSS blocked | Low - may affect rendering |
| Pages blocked from crawling | Intentionally blocked pages | Info - verify intentional |

---

### 2. On-Page SEO

Content and HTML optimization for search visibility.

#### Errors
| Issue | Description | Impact |
|-------|-------------|--------|
| Pages without title tags | Missing `<title>` element | Critical - no search snippet |
| Duplicate title tags | Same title on multiple pages | High - keyword cannibalization |
| Duplicate content issues | Substantial content overlap | High - ranking dilution |
| Duplicate meta descriptions | Same description on multiple pages | High - poor differentiation |
| Pages returning 4XX status code | Client errors (404, 403, etc.) | High - dead ends |

#### Warnings
| Issue | Description | Impact |
|-------|-------------|--------|
| Title tags too long | Exceeds ~60 characters | Medium - truncated in SERPs |
| Title tags too short | Under ~30 characters | Medium - missed opportunity |
| Pages without meta descriptions | Missing meta description | Medium - auto-generated snippet |
| Duplicate H1 and title tags | H1 matches title exactly | Low - missed keyword variation |
| Pages without H1 heading | No H1 tag present | Medium - unclear page topic |
| Pages with multiple H1 tags | More than one H1 | Medium - confusing hierarchy |
| Underscore in URL | Using _ instead of - | Low - SEO best practice |
| Pages with low word count | Thin content | Medium - may be seen as low quality |
| Low text-to-HTML ratio | Too much code vs content | Medium - potential quality signal |
| Images without alt attributes | Missing alt text | Medium - accessibility + image SEO |
| Too many on-page links (100+) | Excessive outbound links | Medium - link value dilution |
| Incompatible plugin content | Flash, Silverlight, etc. | High - not indexable |
| Pages containing frames | Using `<frame>` elements | High - SEO unfriendly |

#### Notices
| Issue | Description | Impact |
|-------|-------------|--------|
| Pages with only one internal link | Minimal internal linking | Low - weak page authority |
| Non-descriptive anchor text | "Click here", "Read more" | Low - missed keyword signals |
| External links with nofollow | Outbound nofollow links | Info - may be intentional |
| Links with no anchor text | Empty anchor tags | Low - accessibility issue |
| Resources formatted as page link | Linking to CSS/JS as pages | Low - unusual linking |

---

### 3. Technical SEO

Behind-the-scenes technical issues affecting site performance.

#### Errors
| Issue | Description | Impact |
|-------|-------------|--------|
| Broken internal links | 404 internal links | High - poor UX, wasted crawl |
| Broken internal images | Missing image files | High - poor UX |
| Incorrect hreflang links | Invalid hreflang implementation | High - wrong language served |
| Redirect chains and loops | Multiple redirects or infinite loops | High - slow, may not resolve |
| Pages with meta refresh tag | Client-side redirects | Medium - not recommended |
| Broken internal JS/CSS files | Missing script/style files | High - broken functionality |

#### Warnings
| Issue | Description | Impact |
|-------|-------------|--------|
| Broken external images | External images returning errors | Medium - poor UX |
| Broken external links | Outbound links to dead pages | Medium - poor UX, trust |
| Pages with slow load speed | Poor performance metrics | High - ranking factor |
| Invalid structured data items | Schema markup errors | Medium - no rich results |
| Malformed links | Incorrectly formatted href | Medium - may not work |
| Uncompressed pages | No gzip/brotli compression | Medium - slow loading |
| Blocked internal resources in robots.txt | Blocking own JS/CSS | High - rendering issues |
| Uncompressed JS/CSS files | Scripts not compressed | Medium - slow loading |
| Uncached JS/CSS files | No cache headers | Medium - repeat downloads |
| JS/CSS total size too large | Heavy front-end assets | Medium - slow loading |
| Too many JS/CSS files | Excessive HTTP requests | Medium - slow loading |
| Unminified JS/CSS files | Not minified | Medium - larger file sizes |
| Internal links with nofollow | Blocking internal link equity | Medium - poor architecture |

#### Notices
| Issue | Description | Impact |
|-------|-------------|--------|
| External pages returning 403 | Forbidden external links | Low - may be region-locked |
| Broken external JS/CSS files | External resources failing | Low - third-party issue |
| URLs with permanent redirect | 301 redirects in place | Info - verify intentional |
| URLs with temporary redirect | 302 redirects in place | Medium - should be 301? |

---

### 4. HTTPS Implementation

Security and encryption checks.

#### Errors
| Issue | Description | Impact |
|-------|-------------|--------|
| Non-secure pages (HTTP) | Pages not using HTTPS | Critical - browser warnings |
| Expired/expiring SSL certificate | Invalid SSL certificate | Critical - security warnings |
| Old security protocol | Using TLS 1.0/1.1 | High - security vulnerability |
| Incorrect certificate name | Domain mismatch in cert | Critical - security warnings |
| Mixed content | HTTPS loading HTTP resources | High - security warnings |
| No redirect to HTTPS from HTTP | HTTP version accessible | High - duplicate content risk |

#### Warnings
| Issue | Description | Impact |
|-------|-------------|--------|
| Homepage doesn't use HTTPS | Main page insecure | Critical - first impression |
| HTTP URLs in sitemap for HTTPS site | Sitemap has wrong protocol | Medium - confusing signals |
| HTTPS pages linking to HTTP | Internal links to insecure | Medium - mixed content risk |

#### Notices
| Issue | Description | Impact |
|-------|-------------|--------|
| Subdomains don't support SNI | Server Name Indication issues | Low - older client issues |
| Subdomains don't support HSTS | No HTTP Strict Transport | Low - security best practice |

---

### 5. International SEO (Hreflang)

Multi-language and multi-region implementation.

#### Errors
| Issue | Description | Impact |
|-------|-------------|--------|
| Hreflang conflicts within page | Contradictory hreflang tags | High - wrong version shown |
| Issues with hreflang values | Invalid language/region codes | High - hreflang ignored |

#### Warnings
| Issue | Description | Impact |
|-------|-------------|--------|
| Pages with no hreflang and lang attributes | Missing language indicators | Medium - wrong audience |

#### Notices
| Issue | Description | Impact |
|-------|-------------|--------|
| Hreflang language mismatch | Content doesn't match declared language | Low - user confusion |

---

### 6. Mobile SEO

Mobile-first indexing and responsive design.

#### Errors
| Issue | Description | Impact |
|-------|-------------|--------|
| Pages with no viewport tag | Missing viewport meta | Critical - not mobile-friendly |
| Missing viewport width/initial-scale | Incomplete viewport | High - scaling issues |

#### AMP Issues (40+ Checks)
| Category | Examples | Impact |
|----------|----------|--------|
| AMP HTML issues | Invalid AMP markup | High - AMP not valid |
| AMP style/layout issues | CSS/layout problems | High - AMP not valid |
| AMP templating issues | Template errors | High - AMP not valid |
| AMP pages without canonical | Missing canonical to main | High - duplicate content |

---

### 7. Performance

Page speed and Core Web Vitals.

#### Core Web Vitals Metrics
| Metric | What It Measures | Good Threshold |
|--------|------------------|----------------|
| **LCP** (Largest Contentful Paint) | Loading performance | < 2.5 seconds |
| **CLS** (Cumulative Layout Shift) | Visual stability | < 0.1 |
| **INP** (Interaction to Next Paint) | Interactivity | < 200ms |
| **TBT** (Total Blocking Time) | Interactivity proxy | < 200ms |

*Note: INP replaced FID (First Input Delay) in March 2024*

#### Performance Issues
| Issue | Description | Impact |
|-------|-------------|--------|
| Pages with slow load speed | High load times | High - ranking factor |
| Uncompressed pages | No gzip/brotli | Medium - larger transfers |
| Uncompressed JS/CSS | Scripts not compressed | Medium - slow loading |
| Uncached JS/CSS | Missing cache headers | Medium - repeat downloads |
| JS/CSS size too large | Heavy assets | Medium - slow loading |
| Too many JS/CSS files | Many HTTP requests | Medium - connection overhead |
| Unminified JS/CSS | Not minified | Medium - wasted bytes |
| Large HTML size | Bloated markup | Medium - slow parsing |
| Redirect chains | Multiple redirects | Medium - added latency |

---

### 8. Internal Linking

Site architecture and link equity distribution.

#### Metrics Tracked
| Metric | Description | Purpose |
|--------|-------------|---------|
| Internal LinkRank (ILR) | Page importance score | Find strongest pages |
| Link Distribution | Links across site | Balance link equity |
| Incoming Internal Links | Links to each page | Find orphaned pages |
| Crawl Depth | Clicks from homepage | Improve accessibility |

#### Issues
| Issue | Description | Impact |
|-------|-------------|--------|
| Broken internal links | Dead internal links | High - poor UX |
| Orphaned pages | No internal links pointing | High - not discoverable |
| Pages with only one internal link | Minimal linking | Medium - weak authority |
| Crawl depth 4+ clicks | Too deep in site | Medium - hard to find |
| Internal links with nofollow | Blocking internal equity | Medium - architecture issue |
| Too many outgoing links (100+) | Excessive links on page | Medium - value dilution |
| Non-descriptive anchor text | Generic anchors | Low - missed signals |
| Links with no anchor text | Empty anchors | Low - accessibility |

---

### 9. Structured Data / Schema Markup

Rich results and search appearance.

#### Supported Formats
- **JSON-LD** (recommended)
- **Microdata**
- ~~RDFa~~ (not supported)

#### Checks
| Check | Description | Impact |
|-------|-------------|--------|
| Invalid structured data items | Schema validation errors | Medium - no rich results |
| Markup Score | Overall schema health | Medium - opportunity cost |
| Twitter Card validation | Social card markup | Low - social appearance |
| Open Graph validation | Facebook/social markup | Low - social appearance |
| Schema.org validation | Schema.org compliance | Medium - rich results |

*Note: Requires Guru or Business plan for full structured data analysis*

---

### 10. AI Search Optimization (GEO) - NEW

Generative Engine Optimization for AI-powered search.

#### Notices
| Issue | Description | Impact |
|-------|-------------|--------|
| llms.txt not found | No AI guidance file | Medium - AI can't understand preferences |
| llms.txt formatting issues | Invalid llms.txt format | Medium - AI may ignore |
| Too much content | Content may be truncated by AI | Medium - incomplete info to AI |
| Outdated content | Old last-modified headers | Medium - AI may deprioritize |
| Low semantic HTML usage | Poor HTML5 semantic structure | Medium - AI comprehension |
| Content not optimized | Generic AI optimization issues | Medium - missed AI visibility |

#### Context
These checks help optimize for AI-powered search engines like:
- SearchGPT (OpenAI)
- Claude (Anthropic)
- Perplexity
- Google AI Overviews

---

### 11. Content Quality

Content depth and uniqueness.

#### Warnings
| Issue | Description | Impact |
|-------|-------------|--------|
| Low text-to-HTML ratio | More code than content | Medium - thin content signal |
| Low word count | Thin content pages | Medium - may not rank |
| Duplicate content | Substantial text overlap | High - cannibalization |

#### Notices
| Issue | Description | Impact |
|-------|-------------|--------|
| Outdated content | Stale content indicators | Low - may need refresh |

---

### 12. Redirects

URL forwarding implementation.

#### Types Detected
| Redirect Type | HTTP Code | Purpose |
|---------------|-----------|---------|
| Permanent | 301 | Content moved forever |
| Temporary | 302 | Content moved temporarily |
| Meta Refresh | N/A | Client-side redirect |

#### Issues
| Issue | Description | Impact |
|-------|-------------|--------|
| Redirect chains | Multiple consecutive redirects | Medium - slow, equity loss |
| Redirect loops | Infinite redirect cycle | Critical - page unreachable |
| Temporary redirects (302) | Should often be 301 | Medium - no equity transfer |
| Meta refresh redirects | Client-side redirects | Medium - not recommended |

---

## Thematic Reports

Semrush organizes checks into 8 thematic reports:

| Report | Focus Area | Key Checks |
|--------|------------|------------|
| **Robots.txt** | Crawl directives | Format, blocking, sitemap reference |
| **Crawlability** | Indexability | Status codes, crawl depth, orphans |
| **HTTPS** | Security | Certificates, mixed content, protocols |
| **International SEO** | Multi-language | Hreflang implementation |
| **Performance** | Speed | Core Web Vitals, compression, caching |
| **Internal Linking** | Architecture | Link distribution, broken links |
| **Markups** | Structured Data | Schema validation, rich results |
| **Core Web Vitals** | UX Metrics | LCP, CLS, TBT/INP |

---

## API Reference

The Site Audit API provides programmatic access to all checks:

```
Endpoint: https://api.semrush.com/reports/v1/projects/{project_id}/siteaudit/
```

### Key Endpoints
- `/issues` - Get all issues with counts
- `/pages` - Get page-level data
- `/crawledpages` - Get crawl results
- `/settings` - Configure audit settings

### Issue Count by Severity (Approximate)
| Severity | Count |
|----------|-------|
| Errors | ~16 types |
| Warnings | ~50 types |
| Notices | ~30 types |
| **Total** | **223 distinct issue IDs** |

---

## Implementation Priority for SEO Dashboard

### Phase 1: Critical Checks (Must Have)
1. HTTP status codes (4XX, 5XX)
2. Missing/duplicate title tags
3. Missing/duplicate meta descriptions
4. Broken internal links
5. HTTPS issues
6. Missing viewport tag
7. Core Web Vitals

### Phase 2: Important Checks (Should Have)
1. Redirect chains/loops
2. Orphaned pages
3. Crawl depth issues
4. Missing alt text
5. Structured data validation
6. Sitemap issues
7. Robots.txt issues

### Phase 3: Advanced Checks (Nice to Have)
1. Hreflang implementation
2. AMP validation
3. Internal link distribution
4. AI search optimization (llms.txt)
5. Content quality metrics
6. Performance optimization details

---

## Sources

1. [What Issues Can Site Audit Identify?](https://www.semrush.com/kb/542-site-audit-issues-list) - Official complete list
2. [Site Audit Thematic Reports](https://www.semrush.com/kb/959-site-audit-thematic-reports) - Report categories
3. [Site Audit API Documentation](https://developer.semrush.com/api/v3/projects/site-audit/) - API reference
4. [Reviewing Your Site Audit Issues](https://www.semrush.com/kb/541-site-audit-issues-report) - Issue report guide
5. [Measure Core Web Vitals with Semrush](https://www.semrush.com/blog/measure-core-web-vitals/) - CWV details
6. [Structured Data Items in Site Audit](https://www.semrush.com/kb/1084-structured-data-items-site-audit) - Schema checks
7. [33 Ways to Use Semrush Site Audit](https://iloveseo.com/tools/semrush/33-ways-to-use-semrush-site-audit-tool-to-solve-site-errors/) - Practical guide
8. [Semrush Site Audit Notices Explained](https://iloveseo.com/tools/semrush/semrush-site-audit-notices-explained/) - Notice details
9. [Optimize Your Internal Linking with Site Audit](https://www.semrush.com/news/255026-optimize-your-internal-linking-with-site-audit/) - Internal linking
10. [Site Audit: Redirect Chains and Loops Check](https://www.semrush.com/news/255016-site-audit-redirect-chains-and-loops-check/) - Redirect analysis

---

## Related Research (To Be Added)

- [ ] Ahrefs Site Audit Checks
- [ ] Screaming Frog SEO Spider Checks
- [ ] Google Search Console Issues
- [ ] Lighthouse Audit Checks
- [ ] Moz Site Crawl Checks
- [ ] Sitebulb Audit Checks
- [ ] AI Search Optimization Best Practices
- [ ] Core Web Vitals Deep Dive
- [ ] Schema.org Complete Reference
