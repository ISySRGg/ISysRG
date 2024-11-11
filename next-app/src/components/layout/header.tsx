import React from "react"
import { client } from "@/sanity/client"
import { featuredDatasetsQuery, featuredProductsQuery } from "@/sanity/queries"
import { NavigationItem } from "@/types"

import {
  FeaturedDatasetsQueryResult,
  FeaturedProductsQueryResult,
} from "@/types/sanity.types"

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
    },
    {
      label: "Publication",
      href: "publication",
      children: [
        {
          label: "International Journals",
          href: "/publication/journals",
        },
        {
          label: "International Conference (Proceedings)",
          href: "/publication/proceedings",
        },
        {
          label: "Intelectual Property Rights (IPR)",
          href: "/publication/ipr",
        },
        {
          label: "Books",
          href: "/publication/books",
        },
      ],
    },
    { label: "Activity", href: "/activities" },
  ]

  return (
    <header className="border-y-2 border-white/10">
      <div className="container flex h-14 items-center justify-between sm:h-fit">
        <div className="flex items-center gap-6">
          <ISysLogo />
        </div>

        <DesktopNavigation navigation={navigation} />
        <MobileNavigation navigation={navigation} />
      </div>
    </header>
  )
}
