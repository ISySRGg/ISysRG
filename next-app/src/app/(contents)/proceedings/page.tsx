import { client } from "@/sanity/client"
import { allInternationalConferencesQuery } from "@/sanity/queries"

import { InternationalConference } from "@/types/sanity.types"
import BasePage from "@/components/base-page"
import PublicationList from "@/components/publication-list"
import PublicationListItem from "@/components/publication-list-item"

const options = { next: { revalidate: 30 } }

export default async function Page() {
  const internationalConferences = await client.fetch<
    InternationalConference[]
  >(allInternationalConferencesQuery, {}, options)

  return (
    <BasePage
      title="International Conferences (Proceedings)"
      subtitle="Publications"
    >
      <section>
        <PublicationList>
          {internationalConferences.map((conference) => (
            <PublicationListItem
              key={conference._id}
              title={conference.title || ""}
              href={conference.link || "#"}
              description={`${conference.conference} - ${new Date(conference.publicationDate || 1998).getFullYear()}`}
            />
          ))}
        </PublicationList>
      </section>
    </BasePage>
  )
}
