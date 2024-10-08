"use client"
import Nav from "@nextdaysite/ui/nav-bar"
import React from "react"
import { navLinks } from "../_util/data"
import RightComponent from "./RightComponent"
import { usePathname } from "next/navigation"

type Props = {}

const menuItems = [
  {
    label: "Home",
    route: "/welcome",
  },
  {
    label: "About",
    route: "#",
  },
  {
    label: "Solution",
    route: "#",
  },
  {
    label: "Sign In",
    route: "#",
  },
  {
    label: "Sign Up",
    route: "/signup",
  },
]

export default function NavBar({}: Props) {
  const pathname = usePathname()
  return (
    <Nav
      navLinks={navLinks}
      RightComponent={<RightComponent />}
      activeLink={pathname}
      menuItems={menuItems}
    />
  )
}
