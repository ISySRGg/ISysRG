import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/client"
import { allActivitiesQuery } from "@/sanity/queries"
import { urlForImage } from "@/sanity/utils"

import { Activity } from "@/types/sanity.types"
import { formatDate, truncateString } from "@/lib/utils"
import BasePage from "@/components/base-page"
import BaseSection from "@/components/base-section"
import HoverableCard from "@/components/hoverable-card"

const options = { next: { revalidate: 30 } }

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Stay updated with our latest events, workshops, and collaborations. Discover how we engage with the academic and professional community to advance research and applications in intelligent systems.",
}

export default async function Page() {
  const activities = await client.fetch<Activity[]>(
    allActivitiesQuery,
    {},
    options
  )

  return (
    <BasePage title="Activities">
      <BaseSection>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {activities.map((activity) => (
            <Link
              key={activity._id}
              href={`/activities/${activity.slug?.current}`}
            >
              <HoverableCard className="h-full">
                <figure key={activity._id} className="flex flex-col">
                  <div className="overflow-hidden rounded">
                    <Image
                      src={urlForImage(activity.image)?.url() as string}
                      alt={activity.title || ""}
                      width={600}
                      height={600}
                      className="aspect-video w-full rounded bg-neutral-200 object-cover transition-all group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-2">
                    <time
                      dateTime={activity.date || ""}
                      className="text-sm text-primary"
                    >
                      {formatDate(new Date(activity.date || 0))}
                    </time>
                    <h3 className="text-lg font-medium">
                      {truncateString(activity.title || "", 140)}
                    </h3>
                  </figcaption>
                </figure>
              </HoverableCard>
            </Link>
          ))}
        </div>
      </BaseSection>
    </BasePage>
  )
}
