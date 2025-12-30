'use client'

import { useState } from 'react'
import { HealthScoreCard } from '@/components/HealthScoreCard'
import { IssuesList } from '@/components/IssuesList'
import { LinkAnalysisCard } from '@/components/LinkAnalysisCard'
import { BlogAnalysisCard } from '@/components/BlogAnalysisCard'
import { ContentAnalysisCard } from '@/components/ContentAnalysisCard'
import { TechnicalSEOCard } from '@/components/TechnicalSEOCard'
import { ActionItems } from '@/components/ActionItems'
import { DisabledFeatureCard } from '@/components/DisabledFeatureCard'
import { ReportView } from '@/components/ReportView'
import { mockReport } from '@/lib/mock-data'

type Tab = 'overview' | 'issues' | 'links' | 'content' | 'blog' | 'technical' | 'report' | 'future'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('overview')
  const report = mockReport // In production, this would come from the analyzer

  const tabs: { id: Tab; label: string; count?: number }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'issues', label: 'Issues', count: report.summary.criticalIssues + report.summary.warnings },
    { id: 'links', label: 'Links' },
    { id: 'content', label: 'Content' },
    { id: 'technical', label: 'Technical' },
    { id: 'blog', label: 'Blog' },
    { id: 'report', label: 'Full Report' },
    { id: 'future', label: 'Coming Soon' },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold text-white">SEO Dashboard</h1>
              <span className="text-sm text-slate-400">Desert Spray Foaming</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-400">
                Last analyzed: {new Date(report.generatedAt).toLocaleDateString()}
              </span>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                Run Analysis
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-1 overflow-x-auto py-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {tab.label}
                {tab.count !== undefined && tab.count > 0 && (
                  <span className="ml-2 px-2 py-0.5 text-xs bg-red-500/20 text-red-400 rounded-full">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Health Score and Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <HealthScoreCard
                score={report.summary.overallHealthScore}
                criticalIssues={report.summary.criticalIssues}
                warnings={report.summary.warnings}
                opportunities={report.summary.opportunities}
              />
              <div className="lg:col-span-2">
                <ActionItems actionItems={report.actionItems} />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard
                label="Total Pages"
                value={report.linkAnalysis.totalPages}
                subtext="indexed pages"
              />
              <StatCard
                label="Orphan Pages"
                value={report.linkAnalysis.orphanPages.length}
                subtext="need internal links"
                variant={report.linkAnalysis.orphanPages.length > 50 ? 'critical' : 'warning'}
              />
              <StatCard
                label="Blog Posts"
                value={report.blogAnalysis.totalBlogPosts}
                subtext={report.blogAnalysis.totalBlogPosts < 10 ? 'very low' : 'published'}
                variant={report.blogAnalysis.totalBlogPosts < 10 ? 'warning' : 'neutral'}
              />
              <StatCard
                label="Unique Content"
                value={`${(report.contentAnalysis.averageUniqueContentRatio * 100).toFixed(0)}%`}
                subtext="average per page"
                variant={report.contentAnalysis.averageUniqueContentRatio < 0.4 ? 'critical' : 'neutral'}
              />
            </div>

            {/* Top Issues Preview */}
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="card-header mb-0">Top Critical Issues</h2>
                <button
                  onClick={() => setActiveTab('issues')}
                  className="text-sm text-blue-400 hover:text-blue-300"
                >
                  View all issues →
                </button>
              </div>
              <IssuesList
                issues={report.issues.filter(i => i.severity === 'critical').slice(0, 3)}
                compact
              />
            </div>
          </div>
        )}

        {activeTab === 'issues' && (
          <div className="card">
            <h2 className="card-header">All Issues</h2>
            <IssuesList issues={report.issues} />
          </div>
        )}

        {activeTab === 'links' && (
          <LinkAnalysisCard analysis={report.linkAnalysis} />
        )}

        {activeTab === 'content' && (
          <ContentAnalysisCard analysis={report.contentAnalysis} />
        )}

        {activeTab === 'blog' && (
          <BlogAnalysisCard analysis={report.blogAnalysis} />
        )}

        {activeTab === 'technical' && (
          <TechnicalSEOCard analysis={report.technicalAnalysis} />
        )}

        {activeTab === 'report' && (
          <ReportView report={report} />
        )}

        {activeTab === 'future' && (
          <div className="space-y-6">
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold text-white mb-2">Coming Soon</h2>
              <p className="text-slate-400">These features are planned for future releases</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <DisabledFeatureCard
                title="Google Search Console"
                description="Connect to GSC to see real search performance data, impressions, clicks, and average positions."
                icon="📊"
              />
              <DisabledFeatureCard
                title="PageSpeed Insights"
                description="Automated Core Web Vitals monitoring for all pages with performance scores and recommendations."
                icon="⚡"
              />
              <DisabledFeatureCard
                title="Keyword Tracking"
                description="Track keyword rankings over time and monitor position changes for target keywords."
                icon="📈"
              />
              <DisabledFeatureCard
                title="Competitor Analysis"
                description="Compare your SEO metrics against local competitors to identify gaps and opportunities."
                icon="🎯"
              />
              <DisabledFeatureCard
                title="Backlink Monitoring"
                description="Track new and lost backlinks, analyze link quality, and identify link building opportunities."
                icon="🔗"
              />
              <DisabledFeatureCard
                title="Automated Reports"
                description="Schedule weekly or monthly SEO reports delivered directly to your email."
                icon="📧"
              />
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm text-slate-400 text-center">
            SEO Dashboard for Desert Spray Foaming • Data is analyzed from static build output
          </p>
        </div>
      </footer>
    </div>
  )
}

function StatCard({
  label,
  value,
  subtext,
  variant = 'neutral',
}: {
  label: string
  value: string | number
  subtext: string
  variant?: 'neutral' | 'warning' | 'critical'
}) {
  const valueColors = {
    neutral: 'text-white',
    warning: 'text-amber-400',
    critical: 'text-red-400',
  }

  return (
    <div className="card">
      <p className="text-sm text-slate-400 mb-1">{label}</p>
      <p className={`text-3xl font-bold ${valueColors[variant]}`}>{value}</p>
      <p className="text-sm text-slate-500 mt-1">{subtext}</p>
    </div>
  )
}
