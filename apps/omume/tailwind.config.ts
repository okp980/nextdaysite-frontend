import type { Config } from "tailwindcss";
import sharedConfig from "@nextdaysite/tailwind-config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // responsible for rendering nextui styling
  ],
  presets: [sharedConfig],
};
export default config;
