'use client'

import { BlogConnectionAnalysis } from '@/types/seo'

interface BlogAnalysisCardProps {
  analysis: BlogConnectionAnalysis
}

export function BlogAnalysisCard({ analysis }: BlogAnalysisCardProps) {
  const hasNoBlog = analysis.totalBlogPosts === 0

  return (
    <div className="space-y-6">
      {/* Warning if no blog */}
      {hasNoBlog && (
        <div className="card bg-red-500/10 border-red-500/30">
          <div className="flex items-start gap-4">
            <span className="text-4xl">📭</span>
            <div>
              <h3 className="text-lg font-bold text-red-400 mb-2">No Blog Content Found</h3>
              <p className="text-sm text-slate-300">
                Your blog section has no published content. Blog posts are essential for:
              </p>
              <ul className="mt-2 text-sm text-slate-400 space-y-1">
                <li>• Building topical authority for your services</li>
                <li>• Creating internal linking opportunities</li>
                <li>• Ranking for informational queries</li>
                <li>• Supporting your service and location pages</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatBox
          label="Blog Posts"
          value={analysis.totalBlogPosts}
          warning={analysis.totalBlogPosts < 10}
        />
        <StatBox
          label="Avg Word Count"
          value={Math.round(analysis.averageBlogWordCount)}
          warning={analysis.averageBlogWordCount < 800}
        />
        <StatBox
          label="Links to Services"
          value={analysis.blogToServiceLinks}
          warning={analysis.blogToServiceLinks < analysis.totalBlogPosts}
        />
        <StatBox
          label="Links to Locations"
          value={analysis.blogToLocationLinks}
          warning={analysis.blogToLocationLinks === 0}
        />
      </div>

      {/* Services Without Blog Coverage */}
      {analysis.servicesNeverMentioned.length > 0 && (
        <div className="card">
          <h3 className="card-header text-red-400">Services With ZERO Blog Coverage</h3>
          <p className="text-sm text-slate-400 mb-4">
            These services are never mentioned in any blog content. This is a significant content gap.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {analysis.servicesNeverMentioned.map(service => (
              <div
                key={service}
                className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg"
              >
                <span className="text-red-400">✕</span>
                <span className="text-sm text-slate-300">{formatServiceName(service)}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-slate-700/50 rounded-lg">
            <p className="text-sm text-slate-300">
              <strong>Recommendation:</strong> Create at least 2-3 blog posts for each service covering:
            </p>
            <ul className="mt-2 text-sm text-slate-400 space-y-1">
              <li>• Benefits and use cases</li>
              <li>• Common questions and answers</li>
              <li>• Case studies or examples</li>
            </ul>
          </div>
        </div>
      )}

      {/* Services With Coverage */}
      {analysis.servicesWithBlogCoverage.length > 0 && (
        <div className="card">
          <h3 className="card-header">Service Blog Coverage</h3>
          <p className="text-sm text-slate-400 mb-4">
            How many times each service is mentioned in blog content
          </p>

          <div className="space-y-3">
            {analysis.servicesWithBlogCoverage.map(item => (
              <div key={item.service} className="flex items-center gap-4">
                <div className="w-32 text-sm text-slate-300 truncate">
                  {formatServiceName(item.service)}
                </div>
                <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{
                      width: `${Math.min(100, (item.mentionCount / 10) * 100)}%`,
                    }}
                  />
                </div>
                <div className="w-8 text-sm text-slate-400 text-right">
                  {item.mentionCount}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Location Coverage Warning */}
      {analysis.locationsNeverMentioned.length > 0 && (
        <div className="card">
          <h3 className="card-header text-amber-400">Location Blog Coverage Gap</h3>
          <p className="text-sm text-slate-400 mb-4">
            {analysis.locationsNeverMentioned.length} out of your served locations have never been
            mentioned in any blog content.
          </p>

          <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg">
            <div className="text-4xl">📍</div>
            <div>
              <p className="text-slate-300">
                <strong>{((analysis.locationsNeverMentioned.length / (analysis.locationsNeverMentioned.length + analysis.locationsWithBlogCoverage.length)) * 100).toFixed(0)}%</strong> of
                locations have no blog mentions
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Consider creating regional blog posts that mention multiple cities, or case studies
                from specific locations.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Blog Posts Overview */}
      {analysis.totalBlogPosts > 0 && (
        <div className="card">
          <h3 className="card-header">Blog Post Analysis</h3>

          {analysis.averageBlogWordCount < 800 && (
            <div className="mb-4 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-sm text-amber-400">
                <strong>Thin Content Warning:</strong> Average blog post is only{' '}
                {Math.round(analysis.averageBlogWordCount)} words. Aim for 1,500-2,500 words for
                comprehensive, rankable content.
              </p>
            </div>
          )}

          <div className="text-sm text-slate-400">
            <p>Your blog needs to actively support your service and location pages through:</p>
            <ul className="mt-2 space-y-1">
              <li>• Contextual internal links to service pages</li>
              <li>• Mentions of specific service areas</li>
              <li>• FAQ content that answers real questions</li>
              <li>• Case studies featuring local projects</li>
            </ul>
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

function formatServiceName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
