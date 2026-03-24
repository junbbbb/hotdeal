interface SortBarProps {
  sortBy: 'latest' | 'popular' | 'comments'
  onSortChange: (sort: 'latest' | 'popular' | 'comments') => void
}

const sortOptions = [
  { key: 'latest' as const, label: '최신순' },
  { key: 'popular' as const, label: '인기순' },
  { key: 'comments' as const, label: '댓글순' },
]

export default function SortBar({ sortBy, onSortChange }: SortBarProps) {
  return (
    <div className="px-4 py-2.5 flex items-center justify-between border-b border-border-light">
      <div className="flex items-center">
        {sortOptions.map((option, index) => (
          <span key={option.key} className="flex items-center">
            {index > 0 && <span className="mx-2 text-border-light">|</span>}
            <button
              className={`text-sm transition-colors ${
                sortBy === option.key
                  ? 'text-text-primary font-semibold'
                  : 'text-text-tertiary hover:text-text-secondary'
              }`}
              onClick={() => onSortChange(option.key)}
            >
              {option.label}
            </button>
          </span>
        ))}
      </div>
      <span className="text-xs text-text-tertiary">총 15건</span>
    </div>
  )
}
