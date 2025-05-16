"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const tokens = [
  {
    name: "Chainlink",
    symbol: "LINK",
    logo: "/abstract-interconnected-network.png",
    price: 14.56,
    change24h: 3.5,
    change30d: 18.2,
    marketCap: 8.4,
    volume: 342.6,
    volatility: 36,
    category: "Oracle",
    holders: 512000,
    mcRevenue: 78,
    low52w: 5.7,
    high52w: 16.8,
  },
  {
    name: "PancakeSwap",
    symbol: "CAKE",
    logo: "/placeholder-91d2q.png",
    price: 2.45,
    change24h: 1.8,
    change30d: 24.3,
    marketCap: 1.8,
    volume: 98.6,
    volatility: 45,
    category: "DEX",
    holders: 875000,
    mcRevenue: 12,
    low52w: 1.2,
    high52w: 4.15,
  },
  {
    name: "Hyperliquid",
    symbol: "HYPE",
    logo: "/placeholder-ym8a6.png",
    price: 3.27,
    change24h: 5.2,
    change30d: 32.7,
    marketCap: 1.2,
    volume: 87.3,
    volatility: 52,
    category: "DeFi",
    holders: 124000,
    mcRevenue: 25,
    low52w: 0.95,
    high52w: 4.2,
  },
  {
    name: "Aave",
    symbol: "AAVE",
    logo: "/aave-crypto.png",
    price: 92.35,
    change24h: -1.2,
    change30d: 8.7,
    marketCap: 3.6,
    volume: 156.8,
    volatility: 32,
    category: "Lending",
    holders: 215000,
    mcRevenue: 42,
    low52w: 48.2,
    high52w: 115.6,
  },
  {
    name: "Uniswap",
    symbol: "UNI",
    logo: "/uni-abstract.png",
    price: 7.82,
    change24h: 2.3,
    change30d: 15.7,
    marketCap: 4.5,
    volume: 125.8,
    volatility: 32,
    category: "DEX",
    holders: 342500,
    mcRevenue: 45,
    low52w: 3.15,
    high52w: 8.97,
  },
  {
    name: "Ondo Finance",
    symbol: "ONDO",
    logo: "/placeholder-cn7h3.png",
    price: 0.48,
    change24h: -2.5,
    change30d: 12.4,
    marketCap: 0.6,
    volume: 32.4,
    volatility: 38,
    category: "RWA",
    holders: 85000,
    mcRevenue: 18,
    low52w: 0.22,
    high52w: 0.65,
  },
  {
    name: "Jupiter",
    symbol: "JUP",
    logo: "/jupiter-planet.png",
    price: 0.72,
    change24h: 8.7,
    change30d: 45.2,
    marketCap: 1.1,
    volume: 78.5,
    volatility: 65,
    category: "Solana",
    holders: 195000,
    mcRevenue: 30,
    low52w: 0.25,
    high52w: 1.15,
  },
  {
    name: "Maker",
    symbol: "MKR",
    logo: "/abstract-mkr.png",
    price: 2145.78,
    change24h: 1.5,
    change30d: 10.8,
    marketCap: 2.8,
    volume: 112.3,
    volatility: 28,
    category: "DeFi",
    holders: 125000,
    mcRevenue: 55,
    low52w: 1120.45,
    high52w: 2350.8,
  },
]

