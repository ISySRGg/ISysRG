import { client } from "@/sanity/client"
import { allProductsQuery } from "@/sanity/queries"

import { Product } from "@/types/sanity.types"

const options = { next: { revalidate: 30 } }

export default async function Page() {
  const products = await client.fetch<Product[]>(allProductsQuery, {}, options)

  return <div>{<pre>{JSON.stringify(products, null, 2)}</pre>}</div>
}
