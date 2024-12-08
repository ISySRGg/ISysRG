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
      id="about"
      title={aboutSection?.title}
      subtitle={aboutSection?.subtitle}
      headerAlign="center"
    >
      <div className="mt-10 flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-20">
        <Image
          src={
            urlForImage(aboutSection?.image)
              ?.width(800)
              .height(800)
              .url() as string
          }
          alt="About us"
          width={800}
          height={800}
          className="size-[200px] rounded-lg sm:size-[300px]"
        />
        <div className="flex flex-col gap-4">
          <article className="prose prose-xl md:prose-2xl">
            <h3 hidden>About</h3>
            {aboutSection?.content && (
              <PortableText value={aboutSection?.content} />
            )}
          </article>
          <ul className="flex gap-8">
            <li>
              <Button variant="link" size="xl" className="p-0" asChild>
                <Link href="/team">
                  Research team <ArrowRight />
                </Link>
              </Button>
            </li>

            <li>
              <Button variant="link" size="xl" className="p-0" asChild>
                <Link href="/infrastructure">
                  Infrastructure <ArrowRight />
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </BaseSection>
  )
}
