"use client"
import React from "react"
import Link from "next/link"
import SigninForm from "./SigninForm"
import { Session } from "next-auth"

type Props = { session: Session | null }

export default function Signin({ session }: Props) {
  return (
    <section className="mx-auto max-w-[560px] pt-5">
      <SigninForm session={session} />
      <p className="font-lato text-sm mb-20 text-center mt-5">
        New to Omume?{" "}
        <Link
          className="text-primary underline underline-offset-2"
          href="/signup"
        >
          Create account
        </Link>
      </p>
    </section>
  )
}
