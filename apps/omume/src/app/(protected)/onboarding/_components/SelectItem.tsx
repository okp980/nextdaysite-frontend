"use client";
import React, { useEffect, useState } from "react";
import User from "../_assets/svg/User";
import Business from "../_assets/svg/Business";
import Item from "./Item";
import Button from "@nextdaysite/ui/button";
import { useRouter } from "next/navigation";
import { useRoleStore } from "@/app/(auth)/util/store";
import { Role } from "@/app/util/types/user";
import { useOnboardingProgressStore } from "../_util/store";

type Props = {};

const items: { name: Role; icon: React.ReactElement }[] = [
  {
    name: Role.USER,
    icon: <User />,
  },
  {
    name: Role.BUSINESS,
    icon: <Business />,
  },
];

export default function SelectItem({}: Props) {
  const router = useRouter();
  const updateProgressBar = useOnboardingProgressStore(
    (state) => state.setStep,
  );
  const updateRole = useRoleStore((state) => state.setRole);
  const [user, setUser] = useState<Role | null>(null);
  const handleClick = (type: Role) => {
    setUser(type);
  };

  useEffect(() => {
    updateProgressBar(25);
  }, []);
  const handleContinue = () => {
    updateRole(user);
    if (user === Role.USER) {
      router.push("/onboarding/user/interest");
    }
    if (user === Role.BUSINESS) {
      router.push("/onboarding/business/profile");
    }
  };
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <Item
          Icon={item.icon}
          name={item.name}
          active={user === item.name}
          onClick={() => handleClick(item.name)}
          key={i}
        />
      ))}
      <div className="max-w-[208px] mt-4 ">
        <Button
          color="primary"
          size="lg"
          className="h-11 text-sm lg:text-base"
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
