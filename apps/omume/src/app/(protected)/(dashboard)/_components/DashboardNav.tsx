"use client";
import Button from "@nextdaysite/ui/button";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import Home from "../_assets/icons/Home";
import Events from "../_assets/icons/Events";
import Broadcast from "../_assets/icons/Broadcast";
import Contact from "../_assets/icons/Contact";
import Report from "../_assets/icons/Report";
import Setting from "../_assets/icons/Setting";

const Links: { label: string; route: string; icon: React.ReactElement }[] = [
  {
    label: "Home",
    route: "/home",
    icon: <Home />,
  },
  {
    label: "Events",
    route: "/events",
    icon: <Events />,
  },
  {
    label: "Broadcast",
    route: "/broadcast",
    icon: <Broadcast />,
  },
  {
    label: "Contacts",
    route: "/contacts",
    icon: <Contact />,
  },
  {
    label: "Report",
    route: "/report",
    icon: <Report />,
  },
  {
    label: "Settings",
    route: "/settings",
    icon: <Setting />,
  },
];

export default function DashboardNav() {
  return (
    <div className="bg-white border-r border-r-[#E4E7EC] row-span-2 flex flex-col ">
      <div className="px-2 lg:px-5 flex flex-col flex-1">
        <Link
          href={"/welcome"}
          className="font-bold text-xl lg:text-2xl text-center lg:text-left font-fugaz text-primary mt-6 mb-10"
        >
          omume
        </Link>
        <nav className="flex flex-col items-center lg:items-start gap-2">
          {Links.map((link, index) => (
            <Link
              href={link.route}
              key={index}
              className="transition ease-in-out flex justify-center lg:justify-start w-full gap-3 font-semibold text-medium font-inter text-[#344054] hover:bg-[#F9F5FF] hover:text-primary rounded-md py-2 px-4"
            >
              {link.icon} <span className="hidden lg:block">{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-3 border-t border-t-[#E4E7EC] hidden lg:block">
        <div className="bg-[#F9FAFB] h-[52px] p-7 flex justify-between items-center font-inter text-base rounded-md text-[#344054]">
          <p>
            <span className="font-bold">15</span> days left
          </p>
          <Button color="primary">Buy now</Button>
        </div>
      </div>
    </div>
  );
}
