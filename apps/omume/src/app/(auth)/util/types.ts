import { z } from "zod"
import { registerSchema } from "./schema"
import { Role } from "@/app/util/types/user"

export type Register = z.infer<typeof registerSchema>

export type DetailsState = {
  details: Register | null
}

export type DetailsAction = {
  setDetails: (details: DetailsState["details"]) => void
  resetDetails: () => void
}
export type RoleState = {
  role: Role | null
}

export type RoleAction = {
  setRole: (role: RoleState["role"]) => void
  resetRole: () => void
}
export type InterestsState = {
  interests: string[]
}

export type InterestsAction = {
  setInterests: (Interests: InterestsState["interests"]) => void
  resetInterests: () => void
}
export type BioDataState = {
  bioData: any
}

export type BioDataAction = {
  setBioData: (bioData: BioDataState["bioData"]) => void
  resetBioData: () => void
}
