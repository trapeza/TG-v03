"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
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
    <header className="sticky top-0 z-50 w-full border-b border-deep-indigo bg-dark-blue-grey backdrop-blur supports-[backdrop-filter]:bg-dark-blue-grey/90">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-6 flex-1">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 sm:h-10 sm:w-10">
              <Image
                src="/images/TG-logo-v02.png"
                alt="TokenGems Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold hidden sm:inline-block text-off-white">TokenGems</span>
          </Link>

          <div
            className="flex items-center h-9 w-full max-w-sm rounded-md border border-deep-indigo bg-near-black px-3 text-sm ring-offset-background cursor-pointer"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <span className="text-muted-foreground">Search tokens, pools, categories, users</span>
          </div>
        </div>

        <nav className="flex items-center gap-4 ml-auto">
          <Link
            href="https://docs.bitbond.com/asset-tokenization-suite/tokengems/intro-tokengems"
            target="_blank"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-bright-cyan"
          >
            Docs
          </Link>

          <Button
            variant="outline"
            className="relative flex items-center gap-2 border-medium-blue hover:bg-medium-blue/10"
            onClick={() => setIsEarnOpen(true)}
          >
            <span className="font-medium">Earn</span>
            <div className="h-5 w-5 rotate-45 bg-[#E0115F] rounded-sm flex items-center justify-center">
              <div className="h-3 w-3 rotate-45 bg-near-black rounded-sm"></div>
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
              <DropdownMenuContent align="end" className="bg-dark-blue-grey border-deep-indigo">
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
