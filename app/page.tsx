import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TokenCategoriesTable from "@/components/home/token-categories-table"
import TokenPresalesTable from "@/components/home/token-presales-table"
import LatestPostsList from "@/components/home/latest-posts-list"
import DragonLeaderboardTable from "@/components/home/dragon-leaderboard-table"
import TokenLeaderboardTable from "@/components/home/token-leaderboard-table"

export default function Home() {
  return (
    <div className="container py-4 space-y-6">
      {/* Hero Section */}
      <section className="text-center py-6">
        <h1 className="text-3xl md:text-4xl font-bold text-text-orange">
          Find Real Token Alpha – Earn With Your Expertise
        </h1>
      </section>

      {/* Pre-set Searches Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <Card>
          <CardHeader className="pb-1 pt-3">
            <CardTitle className="text-base">Token Categories</CardTitle>
          </CardHeader>
          <CardContent className="p-3">
            <TokenCategoriesTable />
            <Button variant="link" className="w-full mt-1 text-primary-green text-xs h-8" asChild>
              <Link href="/categories">View All Categories</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-1 pt-3">
            <CardTitle className="text-base">Token Presales</CardTitle>
          </CardHeader>
          <CardContent className="p-3">
            <TokenPresalesTable />
            <Button variant="link" className="w-full mt-1 text-primary-green text-xs h-8" asChild>
              <Link href="/presales">View All Presales</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-1 pt-3">
            <CardTitle className="text-base">Latest Posts</CardTitle>
          </CardHeader>
          <CardContent className="p-3">
            <LatestPostsList />
            <Button variant="link" className="w-full mt-1 text-primary-green text-xs h-8" asChild>
              <Link href="/posts">View All Posts</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-1 pt-3">
            <CardTitle className="text-base">Analysts Leaderboard</CardTitle>
          </CardHeader>
          <CardContent className="p-3">
            <DragonLeaderboardTable />
            <Button variant="link" className="w-full mt-1 text-primary-green text-xs h-8" asChild>
              <Link href="/leaderboard">View Full Leaderboard</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <Card className="w-full">
        <CardHeader className="pb-1 pt-3">
          <CardTitle className="text-base">Token Leaderboard</CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <TokenLeaderboardTable />
          <Button variant="link" className="w-full mt-2 text-primary-green text-xs h-8" asChild>
            <Link href="/tokens">View All Tokens</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
