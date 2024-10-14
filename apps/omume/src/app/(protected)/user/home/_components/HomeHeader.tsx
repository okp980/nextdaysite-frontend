"use client";
import React from "react";
import Header from "../../_components/Header";

type Props = {};

export default function HomeHeader({}: Props) {
  return (
    <Header
      title="Good Morning Alex 👋 is Homw"
      description="Here’s how your events are doing"
      buttonLabel="Create Event"
      onClick={() => {}}
    />
  );
}
