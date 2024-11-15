import Image from "next/image"
import { client } from "@/sanity/client"
import { activityQuery } from "@/sanity/queries"
import { urlForImage } from "@/sanity/utils"
import { PortableText } from "next-sanity"

import { Activity } from "@/types/sanity.types"
import BasePage from "@/components/base-page"
import BaseSection from "@/components/base-section"

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
  return (
    <BasePage title={activity.title || ""} subtitle="Activity">
      <BaseSection>
        <div className="max-w-prose">
          <Image
            src={urlForImage(activity.image)?.url() as string}
            alt=""
            width={600}
            height={600}
            className="aspect-video rounded object-cover"
          />
        </div>
        {activity.body && (
          <article className="prose prose-lg pt-10">
            <PortableText value={activity.body} />
          </article>
        )}
      </BaseSection>
    </BasePage>
  )
}
