import React from "react"
import klarna from "../_assets/images/klarna.png"
import lego from "../_assets/images/lego.png"
import nike from "../_assets/images/nike.png"
import openai from "../_assets/images/openai.png"
import pizza_hut from "../_assets/images/pizza_hut.png"
import shopify from "../_assets/images/shopify.png"
import zapier from "../_assets/images/zapier.png"
import Image from "next/image"

type Props = {}

export default function Companies({}: Props) {
  return (
    <section className="container mx-auto mt-20 font-dm-sans">
      <h3 className="font-dm-sans font-semibold text-xs uppercase text-center">
        Trusted by 35,000+ companies from startups to enterprise
      </h3>
      <div className="flex gap-12 justify-center mt-9">
        <Image src={shopify} alt="shopify" height={24} />
        <Image src={klarna} alt="klarna" height={17} />
        <Image src={nike} alt="nike" height={24} />
        <Image src={lego} alt="lego" height={24} />
        <Image src={pizza_hut} alt="pizza hut" height={24} />
        <Image src={openai} alt="open ai" width={89} height={24} />
        <Image src={zapier} alt="zapier" width={85} height={24} />
      </div>
    </section>
  )
}
