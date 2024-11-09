import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/client"
import { allDatasetsQuery } from "@/sanity/queries"
import { urlForImage } from "@/sanity/utils"

import { Dataset } from "@/types/sanity.types"
import { Button } from "@/components/ui/button"
import BaseSection from "@/components/base-section"

const options = { next: { revalidate: 30 } }

export default async function DatasetSection() {
  const datasets = await client.fetch<Dataset[]>(allDatasetsQuery, {}, options)

  return (
    <BaseSection title="Datasets" className="bg-neutral-100">
      <article className="prose prose-sm sm:prose-base">
        <p>
          Explore a curated collection of medical imaging and signal datasets
          designed to support research in medical interpretation and analysis.
        </p>
      </article>
      <ul className="mt-4 grid gap-2 sm:grid-cols-3 sm:gap-6">
        {datasets.map((dataset) => (
          <li key={dataset._id}>
            <Link
              href={`datasets/${dataset.slug?.current}`}
              className="group flex gap-4 border bg-neutral-50 p-4 transition-all hover:border-primary/40 hover:bg-primary/10"
            >
              <Image
                src={urlForImage(dataset.image)?.url() as string}
                alt=""
                height={80}
                width={80}
                className="size-[68px] object-cover sm:size-[80px]"
              />
              <div>
                <h2 className="font-bold transition-colors group-hover:text-primary sm:text-xl">
                  {dataset.name}
                </h2>
                <p className="text-sm sm:text-base">{dataset.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-end pt-4 sm:pt-8">
        <Button variant="outline" size="xl" asChild className="w-full sm:w-fit">
          <Link href="/datasets">Explore more</Link>
        </Button>
      </div>
    </BaseSection>
  )
}
