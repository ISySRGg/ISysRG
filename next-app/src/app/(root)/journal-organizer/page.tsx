import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ComEngAppSection() {
  return (
    <section className="w-full bg-gradient-to-b from-black via-neutral-900 to-black py-20 text-white">

      {/* main container */}
      <div className="container mx-auto px-6">

        {/* text container */}
        <div className="max-w-6xl">

          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Journal Management
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Computer Engineering and Applications Journal (ComEngApp)
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-300 text-justify">
            The Computer Engineering and Applications Journal (ComEngApp) 
            (E-ISSN: 2252-5459; P-ISSN: 2252-4274) publishes original papers 
            in computer engineering with a strong emphasis on AI-driven 
            engineering and applications. The journal focuses on the 
            development and implementation of Artificial Intelligence (AI), 
            machine learning, deep learning, intelligent systems, computer 
            vision, natural language processing, robotics, embedded systems, 
            and the Internet of Things (IoT) to solve complex engineering 
            and real-world problems.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-400 text-justify">
            ComEngApp particularly encourages interdisciplinary research 
            that applies AI-driven technologies in areas such as smart 
            engineering systems, healthcare technologies and medical 
            decision support, environmental monitoring, climate and 
            sustainability analysis, smart agriculture, and disaster 
            prediction and management.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-400 text-justify">
            The Computer Engineering and Applications (ComEngApp) Journal 
            continues to demonstrate its growing academic influence as 
            reflected in its citation performance. Based on the latest 
            citation data extracted from the Scopus citing documents report, 
            articles published in ComEngApp have been cited more than 
            <span className="font-semibold text-white"> 390 times </span>
            by international scholarly publications.
          </p>

          <div className="mt-10">
            <Button
              asChild
              className="bg-orange-500 text-white hover:bg-orange-600"
            >
              <Link
                href="https://comengapp.unsri.ac.id/index.php/comengapp/index"
                target="_blank"
              >
                Visit ComEngApp Website
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

        </div>
      </div>

    </section>
  )
}