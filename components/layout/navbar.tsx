"use client"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SearchModal from "@/components/search/search-modal"
import EarnModal from "@/components/earn/earn-modal"

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isEarnOpen, setIsEarnOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [gemPoints, setGemPoints] = useState(1325)

  const handleConnect = () => {
    setIsConnected(true)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="container flex h-16 items-center">
        {/* Logo - Left aligned */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-12 w-32 sm:h-14 sm:w-36">
              <img
                src="/images/TokenGems-logo.svg"
                alt="TokenGems Logo"
                className="object-contain w-full h-full"
                onError={(e) => {
                  // Fallback to old logo if new one fails to load
                  e.currentTarget.src = "/images/TG-logo-v02.png"
                }}
              />
            </div>
          </Link>
        </div>

        {/* Search Bar - Centered */}
        <div className="flex-1 flex justify-center px-6">
          <div
            className="flex items-center h-9 w-full max-w-sm rounded-md border border-border bg-background px-3 text-sm ring-offset-background cursor-pointer"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <span className="text-muted-foreground">Search tokens, pools, categories, users</span>
          </div>
        </div>

        {/* Navigation - Right aligned */}
        <nav className="flex items-center gap-4">
          <Link
            href="https://docs.bitbond.com/asset-tokenization-suite/tokengems/intro-tokengems"
            target="_blank"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Docs
          </Link>

          <Button
            variant="outline"
            className="relative flex items-center gap-2 border-primary hover:bg-primary/10"
            onClick={() => setIsEarnOpen(true)}
          >
            <span className="font-medium">Earn</span>
            <div className="h-5 w-5 rotate-45 bg-[#E0115F] rounded-sm flex items-center justify-center">
              <div className="h-3 w-3 rotate-45 bg-background rounded-sm"></div>
            </div>
            <span className="font-bold">1,325</span>
            <span className="text-xs text-muted-foreground">GEMs</span>
          </Button>

          {isConnected ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/abstract-geometric-shapes.png" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border">
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="text-sm font-medium">Rank: Ruby</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="text-sm font-medium">0 Notifications</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="text-sm font-medium">Copy Address</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleDisconnect}>Disconnect</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button className="gradient-button relative" onClick={handleConnect}>
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-destructive"></span>
              Connect Wallet
            </Button>
          )}
        </nav>
      </div>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <EarnModal
        isOpen={isEarnOpen}
        onClose={() => setIsEarnOpen(false)}
        gemPoints={gemPoints}
        setGemPoints={setGemPoints}
      />
    </header>
  )
}
