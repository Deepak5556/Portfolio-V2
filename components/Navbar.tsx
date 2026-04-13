"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet";
import { Calendar, Menu, ArrowRight } from "lucide-react";
import { profile, navItems } from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Navbar = React.memo(function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Left — logo text */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="group flex items-center gap-1.5 py-1 px-2 -ml-2 rounded-lg hover:bg-white/5 transition-all">
            <span className="text-xl sm:text-2xl font-display font-black tracking-tight text-foreground group-hover:text-primary transition-colors uppercase">
              DK<span className="text-orange-500 tracking-normal">.</span>
            </span>
          </Link>
        </div>

        {/* Center — nav links (desktop only) */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.id}
              data-active={pathname === item.id || (pathname?.startsWith(item.id) && item.id !== "/")}
              className="flex items-center gap-2.5 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-all duration-300 whitespace-nowrap data-[active=true]:text-primary data-[active=true]:bg-primary/5 data-[active=true]:border-primary/20 border border-transparent hover:border-primary/10 rounded-xl"
            >
              {item.icon && <item.icon size={14} className="shrink-0" />}
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
            variant="outline"
            asChild
            className="hidden md:flex text-[10px] font-black uppercase tracking-widest h-9 gap-2 rounded-xl px-5 border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary shadow-sm"
          >
            <Link href="/booking">
              <Calendar size={14} />
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
              <SheetHeader className="mb-8 pl-1">
                <div className="flex items-center gap-2">
                   <span className="text-3xl font-display font-black tracking-tight text-foreground uppercase">
                    DK<span className="text-orange-500 tracking-normal">.</span>
                  </span>
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
                  <Button asChild variant="outline" className="w-full gap-2 h-11 rounded-xl font-black uppercase tracking-widest text-[11px] border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary shadow-lg transition-all">
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
});

export default Navbar;
