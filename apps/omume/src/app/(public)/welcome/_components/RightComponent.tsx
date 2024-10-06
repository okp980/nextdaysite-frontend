"use client"
import Button from "@nextdaysite/ui/button"
import ThemeSwitch from "@nextdaysite/ui/theme-switch"
import React from "react"
import { useRouter } from "next/navigation"

type Props = {}

export default function RightComponent({}: Props) {
  const router = useRouter()
  return (
    <div className="flex gap-3">
      <ThemeSwitch />
      <Button variant="bordered">Login</Button>
      <Button color="primary" onClick={() => router.push("/signup")}>
        Sign Up
      </Button>
    </div>
  )
}
