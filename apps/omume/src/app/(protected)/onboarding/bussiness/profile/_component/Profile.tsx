"use client"
import Button from "@nextdaysite/ui/button"
import { Input, Textarea } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { useOnboardingProgressStore } from "../../../_util/store"
import {
  useDetailsStore,
  useInterestsStore,
  useRoleStore,
} from "@/app/(auth)/util/store"
import { Controller, useForm } from "react-hook-form"
import { onBoardBussinessSchema } from "../_util/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"

type Props = {}

export default function Profile({}: Props) {
  const updateProgressBar = useOnboardingProgressStore((state) => state.setStep)
  const { details } = useDetailsStore.getState()
  const { role } = useRoleStore.getState()
  const { interests } = useInterestsStore.getState()
  const [error, setError] = useState<any>(null)

  const router = useRouter()

  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid, dirtyFields, isSubmitting },
    setValue,
  } = useForm({
    defaultValues: { name: "", description: "", url: "", contact: "" },
    resolver: zodResolver(onBoardBussinessSchema),
  })

  useEffect(() => {
    if (dirtyFields.contact) {
      updateProgressBar(100)
      return
    }
    if (dirtyFields.url) {
      updateProgressBar(85)
      return
    }
    if (dirtyFields.description) {
      updateProgressBar(65)
      return
    }
    if (dirtyFields.name) {
      updateProgressBar(50)
      return
    }

    updateProgressBar(40)
  }, [
    dirtyFields.name,
    dirtyFields.description,
    dirtyFields.url,
    dirtyFields.contact,
  ])

  const handleContinue = async (data: any) => {
    const user = {
      first_name: details?.fullName.split(" ")[0],
      last_name: details?.fullName.split(" ")[1],
      email: details?.email,
      phone: details?.phoneNumber,
      "Auth Type": "Password",
      password: details?.password,
      "Google UUID": "",
      "Facebook UUID": "",
      "Apple UUID": "",
      "Profile Photo URL": "",
      Interests: interests,
      name: data.name,
      description: data.description,
      url: data.url,
      contact: data?.contact,
      Role: "Bussiness",
    }
    try {
      setError(null)
      const res = await axios.post("/v1/auth/register-admin", user, {
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      })
      router.push("/welcome")
    } catch (error: any) {
      setError(error.response?.data)
      console.log(error.response?.data)
    }
  }
  return (
    <form onSubmit={handleSubmit(handleContinue)}>
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <Input
            label="Bussiness name*"
            type="text"
            variant="bordered"
            placeholder="Enter your bussiness name"
            labelPlacement={"outside"}
            {...field}
            classNames={{
              label: "text-sm",
              inputWrapper:
                "bg-transparent shadow-none border border-[#EAECF0] mt-10",
              input: "text-base font-normal font-inter text-body]",
            }}
          />
        )}
      />
      {dirtyFields.name && (
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <Textarea
              label="Description*"
              variant="bordered"
              placeholder="Enter a description"
              labelPlacement={"outside"}
              {...field}
              classNames={{
                label: "text-sm",
                inputWrapper:
                  "bg-transparent shadow-none border border-[#EAECF0]",
                input: "text-base font-normal font-inter text-body h-4xl]",
                base: ["mt-6"],
              }}
            />
          )}
        />
      )}
      {dirtyFields.description && dirtyFields.name && (
        <Controller
          control={control}
          name="url"
          render={({ field }) => (
            <Input
              label="Website URL*"
              type="text"
              variant="bordered"
              placeholder="Enter your website url"
              labelPlacement={"outside"}
              {...field}
              classNames={{
                label: "text-sm",
                inputWrapper:
                  "bg-transparent shadow-none border border-[#EAECF0] h-4xl mt-6",
                input: "text-base font-normal font-inter text-body h-4xl]",
              }}
            />
          )}
        />
      )}
      {dirtyFields.name && dirtyFields.description && dirtyFields.url && (
        <Controller
          control={control}
          name="contact"
          render={({ field }) => (
            <Input
              label="Contact info*"
              type="phone number"
              variant="bordered"
              placeholder="Enter your contact info"
              labelPlacement={"outside"}
              {...field}
              classNames={{
                label: "text-sm",
                inputWrapper:
                  "bg-transparent shadow-none border border-[#EAECF0] mt-6",
                input: "text-base font-normal font-inter text-body]",
              }}
            />
          )}
        />
      )}
      {error && <p className="my-5 text-sm text-danger-500">{error.message}</p>}
      <div className="max-w-[208px] mt-12">
        <Button
          color={!isValid ? "default" : "primary"}
          size="lg"
          className="h-12 rounded-2xl text-sm lg:text-base"
          radius="md"
          isDisabled={!isValid}
          fullWidth
          type="submit"
          isLoading={isSubmitting}
        >
          Continue
        </Button>
      </div>
    </form>
  )
}
