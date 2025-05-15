"use client"

import { useState, useEffect } from "react"
import { X, Search } from "lucide-react"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SearchFilters from "@/components/search/search-filters"
import PresetSearches from "@/components/search/preset-searches"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchHistory, setSearchHistory] = useState<string[]>(["Ethereum", "Uniswap", "Solana", "Meme Coins"])

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [onClose])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0 gap-0 bg-background border-border">
        <DialogHeader className="p-4 border-b">
          <div className="flex items-center">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for tokens, categories, pools and users"
                className="pl-8 border-none shadow-none focus-visible:ring-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="ml-2">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </DialogHeader>

        {searchHistory.length > 0 && (
          <div className="p-4 border-b">
            <h4 className="text-sm font-medium mb-2">Recent Searches</h4>
            <div className="flex flex-wrap gap-2">
              {searchHistory.map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="h-7 text-xs"
                  onClick={() => setSearchQuery(item)}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        )}

        <Tabs defaultValue="filters" className="w-full">
          <div className="px-4 border-b">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="filters">Filters</TabsTrigger>
              <TabsTrigger value="presets">Preset Searches</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="filters" className="p-4 pt-2">
            <SearchFilters />
          </TabsContent>

          <TabsContent value="presets" className="p-4 pt-2">
            <PresetSearches />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
