"use client"
import Button from "@nextdaysite/ui/button"
import React from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

type Props = {}

export default function RightComponent({}: Props) {
  const router = useRouter()
  return (
    <div className="flex gap-2">
      <Button
        variant="light"
        className="font-normal w-20"
        as={Link}
        href="/signin"
      >
        Sign in
      </Button>
      <Button color="primary" className="w-32" as={Link} href="/signup">
        Sign Up
      </Button>
    </div>
  )
}
