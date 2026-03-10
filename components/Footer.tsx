"use client";

import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin, Globe } from "lucide-react";
import { profile, navItems } from "@/lib/data";
import { DottedMap } from "@/components/ui/dotted-map";

const markers = [
  { lat: 40.7128, lng: -74.006, size: 0.3 }, // New York
  { lat: 34.0522, lng: -118.2437, size: 0.3 }, // Los Angeles
  { lat: 51.5074, lng: -0.1278, size: 0.3 }, // London
  { lat: -33.8688, lng: 151.2093, size: 0.3 }, // Sydney
  { lat: 48.8566, lng: 2.3522, size: 0.3 }, // Paris
  { lat: 35.6762, lng: 139.6503, size: 0.3 }, // Tokyo
  { lat: 13.0827, lng: 80.2707, size: 0.8, color: "#22c55e" }, // Chennai, Tamil Nadu (Highlighted Home Base)
  { lat: 1.3521, lng: 103.8198, size: 0.3 }, // Singapore
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-md mt-16 sm:mt-24 relative overflow-hidden">
      {/* Interactive Map Overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.08] pointer-events-none">
          <DottedMap markers={markers} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
        
        {/* Map Demo Section (Optional Visual) */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-border/40 bg-background/40 backdrop-blur-xl h-64 sm:h-80 relative group">
             <div className="absolute inset-0 bg-radial from-transparent to-background/80" />
             <DottedMap markers={markers} />
             <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                <p className="text-xl sm:text-2xl font-black tracking-tight">Global Engineering<span className="text-orange-500">.</span></p>
                <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mt-1">Deploying solutions across the edge</p>
             </div>
        </div>

        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 ring-2 ring-primary/10 ring-offset-4 ring-offset-background">
              <AvatarImage src={profile.avatar} alt={profile.name} className="object-cover" />
              <AvatarFallback className="text-sm font-black">{profile.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-black tracking-tight uppercase tracking-widest text-xs">{profile.name}</p>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mt-0.5">{profile.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[
                { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
                { icon: Github, href: profile.github, label: "GitHub" },
                { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
                { icon: Globe, href: `https://${profile.website}`, label: "Website" }
            ].map((social) => (
                <Button key={social.label} variant="outline" size="icon" className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl border-border/50 hover:border-primary/50 transition-all hover:bg-primary/5 shadow-sm" asChild>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon size={18} />
                  </a>
                </Button>
            ))}
          </div>
        </div>

        <Separator className="bg-border/40" />

        {/* Links and Info */}
        <div className="flex flex-col md:flex-row justify-between gap-10 py-10">
            <div className="grid grid-cols-2 sm:flex flex-wrap gap-x-8 gap-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.id}
                  className="text-xs sm:text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div className="text-left md:text-right space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Local Time</p>
                <p className="text-xs font-bold font-mono">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}</p>
            </div>
        </div>

        <Separator className="bg-border/40" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
            © {new Date().getFullYear()} {profile.name} <span className="text-orange-500 mx-1">/</span> SYNCED
          </p>
          <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                Next.js · Tailwind · MagicUI
              </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
