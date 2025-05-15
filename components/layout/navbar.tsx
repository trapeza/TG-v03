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
  const [gemPoints, setGemPoints] = useState(13)

  const handleConnect = () => {
    setIsConnected(true)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-4">
          <div className="relative h-8 w-8 sm:h-10 sm:w-10">
            <Image src="/images/TG-logo-v02.png" alt="TokenGems Logo" fill className="object-contain" priority />
          </div>
          <span className="text-xl font-bold hidden sm:inline-block">TokenGems</span>
        </Link>

        <div
          className="flex items-center h-9 w-full max-w-sm rounded-md border border-input bg-background px-3 text-sm ring-offset-background cursor-pointer mx-auto"
          onClick={() => setIsSearchOpen(true)}
        >
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <span className="text-muted-foreground">Search for tokens, categories, pools and users</span>
        </div>

        <nav className="ml-auto flex items-center gap-4">
          <Link
            href="https://docs.bitbond.com/asset-tokenization-suite/tokengems/intro-tokengems"
            target="_blank"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </Link>

          <Button variant="outline" className="relative flex items-center gap-2" onClick={() => setIsEarnOpen(true)}>
            <div className="h-5 w-5 rotate-45 bg-primary-green rounded-sm flex items-center justify-center">
              <div className="h-3 w-3 rotate-45 bg-background rounded-sm"></div>
            </div>
            <span className="font-medium">EARN</span>
            {gemPoints > 0 && <span className="font-bold">{gemPoints}</span>}
          </Button>

          {isConnected ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="text-sm font-medium">Rank: Amethyst</span>
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
