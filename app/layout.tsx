import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LoadingProvider } from "@/components/LoadingProvider";
import { PageBackground } from "@/components/PageBackground";
// ─── Fonts ────────────────────────────────────────────────────────────────────
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

// ─── Constants ────────────────────────────────────────────────────────────────
const SITE_URL   = "https://deepakportfolioo.web.app";
const PERSON_ID  = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const OG_IMAGE   = `${SITE_URL}/assets/ProfileImage-DvYnejqx.jpg`;

//  ✅ FIX: Full ISO 8601 datetime — Google requires time + timezone offset.
//          NEVER use .split("T")[0] or bare "YYYY-MM-DD" — those are INVALID
//          and cause "Invalid datetime value" critical errors in Rich Results.
const DATE_CREATED  = "2025-05-26T00:00:00+05:30"; // ✅ fixed, static publish date
const DATE_MODIFIED = new Date().toISOString();      // ✅ always valid ISO 8601

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = { 
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Deepakkumar V – Full Stack Developer | React, Flutter & MERN Portfolio",
    template: "%s | Deepakkumar V – Full Stack Developer",
  },

  description:
    "Deepakkumar V – Full Stack & Flutter Developer from Tamil Nadu, India. Explore React, Next.js, MERN, Firebase & UI/UX projects. Available to hire or collaborate.",

  keywords: [
    // ── Branded (highest priority)
    "Deepak",
    "Deepakkumar",
    "Deepakkumar V",
    "Deepak Kumar",
    "Deepak portfolio",
    "Deepakkumar V portfolio",
    "Deepakkumar V developer",
    // ── Role + stack (2026 trending)
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer India",
    "Next.js Developer",
    "Flutter Developer",
    "FlutterFlow Developer",
    "Firebase Developer",
    "TypeScript Developer India",
    "UI UX Designer Developer",
    "AI-integrated developer",
    // ── Long-tail location & intent
    "Full Stack Developer Tamil Nadu",
    "Full Stack Developer Coimbatore",
    "React Developer Tamil Nadu",
    "Full Stack Developer portfolio India",
    "hire full stack developer India",
    "React developer portfolio 2026",
    "MERN stack portfolio 2026",
    "Flutter app developer India",
    "freelance web developer Tamil Nadu",
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

  authors:   [{ name: "Deepakkumar V", url: SITE_URL }],
  creator:   "Deepakkumar V",
  publisher: "Deepakkumar V",

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:              true,
      follow:             true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      "en-IN": `${SITE_URL}/`,
      "en":    `${SITE_URL}/`,
    },
  },

  // ── Open Graph ──────────────────────────────────────────────────────────────
  openGraph: {
    type:      "profile",
    firstName: "Deepakkumar",
    lastName:  "V",
    username:  "Deepak",
    gender:    "male",
    locale:    "en_IN",
    url:       `${SITE_URL}/`,
    title:
      "Deepak (Deepakkumar V) | Full Stack Developer – React, Flutter & MERN",
    description:
      "Deepakkumar V, known as Deepak, is a Full Stack Developer from Tamil Nadu, India specializing in React, Next.js, Flutter, MERN, and Firebase. View live projects and get in touch.",
    siteName: "Deepakkumar V – Developer Portfolio",
    images: [
      {
        url:    OG_IMAGE,
        width:  1200,
        height: 630,
        alt:    "Deepakkumar V (Deepak) – Full Stack Developer from India",
        type:   "image/jpeg",
      },
    ],
  },

  // ── Twitter / X Card ────────────────────────────────────────────────────────
  twitter: {
    card:        "summary_large_image",
    title:       "Deepak (Deepakkumar V) | Full Stack Developer Portfolio 2026",
    description:
      "Explore projects by Deepakkumar V — Full Stack Developer in React, Next.js, Flutter & MERN. Based in Tamil Nadu, India.",
    images: [OG_IMAGE],
  },

  // ── Icons ────────────────────────────────────────────────────────────────────
  icons: {
    icon:     "/icon.png",
    apple:    "/apple-icon.png",
    shortcut: "/icon.png",
  },

  // ── Verification ─────────────────────────────────────────────────────────────
  verification: {
    google: [
      "wKdycalYoizoKxPQ4O3BALnXZwjYeQbq2Xu2RoM2A7w",
      "google56df23a2f88dea93",
      "8AkEyC2HOQXFukpK9A2b-EWdcPHyJYJYVlepeUjpafA",
    ],
  },

  // ── Other (AI crawlers + Pinterest) ──────────────────────────────────────────
  other: {
    "p:domain_verify":       "347ab54171cf7f61296e32731fcedb62",
    "robots-gptbot":         "index, follow",
    "robots-perplexitybot":  "index, follow",
    "robots-claudebot":      "index, follow",
    // Geo targeting
    "geo.region":    "IN-TN",
    "geo.placename": "Salem, Tamil Nadu, India",
    "geo.position":  "11.6643;78.1460",
    "ICBM":          "11.6643, 78.1460",
  },
};

