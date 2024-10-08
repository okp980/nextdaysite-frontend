import type { Metadata } from "next"
import "@nextdaysite/tailwind-config/global-style"
import UIProvider from "@nextdaysite/ui/ui-provider"
import {
  fugaz_one,
  inter,
  lato,
  dm_sans,
} from "@nextdaysite/tailwind-config/font"
import ThemeProvider from "@nextdaysite/ui/theme-provider"
import NavBar from "./welcome/_components/NavBar"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${lato.variable} ${fugaz_one.variable} ${dm_sans.variable} antialiased bg-gradient-to-b from-[#F4F3FF] to-[#FFFFFF] hidden lg:block`}
      >
        {/* /wrap application with UI Provider from @nextdaysite/ui/provider at root */}
        <UIProvider>
          <ThemeProvider>
            <NavBar />
            {children}
          </ThemeProvider>
        </UIProvider>
      </body>
    </html>
  )
}
