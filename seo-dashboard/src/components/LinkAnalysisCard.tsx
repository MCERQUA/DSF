'use client'

import { LinkGraphAnalysis } from '@/types/seo'

interface LinkAnalysisCardProps {
  analysis: LinkGraphAnalysis
}

export function LinkAnalysisCard({ analysis }: LinkAnalysisCardProps) {
  const orphanRate = (analysis.orphanPages.length / analysis.totalPages) * 100

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatBox
          label="Total Pages"
          value={analysis.totalPages}
        />
        <StatBox
          label="Total Internal Links"
          value={analysis.totalInternalLinks}
        />
        <StatBox
          label="Avg Links/Page"
          value={analysis.averageLinksPerPage.toFixed(1)}
          warning={analysis.averageLinksPerPage < 5}
        />
        <StatBox
          label="Max Link Depth"
          value={analysis.maxLinkDepth}
          warning={analysis.maxLinkDepth > 5}
        />
      </div>

      {/* Link Distribution Chart */}
      <div className="card">
        <h3 className="card-header">Internal Link Distribution</h3>
        <p className="text-sm text-slate-400 mb-4">
          How many internal links point to each page
        </p>

        <div className="space-y-3">
          <DistributionBar
            label="0 links (orphaned)"
            count={analysis.linkDistribution.zeroLinks}
            total={analysis.totalPages}
            color="bg-red-500"
          />
          <DistributionBar
            label="1-2 links (weak)"
            count={analysis.linkDistribution.oneToTwo}
            total={analysis.totalPages}
            color="bg-amber-500"
          />
          <DistributionBar
            label="3-5 links"
            count={analysis.linkDistribution.threeToFive}
            total={analysis.totalPages}
            color="bg-blue-500"
          />
          <DistributionBar
            label="6-10 links"
            count={analysis.linkDistribution.sixToTen}
            total={analysis.totalPages}
            color="bg-green-500"
          />
          <DistributionBar
            label="10+ links (strong)"
            count={analysis.linkDistribution.moreThanTen}
            total={analysis.totalPages}
            color="bg-emerald-500"
          />
        </div>

        {orphanRate > 30 && (
          <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-sm text-red-400">
              <strong>{orphanRate.toFixed(0)}% of pages are orphaned</strong> (have 0-1 internal links).
              This is a critical issue that limits how search engines discover and value your content.
            </p>
          </div>
        )}
      </div>

      {/* Orphan Pages */}
      {analysis.orphanPages.length > 0 && (
        <div className="card">
          <h3 className="card-header">Orphan Pages</h3>
          <p className="text-sm text-slate-400 mb-4">
            Pages with fewer than 2 internal links pointing to them
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-400 border-b border-slate-700">
                  <th className="pb-3 pr-4">Page</th>
                  <th className="pb-3 pr-4 text-center">Incoming</th>
                  <th className="pb-3 pr-4 text-center">Outgoing</th>
                  <th className="pb-3 text-center">Depth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {analysis.orphanPages.slice(0, 20).map(page => (
                  <tr key={page.url} className="text-slate-300">
                    <td className="py-2 pr-4 font-mono text-xs truncate max-w-xs">
                      {page.url}
                    </td>
                    <td className="py-2 pr-4 text-center">
                      <span className={`${page.incomingCount === 0 ? 'text-red-400' : 'text-amber-400'}`}>
                        {page.incomingCount}
                      </span>
                    </td>
                    <td className="py-2 pr-4 text-center">{page.outgoingCount}</td>
                    <td className="py-2 text-center">
                      {page.linkDepth === -1 ? (
                        <span className="text-red-400">unreachable</span>
                      ) : (
                        page.linkDepth
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {analysis.orphanPages.length > 20 && (
            <p className="text-sm text-slate-500 mt-4">
              Showing 20 of {analysis.orphanPages.length} orphan pages
            </p>
          )}
        </div>
      )}

      {/* Authority Pages */}
      {analysis.authorityPages.length > 0 && (
        <div className="card">
          <h3 className="card-header">Authority Pages</h3>
          <p className="text-sm text-slate-400 mb-4">
            Pages with the most internal links pointing to them
          </p>

          <div className="space-y-2">
            {analysis.authorityPages.slice(0, 10).map(page => (
              <div
                key={page.url}
                className="flex items-center gap-3 p-2 bg-slate-700/30 rounded"
              >
                <span className="text-lg font-bold text-green-400 w-10">
                  {page.incomingCount}
                </span>
                <span className="font-mono text-xs text-slate-300 truncate">
                  {page.url}
                </span>
              </div>
            ))}
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

function DistributionBar({
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
