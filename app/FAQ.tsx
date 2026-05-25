"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Who is Deepakkumar V?",
    answer:
      "Deepakkumar V, also known as Deepak, is a Full Stack Developer and UI/UX Designer from Salem, Tamil Nadu, India. He specializes in React, Next.js, MERN Stack, Flutter, and Firebase development. He studied at Karpagam College of Engineering.",
  },
  {
    question: "Who is Deepak the developer?",
    answer:
      "Deepak (full name Deepakkumar V) is a Full Stack Developer from India who builds modern web and mobile applications using React, Next.js, Flutter, and the MERN stack. His portfolio is at deepakportfolioo.web.app.",
  },
  {
    question: "What technologies does Deepakkumar V use?",
    answer:
      "Deepakkumar V works with React.js, Next.js, Node.js, Express.js, MongoDB (MERN Stack), Flutter, FlutterFlow, Firebase, TypeScript, and modern UI/UX design tools.",
  },
  {
    question: "Where can I see Deepakkumar V's projects?",
    answer:
      "You can explore Deepakkumar V's projects on his portfolio website at deepakportfolioo.web.app and his GitHub at github.com/Deepak5556.",
  },
  {
    question: "How can I hire Deepakkumar V?",
    answer:
      "You can reach out to Deepakkumar V (Deepak) via his portfolio contact page at deepakportfolioo.web.app or through his LinkedIn profile.",
  },
  {
    question: "Is Deepakkumar V available for freelance work?",
    answer:
      "Yes! Deepakkumar V is open to freelance and contract opportunities. He has experience building production-ready web and mobile applications for clients. Reach out via the contact section of this portfolio.",
  },
];

// JSON-LD FAQ Schema — injected once for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="w-full py-16 sm:py-20"
      aria-label="Frequently Asked Questions"
    >
      {/* ── Inline FAQ JSON-LD (page-level; remove from layout.tsx FAQPage) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Heading ── */}
      <div className="text-center mb-12">
        <p className="text-sm font-medium tracking-widest uppercase text-orange-500 mb-2">
          Got Questions?
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground font-[var(--font-fraunces)]">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-base">
          Quick answers about who I am, what I build, and how we can work together.
        </p>
      </div>

      {/* ── Accordion ── */}
      <div className="max-w-2xl mx-auto divide-y divide-border">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-sm"
              >
                <span className="text-base font-medium text-foreground group-hover:text-orange-500 transition-colors">
                  {faq.question}
                </span>
                {/* Animated chevron */}
                <span
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-border group-hover:border-orange-500 transition-all"
                  style={{
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.25s ease",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-3.5 h-3.5 text-muted-foreground group-hover:text-orange-500"
                  >
                    <line x1="8" y1="2" x2="8" y2="14" />
                    <line x1="2" y1="8" x2="14" y2="8" />
                  </svg>
                </span>
              </button>

              {/* Collapsible answer */}
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition: "grid-template-rows 0.3s ease",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p className="pb-5 text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── CTA ── */}
      <div className="text-center mt-12">
        <p className="text-sm text-muted-foreground mb-3">
          Still have questions?
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-orange-500 text-orange-500 text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors"
        >
          Get in touch
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}