import { useMemo } from 'react'
import { mockDeals, type Category } from '../data/mockData'
import DealItem from './DealItem'

interface ProductListProps {
  selectedCategory: Category
  sortBy: 'latest' | 'popular' | 'comments'
}

export default function ProductList({ selectedCategory, sortBy }: ProductListProps) {
  const filteredDeals = useMemo(() => {
    let deals = selectedCategory === '전체'
      ? mockDeals
      : mockDeals.filter((d) => d.category === selectedCategory)

    if (sortBy === 'popular') {
      deals = [...deals].sort((a, b) => b.likes - a.likes)
    } else if (sortBy === 'comments') {
      deals = [...deals].sort((a, b) => b.comments - a.comments)
    }

    return deals
  }, [selectedCategory, sortBy])

  return (
    <section>
      {filteredDeals.map((deal) => (
        <DealItem key={deal.id} deal={deal} />
      ))}
    </section>
  )
}
