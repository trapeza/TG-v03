"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Copy, Settings, Share2, Diamond, Check, ExternalLink } from "lucide-react"
import LatestPostsList from "@/components/home/latest-posts-list"

export default function ProfilePage() {
  const [copied, setCopied] = useState(false)
  const [following, setFollowing] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("0x1234...5678")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleFollow = () => {
    setFollowing(!following)
  }

  return (
    <div className="container py-6 space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <Avatar className="h-24 w-24 md:h-32 md:w-32">
                <AvatarImage src="/majestic-dragon.png" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <div>
                  <h1 className="text-2xl font-bold">0x1234...5678</h1>
                  <p className="text-muted-foreground">@dragonhunter</p>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={handleCopy}>
                    {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                    {copied ? "Copied" : "Copy Address"}
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                    <span className="sr-only">Settings</span>
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Diamond className="h-5 w-5 mr-2 text-purple-400" />
                  <span className="font-medium text-purple-400">Amethyst</span>
                </div>
                <div className="flex items-center">
                  <Diamond className="h-5 w-5 mr-2 text-primary-green" />
                  <span className="font-medium">13 GEMs earned</span>
                </div>
                <Button variant="outline" size="sm" className="ml-auto" onClick={handleFollow}>
                  {following ? "Following" : "Follow"}
                </Button>
              </div>

              <div className="flex gap-4">
                <div>
                  <span className="text-sm text-muted-foreground">Followers</span>
                  <p className="font-medium">24</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Following</span>
                  <p className="font-medium">56</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Posts</span>
                  <p className="font-medium">12</p>
                </div>
              </div>

              <p className="text-sm">I hunt real token alpha on TokenGems</p>

              <div className="pt-2">
                <Button className="gradient-button">Post</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="feed">
        <TabsList className="grid grid-cols-5 w-full max-w-md">
          <TabsTrigger value="feed">Feed</TabsTrigger>
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="liked">Liked</TabsTrigger>
          <TabsTrigger value="followers">Followers</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
        </TabsList>

        <TabsContent value="feed" className="mt-4">
          <Card>
            <CardContent className="p-6">
              <LatestPostsList />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="posts" className="mt-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center py-12">
                <Diamond className="h-12 w-12 text-muted mb-4" />
                <h3 className="text-xl font-medium mb-2">No posts yet</h3>
                <p className="text-muted-foreground text-center max-w-md mb-6">
                  Share your insights about tokens to earn GEMs and build your reputation.
                </p>
                <Button className="gradient-button">Create Your First Post</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="liked" className="mt-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center py-12">
                <Diamond className="h-12 w-12 text-muted mb-4" />
                <h3 className="text-xl font-medium mb-2">No liked posts yet</h3>
                <p className="text-muted-foreground text-center max-w-md mb-6">
                  Like posts to save them for later and show appreciation to other analysts.
                </p>
                <Button className="gradient-button" asChild>
                  <a href="/">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Explore Posts
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="followers" className="mt-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center py-12">
                <Diamond className="h-12 w-12 text-muted mb-4" />
                <h3 className="text-xl font-medium mb-2">No followers yet</h3>
                <p className="text-muted-foreground text-center max-w-md mb-6">
                  Post quality content to attract followers and build your reputation.
                </p>
                <Button className="gradient-button">Create Your First Post</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="following" className="mt-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center py-12">
                <Diamond className="h-12 w-12 text-muted mb-4" />
                <h3 className="text-xl font-medium mb-2">Not following anyone yet</h3>
                <p className="text-muted-foreground text-center max-w-md mb-6">
                  Follow other analysts to see their posts in your feed.
                </p>
                <Button className="gradient-button" asChild>
                  <a href="/leaderboard">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Explore Dragon Leaderboard
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
