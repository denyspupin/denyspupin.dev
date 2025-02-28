import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PostHogProvider } from "@/provider";
import MoveUpButton from "@/components/MoveUpButton";
import Topbar from "@/components/Topbar";

const GeistMono = Geist_Mono({
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
      <body className={`${GeistMono.className} antialiased`}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GAID!} />
        <SpeedInsights />
        <PostHogProvider>
          <Topbar />
          {children}
          <MoveUpButton />
        </PostHogProvider>
      </body>
    </html>
  );
}
