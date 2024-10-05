import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

const config: Config = {
  content: [
    // make sure it's pointing to the ROOT node_module
    "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter"],
        lato: ["var(--font-lato"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
