import React from "react";
import CheckerEmpty from "../_assets/svg/CheckerEmpty";
import CheckerFilled from "../_assets/svg/CheckerFilled";
import { Card, CardBody } from "@nextui-org/react";

type Props = {
  Icon: React.ReactElement;
  name: string;
  active?: boolean;
  onClick: () => void;
};

export default function Item({ Icon, name, active, onClick }: Props) {
  return (
    <Card
      isHoverable
      isPressable
      shadow="none"
      className="border border-[#F2F4F7] max-w-[520-px] h-20 rounded-3xl"
      onClick={() => onClick()}
    >
      <CardBody className="flex flex-row items-center gap-2 ">
        {Icon}
        <div className="flex-1">
          <p className="font-inter text-base text-black font-medium capitalize">
            {name}
          </p>
        </div>
        {active ? <CheckerFilled /> : <CheckerEmpty />}
      </CardBody>
    </Card>
  );
}
