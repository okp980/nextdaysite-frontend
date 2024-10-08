"use client";
import Button from "@nextdaysite/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {};

export default function RightComponent({}: Props) {
  const router = useRouter();
  return (
    <div className="flex gap-2">
      <Button variant="light" className="font-normal w-20">
        Sign in
      </Button>
      <Button
        color="primary"
        onClick={() => router.push("/signup")}
        className="w-32"
      >
        Sign Up
      </Button>
    </div>
  );
}
