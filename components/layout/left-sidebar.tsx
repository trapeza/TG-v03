"use client"

import Link from "next/link"
import { BarChart3, Layers, Rocket } from "lucide-react"

export default function LeftSidebar() {
  return (
    <aside className="hidden md:flex w-[200px] flex-col border-r p-4 pt-8 sticky top-16 h-[calc(100vh-4rem)] overflow-auto">
      <nav className="grid gap-4">
        <Link
          href="/tokens"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary-green"
        >
          <BarChart3 className="h-4 w-4" />
          <span className="text-sm font-medium">Token Leaderboard</span>
        </Link>
        <Link
          href="/categories"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary-green"
        >
          <Layers className="h-4 w-4" />
          <span className="text-sm font-medium">Token Categories</span>
        </Link>
        <Link
          href="/presales"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary-green"
        >
          <Rocket className="h-4 w-4" />
          <span className="text-sm font-medium">Token Presales</span>
        </Link>
      </nav>
    </aside>
  )
}
