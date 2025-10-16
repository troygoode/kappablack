import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Special_Elite } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kappa Black".toUpperCase(),
  description: "Online character sheets for the TTRPG Delta Green.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${specialElite.className} antialiased content h-full w-full cursor-default`}
      >
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
