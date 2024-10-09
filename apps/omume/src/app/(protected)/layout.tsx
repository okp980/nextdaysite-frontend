import type { Metadata } from "next";
import "@nextdaysite/tailwind-config/global-style";
import UIProvider from "@nextdaysite/ui/ui-provider";
import {
  dm_sans,
  fugaz_one,
  inter,
  lato,
} from "@nextdaysite/tailwind-config/font";
import ThemeProvider from "@nextdaysite/ui/theme-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${lato.variable} ${fugaz_one.variable} ${dm_sans.variable} antialiased bg-[#F9FBFC]`}
      >
        {/* Wrap application with UI Provider from @nextdaysite/ui/provider at root */}
        <UIProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </UIProvider>
      </body>
    </html>
  );
}
