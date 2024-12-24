import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { client } from "@/sanity/client"
import { activityQuery, moreActivitiesQuery } from "@/sanity/queries"
import { resolveOpenGraphImage, urlForImage } from "@/sanity/utils"
import { Download, File } from "lucide-react"
import { PortableText, toPlainText } from "next-sanity"

import { Activity, MoreActivitiesQueryResult } from "@/types/sanity.types"
import { getActivityJsonLd } from "@/lib/json-ld"
import { formatDate, truncateString } from "@/lib/utils"

import Menu from "./components/menu"

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

  const moreActivities = await client.fetch<MoreActivitiesQueryResult>(
    moreActivitiesQuery,
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
          className="w-full rounded object-cover"
        />
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      video: ({ value }: { value: any }) => (
        <video controls className="w-full rounded">
          <source src={value.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      file: ({ value }: { value: any }) => (
        <Link
          href={value.url}
          className="flex overflow-hidden rounded bg-primary/10 no-underline"
          target="_blank"
        >
          <div className="mr-2 flex items-center bg-primary/20 px-4">
            <File className="text-primary" />
          </div>
          <div className="flex items-center justify-between py-2 pl-2 pr-4">
            <span className="text-sm">{value.name}</span>

            <Download className="ml-4 flex-none text-primary" />
          </div>
        </Link>
      ),
    },
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getActivityJsonLd(activity)),
        }}
      />
      <header className="sm:pt-10 md:pt-20">
        <div className="sm:px-4">
          <Image
            src={urlForImage(activity.image)?.url() as string}
            alt={activity.title || ""}
            width={1600}
            height={900}
            className="mx-auto aspect-video w-full max-w-6xl object-cover sm:aspect-[20/9] sm:rounded"
          />
        </div>
        <div className="container flex flex-col border-b pb-4">
          <h1 className="mt-6 font-heading text-xl font-semibold md:mt-10 md:text-2xl lg:text-3xl xl:text-4xl">
            {activity.title}
          </h1>
          <div className="flex items-center justify-between pt-2 md:pt-4">
            <div>
              <time
                dateTime={activity.date || ""}
                className="text-sm font-medium text-primary md:text-lg"
              >
                {formatDate(new Date(activity.date || 0))}
              </time>
              <p className="text-xs italic text-muted-foreground sm:hidden">
                Posted {formatDate(new Date(activity._createdAt || 0))}
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <p className="hidden text-xs italic text-muted-foreground sm:block md:text-sm">
                Posted {formatDate(new Date(activity._createdAt || 0))}
              </p>
              <Menu />
            </div>
          </div>
        </div>
      </header>
      <section className="container grid pt-6 md:gap-10 md:pt-10 lg:grid-cols-3">
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
        <aside>
          <p className="pt-8 font-heading text-xl font-medium text-primary md:text-2xl lg:pt-0">
            More Activities
          </p>

          <ul className="flex flex-col divide-y">
            {moreActivities.map((activity) => (
              <li key={activity._id} className="py-3 md:py-4">
                <Link href={`/activities/${activity.slug?.current}`}>
                  <p className="font-medium hover:underline md:text-lg">
                    {truncateString(activity.title || "", 120)}
                  </p>
                </Link>
                <time
                  dateTime={activity.date || ""}
                  className="text-sm text-primary"
                >
                  {formatDate(new Date(activity.date || 0))}
                </time>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </main>
  )
}
