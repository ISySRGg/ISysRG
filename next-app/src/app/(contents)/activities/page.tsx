import Image from "next/image"
import { client } from "@/sanity/client"
import { allActivityQuery } from "@/sanity/queries"
import { urlForImage } from "@/sanity/utils"

import { Activity } from "@/types/sanity.types"
import BasePage from "@/components/base-page"
import BaseSection from "@/components/base-section"

const options = { next: { revalidate: 30 } }

export default async function Page() {
  const activities = await client.fetch<Activity[]>(
    allActivityQuery,
    {},
    options
  )

  return (
    <BasePage title="Activities">
      <BaseSection>
        <div className="column-1 gap-8 md:columns-2">
          {activities.map((activity) => (
            <figure
              key={activity._id}
              className="flex break-inside-avoid flex-col py-4"
            >
              <Image
                src={urlForImage(activity.image)?.url() as string}
                alt=""
                width={600}
                height={600}
                className="w-full rounded bg-neutral-200 object-cover"
              />
              <figcaption className="mt-2">
                <h3 className="text-xl font-medium">{activity.title}</h3>
                <article className="prose">
                  <p className="text-muted-foreground">
                    {activity.description}
                  </p>
                </article>
              </figcaption>
            </figure>
          ))}
        </div>
      </BaseSection>
    </BasePage>
  )
}
