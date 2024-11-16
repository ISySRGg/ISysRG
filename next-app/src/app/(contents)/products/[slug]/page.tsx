import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { client } from "@/sanity/client"
import { productQuery } from "@/sanity/queries"
import { resolveOpenGraphImage, urlForImage } from "@/sanity/utils"
import { CircleCheck } from "lucide-react"
import { PortableText } from "next-sanity"

import { Product } from "@/types/sanity.types"
import BasePage from "@/components/base-page"
import BaseSection from "@/components/base-section"

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
    <BasePage title={product.name || ""} subtitle="Product">
      <BaseSection>
        <Image
          src={urlForImage(product.image)?.url() as string}
          alt=""
          width={800}
          height={800}
        />

        <div className="mt-10">
          <article className="md:prose-3xl prose prose-2xl tracking-tight">
            <p>{product.description}</p>
          </article>

          <div className="pt-6">
            <h2 className="text-xl font-medium text-primary">
              Product Features
            </h2>
            <ul className="grid gap-4 pt-4 sm:grid-cols-2">
              {product.features?.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-1 text-base md:text-lg"
                >
                  <CircleCheck className="size-[1.3em] text-primary" />{" "}
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="pt-10 text-xl font-medium text-primary">Details</h2>

          <article className="prose prose-base pt-4 md:prose-lg">
            <PortableText
              value={product.details || []}
              components={portableTextComponents}
            />
          </article>
        </div>
      </BaseSection>
    </BasePage>
  )
}
