import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mayank Khare | Full Stack Developer",
  description: "Portfolio website of Mayank Khare, a Full Stack Developer specializing in PHP, Node.js, and React.js",
  keywords: "Mayank Khare, Full Stack Developer, PHP Developer, Node.js, React.js, Portfolio",
  authors: [{ name: "Mayank Khare" }],
  creator: "Mayank Khare",
  openGraph: {
    title: "Mayank Khare | Full Stack Developer",
    description: "Portfolio website of Mayank Khare, a Full Stack Developer specializing in PHP, Node.js, and React.js",
    url: "https://mayankkhare73.github.io/myportfolio",
    siteName: "Mayank Khare Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mayank Khare Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Khare | Full Stack Developer",
    description: "Portfolio website of Mayank Khare, a Full Stack Developer specializing in PHP, Node.js, and React.js",
    images: ["/images/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
