"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { urlForImage } from "@/sanity/utils"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Dataset } from "@/types/sanity.types"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel"

interface Props {
  dataset: Dataset
}

export default function VideoTemp({ dataset }: Props) {
  const pathname = usePathname()

  return (
    <Carousel opts={{ loop: true }}>
      <CarouselContent>
        {dataset.images?.map((image) => (
          <CarouselItem key={image._key} className="md:basis-1/4">
            <Image
              src={urlForImage(image)?.url() as string}
              alt={dataset.name || ""}
              width={200}
              height={200}
              className="mx-auto aspect-square rounded object-cover"
            />
          </CarouselItem>
        ))}

        {pathname == "/datasets/infant-fetal-dataset" && (
          <CarouselItem className="md:basis-1/4">
            <video controls className="mx-auto h-[200px]">
              <source src="/videojantung.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </CarouselItem>
        )}
      </CarouselContent>
      <CarouselControl />
    </Carousel>
  )
}

function CarouselControl() {
  const { scrollPrev, canScrollPrev, scrollNext, canScrollNext } = useCarousel()

  return (
    <div className="mt-4 flex justify-between">
      <Button
        size="sm"
        variant="ghost"
        disabled={!canScrollPrev}
        onClick={scrollPrev}
      >
        <ArrowLeft /> Prev
      </Button>
      <Button
        size="sm"
        variant="ghost"
        disabled={!canScrollNext}
        onClick={scrollNext}
      >
        Next <ArrowRight />
      </Button>
    </div>
  )
}
