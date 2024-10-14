import { z } from "zod"

export const onBoardBussinessSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  url: z.string().min(1),
  contact: z.string().min(1),
})
