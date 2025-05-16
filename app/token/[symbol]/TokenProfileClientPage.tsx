"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  Globe,
  Twitter,
  MessageSquare,
  FileText,
  Copy,
  Check,
  TrendingUp,
  TrendingDown,
  Star,
  Share2,
  AlertCircle,
  BarChart3,
  Users,
  Activity,
  MessageCircle,
  History,
  Code,
  Diamond,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TokenPriceChart from "@/components/token/token-price-chart"
import TokenMetricsTable from "@/components/token/token-metrics-table"
import LatestPostsList from "@/components/home/latest-posts-list"
import TokenHolders from "@/components/token/token-holders"
import TokenTransactions from "@/components/token/token-transactions"
import TokenSocial from "@/components/token/token-social"
import TokenCode from "@/components/token/token-code"

export default function TokenProfileClientPage({ params }: { params: { symbol?: string } }) {
  const [copied, setCopied] = useState(false)
  const [isWatching, setIsWatching] = useState(false)
  const [voted, setVoted] = useState<"gem" | "dirt" | null>(null)

  // This would normally come from an API call using the symbol parameter
  const token = {
    name: "Uniswap",
    symbol: params?.symbol ? params.symbol.toUpperCase() : "UNKNOWN",
    logo: "/uni-abstract.png", // Updated to use a visible logo
    blockchain: "ethereum", // Added blockchain info
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    price: 7.82,
    change24h: 2.3,
    change7d: 5.8,
    change30d: 15.7,
    marketCap: 4.5,
    fullyDilutedValuation: 7.8,
    volume24h: 125.8,
    liquidity: 245.3,
    holders: 342500,
    volatility: 32,
    category: "DeFi",
    tags: ["DEX", "Governance", "Ethereum"],
    description:
      "Uniswap is a decentralized exchange protocol built on Ethereum. It allows users to swap ERC20 tokens without the need for buyers and sellers to create demand. Uniswap uses an automated market maker (AMM) mechanism instead of an order book.",
    website: "https://uniswap.org",
    twitter: "https://twitter.com/Uniswap",
    telegram: "https://t.me/uniswap",
    whitepaper: "https://uniswap.org/whitepaper-v3.pdf",
    launchDate: "2020-09-17",
    mcRevenue: 45,
    low52w: 3.15,
    high52w: 8.97,
    allTimeHigh: 44.97,
    allTimeHighDate: "2021-05-03",
    allTimeLow: 1.03,
    allTimeLowDate: "2020-09-17",
    circulatingSupply: 753.8,
    totalSupply: 1000,
    maxSupply: 1000,
    rank: 18,
    score: 8.4,
    sentiment: {
      gems: 842,
      dirt: 124,
      total: 966,
    },
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(token.address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleWatch = () => {
    setIsWatching(!isWatching)
  }

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const handleGemVote = () => {
    if (voted === "gem") {
      setVoted(null)
    } else {
      setVoted("gem")
    }
  }

  const handleDirtVote = () => {
    if (voted === "dirt") {
      setVoted(null)
    } else {
      setVoted("dirt")
    }
  }

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Token Overview Card */}
        <Card className="flex-1 bg-dark-blue-grey border-deep-indigo">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden bg-deep-indigo/30">
                  <img
                    src={token.logo || "/placeholder.svg"}
                    alt={`${token.name} logo`}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-2xl font-bold">{token.name}</h1>
                      {/* Removed rank number */}
                      {token.blockchain === "ethereum" && (
                        <div className="h-5 w-5 rounded-full overflow-hidden bg-[#627EEA]">
                          <img src="/ethereum-logo.png" alt="Ethereum" className="object-cover w-full h-full" />
                        </div>
                      )}
                      {token.blockchain === "solana" && (
                        <div className="h-5 w-5 rounded-full overflow-hidden bg-[#14F195]">
                          <img src="/solana-logo.png" alt="Solana" className="object-cover w-full h-full" />
                        </div>
                      )}
                      {token.blockchain === "bnb" && (
                        <div className="h-5 w-5 rounded-full overflow-hidden bg-[#F3BA2F]">
                          <img src="/bnb-chain-logo.png" alt="BNB Chain" className="object-cover w-full h-full" />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-muted-foreground">${token.symbol}</p>
                      <Badge className="bg-primary-green/20 text-primary-green hover:bg-primary-green/30 text-xs">
                        {token.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 md:ml-auto">
                    <Button variant="outline" size="sm" onClick={handleCopy}>
                      {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                      {copied ? "Copied" : "Copy Address"}
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleWatch}>
                      <Star className={`h-4 w-4 mr-1 ${isWatching ? "text-primary-green fill-primary-green" : ""}`} />
                      {isWatching ? "Watching" : "Watch"}
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                      <span className="sr-only">Share</span>
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Price</p>
                    <p className="text-xl font-bold">${token.price.toFixed(2)}</p>
                    <div className="flex items-center">
                      {token.change24h > 0 ? (
                        <TrendingUp className="h-3 w-3 text-bright-cyan mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-destructive mr-1" />
                      )}
                      <span className={token.change24h > 0 ? "text-bright-cyan text-sm" : "text-destructive text-sm"}>
                        {token.change24h > 0 ? "+" : ""}
                        {token.change24h.toFixed(2)}% (24h)
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Market Cap</p>
                    <p className="text-xl font-bold">${token.marketCap}B</p>
                    <p className="text-xs text-muted-foreground">FDV: ${token.fullyDilutedValuation}B</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Volume (24h)</p>
                    <p className="text-xl font-bold">${token.volume24h}M</p>
                    <p className="text-xs text-muted-foreground">
                      {((token.volume24h / token.marketCap) * 100).toFixed(1)}% of market cap
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Circulating Supply</p>
                    <p className="text-xl font-bold">{token.circulatingSupply}M</p>
                    <div className="flex items-center gap-2">
                      <Progress value={(token.circulatingSupply / token.maxSupply) * 100} className="h-1.5 w-24" />
                      <span className="text-xs text-muted-foreground">
                        {((token.circulatingSupply / token.maxSupply) * 100).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Gem hunters sentiment section */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 pt-2 border-t border-deep-indigo/30">
                  <div>
                    <p className="text-sm font-medium">Gem Hunters Sentiment</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="h-2 flex rounded-full overflow-hidden w-32">
                        <div
                          className="bg-bright-cyan"
                          style={{ width: `${(token.sentiment.gems / token.sentiment.total) * 100}%` }}
                        ></div>
                        <div
                          className="bg-destructive"
                          style={{ width: `${(token.sentiment.dirt / token.sentiment.total) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs">
                        {((token.sentiment.gems / token.sentiment.total) * 100).toFixed(0)}% Gem
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant={voted === "gem" ? "default" : "outline"}
                      size="sm"
                      onClick={handleGemVote}
                      className={voted === "gem" ? "bg-bright-cyan text-background hover:bg-bright-cyan/90" : ""}
                    >
                      <Diamond className="h-4 w-4 mr-1" />
                      Gem ({token.sentiment.gems + (voted === "gem" ? 1 : 0)})
                    </Button>
                    <Button
                      variant={voted === "dirt" ? "default" : "outline"}
                      size="sm"
                      onClick={handleDirtVote}
                      className={voted === "dirt" ? "bg-destructive text-background hover:bg-destructive/90" : ""}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <path d="M2 22a5 5 0 0 1 5-5h14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H9a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h13"></path>
                      </svg>
                      Dirt ({token.sentiment.dirt + (voted === "dirt" ? 1 : 0)})
                    </Button>

                    <Button variant="outline" size="sm" className="gradient-button ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                      Claim Token Profile
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {token.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-deep-indigo/30 hover:bg-deep-indigo/50">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {token.website && (
                    <Link
                      href={token.website}
                      target="_blank"
                      className="flex items-center text-sm text-muted-foreground hover:text-bright-cyan"
                    >
                      <Globe className="h-4 w-4 mr-1" />
                      Website
                      <ArrowUpRight className="h-3 w-3 ml-1" />
                    </Link>
                  )}
                  {token.twitter && (
                    <Link
                      href={token.twitter}
                      target="_blank"
                      className="flex items-center text-sm text-muted-foreground hover:text-bright-cyan"
                    >
                      <Twitter className="h-4 w-4 mr-1" />
                      Twitter
                      <ArrowUpRight className="h-3 w-3 ml-1" />
                    </Link>
                  )}
                  {token.telegram && (
                    <Link
                      href={token.telegram}
                      target="_blank"
                      className="flex items-center text-sm text-muted-foreground hover:text-bright-cyan"
                    >
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Telegram
                      <ArrowUpRight className="h-3 w-3 ml-1" />
                    </Link>
                  )}
                  {token.whitepaper && (
                    <Link
                      href={token.whitepaper}
                      target="_blank"
                      className="flex items-center text-sm text-muted-foreground hover:text-bright-cyan"
                    >
                      <FileText className="h-4 w-4 mr-1" />
                      Whitepaper
                      <ArrowUpRight className="h-3 w-3 ml-1" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-6 w-full max-w-3xl mb-6">
          <TabsTrigger value="overview" className="flex items-center gap-1">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:inline">Overview</span>
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-1">
            <Activity className="h-4 w-4" />
            <span className="hidden sm:inline">Analytics</span>
          </TabsTrigger>
          <TabsTrigger value="holders" className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">Holders</span>
          </TabsTrigger>
          <TabsTrigger value="social" className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Social</span>
          </TabsTrigger>
          <TabsTrigger value="transactions" className="flex items-center gap-1">
            <History className="h-4 w-4" />
            <span className="hidden sm:inline">Transactions</span>
          </TabsTrigger>
          <TabsTrigger value="code" className="flex items-center gap-1">
            <Code className="h-4 w-4" />
            <span className="hidden sm:inline">Code</span>
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-dark-blue-grey border-deep-indigo">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Price Chart</CardTitle>
                </CardHeader>
                <CardContent>
                  <TokenPriceChart />
                </CardContent>
              </Card>

              <Card className="bg-dark-blue-grey border-deep-indigo">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">About {token.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{token.description}</p>

                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Launch Date</p>
                      <p>{token.launchDate}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">All-Time High</p>
                      <p>${token.allTimeHigh}</p>
                      <p className="text-xs text-muted-foreground">{token.allTimeHighDate}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">All-Time Low</p>
                      <p>${token.allTimeLow}</p>
                      <p className="text-xs text-muted-foreground">{token.allTimeLowDate}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">TokenGems Score</p>
                      <div className="flex items-center">
                        <span className="text-primary-green font-bold">{token.score}/10</span>
                        <AlertCircle className="h-4 w-4 ml-1 text-muted-foreground cursor-help" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-dark-blue-grey border-deep-indigo">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Token Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <TokenMetricsTable token={token} />
                </CardContent>
              </Card>

              <Card className="bg-dark-blue-grey border-deep-indigo">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Latest Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <LatestPostsList />
                  <Button className="w-full mt-4 gradient-button">Post About {token.symbol}</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <Card className="bg-dark-blue-grey border-deep-indigo">
            <CardHeader>
              <CardTitle>Advanced Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Price Correlation</h3>
                  <div className="w-full h-[200px] bg-near-black/30 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Price correlation chart placeholder</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Volume Analysis</h3>
                  <div className="w-full h-[200px] bg-near-black/30 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Volume analysis chart placeholder</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Volatility Trends</h3>
                  <div className="w-full h-[200px] bg-near-black/30 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Volatility trends chart placeholder</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Market Dominance</h3>
                  <div className="w-full h-[200px] bg-near-black/30 rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Market dominance chart placeholder</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-dark-blue-grey border-deep-indigo">
            <CardHeader>
              <CardTitle>Technical Indicators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 border border-deep-indigo rounded-md">
                  <h4 className="text-sm font-medium mb-1">RSI (14)</h4>
                  <p className="text-xl font-bold">58.3</p>
                  <Badge className="bg-primary-green/20 text-primary-green hover:bg-primary-green/30 mt-1">
                    Neutral
                  </Badge>
                </div>
                <div className="p-4 border border-deep-indigo rounded-md">
                  <h4 className="text-sm font-medium mb-1">MACD</h4>
                  <p className="text-xl font-bold">0.12</p>
                  <Badge className="bg-bright-cyan/20 text-bright-cyan hover:bg-bright-cyan/30 mt-1">Bullish</Badge>
                </div>
                <div className="p-4 border border-deep-indigo rounded-md">
                  <h4 className="text-sm font-medium mb-1">Bollinger Bands</h4>
                  <p className="text-xl font-bold">Upper</p>
                  <Badge className="bg-bright-cyan/20 text-bright-cyan hover:bg-bright-cyan/30 mt-1">Bullish</Badge>
                </div>
                <div className="p-4 border border-deep-indigo rounded-md">
                  <h4 className="text-sm font-medium mb-1">Moving Avg (50)</h4>
                  <p className="text-xl font-bold">$7.45</p>
                  <Badge className="bg-bright-cyan/20 text-bright-cyan hover:bg-bright-cyan/30 mt-1">Above</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Holders Tab */}
        <TabsContent value="holders">
          <TokenHolders token={token} />
        </TabsContent>

        {/* Social Tab */}
        <TabsContent value="social">
          <TokenSocial token={token} />
        </TabsContent>

        {/* Transactions Tab */}
        <TabsContent value="transactions">
          <TokenTransactions token={token} />
        </TabsContent>

        {/* Code Tab */}
        <TabsContent value="code">
          <TokenCode token={token} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
