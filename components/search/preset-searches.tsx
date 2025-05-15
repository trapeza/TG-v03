import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart3, Layers, Rocket, MessageSquare, Diamond } from "lucide-react"

export default function PresetSearches() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Link href="/tokens" className="block">
        <Button variant="outline" className="w-full justify-start h-auto py-4">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center mb-2">
              <BarChart3 className="h-5 w-5 mr-2 text-primary-green" />
              <span className="font-medium">Token Leaderboard</span>
            </div>
            <p className="text-xs text-muted-foreground">Discover top performing tokens ranked by various metrics</p>
          </div>
        </Button>
      </Link>

      <Link href="/categories" className="block">
        <Button variant="outline" className="w-full justify-start h-auto py-4">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center mb-2">
              <Layers className="h-5 w-5 mr-2 text-primary-green" />
              <span className="font-medium">Token Categories</span>
            </div>
            <p className="text-xs text-muted-foreground">Browse tokens by category, market cap, and trading volume</p>
          </div>
        </Button>
      </Link>

      <Link href="/presales" className="block">
        <Button variant="outline" className="w-full justify-start h-auto py-4">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center mb-2">
              <Rocket className="h-5 w-5 mr-2 text-primary-green" />
              <span className="font-medium">Token Presales</span>
            </div>
            <p className="text-xs text-muted-foreground">Find upcoming token sales and investment opportunities</p>
          </div>
        </Button>
      </Link>

      <Link href="/posts" className="block">
        <Button variant="outline" className="w-full justify-start h-auto py-4">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center mb-2">
              <MessageSquare className="h-5 w-5 mr-2 text-primary-green" />
              <span className="font-medium">Latest Posts</span>
            </div>
            <p className="text-xs text-muted-foreground">See the latest insights and analysis from the community</p>
          </div>
        </Button>
      </Link>

      <Link href="/leaderboard" className="block col-span-1 md:col-span-2">
        <Button variant="outline" className="w-full justify-start h-auto py-4">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center mb-2">
              <Diamond className="h-5 w-5 mr-2 text-primary-green" />
              <span className="font-medium">Analysts Leaderboard</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Discover top contributors and analysts in the TokenGems community
            </p>
          </div>
        </Button>
      </Link>
    </div>
  )
}
