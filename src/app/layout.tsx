import type { Metadata } from "next";
import { Special_Elite } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

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
        <ThemeProvider
          attribute="class"
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
