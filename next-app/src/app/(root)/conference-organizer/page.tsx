import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ICAITechSection() {
  return (
    <section className="w-full bg-gradient-to-b from-black via-neutral-900 to-black py-20 text-white">
      {/* main container */}
      <div className="container mx-auto px-6">
        {/* text container */}
        <div className="max-w-6xl">
          <span className="text-sm font-semibold tracking-widest text-orange-500 uppercase">
            Conference Management
          </span>

          <h2 className="mt-4 text-4xl leading-tight font-bold md:text-4xl">
            International Conference on Artificial Intelligence & Technology
            (ICAITech)
          </h2>

          <p className="mt-8 text-justify text-lg leading-relaxed text-gray-300">
            In addition to research and innovation, our research group also
            manages the International Conference on Artificial Intelligence and
            Technology (ICAITech). This annual conference serves as a global
            platform for researchers, academics, and industry professionals to
            present their latest findings, exchange ideas, and explore emerging
            technological advancementss.
          </p>

          <p className="mt-6 text-justify text-lg leading-relaxed text-gray-400">
            Through ICAITech, we oversee the full conference lifecycle —
            including call for papers, peer-review coordination, scientific
            sessions, keynote talks, and proceedings publication — ensuring
            academic excellence, international collaboration, and impactful
            contributions to the global research community.
          </p>

          <div className="mt-10">
            <Button
              asChild
              className="bg-orange-500 text-white hover:bg-orange-600"
            >
              <Link href="https://icaitech.org/" target="_blank">
                Visit ICAITech Website
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
