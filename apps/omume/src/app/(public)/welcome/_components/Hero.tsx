"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import Button from "@nextdaysite/ui/button";
import Image from "next/image";

import x from "../_assets/images/x.png";
import tiktok from "../_assets/images/tiktok.png";
import facebook from "../_assets/images/facebook.png";
import youtube from "../_assets/images/youtube.png";
type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="container m-auto px-5">
      <div className="lg:flex pt-10 lg:pt-24">
        <div className="font-dm-sans flex flex-1">
          <div>
            <Card
              shadow="sm"
              className="bg-white text-sm rounded-2xl  max-w-[443px] mb-3 border-[#D0D5DD]"
            >
              <CardBody>
                <p className="text-[#344054] text-center text-[10px] text-sm ">
                  Experience the Joy of Getting your Events to the right
                  Audience
                </p>
              </CardBody>
            </Card>

            <div className="flex flex-col justify-end pb-20 max-w-[624px]">
              <p className="pb-4 font-dm-sans text-[28px] lg:text-[52px] font-bold text-[#290619] leading-10 lg:leading-[74px]">
                Maximise Your Event’s Reach with Powerful Social Media
                Broadcasts
              </p>
              <p className="pb-6 font-dm-sans text-sm lg:text-base text-body ">
                Promote and broadcast your event to millions across social
                platforms—engage your audience in real-time, wherever they are.
              </p>
              <Button
                color="primary"
                className="rounded-3xl w-[149px] lg:w-44 h-9 lg:h-12"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
        {/* socials */}
        <div className="relative  hidden lg:flex flex-1 w-full lg:max-w-[520px]">
          <div className="absolute top-0 left-0">
            <Image src={x} alt="x" width={240} height={158} />
          </div>
          <div className="absolute right-1/4">
            <Image src={tiktok} alt="tiktok" width={140} height={79} />
          </div>
          <div className="absolute -bottom-7 -left-9">
            <Image src={facebook} alt="facebook" width={262} height={232} />
          </div>
          <div className="absolute bottom-28 right-0">
            <Image src={youtube} alt="youtube" width={256} height={154} />
          </div>
        </div>
      </div>
    </section>
  );
}
