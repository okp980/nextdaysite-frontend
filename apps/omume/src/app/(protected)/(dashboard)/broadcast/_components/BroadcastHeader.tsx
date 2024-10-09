"use client"
import React from "react"
import Header from "../../_components/Header"

type Props = {}

export default function BroadcastHeader({}: Props) {
  return (
    <Header
      title="Broadcast"
      description="Let’s help you create a new broadcast for your event."
      buttonLabel="Send"
      onClick={() => {}}
    />
  )
}
