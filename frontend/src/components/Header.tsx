import { Bell, Search, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg-primary border-b border-border">
      <div className="flex items-center justify-between px-4 h-14">
        <button
          className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-bg-tertiary transition-colors"
          aria-label="메뉴"
        >
          <Menu className="w-5 h-5 text-text-primary" strokeWidth={1.5} />
        </button>
        <div className="flex items-center gap-1.5">
          <h1 className="text-xl font-extrabold text-flyer-red tracking-tighter">
            핫딜
          </h1>
          <span className="bg-flyer-yellow text-flyer-badge text-[10px] font-black px-1.5 py-0.5 rounded leading-none tracking-tight">
            SALE
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-bg-tertiary transition-colors"
            aria-label="검색"
          >
            <Search className="w-5 h-5 text-text-primary" strokeWidth={1.5} />
          </button>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-bg-tertiary transition-colors relative"
            aria-label="알림"
          >
            <Bell className="w-5 h-5 text-text-primary" strokeWidth={1.5} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent-red rounded-full" />
          </button>
        </div>
      </div>
    </header>
  )
}
