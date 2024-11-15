import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/client"
import { activitiesSectionQuery } from "@/sanity/queries"
import { urlForImage } from "@/sanity/utils"
import { PortableText } from "next-sanity"

import { ActivitiesSectionQueryResult } from "@/types/sanity.types"
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
          {activitiesSection?.highlightedActivities &&
            activitiesSection?.highlightedActivities.map((activity) => (
              <CarouselItem
                key={activity._id}
                className="sm:basis-2/4 lg:basis-1/4"
              >
                <figure>
                  <Image
                    src={urlForImage(activity.image)?.url() as string}
                    alt=""
                    width={600}
                    height={600}
                    className="aspect-square rounded object-cover"
                  />
                  <figcaption className="mt-4">
                    <h3 className="text-xl font-medium">{activity.title}</h3>
                    <article className="prose">
                      <p className="text-muted-foreground">
                        {activity.description?.substring(0, 60)}
                        {(activity.description?.length || 0) >= 60 && "..."}
                      </p>
                    </article>
                  </figcaption>
                </figure>
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
