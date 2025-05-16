import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TokenLeaderboardTable from "@/components/home/token-leaderboard-table"
import Link from "next/link"

export default function TokensPage() {
  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Token Leaderboard</h1>
        <Button className="gradient-button">Connect Wallet</Button>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Token Results</CardTitle>
        </CardHeader>
        <CardContent>
          <TokenLeaderboardTable />
          <Button variant="link" className="w-full mt-2 text-medium-blue text-xs h-8" asChild>
            <Link href="/tokens">View All Tokens</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
