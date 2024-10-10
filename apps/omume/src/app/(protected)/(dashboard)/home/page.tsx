import React from "react";
import HomeHeader from "./_components/HomeHeader";
import Summary from "./_components/Summary";

type Props = {};

export default function Page({}: Props) {
  return (
    <div>
      <HomeHeader />
      <Summary
        data={{
          Upcoming_Events: 12,
          Total_RSVPs: 2420,
          Active_Events: 5,
          Engagement_Rate: 68,
        }}
      />
    </div>
  );
}
