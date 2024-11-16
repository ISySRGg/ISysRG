"use client"

import { useEffect } from "react"

import { Button } from "@/components/ui/button"
import Header from "@/components/layout/header"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <div className="bg-neutral-900 text-white">
        <Header />
      </div>
      <main className="container flex h-full flex-col justify-center py-40">
        <h1 className="font-medium text-primary sm:text-lg">Error</h1>
        <p className="text-3xl sm:text-5xl">Something went wrong＞﹏＜</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button variant="secondary" onClick={() => reset()}>
            Try again
          </Button>
        </div>
      </main>
    </>
  )
}
