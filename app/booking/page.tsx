"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Clock, Video, Globe, Info, ChevronLeft
} from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/Shared";
import { useTheme } from "next-themes";

export default function BookingPage() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      const currentTheme = (resolvedTheme || theme || "dark") as "light" | "dark";
      
      cal("ui", {
        "theme": currentTheme,
        "styles": {
          "branding": {
            "brandColor": "#F97316" // Matching website's --accent color
          }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, [mounted, theme, resolvedTheme]);

  if (!mounted) return null;

  const currentTheme = (resolvedTheme || theme || "dark") as "light" | "dark";

  return (
    <section id="booking" className="scroll-mt-20 animate-fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="flex justify-start mb-6">
        <Button variant="ghost" size="sm" asChild className="text-muted-foreground transition-all hover:bg-muted font-medium hover:text-foreground">
          <Link href="/">
            <ChevronLeft size={16} className="mr-1" /> Back to Home
          </Link>
        </Button>
      </div>

      <div className="mb-10 sm:mb-16 text-center">
        <SectionLabel>Availability</SectionLabel>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-4">
          Book a 1:1 Session<span className="accent-dot">.</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
          Ready to take your project to the next level? Schedule a 30-minute session 
          to discuss technical strategies, collaborations, or creative directions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Call Details */}
        <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
          <Card className="border-border/50 bg-card/50 shadow-sm backdrop-blur-xl transition-all hover:border-accent/20">
            <CardHeader className="px-6 pb-2">
              <CardTitle className="text-lg flex items-center gap-3">
                <Info size={20} className="text-accent" /> Session Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 px-6 py-6 font-sans">
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold">30 Minutes Focused</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Concise and effective discussion time.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Video size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold">Live Consultation</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Face-to-face video call for maximum clarity.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-2 rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Globe size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold">Timezone Aware</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Scheduling adapts automatically to your location.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="p-6 rounded-2xl border border-dashed border-border bg-muted/30 text-center animate-pulse-slow">
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
              &quot;Let&apos;s bridge the gap between ideas and execution. Looking forward to our session!&quot;
            </p>
          </div>
        </div>

        {/* Cal.com Embed */}
        <div className="lg:col-span-8 shadow-2xl rounded-3xl overflow-hidden border border-border/50 bg-card order-1 lg:order-2 min-h-[650px] sm:min-h-[750px] lg:min-h-[850px] h-full transition-all hover:border-accent/20">
          <Cal
            key={currentTheme}
            namespace="30min"
            calLink="deepakkumarv/30min"
            style={{ width: "100%", height: "100%" }}
            config={{ 
              layout: "month_view", 
              theme: currentTheme,
            }}
          />
        </div>
      </div>
    </section>
  );
}
