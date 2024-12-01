import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { client } from "@/sanity/client"
import { productQuery } from "@/sanity/queries"
import { resolveOpenGraphImage, urlForImage } from "@/sanity/utils"
import { CircleCheck } from "lucide-react"
import { PortableText } from "next-sanity"

import { Product } from "@/types/sanity.types"
import BaseSection from "@/components/base-section"

// import StatisticsSection from "./components/statistics-section"

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
  const product = await client.fetch<Product>(
    productQuery,
    await params,
    options
  )
  const previousImages = (await parent).openGraph?.images || []
  const ogImage = resolveOpenGraphImage(product.image)

  return {
    title: product.name,
    description: (product.description || "").substring(0, 120),
    openGraph: {
      images: ogImage ? ogImage : previousImages,
    },
  } satisfies Metadata
}

export default async function Page({ params }: Props) {
  const product = await client.fetch<Product>(
    productQuery,
    await params,
    options
  )

  if (!product?._id) {
    return notFound()
  }

  const portableTextComponents = {
    types: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      image: ({ value }: { value: any }) => (
        <Image
          src={urlForImage(value)?.url() as string}
          alt=""
          width={600}
          height={600}
          className="w-full"
        />
      ),
    },
  }

  return (
    <main>
      <header className="container flex flex-col items-center pt-16 text-center md:pt-32">
        <p className="text-sm uppercase text-neutral-600 md:text-base">
          Product
        </p>
        <h1 className="text-5xl font-medium md:text-7xl">{product.name}</h1>
        <p className="max-w-prose pt-4 text-lg md:pt-8 md:text-2xl">
          {product.description}
        </p>
      </header>
      <BaseSection>
        {product.youtube ? (
          <iframe
            src={product.youtube}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="aspect-video w-full rounded-xl"
          ></iframe>
        ) : (
          <Image
            src={urlForImage(product.image)?.url() as string}
            alt={product.name || ""}
            width={900}
            height={900}
            className="mx-auto"
          />
        )}
      </BaseSection>
      <BaseSection
        title="Product Features"
        headerAlign="center"
        className="bg-gradient-to-b from-neutral-950 to-neutral-900 text-white"
      >
        <ul className="grid gap-2 pt-4 sm:grid-cols-2 md:gap-4">
          {product.features?.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-1 rounded border border-neutral-700 p-4 text-base md:gap-4 md:p-6 md:text-xl"
            >
              <CircleCheck className="size-[1.3em] text-primary" /> {feature}
            </li>
          ))}
        </ul>
      </BaseSection>
      {/* <StatisticsSection /> */}
      <BaseSection title="Details">
        <div className="gap-8 md:columns-2 md:pt-4">
          <article className="prose prose-base">
            <PortableText
              value={product.details || []}
              components={portableTextComponents}
            />
          </article>
        </div>
      </BaseSection>
    </main>
  )
}
