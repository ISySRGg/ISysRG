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
  `*[_type == "home"][0]{datasetsSection{featuredDatasets[]->{name,slug,images,shortDescription,description}}}`
)

export const featuredProductsQuery = defineQuery(
  `*[_type == "home"][0]{productsSection{featuredProducts[]->{name,slug,image,shortDescription,description,features}}}`
)

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`)

export const postQuery = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]`
)

export const allProductsQuery = defineQuery(
  `*[_type == "product" && defined(slug.current)]{name,slug,image,shortDescription,description,features}`
)

export const productQuery = defineQuery(`
  *[_type == "product" && slug.current == $slug][0]
`)

export const allDatasetsQuery = defineQuery(
  `*[_type == "dataset" && defined(slug.current)]`
)

export const allActivityQuery = defineQuery(
  `*[_type == "activity" && defined(slug.current)]`
)

export const allInternationalJournalsQuery = defineQuery(
  `*[_type == "internationalJournal"]`
)

export const allInternationalConferencesQuery = defineQuery(
  `*[_type == "internationalConference"]`
)

export const allIntellectualPropertyRightsQuery = defineQuery(
  `*[_type == "intellectualPropertyRights"]`
)

export const allBooksQuery = defineQuery(`*[_type == "book"]`)

export const allPublicationCountQuery = defineQuery(
  `{
    "internationalJournalCount": count(*[_type == "internationalJournal"]),
    "internationalConferenceCount": count(*[_type == "internationalConference"]),
    "intellectualPropertyRightsCount": count(*[_type == "intellectualPropertyRights"]),
    "bookCount": count(*[_type == "book"])
    }`
)

export const allResearchersQuery = defineQuery(`*[_type == "researcher"]`)

export const allInfrastructureQuery = defineQuery(
  `*[_type == "infrastructure"]`
)
