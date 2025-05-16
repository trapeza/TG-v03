"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { ArrowUpDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TokenHoldersProps {
  token: {
    symbol: string
    name: string
    holders: number
    circulatingSupply: number
  }
}

export default function TokenHolders({ token }: TokenHoldersProps) {
  const [sortBy, setSortBy] = useState("balance")
  const [sortOrder, setSortOrder] = useState("desc")

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("desc")
    }
  }

  // Mock data for top holders
  const topHolders = [
    {
      rank: 1,
      address: "0x1234...5678",
      balance: 125000000,
      percentage: 16.58,
      value: 977500000,
      type: "Exchange",
      label: "Binance",
    },
    {
      rank: 2,
      address: "0x2345...6789",
      balance: 85000000,
      percentage: 11.28,
      value: 664700000,
      type: "Team",
      label: "Uniswap Treasury",
    },
    {
      rank: 3,
      address: "0x3456...7890",
      balance: 45000000,
      percentage: 5.97,
      value: 351900000,
      type: "Exchange",
      label: "Coinbase",
    },
    {
      rank: 4,
      address: "0x4567...8901",
      balance: 32000000,
      percentage: 4.24,
      value: 250240000,
      type: "Unknown",
      label: "",
    },
    {
      rank: 5,
      address: "0x5678...9012",
      balance: 28500000,
      percentage: 3.78,
      value: 222870000,
      type: "Investor",
      label: "a16z",
    },
    {
      rank: 6,
      address: "0x6789...0123",
      balance: 21000000,
      percentage: 2.79,
      value: 164220000,
      type: "Unknown",
      label: "",
    },
    {
      rank: 7,
      address: "0x7890...1234",
      balance: 18500000,
      percentage: 2.45,
      value: 144670000,
      type: "Exchange",
      label: "Kraken",
    },
    {
      rank: 8,
      address: "0x8901...2345",
      balance: 15000000,
      percentage: 1.99,
      value: 117300000,
      type: "Unknown",
      label: "",
    },
    {
      rank: 9,
      address: "0x9012...3456",
      balance: 12500000,
      percentage: 1.66,
      value: 97750000,
      type: "Investor",
      label: "Paradigm",
    },
    {
      rank: 10,
      address: "0x0123...4567",
      balance: 10000000,
      percentage: 1.33,
      value: 78200000,
      type: "Unknown",
      label: "",
    },
  ]

  const sortedHolders = [...topHolders].sort((a, b) => {
    const aValue = a[sortBy as keyof typeof a]
    const bValue = b[sortBy as keyof typeof b]

    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1
    } else {
      return aValue < bValue ? 1 : -1
    }
  })

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const formatCurrency = (num: number) => {
    if (num >= 1000000000) {
      return `$${(num / 1000000000).toFixed(2)}B`
    }
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(2)}M`
    }
    return `$${formatNumber(num)}`
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-dark-blue-grey border-deep-indigo">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Holder Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Total Holders</p>
                <p className="text-2xl font-bold">{formatNumber(token.holders)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Concentration</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Top 10 Holders</span>
                    <span>52.07%</span>
                  </div>
                  <Progress value={52.07} className="h-1.5" />
                </div>
                <div className="space-y-2 mt-2">
                  <div className="flex justify-between text-xs">
                    <span>Top 50 Holders</span>
                    <span>78.32%</span>
                  </div>
                  <Progress value={78.32} className="h-1.5" />
                </div>
                <div className="space-y-2 mt-2">
                  <div className="flex justify-between text-xs">
                    <span>Top 100 Holders</span>
                    <span>85.14%</span>
                  </div>
                  <Progress value={85.14} className="h-1.5" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-dark-blue-grey border-deep-indigo md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Holder Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[200px] bg-near-black/30 rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Holder distribution chart placeholder</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div>
                <p className="text-xs text-muted-foreground">Retail (0-1k)</p>
                <p className="font-medium">42.5%</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Small (1k-10k)</p>
                <p className="font-medium">18.3%</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Medium (10k-100k)</p>
                <p className="font-medium">12.7%</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Whales (100k+)</p>
                <p className="font-medium">26.5%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-dark-blue-grey border-deep-indigo">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Top Holders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-auto">
            <Table className="text-xs">
              <TableHeader>
                <TableRow className="hover:bg-transparent border-deep-indigo">
                  <TableHead className="w-[60px] py-2 px-1 text-medium-blue">Rank</TableHead>
                  <TableHead className="py-2 px-1 text-medium-blue">Address</TableHead>
                  <TableHead
                    className="text-right cursor-pointer py-2 px-1 text-medium-blue"
                    onClick={() => handleSort("balance")}
                  >
                    <div className="flex items-center justify-end">
                      <span>Balance</span>
                      <ArrowUpDown className="ml-1 h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead
                    className="text-right cursor-pointer py-2 px-1 text-medium-blue"
                    onClick={() => handleSort("percentage")}
                  >
                    <div className="flex items-center justify-end">
                      <span>Percentage</span>
                      <ArrowUpDown className="ml-1 h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead
                    className="text-right cursor-pointer py-2 px-1 text-medium-blue"
                    onClick={() => handleSort("value")}
                  >
                    <div className="flex items-center justify-end">
                      <span>Value</span>
                      <ArrowUpDown className="ml-1 h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead className="text-right py-2 px-1 text-medium-blue">Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedHolders.map((holder) => (
                  <TableRow key={holder.rank} className="hover:bg-deep-indigo/10 border-deep-indigo/30">
                    <TableCell className="py-1.5 px-1 font-medium">{holder.rank}</TableCell>
                    <TableCell className="py-1.5 px-1">
                      <div className="flex items-center">
                        <span className="text-bright-cyan">{holder.address}</span>
                        <Button variant="ghost" size="icon" className="h-5 w-5 ml-1">
                          <ExternalLink className="h-3 w-3" />
                          <span className="sr-only">View on Explorer</span>
                        </Button>
                      </div>
                      {holder.label && <span className="text-xs text-muted-foreground">{holder.label}</span>}
                    </TableCell>
                    <TableCell className="text-right py-1.5 px-1">{formatNumber(holder.balance)}</TableCell>
                    <TableCell className="text-right py-1.5 px-1">{holder.percentage.toFixed(2)}%</TableCell>
                    <TableCell className="text-right py-1.5 px-1">{formatCurrency(holder.value)}</TableCell>
                    <TableCell className="text-right py-1.5 px-1">{holder.type}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Button variant="outline" className="w-full mt-4">
            View All Holders
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
