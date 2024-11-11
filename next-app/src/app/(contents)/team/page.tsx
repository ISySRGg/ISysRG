import { client } from "@/sanity/client"
import { allResearchersQuery } from "@/sanity/queries"
import { urlForImage } from "@/sanity/utils"

import { Researcher } from "@/types/sanity.types"
import { researcherRoles } from "@/lib/constants"
import BasePage from "@/components/base-page"
import ResearcherFigure from "@/components/researcher-figure"

const options = { next: { revalidate: 30 } }

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

  return (
    <BasePage title="Research Team">
      <section className="flex w-full flex-col items-center divide-y">
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
        <div className="flex w-full flex-row flex-wrap justify-center gap-4 py-4 md:py-8">
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
        <div className="flex w-full flex-row flex-wrap justify-center gap-4 py-4 md:py-8">
          {students.map((student) => (
            <ResearcherFigure
              key={student._id}
              name={student.name || ""}
              role={researcherRoles.student}
              image={{
                src: urlForImage(student.image)?.url() as string,
                alt: "",
              }}
            />
          ))}
        </div>
      </section>
    </BasePage>
  )
}
