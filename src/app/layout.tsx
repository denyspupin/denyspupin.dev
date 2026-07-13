import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { PostHogProvider } from "@/provider";

const GeistMono = Geist_Mono({
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
      <body className={`${GeistMono.className} antialiased`}>
        <PostHogProvider>
          <main>{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
