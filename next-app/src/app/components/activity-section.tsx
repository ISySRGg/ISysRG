import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/client"
import { activitiesSectionQuery, latestActivitiesQuery } from "@/sanity/queries"
import { urlForImage } from "@/sanity/utils"
import { PortableText } from "next-sanity"

import {
  ActivitiesSectionQueryResult,
  LatestActivitiesQueryResult,
} from "@/types/sanity.types"
import { formatDate, truncateString } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import BaseSection from "@/components/base-section"

const options = { next: { revalidate: 30 } }

export default async function ActivitySection() {
  const activitiesSectionQueryResult =
    await client.fetch<ActivitiesSectionQueryResult>(
      activitiesSectionQuery,
      {},
      options
    )

  const latestActivities = await client.fetch<LatestActivitiesQueryResult>(
    latestActivitiesQuery,
    { limit: 4 },
    options
  )

  const activitiesSection = activitiesSectionQueryResult?.activitiesSection

  return (
    <BaseSection
      title={activitiesSection?.title}
      subtitle={activitiesSection?.subtitle}
      headerAlign="center"
      className="bg-gradient-to-b from-neutral-950 to-neutral-900 text-white"
    >
      {activitiesSection?.description && (
        <div className="flex justify-center">
          <article className="prose prose-sm prose-invert max-w-2xl text-center md:prose-base">
            <PortableText value={activitiesSection?.description} />
          </article>
        </div>
      )}
      <Carousel className="pt-6 lg:pt-14">
        <CarouselContent>
          {latestActivities &&
            latestActivities.map((activity) => (
              <CarouselItem
                key={activity._id}
                className="sm:basis-2/4 lg:basis-1/4"
              >
                <Link
                  href={`/activities/${activity.slug?.current}`}
                  className="group block h-full overflow-hidden rounded border border-neutral-700 p-4 transition-all hover:border-primary/40 hover:bg-primary/10"
                >
                  <figure>
                    <Image
                      src={urlForImage(activity.image)?.url() as string}
                      alt={activity.title || ""}
                      width={300}
                      height={300}
                      className="aspect-square w-full rounded object-cover"
                    />
                    <figcaption className="mt-4">
                      <time
                        dateTime={activity.date || ""}
                        className="text-sm text-primary"
                      >
                        {formatDate(new Date(activity.date || 0))}
                      </time>
                      <h3 className="font-medium group-hover:underline">
                        {truncateString(activity.title || "")}
                      </h3>
                    </figcaption>
                  </figure>
                </Link>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="sm:hidden" />
        <CarouselNext className="sm:hidden" />
      </Carousel>
      <div className="flex justify-center pt-6 lg:pt-14">
        <Button
          variant="secondary"
          size="xl"
          asChild
          className="w-full sm:w-fit"
        >
          <Link href="/activities">View more activities</Link>
        </Button>
      </div>
    </BaseSection>
  )
}
