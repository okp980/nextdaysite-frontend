"use client"
import React from "react"
import Header from "../../_components/Header"

type Props = {}

export default function ContactHeader({}: Props) {
  return (
    <Header
      title="Contact list"
      description="Keep track of all contacts"
      buttonLabel="New Contact"
      onClick={() => {}}
    />
  )
}
