import Header from "@/components/layout/header"

export default function NotFound() {
  return (
    <>
      <div className="bg-neutral-900 text-white">
        <Header />
      </div>
      <main className="container flex h-full flex-col justify-center py-40">
        <h1 className="font-medium text-primary sm:text-lg">404 error</h1>
        <p className="text-3xl sm:text-5xl">Page not found＞﹏＜</p>
        <article className="prose prose-sm sm:prose-base">
          <p>Sorry, the page you are looking doesn&apos;t exist.</p>
        </article>
      </main>
    </>
  )
}
