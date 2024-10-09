"use client"
import React from "react"
import Header from "../../_components/Header"

type Props = {}

export default function EventsHeader({}: Props) {
  return (
    <Header
      title="Events"
      description="Let’s help you create a new broadcast for your event."
      buttonLabel="Create Event"
      onClick={() => {}}
    />
  )
}
