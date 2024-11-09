import { Button } from "@/components/ui/button"
import Header from "@/components/layout/header"
import Slogan from "@/components/slogan"

import AboutSection from "./components/about-section"
import ActivitySection from "./components/activity-section"
import DatasetSection from "./components/dataset-section"
import PostsSection from "./components/posts-section"
import ProductsSection from "./components/products-section"

export default function Page() {
  return (
    <main>
      <header className="h-dvh bg-black bg-[url('/assets/images/code.jpg')] bg-cover sm:h-fit sm:rounded-b-[3rem]">
        <div className="flex h-full flex-col bg-gradient-to-br from-neutral-950/95 via-neutral-800/90 via-50% to-orange-950/60 to-95% pb-14 text-background backdrop-blur sm:rounded-b-[3rem] sm:py-20">
          <Header />

          <div className="container mt-[50%] sm:mt-0 sm:py-28">
            <h1 className="h-[1lh] text-4xl font-medium sm:text-9xl">
              <Slogan />
            </h1>
            <p className="mt-6 max-w-prose text-lg sm:text-xl">
              <span className="text-primary">
                The Intelligent Systems Research Group
              </span>{" "}
              (ISysRG) is based at the Faculty of Computer Science, Universitas
              Sriwijaya. This research group specializes in the theory and
              application of systems that understand, reason, learn, and act
              intelligently.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="xl">Our Services</Button>
              <Button size="xl" variant="secondary">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </header>
      <AboutSection />
      <ProductsSection />
      <ActivitySection />
      <DatasetSection />
      <PostsSection />
    </main>
  )
}
