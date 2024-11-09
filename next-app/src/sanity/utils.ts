import createImageUrlBuilder from "@sanity/image-url"

import { dataset, projectId } from "./api"

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlForImage = (source: any) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined
  }

  return imageBuilder?.image(source).auto("format").fit("max")
}
