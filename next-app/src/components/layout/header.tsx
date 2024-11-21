import React from "react"
import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/client"
import { featuredDatasetsQuery, featuredProductsQuery } from "@/sanity/queries"
import { NavigationItem } from "@/types"

import {
  FeaturedDatasetsQueryResult,
  FeaturedProductsQueryResult,
} from "@/types/sanity.types"
import { tw } from "@/lib/utils"

import ISysLogo from "../isys-logo"
import DesktopNavigation from "./desktop-navigation"
import MobileNavigation from "./mobile-navigation"

const options = { next: { revalidate: 30 } }

export default async function Header() {
  const featuredProductsQueryResult =
    await client.fetch<FeaturedProductsQueryResult>(
      featuredProductsQuery,
      {},
      options
    )
  const featuredDatasetsQueryResult =
    await client.fetch<FeaturedDatasetsQueryResult>(
      featuredDatasetsQuery,
      {},
      options
    )

  const featuredProducts =
    featuredProductsQueryResult?.productsSection?.featuredProducts || []
  const featuredDatasets =
    featuredDatasetsQueryResult?.datasetsSection?.featuredDatasets || []

  const navigation: NavigationItem[] = [
    {
      label: "About Us",
      children: [
        {
          label: "Research Team",
          href: "/team",
        },
        {
          label: "Infrastructure",
          href: "/infrastructure",
        },
      ],
      className: tw`lg:w-[500px]`,
    },
    {
      label: "Products",
      children: featuredProducts?.map((product) => {
        return {
          label: product.name,
          href: `/products/${product.slug?.current}`,
          description: product.shortDescription,
        } as NavigationItem
      }),
      footer: {
        label: "View all",
        href: "/products",
      },
      className: tw`[&>ul]:lg:grid-cols-2`,
    },
    {
      label: "Datasets",
      children: featuredDatasets?.map((dataset) => {
        return {
          label: dataset.name,
          href: `/datasets/${dataset.slug?.current}`,
          description: dataset.shortDescription,
        } as NavigationItem
      }),
      footer: {
        label: "View all",
        href: "/datasets",
      },
      className: tw`[&>ul]:lg:grid-cols-2`,
    },
    {
      label: "Publication",
      href: "publication",
      children: [
        {
          label: "International Journals",
          href: "/journals",
        },
        {
          label: "International Conference (Proceedings)",
          href: "/proceedings",
        },
        {
          label: "Intelectual Property Rights (IPR)",
          href: "/ipr",
        },
        {
          label: "Books",
          href: "/books",
        },
      ],
      className: tw`lg:w-[600px]`,
    },
    { label: "Activities", href: "/activities" },
  ]

  return (
    <header className="border-y-2 border-white/10">
      <div className="container flex h-14 items-center justify-between sm:h-fit">
        <div className="flex items-center divide-x-2 divide-neutral-500/50">
          <div className="pr-3 sm:pr-4">
            <Link href="https://unsri.ac.id">
              <Image
                src="/unsri.svg"
                alt="Unsri"
                width={44}
                height={44}
                className="size-9 object-contain sm:size-12"
              />
            </Link>
          </div>
          <div className="pl-3 sm:pl-4">
            <ISysLogo />
          </div>
        </div>

        <DesktopNavigation navigation={navigation} />
        <MobileNavigation navigation={navigation} />
      </div>
    </header>
  )
}
