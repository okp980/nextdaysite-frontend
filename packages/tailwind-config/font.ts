import { Inter, Lato, Fugaz_One, DM_Sans } from "@next/font/google"

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})
export const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
})
export const fugaz_one = Fugaz_One({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-fugaz-one",
})
export const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})
