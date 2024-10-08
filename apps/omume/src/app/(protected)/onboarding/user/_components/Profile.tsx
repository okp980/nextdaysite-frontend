"use client";
import Button from "@nextdaysite/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import { Select, SelectItem } from "@nextui-org/react";

type Props = {};

const countries = [
  { key: "1", label: "United States" },
  { key: "2", label: "United Kingdom" },
  { key: "3", label: "Canada" },
];

export default function Profile({}: Props) {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/");
  };
  return (
    <div>
      <Select
        label="Country*"
        labelPlacement="outside"
        placeholder="Choose country"
        classNames={{
          mainWrapper: ["mt-12 font-lato"],
          trigger: ["border border-[#E4E7EC] radius-2xl h-[50px]"],
          label: [" text-small mb-4"],
        }}
        variant="bordered"
      >
        {countries.map((country) => (
          <SelectItem key={country.key}>{country.label}</SelectItem>
        ))}
      </Select>
      <Select
        label="State*"
        labelPlacement="outside"
        placeholder="Choose country"
        classNames={{
          mainWrapper: ["mt-5 font-lato"],
          trigger: ["border border-[#E4E7EC] radius-2xl h-[50px]"],
          label: [" text-small mb-4"],
        }}
        variant="bordered"
      >
        {countries.map((country) => (
          <SelectItem key={country.key}>{country.label}</SelectItem>
        ))}
      </Select>
      <Select
        label="City*"
        labelPlacement="outside"
        placeholder="Choose country"
        classNames={{
          mainWrapper: ["mt-5 font-lato"],
          trigger: ["border border-[#E4E7EC] radius-2xl h-[50px]"],
          label: [" text-small mb-4"],
        }}
        variant="bordered"
      >
        {countries.map((country) => (
          <SelectItem key={country.key}>{country.label}</SelectItem>
        ))}
      </Select>
      <Select
        label="Timezone*"
        labelPlacement="outside"
        placeholder="Choose country"
        classNames={{
          mainWrapper: ["mt-5 font-lato"],
          trigger: ["border border-[#E4E7EC] radius-2xl h-[50px]"],
          label: [" text-small mb-4"],
        }}
        variant="bordered"
      >
        {countries.map((country) => (
          <SelectItem key={country.key}>{country.label}</SelectItem>
        ))}
      </Select>
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
