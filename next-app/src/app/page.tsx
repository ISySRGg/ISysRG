import Image from "next/image"
import Link from "next/link"

import { organizationJsonLd, webSiteJsonLd } from "@/lib/json-ld"
import { getNavigationData } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Header from "@/components/layout/header"
import Slogan from "@/components/slogan"

import AboutSection from "./components/about-section"
import ActivitySection from "./components/activity-section"
import DatasetSection from "./components/dataset-section"
import HomeHeader from "./components/header"
import PartnersSection from "./components/partners-section"
import ProductsSection from "./components/products-section"
import PublicationsSection from "./components/publications-section"

export default async function Page() {
  const navigationData = await getNavigationData()

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <header className="relative h-dvh bg-black sm:h-fit">
        <Image
          src="/assets/images/code8.jpeg"
          width={500}
          height={500}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        />

        <div className="text-background flex h-full flex-col bg-linear-to-br from-orange-950/80 via-neutral-800/90 via-40% to-cyan-950/80 to-95% pb-14 lg:py-10 2xl:py-20">
          <Header navigationData={navigationData} />
          <HomeHeader navigationData={navigationData} />

          <hgroup className="z-10 container flex h-full flex-col justify-center sm:py-28">
            <h1 hidden>ISys Research Group</h1>

            <p className="font-heading h-[1lh] text-4xl font-medium sm:text-7xl lg:text-8xl">
              <Slogan />
            </p>
            <p className="mt-6 max-w-2xl md:text-xl">
              {/* <span className="text-primary">
                The Intelligent Systems Research Group (ISysRG)
              </span>{" "}
              is based at the Faculty of Computer Science, Universitas
              Sriwijaya. This research group specializes in the theory and
              application of systems that understand, reason, learn, and act
              intelligently. */}
              The Artificial Intelligence-Medical Center of Excellence (AIMed CoE) 
              is a leading center of excellence initiated by Universitas Sriwijaya, 
              Indonesia. It houses Intelligent System research group (ISysRG), which 
              is dedicated to advancing the field of artificial intelligence in 
              medicine through interdisciplinary collaboration and innovation. 
              AIMed CoE aims to develop AI-based technological solutions for the 
              arly screening (detection) of non-communicable diseases that are accurate, 
              efficient, ethical, and usable by non-specialist healthcare workers in 
              primary care settings, through a mobile platform integrated with telemedicine.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="xl" asChild>
                <Link href="#about">About Us</Link>
              </Button>
              <Button size="xl" variant="secondary" asChild>
                <Link href="#products">View Products</Link>
              </Button>
            </div>
          </hgroup>
        </div>
      </header>
      <AboutSection />
      <ProductsSection />
      <ActivitySection />
      <PublicationsSection />
      <DatasetSection />
      <PartnersSection />
    </main>
  )
}
