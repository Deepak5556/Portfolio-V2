"use client";

import { useState } from "react";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail, Github, Linkedin, ExternalLink, Phone, Send, Calendar, CheckCircle2, ArrowRight
} from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/Shared";
import { profile } from "@/lib/data";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (formState.name && formState.email && formState.message) {
      setSent(true);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 animate-fade-up">
      <div className="mb-8 sm:mb-12 text-center">
        <SectionLabel>Let's Talk</SectionLabel>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-2">
          Get in Touch<span className="accent-dot">.</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-2xl mx-auto">
          Have a project in mind or just want to chat about tech? Drop me a message below or connect via social media.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Contact info + links */}
        <div className="space-y-4">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Open to freelance, internships, and full-time roles. Whether you have a project idea
            or just want to say hi — my inbox is always open.
          </p>

          <div className="space-y-3">
            {[
              { icon: Mail,     label: "Email",    value: profile.email,    href: `mailto:${profile.email}` },
              { icon: Github,   label: "GitHub",   value: "github.com/deepakkumarv",  href: profile.github },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/deepakkumarv", href: profile.linkedin },
              { icon: Phone,    label: "Location", value: profile.location, href: "#" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border border-border bg-muted/40 hover:bg-muted transition-colors group">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-muted-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="text-xs sm:text-sm font-medium text-foreground truncate">{item.value}</p>
                  </div>
                  <ExternalLink size={11} className="ml-auto text-muted-foreground/0 group-hover:text-muted-foreground transition-colors shrink-0" />
                </a>
              );
            })}
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-primary/5 border border-primary/10">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
              <Calendar size={18} className="text-primary" /> Prefer a Video Call?
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
              If you'd rather talk face-to-face, you can book a dedicated 1:1 intro call 
              on my scheduling page.
            </p>
            <Button variant="outline" className="w-full gap-2 group h-10 sm:h-9" asChild>
              <Link href="/booking">
                Go to Booking <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Contact form */}
        <Card className="card-hover">
          <CardHeader className="px-4 sm:px-6">
            <SectionLabel>Message</SectionLabel>
            <CardTitle className="text-base sm:text-lg">Send a Message</CardTitle>
            <CardDescription className="text-xs sm:text-sm">I'll get back to you within 24 hours.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 px-4 sm:px-6">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-8 sm:py-10 gap-3 text-center">
                <CheckCircle2 size={32} className="text-emerald-500" />
                <p className="text-sm font-semibold">Message sent!</p>
                <p className="text-xs text-muted-foreground">Thanks for reaching out — I'll reply soon.</p>
              </div>
            ) : (
              <>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">Name</label>
                  <Input
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="h-10 sm:h-9"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">Email</label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="h-10 sm:h-9"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">Message</label>
                  <Textarea
                    placeholder="What's on your mind?"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="min-h-[100px] sm:min-h-[120px]"
                  />
                </div>
              </>
            )}
          </CardContent>
          {!sent && (
            <CardFooter className="px-4 sm:px-6">
              <Button onClick={handleSend} className="w-full gap-2 h-11 sm:h-10">
                <Send size={14} /> Send Message
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </section>
  );
}
