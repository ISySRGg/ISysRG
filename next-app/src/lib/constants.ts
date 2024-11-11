import { Researcher } from "@/types/sanity.types"

export const researcherRoles: Record<
  NonNullable<Researcher["role"]>,
  string
> = {
  head: "Head of Isys Research Group",
  secretary: "Secretary",
  researchAssistant: "Research Assistant",
  member: "Member",
  student: "Student",
}
