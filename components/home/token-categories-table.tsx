"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpDown, TrendingUp, TrendingDown } from "lucide-react"

const categories = [
  { name: "DeFi", marketCap: 45.2, tokens: 324, volume: 12.5, change: 2.3 },
  { name: "Gaming", marketCap: 32.8, tokens: 256, volume: 8.7, change: -1.5 },
  { name: "Metaverse", marketCap: 28.4, tokens: 187, volume: 6.2, change: 0.8 },
  { name: "AI", marketCap: 21.6, tokens: 142, volume: 5.4, change: 4.2 },
  { name: "Infrastructure", marketCap: 18.9, tokens: 98, volume: 4.1, change: -0.6 },
]

export default function TokenCategoriesTable() {
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

  const sortedCategories = [...categories].sort((a, b) => {
    const aValue = a[sortBy as keyof typeof a]
    const bValue = b[sortBy as keyof typeof b]

    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1
    } else {
      return aValue < bValue ? 1 : -1
    }
  })

  return (
    <div className="overflow-auto max-h-[300px]">
      <Table className="text-xs">
        <TableHeader>
          <TableRow className="hover:bg-transparent border-deep-indigo">
            <TableHead className="w-[80px] py-2 px-1 text-medium-blue">Category</TableHead>
            <TableHead
              className="text-right cursor-pointer py-2 px-1 text-medium-blue"
              onClick={() => handleSort("marketCap")}
            >
              <div className="flex items-center justify-end">
                <span>MC (B)</span>
                <ArrowUpDown className="ml-1 h-3 w-3" />
              </div>
            </TableHead>
            <TableHead
              className="text-right cursor-pointer py-2 px-1 text-medium-blue"
              onClick={() => handleSort("tokens")}
            >
              <div className="flex items-center justify-end">
                <span>Tokens</span>
                <ArrowUpDown className="ml-1 h-3 w-3" />
              </div>
            </TableHead>
            <TableHead className="text-right py-2 px-1 text-medium-blue">
              <div className="flex items-center justify-end">
                <span>24h %</span>
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedCategories.map((category) => (
            <TableRow key={category.name} className="hover:bg-deep-indigo/10 border-deep-indigo/30">
              <TableCell className="font-medium py-1.5 px-1">{category.name}</TableCell>
              <TableCell className="text-right py-1.5 px-1">{Math.round(category.marketCap)}B</TableCell>
              <TableCell className="text-right py-1.5 px-1">{category.tokens}</TableCell>
              <TableCell className="text-right py-1.5 px-1">
                <div className="flex items-center justify-end">
                  {category.change > 0 ? (
                    <TrendingUp className="mr-1 h-3 w-3 text-bright-cyan" />
                  ) : (
                    <TrendingDown className="mr-1 h-3 w-3 text-destructive" />
                  )}
                  <span className={category.change > 0 ? "text-bright-cyan" : "text-destructive"}>
                    {category.change > 0 ? "+" : ""}
                    {category.change.toFixed(1)}%
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
