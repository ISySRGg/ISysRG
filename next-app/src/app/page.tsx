import {
  Organization as OrganizationSchema,
  WebSite as WebSiteSchema,
  WithContext,
} from "schema-dts"

import { Button } from "@/components/ui/button"
import Header from "@/components/layout/header"
import Slogan from "@/components/slogan"

import AboutSection from "./components/about-section"
import ActivitySection from "./components/activity-section"
import DatasetSection from "./components/dataset-section"
import PartnersSection from "./components/partners-section"
import ProductsSection from "./components/products-section"
import PublicationsSection from "./components/publications-section"

export default function Page() {
  const webSiteJsonLd: WithContext<WebSiteSchema> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ISys Research Group",
    alternateName: ["ISySRG", "Intelligent Systems Research Group"],
    url: "https://isysrg.com",
  }

  const organizationJsonLd: WithContext<OrganizationSchema> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://isysrg.com",
    logo: "https://isysrg.com/isysrg.png",
    name: "Intelligent Systems Research Group",
    description:
      "The Intelligent Systems Research Group (ISysRG) is based at the Faculty of Computer Science, Universitas Sriwijaya. This research group specializes in the theory and application of systems that understand, reason, learn, and act intelligently.",
    email: "isysrg@unsri.ac.id",
    telephone: "(+62) 81224147003",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Srijaya Negara, Bukit Besar, Kec. Ilir Barat I",
      addressLocality: "Palembang",
      addressCountry: "ID",
    },
  }

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
      <header className="h-dvh bg-black bg-[url('/assets/images/code.jpg')] bg-cover sm:h-fit">
        <div className="flex h-full flex-col bg-gradient-to-br from-neutral-950/95 via-neutral-800/90 via-50% to-orange-950/60 to-95% pb-14 text-background lg:py-10 2xl:py-20">
          <Header />

          <hgroup className="container flex h-full flex-col justify-center sm:py-28">
            <h1 hidden>ISys Research Group</h1>
            <p className="h-[1lh] text-4xl font-medium sm:text-7xl lg:text-8xl 2xl:text-9xl">
              <Slogan />
            </p>
            <p className="mt-6 max-w-prose text-lg md:text-xl">
              <span className="text-primary">
                The Intelligent Systems Research Group (ISysRG)
              </span>{" "}
              is based at the Faculty of Computer Science, Universitas
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
