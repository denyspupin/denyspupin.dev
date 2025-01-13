import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FloatingNavbar from "@/components/FloatingNavbar";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Denys Pupin - Software Engineer",
    default: "Denys Pupin - Software Engineer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GAID!} />
        <SpeedInsights />
        {children}
        <FloatingNavbar />
      </body>
    </html>
  );
}
