
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://www.yourdomain.com"
  ),

  title: {
    default: "Power Wire Crafts Private Limited",
    template: "%s | Power Wire Crafts",
  },

  description:
    "Power Wire Crafts Private Limited specializes in electrical wires and cable solutions, delivering quality, reliability, and performance for industrial and commercial applications.",

  applicationName: "Power Wire Crafts",

  keywords: [
    "Power Wire Crafts",
    "Power Wire Crafts Private Limited",
    "Electrical Wires",
    "Electrical Cables",
    "Wire and Cable Manufacturer",
    "Industrial Cables",
    "Power Cables",
    "Electrical Cable Solutions",
    "Commercial Electrical Wires",
  ],

  authors: [
    {
      name: "Power Wire Crafts Private Limited",
    },
  ],

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Power Wire Crafts Private Limited",
    title: "Power Wire Crafts Private Limited",
    description:
      "Discover reliable electrical wire and cable solutions from Power Wire Crafts Private Limited.",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
