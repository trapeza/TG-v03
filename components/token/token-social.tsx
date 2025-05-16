"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ThumbsUp, MessageSquare, Repeat, ExternalLink, Twitter, Globe, MessageCircle } from "lucide-react"
import LatestPostsList from "@/components/home/latest-posts-list"

interface TokenSocialProps {
  token: {
    symbol: string
    name: string
  }
}

export default function TokenSocial({ token }: TokenSocialProps) {
  const [activeTab, setActiveTab] = useState("tokengems")

  // Mock data for social metrics
  const socialMetrics = {
    twitter: {
      followers: 845200,
      engagement: 3.2,
      sentiment: 78,
    },
    telegram: {
      members: 124500,
      activeUsers: 8700,
      messagesPerDay: 1250,
    },
    discord: {
      members: 98600,
      activeUsers: 12400,
      channels: 24,
    },
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
  }

  // Mock data for news
  const news = [
    {
      id: 1,
      title: `${token.name} Announces Integration with Layer 2 Solutions`,
      source: "CoinDesk",
      date: "2 days ago",
      url: "#",
    },
    {
      id: 2,
      title: `${token.name} Foundation Grants $2M to Ecosystem Projects`,
      source: "The Block",
      date: "5 days ago",
      url: "#",
    },
    {
      id: 3,
      title: `${token.name} V4 Protocol Upgrade Scheduled for Next Month`,
      source: "Decrypt",
      date: "1 week ago",
      url: "#",
    },
    {
      id: 4,
      title: `${token.name} Partners with Major DeFi Protocol for Liquidity Boost`,
      source: "CryptoSlate",
      date: "2 weeks ago",
      url: "#",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-dark-blue-grey border-deep-indigo">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Social Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Twitter className="h-4 w-4 mr-2 text-[#1DA1F2]" />
                    <span className="font-medium">Twitter</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 px-2">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 bg-near-black/30 rounded-md">
                    <p className="text-xs text-muted-foreground">Followers</p>
                    <p className="font-medium">{formatNumber(socialMetrics.twitter.followers)}</p>
                  </div>
                  <div className="p-2 bg-near-black/30 rounded-md">
                    <p className="text-xs text-muted-foreground">Engagement</p>
                    <p className="font-medium">{socialMetrics.twitter.engagement}%</p>
                  </div>
                  <div className="p-2 bg-near-black/30 rounded-md">
                    <p className="text-xs text-muted-foreground">Sentiment</p>
                    <p className="font-medium text-bright-cyan">{socialMetrics.twitter.sentiment}%</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-2 text-[#0088cc]" />
                    <span className="font-medium">Telegram</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 px-2">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 bg-near-black/30 rounded-md">
                    <p className="text-xs text-muted-foreground">Members</p>
                    <p className="font-medium">{formatNumber(socialMetrics.telegram.members)}</p>
                  </div>
                  <div className="p-2 bg-near-black/30 rounded-md">
                    <p className="text-xs text-muted-foreground">Active</p>
                    <p className="font-medium">{formatNumber(socialMetrics.telegram.activeUsers)}</p>
                  </div>
                  <div className="p-2 bg-near-black/30 rounded-md">
                    <p className="text-xs text-muted-foreground">Messages</p>
                    <p className="font-medium">{formatNumber(socialMetrics.telegram.messagesPerDay)}/d</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 mr-2 text-[#5865F2]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                    </svg>
                    <span className="font-medium">Discord</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 px-2">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 bg-near-black/30 rounded-md">
                    <p className="text-xs text-muted-foreground">Members</p>
                    <p className="font-medium">{formatNumber(socialMetrics.discord.members)}</p>
                  </div>
                  <div className="p-2 bg-near-black/30 rounded-md">
                    <p className="text-xs text-muted-foreground">Active</p>
                    <p className="font-medium">{formatNumber(socialMetrics.discord.activeUsers)}</p>
                  </div>
                  <div className="p-2 bg-near-black/30 rounded-md">
                    <p className="text-xs text-muted-foreground">Channels</p>
                    <p className="font-medium">{socialMetrics.discord.channels}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-dark-blue-grey border-deep-indigo md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Latest News</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {news.map((item) => (
                <div key={item.id} className="border-b border-deep-indigo/30 pb-4 last:border-0 last:pb-0">
                  <a href={item.url} className="block hover:text-bright-cyan">
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Globe className="h-3 w-3 mr-1" />
                      <span>{item.source}</span>
                      <span className="mx-2">•</span>
                      <span>{item.date}</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All News
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-dark-blue-grey border-deep-indigo">
        <CardHeader className="pb-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Community Discussions</CardTitle>
              <TabsList>
                <TabsTrigger value="tokengems">TokenGems</TabsTrigger>
                <TabsTrigger value="twitter">Twitter</TabsTrigger>
                <TabsTrigger value="telegram">Telegram</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </CardHeader>
        <CardContent>
          <TabsContent value="tokengems" className="mt-0">
            <LatestPostsList />
            <Button className="w-full mt-4 gradient-button">Post About {token.symbol}</Button>
          </TabsContent>
          <TabsContent value="twitter" className="mt-0">
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="border-b border-deep-indigo/30 pb-4 last:border-0 last:pb-0">
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full overflow-hidden bg-deep-indigo/30">
                      <img
                        src={`/placeholder-9kla2.png?height=100&width=100&query=dragon+${i}`}
                        alt="User"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <span className="font-medium">Crypto User {i}</span>
                        <span className="text-xs text-muted-foreground ml-2">@crypto_user{i}</span>
                        <span className="text-xs text-muted-foreground ml-auto">2h ago</span>
                      </div>
                      <p className="text-sm mt-1">
                        Just bought more ${token.symbol}! The recent developments look promising. #DeFi #Crypto
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          <span>{Math.floor(Math.random() * 50) + 5}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          <span>{Math.floor(Math.random() * 20) + 1}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                          <Repeat className="h-3 w-3 mr-1" />
                          <span>{Math.floor(Math.random() * 30) + 2}</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View on Twitter
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </TabsContent>
          <TabsContent value="telegram" className="mt-0">
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="border-b border-deep-indigo/30 pb-4 last:border-0 last:pb-0">
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full overflow-hidden bg-deep-indigo/30">
                      <img
                        src={`/placeholder-9kla2.png?height=100&width=100&query=dragon+${(i % 5) + 1}`}
                        alt="User"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <span className="font-medium">TG User {i}</span>
                        <span className="text-xs text-muted-foreground ml-auto">1h ago</span>
                      </div>
                      <p className="text-sm mt-1">
                        Anyone know when the next governance proposal is scheduled? I want to vote on the fee structure
                        changes.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Join Telegram Group
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
          </TabsContent>
        </CardContent>
      </Card>
    </div>
  )
}
