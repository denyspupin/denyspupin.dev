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
  title: "Denys Pupin - Software Developer",
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
        <AnimatePresence>
          <motion.main
            className="px-6 md:px-12 lg:px-16 xl:px-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
            }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <FloatingNavbar />
      </body>
    </html>
  );
}
