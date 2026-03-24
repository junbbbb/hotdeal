import { useState } from 'react'
import TopBanner from './components/TopBanner'
import Header from './components/Header'
import InterestSetup from './components/InterestSetup'
import CategoryTabs from './components/CategoryTabs'
import SortBar from './components/SortBar'
import ProductList from './components/ProductList'
import { categories, type Category } from './data/mockData'

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('전체')
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'comments'>('latest')

  return (
    <div className="min-h-screen bg-bg-secondary">
      <div className="max-w-lg mx-auto bg-bg-primary min-h-screen border-x border-border-light">
        <TopBanner />
        <Header />
        <main>
          <InterestSetup />
          <CategoryTabs
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <SortBar sortBy={sortBy} onSortChange={setSortBy} />
          <ProductList selectedCategory={selectedCategory} sortBy={sortBy} />
        </main>
      </div>
    </div>
  )
}

export default App
