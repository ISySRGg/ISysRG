import { defineQuery } from "next-sanity"

const isProd = process.env.NODE_ENV === "production"

let allActivitiesQuery

if (isProd) {
  allActivitiesQuery = defineQuery(`
    *[_type == "activity" && defined(slug.current) && !(title match "[dev]*")] | order(date desc, _updatedAt desc)
  `)
} else {
  allActivitiesQuery = defineQuery(`
    *[_type == "activity" && defined(slug.current)] | order(date desc, _updatedAt desc)
  `)
}

let activityQuery

if (isProd) {
  activityQuery = defineQuery(`
    *[_type == "activity" && slug.current == $slug && !(title match "[dev]*")][0]
  `)
} else {
  activityQuery = defineQuery(`
        *[_type == "activity" && slug.current == $slug][0]
      `)
}

let latestActivitiesQuery

if (isProd) {
  latestActivitiesQuery = defineQuery(`
        *[_type == "activity" && defined(slug.current) && !(title match "[dev]*")] | order(date desc, _updatedAt desc) [0...$limit] {
          _id,
          title,
          slug,
          date,
          image
        }
      `)
} else {
  latestActivitiesQuery = defineQuery(`
        *[_type == "activity" && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
          _id,
          title,
          slug,
          date,
          image
        }
      `)
}

let moreActivitiesQuery

if (isProd) {
  moreActivitiesQuery = defineQuery(`
        *[_type == "activity" && _id != $skip && defined(slug.current) && !(title match "[dev]*")] | order(date desc, _updatedAt desc) [0...$limit] {
          _id,
          title,
          slug,
          date
        }
      `)
} else {
  moreActivitiesQuery = defineQuery(`
        *[_type == "activity" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
          _id,
          title,
          slug,
          date
        }
      `)
}

export {
  allActivitiesQuery,
  activityQuery,
  latestActivitiesQuery,
  moreActivitiesQuery,
}
