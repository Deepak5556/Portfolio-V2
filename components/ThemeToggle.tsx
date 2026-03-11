"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  duration?: number;
}

export function ThemeToggle({ className, duration = 400 }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = React.useCallback(() => {
    const button = buttonRef.current;
    if (!button) return;

    const isDark = resolvedTheme === "dark";
    const newTheme = isDark ? "light" : "dark";

    const { top, left, width, height } = button.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
    const maxRadius = Math.hypot(
      Math.max(x, viewportWidth - x),
      Math.max(y, viewportHeight - y)
    );

    const applyTheme = () => {
      setTheme(newTheme);
    };

    if (typeof document.startViewTransition !== "function") {
      applyTheme();
      return;
    }

    const transition = document.startViewTransition(() => {
      flushSync(applyTheme);
    });

    const ready = transition?.ready;
    if (ready && typeof ready.then === "function") {
      ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
    }
  }, [resolvedTheme, setTheme, duration]);

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-full",
        "text-muted-foreground hover:text-foreground hover:bg-muted/50",
        "transition-colors duration-200 cursor-pointer",
        className
      )}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-400 transition-transform duration-300 rotate-0 scale-100" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-blue-500 transition-transform duration-300 rotate-0 scale-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
