"use client"
import { Button, Input } from "@nextui-org/react"
import React from "react"
import Image from "next/image"
import mail from "../_assets/images/gmail.png"

type Props = {}

export default function Verify({}: Props) {
  return (
    <section className="px-4 pt-9 font-lato">
      <div className="max-w-[580px] mx-auto flex flex-col justify-center items-center">
        <Image src={mail} height={64} width={64} alt="Email" />
        <h1 className="text-4xl font-bold  mb-3 mt-6 text-black ">
          Verify your email
        </h1>
        <p className=" text-body text-base mb-6 text-center">
          We’ve sent you an email with a link that you will need to click to
          verify your email. Kindly verify by clicking the link on your most
          recent verification email. This link will expire in 12 hours.
        </p>
        <Input
          label="Email"
          type="email"
          variant="bordered"
          placeholder="Enter your email"
          labelPlacement={"outside"}
          classNames={{
            label: "text-sm",
            inputWrapper: "bg-transparent shadow border border-[#EAECF0]",
            input: "text-base font-normal font-inter text-body]",
          }}
        />
        <Button
          className="mt-7 h-11 text-base font-bold rounded-2xl"
          color="primary"
          fullWidth
        >
          Resend verification email
        </Button>
      </div>
    </section>
  )
}
