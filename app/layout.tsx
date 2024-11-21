import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "~/lib/theme-provider";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
});

export const metadata: Metadata = {
  title: "blokvs' website",
  description: "I've created this website just to have at least one project in my portfolio lol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.className} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
