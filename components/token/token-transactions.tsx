"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, ExternalLink, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface TokenTransactionsProps {
  token: {
    symbol: string
    name: string
  }
}

export default function TokenTransactions({ token }: TokenTransactionsProps) {
  const [sortBy, setSortBy] = useState("timestamp")
  const [sortOrder, setSortOrder] = useState("desc")
  const [activeTab, setActiveTab] = useState("all")

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("desc")
    }
  }

  // Mock data for transactions
  const transactions = [
    {
      hash: "0xabcd...1234",
      type: "swap",
      from: "0x1234...5678",
      to: "0x5678...9012",
      amount: 12500,
      value: 97750,
      timestamp: Date.now() - 1000 * 60 * 5, // 5 minutes ago
    },
    {
      hash: "0xbcde...2345",
      type: "transfer",
      from: "0x2345...6789",
      to: "0x6789...0123",
      amount: 5000,
      value: 39100,
      timestamp: Date.now() - 1000 * 60 * 12, // 12 minutes ago
    },
    {
      hash: "0xcdef...3456",
      type: "liquidity",
      from: "0x3456...7890",
      to: "0x7890...1234",
      amount: 25000,
      value: 195500,
      timestamp: Date.now() - 1000 * 60 * 18, // 18 minutes ago
    },
    {
      hash: "0xdefg...4567",
      type: "swap",
      from: "0x4567...8901",
      to: "0x8901...2345",
      amount: 3750,
      value: 29325,
      timestamp: Date.now() - 1000 * 60 * 25, // 25 minutes ago
    },
    {
      hash: "0xefgh...5678",
      type: "transfer",
      from: "0x5678...9012",
      to: "0x9012...3456",
      amount: 8200,
      value: 64124,
      timestamp: Date.now() - 1000 * 60 * 32, // 32 minutes ago
    },
    {
      hash: "0xfghi...6789",
      type: "swap",
      from: "0x6789...0123",
      to: "0x0123...4567",
      amount: 1500,
      value: 11730,
      timestamp: Date.now() - 1000 * 60 * 45, // 45 minutes ago
    },
    {
      hash: "0xghij...7890",
      type: "liquidity",
      from: "0x7890...1234",
      to: "0x1234...5678",
      amount: 42000,
      value: 328440,
      timestamp: Date.now() - 1000 * 60 * 58, // 58 minutes ago
    },
    {
      hash: "0xhijk...8901",
      type: "transfer",
      from: "0x8901...2345",
      to: "0x2345...6789",
      amount: 6300,
      value: 49266,
      timestamp: Date.now() - 1000 * 60 * 75, // 1 hour 15 minutes ago
    },
    {
      hash: "0xijkl...9012",
      type: "swap",
      from: "0x9012...3456",
      to: "0x3456...7890",
      amount: 9800,
      value: 76636,
      timestamp: Date.now() - 1000 * 60 * 90, // 1 hour 30 minutes ago
    },
    {
      hash: "0xjklm...0123",
      type: "transfer",
      from: "0x0123...4567",
      to: "0x4567...8901",
      amount: 15000,
      value: 117300,
      timestamp: Date.now() - 1000 * 60 * 120, // 2 hours ago
    },
  ]

  const filteredTransactions = transactions.filter((tx) => {
    if (activeTab === "all") return true
    return tx.type === activeTab
  })

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
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

  const formatTimestamp = (timestamp: number) => {
    const now = Date.now()
    const diff = now - timestamp

    if (diff < 1000 * 60) {
      return "Just now"
    } else if (diff < 1000 * 60 * 60) {
      const minutes = Math.floor(diff / (1000 * 60))
      return `${minutes}m ago`
    } else if (diff < 1000 * 60 * 60 * 24) {
      const hours = Math.floor(diff / (1000 * 60 * 60))
      return `${hours}h ago`
    } else {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      return `${days}d ago`
    }
  }

  const getTransactionTypeColor = (type: string) => {
    switch (type) {
      case "swap":
        return "bg-bright-cyan/20 text-bright-cyan hover:bg-bright-cyan/30"
      case "transfer":
        return "bg-primary-green/20 text-primary-green hover:bg-primary-green/30"
      case "liquidity":
        return "bg-[#E0115F]/20 text-[#E0115F] hover:bg-[#E0115F]/30"
      default:
        return "bg-muted/20 text-muted-foreground hover:bg-muted/30"
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-dark-blue-grey border-deep-indigo">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Transaction Volume (24h)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[200px] bg-near-black/30 rounded-md flex items-center justify-center">
              <img src="/placeholder.svg" alt="Placeholder" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-xs text-muted-foreground">Total Transactions</p>
                <p className="text-xl font-bold">12,458</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total Volume</p>
                <p className="text-xl font-bold">$125.8M</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-dark-blue-grey border-deep-indigo md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Transaction Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Transaction Types</h3>
                <div className="w-full h-[150px] bg-near-black/30 rounded-md flex items-center justify-center">
                  <img src="/placeholder.svg" alt="Placeholder" className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 bg-bright-cyan/10 rounded-md">
                    <p className="text-bright-cyan">Swaps</p>
                    <p className="font-medium">45%</p>
                  </div>
                  <div className="p-2 bg-primary-green/10 rounded-md">
                    <p className="text-primary-green">Transfers</p>
                    <p className="font-medium">38%</p>
                  </div>
                  <div className="p-2 bg-[#E0115F]/10 rounded-md">
                    <p className="text-[#E0115F]">Liquidity</p>
                    <p className="font-medium">17%</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Exchange Distribution</h3>
                <div className="w-full h-[150px] bg-near-black/30 rounded-md flex items-center justify-center">
                  <img src="/placeholder.svg" alt="Placeholder" className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2 bg-near-black/30 rounded-md">
                    <p className="text-muted-foreground">Uniswap</p>
                    <p className="font-medium">42%</p>
                  </div>
                  <div className="p-2 bg-near-black/30 rounded-md">
                    <p className="text-muted-foreground">Binance</p>
                    <p className="font-medium">28%</p>
                  </div>
                  <div className="p-2 bg-near-black/30 rounded-md">
                    <p className="text-muted-foreground">Coinbase</p>
                    <p className="font-medium">15%</p>
                  </div>
                  <div className="p-2 bg-near-black/30 rounded-md">
                    <p className="text-muted-foreground">Others</p>
                    <p className="font-medium">15%</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-dark-blue-grey border-deep-indigo">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Recent Transactions</CardTitle>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="swap">Swaps</TabsTrigger>
                <TabsTrigger value="transfer">Transfers</TabsTrigger>
                <TabsTrigger value="liquidity">Liquidity</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-auto">
            <Table className="text-xs">
              <TableHeader>
                <TableRow className="hover:bg-transparent border-deep-indigo">
                  <TableHead className="w-[80px] py-2 px-1 text-medium-blue">Tx Hash</TableHead>
                  <TableHead className="py-2 px-1 text-medium-blue">Type</TableHead>
                  <TableHead className="py-2 px-1 text-medium-blue">From</TableHead>
                  <TableHead className="py-2 px-1 text-medium-blue">To</TableHead>
                  <TableHead
                    className="text-right cursor-pointer py-2 px-1 text-medium-blue"
                    onClick={() => handleSort("amount")}
                  >
                    <div className="flex items-center justify-end">
                      <span>Amount</span>
                      <ArrowUpDown className="ml-1 h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead
                    className="text-right cursor-pointer py-2 px-1 text-medium-blue"
                    onClick={() => handleSort("value")}
                  >
                    <div className="flex items-center justify-end">
                      <span>Value (USD)</span>
                      <ArrowUpDown className="ml-1 h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead
                    className="text-right cursor-pointer py-2 px-1 text-medium-blue"
                    onClick={() => handleSort("timestamp")}
                  >
                    <div className="flex items-center justify-end">
                      <span>Time</span>
                      <ArrowUpDown className="ml-1 h-3 w-3" />
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedTransactions.map((tx) => (
                  <TableRow key={tx.hash} className="hover:bg-deep-indigo/10 border-deep-indigo/30">
                    <TableCell className="py-1.5 px-1">
                      <div className="flex items-center">
                        <span className="text-bright-cyan">{tx.hash}</span>
                        <Button variant="ghost" size="icon" className="h-5 w-5 ml-1">
                          <ExternalLink className="h-3 w-3" />
                          <span className="sr-only">View on Explorer</span>
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="py-1.5 px-1">
                      <Badge className={getTransactionTypeColor(tx.type)}>
                        {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-1.5 px-1">
                      <div className="flex items-center">
                        <span className="text-muted-foreground">{tx.from}</span>
                        <Button variant="ghost" size="icon" className="h-5 w-5 ml-1">
                          <ExternalLink className="h-3 w-3" />
                          <span className="sr-only">View Address</span>
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="py-1.5 px-1">
                      <div className="flex items-center">
                        <span className="text-muted-foreground">{tx.to}</span>
                        <Button variant="ghost" size="icon" className="h-5 w-5 ml-1">
                          <ExternalLink className="h-3 w-3" />
                          <span className="sr-only">View Address</span>
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="text-right py-1.5 px-1">
                      <div className="flex items-center justify-end">
                        {tx.type === "swap" ? (
                          <ArrowUpRight className="h-3 w-3 text-bright-cyan mr-1" />
                        ) : tx.type === "transfer" ? (
                          <ArrowDownRight className="h-3 w-3 text-primary-green mr-1" />
                        ) : (
                          <ArrowUpRight className="h-3 w-3 text-[#E0115F] mr-1" />
                        )}
                        <span>
                          {formatNumber(tx.amount)} ${token.symbol}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right py-1.5 px-1">${formatNumber(tx.value)}</TableCell>
                    <TableCell className="text-right py-1.5 px-1">{formatTimestamp(tx.timestamp)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Button variant="outline" className="w-full mt-4">
            View All Transactions
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
