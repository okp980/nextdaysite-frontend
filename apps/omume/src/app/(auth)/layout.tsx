import React, { PropsWithChildren } from "react"
import Nav from "@nextdaysite/ui/nav-bar"

type Props = {}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}
