import type { Config } from "tailwindcss"
import { nextui } from "@nextui-org/react"

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        lato: ["var(--font-lato)"],
        fugaz: ["var(--font-fugaz-one)"],
        "dm-sans": ["var(--font-dm-sans)"],
      },
      textColor: {
        body: "#667085",
        bolder: "#101828",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,

      themes: {
        light: {
          colors: {
            foreground: "#667085",
            background: "#ffffff",
            primary: {
              DEFAULT: "#6941C6",
              foreground: "#FFFFFF",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#6941C6",
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
}
export default config
