import React from "react";
import CheckerEmpty from "../_assets/svg/CheckerEmpty";
import CheckerFilled from "../_assets/svg/CheckerFilled";

type Props = {
  Icon: React.ReactElement;
  name: string;
  active?: boolean;
};

export default function Item({ Icon, name, active }: Props) {
  return (
    <div className="flex items-center gap-2 border border-[#F2F4F7] rounded-2xl px-4 py-6 cursor-pointer hover:bg-slate-100">
      {Icon}
      <div className="flex-1">
        <p className="font-inter text-base text-black font-medium">{name}</p>
      </div>
      {active ? <CheckerFilled /> : <CheckerEmpty />}
    </div>
  );
}