export default function TokenLeaderboardTable() {
  const [sortBy, setSortBy] = useState("marketCap")
  const [sortOrder, setSortOrder] = useState("desc")

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("desc")
    }
  }

  const sortedTokens = [...tokens].sort((a, b) => {
    const aValue = a[sortBy as keyof typeof a]
    const bValue = b[sortBy as keyof typeof b]

    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1
    } else {
      return aValue < bValue ? 1 : -1
    }
  })

  const formatPrice = (price: number) => {
    if (price < 0.01) return price.toExponential(2)
    return price.toFixed(2)
  }

  const format52WeekRange = (low: number, high: number) => {
    if (low < 0.01 || high < 0.01) {
      return `${low.toExponential(2)} - ${high.toExponential(2)}`
    }
    return `$${low.toFixed(2)} - $${high.toFixed(2)}`
  }

  const formatHolders = (holders: number) => {
    if (holders >= 1000000) {
      return `${(holders / 1000000).toFixed(1)}M`
    }
    if (holders >= 1000) {
      return `${(holders / 1000).toFixed(0)}K`
    }
    return holders.toString()
  }

  return (
    <div className="overflow-auto">
      <Table className="text-xs">
        <TableHeader>
          <TableRow className="hover:bg-transparent border-deep-indigo">
            <TableHead className="w-[120px] py-2 px-1 text-medium-blue">Token</TableHead>
            <TableHead className="text-right py-2 px-1 text-medium-blue">Price</TableHead>
            <TableHead
              className="text-right cursor-pointer py-2 px-1 text-medium-blue"
              onClick={() => handleSort("change24h")}
            >
              <div className="flex items-center justify-end">
                <span>24h %</span>
                <ArrowUpDown className="ml-1 h-3 w-3" />
              </div>
            </TableHead>
            <TableHead
              className="text-right cursor-pointer py-2 px-1 text-medium-blue"
              onClick={() => handleSort("change30d")}
            >
              <div className="flex items-center justify-end">
                <span>30d %</span>
                <ArrowUpDown className="ml-1 h-3 w-3" />
              </div>
            </TableHead>
            <TableHead
              className="text-right cursor-pointer py-2 px-1 text-medium-blue"
              onClick={() => handleSort("volatility")}
            >
              <div className="flex items-center justify-end">
                <span>Volatility</span>
                <ArrowUpDown className="ml-1 h-3 w-3" />
              </div>
            </TableHead>
            <TableHead
              className="text-right cursor-pointer py-2 px-1 text-medium-blue"
              onClick={() => handleSort("marketCap")}
            >
              <div className="flex items-center justify-end">
                <span>Market Cap</span>
                <ArrowUpDown className="ml-1 h-3 w-3" />
              </div>
            </TableHead>
            <TableHead
              className="text-right cursor-pointer py-2 px-1 text-medium-blue"
              onClick={() => handleSort("holders")}
            >
              <div className="flex items-center justify-end">
                <span>Holders</span>
                <ArrowUpDown className="ml-1 h-3 w-3" />
              </div>
            </TableHead>
            <TableHead
              className="text-right cursor-pointer py-2 px-1 text-medium-blue"
              onClick={() => handleSort("mcRevenue")}
            >
              <div className="flex items-center justify-end">
                <span>MC/Rev</span>
                <ArrowUpDown className="ml-1 h-3 w-3" />
              </div>
            </TableHead>
            <TableHead className="text-right py-2 px-1 text-medium-blue">52w Range</TableHead>
            <TableHead className="text-right py-2 px-1 text-medium-blue">Category</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedTokens.map((token) => (
            <TableRow key={token.symbol} className="hover:bg-deep-indigo/10 border-deep-indigo/30">
              <TableCell className="py-1.5 px-1">
                <div className="flex items-center gap-2">
                  <div className="relative h-5 w-5 rounded-full overflow-hidden bg-deep-indigo/30">
                    <Image
                      src={token.logo || "/placeholder.svg"}
                      alt={`${token.name} logo`}
                      width={20}
                      height={20}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <Link href={`/token/${token.symbol.toLowerCase()}`} className="font-medium hover:text-bright-cyan">
                      ${token.symbol}
                    </Link>
                    <span className="text-xs text-muted-foreground">{token.name}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right font-medium py-1.5 px-1">${formatPrice(token.price)}</TableCell>
              <TableCell className="text-right py-1.5 px-1">
                <span className={token.change24h > 0 ? "text-bright-cyan" : "text-destructive"}>
                  {token.change24h > 0 ? "+" : ""}
                  {token.change24h.toFixed(1)}%
                </span>
              </TableCell>
              <TableCell className="text-right py-1.5 px-1">
                <span className={token.change30d > 0 ? "text-bright-cyan" : "text-destructive"}>
                  {token.change30d > 0 ? "+" : ""}
                  {token.change30d.toFixed(1)}%
                </span>
              </TableCell>
              <TableCell className="text-right py-1.5 px-1">{token.volatility}%</TableCell>
              <TableCell className="text-right py-1.5 px-1">${token.marketCap.toFixed(1)}B</TableCell>
              <TableCell className="text-right py-1.5 px-1">{formatHolders(token.holders)}</TableCell>
              <TableCell className="text-right py-1.5 px-1">{token.mcRevenue}x</TableCell>
              <TableCell className="text-right py-1.5 px-1">{format52WeekRange(token.low52w, token.high52w)}</TableCell>
              <TableCell className="text-right py-1.5 px-1">{token.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
