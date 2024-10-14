import { z } from "zod"

export const onBoardUserSchema = z.object({
  country: z.string().min(1),
  state: z.string().min(1),
  city: z.string().min(1),
  timezone: z.string().min(1),
})
