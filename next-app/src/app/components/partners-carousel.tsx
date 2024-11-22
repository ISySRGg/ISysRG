"use client"

import Image from "next/image"
import { urlForImage } from "@/sanity/utils"
import Autoplay from "embla-carousel-autoplay"

import { Partner } from "@/types/sanity.types"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import HoverableCard from "@/components/hoverable-card"

interface Props {
  partners: Partner[]
}

export default function PartnersCarousel({ partners }: Props) {
  return (
    <Carousel plugins={[Autoplay({ delay: 3000 })]} opts={{ loop: true }}>
      <CarouselContent>
        {partners.map((partner) => (
          <CarouselItem key={partner._id} className="basis-auto">
            <HoverableCard className="flex-col items-center">
              <Image
                src={urlForImage(partner?.image)?.url() as string}
                alt={partner.name || ""}
                width={300}
                height={300}
                className="mx-auto h-10 w-auto md:h-20"
              />
              <p className="mt-2 text-center text-xs text-muted-foreground md:text-sm">
                {partner.name}
              </p>
            </HoverableCard>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}