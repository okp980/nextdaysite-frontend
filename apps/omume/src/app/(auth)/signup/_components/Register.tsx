"use client"
import Signup from "@nextdaysite/ui/signup"
import React from "react"
import Footer from "./Footer"
import { useRouter } from "next/navigation"
import Link from "next/link"

type Props = {}

export default function Register({}: Props) {
  const router = useRouter()
  return (
    <section className="flex flex-col gap-5 justify-center items-center">
      <Signup
        footer={<Footer />}
        stepTwoActionBtnOnClick={() => router.push("/verification")}
      />
      <p className="font-lato text-sm">
        Already signed up?{" "}
        <Link className="text-primary underline underline-offset-2" href="#">
          Go to login
        </Link>{" "}
      </p>
    </section>
  )
}
