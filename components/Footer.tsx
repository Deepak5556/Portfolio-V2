import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin, Globe } from "lucide-react";
import { profile, navItems } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6 sm:mb-8">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 ring-1 ring-border">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback className="text-xs">{profile.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold">{profile.name}</p>
              <p className="text-xs text-muted-foreground">{profile.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-9 w-9 sm:h-8 sm:w-8" asChild>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={14} />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="h-9 w-9 sm:h-8 sm:w-8" asChild>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={14} />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="h-9 w-9 sm:h-8 sm:w-8" asChild>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="h-9 w-9 sm:h-8 sm:w-8" asChild>
              <a href={`https://${profile.website}`} target="_blank" rel="noopener noreferrer" aria-label="Website">
                <Globe size={14} />
              </a>
            </Button>
          </div>
        </div>

        <Separator />

        {/* Nav links */}
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-x-6 gap-y-3 sm:gap-y-2 my-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.id}
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Separator />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-6">
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            © {new Date().getFullYear()} Deepakkumar V · All rights reserved.
          </p>
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            Built with Next.js, Tailwind CSS & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
