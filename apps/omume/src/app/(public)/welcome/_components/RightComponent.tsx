import Button from "@nextdaysite/ui/button";
import ThemeSwitch from "@nextdaysite/ui/theme-switch";
import React from "react";

type Props = {};

export default function RightComponent({}: Props) {
  return (
    <div className="flex gap-3">
      <ThemeSwitch />
      <Button variant="bordered">Login</Button>
      <Button color="primary">Sign Up</Button>
    </div>
  );
}
