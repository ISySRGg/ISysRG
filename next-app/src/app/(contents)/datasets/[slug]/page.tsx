import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/client"
import { datasetQuery } from "@/sanity/queries"
import { urlForImage } from "@/sanity/utils"
import { SquareArrowOutUpRight } from "lucide-react"

import { Dataset } from "@/types/sanity.types"
import BasePage from "@/components/base-page"
import BaseSection from "@/components/base-section"

const options = { next: { revalidate: 30 } }

interface Props {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: Props) {
  const dataset = await client.fetch<Dataset>(
    datasetQuery,
    await params,
    options
  )

  return (
    <BasePage title={dataset.name || ""} subtitle="Dataset">
      <BaseSection>
        <div className="flex flex-row flex-wrap gap-4">
          {dataset.images?.map((image) => (
            <Image
              key={image._key}
              src={urlForImage(image)?.url() as string}
              alt=""
              width={200}
              height={200}
              className="aspect-square rounded object-cover"
            />
          ))}
        </div>
        <div>
          <h2 className="pt-10 text-xl font-medium text-primary">
            Description
          </h2>
          <article className="prose">
            <p>{dataset.description || dataset.shortDescription}</p>
          </article>
        </div>

        <div className="mt-4">
          <Link
            href={dataset.link || "#"}
            target="_blank"
            className="flex items-center gap-1 text-lg hover:underline"
          >
            Preview <SquareArrowOutUpRight className="size-[1em]" />
          </Link>
        </div>
      </BaseSection>
    </BasePage>
  )
}
