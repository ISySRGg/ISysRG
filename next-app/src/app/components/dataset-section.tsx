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
      <article className="prose">
        <p>
          Explore a curated collection of medical imaging and signal datasets
          designed to support research in medical interpretation and analysis.
        </p>
      </article>
      <ul className="mt-4 grid grid-cols-3 gap-6">
        {datasets.map((dataset) => (
          <li key={dataset._id}>
            <Link
              href={`datasets/${dataset.slug?.current}`}
              className="group flex gap-4 border bg-neutral-50 p-4 transition-all hover:border-primary/40 hover:bg-primary/10"
            >
              <Image
                src={urlForImage(dataset.image)?.url() as string}
                alt=""
                height={400}
                width={400}
                className="size-20 object-cover"
              />
              <div>
                <h2 className="text-xl font-bold transition-colors group-hover:text-primary">
                  {dataset.name}
                </h2>
                <p>{dataset.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-end pt-8">
        <Button variant="outline" size="xl" asChild>
          <Link href="/datasets">Explore more</Link>
        </Button>
      </div>
    </BaseSection>
  )
}
