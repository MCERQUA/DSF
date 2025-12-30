'use client'

import { SEOReport } from '@/types/seo'

interface ReportViewProps {
  report: SEOReport
}

export function ReportView({ report }: ReportViewProps) {
  const getScoreLabel = (score: number) => {
    if (score < 30) return { label: 'CRITICAL', color: 'text-red-400', bg: 'bg-red-500/10' }
    if (score < 60) return { label: 'NEEDS WORK', color: 'text-amber-400', bg: 'bg-amber-500/10' }
    if (score < 80) return { label: 'FAIR', color: 'text-blue-400', bg: 'bg-blue-500/10' }
    return { label: 'GOOD', color: 'text-green-400', bg: 'bg-green-500/10' }
  }

  const scoreInfo = getScoreLabel(report.summary.overallHealthScore)

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Report Header */}
      <div className="card text-center py-8">
        <h1 className="text-2xl font-bold text-white mb-2">SEO Analysis Report</h1>
        <p className="text-slate-400">
          {report.siteUrl} • Generated {new Date(report.generatedAt).toLocaleDateString()}
        </p>

        <div className={`inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-lg ${scoreInfo.bg}`}>
          <span className={`text-5xl font-bold ${scoreInfo.color}`}>
            {report.summary.overallHealthScore}
          </span>
          <div className="text-left">
            <p className={`text-sm font-medium ${scoreInfo.color}`}>{scoreInfo.label}</p>
            <p className="text-xs text-slate-400">out of 100</p>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="card">
        <h2 className="text-lg font-bold text-white mb-4">Executive Summary</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-red-500/10 rounded-lg">
            <p className="text-3xl font-bold text-red-400">{report.summary.criticalIssues}</p>
            <p className="text-sm text-slate-400">Critical Issues</p>
          </div>
          <div className="text-center p-4 bg-amber-500/10 rounded-lg">
            <p className="text-3xl font-bold text-amber-400">{report.summary.warnings}</p>
            <p className="text-sm text-slate-400">Warnings</p>
          </div>
          <div className="text-center p-4 bg-blue-500/10 rounded-lg">
            <p className="text-3xl font-bold text-blue-400">{report.summary.opportunities}</p>
            <p className="text-sm text-slate-400">Opportunities</p>
          </div>
          <div className="text-center p-4 bg-slate-700/50 rounded-lg">
            <p className="text-3xl font-bold text-slate-300">{report.linkAnalysis.totalPages}</p>
            <p className="text-sm text-slate-400">Total Pages</p>
          </div>
        </div>

        {report.summary.overallHealthScore < 60 && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-sm text-red-400">
              <strong>This site has significant SEO issues</strong> that are likely impacting search
              visibility. Focus on critical issues first, particularly internal linking and content
              depth.
            </p>
          </div>
        )}
      </div>

      {/* Key Metrics */}
      <div className="card">
        <h2 className="text-lg font-bold text-white mb-4">Key Metrics</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-400 border-b border-slate-700">
                <th className="pb-3 pr-4">Metric</th>
                <th className="pb-3 pr-4">Value</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/50">
              <MetricRow
                label="Total Pages"
                value={report.linkAnalysis.totalPages.toString()}
                status="neutral"
              />
              <MetricRow
                label="Orphan Pages (0-1 internal links)"
                value={`${report.linkAnalysis.orphanPages.length} (${((report.linkAnalysis.orphanPages.length / report.linkAnalysis.totalPages) * 100).toFixed(0)}%)`}
                status={report.linkAnalysis.orphanPages.length > report.linkAnalysis.totalPages * 0.3 ? 'critical' : 'warning'}
              />
              <MetricRow
                label="Average Internal Links per Page"
                value={report.linkAnalysis.averageLinksPerPage.toFixed(1)}
                status={report.linkAnalysis.averageLinksPerPage < 5 ? 'warning' : 'good'}
              />
              <MetricRow
                label="Blog Posts"
                value={report.blogAnalysis.totalBlogPosts.toString()}
                status={report.blogAnalysis.totalBlogPosts < 10 ? 'warning' : 'good'}
              />
              <MetricRow
                label="Services Without Blog Coverage"
                value={`${report.blogAnalysis.servicesNeverMentioned.length} of 11`}
                status={report.blogAnalysis.servicesNeverMentioned.length > 5 ? 'critical' : 'warning'}
              />
              <MetricRow
                label="Average Unique Content Ratio"
                value={`${(report.contentAnalysis.averageUniqueContentRatio * 100).toFixed(0)}%`}
                status={report.contentAnalysis.averageUniqueContentRatio < 0.4 ? 'critical' : report.contentAnalysis.averageUniqueContentRatio < 0.6 ? 'warning' : 'good'}
              />
              <MetricRow
                label="Duplicate Meta Descriptions"
                value={report.contentAnalysis.duplicateMetaDescriptions.length.toString()}
                status={report.contentAnalysis.duplicateMetaDescriptions.length > 0 ? 'warning' : 'good'}
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* Critical Issues */}
      {report.issues.filter(i => i.severity === 'critical').length > 0 && (
        <div className="card">
          <h2 className="text-lg font-bold text-red-400 mb-4">Critical Issues</h2>

          <div className="space-y-4">
            {report.issues
              .filter(i => i.severity === 'critical')
              .map(issue => (
                <div key={issue.id} className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">{issue.title}</h3>
                  <p className="text-sm text-slate-300 mb-3">{issue.description}</p>
                  <div className="text-sm">
                    <p className="text-slate-400 mb-1">
                      <strong>Impact:</strong> {issue.impact}
                    </p>
                    <p className="text-slate-400">
                      <strong>Recommendation:</strong> {issue.recommendation}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Action Items */}
      <div className="card">
        <h2 className="text-lg font-bold text-white mb-4">Recommended Actions</h2>

        {report.actionItems.immediate.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-medium text-red-400 mb-3">Immediate (This Week)</h3>
            <ul className="space-y-2">
              {report.actionItems.immediate.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <input type="checkbox" className="mt-1 accent-red-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {report.actionItems.shortTerm.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-medium text-amber-400 mb-3">Short Term</h3>
            <ul className="space-y-2">
              {report.actionItems.shortTerm.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <input type="checkbox" className="mt-1 accent-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {report.actionItems.longTerm.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-blue-400 mb-3">Long Term</h3>
            <ul className="space-y-2">
              {report.actionItems.longTerm.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <input type="checkbox" className="mt-1 accent-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Print/Export Notice */}
      <div className="text-center text-sm text-slate-500 pb-8">
        <p>This report was generated by the SEO Dashboard</p>
        <p>For questions or support, contact your SEO team</p>
      </div>
    </div>
  )
}

function MetricRow({
  label,
  value,
  status,
}: {
  label: string
  value: string
  status: 'good' | 'warning' | 'critical' | 'neutral'
}) {
  const statusColors = {
    good: 'text-green-400',
    warning: 'text-amber-400',
    critical: 'text-red-400',
    neutral: 'text-slate-300',
  }

  const statusLabels = {
    good: 'Good',
    warning: 'Needs Improvement',
    critical: 'Critical',
    neutral: '-',
  }

  return (
    <tr className="text-slate-300">
      <td className="py-3 pr-4">{label}</td>
      <td className="py-3 pr-4 font-mono">{value}</td>
      <td className={`py-3 ${statusColors[status]}`}>{statusLabels[status]}</td>
    </tr>
  )
}
