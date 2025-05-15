"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Slider } from "@/components/ui/slider"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function SearchFilters() {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)
  const [marketCapRange, setMarketCapRange] = useState([0, 100])
  const [tokenCount, setTokenCount] = useState(1245)

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

  return (
    <div className="space-y-4">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <span>${marketCapRange[1]}M+</span>
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

      <Collapsible open={isAdvancedOpen} onOpenChange={setIsAdvancedOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full flex justify-between">
            <span>Advanced Parameters</span>
            {isAdvancedOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Number of Holders</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any</SelectItem>
                  <SelectItem value="low">0-1,000</SelectItem>
                  <SelectItem value="medium">1,000-10,000</SelectItem>
                  <SelectItem value="high">10,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Price Change (24h)</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any</SelectItem>
                  <SelectItem value="negative">Negative</SelectItem>
                  <SelectItem value="positive">Positive</SelectItem>
                  <SelectItem value="high">+10% or more</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Trading Volume (24h)</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any</SelectItem>
                  <SelectItem value="low">$0-$100K</SelectItem>
                  <SelectItem value="medium">$100K-$1M</SelectItem>
                  <SelectItem value="high">$1M+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Token Age</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any</SelectItem>
                  <SelectItem value="new">New (0-30 days)</SelectItem>
                  <SelectItem value="recent">Recent (1-6 months)</SelectItem>
                  <SelectItem value="established">Established (6+ months)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Social Links</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any</SelectItem>
                  <SelectItem value="yes">Available</SelectItem>
                  <SelectItem value="no">Not Available</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Button className="w-full gradient-button">Search {tokenCount} Tokens</Button>
    </div>
  )
}
