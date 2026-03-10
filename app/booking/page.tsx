"use client";

import { useState } from "react";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Calendar, CheckCircle2, Clock, Video, Globe, 
  User, Mail, ArrowRight, Info, ChevronLeft
} from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/Shared";

export default function BookingPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate booking
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="booking" className="scroll-mt-20 animate-fade-up">
      <Button variant="ghost" size="sm" asChild className="mb-6 sm:mb-8 -ml-2 text-muted-foreground">
        <Link href="/">
          <ChevronLeft size={16} className="mr-1" /> Back to Home
        </Link>
      </Button>

      <div className="mb-8 sm:mb-10 text-center">
        <SectionLabel>Availability</SectionLabel>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-2">
          Book a 1:1 Session<span className="accent-dot">.</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-3 max-w-lg mx-auto">
          Schedule a 30-minute video call to discuss projects, collaborations, or tech.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Call Details */}
        <div className="lg:col-span-1 space-y-4 sm:space-y-6">
          <Card className="border-primary/10 bg-primary/[0.02]">
            <CardHeader className="px-4 sm:px-6">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <Info size={18} className="text-primary" /> Meeting Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-4 sm:px-6">
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-muted-foreground mt-1 shrink-0" />
                <div>
                  <p className="text-sm font-semibold">30 Minutes</p>
                  <p className="text-xs text-muted-foreground">Standard intro call</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Video size={16} className="text-muted-foreground mt-1 shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Google Meet</p>
                  <p className="text-xs text-muted-foreground">Link sent after booking</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe size={16} className="text-muted-foreground mt-1 shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Anywhere</p>
                  <p className="text-xs text-muted-foreground">Available globally</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="p-4 rounded-xl border border-dashed border-border text-center">
            <p className="text-xs text-muted-foreground">
              "Looking forward to connecting and discussing how we can work together!"
            </p>
          </div>
        </div>

        {/* Booking Form */}
        <Card className="lg:col-span-2 shadow-xl border-border/50">
          <CardHeader className="px-4 sm:px-6">
            <CardTitle className="text-base sm:text-lg">Schedule Time</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Select your preferred slot below.</CardDescription>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-10 sm:py-12 gap-4 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <CheckCircle2 size={28} className="sm:hidden" />
                  <CheckCircle2 size={32} className="hidden sm:block" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">Booking Confirmed!</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">Calendar invite sent to your email.</p>
                </div>
                <Button variant="outline" onClick={() => setSent(false)} className="mt-4 h-10 sm:h-9">
                  Make another booking
                </Button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <User size={12} /> Full Name
                    </label>
                    <Input placeholder="Deepak Kumar" required className="h-11 sm:h-10" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Mail size={12} /> Email Address
                    </label>
                    <Input type="email" placeholder="deepak@example.com" required className="h-11 sm:h-10" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Calendar size={12} /> Date
                    </label>
                    <Input type="date" required className="h-11 sm:h-10" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Clock size={12} /> Time Slot
                    </label>
                    <Input type="time" required className="h-11 sm:h-10" />
                  </div>
                </div>

                <div className="pt-2 sm:pt-4">
                  <Button type="submit" className="w-full h-12 sm:h-11 gap-2 text-sm sm:text-base shadow-lg shadow-primary/20" disabled={loading}>
                    {loading ? "Processing..." : (
                      <>
                        Confirm Booking <ArrowRight size={18} />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
