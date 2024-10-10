"use client"
import { Card, CardBody, Chip } from "@nextui-org/react"
import React from "react"

type Props = {
  data: {
    Upcoming_Events: number
    Total_RSVPs: number
    Active_Events: number
    Engagement_Rate: number
  }
}

export default function Summary({ data }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5">
      {Object.keys(data).map((key: string, index) => (
        <Card
          key={index}
          className="flex rounded-3xl border border-[#E4E7EC]"
          shadow="none"
        >
          <CardBody className="px-5 py-8 flex flex-row justify-between">
            <div className="flex flex-col justify-between">
              <p className="font-semibold font-inter text-[#475467] text-xs lg:text-sm mb-2">
                {key.replace("_", " ")}
              </p>

              <p className="font-lato font-bold text-xl xl:text-3xl text-[#101828]">
                {/* @ts-ignore */}
                {data[key]}
              </p>
            </div>
            <Chip className="self-end bg-[#ECFDF3] border border-[#ABEFC6] text-[#067647]">
              100%
            </Chip>
          </CardBody>
        </Card>
      ))}
    </div>
  )
}
