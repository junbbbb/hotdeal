import type { Deal } from '../data/mockData'
import { Heart, MessageCircle } from 'lucide-react'

interface DealItemProps {
  deal: Deal
}

export default function DealItem({ deal }: DealItemProps) {
  return (
    <article className="flex gap-3 px-4 py-3 border-b border-border-light hover:bg-bg-secondary transition-colors cursor-pointer">
      {/* 이미지 + 할인율 오버레이 (전단지 스타일) */}
      <div className="relative shrink-0">
        <img
          src={deal.imageUrl}
          alt={deal.title}
          className="w-24 h-24 rounded-lg object-cover bg-bg-tertiary"
          loading="lazy"
        />
        {/* 전단지풍 할인율 배지 */}
        <span className="absolute -top-1.5 -left-1.5 bg-flyer-red text-white text-[11px] font-black px-1.5 py-0.5 rounded leading-none">
          {deal.discountRate}%
        </span>
        {deal.isHot && (
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-flyer-yellow text-flyer-badge text-[10px] font-black px-2 py-0.5 rounded-full leading-none whitespace-nowrap">
            HOT
          </span>
        )}
      </div>

      {/* 상품 정보 */}
      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
        <div>
          <h3 className="text-[13px] font-medium text-text-primary line-clamp-2 leading-snug">
            {deal.title}
          </h3>

          {/* 가격 - 전단지처럼 굵고 크게 */}
          <div className="flex items-baseline gap-1.5 mt-1.5">
            <span className="text-lg font-extrabold text-flyer-red tracking-tight leading-none">
              {deal.salePrice.toLocaleString()}
              <span className="text-sm">원</span>
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-xs text-text-tertiary line-through">
              {deal.originalPrice.toLocaleString()}원
            </span>
            <span className="text-xs font-bold text-accent-orange">
              {deal.discountRate}% 할인
            </span>
          </div>
        </div>

        {/* 메타 정보 - 쿠팡 스타일 최소 정보 */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1 text-xs text-text-tertiary">
            <span className="font-semibold text-accent-blue">{deal.community}</span>
            <span>·</span>
            <span>{deal.postedAt}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-text-tertiary">
            <span className="flex items-center gap-0.5">
              <Heart className="w-3.5 h-3.5" strokeWidth={1.5} />
              {deal.likes}
            </span>
            <span className="flex items-center gap-0.5">
              <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
              {deal.comments}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
