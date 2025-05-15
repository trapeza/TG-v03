"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { ArrowUpDown } from "lucide-react"

const presales = [
  {
    name: "MetaGalaxy",
    symbol: "MGXY",
    chain: "ethereum",
    launchpad: "bitbond",
    timeLeft: "2d 5h",
    hardCap: 500000,
    raised: 325000,
    investors: 842,
  },
  {
    name: "DefiDragon",
    symbol: "DDRG",
    chain: "solana",
    launchpad: "raydium",
    timeLeft: "1d 12h",
    hardCap: 300000,
    raised: 240000,
    investors: 623,
  },
  {
    name: "CryptoKingdom",
    symbol: "KING",
    chain: "bnb",
    launchpad: "pinksale",
    timeLeft: "3d 8h",
    hardCap: 250000,
    raised: 120000,
    investors: 412,
  },
  {
    name: "AstroNauts",
    symbol: "ASTRO",
    chain: "base",
    launchpad: "gempad",
    timeLeft: "5d 2h",
    hardCap: 180000,
    raised: 45000,
    investors: 231,
  },
  {
    name: "PixelVerse",
    symbol: "PIXEL",
    chain: "solana",
    launchpad: "raydium",
    timeLeft: "6h 45m",
    hardCap: 400000,
    raised: 380000,
    investors: 956,
  },
]

export default function TokenPresalesTable() {
  const [sortBy, setSortBy] = useState("timeLeft")
  const [sortOrder, setSortOrder] = useState("asc")

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("asc")
    }
  }

  const sortedPresales = [...presales].sort((a, b) => {
    if (sortBy === "timeLeft") {
      // Simple string comparison for demo purposes
      if (sortOrder === "asc") {
        return a.timeLeft.localeCompare(b.timeLeft)
      } else {
        return b.timeLeft.localeCompare(a.timeLeft)
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
            <TableHead className="w-[90px] py-2 px-1">Token</TableHead>
            <TableHead className="text-right cursor-pointer py-2 px-1" onClick={() => handleSort("timeLeft")}>
              <div className="flex items-center justify-end">
                <span>Ends In</span>
                <ArrowUpDown className="ml-1 h-3 w-3" />
              </div>
            </TableHead>
            <TableHead className="text-right py-2 px-1">Progress</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedPresales.map((presale) => (
            <TableRow key={presale.symbol} className="hover:bg-transparent">
              <TableCell className="font-medium py-1.5 px-1">
                <div className="flex flex-col">
                  <span>${presale.symbol}</span>
                  <span className="text-xs text-muted-foreground">{presale.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-right py-1.5 px-1">{presale.timeLeft}</TableCell>
              <TableCell className="py-1.5 px-1">
                <div className="space-y-1">
                  <Progress value={(presale.raised / presale.hardCap) * 100} className="h-1.5" />
                  <div className="flex justify-between text-xs">
                    <span>{Math.round((presale.raised / presale.hardCap) * 100)}%</span>
                    <span>{presale.investors} inv</span>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
