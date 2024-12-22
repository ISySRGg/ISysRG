import type { Metadata } from "next"

import "@/styles/globals.css"

import { client } from "@/sanity/client"
import * as demo from "@/sanity/demo"
import { settingsQuery } from "@/sanity/queries"
import { resolveOpenGraphImage } from "@/sanity/utils"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/react"

import { Settings } from "@/types/sanity.types"
import { inter, poppins } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import Footer from "@/components/layout/footer"
import { TailwindIndicator } from "@/components/tailwind-indicator"

import Providers from "./providers"
import Statcounter from "./statcounter"

const options = { next: { revalidate: 30 } }

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch<Settings>(settingsQuery, {}, options)

  const title = settings?.title || demo.title
  const description =
    "Welcome to the Intelligent Systems Research Group (ISysRG). We are dedicated to advancing the theory and application of intelligent systems. Explore our research, activities, and contributions to the global scientific community."

  const ogImage = resolveOpenGraphImage(settings?.ogImage)

  let metadataBase: URL | undefined = undefined
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined
  } catch {
    // ignore
  }

  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: "ISys Research Group - We learn, We Collaborate, We Discover",
    },
    description: description,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          poppins.variable,
          inter.variable,
          "flex min-h-dvh flex-col font-text antialiased"
        )}
      >
        <Providers>
          <div className="grow">{children}</div>
          <Footer />
        </Providers>

        <Toaster position="bottom-center" />
        <Analytics />
        <GoogleAnalytics gaId="G-YTFEEL0LRW" />
        <Statcounter />
        <TailwindIndicator />
      </body>
    </html>
  )
}
