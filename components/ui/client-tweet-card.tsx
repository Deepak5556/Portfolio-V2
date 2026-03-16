"use client";

import React from "react";
import { Twitter } from "lucide-react";
import { Card } from "./card";

export function ClientTweetCard({ id, className }: { id: string; className?: string }) {
  return (
    <Card className={`p-4 bg-muted/20 border-border/50 rounded-2xl flex flex-col gap-3 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
            <Twitter size={14} className="text-blue-500" />
          </div>
          <span className="text-xs font-bold">Twitter Post</span>
        </div>
        <span className="text-[10px] text-muted-foreground font-mono">ID: {id}</span>
      </div>
      <div className="text-sm text-muted-foreground italic">
        [Embedded Tweet Content would render here. For a live production, you would use a library like react-tweet.]
      </div>
      <a 
        href={`https://twitter.com/i/status/${id}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[10px] text-blue-500 hover:underline font-bold uppercase tracking-widest"
      >
        View on Twitter
      </a>
    </Card>
  );
}

export const TweetCard = ClientTweetCard;
