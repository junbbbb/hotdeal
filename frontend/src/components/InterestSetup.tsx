import { useState } from 'react'
import { Tag, Plus, X } from 'lucide-react'

export default function InterestSetup() {
  const [interests, setInterests] = useState(['애플', '캠핑용품', '다이슨'])
  const [isAdding, setIsAdding] = useState(false)

  const removeInterest = (target: string) => {
    setInterests(interests.filter((i) => i !== target))
  }

  const addInterest = (value: string) => {
    if (value.trim() && !interests.includes(value.trim())) {
      setInterests([...interests, value.trim()])
    }
    setIsAdding(false)
  }

  return (
    <section className="px-4 py-3 border-b border-border-light">
      <div className="flex items-center gap-1.5 mb-2">
        <Tag className="w-3.5 h-3.5 text-text-tertiary" strokeWidth={1.5} />
        <span className="text-xs font-medium text-text-secondary">관심 키워드</span>
      </div>
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
        {interests.map((interest) => (
          <div
            key={interest}
            className="flex items-center gap-1 bg-tag-bg px-3 py-1.5 rounded-full border border-tag-border shrink-0"
          >
            <span className="text-sm font-medium text-tag-text">{interest}</span>
            <button
              className="hover:text-accent-red transition-colors"
              onClick={() => removeInterest(interest)}
              aria-label={`${interest} 삭제`}
            >
              <X className="w-3 h-3 text-tag-text" />
            </button>
          </div>
        ))}

        {isAdding ? (
          <div className="flex items-center border border-border rounded-full overflow-hidden px-1 shrink-0">
            <input
              type="text"
              className="w-20 px-2 py-1.5 text-sm bg-transparent outline-none text-text-primary"
              placeholder="입력"
              autoFocus
              onBlur={(e) => addInterest(e.currentTarget.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addInterest(e.currentTarget.value)
                }
                if (e.key === 'Escape') {
                  setIsAdding(false)
                }
              }}
            />
          </div>
        ) : (
          <button
            className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-dashed border-border text-text-tertiary hover:bg-bg-tertiary transition-colors shrink-0"
            onClick={() => setIsAdding(true)}
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="text-sm font-medium">추가</span>
          </button>
        )}
      </div>
    </section>
  )
}
