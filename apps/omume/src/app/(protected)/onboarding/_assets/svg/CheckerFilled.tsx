import React from "react"

type Props = {}

export default function CheckerFilled({}: Props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" fill="#F9F5FF" />
      <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#9E77ED" />
      <path
        d="M14.6668 6.5L8.25016 12.9167L5.3335 10"
        stroke="#9E77ED"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
