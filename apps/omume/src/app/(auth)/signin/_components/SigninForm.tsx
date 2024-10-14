"use client"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react"
import React, { useState } from "react"
import Google from "../../assets/svg/Google"
import Facebook from "../../assets/svg/Facebook"
import Apple from "../../assets/svg/Apple"
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, registerSchema } from "../../util/schema"
import { signIn, useSession } from "next-auth/react"
import { Session } from "next-auth"

type Props = {
  session: Session | null
}

export default function SigninForm({ session }: Props) {
  const [isVisible, setIsVisible] = React.useState(false)
  const router = useRouter()

  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm({
    defaultValues: { identifier: "", password: "" },
    resolver: zodResolver(loginSchema),
  })

  const toggleVisibility = () => setIsVisible(!isVisible)
  const signInWithGoogleOnClick = () => {}
  const signInWithFacebookOnClick = () => {}
  const signInWithAppleOnClick = () => {}

  const onSubmit = async (data: any) => {
    const res: any = await signIn("credentials", {
      email: data.identifier,
      password: data.password,
      redirect: false,
    })

    if (res.ok) {
      const callbackUrl =
        // @ts-ignore
        session?.user?.data?.user?.role === "user"
          ? "/user/home"
          : "/bussiness/home"
      router.push(callbackUrl)
    }
  }

  return (
    <section className="">
      <Card
        className=" font-lato px-5 py-8"
        // @ts-ignore
        classNames={{
          base: ["bg-transparent lg:bg-white shadow-none lg:shadow-md"],
        }}
      >
        <div>
          <div className="flex flex-col gap-4 ">
            <Button
              onClick={signInWithGoogleOnClick}
              variant="bordered"
              className="border shadow-sm text-base font-bold text-[#344054]"
            >
              <Google /> Sign in with Google
            </Button>
            <Button
              onClick={signInWithFacebookOnClick}
              variant="bordered"
              className="border shadow-sm text-base font-bold text-[#344054]"
            >
              <Facebook /> Sign in with Facebook
            </Button>
            <Button
              onClick={signInWithAppleOnClick}
              variant="bordered"
              className="border shadow-sm text-base font-bold text-[#344054] mb-5"
            >
              <Apple /> Sign in with Apple
            </Button>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="identifier"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    label="Email or Phone number*"
                    type="text"
                    variant="bordered"
                    placeholder="Enter your email or phone number"
                    labelPlacement={"outside"}
                    classNames={{
                      label: "text-sm",
                      mainWrapper: "mb-5",
                      inputWrapper:
                        "bg-transparent shadow border border-[#EAECF0]",
                      input: "text-base font-normal font-inter text-body]",
                    }}
                    isInvalid={!!fieldState.error?.message}
                    errorMessage={fieldState.error?.message}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    label="Password*"
                    variant="bordered"
                    {...field}
                    placeholder="Enter your password"
                    labelPlacement={"outside"}
                    isInvalid={!!fieldState.error}
                    classNames={{
                      label: "text-sm",
                      mainWrapper: "mb-5",
                      inputWrapper:
                        "bg-transparent shadow border border-[#EAECF0]",
                      input: "text-base font-normal font-inter text-body]",
                    }}
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                        aria-label="toggle password visibility"
                      >
                        {isVisible ? (
                          <IoEyeOffOutline className="text-base pointer-events-none" />
                        ) : (
                          <IoEyeOutline className="text-base pointer-events-none" />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                  />
                )}
              />
              <Button
                className="w-full mt-7 h-11 text-base font-bold rounded-2xl"
                type="submit"
                color={isValid ? "primary" : "default"}
                isDisabled={!isValid || isSubmitting}
                isLoading={isSubmitting}
              >
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </Card>
    </section>
  )
}
