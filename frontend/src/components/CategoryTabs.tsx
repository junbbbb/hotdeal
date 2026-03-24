import type { Category } from '../data/mockData'

interface CategoryTabsProps {
  categories: readonly Category[]
  selected: Category
  onSelect: (category: Category) => void
}

export default function CategoryTabs({ categories, selected, onSelect }: CategoryTabsProps) {
  return (
    <nav className="px-4 py-2.5 border-b border-border-light">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-3 py-1.5 rounded-full text-sm font-medium shrink-0 transition-colors ${
              selected === category
                ? 'bg-text-primary text-white'
                : 'bg-bg-tertiary text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  )
}
