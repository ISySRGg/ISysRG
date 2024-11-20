import Header from "@/components/layout/header"

import "@/styles/globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="bg-neutral-900 text-white">
        <Header />
      </div>

      {children}
    </>
  )
}
