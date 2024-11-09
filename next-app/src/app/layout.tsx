import type { Metadata } from "next"

import { siteConfig } from "@/config/site"

import "@/styles/globals.css"

import { geistMono, geistSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Footer from "@/components/layout/footer"

import Providers from "./providers"

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "flex min-h-dvh flex-col antialiased"
        )}
      >
        <Providers>
          <div className="grow">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
