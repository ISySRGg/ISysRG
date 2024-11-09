import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import BaseSection from "@/components/base-section"

export default function AboutSection() {
  return (
    <BaseSection
      title="About Us"
      subtitle="Research, Medical Interpretation"
      headerAlign="center"
    >
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-20">
        <Image
          src="/assets/images/artificial-intelligence.png"
          alt=""
          width={300}
          height={300}
          className="size-[200px] sm:size-[300px]"
        />
        <div className="flex flex-col items-center">
          <article className="prose prose-xl sm:prose-2xl">
            <p>
              The research primarily involves developing software, applications,
              and systems to support medical interpretation, with a focus on
              medical signal and image processing, medical pattern recognition,
              and medical record data mining techniques.
            </p>
            <div className="flex gap-8">
              <Button variant="link" size="xl" className="p-0" asChild>
                <Link href="/team">
                  Research team <ArrowRight />
                </Link>
              </Button>

              <Button variant="link" size="xl" className="p-0" asChild>
                <Link href="/infrascructure">
                  Infrascructure <ArrowRight />
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </BaseSection>
  )
}
