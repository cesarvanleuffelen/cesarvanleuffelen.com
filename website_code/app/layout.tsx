import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "César Van Leuffelen",
  description: "Build, get better, repeat.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  language?: string;
  bgColor?: string;
}

export default function RootLayout({
  children,
  language = "en", // Default language
  bgColor = "bg-black", // Default bgColor
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={language} className={bgColor}>
      <head>
        <link rel="icon" href="/portfolio.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
