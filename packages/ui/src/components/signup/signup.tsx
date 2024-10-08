"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import React, { ReactElement, useState } from "react";
import Google from "../../assets/svg/Google";
import Facebook from "../../assets/svg/Facebook";
import Apple from "../../assets/svg/Apple";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

type Props = {
  stepOneTitle?: string;
  stepOneActionBtnLabel?: string;
  stepOneActionBtnOnClick?: () => void;
  stepTwoTitle?: string;
  signInWithGoogleBtnLabel?: string;
  signInWithFacebookBtnLabel?: string;
  signInWithAppleBtnLabel?: string;
  signInWithAppleIcon?: ReactElement;
  signInWithFacebookIcon?: ReactElement;
  signInWithGoogleIcon?: ReactElement;
  signInWithGoogleOnClick?: () => void;
  signInWithFacebookOnClick?: () => void;
  signInWithAppleOnClick?: () => void;
  footer: ReactElement;
  stepTwoActionBtnLabel?: string;
  stepTwoActionBtnOnClick: () => void;
};

export default function Signup({
  stepOneTitle = "Create an account",
  stepTwoTitle = "Fill in your details.",
  signInWithGoogleIcon = <Google />,
  signInWithGoogleBtnLabel = "Sign in with Google",
  signInWithGoogleOnClick,
  signInWithFacebookIcon = <Facebook />,
  signInWithFacebookBtnLabel = "Sign in with Facebook",
  signInWithFacebookOnClick,
  signInWithAppleIcon = <Apple />,
  signInWithAppleBtnLabel = "Sign in with Apple",
  stepOneActionBtnLabel = "Sign up with Email",
  stepTwoActionBtnLabel = "Continue",
  signInWithAppleOnClick,
  stepOneActionBtnOnClick,
  stepTwoActionBtnOnClick,
  footer,
}: Props) {
  const [step, setStep] = useState<1 | 2>(1);
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const handleSubmit = (e: any) => {
    if (step === 1) {
      stepOneActionBtnOnClick && stepOneActionBtnOnClick();
      setStep(2);
      return;
    }
    stepTwoActionBtnOnClick();
    console.log("clicked");
  };
  return (
    <Card className="max-w-[560px] font-lato p-5">
      <CardHeader className="flex-col items-start ">
        <p className="font-medium text-base">Step {step} of 2</p>
        <p className="text-[32px] font-bold text-black">
          {step === 1 ? stepOneTitle : stepTwoTitle}
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
              {signInWithGoogleIcon} {signInWithGoogleBtnLabel}
            </Button>
            <Button
              onClick={signInWithFacebookOnClick}
              variant="bordered"
              className="border shadow-sm text-base font-bold text-[#344054]"
            >
              {signInWithFacebookIcon} {signInWithFacebookBtnLabel}
            </Button>
            <Button
              onClick={signInWithAppleOnClick}
              variant="bordered"
              className="border shadow-sm text-base font-bold text-[#344054] mb-5"
            >
              {signInWithAppleIcon} {signInWithAppleBtnLabel}
            </Button>

            <Input
              label="Email*"
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
          </div>
        )}
        {step == 2 && (
          <div>
            <Input
              label="Email*"
              type="email"
              variant="bordered"
              placeholder="Enter your email"
              labelPlacement={"outside"}
              classNames={{
                label: "text-sm",
                inputWrapper:
                  "bg-transparent shadow border border-[#EAECF0] mb-5",
                input: "text-base font-normal font-inter text-body]",
              }}
            />
            <Input
              label="Full Name*"
              type="text"
              variant="bordered"
              placeholder="Enter your full name"
              labelPlacement={"outside"}
              classNames={{
                label: "text-sm",
                inputWrapper:
                  "bg-transparent shadow border border-[#EAECF0] mb-5",
                input: "text-base font-normal font-inter text-body]",
              }}
            />
            <Input
              label="Phone number*"
              type="text"
              variant="bordered"
              placeholder="Enter your phone number"
              labelPlacement={"outside"}
              classNames={{
                label: "text-sm",
                inputWrapper:
                  "bg-transparent shadow border border-[#EAECF0] mb-5",
                input: "text-base font-normal font-inter text-body]",
              }}
            />
            <Input
              label="Password*"
              variant="bordered"
              placeholder="Enter your password"
              labelPlacement={"outside"}
              classNames={{
                label: "text-sm",
                inputWrapper:
                  "bg-transparent shadow border border-[#EAECF0] mb-5",
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
          </div>
        )}
        <Button
          className="mt-7 h-11 text-base font-bold rounded-2xl"
          onClick={handleSubmit}
          color="primary"
        >
          {step === 1 ? stepOneActionBtnLabel : stepTwoActionBtnLabel}
        </Button>
      </CardBody>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
}
