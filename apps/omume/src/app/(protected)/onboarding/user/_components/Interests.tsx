"use client";
import { Card, CardBody, Chip } from "@nextui-org/react";
import React, { useState } from "react";
import Interest from "../_assets/svg/Interest";
import CheckerFilled from "../../_assets/svg/CheckerFilled";
import CheckerEmpty from "../../_assets/svg/CheckerEmpty";
import { useRouter } from "next/navigation";
import Button from "@nextdaysite/ui/button";

type Props = {};

function Interests({}: Props) {
  const router = useRouter();
  const [actives, setActives] = useState<number[]>([]);
  const handleContinue = () => {
    router.push("/onboarding/user/profile");
  };
  const handleClick = (index: number) => {
    setActives((prev) => [...prev, index]);
  };
  return (
    <div>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
        {new Array(16).fill("").map((_, index) => (
          <Card
            key={index}
            isHoverable
            isPressable
            shadow="none"
            className="border border-[#F2F4F7] rounded-3xl w-[110px] lg:w-[125px]"
            onClick={() => handleClick(index)}
          >
            <CardBody className="flex flex-row items-center space-x-1">
              <Interest />
              <div className="">
                <p className="font-inter text-xs lg:text-small text-black font-medium capitalize">
                  Music
                </p>
              </div>
              {actives.includes(index) ? <CheckerFilled /> : <CheckerEmpty />}
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="max-w-[208px] mt-8">
        <Button
          color="primary"
          size="lg"
          className="h-12 rounded-2xl"
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

export default Interests;
