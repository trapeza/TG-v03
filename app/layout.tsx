import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/layout/navbar"
import LeftSidebar from "@/components/layout/left-sidebar"
import Footer from "@/components/layout/footer"

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "TokenGems - Find Real Alpha, Earn With Your Expertise",
  description:
    "Help investors find profitable token investment opportunities across different stages and asset categories.",
  icons: {
    icon: "/images/TG-logo-v02.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.className} bg-near-black text-off-white min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <div className="flex flex-1">
            <LeftSidebar />
            <main className="flex-1 pb-8">{children}</main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
