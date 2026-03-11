"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Calendar, Menu, ArrowRight } from "lucide-react";
import { profile, navItems } from "@/lib/data";
import { RoleCarousel } from "@/components/RoleCarousel";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Left — avatar + name */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <Avatar className="h-8 w-8 ring-1 ring-border ring-offset-1 ring-offset-background shadow-sm">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback className="text-[10px]">{profile.initials}</AvatarFallback>
            </Avatar>
            <div className="hidden sm:flex flex-col -space-y-0.5 min-w-[120px]">
              <span className="text-sm font-bold text-foreground leading-tight">
                {profile.name}
              </span>
              <RoleCarousel className="text-[9px] text-primary font-bold uppercase tracking-wider h-3 overflow-hidden" />
            </div>
          </Link>
        </div>

        {/* Center — nav links (desktop only) */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.id}
              data-active={pathname === item.id || (pathname?.startsWith(item.id) && item.id !== "/")}
              className="nav-link flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-all duration-200 whitespace-nowrap data-[active=true]:text-foreground data-[active=true]:bg-muted/50 rounded-md"
            >
              {item.icon && <item.icon size={16} className="shrink-0" />}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right — actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <ThemeToggle />
          
          {/* Book 1:1 button — hidden on mobile */}
          <Button
            size="sm"
            asChild
            className="hidden md:flex text-[11px] font-bold h-8 gap-2 rounded-full px-4 shadow-sm"
          >
            <Link href="/booking">
              <Calendar size={13} />
              Book 1:1
            </Link>
          </Button>

          {/* Hamburger menu — visible below lg breakpoint */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-9 w-9 rounded-lg"
                aria-label="Open navigation menu"
              >
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] pt-12">
              <SheetHeader className="mb-6">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 ring-2 ring-border ring-offset-2 ring-offset-background shadow-md">
                    <AvatarImage src={profile.avatar} alt={profile.name} />
                    <AvatarFallback className="text-xs font-bold">{profile.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <SheetTitle className="text-base font-bold">{profile.name}</SheetTitle>
                    <SheetDescription className="text-xs font-medium">{profile.role}</SheetDescription>
                  </div>
                </div>
              </SheetHeader>

              {/* Mobile nav links */}
              <nav className="flex flex-col gap-1 px-1">
                {navItems.map((item, i) => (
                  <SheetClose asChild key={item.id}>
                    <Link
                      href={item.id}
                      data-active={pathname === item.id || (pathname?.startsWith(item.id) && item.id !== "/")}
                      className="group flex items-center justify-between px-4 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-all duration-200 data-[active=true]:text-foreground data-[active=true]:bg-muted/60 data-[active=true]:border-l-2 data-[active=true]:border-primary animate-slide-in-right"
                      style={{ animationDelay: `${i * 50}ms`, opacity: 0 }}
                    >
                      <div className="flex items-center gap-2">
                        {item.icon && <item.icon size={18} className="shrink-0" />}
                        <span>{item.label}</span>
                      </div>
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              {/* Mobile Book button */}
              <div className="mt-8 px-1">
                <SheetClose asChild>
                  <Button asChild className="w-full gap-2 h-11 rounded-xl font-bold shadow-lg">
                    <Link href="/booking">
                      <Calendar size={16} />
                      Book Now
                    </Link>
                  </Button>
                </SheetClose>
              </div>

              {/* Footer info */}
              <div className="mt-auto pt-8 px-1">
                <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <p className="text-xs text-foreground font-medium">{profile.location}</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
