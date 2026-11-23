import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PKAI Music Studio",
    template: "%s | PKAI Music Studio"
  },

  description:
    "Create, record, compose, mix and master music with PKAI Music Studio. Your professional AI-powered music production platform.",

  applicationName: "PKAI Music Studio",

  keywords: [
    "PKAI Music Studio",
    "AI Music Production",
    "Music Creation",
    "Songwriting",
    "Audio Recording",
    "Music Mixing",
    "Music Mastering",
    "AI Song Generator",
    "Digital Audio Workstation"
  ],

  authors: [
    {
      name: "PKAI Music Studio"
    }
  ],

  creator: "PKAI Music Studio",

  robots: {
    index: true,
    follow: true
  },

  openGraph: {
    type: "website",
    title: "PKAI Music Studio",
    description:
      "Professional AI-powered music creation and production platform.",
    siteName: "PKAI Music Studio"
  },

  twitter: {
    card: "summary_large_image",
    title: "PKAI Music Studio",
    description:
      "Create and produce music with PKAI Music Studio."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080B14",
  colorScheme: "dark"
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" dir="ltr">
      <body>
        {children}
      </body>
    </html>
  );
}
