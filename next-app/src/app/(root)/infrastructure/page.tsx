import { Metadata } from "next"
import Image from "next/image"
import { client } from "@/sanity/client"
import { allInfrastructureQuery } from "@/sanity/queries"
import { urlForImage } from "@/sanity/utils"

import { Infrastructure } from "@/types/sanity.types"
import BasePage from "@/components/base-page"
import BaseSection from "@/components/base-section"

const options = { next: { revalidate: 30 } }

export const metadata: Metadata = {
  title: "Infrastructure",
}

export default async function Page() {
  const infrastructure = await client.fetch<Infrastructure[]>(
    allInfrastructureQuery,
    {},
    options
  )

  return (
    <BasePage title="Infrastructure">
      <BaseSection>
        <div className="flex flex-col divide-y">
          {infrastructure.map((item) => (
            <div
              key={item._id}
              className="flex flex-col gap-6 py-6 md:flex-row"
            >
              <Image
                src={urlForImage(item.image)?.url() as string}
                alt={item.name || ""}
                width={300}
                height={300}
                className="aspect-square w-full rounded-xl object-cover md:size-[300px] md:w-fit"
              />
              <div>
                <h2 className="text-3xl font-bold">{item.name}</h2>
                <ul className="flex flex-col gap-1 pt-4">
                  {item.specifications?.map((specification) => (
                    <li key={specification._key}>
                      <h3 className="text-sm font-bold text-primary">
                        {specification.name}
                      </h3>
                      <ul>
                        {specification.values?.map((value) => (
                          <li key={value}>
                            <p className="text-sm text-muted-foreground">
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
    </BasePage>
  )
}
