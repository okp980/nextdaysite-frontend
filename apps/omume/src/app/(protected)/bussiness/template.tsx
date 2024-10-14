"use client";
import { PropsWithChildren } from "react";
import DashboardNav from "./_components/DashboardNav";
import Button from "@nextdaysite/ui/button";
import Notification from "./_assets/icons/Notification";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";

export default function Template({ children }: PropsWithChildren) {
  return (
    <div className="h-screen grid grid-cols-[100px_1fr] lg:grid-cols-[320px_1fr] grid-rows-[80px_1fr]">
      <DashboardNav />
      <header className="flex items-center justify-end px-12">
        <div className="flex gap-2">
          <Button isIconOnly startContent={<Notification />} variant="light" />
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                showFallback
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                className="w-10 h-10"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="sign out" onClick={() => signOut()}>
                Log out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </header>
      <div className="p-12 lg:overflow-hidden lg:overflow-y-scroll">
        {children}
      </div>
    </div>
  );
}
