import type { Metadata } from "next"

import "@/styles/globals.css"

import { client } from "@/sanity/client"
import * as demo from "@/sanity/demo"
import { settingsQuery } from "@/sanity/queries"
import { resolveOpenGraphImage } from "@/sanity/utils"
import { toPlainText } from "next-sanity"

import { Settings } from "@/types/sanity.types"
import { geistMono, geistSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Footer from "@/components/layout/footer"

import Providers from "./providers"

const options = { next: { revalidate: 30 } }

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch<Settings>(settingsQuery, {}, options)

  const title = settings?.title || demo.title
  const description = settings?.description || demo.description

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
      default: title,
    },
    description: toPlainText(description),
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
