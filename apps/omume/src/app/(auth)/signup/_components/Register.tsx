"use client";
import React from "react";
import Link from "next/link";
import SignupForm from "./SignupForm";

type Props = {};

export default function Register({}: Props) {
  return (
    <section className="flex flex-col gap-5 justify-center items-center">
      <SignupForm />
      <p className="font-lato text-sm mb-20">
        Already signed up?{" "}
        <Link
          className="text-primary underline underline-offset-2"
          href="/signin"
        >
          Go to login
        </Link>
      </p>
    </section>
  );
}
