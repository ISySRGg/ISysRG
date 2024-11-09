import { defineQuery } from "next-sanity"

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`)

export const allPostsQuery = defineQuery(
  `*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...6]{_id,title,slug,publishedAt}`
)

export const postQuery = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]`
)

export const allProductsQuery = defineQuery(
  `*[_type == "product" && defined(slug.current)][0..1]`
)

export const allDatasetsQuery = defineQuery(
  `*[_type == "dataset" && defined(slug.current)][0..2]`
)

export const allActivityQuery = defineQuery(
  `*[_type == "activity" && defined(slug.current)][0..3]`
)
