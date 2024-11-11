import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/client"
import { datasetsSectionQuery } from "@/sanity/queries"
import { urlForImage } from "@/sanity/utils"
import { PortableText } from "next-sanity"

import { DatasetsSectionQueryResult } from "@/types/sanity.types"
import { Button } from "@/components/ui/button"
import BaseSection from "@/components/base-section"

const options = { next: { revalidate: 30 } }

export default async function DatasetSection() {
  const datasetsSectionQueryResult =
    await client.fetch<DatasetsSectionQueryResult>(
      datasetsSectionQuery,
      {},
      options
    )

  const datasetsSection = datasetsSectionQueryResult?.datasetsSection

  return (
    <BaseSection
      title={datasetsSection?.title}
      subtitle={datasetsSection?.subtitle}
    >
      {datasetsSection?.description && (
        <article className="prose prose-sm md:prose-base">
          <PortableText value={datasetsSection?.description} />
        </article>
      )}
      <ul className="mt-4 grid gap-2 lg:grid-cols-3">
        {datasetsSection?.featuredDatasets &&
          datasetsSection?.featuredDatasets.map((dataset) => (
            <li key={dataset._id}>
              <Link
                href={`datasets/${dataset.slug?.current}`}
                className="group flex gap-4 rounded border bg-neutral-50 p-4 transition-all hover:border-primary/40 hover:bg-primary/10"
              >
                <Image
                  src={urlForImage(dataset.image)?.url() as string}
                  alt=""
                  height={80}
                  width={80}
                  className="size-[68px] rounded object-cover lg:size-[80px]"
                />
                <div>
                  <h2 className="font-bold transition-colors group-hover:text-primary sm:text-xl">
                    {dataset.name}
                  </h2>
                  <p className="text-sm sm:text-base">
                    {dataset.shortDescription}
                  </p>
                </div>
              </Link>
            </li>
          ))}
      </ul>

      <div className="flex justify-end pt-4 lg:pt-8">
        <Button variant="outline" size="xl" asChild className="w-full sm:w-fit">
          <Link href="/datasets">Explore more</Link>
        </Button>
      </div>
    </BaseSection>
  )
}
