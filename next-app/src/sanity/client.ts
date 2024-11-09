import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId } from "./api"

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
})
