import { Geist_Mono, Geist } from "next/font/google";
import "./globals.css";

const GeistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
});

const Geist_SansSerif = Geist({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistMono.className} antialiased`}>{children}</body>
    </html>
  );
}
