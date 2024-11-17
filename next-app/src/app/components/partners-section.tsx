import Image from "next/image"
import { client } from "@/sanity/client"
import { allPartnerQuery, partnersSectionQuery } from "@/sanity/queries"
import { urlForImage } from "@/sanity/utils"

import { Partner, PartnersSectionQueryResult } from "@/types/sanity.types"
import BaseSection from "@/components/base-section"

const options = { next: { revalidate: 30 } }

export default async function PartnersSection() {
  const partnersSectionQueryResult =
    await client.fetch<PartnersSectionQueryResult>(
      partnersSectionQuery,
      {},
      options
    )

  const partnersSection = partnersSectionQueryResult?.partnersSection

  const partners = await client.fetch<Partner[]>(allPartnerQuery, {}, options)

  return (
    <BaseSection
      title={partnersSection?.title}
      subtitle={partnersSection?.subtitle}
      headerAlign="center"
    >
      <div className="flex flex-wrap items-center justify-center gap-10 pt-10">
        {partners.map((partner) => (
          <Image
            key={partner._id}
            src={urlForImage(partner?.image)?.url() as string}
            alt={partner.name || ""}
            width={300}
            height={300}
            className="h-20 w-auto"
          />
        ))}
      </div>
    </BaseSection>
  )
}
