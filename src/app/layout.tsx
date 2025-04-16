import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

// Farcaster Frame embed metadata
const frameEmbed = {
  version: "next",
  imageUrl: "https://your-domain.com/warp-celeb.gif",
  button: {
    title: "🚀 Start",
    action: {
      type: "launch_frame",
      url: "https://your-domain.com",
      name: "Followers Mini App",
      splashImageUrl: "https://your-domain.com/splash.png",
      splashBackgroundColor: "#f5f0ec"
    }
  }
};

export const metadata: Metadata = {
  title: "200 Followers on Warpcast!",
  description: "Thank you to all my followers",
  other: {
    "fc:frame": JSON.stringify(frameEmbed),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[430px] mx-auto min-h-screen overflow-hidden">{children}</div>
      </body>
    </html>
  )
}
