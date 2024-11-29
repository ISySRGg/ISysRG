import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { client } from "@/sanity/client"
import { activityQuery, moreActivitiesQuery } from "@/sanity/queries"
import { resolveOpenGraphImage, urlForImage } from "@/sanity/utils"
import { PortableText, toPlainText } from "next-sanity"
import { BlogPosting, WithContext } from "schema-dts"

import { Activity, MoreActivitiesQueryResult } from "@/types/sanity.types"
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

  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: activity.title,
    name: activity.title,
    description: toPlainText(activity.body || []).substring(0, 120),
    datePublished: activity._createdAt,
    dateModified: activity._updatedAt,
    author: {
      "@type": "Organization",
      "@id": "https://isysrg.com",
      name: "ISys Research Group",
      logo: {
        "@type": "ImageObject",
        "@id": "https://isysrg.com/isysrg.png",
        url: "https://isysrg.com/isysrg.png",
        width: "188",
        height: "206",
      },
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://isysrg.com",
      name: "ISys Research Group",
      logo: {
        "@type": "ImageObject",
        "@id": "https://isysrg.com/isysrg.png",
        url: "https://isysrg.com/isysrg.png",
        width: "188",
        height: "206",
      },
    },
    image: {
      "@type": "ImageObject",
      "@id": urlForImage(activity.image)?.url() as string,
      url: urlForImage(activity.image)?.url() as string,
      width: "800",
      height: "450",
    },
    url: `https://isysrg.com/activities/${activity.slug?.current}`,
    wordCount: toPlainText(activity.body || []).length,
  }

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
          className="w-full object-cover"
        />
      ),
    },
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="pt-10 md:pt-20">
        <div className="container text-center">
          <time
            dateTime={activity.date || ""}
            className="font-medium text-primary md:text-lg"
          >
            Posted {formatDate(new Date(activity.date || 0))}
          </time>
          <h1 className="mt-4 text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl">
            {activity.title}
          </h1>
        </div>
        <div className="sm:px-4">
          <Image
            src={urlForImage(activity.image)?.url() as string}
            alt={activity.title || ""}
            width={1600}
            height={900}
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
        <aside>
          <p className="text-xl font-medium text-primary md:text-2xl">
            More Activities
          </p>

          <ul className="flex flex-col divide-y">
            {moreActivities.map((activity) => (
              <li key={activity._id} className="py-4 md:py-5">
                <Link href={`/activities/${activity.slug?.current}`}>
                  <p className="font-medium hover:underline md:text-lg">
                    {truncateString(activity.title || "", 140)}
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
