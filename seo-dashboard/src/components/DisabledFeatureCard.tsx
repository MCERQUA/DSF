'use client'

interface DisabledFeatureCardProps {
  title: string
  description: string
  icon: string
}

export function DisabledFeatureCard({ title, description, icon }: DisabledFeatureCardProps) {
  return (
    <div className="card relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px] z-10 flex items-center justify-center">
        <span className="px-3 py-1.5 bg-slate-700 text-slate-400 text-sm font-medium rounded-full">
          Coming Soon
        </span>
      </div>

      <div className="flex items-start gap-4 opacity-50">
        <span className="text-3xl">{icon}</span>
        <div>
          <h3 className="font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-slate-400">{description}</p>
        </div>
      </div>
    </div>
  )
}
