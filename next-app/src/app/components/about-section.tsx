import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/client"
import { aboutSectionQuery } from "@/sanity/queries"
import { urlForImage } from "@/sanity/utils"
import { ArrowRight } from "lucide-react"
import { PortableText } from "next-sanity"

import { AboutSectionQueryResult } from "@/types/sanity.types"
import { Button } from "@/components/ui/button"
import BaseSection from "@/components/base-section"

const options = { next: { revalidate: 30 } }

export default async function AboutSection() {
  const aboutSectionQueryResult = await client.fetch<AboutSectionQueryResult>(
    aboutSectionQuery,
    {},
    options
  )

  const aboutSection = aboutSectionQueryResult?.aboutSection

  return (
    <BaseSection
      title="About Us"
      subtitle="Research, Medical Interpretation"
      headerAlign="center"
    >
      <div className="mt-10 flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-20">
        <Image
          src={
            urlForImage(aboutSection?.image)
              ?.width(300)
              .height(300)
              .url() as string
          }
          alt=""
          width={300}
          height={300}
          className="size-[200px] sm:size-[300px]"
        />
        <div className="flex flex-col gap-4">
          <article className="prose prose-xl md:prose-2xl">
            {aboutSection?.content && (
              <PortableText value={aboutSection?.content} />
            )}
          </article>
          <div className="flex gap-8">
            <Button variant="link" size="xl" className="p-0" asChild>
              <Link href="/team">
                Research team <ArrowRight />
              </Link>
            </Button>

            <Button variant="link" size="xl" className="p-0" asChild>
              <Link href="/infrastructure">
                Infrascructure <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </BaseSection>
  )
}
