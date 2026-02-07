import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alexandre Laborde | Web & Mobile Developer",
    template: "%s | Alexandre Laborde",
  },
  description:
    "Portfolio de développeur Web & Mobile - Applications modernes avec React, React Native, Swift et Next.js. Étudiant à Epitech.",
  keywords: [
    "Alexandre Laborde",
    "développeur",
    "web",
    "mobile",
    "React",
    "React Native",
    "Swift",
    "Next.js",
    "TypeScript",
    "Epitech",
  ],
  authors: [{ name: "Alexandre Laborde" }],
  creator: "Alexandre Laborde",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    title: "Alexandre Laborde | Web & Mobile Developer",
    description:
      "Portfolio de développeur Web & Mobile - Applications modernes avec React, React Native et Swift",
    siteName: "Alexandre Laborde Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandre Laborde | Web & Mobile Developer",
    description:
      "Portfolio de développeur Web & Mobile - Applications modernes avec React, React Native et Swift",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
