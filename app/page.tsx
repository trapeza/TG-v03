import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TokenCategoriesTable from "@/components/home/token-categories-table"
import TokenPresalesTable from "@/components/home/token-presales-table"
import LatestPostsList from "@/components/home/latest-posts-list"
import DragonLeaderboardTable from "@/components/home/dragon-leaderboard-table"
import TokenLeaderboardTable from "@/components/home/token-leaderboard-table"
import SearchFiltersCompact from "@/components/search/search-filters-compact"

export default function Home() {
  return (
    <div className="container py-4 space-y-6">
      {/* Hero Section */}
      <section className="text-left py-1 pl-3">
        <h1 className="text-xl md:text-2xl font-bold text-bright-cyan">
          Find Real Token Alpha – Earn With Your Expertise
        </h1>
      </section>

      {/* Criteria Search Section */}
      <Card className="w-full bg-dark-blue-grey border-deep-indigo">
        <CardHeader className="pb-0 pt-2">
          <CardTitle className="text-base text-electric-blue">Token Search</CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-1">
          <SearchFiltersCompact />
        </CardContent>
      </Card>

      {/* Pre-set Searches Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <Card className="bg-dark-blue-grey border-deep-indigo">
          <CardHeader className="pb-0 pt-2">
            <CardTitle className="text-base text-electric-blue">Token Categories</CardTitle>
          </CardHeader>
          <CardContent className="p-3">
            <TokenCategoriesTable />
            <Button variant="link" className="w-full mt-1 text-medium-blue text-xs h-8" asChild>
              <Link href="/categories">View All Categories</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-dark-blue-grey border-deep-indigo">
          <CardHeader className="pb-0 pt-2">
            <CardTitle className="text-base text-electric-blue">Token Presales</CardTitle>
          </CardHeader>
          <CardContent className="p-3">
            <TokenPresalesTable />
            <Button variant="link" className="w-full mt-1 text-medium-blue text-xs h-8" asChild>
              <Link href="/presales">View All Presales</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-dark-blue-grey border-deep-indigo">
          <CardHeader className="pb-0 pt-2">
            <CardTitle className="text-base text-electric-blue">Latest Posts</CardTitle>
          </CardHeader>
          <CardContent className="p-3">
            <LatestPostsList />
            <Button variant="link" className="w-full mt-1 text-medium-blue text-xs h-8" asChild>
              <Link href="/posts">View All Posts</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-dark-blue-grey border-deep-indigo">
          <CardHeader className="pb-0 pt-2">
            <CardTitle className="text-base text-electric-blue">Analysts Leaderboard</CardTitle>
          </CardHeader>
          <CardContent className="p-3">
            <DragonLeaderboardTable />
            <Button variant="link" className="w-full mt-1 text-medium-blue text-xs h-8" asChild>
              <Link href="/leaderboard">View Full Leaderboard</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <Card className="w-full bg-dark-blue-grey border-deep-indigo">
        <CardHeader className="pb-0 pt-2">
          <CardTitle className="text-base text-electric-blue">Token Leaderboard</CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <TokenLeaderboardTable />
          <Button variant="link" className="w-full mt-2 text-medium-blue text-xs h-8" asChild>
            <Link href="/tokens">View All Tokens</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
