import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/client"
import { allProductsQuery } from "@/sanity/queries"
import { urlForImage } from "@/sanity/utils"
import { CircleCheck } from "lucide-react"

import { Product } from "@/types/sanity.types"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BaseSection from "@/components/base-section"

const options = { next: { revalidate: 30 } }

export default async function ProductsSection() {
  const products = await client.fetch<Product[]>(allProductsQuery, {}, options)

  return (
    <BaseSection
      title="Our Products"
      subtitle="AI Solutions for Diagnostic Confidence"
      headerAlign="center"
      className="bg-gradient-to-b from-neutral-900/5 to-transparent to-20%"
    >
      <Tabs
        defaultValue={products[0]._id}
        className="mt-10 flex flex-col items-center"
      >
        <TabsList>
          {products.map((product) => (
            <TabsTrigger key={product._id} value={product._id}>
              <h2>{product.name}</h2>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-10">
          {products.map((product) => (
            <TabsContent
              key={product._id}
              value={product._id}
              className="grid grid-cols-2 items-start gap-14"
            >
              <Image
                src={urlForImage(product.image)?.url() as string}
                alt=""
                height={720}
                width={1280}
              />

              <div>
                <article className="prose prose-2xl tracking-tight">
                  <p>{product.description}</p>
                </article>

                <ul className="grid grid-cols-2 gap-4 pt-6">
                  {product.features?.map((feature) => (
                    <li key={feature} className="flex items-center gap-1">
                      <CircleCheck className="text-primary" /> {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-8">
                  <Button variant="outline" size="xl" asChild>
                    <Link href={`/products/${product.slug?.current}`}>
                      More details
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </BaseSection>
  )
}
