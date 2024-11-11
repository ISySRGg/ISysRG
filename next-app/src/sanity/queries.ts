import { defineQuery } from "next-sanity"

export const aboutSectionQuery = defineQuery(
  `*[_type == "home"][0]{aboutSection}`
)

export const activitiesSectionQuery = defineQuery(
  `*[_type == "home"][0]{activitiesSection{...,highlightedActivities[]->}}`
)

export const datasetsSectionQuery = defineQuery(
  `*[_type == "home"][0]{datasetsSection{...,featuredDatasets[]->}}`
)

export const productsSectionQuery = defineQuery(
  `*[_type == "home"][0]{productsSection{...,featuredProducts[]->}}`
)

export const featuredDatasetsQuery = defineQuery(
  `*[_type == "home"][0]{datasetsSection{featuredDatasets[]->}}`
)

export const featuredProductsQuery = defineQuery(
  `*[_type == "home"][0]{productsSection{featuredProducts[]->}}`
)

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

export const allPublicationCountQuery = defineQuery(
  `{
      "internationalJournalCount": count(*[_type == "internationalJournal"]),
      "internationalConferenceCount": count(*[_type == "internationalConference"]),
      "intellectualPropertyRightsCount": count(*[_type == "intellectualPropertyRights"]),
      "bookCount": count(*[_type == "book"])
   }`
)
