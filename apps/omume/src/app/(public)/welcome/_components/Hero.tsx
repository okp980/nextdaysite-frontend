import React from "react";
import heroImg from "./../_assets/images/hero-img.jpeg";
import Image from "next/image";
import SearchEvent from "./SearchEvent";
import { extendVariants, Navbar } from "@nextui-org/react";

type Props = {};

const CustomNavBar = extendVariants(Navbar, {
  slots: { brand: "font-fugaz text-[44px]" },
});

export default function Hero({}: Props) {
  return (
    <section className="container m-auto ">
      <div className="relative h-[730px]">
        <Image
          src={heroImg}
          alt="Background"
          fill
          objectFit="cover"
          className=" rounded-[32px] "
        />
        <div className="z-10 absolute inset-0 px-9 flex flex-col justify-end pb-20 before:absolute before:content-[''] before:inset-0 before:bg-black/15 before:rounded-[32px] before:-z-10">
          <p className="pb-4 font-inter text-6xl font-bold text-white max-w-[600px] leading-[77px]">
            Discover Exciting Events Near You Today!
          </p>
          <p className="pb-11 text-base font-lato text-white max-w-[700px]">
            Welcome to our event listing platform, where you can find and
            explore a variety of local happenings. Join us to connect with your
            community and never miss out on the fun.
          </p>
          <SearchEvent />
        </div>
      </div>
    </section>
  );
}
