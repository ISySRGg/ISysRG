/* eslint-disable @typescript-eslint/no-explicit-any */
import createImageUrlBuilder from "@sanity/image-url"

import { dataset, projectId } from "./api"

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
})

export const urlForImage = (source: any) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined
  }

  return imageBuilder?.image(source).auto("format").fit("max")
}

export function resolveOpenGraphImage(image: any, width = 1200, height = 630) {
  if (!image) return
  const url = urlForImage(image)?.width(1200).height(630).fit("crop").url()
  if (!url) return
  return { url, alt: image?.alt as string, width, height }
}
