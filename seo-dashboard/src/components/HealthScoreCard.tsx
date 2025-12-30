'use client'

interface HealthScoreCardProps {
  score: number
  criticalIssues: number
  warnings: number
  opportunities: number
}

export function HealthScoreCard({
  score,
  criticalIssues,
  warnings,
  opportunities,
}: HealthScoreCardProps) {
  const getScoreColor = (score: number) => {
    if (score < 30) return 'text-red-400'
    if (score < 60) return 'text-amber-400'
    if (score < 80) return 'text-blue-400'
    return 'text-green-400'
  }

  const getScoreLabel = (score: number) => {
    if (score < 30) return 'Critical'
    if (score < 60) return 'Needs Work'
    if (score < 80) return 'Fair'
    return 'Good'
  }

  const getScoreBg = (score: number) => {
    if (score < 30) return 'bg-red-500/10 border-red-500/30'
    if (score < 60) return 'bg-amber-500/10 border-amber-500/30'
    if (score < 80) return 'bg-blue-500/10 border-blue-500/30'
    return 'bg-green-500/10 border-green-500/30'
  }

  return (
    <div className={`card ${getScoreBg(score)} border`}>
      <h2 className="text-sm font-medium text-slate-400 mb-4">Overall Health Score</h2>

      <div className="flex items-center gap-6">
        {/* Score Circle */}
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-slate-700"
            />
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${(score / 100) * 251.2} 251.2`}
              strokeLinecap="round"
              className={getScoreColor(score)}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-2xl font-bold ${getScoreColor(score)}`}>{score}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex-1 space-y-2">
          <p className={`text-lg font-semibold ${getScoreColor(score)}`}>
            {getScoreLabel(score)}
          </p>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-sm text-slate-300">{criticalIssues} critical</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-sm text-slate-300">{warnings} warnings</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-sm text-slate-300">{opportunities} opportunities</span>
            </div>
          </div>
        </div>
      </div>

      {score < 60 && (
        <p className="mt-4 text-sm text-slate-400 border-t border-slate-700 pt-4">
          This site has significant SEO issues. Focus on critical items first.
        </p>
      )}
    </div>
  )
}
