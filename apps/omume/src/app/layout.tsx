import type { Metadata } from "next";
import "@nextdaysite/tailwind-config/global-style";

import {
  dm_sans,
  fugaz_one,
  inter,
  lato,
} from "@nextdaysite/tailwind-config/font";
import Providers from "./_components/providers";

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
        className={`${inter.variable} ${lato.variable} ${fugaz_one.variable} ${dm_sans.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
