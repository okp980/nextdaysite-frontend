import React from "react";
import User from "../_assets/svg/User";
import Bussiness from "../_assets/svg/Bussiness";
import Item from "./Item";

type Props = {};

const items = [
  {
    name: "Attendee",
    icon: <User />,
  },
  {
    name: "Bussiness",
    icon: <Bussiness />,
  },
];

export default function SelectItem({}: Props) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <Item Icon={item.icon} name={item.name} key={i} />
      ))}
    </div>
  );
}
