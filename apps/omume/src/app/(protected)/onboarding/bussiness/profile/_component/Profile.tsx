"use client";
import Button from "@nextdaysite/ui/button";
import { Input, Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function Profile({}: Props) {
  const router = useRouter();
  const handleContinue = () => {
    router.push("/");
  };
  return (
    <div>
      <Input
        label="Bussiness name*"
        type="text"
        variant="bordered"
        placeholder="Enter your bussiness name"
        labelPlacement={"outside"}
        classNames={{
          label: "text-sm",
          inputWrapper:
            "bg-transparent shadow-none border border-[#EAECF0] mt-10",
          input: "text-base font-normal font-inter text-body]",
        }}
      />
      <Textarea
        label="Description*"
        type="email"
        variant="bordered"
        placeholder="Enter a description"
        labelPlacement={"outside"}
        classNames={{
          label: "text-sm",
          inputWrapper: "bg-transparent shadow-none border border-[#EAECF0]",
          input: "text-base font-normal font-inter text-body h-4xl]",
          base: ["mt-6"],
        }}
      />
      <Input
        label="Website URL*"
        type="text"
        variant="bordered"
        placeholder="Enter your website url"
        labelPlacement={"outside"}
        classNames={{
          label: "text-sm",
          inputWrapper:
            "bg-transparent shadow-none border border-[#EAECF0] h-4xl mt-6",
          input: "text-base font-normal font-inter text-body h-4xl]",
        }}
      />
      <Input
        label="Contact info*"
        type="phone number"
        variant="bordered"
        placeholder="Enter your contact info"
        labelPlacement={"outside"}
        classNames={{
          label: "text-sm",
          inputWrapper:
            "bg-transparent shadow-none border border-[#EAECF0] mt-6",
          input: "text-base font-normal font-inter text-body]",
        }}
      />
      <div className="max-w-[208px] mt-12">
        <Button
          color="primary"
          size="lg"
          className="h-12 rounded-2xl text-sm lg:text-base"
          radius="md"
          fullWidth
          onClick={handleContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
