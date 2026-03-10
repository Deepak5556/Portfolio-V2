import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deepakkumar V — Full Stack Developer",
  description: "Portfolio of Deepakkumar V, a Full Stack Developer specialising in React, Next.js, Flutter, and the MERN stack.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Flutter", "MERN", "Deepakkumar"],
  authors: [{ name: "Deepakkumar V" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LoadingProvider } from "@/components/LoadingProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased transition-colors duration-300 overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LoadingProvider>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-20">
              {children}
            </main>
            <Footer />
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
