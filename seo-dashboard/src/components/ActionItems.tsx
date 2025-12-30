'use client'

interface ActionItemsProps {
  actionItems: {
    immediate: string[]
    shortTerm: string[]
    longTerm: string[]
  }
}

export function ActionItems({ actionItems }: ActionItemsProps) {
  return (
    <div className="card h-full">
      <h2 className="card-header">Action Items</h2>

      {actionItems.immediate.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-medium text-red-400 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            Immediate (This Week)
          </h3>
          <ul className="space-y-2">
            {actionItems.immediate.slice(0, 5).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-slate-500 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {actionItems.shortTerm.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-medium text-amber-400 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Short Term
          </h3>
          <ul className="space-y-2">
            {actionItems.shortTerm.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-slate-500 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {actionItems.longTerm.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-blue-400 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            Long Term
          </h3>
          <ul className="space-y-2">
            {actionItems.longTerm.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-slate-500 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {actionItems.immediate.length === 0 &&
        actionItems.shortTerm.length === 0 &&
        actionItems.longTerm.length === 0 && (
          <p className="text-slate-400 text-sm">No action items identified</p>
        )}
    </div>
  )
}
