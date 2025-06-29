import { getNavigationData } from "@/lib/utils"
import Header from "@/components/layout/header"

import "@/styles/globals.css"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const navigationData = await getNavigationData()

  return (
    <>
      <div className="fixed top-0 z-40 w-full bg-neutral-900/90 text-white backdrop-blur-2xl">
        <Header navigationData={navigationData} />
      </div>

      <div className="pt-[76px]">{children}</div>
    </>
  )
}
