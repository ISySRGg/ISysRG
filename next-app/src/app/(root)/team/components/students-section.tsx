"use client"

import { urlForImage } from "@/sanity/utils"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Researcher } from "@/types/sanity.types"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel"
import StudentResearcherFigure from "@/components/student-researcher-figure"

interface Props {
  batch: number
  students: Researcher[]
}

export default function StudentsSection({ batch, students }: Props) {
  return (
    <div className="flex w-full flex-col items-center py-4 md:py-8">
      <div>
        <h2 className="text-2xl font-medium">Batch {batch} Students</h2>
      </div>
      <div className="mt-10 w-full">
        <Carousel>
          <CarouselContent>
            {students.map((student) => (
              <CarouselItem key={student._id} className="md:basis-1/2">
                <StudentResearcherFigure
                  name={student.name || ""}
                  division={student.division || ""}
                  thesisTitle={student.thesisTitle || ""}
                  image={{
                    src: urlForImage(student.image)?.url() as string,
                    alt: "",
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselControl />
        </Carousel>
      </div>
    </div>
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
