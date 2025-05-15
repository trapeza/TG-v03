"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpDown, TrendingUp, TrendingDown } from "lucide-react"

const tokens = [
  {
    name: "Uniswap",
    symbol: "UNI",
    chain: "ethereum",
    price: 7.82,
    change1h: 0.5,
    change24h: 2.3,
    change30d: 15.7,
    change90d: 28.4,
    marketCap: 4.5,
    volume: 125.8,
    volatility: 32,
    category: "DeFi",
    holders: 342500,
  },
  {
    name: "Solana",
    symbol: "SOL",
    chain: "solana",
    price: 142.65,
    change1h: -0.2,
    change24h: 1.8,
    change30d: 24.3,
    change90d: 65.2,
    marketCap: 62.8,
    volume: 2450.3,
    volatility: 45,
    category: "Layer 1",
    holders: 1245000,
  },
  {
    name: "Arbitrum",
    symbol: "ARB",
    chain: "arbitrum",
    price: 1.24,
    change1h: 0.3,
    change24h: -1.2,
    change30d: 8.5,
    change90d: 12.7,
    marketCap: 1.6,
    volume: 87.4,
    volatility: 28,
    category: "Layer 2",
    holders: 245000,
  },
  {
    name: "Chainlink",
    symbol: "LINK",
    chain: "ethereum",
    price: 14.56,
    change1h: 1.2,
    change24h: 3.5,
    change30d: 18.2,
    change90d: 32.6,
    marketCap: 8.4,
    volume: 342.6,
    volatility: 36,
    category: "Oracle",
    holders: 512000,
  },
  {
    name: "Pepe",
    symbol: "PEPE",
    chain: "ethereum",
    price: 0.0000012,
    change1h: 2.5,
    change24h: 8.7,
    change30d: 45.2,
    change90d: 120.5,
    marketCap: 0.5,
    volume: 65.3,
    volatility: 85,
    category: "Meme",
    holders: 124500,
  },
]

export default function TokenLeaderboardTable() {
  const [sortBy, setSortBy] = useState("change90d")
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

  const getChainIcon = (chain: string) => {
    switch (chain) {
      case "ethereum":
        return "Ξ"
      case "solana":
        return "◎"
      case "arbitrum":
        return "A"
      default:
        return "?"
    }
  }

  return (
    <div className="overflow-auto">
      <Table className="text-xs">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[120px] py-2">Token</TableHead>
            <TableHead className="w-[40px] py-2">Chain</TableHead>
            <TableHead className="text-right py-2">Price</TableHead>
            <TableHead className="text-right cursor-pointer py-2" onClick={() => handleSort("change1h")}>
              <div className="flex items-center justify-end">
                <span>1h %</span>
                <ArrowUpDown className="ml-1 h-3 w-3" />
              </div>
            </TableHead>
            <TableHead className="text-right cursor-pointer py-2" onClick={() => handleSort("change24h")}>
              <div className="flex items-center justify-end">
                <span>24h %</span>
                <ArrowUpDown className="ml-1 h-3 w-3" />
              </div>
            </TableHead>
            <TableHead className="text-right cursor-pointer py-2" onClick={() => handleSort("change30d")}>
              <div className="flex items-center justify-end">
                <span>30d %</span>
                <ArrowUpDown className="ml-1 h-3 w-3" />
              </div>
            </TableHead>
            <TableHead className="text-right cursor-pointer py-2" onClick={() => handleSort("change90d")}>
              <div className="flex items-center justify-end">
                <span>90d %</span>
                <ArrowUpDown className="ml-1 h-3 w-3" />
              </div>
            </TableHead>
            <TableHead className="text-right cursor-pointer py-2" onClick={() => handleSort("marketCap")}>
              <div className="flex items-center justify-end">
                <span>Market Cap</span>
                <ArrowUpDown className="ml-1 h-3 w-3" />
              </div>
            </TableHead>
            <TableHead className="text-right cursor-pointer py-2" onClick={() => handleSort("volume")}>
              <div className="flex items-center justify-end">
                <span>Volume (24h)</span>
                <ArrowUpDown className="ml-1 h-3 w-3" />
              </div>
            </TableHead>
            <TableHead className="text-right py-2">Category</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedTokens.map((token) => (
            <TableRow key={token.symbol} className="hover:bg-transparent">
              <TableCell className="py-1.5">
                <div className="flex flex-col">
                  <span className="font-medium">${token.symbol}</span>
                  <span className="text-xs text-muted-foreground">{token.name}</span>
                </div>
              </TableCell>
              <TableCell className="py-1.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-muted text-xs font-medium">
                  {getChainIcon(token.chain)}
                </div>
              </TableCell>
              <TableCell className="text-right font-medium py-1.5">
                ${token.price < 0.01 ? token.price.toExponential(2) : token.price.toFixed(2)}
              </TableCell>
              <TableCell className="text-right py-1.5">
                <div className="flex items-center justify-end">
                  {token.change1h > 0 ? (
                    <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
                  )}
                  <span className={token.change1h > 0 ? "text-green-500" : "text-red-500"}>
                    {token.change1h > 0 ? "+" : ""}
                    {token.change1h.toFixed(1)}%
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-right py-1.5">
                <span className={token.change24h > 0 ? "text-green-500" : "text-red-500"}>
                  {token.change24h > 0 ? "+" : ""}
                  {token.change24h.toFixed(1)}%
                </span>
              </TableCell>
              <TableCell className="text-right py-1.5">
                <span className={token.change30d > 0 ? "text-green-500" : "text-red-500"}>
                  {token.change30d > 0 ? "+" : ""}
                  {token.change30d.toFixed(1)}%
                </span>
              </TableCell>
              <TableCell className="text-right py-1.5">
                <span className={token.change90d > 0 ? "text-green-500" : "text-red-500"}>
                  {token.change90d > 0 ? "+" : ""}
                  {token.change90d.toFixed(1)}%
                </span>
              </TableCell>
              <TableCell className="text-right py-1.5">${token.marketCap.toFixed(1)}B</TableCell>
              <TableCell className="text-right py-1.5">${token.volume.toFixed(1)}M</TableCell>
              <TableCell className="text-right py-1.5">{token.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
