"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function TokenPriceChart() {
  const [timeframe, setTimeframe] = useState("1d")

  // This would be replaced with actual chart data and a charting library like recharts
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button
          variant={timeframe === "1h" ? "default" : "outline"}
          size="sm"
          onClick={() => setTimeframe("1h")}
          className={timeframe === "1h" ? "gradient-button" : ""}
        >
          1H
        </Button>
        <Button
          variant={timeframe === "1d" ? "default" : "outline"}
          size="sm"
          onClick={() => setTimeframe("1d")}
          className={timeframe === "1d" ? "gradient-button" : ""}
        >
          1D
        </Button>
        <Button
          variant={timeframe === "1w" ? "default" : "outline"}
          size="sm"
          onClick={() => setTimeframe("1w")}
          className={timeframe === "1w" ? "gradient-button" : ""}
        >
          1W
        </Button>
        <Button
          variant={timeframe === "1m" ? "default" : "outline"}
          size="sm"
          onClick={() => setTimeframe("1m")}
          className={timeframe === "1m" ? "gradient-button" : ""}
        >
          1M
        </Button>
        <Button
          variant={timeframe === "1y" ? "default" : "outline"}
          size="sm"
          onClick={() => setTimeframe("1y")}
          className={timeframe === "1y" ? "gradient-button" : ""}
        >
          1Y
        </Button>
        <Button
          variant={timeframe === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setTimeframe("all")}
          className={timeframe === "all" ? "gradient-button" : ""}
        >
          All
        </Button>
      </div>

      {/* Placeholder for the actual chart */}
      <div className="w-full h-[300px] bg-near-black/30 rounded-md flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Price chart for {timeframe} timeframe</p>
          <p className="text-xs text-muted-foreground mt-2">
            (This is a placeholder - would be implemented with a charting library)
          </p>
        </div>
      </div>
    </div>
  )
}
