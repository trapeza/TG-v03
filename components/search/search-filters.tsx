"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

export default function SearchFilters() {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [marketCapRange, setMarketCapRange] = useState([0, 100])
  const [holderDistribution, setHolderDistribution] = useState([0.2, 0.8])
  const [holderCountRange, setHolderCountRange] = useState([0, 10000])
  const [tradingVolumeRange, setTradingVolumeRange] = useState([0, 10])
  const [maxDrawdownRange, setMaxDrawdownRange] = useState([0, 100])
  const [liquidityPoolRange, setLiquidityPoolRange] = useState([0, 10])
  const [fdvCapRange, setFdvCapRange] = useState([0, 1000])
  const [mcFdvRatioRange, setMcFdvRatioRange] = useState([0, 1])
  const [medianHoldingRange, setMedianHoldingRange] = useState([0, 10000])
  const [distanceFromAthRange, setDistanceFromAthRange] = useState([0, 100])
  const [xFollowersRange, setXFollowersRange] = useState([0, 100000])
  const [revenueRange, setRevenueRange] = useState([0, 100])
  const [tvlRange, setTvlRange] = useState([0, 1000])
  const [mcPerHolderRange, setMcPerHolderRange] = useState([0, 1000])
  const [tokenCount, setTokenCount] = useState(1245)
  const [teamInfoAvailable, setTeamInfoAvailable] = useState(false)

  const chains = ["Ethereum", "Base", "BNB Chain", "Solana"]
  const dexes = [
    "Not listed",
    "Uniswap",
    "Raydium",
    "Pancakeswap",
    "Aerodrome",
    "Orca",
    "Bitbond",
    "PinkSale",
    "Gempad",
  ]
  const categories = ["DeFi", "Gaming", "Metaverse", "AI", "Infrastructure", "Meme", "RWA", "Social"]

  // Format number with K, M, B suffixes
  const formatNumber = (num: number, suffix = "") => {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B${suffix}`
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M${suffix}`
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K${suffix}`
    }
    return `${num}${suffix}`
  }

  return (
    <div className="space-y-4 pb-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Chain</label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Select chain" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Chains</SelectItem>
              {chains.map((chain) => (
                <SelectItem key={chain} value={chain.toLowerCase()}>
                  {chain}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">DEX or Launchpad</label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Select DEX" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All DEXes</SelectItem>
              {dexes.map((dex) => (
                <SelectItem key={dex} value={dex.toLowerCase().replace(/\s/g, "")}>
                  {dex}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Category</label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Market Cap Range ($)</label>
          <div className="px-2">
            <Slider
              defaultValue={[0, 100]}
              max={100}
              step={1}
              onValueChange={(value) => setMarketCapRange(value as number[])}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>${marketCapRange[0]}M</span>
            <span>&gt;${marketCapRange[1]}M</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Holder Distribution</label>
          <div className="px-2">
            <Slider
              defaultValue={[0.2, 0.8]}
              max={1}
              step={0.01}
              onValueChange={(value) => setHolderDistribution(value as number[])}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0 Concentrated {holderDistribution[0].toFixed(1)}</span>
            <span>{holderDistribution[1].toFixed(1)} Distributed 1</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Volatility (30d)</label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Select volatility" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any</SelectItem>
              <SelectItem value="low">Low (0-30%)</SelectItem>
              <SelectItem value="medium">Medium (30-60%)</SelectItem>
              <SelectItem value="high">High (60%+)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="pt-4">
        <Button
          variant="outline"
          className="w-full flex justify-between"
          onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
        >
          <span>Advanced Parameters</span>
          {isAdvancedOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>

        {isAdvancedOpen && (
          <div className="pt-4 space-y-6">
            {/* First row of advanced parameters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium"># of Holders</label>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 10000]}
                    max={10000}
                    step={100}
                    onValueChange={(value) => setHolderCountRange(value as number[])}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{formatNumber(holderCountRange[0])}</span>
                  <span>&gt;{formatNumber(holderCountRange[1])}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Trading Volume (24h)</label>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 10]}
                    max={10}
                    step={0.1}
                    onValueChange={(value) => setTradingVolumeRange(value as number[])}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>${formatNumber(tradingVolumeRange[0], "M")}</span>
                  <span>&gt;${formatNumber(tradingVolumeRange[1], "M")}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Maximum Drawdown (%)</label>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 100]}
                    max={100}
                    step={1}
                    onValueChange={(value) => setMaxDrawdownRange(value as number[])}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{maxDrawdownRange[0]}%</span>
                  <span>&gt;{maxDrawdownRange[1]}%</span>
                </div>
              </div>
            </div>

            {/* Second row of advanced parameters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Liquidity Pool Range ($)</label>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 10]}
                    max={10}
                    step={0.1}
                    onValueChange={(value) => setLiquidityPoolRange(value as number[])}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>${formatNumber(liquidityPoolRange[0], "M")}</span>
                  <span>&gt;${formatNumber(liquidityPoolRange[1], "M")}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">FDV Cap Range ($)</label>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 1000]}
                    max={1000}
                    step={10}
                    onValueChange={(value) => setFdvCapRange(value as number[])}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>${formatNumber(fdvCapRange[0], "M")}</span>
                  <span>&gt;${formatNumber(fdvCapRange[1], "M")}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Market Cap / FDV Ratio</label>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 1]}
                    max={1}
                    step={0.01}
                    onValueChange={(value) => setMcFdvRatioRange(value as number[])}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{mcFdvRatioRange[0].toFixed(2)}</span>
                  <span>{mcFdvRatioRange[1].toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Third row of advanced parameters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Median Holding per Investor ($)</label>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 10000]}
                    max={10000}
                    step={100}
                    onValueChange={(value) => setMedianHoldingRange(value as number[])}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>${formatNumber(medianHoldingRange[0])}</span>
                  <span>&gt;${formatNumber(medianHoldingRange[1])}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Distance from ATH (%)</label>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 100]}
                    max={100}
                    step={1}
                    onValueChange={(value) => setDistanceFromAthRange(value as number[])}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{distanceFromAthRange[0]}%</span>
                  <span>&gt;{distanceFromAthRange[1]}%</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium"># of X Followers</label>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 100000]}
                    max={100000}
                    step={1000}
                    onValueChange={(value) => setXFollowersRange(value as number[])}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{formatNumber(xFollowersRange[0])}</span>
                  <span>&gt;{formatNumber(xFollowersRange[1])}</span>
                </div>
              </div>
            </div>

            {/* Fourth row of advanced parameters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Revenue ($)</label>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 100]}
                    max={100}
                    step={1}
                    onValueChange={(value) => setRevenueRange(value as number[])}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>${formatNumber(revenueRange[0], "M")}</span>
                  <span>&gt;${formatNumber(revenueRange[1], "M")}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">TVL ($)</label>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 1000]}
                    max={1000}
                    step={10}
                    onValueChange={(value) => setTvlRange(value as number[])}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>${formatNumber(tvlRange[0], "M")}</span>
                  <span>&gt;${formatNumber(tvlRange[1], "M")}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Market Cap per Holder Multiple</label>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 1000]}
                    max={1000}
                    step={10}
                    onValueChange={(value) => setMcPerHolderRange(value as number[])}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{formatNumber(mcPerHolderRange[0])}x</span>
                  <span>&gt;{formatNumber(mcPerHolderRange[1])}x</span>
                </div>
              </div>
            </div>

            {/* Fifth row - Boolean options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Switch id="team-info" checked={teamInfoAvailable} onCheckedChange={setTeamInfoAvailable} />
                  <Label htmlFor="team-info" className="text-sm font-medium">
                    Team Info Available
                  </Label>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Token Type</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any</SelectItem>
                    <SelectItem value="erc20">ERC-20</SelectItem>
                    <SelectItem value="spl">SPL</SelectItem>
                    <SelectItem value="bep20">BEP-20</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Audited</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any</SelectItem>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}
      </div>

      <Button className="w-full gradient-button" asChild>
        <Link href="/tokens">Show 1,235 tokens</Link>
      </Button>
    </div>
  )
}
