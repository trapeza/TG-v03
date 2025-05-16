"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ThumbsUp, Repeat } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    id: 1,
    user: {
      name: "0xDragon",
      avatar: "/majestic-dragon.png",
      rank: "ruby",
    },
    content: "$UNI showing strong support at $7.50. Looking for a breakout above $8 in the next few days.",
    likes: 24,
    reposts: 8,
    isHolder: true,
    isOwner: false,
    timestamp: "2h ago",
  },
  {
    id: 2,
    user: {
      name: "CryptoHunter",
      avatar: "/lone-hunter.png",
      rank: "emerald",
    },
    content: "$SOL technical analysis shows a bullish divergence on the 4h chart. Target: $150 by end of month.",
    likes: 42,
    reposts: 15,
    isHolder: true,
    isOwner: false,
    timestamp: "4h ago",
  },
  {
    id: 3,
    user: {
      name: "TokenWhale",
      avatar: "/majestic-whale.png",
      rank: "diamond",
    },
    content: "$PEPE volume increasing significantly in the last 24h. Meme season might be back sooner than expected.",
    likes: 67,
    reposts: 23,
    isHolder: false,
    isOwner: false,
    timestamp: "6h ago",
  },
  {
    id: 4,
    user: {
      name: "AlphaSeeker",
      avatar: "/placeholder-ti0xj.png",
      rank: "sapphire",
    },
    content: "$ARB fundamentals remain strong despite market volatility. Layer 2 solutions are the future.",
    likes: 18,
    reposts: 5,
    isHolder: true,
    isOwner: false,
    timestamp: "12h ago",
  },
  {
    id: 5,
    user: {
      name: "GemFinder",
      avatar: "/sparkling-gem.png",
      rank: "amethyst",
    },
    content: "$LINK oracle dominance continues to grow. New partnerships announced this week are bullish.",
    likes: 31,
    reposts: 12,
    isHolder: false,
    isOwner: false,
    timestamp: "1d ago",
  },
]

export default function LatestPostsList() {
  const [likedPosts, setLikedPosts] = useState<number[]>([])
  const [repostedPosts, setRepostedPosts] = useState<number[]>([])

  const handleLike = (postId: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId))
    } else {
      setLikedPosts([...likedPosts, postId])
    }
  }

  const handleRepost = (postId: number) => {
    if (repostedPosts.includes(postId)) {
      setRepostedPosts(repostedPosts.filter((id) => id !== postId))
    } else {
      setRepostedPosts([...repostedPosts, postId])
    }
  }

  const getRankColor = (rank: string) => {
    switch (rank) {
      case "diamond":
        return "text-white"
      case "ruby":
        return "text-red-500"
      case "emerald":
        return "text-green-500"
      case "sapphire":
        return "text-blue-500"
      case "amethyst":
        return "text-purple-500"
      default:
        return "text-gray-500"
    }
  }

  const formatContent = (content: string) => {
    return content.split(" ").map((word, index) => {
      if (word.startsWith("$") && word.length > 1) {
        const symbol = word.substring(1)
        return (
          <Link key={index} href={`/token/${symbol.toLowerCase()}`} className="text-bright-cyan hover:underline">
            ${symbol}
          </Link>
        )
      }
      return word + " "
    })
  }

  return (
    <div className="space-y-3 overflow-auto max-h-[300px] text-xs">
      {posts.map((post) => (
        <div key={post.id} className="border-b border-border pb-3 last:border-0 last:pb-0">
          <div className="flex items-start gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.name} />
              <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="font-medium truncate">{post.user.name}</span>
                <span className={`text-xs ${getRankColor(post.user.rank)}`}>
                  {post.user.rank.charAt(0).toUpperCase() + post.user.rank.slice(1)}
                </span>
                {post.isHolder && (
                  <span className="text-xs bg-primary-green/20 text-primary-green px-1 rounded">Holder</span>
                )}
                {post.isOwner && (
                  <span className="text-xs bg-secondary-blue/20 text-secondary-blue px-1 rounded">Creator</span>
                )}
                <span className="text-xs text-muted-foreground ml-auto">{post.timestamp}</span>
              </div>
              <p className="text-xs mt-1">{formatContent(post.content)}</p>
              <div className="flex items-center gap-3 mt-1">
                <Button variant="ghost" size="sm" className="h-6 px-1 text-xs" onClick={() => handleLike(post.id)}>
                  <ThumbsUp className={`h-3 w-3 mr-1 ${likedPosts.includes(post.id) ? "text-primary-green" : ""}`} />
                  <span>{likedPosts.includes(post.id) ? post.likes + 1 : post.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="h-6 px-1 text-xs" onClick={() => handleRepost(post.id)}>
                  <Repeat className={`h-3 w-3 mr-1 ${repostedPosts.includes(post.id) ? "text-primary-green" : ""}`} />
                  <span>{repostedPosts.includes(post.id) ? post.reposts + 1 : post.reposts}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
