import { Metadata } from "next"
import { client } from "@/sanity/client"
import { allIntellectualPropertyRightsQuery } from "@/sanity/queries"

import { IntellectualPropertyRights } from "@/types/sanity.types"
import BasePage from "@/components/base-page"
import BaseSection from "@/components/base-section"
import PublicationList from "@/components/publication-list"
import PublicationListItem from "@/components/publication-list-item"

const options = { next: { revalidate: 30 } }

export const metadata: Metadata = {
  title: "Intellectual Property Rights",
  description:
    "Browse our portfolio of registered intellectual properties, including patents, copyrights, and software innovations, demonstrating our commitment to impactful and applicable research outcomes.",
}

export default async function Page() {
  const intellectualPropertyRights = await client.fetch<
    IntellectualPropertyRights[]
  >(allIntellectualPropertyRightsQuery, {}, options)

  return (
    <BasePage title="Intellectual Property Rights (IPR)" subtitle="Publication">
      <BaseSection>
        <h2 className="text-xl font-medium text-primary">
          List of Intellectual Property Rights
        </h2>
        <PublicationList>
          {intellectualPropertyRights.map((ipr) => (
            <PublicationListItem
              key={ipr._id}
              title={ipr.title || ""}
              href={ipr.link || "#"}
              description={`${ipr.ipr} - ${ipr.certificateNumber}`}
            />
          ))}
        </PublicationList>
      </BaseSection>
    </BasePage>
  )
}
