'use client'

import { TechnicalSEOAnalysis } from '@/types/seo'

interface TechnicalSEOCardProps {
  analysis: TechnicalSEOAnalysis
}

export function TechnicalSEOCard({ analysis }: TechnicalSEOCardProps) {
  const totalPages =
    analysis.crawlDepthDistribution.depth0 +
    analysis.crawlDepthDistribution.depth1 +
    analysis.crawlDepthDistribution.depth2 +
    analysis.crawlDepthDistribution.depth3 +
    analysis.crawlDepthDistribution.depth4Plus

  return (
    <div className="space-y-6">
      {/* Crawl Depth Distribution */}
      <div className="card">
        <h3 className="card-header">Crawl Depth Distribution</h3>
        <p className="text-sm text-slate-400 mb-4">
          How many clicks from the homepage to reach each page. Pages at 4+ clicks may have indexing issues.
        </p>

        <div className="space-y-3">
          <DepthBar
            label="0 clicks (Homepage)"
            count={analysis.crawlDepthDistribution.depth0}
            total={totalPages}
            color="bg-emerald-500"
          />
          <DepthBar
            label="1 click"
            count={analysis.crawlDepthDistribution.depth1}
            total={totalPages}
            color="bg-green-500"
          />
          <DepthBar
            label="2 clicks"
            count={analysis.crawlDepthDistribution.depth2}
            total={totalPages}
            color="bg-blue-500"
          />
          <DepthBar
            label="3 clicks"
            count={analysis.crawlDepthDistribution.depth3}
            total={totalPages}
            color="bg-amber-500"
          />
          <DepthBar
            label="4+ clicks (problematic)"
            count={analysis.crawlDepthDistribution.depth4Plus}
            total={totalPages}
            color="bg-red-500"
            warning={analysis.crawlDepthDistribution.depth4Plus > 0}
          />
        </div>

        {analysis.pagesAt4PlusDepth.length > 0 && (
          <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-sm text-red-400 font-medium mb-2">
              Pages at 4+ clicks depth:
            </p>
            <div className="flex flex-wrap gap-1">
              {analysis.pagesAt4PlusDepth.slice(0, 10).map(url => (
                <span key={url} className="text-xs font-mono bg-slate-700 px-2 py-0.5 rounded">
                  {url}
                </span>
              ))}
              {analysis.pagesAt4PlusDepth.length > 10 && (
                <span className="text-xs text-slate-500">
                  +{analysis.pagesAt4PlusDepth.length - 10} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Sitemap & Robots Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="card-header">Sitemap & Robots.txt</h3>

          <div className="space-y-3">
            <StatusRow
              label="robots.txt exists"
              status={analysis.hasRobotsTxt}
            />
            <StatusRow
              label="sitemap.xml exists"
              status={analysis.hasSitemapXml}
            />
            <StatusRow
              label="Sitemap in robots.txt"
              status={analysis.sitemapInRobots}
            />
          </div>

          {analysis.sitemapUrl && (
            <div className="mt-4 p-2 bg-slate-700/50 rounded">
              <p className="text-xs text-slate-400">Sitemap URL:</p>
              <p className="text-sm font-mono text-slate-300 truncate">
                {analysis.sitemapUrl}
              </p>
            </div>
          )}

          {analysis.robotsTxtIssues.length > 0 && (
            <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-sm text-amber-400 font-medium mb-2">Issues found:</p>
              <ul className="space-y-1">
                {analysis.robotsTxtIssues.map((issue, idx) => (
                  <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-amber-400">•</span>
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* HTTPS & Security */}
        <div className="card">
          <h3 className="card-header">Security</h3>

          <div className="space-y-3">
            <StatusRow
              label="HTTPS enabled"
              status={analysis.isHttps}
            />
            <StatusRow
              label="No mixed content"
              status={!analysis.hasMixedContent}
            />
          </div>

          {analysis.isHttps && !analysis.hasMixedContent ? (
            <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-sm text-green-400">
                Site is properly secured with HTTPS and no mixed content issues.
              </p>
            </div>
          ) : (
            <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-sm text-red-400">
                Security issues detected. HTTPS and mixed content problems can affect rankings and user trust.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* AI Search Readiness */}
      <div className="card">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="card-header mb-0">AI Search Readiness</h3>
          <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">NEW</span>
        </div>
        <p className="text-sm text-slate-400 mb-4">
          Optimization for AI-powered search engines like Perplexity, ChatGPT, Claude, and Google AI Overviews.
        </p>

        <div className="space-y-3">
          <StatusRow
            label="llms.txt file exists"
            status={analysis.hasLlmsTxt}
          />
        </div>

        {!analysis.hasLlmsTxt && (
          <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-sm text-blue-400 font-medium mb-2">
              What is llms.txt?
            </p>
            <p className="text-sm text-slate-300 mb-3">
              Similar to robots.txt, llms.txt tells AI crawlers about your site structure,
              key pages, and how to best understand your content. It's becoming increasingly
              important as AI search engines grow in usage.
            </p>
            <p className="text-sm text-slate-400">
              <strong>Recommendation:</strong> Create a /llms.txt file in your root directory
              with a site overview, key service pages, and content hierarchy.
            </p>
          </div>
        )}

        {analysis.llmsTxtIssues.length > 0 && analysis.hasLlmsTxt && (
          <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
            <p className="text-sm text-amber-400 font-medium mb-2">Issues found:</p>
            <ul className="space-y-1">
              {analysis.llmsTxtIssues.map((issue, idx) => (
                <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                  <span className="text-amber-400">•</span>
                  {issue}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

function DepthBar({
  label,
  count,
  total,
  color,
  warning = false,
}: {
  label: string
  count: number
  total: number
  color: string
  warning?: boolean
}) {
  const percentage = total > 0 ? (count / total) * 100 : 0

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className={`${warning ? 'text-red-400' : 'text-slate-300'}`}>{label}</span>
        <span className="text-slate-400">
          {count} ({percentage.toFixed(1)}%)
        </span>
      </div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

function StatusRow({
  label,
  status,
}: {
  label: string
  status: boolean
}) {
  return (
    <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
      <span className="text-sm text-slate-300">{label}</span>
      <span className={`text-sm font-medium ${status ? 'text-green-400' : 'text-red-400'}`}>
        {status ? '✓ Yes' : '✗ No'}
      </span>
    </div>
  )
}
