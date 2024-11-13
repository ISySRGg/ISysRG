import { Researcher } from "@/types/sanity.types"

export const researcherRoles: Record<
  NonNullable<Researcher["role"]>,
  string
> = {
  head: "Head of ISys Research Group",
  secretary: "Secretary",
  researchAssistant: "Research Assistant",
  member: "Member",
  student: "Student",
}
