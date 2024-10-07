import React from "react";

type Props = {};

export default function CheckerEmpty({}: Props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="white" />
      <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#D0D5DD" />
    </svg>
  );
}
