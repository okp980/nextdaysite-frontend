"use client";
import { ThemeProvider, useTheme } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export default function (props: ThemeProviderProps) {
  return <ThemeProvider attribute="class" defaultTheme="light" {...props} />;
}

export { useTheme };
