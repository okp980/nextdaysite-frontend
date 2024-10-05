import { Button } from "@nextdaysite/ui/button"
import Image from "next/image"

export default function Welcome() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button
        appName="omume"
        className="bg-white text-red-800 px-5 py-3 rounded-sm"
      >
        Welcome
      </Button>
    </div>
  )
}
