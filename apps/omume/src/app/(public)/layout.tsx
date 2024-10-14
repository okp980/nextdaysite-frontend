import { PropsWithChildren } from "react"
import NavBar from "./welcome/_components/NavBar"

type Props = {}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <div className="fixed left-0 w-full z-10">
        <NavBar />
      </div>
      {children}
    </div>
  )
}
