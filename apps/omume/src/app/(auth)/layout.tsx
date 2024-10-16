import React, { PropsWithChildren } from "react"
import Nav from "@nextdaysite/ui/nav-bar"

type Props = {}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <div className="fixed left-0 w-full z-10">
        <Nav />
      </div>
      {children}
    </div>
  )
}
