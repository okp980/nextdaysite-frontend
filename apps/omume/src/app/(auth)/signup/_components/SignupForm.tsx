"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React, { ReactElement, useState } from "react";
import Google from "../../assets/svg/Google";
import Facebook from "../../assets/svg/Facebook";
import Apple from "../../assets/svg/Apple";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../util/schema";
import PasswordCheck from "./PasswordCheck";
import { useDetailsStore } from "../../util/store";
import axios from "axios";
import { signIn } from "next-auth/react";
import { Role, User } from "@/app/util/types/user";

type Props = {};

export default function SignupForm({}: Props) {
  const [step, setStep] = useState<1 | 2>(1);
  const [isVisible, setIsVisible] = React.useState(false);
  const updateDetails = useDetailsStore((state) => state.setDetails);
  const [error, setError] = useState<any>(null);

  const router = useRouter();

  // Form 1
  const {
    control: controlOne,
    handleSubmit: handleSubmitOne,
    formState: { isValid: isValidOne },
  } = useForm({
    defaultValues: { email: "" },
    resolver: zodResolver(registerSchema.pick({ email: true })),
    mode: "onTouched",
  });

  // Form 2
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { isValid, dirtyFields, isSubmitting },
    setValue,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      phoneNumber: "",
      fullName: "",
      role: "",
    },
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const toggleVisibility = () => setIsVisible(!isVisible);
  const signInWithGoogleOnClick = () => {};
  const signInWithFacebookOnClick = () => {};
  const signInWithAppleOnClick = () => {};

  const onSubmitFormOne = (data: any) => {
    setValue("email", data.email);
    setStep(2);
  };

  const onSubmitFormTwo = async (data: any) => {
    const user = {
      first_name: data?.fullName.split(" ")[0],
      last_name: data?.fullName.split(" ")[1],
      email: data?.email,
      phone: data?.phoneNumber,
      "Auth Type": "Password",
      password: data?.password,
      role: data?.role,
    };
    try {
      setError(null);
      const res = await axios.post<{ data: User }>("/v1/auth/register", user, {
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      });
      await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: true,
        redirectTo: `/onboarding/${res?.data.data.role === Role.USER ? "user/interest" : "business/profile"}`,
      });
    } catch (error: any) {
      setError(error.response?.data);
    }
  };
  return (
    <section className="flex flex-col gap-5 justify-center items-center">
      <Card
        className="max-w-[560px] font-lato p-5"
        // @ts-ignore
        classNames={{
          base: ["bg-transparent lg:bg-white shadow-none lg:shadow-md"],
        }}
      >
        <CardHeader className="flex-col items-start ">
          <p className="font-medium text-base">Step {step} of 2</p>
          <p className="text-[32px] font-bold text-black">
            {step === 1 ? "Create an account" : "Fill in your details."}
          </p>
        </CardHeader>
        <CardBody>
          {step == 1 && (
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

              <form onSubmit={handleSubmitOne(onSubmitFormOne)}>
                <Controller
                  name="email"
                  control={controlOne}
                  render={({ field, fieldState }) => (
                    <Input
                      {...field}
                      label="Email*"
                      type="email"
                      variant="bordered"
                      placeholder="Enter your email"
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
                <Button
                  className="w-full mt-7 h-11 text-base font-bold rounded-2xl"
                  type="submit"
                  color={isValidOne ? "primary" : "default"}
                  isDisabled={!isValidOne}
                >
                  Sign up with Email
                </Button>
              </form>
            </div>
          )}
          {step == 2 && (
            <form onSubmit={handleSubmit(onSubmitFormTwo)}>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    label="Email*"
                    type="email"
                    variant="bordered"
                    placeholder="Enter your email"
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
                name="fullName"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    label="Full Name*"
                    type="text"
                    variant="bordered"
                    placeholder="Enter your full name"
                    labelPlacement={"outside"}
                    classNames={{
                      label: "text-sm",
                      mainWrapper: "mb-5",
                      inputWrapper:
                        "bg-transparent shadow border border-[#EAECF0] ",
                      input: "text-base font-normal font-inter text-body]",
                    }}
                    isInvalid={!!fieldState.error?.message}
                    errorMessage={fieldState.error?.message}
                  />
                )}
              />
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    label="Phone number*"
                    type="text"
                    {...register("phoneNumber")}
                    variant="bordered"
                    placeholder="Enter your phone number"
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
                name="role"
                control={control}
                render={({ field }) => (
                  <Select
                    label="Role*"
                    labelPlacement="outside"
                    placeholder="How do you want to use Omume"
                    {...field}
                    classNames={{
                      mainWrapper: ["mb-5 font-lato"],
                      trigger: ["border border-[#EAECF0] radius-2xl"],
                      label: [" text-small mb-4"],
                      description: ["text-base"],
                    }}
                    variant="bordered"
                  >
                    <SelectItem key={"user"} value={"user"}>
                      User
                    </SelectItem>
                    <SelectItem key={"business"} value={"business"}>
                      Business
                    </SelectItem>
                  </Select>
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

              {dirtyFields.password && (
                <div className="font-inter font-medium mt-2 text-sm space-y-4">
                  <p className="text-black">Create a password that:</p>
                  <PasswordCheck password={watch("password")} type="length" />
                  <PasswordCheck password={watch("password")} type="case" />
                  <PasswordCheck
                    password={watch("password")}
                    type="special_char"
                  />
                </div>
              )}
              {error && (
                <p className="my-5 text-sm text-danger-500">{error.message}</p>
              )}
              <Button
                className="w-full mt-7 h-11 text-base font-bold rounded-2xl"
                color={isValid ? "primary" : "default"}
                isDisabled={!isValid}
                isLoading={isSubmitting}
                type="submit"
              >
                Continue
              </Button>
            </form>
          )}
        </CardBody>
        <CardFooter>
          <p className="font-lato text-sm text-center">
            By continuing with Google, Apple, or Email, you agree to Omume’s
            <Link
              className="text-primary underline underline-offset-2"
              href="#"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              className="text-primary underline underline-offset-2"
              href="#"
            >
              Privacy Policy
            </Link>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
}
