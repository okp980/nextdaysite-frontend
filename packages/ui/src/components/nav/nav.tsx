"use client"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react"
import { ReactElement } from "react"
type Props = {
  navLinks?: { label: string; route: string }[]
  RightComponent?: ReactElement
  activeLink?: string
  isTransparent?: boolean
}

export default function Nav({ navLinks, RightComponent, activeLink }: Props) {
  return (
    <Navbar
      maxWidth="full"
      height={80}
      classNames={{
        brand: ["text-2xl font-fugaz text-primary"],
        base: "container mx-auto bg-transparent ",
      }}
    >
      <NavbarBrand>
        <p className="font-bold">omume</p>
      </NavbarBrand>
      {navLinks && (
        <NavbarContent justify="start">
          {navLinks?.map((navLink, index) => (
            <NavbarItem key={index} isActive={navLink.route === activeLink}>
              <Link
                href={navLink.route}
                {...{
                  color:
                    navLink.route !== activeLink ? "foreground" : undefined,
                }}
              >
                {navLink.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      )}
      {RightComponent && (
        <NavbarContent justify="end">{RightComponent}</NavbarContent>
      )}
    </Navbar>
  )
}
