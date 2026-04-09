import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deepakkumarportfolio.web.app"),
  title: {
    default: "Deepakkumar V — Developer",
    template: "%s | Deepakkumar V"
  },
  description: "Portfolio of Deepakkumar V, a Developer specializing in React, Next.js, Flutter, and the MERN stack.",
  keywords: ["Deepakkumar V", "Developer", "Portfolio", "MERN Stack", "Flutter Developer", "React Developer", "Next.js", "UI/UX", "India"],
  authors: [{ name: "Deepakkumar V" }],
  creator: "Deepakkumar V",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://deepakkumarportfolio.web.app",
    title: "Deepakkumar V — Developer",
    description: "Portfolio of Deepakkumar V, specializing in full-stack web and mobile development.",
    siteName: "Deepakkumar V Portfolio",
    images: [{
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "Deepakkumar V — Portfolio",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepakkumar V — Developer",
    description: "Portfolio of Deepakkumar V, specializing in full-stack web and mobile development.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LoadingProvider } from "@/components/LoadingProvider";
import { PageBackground } from "@/components/PageBackground";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden relative">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <PageBackground />
          <LoadingProvider>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12 space-y-16 sm:space-y-20">
              {children}
            </main>
            <Footer />
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
