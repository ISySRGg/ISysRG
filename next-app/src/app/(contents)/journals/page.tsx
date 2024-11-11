import { client } from "@/sanity/client"
import { allInternationalJournalsQuery } from "@/sanity/queries"

import { InternationalJournal } from "@/types/sanity.types"
import BasePage from "@/components/base-page"
import PublicationList from "@/components/publication-list"
import PublicationListItem from "@/components/publication-list-item"

const options = { next: { revalidate: 30 } }

export default async function Page() {
  const internationalJournals = await client.fetch<InternationalJournal[]>(
    allInternationalJournalsQuery,
    {},
    options
  )

  return (
    <BasePage title="International Journals" subtitle="Publications">
      <section>
        <PublicationList>
          {internationalJournals.map((journal) => (
            <PublicationListItem
              key={journal._id}
              title={journal.title || ""}
              href={journal.link || "#"}
              description={`${journal.journal} - ${new Date(journal.publicationDate || 1998).getFullYear()}`}
            />
          ))}
        </PublicationList>
      </section>
    </BasePage>
  )
}
