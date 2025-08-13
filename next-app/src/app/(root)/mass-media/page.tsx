import { Metadata } from "next"
import { client } from "@/sanity/client"
import { allMassMediaQuery } from "@/sanity/queries"

import { MassMedia } from "@/types/sanity.types"
import { formatDate } from "@/lib/utils"
import BasePage from "@/components/base-page"
import BaseSection from "@/components/base-section"
import PublicationList from "@/components/publication-list"
import PublicationListItem from "@/components/publication-list-item"

const options = { next: { revalidate: 30 } }

export const metadata: Metadata = {
  title: "Mass Media",
  description:
    "Discover our presence in various mass media channels, highlighting research achievements, public engagements, and contributions to the field of intelligent systems, medical image processing, and pattern recognition.",
}

export default async function Page() {
  const massMedia = await client.fetch<MassMedia[]>(
    allMassMediaQuery,
    {},
    options
  )

  return (
    <BasePage title="External Media" subtitle="Communication">
      <BaseSection>
        {/* <h2 className="text-primary text-xl font-medium">External Media</h2> */}
        <PublicationList>
          {massMedia.map((media) => (
            <PublicationListItem
              key={media._id}
              title={media.title || ""}
              href={media.link || "#"}
              description={`${media.mediaName} -  ${formatDate(new Date(media.date || 1998))} `}
            />
          ))}
        </PublicationList>
      </BaseSection>
    </BasePage>
  )
}
