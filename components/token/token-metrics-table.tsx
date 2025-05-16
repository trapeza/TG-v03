"use client"

interface TokenMetricsTableProps {
  token: {
    price: number
    marketCap: number
    fullyDilutedValuation: number
    volume24h: number
    liquidity: number
    holders: number
    volatility: number
    change24h: number
    change7d: number
    change30d: number
    circulatingSupply: number
    totalSupply: number
    maxSupply: number
    mcRevenue: number
    low52w: number
    high52w: number
  }
}

export default function TokenMetricsTable({ token }: TokenMetricsTableProps) {
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <div className="space-y-2 text-sm">
      <div className="flex justify-between py-1 border-b border-deep-indigo/30">
        <span className="text-muted-foreground">Price</span>
        <span>${token.price.toFixed(2)}</span>
      </div>

      <div className="flex justify-between py-1 border-b border-deep-indigo/30">
        <span className="text-muted-foreground">Market Cap</span>
        <span>${token.marketCap}B</span>
      </div>

      <div className="flex justify-between py-1 border-b border-deep-indigo/30">
        <span className="text-muted-foreground">Fully Diluted Valuation</span>
        <span>${token.fullyDilutedValuation}B</span>
      </div>

      <div className="flex justify-between py-1 border-b border-deep-indigo/30">
        <span className="text-muted-foreground">24h Volume</span>
        <span>${token.volume24h}M</span>
      </div>

      <div className="flex justify-between py-1 border-b border-deep-indigo/30">
        <span className="text-muted-foreground">Liquidity</span>
        <span>${token.liquidity}M</span>
      </div>

      <div className="flex justify-between py-1 border-b border-deep-indigo/30">
        <span className="text-muted-foreground">Holders</span>
        <span>{formatNumber(token.holders)}</span>
      </div>

      <div className="flex justify-between py-1 border-b border-deep-indigo/30">
        <span className="text-muted-foreground">Volatility (30d)</span>
        <span>{token.volatility}%</span>
      </div>

      <div className="flex justify-between py-1 border-b border-deep-indigo/30">
        <span className="text-muted-foreground">Change (24h)</span>
        <span className={token.change24h > 0 ? "text-bright-cyan" : "text-destructive"}>
          {token.change24h > 0 ? "+" : ""}
          {token.change24h.toFixed(2)}%
        </span>
      </div>

      <div className="flex justify-between py-1 border-b border-deep-indigo/30">
        <span className="text-muted-foreground">Change (7d)</span>
        <span className={token.change7d > 0 ? "text-bright-cyan" : "text-destructive"}>
          {token.change7d > 0 ? "+" : ""}
          {token.change7d.toFixed(2)}%
        </span>
      </div>

      <div className="flex justify-between py-1 border-b border-deep-indigo/30">
        <span className="text-muted-foreground">Change (30d)</span>
        <span className={token.change30d > 0 ? "text-bright-cyan" : "text-destructive"}>
          {token.change30d > 0 ? "+" : ""}
          {token.change30d.toFixed(2)}%
        </span>
      </div>

      <div className="flex justify-between py-1 border-b border-deep-indigo/30">
        <span className="text-muted-foreground">Circulating Supply</span>
        <span>{token.circulatingSupply}M</span>
      </div>

      <div className="flex justify-between py-1 border-b border-deep-indigo/30">
        <span className="text-muted-foreground">Total Supply</span>
        <span>{token.totalSupply}M</span>
      </div>

      <div className="flex justify-between py-1 border-b border-deep-indigo/30">
        <span className="text-muted-foreground">Max Supply</span>
        <span>{token.maxSupply}M</span>
      </div>

      <div className="flex justify-between py-1 border-b border-deep-indigo/30">
        <span className="text-muted-foreground">MC/Revenue Ratio</span>
        <span>{token.mcRevenue}x</span>
      </div>

      <div className="flex justify-between py-1 border-b border-deep-indigo/30">
        <span className="text-muted-foreground">52w Low / High</span>
        <span>
          ${token.low52w.toFixed(2)} / ${token.high52w.toFixed(2)}
        </span>
      </div>
    </div>
  )
}
