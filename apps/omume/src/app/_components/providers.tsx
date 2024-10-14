import { SessionProvider } from "next-auth/react"
import React, { PropsWithChildren } from "react"
import UIProvider from "@nextdaysite/ui/ui-provider"
import ThemeProvider from "@nextdaysite/ui/theme-provider"

type Props = {}

export default function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      {/* /wrap application with UI Provider from @nextdaysite/ui/provider at root */}
      <UIProvider>
        <ThemeProvider>{children} </ThemeProvider>
      </UIProvider>
    </SessionProvider>
  )
}
