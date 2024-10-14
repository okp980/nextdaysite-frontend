"use client";
import { Card, CardBody, Chip } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Interest from "../_assets/svg/Interest";
import CheckerFilled from "../../_assets/svg/CheckerFilled";
import CheckerEmpty from "../../_assets/svg/CheckerEmpty";
import { useRouter } from "next/navigation";
import Button from "@nextdaysite/ui/button";
import { useOnboardingProgressStore } from "../../_util/store";
import { useInterestsStore } from "@/app/(auth)/util/store";

type Props = {};

const interests = [
  "Traveling",
  "Reading",
  "Cooking",
  "Gardening",
  "Shopping",
  "Music",
  "Hiking",
  "Sports",
  "Art",
  "Gaming",
  "Writing",
  "Yoga",
  "Technology",
  "Movies",
  "Dancing",
  "Fitness",
  "Cycling",
  "Painting",
];

function Interests({}: Props) {
  const router = useRouter();
  const updateProgressBar = useOnboardingProgressStore(
    (state) => state.setStep,
  );
  const updateInterests = useInterestsStore((state) => state.setInterests);

  const [actives, setActives] = useState<string[]>([]);

  useEffect(() => {
    updateProgressBar(25);
  }, []);
  const handleContinue = () => {
    updateInterests(actives);
    router.push("/onboarding/user/profile");
  };
  const handleClick = (interest: string) => {
    if (actives.includes(interest)) {
      setActives((prev) => prev.filter((i) => i !== interest));
      return;
    }
    setActives((prev) => [...prev, interest]);
  };
  return (
    <div>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
        {interests.map((interest, index) => (
          <Card
            key={index}
            isHoverable
            isPressable
            shadow="none"
            className="border border-[#F2F4F7] rounded-3xl w-[110px] lg:w-[125px]"
            onClick={() => handleClick(interest)}
          >
            <CardBody className="flex flex-row justify-between items-center space-x-1">
              {/* <Interest /> */}
              <div className="">
                <p className="font-inter text-xs lg:text-small text-black font-medium capitalize">
                  {interest}
                </p>
              </div>
              {actives.includes(interest) ? (
                <CheckerFilled />
              ) : (
                <CheckerEmpty />
              )}
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
