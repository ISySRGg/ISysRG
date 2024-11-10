"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import Header from "@/components/layout/header"

export default function NotFound() {
  const router = useRouter()

  return (
    <>
      <div className="bg-neutral-900 text-white">
        <Header />
      </div>
      <main className="container flex h-full flex-col justify-center py-40">
        <h1 className="font-medium text-primary sm:text-lg">404 error</h1>
        <p className="text-3xl sm:text-5xl">Page not found＞﹏＜</p>
        <article className="prose prose-sm sm:prose-base">
          <p>Sorry, the page you are looking for doesn&apos;t exist.</p>
        </article>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button variant="secondary" onClick={() => router.back()}>
            <ArrowLeft /> Go back
          </Button>
          <Button asChild>
            <Link href="/">Take me home</Link>
          </Button>
        </div>
      </main>
    </>
  )
}
