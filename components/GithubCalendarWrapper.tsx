"use client";

import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionLabel } from "@/components/Shared";
import { useTheme } from "next-themes";

export function GithubCalendarWrapper({ username }: { username: string }) {
  const { resolvedTheme } = useTheme();
  
  // Custom theme colors matching your website's orange accent
  const themeColors = {
    light: ['#f1f5f9', '#ffedd5', '#fed7aa', '#f97316', '#c2410c'],
    dark: ['#1e293b', '#431407', '#7c2d12', '#ea580c', '#fb923c'],
  };

  return (
    <Card className="border-border/50 shadow-sm overflow-hidden bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
        <SectionLabel>Contribution Activity</SectionLabel>
        <CardTitle className="text-lg sm:text-xl">Open Source Journey</CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Tracking my daily commits and code contributions on GitHub.
        </CardDescription>
      </CardHeader>
      <CardContent className="py-4 sm:py-6 px-2 sm:px-6 overflow-hidden">
        <div className="flex flex-col items-center">
            <div className="w-full overflow-x-auto no-scrollbar pb-2">
                <div className="min-w-[650px] sm:min-w-0 flex justify-center scale-[0.75] sm:scale-[0.85] md:scale-100 origin-left sm:origin-center transition-transform">
                    <GitHubCalendar 
                      username={username} 
                      fontSize={11}
                      blockSize={11}
                      blockMargin={3}
                      theme={themeColors}
                      colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
                    />
                </div>
            </div>
            <p className="text-[10px] text-muted-foreground mt-3 sm:mt-4 md:hidden italic">
              Scroll horizontally to see full activity ↔
            </p>
        </div>
      </CardContent>
    </Card>
  );
}
