// I've created this only beacuse I use Samsung Browser and I got forcing dark mode which is bugging on my sites without strict dark mode support lmao
// spoiler: it's still bugging

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}