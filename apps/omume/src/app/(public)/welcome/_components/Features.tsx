import Button from "@nextdaysite/ui/button";
import Image from "next/image";
import React from "react";
import feature from "../_assets/images/features.png";

type Props = {
  invert?: boolean;
};

export default function Features({ invert }: Props) {
  return (
    <section
      className={`container mx-auto px-5 flex ${invert ? "flex-col-reverse lg:flex-row-reverse" : "flex-col lg:flex-row"} gap-5 lg:gap-44 my-10 lg:my-32 font-dm-sans`}
    >
      <div className="flex flex-1">
        <div>
          <h3 className="text-primary font-extrabold text-base mb-2 lg:mb-5">
            BROADCAST
          </h3>
          <h2 className="font-normal text-[28px] lg:text-[44px] leading-8 lg:leading-[50px] text-black mb-2 lg:mb-5">
            Scale globally with velocity and ease
          </h2>
          <p className="lg:text-base text-sm text-body mb-3 lg:mb-5">
            Deel is built to scale with organizations of all sizes, from small
            teams to enterprises of thousands. Whether you want to hire
            worldwide without opening legal entities, streamline HR for your
            global team, or pay all types of workers anywhere with consolidated
            payroll—Deel does it all with full compliance.
          </p>
          <Button
            className="w-[91px] text-xs lg:text-sm lg:w-32 rounded-3xl h-11 lg:h-12"
            variant="ghost"
          >
            Learn more
          </Button>
        </div>
      </div>
      <div className="flex flex-1">
        <Image src={feature} alt="Feature" />
      </div>
    </section>
  );
}
