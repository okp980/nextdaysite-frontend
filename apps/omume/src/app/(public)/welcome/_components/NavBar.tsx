"use client";
import Nav from "@nextdaysite/ui/nav-bar";
import React from "react";
import { navLinks } from "../_util/data";
import RightComponent from "./RightComponent";
import { usePathname } from "next/navigation";

type Props = {};

export default function NavBar({}: Props) {
  const pathname = usePathname();
  return (
    <Nav
      navLinks={navLinks}
      RightComponent={<RightComponent />}
      activeLink={pathname}
    />
  );
}
