import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ICAITechSection() {
  return (
    <div className="mt-28 w-full bg-gradient-to-b from-black via-neutral-900 to-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
          Conference Management
        </span>

        <h3 className="mt-4 text-3xl font-bold md:text-2xl">
          International Conference on Artificial Intelligence & Technology - ICAITech
        </h3>

        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-gray-300">
          In addition to research and innovation, our research group also manages
          the International Conference on Artificial Intelligence and Technology (ICAITech).
          This annual conference serves as a global platform for researchers,
          academics, and industry professionals to present their latest findings,
          exchange ideas, and explore emerging technological advancements.
        </p>

        <p className="mt-6 max-w-4xl leading-relaxed text-gray-400">
          Through ICAITech, we oversee the full conference lifecycle — including
          call for papers, peer-review coordination, scientific sessions,
          keynote talks, and proceedings publication — ensuring academic excellence,
          international collaboration, and impactful contributions to the global
          research community.
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
  )
}