"use client";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Button
        isIconOnly
        onClick={() => setTheme(() => (theme === "light" ? "dark" : "light"))}
        aria-label="Theme Switch"
        variant="light"
        radius="full"
      >
        {theme !== "light" ? (
          <MdOutlineLightMode size={20} />
        ) : (
          <IoMoonSharp size={20} />
        )}
      </Button>
    </div>
  );
};

export default ThemeSwitch;
