import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { client } from "@/sanity/client"
import { activityQuery, moreActivityQuery } from "@/sanity/queries"
import { resolveOpenGraphImage, urlForImage } from "@/sanity/utils"
import { PortableText, toPlainText } from "next-sanity"

import { Activity } from "@/types/sanity.types"
import { formatDate, truncateString } from "@/lib/utils"

const options = { next: { revalidate: 30 } }

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params
  const activity = await client.fetch<Activity>(
    activityQuery,
    await params,
    options
  )
  const previousImages = (await parent).openGraph?.images || []
  const ogImage = resolveOpenGraphImage(activity.image)

  return {
    title: activity.title,
    description: toPlainText(activity.body || []).substring(0, 120),
    openGraph: {
      images: ogImage ? ogImage : previousImages,
    },
  } satisfies Metadata
}

export default async function Page(props: Props) {
  const params = await props.params
  const activity = await client.fetch<Activity>(activityQuery, params, options)

  const moreActivities = await client.fetch<Activity[]>(
    moreActivityQuery,
    { skip: activity._id, limit: 4 },
    options
  )

  if (!activity?._id) {
    return notFound()
  }

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
            {formatDate(new Date(activity.publishedAt || 0))}
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
              <li key={activity._id} className="py-2 md:py-4">
                <Link href={`/activities/${activity.slug?.current}`}>
                  <p className="font-medium hover:underline md:text-lg">
                    {truncateString(activity.title || "", 140)}
                  </p>
                </Link>
                <p className="text-sm text-primary">
                  {formatDate(new Date(activity.publishedAt || 0))}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
