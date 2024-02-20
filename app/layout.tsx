import { Metadata } from "next";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import React from "react";
import "../global.css";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "ambonxnobody.com",
    template: "%s | ambonxnobody.com",
  },
  description: "Senior Web Developer of venturo.id and Freelancer",
  openGraph: {
    title: "ambonxnobody.com",
    description: "Senior Web Developer of venturo.id and Freelancer",
    url: "https://ambonxnobody.com",
    siteName: "ambonxnobody.com",
    images: [
      {
        url: "https://ambonxnobody.com/og.svg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "AmbonxNobody",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.svg",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}>
      {children}
      </body>
      </html>
  );
}
