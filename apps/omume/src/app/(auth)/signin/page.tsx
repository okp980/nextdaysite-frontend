import React from "react"
import Signin from "./_components/Signin"
import { getSession } from "next-auth/react"
import { div } from "framer-motion/client"
import { auth } from "@/auth"

type Props = {}

export default async function Page({}: Props) {
  const session = await auth()
  return <Signin session={session} />
}
