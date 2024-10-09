"use client";
import Button from "@nextdaysite/ui/button";
import React from "react";

type Props = {
  title: string;
  description: string;
  buttonLabel: string;
  onClick: () => void;
};

export default function Header({
  title,
  description,
  buttonLabel,
  onClick,
}: Props) {
  return (
    <div className="font-lato lg:flex justify-between items-end mb-8">
      <div>
        <h1 className="text-3xl text-black  font-extrabold mb-2">{title}</h1>
        <p className="text-base font-medium text-[#475467]">{description}</p>
      </div>
      <Button
        startContent={"+"}
        onClick={() => onClick()}
        color="primary"
        radius="lg"
        className="font-medium h-11 capitalize"
      >
        {buttonLabel}
      </Button>
    </div>
  );
}
