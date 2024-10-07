import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <p className="font-lato text-sm">
        By continuing with Google, Apple, or Email, you agree to Eventapp’s
        <Link className="text-primary underline underline-offset-2" href="#">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link className="text-primary underline underline-offset-2" href="#">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}
