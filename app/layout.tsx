import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deepakkumarportfolio.web.app"),
  title: "Deepakkumar V — Developer",
  description: "Portfolio of Deepakkumar V, a Developer specialising in React, Next.js, Flutter, and the MERN stack.",
  keywords: ["Developer", "React", "Next.js", "Flutter", "MERN", "Deepakkumar"],
  authors: [{ name: "Deepakkumar V" }],
  openGraph: {
    images: ["/opengraph-image.png"],
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
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased transition-colors duration-300 overflow-x-hidden relative">
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
