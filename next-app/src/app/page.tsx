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
      <header className="rounded-b-[3rem] bg-black bg-[url('/assets/images/code.jpg')] bg-cover">
        <div className="flex flex-col rounded-b-[3rem] bg-gradient-to-br from-neutral-950/95 via-neutral-800/90 via-50% to-orange-950/60 to-95% py-20 text-background backdrop-blur">
          <Header />

          <div className="container py-28">
            <h1 className="h-[1lh] text-9xl font-medium">
              <Slogan />
            </h1>
            <p className="mt-6 max-w-prose text-xl">
              <span className="text-primary">
                The Intelligent Systems Research Group
              </span>{" "}
              (ISysRG) is based at the Faculty of Computer Science, Universitas
              Sriwijaya. This research group specializes in the theory and
              application of systems that understand, reason, learn, and act
              intelligently.
            </p>

            <div className="mt-10 flex gap-4">
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
