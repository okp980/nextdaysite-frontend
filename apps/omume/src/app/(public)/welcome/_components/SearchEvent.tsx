"use client";
import { Card, CardBody, Divider, Input } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { IoSearchSharp } from "react-icons/io5";
import Button from "@nextdaysite/ui/button";

type Props = {};

export default function SearchEvent({}: Props) {
  return (
    <Card className=" max-w-[700px] rounded-full">
      <CardBody className="flex flex-row gap-2">
        <Input
          placeholder="Search for event"
          className="flex-1"
          classNames={{
            inputWrapper: "bg-transparent shadow-none",
            input: "text-base font-medium font-inter text-body",
          }}
          startContent={<FiSearch size={24} />}
        />
        <Divider orientation="vertical" />
        <Input
          placeholder="Los Angeles"
          className="flex-1"
          classNames={{
            inputWrapper: "bg-transparent shadow-none",
            input: "text-base font-medium font-inter text-body",
          }}
          startContent={<SlLocationPin size={24} />}
        />
        <Button
          isIconOnly
          startContent={<IoSearchSharp size={24} />}
          radius="full"
          color="primary"
        />
      </CardBody>
    </Card>
  );
}
