"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  extendVariants,
} from "@nextui-org/react";
import React, { ReactElement } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
type Props = {
  navLinks?: { label: string; route: string }[];
  RightComponent?: ReactElement;
  activeLink?: string;
  isTransparent?: boolean;
  menuItems?: { label: string; route: string }[];
};

const CustomLink = extendVariants(Link, {
  variants: {
    color: {
      foreground: "text-[#290619]",
    },
  },
});

export default function Nav({
  navLinks,
  RightComponent,
  activeLink,
  menuItems,
}: Props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar
      maxWidth="full"
      height={80}
      classNames={{
        brand: "text-2xl font-fugaz text-primary",
        base: "container mx-auto bg-transparent ",
        toggle: "text-2xl",
        toggleIcon: "text-2xl",
        menu: "bg-[#F4F3FF]",
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        {/* @ts-ignore */}
        <CustomLink href="/welcome" className="font-bold" size="lg">
          omume
        </CustomLink>
      </NavbarBrand>
      {navLinks && (
        <NavbarContent justify="start" className="hidden sm:flex">
          {navLinks?.map((navLink, index) => (
            <NavbarItem key={index} isActive={navLink.route === activeLink}>
              <CustomLink
                href={navLink.route}
                {...{
                  color:
                    navLink.route !== activeLink ? "foreground" : undefined,
                }}
              >
                {navLink.label}
              </CustomLink>
            </NavbarItem>
          ))}
        </NavbarContent>
      )}
      {RightComponent && (
        <NavbarContent justify="end" className="hidden sm:flex">
          {RightComponent}
        </NavbarContent>
      )}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
        icon={<HiMenuAlt3 size={70} color="#000000" />}
      />
      {menuItems && (
        <NavbarMenu>
          {menuItems?.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <CustomLink
                className="w-full"
                {...{
                  color: item.route !== activeLink ? "foreground" : undefined,
                }}
                // @ts-ignore
                size="lg"
              >
                {item.label}
              </CustomLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
}
