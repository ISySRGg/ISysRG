import { Metadata } from "next"
import { client } from "@/sanity/client"
import { allResearchersQuery } from "@/sanity/queries"
import { urlForImage } from "@/sanity/utils"

import { Researcher } from "@/types/sanity.types"
import { researcherRoles } from "@/lib/constants"
import BasePage from "@/components/base-page"
import BaseSection from "@/components/base-section"
import ResearcherFigure from "@/components/researcher-figure"

const options = { next: { revalidate: 30 } }

export const metadata: Metadata = {
  title: "Team",
  description: "Meet our team on intelligent systems.",
}

export default async function Page() {
  const researchers = await client.fetch<Researcher[]>(
    allResearchersQuery,
    {},
    options
  )

  const head = researchers.filter((researcher) => researcher.role == "head")[0]

  const secretary = researchers.filter(
    (researcher) => researcher.role == "secretary"
  )[0]

  const researchAssistants = researchers.filter(
    (researcher) => researcher.role == "researchAssistant"
  )

  const members = researchers.filter(
    (researcher) => researcher.role == "member"
  )

  const students = researchers.filter(
    (researcher) => researcher.role == "student"
  )

  const groupedStudentsByBatch = students.reduce(
    (acc, person) => {
      if (!acc[person.batch || 0]) {
        acc[person.batch || 0] = []
      }
      acc[person.batch || 0].push(person)
      return acc
    },
    {} as Record<number, Researcher[]>
  )

  return (
    <BasePage title="Research Team">
      <BaseSection>
        <div className="flex w-full flex-col items-center divide-y">
          <div className="flex w-full flex-row justify-center gap-4 py-4 md:py-8">
            <ResearcherFigure
              name={head.name || ""}
              role={researcherRoles.head}
              image={{ src: urlForImage(head.image)?.url() as string, alt: "" }}
            />
          </div>
          <div className="flex w-full flex-row justify-center gap-4 py-4 md:py-8">
            <ResearcherFigure
              name={secretary.name || ""}
              role={researcherRoles.secretary}
              image={{
                src: urlForImage(secretary.image)?.url() as string,
                alt: "",
              }}
            />
          </div>
          <div className="flex w-full flex-row flex-wrap justify-center gap-6 py-4 md:py-8">
            {researchAssistants.map((assistant) => (
              <ResearcherFigure
                key={assistant._id}
                name={assistant.name || ""}
                role={researcherRoles.researchAssistant}
                image={{
                  src: urlForImage(assistant.image)?.url() as string,
                  alt: "",
                }}
              />
            ))}
            {members.map((member) => (
              <ResearcherFigure
                key={member._id}
                name={member.name || ""}
                role={researcherRoles.member}
                image={{
                  src: urlForImage(member.image)?.url() as string,
                  alt: "",
                }}
              />
            ))}
          </div>
          {Object.keys(groupedStudentsByBatch).map((batch) => (
            <div
              key={batch}
              className="flex w-full flex-col items-center py-4 md:py-8"
            >
              <div className="rounded bg-neutral-100 px-4 py-1">
                <p className="text-lg font-medium">Batch {batch} Students</p>
              </div>
              <div className="mt-4 flex w-full flex-row flex-wrap justify-center gap-4">
                {groupedStudentsByBatch[Number(batch)].map((student) => (
                  <ResearcherFigure
                    key={student._id}
                    name={student.name || ""}
                    image={{
                      src: urlForImage(student.image)?.url() as string,
                      alt: "",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </BaseSection>
    </BasePage>
  )
}
