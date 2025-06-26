"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowUpDown } from "lucide-react"
import { RankIcon } from "@/components/ui/rank-icons"

const users = [
  {
    name: "0xDragon",
    avatar: "/majestic-dragon.png",
    gems: 2450,
    rank: "diamond",
    posts: 342,
    followers: 1245,
  },
  {
    name: "CryptoHunter",
    avatar: "/lone-hunter.png",
    gems: 1820,
    rank: "ruby",
    posts: 256,
    followers: 876,
  },
  {
    name: "TokenWhale",
    avatar: "/majestic-whale.png",
    gems: 1650,
    rank: "ruby",
    posts: 198,
    followers: 742,
  },
  {
    name: "AlphaSeeker",
    avatar: "/placeholder-ti0xj.png",
    gems: 980,
    rank: "emerald",
    posts: 124,
    followers: 531,
  },
  {
    name: "GemFinder",
    avatar: "/sparkling-gem.png",
    gems: 720,
    rank: "emerald",
    posts: 87,
    followers: 342,
  },
]

export default function DragonLeaderboardTable() {
  const [sortBy, setSortBy] = useState("gems")
  const [sortOrder, setSortOrder] = useState("desc")

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("desc")
    }
  }

  const getRankValue = (rank: string) => {
    switch (rank) {
      case "diamond":
        return 5
      case "ruby":
        return 4
      case "emerald":
        return 3
      case "sapphire":
        return 2
      case "amethyst":
        return 1
      default:
        return 0
    }
  }

  const sortedUsers = [...users].sort((a, b) => {
    if (sortBy === "rank") {
      const aValue = getRankValue(a.rank)
      const bValue = getRankValue(b.rank)

      if (sortOrder === "asc") {
        return aValue - bValue
      } else {
        return bValue - aValue
      }
    } else {
      const aValue = a[sortBy as keyof typeof a]
      const bValue = b[sortBy as keyof typeof b]

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    }
  })

  return (
    <div className="overflow-auto max-h-[300px]">
      <Table className="text-xs">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[90px] py-2 px-1">User</TableHead>
            <TableHead className="text-right cursor-pointer py-2 px-1" onClick={() => handleSort("gems")}>
              <div className="flex items-center justify-end">
                <span>GEMs</span>
                <ArrowUpDown className="ml-1 h-3 w-3" />
              </div>
            </TableHead>
            <TableHead className="text-right cursor-pointer py-2 px-1" onClick={() => handleSort("rank")}>
              <div className="flex items-center justify-end">
                <span>Rank</span>
                <ArrowUpDown className="ml-1 h-3 w-3" />
              </div>
            </TableHead>
            <TableHead className="text-right cursor-pointer py-2 px-1" onClick={() => handleSort("posts")}>
              <div className="flex items-center justify-end">
                <span>Posts</span>
                <ArrowUpDown className="ml-1 h-3 w-3" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedUsers.map((user) => (
            <TableRow key={user.name} className="hover:bg-transparent">
              <TableCell className="py-1.5 px-1">
                <div className="flex items-center gap-1">
                  <Avatar className="h-5 w-5">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium truncate">{user.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-right font-medium text-primary-green py-1.5 px-1">{user.gems}</TableCell>
              <TableCell className="text-right py-1.5 px-1">
                <div className="flex justify-end">
                  <RankIcon rank={user.rank} size={16} className="flex-shrink-0" />
                </div>
              </TableCell>
              <TableCell className="text-right py-1.5 px-1">{user.posts}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
