'use client'

import { useState } from 'react'
import { SEOIssue, SeverityLevel } from '@/types/seo'

interface IssuesListProps {
  issues: SEOIssue[]
  compact?: boolean
}

export function IssuesList({ issues, compact = false }: IssuesListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [filter, setFilter] = useState<SeverityLevel | 'all'>('all')

  const filteredIssues = filter === 'all'
    ? issues
    : issues.filter(i => i.severity === filter)

  const getSeverityStyles = (severity: SeverityLevel) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-500/10 border-red-500/30 text-red-400'
      case 'warning':
        return 'bg-amber-500/10 border-amber-500/30 text-amber-400'
      case 'opportunity':
        return 'bg-blue-500/10 border-blue-500/30 text-blue-400'
      default:
        return 'bg-slate-500/10 border-slate-500/30 text-slate-400'
    }
  }

  const getSeverityIcon = (severity: SeverityLevel) => {
    switch (severity) {
      case 'critical':
        return '🚨'
      case 'warning':
        return '⚠️'
      case 'opportunity':
        return '💡'
      default:
        return '📋'
    }
  }

  return (
    <div>
      {!compact && (
        <div className="flex gap-2 mb-4">
          {(['all', 'critical', 'warning', 'opportunity'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                filter === f
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
              {f !== 'all' && (
                <span className="ml-1 text-xs opacity-60">
                  ({issues.filter(i => i.severity === f).length})
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-3">
        {filteredIssues.map(issue => (
          <div
            key={issue.id}
            className={`border rounded-lg overflow-hidden ${getSeverityStyles(issue.severity)}`}
          >
            <button
              onClick={() => setExpandedId(expandedId === issue.id ? null : issue.id)}
              className="w-full p-4 text-left flex items-start gap-3 hover:bg-white/5 transition-colors"
            >
              <span className="text-xl">{getSeverityIcon(issue.severity)}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${getSeverityStyles(issue.severity)}`}>
                    {issue.severity.toUpperCase()}
                  </span>
                  <span className="text-xs text-slate-500">{issue.category}</span>
                </div>
                <h3 className="font-medium text-white">{issue.title}</h3>
                {compact && (
                  <p className="text-sm text-slate-400 mt-1 line-clamp-1">{issue.description}</p>
                )}
              </div>
              <svg
                className={`w-5 h-5 text-slate-400 transition-transform ${
                  expandedId === issue.id ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {expandedId === issue.id && (
              <div className="px-4 pb-4 border-t border-white/10">
                <div className="pt-4 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-300 mb-1">Description</h4>
                    <p className="text-sm text-slate-400">{issue.description}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-300 mb-1">Impact</h4>
                    <p className="text-sm text-slate-400">{issue.impact}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-slate-300 mb-1">Recommendation</h4>
                    <p className="text-sm text-slate-400">{issue.recommendation}</p>
                  </div>

                  {issue.affectedPages.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-slate-300 mb-2">
                        Affected Pages ({issue.affectedPages.length})
                      </h4>
                      <div className="max-h-40 overflow-y-auto space-y-1">
                        {issue.affectedPages.slice(0, 10).map(page => (
                          <div
                            key={page}
                            className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded"
                          >
                            {page}
                          </div>
                        ))}
                        {issue.affectedPages.length > 10 && (
                          <p className="text-xs text-slate-500">
                            ... and {issue.affectedPages.length - 10} more
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredIssues.length === 0 && (
        <p className="text-center text-slate-500 py-8">No issues found</p>
      )}
    </div>
  )
}
