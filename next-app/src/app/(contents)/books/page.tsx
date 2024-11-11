import { client } from "@/sanity/client"
import { allBooksQuery } from "@/sanity/queries"

import { Book } from "@/types/sanity.types"
import BasePage from "@/components/base-page"
import PublicationList from "@/components/publication-list"
import PublicationListItem from "@/components/publication-list-item"

const options = { next: { revalidate: 30 } }

export default async function Page() {
  const books = await client.fetch<Book[]>(allBooksQuery, {}, options)

  return (
    <BasePage title="Books" subtitle="Publications">
      <section>
        <PublicationList>
          {books.map((book) => (
            <PublicationListItem
              key={book._id}
              title={book.title || ""}
              href={"#"}
              description={`Publisher: ${book.publisher} | ISBN: ${book.isbnNumber} | Year: ${new Date(book.year || 1998).getFullYear()}`}
            />
          ))}
        </PublicationList>
      </section>
    </BasePage>
  )
}
