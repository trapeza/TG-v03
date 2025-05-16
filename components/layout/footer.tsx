import Link from "next/link"
import { Twitter, MessageSquare, FileText } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-deep-indigo bg-dark-blue-grey py-4">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">© 2025 TokenGems. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <Link
            href="https://twitter.com"
            target="_blank"
            className="text-muted-foreground hover:text-bright-cyan transition-colors"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://telegram.org"
            target="_blank"
            className="text-muted-foreground hover:text-bright-cyan transition-colors"
          >
            <MessageSquare className="h-5 w-5" />
            <span className="sr-only">Telegram</span>
          </Link>
          <Link href="/legal" className="text-muted-foreground hover:text-bright-cyan transition-colors">
            <FileText className="h-5 w-5" />
            <span className="sr-only">Legal</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
