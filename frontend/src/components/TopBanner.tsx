import { Zap } from 'lucide-react'

export default function TopBanner() {
  return (
    <div className="bg-flyer-red px-4 py-2.5 flex items-center justify-center gap-2 overflow-hidden">
      <Zap className="w-4 h-4 text-flyer-yellow shrink-0" fill="currentColor" strokeWidth={0} />
      <p className="text-sm font-bold text-white tracking-tight whitespace-nowrap animate-marquee">
        오늘의 특가 — 에어팟 프로 47% OFF · 다이슨 청소기 46% OFF · 커피머신 53% OFF · 갤럭시 S25 28% OFF
      </p>
      <Zap className="w-4 h-4 text-flyer-yellow shrink-0" fill="currentColor" strokeWidth={0} />
    </div>
  )
}
