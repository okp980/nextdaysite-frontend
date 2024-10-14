"use client"
import React from "react"
import Link from "next/link"
import SigninForm from "./SigninForm"
import { Session } from "next-auth"

type Props = { session: Session | null }

export default function Signin({ session }: Props) {
  return (
    <section className="flex flex-col gap-5 justify-center items-center">
      <SigninForm session={session} />
      <p className="font-lato text-sm mb-20">
        Don't have an account?{" "}
        <Link
          className="text-primary underline underline-offset-2"
          href="/signup"
        >
          Sign up
        </Link>
      </p>
    </section>
  )
}
