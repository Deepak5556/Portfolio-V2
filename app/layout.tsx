import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import Script from "next/script";
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

// ─── Trending 2026 SEO Keywords (researched & integrated) ────────────────────
// Primary branded:   "Deepak", "Deepakkumar", "Deepakkumar V"
// Role keywords:     "Full Stack Developer", "MERN Stack Developer",
//                    "React Developer", "Flutter Developer", "Next.js Developer"
// Trending 2026:     "AI-integrated developer", "TypeScript developer",
//                    "Next.js full stack", "FlutterFlow developer",
//                    "Firebase developer", "UI/UX designer developer"
// Long-tail:         "hire full stack developer India",
//                    "full stack developer portfolio India",
//                    "Karpagam College developer", "Salem Tamil Nadu developer"
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL("https://deepakportfolioo.web.app"),

  // ── Title: Brand name first for branded search dominance ──
  title: {
    default:
      "Deepak | Deepakkumar V – Full Stack Developer | React, Flutter & MERN Portfolio",
    template: "%s | Deepakkumar V – Full Stack Developer",
  },

  // ── Description: 155 chars, keyword-rich, action-oriented ──
  description:
    "Deepakkumar V (Deepak) – Full Stack & Flutter Developer from India. Explore projects in React, Next.js, MERN, Firebase & UI/UX design. Hire or collaborate today.",

  // ── Keywords: branded + trending 2026 stack keywords ──
  keywords: [
    // Branded (highest priority for personal ranking)
    "Deepak",
    "Deepakkumar",
    "Deepakkumar V",
    "Deepak Kumar",
    "Deepak portfolio",
    "Deepakkumar V portfolio",
    "Deepakkumar V developer",
    // Role + stack (trending 2026)
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer India",
    "Next.js Developer",
    "Flutter Developer",
    "FlutterFlow Developer",
    "Firebase Developer",
    "TypeScript Developer",
    "AI-integrated developer",
    "UI UX Designer Developer",
    // Long-tail location & intent
    "Full Stack Developer portfolio India",
    "hire full stack developer India",
    "React developer portfolio 2026",
    "MERN stack portfolio",
    "Flutter app developer India",
    "Karpagam College of Engineering developer",
    "Salem Tamil Nadu developer",
    "Deepakkumar V Karpagam College",
    "Deepakkumar V Full Stack Developer",
    "Deepakkumar V Flutter Developer",
    "Deepakkumar V React Developer",
    "Deepakkumar V MERN Developer",
    "Deepakkumar V UI/UX Designer",
    "Deepakkumar V Next.js Developer",
    "Deepakkumar V Firebase Developer",
  ],

  authors: [{ name: "Deepakkumar V", url: "https://deepakportfolioo.web.app" }],
  creator: "Deepakkumar V",
  publisher: "Deepakkumar V",
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
  alternates: {
    canonical: "https://deepakportfolioo.web.app/",
  },

  // ── Open Graph ──
  openGraph: {
    type: "profile",
    firstName: "Deepakkumar",
    lastName: "V",
    username: "Deepak",
    gender: "male",
    locale: "en_US",
    url: "https://deepakportfolioo.web.app/",
    title: "Deepak (Deepakkumar V) | Full Stack Developer – React, Flutter & MERN",
    description:
      "Deepakkumar V, known as Deepak, is a Full Stack Developer from India specializing in React, Next.js, Flutter, MERN, and Firebase. View live projects and get in touch.",
    siteName: "Deepakkumar V – Developer Portfolio",
    images: [
      {
        url: "https://deepakportfolioo.web.app/assets/ProfileImage-DvYnejqx.jpg",
        width: 1200,
        height: 630,
        alt: "Deepakkumar V (Deepak) – Full Stack Developer from India",
      },
    ],
  },

  // ── Twitter / X Card ──
  twitter: {
    card: "summary_large_image",
    title: "Deepak (Deepakkumar V) | Full Stack Developer Portfolio 2026",
    description:
      "Explore projects by Deepakkumar V — a Full Stack Developer skilled in React, Next.js, Flutter & MERN. Based in India.",
    images: ["https://deepakportfolioo.web.app/assets/ProfileImage-DvYnejqx.jpg"],
  },

  // ── Icons ──
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/icon.png",
  },

  // ── Site Verification ──
  verification: {
    google: [
      "wKdycalYoizoKxPQ4O3BALnXZwjYeQbq2Xu2RoM2A7w",
      "google56df23a2f88dea93",
      "8AkEyC2HOQXFukpK9A2b-EWdcPHyJYJYVlepeUjpafA",
    ],
  },

  // ── Pinterest Domain Verify ──
  other: {
    "p:domain_verify": "347ab54171cf7f61296e32731fcedb62",
    // Tell AI crawlers (ChatGPT, Perplexity, Claude) they can index this page
    "robots-gptbot": "index, follow",
    "robots-perplexitybot": "index, follow",
    "robots-claudebot": "index, follow",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#5a1abf",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LoadingProvider } from "@/components/LoadingProvider";
import { PageBackground } from "@/components/PageBackground";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLdData = [
    // ── 1. Person schema — Deepakkumar V (primary, third-person for AI citation) ──
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://deepakportfolioo.web.app/#person",
      name: "Deepakkumar V",
      alternateName: ["Deepak", "Deepak Kumar", "Deepakkumar"],
      url: "https://deepakportfolioo.web.app/",
      image: {
        "@type": "ImageObject",
        url: "https://deepakportfolioo.web.app/assets/ProfileImage-DvYnejqx.jpg",
        width: 1200,
        height: 630,
        caption: "Deepakkumar V – Full Stack Developer",
      },
      jobTitle: "Full Stack Developer",
      description:
        "Deepakkumar V, also known as Deepak, is a Full Stack Developer and UI/UX Designer from India, skilled in React, Next.js, MERN Stack, Flutter, FlutterFlow, and Firebase. He studied at Karpagam College of Engineering and builds modern, responsive web and mobile applications.",
      knowsAbout: [
        "React.js",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "MERN Stack",
        "Flutter",
        "FlutterFlow",
        "Firebase",
        "TypeScript",
        "UI/UX Design",
        "Full Stack Development",
      ],
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "Karpagam College of Engineering",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Coimbatore",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Salem",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      sameAs: [
        "https://github.com/Deepak5556",
        "https://www.linkedin.com/in/deepakkumar/",
        "https://www.instagram.com/insta_boy_deepak__/",
        "https://deepakportfolioo.web.app/",
      ],
    },

    // ── 2. ProfilePage schema — boosts Google's understanding of portfolio pages ──
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": "https://deepakportfolioo.web.app/#profilepage",
      url: "https://deepakportfolioo.web.app/",
      name: "Deepak – Deepakkumar V | Full Stack Developer Portfolio",
      description:
        "The official portfolio of Deepakkumar V (Deepak), a Full Stack Developer from India. Features React, MERN, Flutter, and Firebase projects.",
      dateCreated: "2025-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      mainEntity: {
        "@id": "https://deepakportfolioo.web.app/#person",
      },
    },

    // ── 3. WebSite schema — enables SearchAction sitelinks ──
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://deepakportfolioo.web.app/#website",
      url: "https://deepakportfolioo.web.app/",
      name: "Deepakkumar V Portfolio",
      alternateName: "Deepak Portfolio",
      description:
        "Portfolio website of Deepakkumar V (Deepak) — Full Stack Developer and UI/UX Designer from India.",
      publisher: {
        "@id": "https://deepakportfolioo.web.app/#person",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://deepakportfolioo.web.app/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },

    // ── 4. CreativeWork — the portfolio itself ──
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "https://deepakportfolioo.web.app/#portfolio",
      name: "Deepakkumar V – Full Stack Developer Portfolio",
      creator: {
        "@id": "https://deepakportfolioo.web.app/#person",
      },
      description:
        "A modern, responsive portfolio website built with React and Next.js showcasing full-stack, Flutter, and MERN stack projects by Deepakkumar V (Deepak).",
      url: "https://deepakportfolioo.web.app/",
      thumbnailUrl:
        "https://deepakportfolioo.web.app/assets/ProfileImage-DvYnejqx.jpg",
      datePublished: "2025-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      keywords:
        "Deepak, Deepakkumar, Full Stack Developer, React, MERN, Flutter, Firebase, UI/UX, India",
      inLanguage: "en-US",
    },

    // ── 5. ItemList — project showcase (structured for Google rich results) ──
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Projects by Deepakkumar V",
      description:
        "A list of web and mobile development projects built by Deepakkumar V (Deepak), Full Stack Developer.",
      url: "https://deepakportfolioo.web.app/",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "MERN Stack Portfolio Website",
          description:
            "Responsive developer portfolio built with React, Node.js, Express, and MongoDB by Deepakkumar V.",
          url: "https://deepakportfolioo.web.app/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Flutter Mobile Application",
          description:
            "Cross-platform mobile app developed using Flutter and Firebase by Deepakkumar V.",
          url: "https://deepakportfolioo.web.app/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "React & Firebase Web App",
          description:
            "A full-stack web application built with React, Firebase, and modern UI/UX principles by Deepakkumar V.",
          url: "https://deepakportfolioo.web.app/",
        },
      ],
    },

    // ── 6. FAQPage — captures featured snippets & AI search answers ──
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Deepakkumar V?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deepakkumar V, also known as Deepak, is a Full Stack Developer and UI/UX Designer from Salem, Tamil Nadu, India. He specializes in React, Next.js, MERN Stack, Flutter, and Firebase development. He studied at Karpagam College of Engineering.",
          },
        },
        {
          "@type": "Question",
          name: "Who is Deepak the developer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deepak (full name Deepakkumar V) is a Full Stack Developer from India who builds modern web and mobile applications using React, Next.js, Flutter, and the MERN stack. His portfolio is at deepakportfolioo.web.app.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies does Deepakkumar V use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deepakkumar V works with React.js, Next.js, Node.js, Express.js, MongoDB (MERN Stack), Flutter, FlutterFlow, Firebase, TypeScript, and modern UI/UX design tools.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I see Deepakkumar V's projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can explore Deepakkumar V's projects on his portfolio website at https://deepakportfolioo.web.app/ and his GitHub at https://github.com/Deepak5556.",
          },
        },
        {
          "@type": "Question",
          name: "How can I hire Deepakkumar V?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can reach out to Deepakkumar V (Deepak) via his portfolio contact page at https://deepakportfolioo.web.app/ or through his LinkedIn profile.",
          },
        },
      ],
    },

    // ── 7. BreadcrumbList — navigation signal for Google ──
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://deepakportfolioo.web.app/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: "https://deepakportfolioo.web.app/#projects",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Contact",
          item: "https://deepakportfolioo.web.app/#contact",
        },
      ],
    },
  ];

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${fraunces.variable}`}
    >
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />

        {/* ── Canonical & alternate (belt-and-suspenders) ── */}
        <link rel="canonical" href="https://deepakportfolioo.web.app/" />

        {/* ── robots.txt hint: allow AI bots (ChatGPT, Perplexity, Claude) ── */}
        {/* Add these lines to your public/robots.txt file too:
            User-agent: GPTBot
            Allow: /
            User-agent: PerplexityBot
            Allow: /
            User-agent: ClaudeBot
            Allow: /
        */}

        {/* ── Structured Data (JSON-LD) ── */}
        {jsonLdData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>

      <body className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden relative">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <PageBackground />
          <LoadingProvider>
            <Navbar />
            <main
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12 space-y-16 sm:space-y-20"
              aria-label="Deepakkumar V Portfolio – Main Content"
            >
              {children}
            </main>
            <Footer />
          </LoadingProvider>
        </ThemeProvider>

        {/* ── Analytics (Ahrefs) ── */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="8l8rZ/sMCZRXQIm96lkxAQ"
          strategy="afterInteractive"
        />

        {/* ── Live Chat (Tawk.to) ── */}
        <Script id="tawk-to" strategy="lazyOnload">
          {`
            var Tawk_API = Tawk_API || {},
              Tawk_LoadStart = new Date();
            (function () {
              var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = "https://embed.tawk.to/67cf27a229773a1910382696/1im0j5lf7";
              s1.charset = "UTF-8";
              s1.setAttribute("crossorigin", "*");
              if (s0 && s0.parentNode) s0.parentNode.insertBefore(s1, s0);
              else document.head.appendChild(s1);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}