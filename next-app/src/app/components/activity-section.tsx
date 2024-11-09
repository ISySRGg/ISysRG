import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/client"
import { allActivityQuery } from "@/sanity/queries"
import { urlForImage } from "@/sanity/utils"

import { Activity } from "@/types/sanity.types"
import { Button } from "@/components/ui/button"
import BaseSection from "@/components/base-section"

const options = { next: { revalidate: 30 } }

export default async function ActivitySection() {
  const activities = await client.fetch<Activity[]>(
    allActivityQuery,
    {},
    options
  )

  return (
    <BaseSection
      title="Our Activity"
      subtitle="Leading the Way in Intelligent Technology"
      headerAlign="center"
      className="bg-gradient-to-b from-neutral-950 to-neutral-900 text-white"
    >
      <div className="flex justify-center">
        <article className="prose prose-invert max-w-2xl text-center">
          <p>
            we are dedicated to advancing the field of intelligent systems
            through a variety of research and development activities. Our
            projects span multiple domains, from medical signal and image
            processing to data mining and pattern recognition, with a particular
            focus on applications that understand, reason, learn, and act
            intelligently.
          </p>
        </article>
      </div>
      <div className="grid grid-cols-4 gap-10 pt-14">
        {activities.map((activity) => (
          <figure key={activity._id}>
            <Image
              src={urlForImage(activity.image)?.url() as string}
              alt=""
              width={600}
              height={600}
              className="aspect-square object-cover"
            />
            <figcaption className="mt-4">
              <h3 className="text-xl font-medium">{activity.title}</h3>
              <article className="prose">
                <p className="text-muted-foreground">{activity.description}</p>
              </article>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="flex justify-center pt-14">
        <Button variant="secondary" size="xl" asChild>
          <Link href="/datasets">View more activity</Link>
        </Button>
      </div>
    </BaseSection>
  )
}
