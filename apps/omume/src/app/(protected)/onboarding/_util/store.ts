import { create } from "zustand"
import { devtools } from "zustand/middleware"

type Progress = {
  step: number
  setStep: (amount: number) => void
  reset: () => void
}

export const useOnboardingProgressStore = create<Progress>()(
  devtools(
    (set) => ({
      step: 0,
      setStep: (amount) => set(() => ({ step: amount })),
      reset: () => set(() => ({ step: 0 })),
    }),
    { name: "progressStore" }
  )
)
