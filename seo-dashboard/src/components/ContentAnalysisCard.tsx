'use client'

import { ContentDepthAnalysis } from '@/types/seo'

interface ContentAnalysisCardProps {
  analysis: ContentDepthAnalysis
}

export function ContentAnalysisCard({ analysis }: ContentAnalysisCardProps) {
  const totalPages = Object.values(analysis.contentQualityDistribution).reduce((a, b) => a + b, 0)
  const thinPercentage = ((analysis.contentQualityDistribution.poor + analysis.contentQualityDistribution.thin) / totalPages) * 100

  return (
    <div className="space-y-6">
      {/* Critical Alert for High Thin Content */}
      {thinPercentage > 50 && (
        <div className="card bg-red-500/10 border-red-500/30">
          <div className="flex items-start gap-4">
            <span className="text-4xl">📄</span>
            <div>
              <h3 className="text-lg font-bold text-red-400 mb-2">
                {thinPercentage.toFixed(0)}% of Pages Have Thin Content
              </h3>
              <p className="text-sm text-slate-300">
                The majority of your pages have less than 300 words of unique content. This suggests
                heavy reliance on templates without meaningful, page-specific value.
              </p>
              <p className="text-sm text-slate-400 mt-2">
                <strong>Impact:</strong> Thin content pages rarely rank well and may be flagged as
                low-quality by search engines.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatBox
          label="Avg Word Count"
          value={Math.round(analysis.averageWordCount)}
        />
        <StatBox
          label="Unique Content Ratio"
          value={`${(analysis.averageUniqueContentRatio * 100).toFixed(0)}%`}
          warning={analysis.averageUniqueContentRatio < 0.4}
        />
        <StatBox
          label="Missing Meta Desc"
          value={analysis.missingMetaDescriptions.length}
          warning={analysis.missingMetaDescriptions.length > 0}
        />
        <StatBox
          label="Duplicate Metas"
          value={analysis.duplicateMetaDescriptions.length}
          warning={analysis.duplicateMetaDescriptions.length > 0}
        />
      </div>

      {/* Content Quality Distribution */}
      <div className="card">
        <h3 className="card-header">Content Quality Distribution</h3>
        <p className="text-sm text-slate-400 mb-4">
          Unique words per page (excluding template/boilerplate content)
        </p>

        <div className="space-y-3">
          <QualityBar
            label="Poor (<100 unique words)"
            count={analysis.contentQualityDistribution.poor}
            total={totalPages}
            color="bg-red-500"
          />
          <QualityBar
            label="Thin (100-300 words)"
            count={analysis.contentQualityDistribution.thin}
            total={totalPages}
            color="bg-amber-500"
          />
          <QualityBar
            label="Adequate (300-600 words)"
            count={analysis.contentQualityDistribution.adequate}
            total={totalPages}
            color="bg-blue-500"
          />
          <QualityBar
            label="Good (600-1200 words)"
            count={analysis.contentQualityDistribution.good}
            total={totalPages}
            color="bg-green-500"
          />
          <QualityBar
            label="Comprehensive (1200+ words)"
            count={analysis.contentQualityDistribution.comprehensive}
            total={totalPages}
            color="bg-emerald-500"
          />
        </div>
      </div>

      {/* Unique Content Ratio */}
      {analysis.averageUniqueContentRatio < 0.5 && (
        <div className="card">
          <h3 className="card-header text-amber-400">Template vs Unique Content</h3>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1">
              <div className="h-4 bg-slate-700 rounded-full overflow-hidden flex">
                <div
                  className="h-full bg-green-500"
                  style={{ width: `${analysis.averageUniqueContentRatio * 100}%` }}
                />
                <div
                  className="h-full bg-red-500"
                  style={{ width: `${(1 - analysis.averageUniqueContentRatio) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-slate-300">
                Unique: {(analysis.averageUniqueContentRatio * 100).toFixed(0)}%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-slate-300">
                Template: {((1 - analysis.averageUniqueContentRatio) * 100).toFixed(0)}%
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-400 mt-4">
            Most of your page content is template text that appears across many pages. Search engines
            may see these as near-duplicates with little unique value.
          </p>
        </div>
      )}

      {/* Duplicate Meta Descriptions */}
      {analysis.duplicateMetaDescriptions.length > 0 && (
        <div className="card">
          <h3 className="card-header text-red-400">Duplicate Meta Descriptions</h3>
          <p className="text-sm text-slate-400 mb-4">
            Pages sharing identical meta descriptions. Each page should have a unique meta.
          </p>

          <div className="space-y-4">
            {analysis.duplicateMetaDescriptions.slice(0, 5).map((dup, idx) => (
              <div key={idx} className="p-3 bg-slate-700/50 rounded-lg">
                <p className="text-sm text-slate-300 italic mb-2 line-clamp-2">
                  &ldquo;{dup.meta}&rdquo;
                </p>
                <p className="text-xs text-slate-500">
                  Used on {dup.pages.length} pages:
                </p>
                <div className="mt-1 flex flex-wrap gap-1">
                  {dup.pages.slice(0, 3).map(page => (
                    <span
                      key={page}
                      className="text-xs font-mono bg-slate-600 px-2 py-0.5 rounded"
                    >
                      {page}
                    </span>
                  ))}
                  {dup.pages.length > 3 && (
                    <span className="text-xs text-slate-500">
                      +{dup.pages.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pages Without FAQ */}
      {analysis.pagesWithoutFAQ.length > 0 && (
        <div className="card">
          <h3 className="card-header text-blue-400">Pages Missing FAQ Content</h3>
          <p className="text-sm text-slate-400 mb-4">
            Service and blog pages that could benefit from FAQ sections
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {analysis.pagesWithoutFAQ.slice(0, 10).map(page => (
              <div
                key={page}
                className="text-sm font-mono text-slate-400 bg-slate-700/30 px-3 py-2 rounded truncate"
              >
                {page}
              </div>
            ))}
          </div>

          {analysis.pagesWithoutFAQ.length > 10 && (
            <p className="text-sm text-slate-500 mt-3">
              ... and {analysis.pagesWithoutFAQ.length - 10} more pages
            </p>
          )}

          <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-sm text-blue-400">
              <strong>Tip:</strong> FAQ sections with proper schema markup can appear as rich results
              in Google search, improving click-through rates.
            </p>
          </div>
        </div>
      )}

      {/* Thin Content Pages */}
      {analysis.thinContentPages.length > 0 && (
        <div className="card">
          <h3 className="card-header">Thinnest Content Pages</h3>
          <p className="text-sm text-slate-400 mb-4">
            Pages with the least unique content
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-400 border-b border-slate-700">
                  <th className="pb-3 pr-4">Page</th>
                  <th className="pb-3 pr-4 text-center">Total Words</th>
                  <th className="pb-3 pr-4 text-center">Unique Words</th>
                  <th className="pb-3 text-center">Template %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {analysis.thinContentPages.slice(0, 15).map(page => (
                  <tr key={page.url} className="text-slate-300">
                    <td className="py-2 pr-4 font-mono text-xs truncate max-w-xs">
                      {page.url}
                    </td>
                    <td className="py-2 pr-4 text-center">{page.totalWordCount}</td>
                    <td className="py-2 pr-4 text-center">
                      <span className={page.uniqueWordCount < 100 ? 'text-red-400' : 'text-amber-400'}>
                        {page.uniqueWordCount}
                      </span>
                    </td>
                    <td className="py-2 text-center">
                      <span className={page.templateRatio > 0.7 ? 'text-red-400' : ''}>
                        {(page.templateRatio * 100).toFixed(0)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

function StatBox({
  label,
  value,
  warning = false,
}: {
  label: string
  value: string | number
  warning?: boolean
}) {
  return (
    <div className="card">
      <p className="text-sm text-slate-400 mb-1">{label}</p>
      <p className={`text-2xl font-bold ${warning ? 'text-amber-400' : 'text-white'}`}>
        {value}
      </p>
    </div>
  )
}

function QualityBar({
  label,
  count,
  total,
  color,
}: {
  label: string
  count: number
  total: number
  color: string
}) {
  const percentage = (count / total) * 100

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-slate-300">{label}</span>
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
