import Link from "next/link"
import { Twitter, MessageSquare } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-deep-indigo bg-dark-blue-grey py-4">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">© 2025 TokenGems. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <Link
            href="https://x.com/tokengems"
            target="_blank"
            className="text-muted-foreground hover:text-bright-cyan transition-colors"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://t.me/tokengems_ai"
            target="_blank"
            className="text-muted-foreground hover:text-bright-cyan transition-colors"
          >
            <MessageSquare className="h-5 w-5" />
            <span className="sr-only">Telegram</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
