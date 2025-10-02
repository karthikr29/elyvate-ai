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
  title: "Elyvate AI - Enterprise AI Solutions That Drive Real Results",
  description: "Transform your business with AI-powered chatbots, voice agents and custom automation solutions. Reduce costs by 95% and scale your operations with 24/7 intelligent agents.",
  keywords: "AI solutions, chatbots, voice agents, business automation, AI consulting, enterprise AI, customer support automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