// ─── Viewport ─────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLdData = [

  // ── 1. Person ──────────────────────────────────────────────────────────────
  {
    "@context": "https://schema.org",
    "@type":    "Person",
    "@id":      PERSON_ID,
    name:        "Deepakkumar V",
    alternateName: ["Deepak", "Deepak Kumar", "Deepakkumar", "Deepak V"],
    url:         `${SITE_URL}/`,
    image: {
      "@type":  "ImageObject",
      url:      OG_IMAGE,
      width:    1200,
      height:   630,
      caption:  "Deepakkumar V – Full Stack Developer & UI/UX Designer",
    },
    jobTitle: [
      "Full Stack Developer",
      "MERN Stack Developer",
      "React Developer",
      "Flutter Developer",
      "UI/UX Designer",
    ],
    description:
      "Deepakkumar V, known as Deepak, is a Full Stack Developer and UI/UX Designer from Tamil Nadu, India. He specialises in React.js, Next.js, MERN Stack, Flutter, FlutterFlow, and Firebase. He studied at Karpagam College of Engineering, Coimbatore.",
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
      "JavaScript",
      "UI/UX Design",
      "Full Stack Development",
      "Mobile App Development",
      "REST API Development",
    ],
    nationality: { "@type": "Country", name: "India" },
    affiliation: {
      "@type": "CollegeOrUniversity",
      name:    "Karpagam College of Engineering",
      url:     "https://www.kce.ac.in/",
      address: {
        "@type":         "PostalAddress",
        addressLocality: "Coimbatore",
        addressRegion:   "Tamil Nadu",
        addressCountry:  "IN",
      },
    },
    address: {
      "@type":         "PostalAddress",
      addressLocality: "Salem",
      addressRegion:   "Tamil Nadu",
      addressCountry:  "IN",
    },
    sameAs: [
      "https://github.com/Deepak5556",
      "https://www.linkedin.com/in/deepakkumar/",
      "https://www.instagram.com/insta_boy_deepak__/",
      `${SITE_URL}/`,
    ],
  },

  // ── 2. ProfilePage ─────────────────────────────────────────────────────────
  //  ✅ FIX: dateCreated & dateModified must be full ISO 8601 with time.
  //          "2025-05-26" alone → INVALID (critical error in Rich Results Test).
  //          "2025-05-26T00:00:00+05:30" → ✅ VALID
  {
    "@context":    "https://schema.org",
    "@type":       "ProfilePage",
    "@id":         `${SITE_URL}/#profilepage`,
    url:           `${SITE_URL}/`,
    name:          "Deepak – Deepakkumar V | Full Stack Developer Portfolio",
    description:
      "The official portfolio of Deepakkumar V (Deepak), a Full Stack Developer from Tamil Nadu, India. Features React, Next.js, MERN, Flutter, and Firebase projects.",
    dateCreated:  DATE_CREATED,   // ✅ "2025-05-26T00:00:00+05:30"
    dateModified: DATE_MODIFIED,  // ✅ new Date().toISOString()
    inLanguage:   "en-IN",
    mainEntity: {
      "@id": PERSON_ID,
    },
    breadcrumb: {
      "@id": `${SITE_URL}/#breadcrumb`,
    },
  },

  // ── 3. WebSite ─────────────────────────────────────────────────────────────
  {
    "@context":   "https://schema.org",
    "@type":      "WebSite",
    "@id":        WEBSITE_ID,
    url:          `${SITE_URL}/`,
    name:         "Deepakkumar V Portfolio",
    alternateName: ["Deepak Portfolio", "Deepakkumar V Developer Portfolio"],
    description:
      "Portfolio of Deepakkumar V (Deepak) – Full Stack Developer and UI/UX Designer from Tamil Nadu, India.",
    inLanguage: "en-IN",
    publisher: { "@id": PERSON_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type":       "EntryPoint",
        urlTemplate:   `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },

  // ── 4. CreativeWork (the portfolio itself) ─────────────────────────────────
  //  ✅ FIX: Same date fix applied — no more .split("T")[0]
  {
    "@context":    "https://schema.org",
    "@type":       "CreativeWork",
    "@id":         `${SITE_URL}/#portfolio`,
    name:          "Deepakkumar V – Full Stack Developer Portfolio",
    creator:       { "@id": PERSON_ID },
    description:
      "Modern, responsive developer portfolio by Deepakkumar V built with React and Next.js, showcasing full-stack, Flutter, MERN, and Firebase projects.",
    url:           `${SITE_URL}/`,
    thumbnailUrl:  OG_IMAGE,
    datePublished: DATE_CREATED,   // ✅ full ISO 8601
    dateModified:  DATE_MODIFIED,  // ✅ full ISO 8601
    keywords:
      "Deepak, Deepakkumar V, Full Stack Developer, React, Next.js, MERN, Flutter, Firebase, UI/UX, Tamil Nadu, India",
    inLanguage: "en-IN",
    genre:      "Portfolio",
    about:      { "@id": PERSON_ID },
  },

  // ── 5. ItemList (project showcase) ────────────────────────────────────────
  {
    "@context":     "https://schema.org",
    "@type":        "ItemList",
    name:           "Projects by Deepakkumar V",
    description:
      "Web and mobile development projects by Deepakkumar V – React, MERN Stack, Flutter, and Firebase.",
    url:            `${SITE_URL}/`,
    numberOfItems:  3,
    itemListElement: [
      {
        "@type":      "ListItem",
        position:     1,
        name:         "MERN Stack Portfolio Website",
        description:
          "Responsive developer portfolio built with React, Node.js, Express.js, and MongoDB by Deepakkumar V.",
        url: `${SITE_URL}/`,
      },
      {
        "@type":      "ListItem",
        position:     2,
        name:         "Flutter Mobile Application",
        description:
          "Cross-platform mobile app built with Flutter and Firebase by Deepakkumar V for Android and iOS.",
        url: `${SITE_URL}/`,
      },
      {
        "@type":      "ListItem",
        position:     3,
        name:         "React & Firebase Web App",
        description:
          "Full-stack web application using React, Firebase Firestore, and modern UI/UX by Deepakkumar V.",
        url: `${SITE_URL}/`,
      },
    ],
  },

  // ── 6. FAQPage (rich results – appears in Google SERP) ─────────────────────
  {
    "@context": "https://schema.org",
    "@type":    "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name:    "Who is Deepakkumar V?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Deepakkumar V, known as Deepak, is a Full Stack Developer and UI/UX Designer from Tamil Nadu, India. He specialises in React.js, Next.js, MERN Stack, Flutter, FlutterFlow, and Firebase, and studied at Karpagam College of Engineering, Coimbatore.",
        },
      },
      {
        "@type": "Question",
        name:    "What technologies does Deepakkumar V use?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Deepakkumar V works with React.js, Next.js, Node.js, Express.js, MongoDB (MERN Stack), Flutter, FlutterFlow, Firebase, TypeScript, and JavaScript for full stack web and mobile app development.",
        },
      },
      {
        "@type": "Question",
        name:    "Is Deepakkumar V available for freelance projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Deepakkumar V is available for freelance web development, mobile app development, and UI/UX design projects across India and internationally. Visit deepakportfolioo.web.app to get in touch.",
        },
      },
      {
        "@type": "Question",
        name:    "Where is Deepakkumar V located?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Deepakkumar V is based in Salem, Tamil Nadu, India, and studied at Karpagam College of Engineering in Coimbatore, Tamil Nadu.",
        },
      },
    ],
  },

  // ── 7. BreadcrumbList ──────────────────────────────────────────────────────
  {
    "@context": "https://schema.org",
    "@type":    "BreadcrumbList",
    "@id":      `${SITE_URL}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/#projects` },
      { "@type": "ListItem", position: 3, name: "Skills",   item: `${SITE_URL}/#skills` },
      { "@type": "ListItem", position: 4, name: "Contact",  item: `${SITE_URL}/#contact` },
    ],
  },
];

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${dmSans.variable} ${fraunces.variable}`}
    >
      <head>
        {/* ── Google AdSense ── */}
        <meta name="google-adsense-account" content="ca-pub-7641497638276280" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7641497638276280"
          crossOrigin="anonymous"
        />

        {/* ── Performance: preconnect critical origins ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* ── Poppins (supplementary display font) ── */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />

        {/* ── Preload LCP image ── */}
        <link
          rel="preload"
          href={OG_IMAGE}
          as="image"
          type="image/jpeg"
          // @ts-expect-error fetchpriority is valid but not yet in React types
          fetchpriority="high"
        />

        {/* ── Canonical (belt-and-suspenders alongside Next.js alternates) ── */}
        <link rel="canonical" href={`${SITE_URL}/`} />

        {/* ── Geo meta tags ── */}
        <meta name="geo.region"    content="IN-TN" />
        <meta name="geo.placename" content="Salem, Tamil Nadu, India" />
        <meta name="geo.position"  content="11.6643;78.1460" />
        <meta name="ICBM"          content="11.6643, 78.1460" />

        {/*
          ── robots.txt: allow AI bots (add to /public/robots.txt) ──
          User-agent: GPTBot
          Allow: /
          User-agent: PerplexityBot
          Allow: /
          User-agent: ClaudeBot
          Allow: /
        */}

        {/* ── JSON-LD Structured Data ── */}
        {jsonLdData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>

      <body className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden relative">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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

        {/* ── Ahrefs Analytics ── */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="8l8rZ/sMCZRXQIm96lkxAQ"
          strategy="afterInteractive"
        />

        {/* ── Tawk.to Live Chat ── */}
        <Script id="tawk-to" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),
                  s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src="https://embed.tawk.to/67cf27a229773a1910382696/1im0j5lf7";
              s1.charset="UTF-8";
              s1.setAttribute("crossorigin","*");
              if(s0&&s0.parentNode) s0.parentNode.insertBefore(s1,s0);
              else document.head.appendChild(s1);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}