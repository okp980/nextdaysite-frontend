"use client";
import { Button, ButtonProps } from "@nextui-org/react";

export default function ({ ...rest }: ButtonProps) {
  return <Button className="font-bold font-inter" radius="full" {...rest} />;
}
