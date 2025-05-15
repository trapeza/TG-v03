import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SearchFilters from "@/components/search/search-filters"
import TokenLeaderboardTable from "@/components/home/token-leaderboard-table"

export default function TokensPage() {
  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Token Leaderboard</h1>
        <Button className="gradient-button">Connect Wallet</Button>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Search Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <SearchFilters />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Token Results</CardTitle>
        </CardHeader>
        <CardContent>
          <TokenLeaderboardTable />
        </CardContent>
      </Card>
    </div>
  )
}
