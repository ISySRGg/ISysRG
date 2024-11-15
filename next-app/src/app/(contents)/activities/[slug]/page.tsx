import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/client"
import { activityQuery, moreActivityQuery } from "@/sanity/queries"
import { urlForImage } from "@/sanity/utils"
import { PortableText } from "next-sanity"

import { Activity } from "@/types/sanity.types"

const options = { next: { revalidate: 30 } }

interface Props {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: Props) {
  const activity = await client.fetch<Activity>(
    activityQuery,
    await params,
    options
  )

  const moreActivities = await client.fetch<Activity[]>(
    moreActivityQuery,
    { skip: activity._id, limit: 4 },
    options
  )

  const portableTextComponents = {
    types: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      image: ({ value }: { value: any }) => (
        <Image
          src={urlForImage(value)?.url() as string}
          alt=""
          width={400}
          height={400}
          className="w-full object-cover"
        />
      ),
    },
  }

  return (
    <main>
      <header className="pt-10 md:pt-20">
        <div className="container text-center">
          <p className="font-medium text-primary md:text-lg">
            Published:{" "}
            {new Date(activity.publishedAt || 0).toLocaleDateString()}
          </p>
          <h1 className="mt-4 text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl">
            {activity.title}
          </h1>
        </div>
        <div className="sm:px-4">
          <Image
            src={urlForImage(activity.image)?.url() as string}
            alt=""
            width={2000}
            height={2000}
            className="mx-auto mt-10 aspect-video w-full max-w-6xl object-cover sm:aspect-[20/9] sm:rounded"
          />
        </div>
      </header>
      <section className="container grid pt-10 lg:grid-cols-3">
        <div className="col-span-2">
          {activity.body && (
            <article className="prose md:prose-lg">
              <PortableText
                value={activity.body}
                components={portableTextComponents}
              />
            </article>
          )}
        </div>
        <div>
          <p className="text-xl font-medium text-primary md:text-2xl">
            More Activities
          </p>

          <ul className="flex flex-col divide-y">
            {moreActivities.map((activity) => (
              <li key={activity._id} className="py-4 md:py-6">
                <Link href={`/activities/${activity.slug?.current}`}>
                  <p className="font-medium md:text-lg">{activity.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
