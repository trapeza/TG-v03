"use client"

import { useState, useEffect } from "react"
import { X, Diamond, Check } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface EarnModalProps {
  isOpen: boolean
  onClose: () => void
  gemPoints: number
  setGemPoints: (points: number) => void
}

export default function EarnModal({ isOpen, onClose, gemPoints, setGemPoints }: EarnModalProps) {
  const [streak, setStreak] = useState(3)
  const [claimed, setClaimed] = useState(false)
  const [animation, setAnimation] = useState(false)

  const handleClaim = () => {
    setClaimed(true)
    setGemPoints(gemPoints + streak)
    setAnimation(true)

    setTimeout(() => {
      setAnimation(false)
    }, 2000)
  }

  // Reset claim status when modal reopens
  useEffect(() => {
    if (isOpen) {
      setClaimed(false)
    }
  }, [isOpen])

  // Format number with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-6 gap-6 bg-background border-border">
        <DialogHeader className="flex flex-row items-center justify-between p-0 space-y-0">
          <DialogTitle className="text-xl font-bold flex items-center">
            <Diamond className="h-6 w-6 mr-2 text-[#E0115F]" />
            Earn GEMs
          </DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Your GEMs</h3>
              <p className="text-2xl font-bold text-primary-green">
                {formatNumber(gemPoints)}
                {animation && <span className="ml-2 inline-block gem-animation">+{streak}</span>}
              </p>
            </div>
            <div>
              <h3 className="font-medium text-right">Your Rank</h3>
              <p className="text-lg font-medium text-[#E0115F]">Ruby</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Daily Streak: Day {streak}</h3>
            <div className="grid grid-cols-7 gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <div
                  key={day}
                  className={`flex flex-col items-center p-2 rounded-md border ${
                    day <= streak ? "border-primary-green bg-primary-green/10" : "border-border"
                  }`}
                >
                  <span className="text-xs">Day</span>
                  <span className="font-bold">{day}</span>
                  <span className="text-xs font-medium">{day} GEM</span>
                </div>
              ))}
            </div>
            <Button className="w-full gradient-button mt-2" onClick={handleClaim} disabled={claimed}>
              {claimed ? (
                <span className="flex items-center">
                  <Check className="mr-2 h-4 w-4" />
                  Claimed {streak} GEMs
                </span>
              ) : (
                `Claim ${streak} GEMs`
              )}
            </Button>
          </div>

          <div className="space-y-2 pt-4 border-t">
            <h3 className="font-medium">Other Ways to Earn GEMs</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Post about a token (300 char max)</span>
                <span className="font-medium text-primary-green">2-3 GEMs</span>
              </li>
              <li className="flex justify-between">
                <span>Upvote or downvote a token</span>
                <span className="font-medium text-primary-green">1 GEM</span>
              </li>
              <li className="flex justify-between">
                <span>Each upvote, downvote or repost your posts receive</span>
                <span className="font-medium text-primary-green">1 GEM</span>
              </li>
              <li className="flex justify-between">
                <span>Claim a token profile</span>
                <span className="font-medium text-primary-green">20 GEMs</span>
              </li>
              <li className="flex justify-between">
                <span>Update your token profile</span>
                <span className="font-medium text-primary-green">30 GEMs</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t">
            <h3 className="font-medium mb-2">Progress to Diamond Rank</h3>
            <Progress value={75} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              You need 2,500 GEMs to reach Diamond rank. Keep posting and earning!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
