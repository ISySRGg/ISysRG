import { Metadata } from "next"
import Image from "next/image"
import { client } from "@/sanity/client"
import { allInfrastructureQuery } from "@/sanity/queries"
import { urlForImage } from "@/sanity/utils"

import { Infrastructure } from "@/types/sanity.types"
import BaseSection from "@/components/base-section"
import PortableTextComponent from "@/app/components/portable-text-component"

const options = { next: { revalidate: 30 } }

export const metadata: Metadata = {
  title: "Infrastructure",
  description: "Explore our infrastructure on intelligent systems.",
}

export default async function Page() {
  const infrastructurez = await client.fetch<Infrastructure[]>(
    allInfrastructureQuery,
    {},
    options
  )

  const infrastructures = infrastructurez.filter(
    (infrastructure) => infrastructure.type == "Infrastructure"
  )

  const means = infrastructurez.filter(
    (infrastructure) => infrastructure.type == "Means"
  )

  return (
    <main>
      <header className="container flex flex-col items-center pt-16 text-center md:pt-32">
        <div className="font-heading">
          <p className="text-sm uppercase text-neutral-600 md:text-base">
            ISys Research Group
          </p>
          <h1 className="text-5xl font-medium md:text-7xl">Infrastructure</h1>
        </div>
        <p className="max-w-prose pt-4 text-lg md:pt-8 md:text-2xl">
          Meet the dedicated members of our research team, organized to foster
          collaboration and innovation.
        </p>
      </header>
      <BaseSection>
        <div className="flex flex-col gap-10 md:gap-20">
          {infrastructures.map((item) => (
            <div
              key={item._id}
              className="flex flex-col-reverse items-center gap-8 rounded-xl bg-gray-100 px-4 py-4 odd:md:flex-row-reverse odd:md:justify-end odd:md:pr-10 even:md:flex-row even:md:justify-end even:md:pl-10"
            >
              <div>
                <h2 className="font-heading text-xl font-semibold md:text-2xl">
                  {item.name}
                </h2>
                <article className="prose prose-sm pt-4 md:prose-base">
                  <PortableTextComponent value={item.description} />
                </article>
              </div>
              <Image
                src={urlForImage(item.image)?.url() as string}
                alt={item.name || ""}
                width={600}
                height={600}
                className="aspect-video w-full rounded-xl object-cover md:size-[300px] md:w-fit"
              />
            </div>
          ))}
        </div>
        <div className="grid gap-10 pt-10 md:grid-cols-3 md:pt-40">
          {means.map((item) => (
            <div
              key={item._id}
              className="flex flex-col gap-2 rounded-xl bg-gray-100 p-4"
            >
              <Image
                src={urlForImage(item.image)?.url() as string}
                alt={item.name || ""}
                width={300}
                height={300}
                className="aspect-square w-full rounded-xl object-cover"
              />
              <div>
                <h2 className="font-bold">{item.name}</h2>
                <ul className="columns-2 gap-4 pt-1">
                  {item.specifications?.map((specification) => (
                    <li
                      key={specification._key}
                      className="break-inside-avoid py-1"
                    >
                      <h3 className="text-xs font-medium text-primary">
                        {specification.name}
                      </h3>
                      <ul>
                        {specification.values?.map((value) => (
                          <li key={value}>
                            <p className="text-xs text-muted-foreground">
                              {value}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </BaseSection>
    </main>
  )
}
