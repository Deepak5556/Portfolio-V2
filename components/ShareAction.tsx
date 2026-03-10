"use client";

import React, { useState } from "react";
import { 
  Share2, Link as LinkIcon, Linkedin, Twitter, 
  MessageCircle, Check, X, Share
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ShareActionProps {
  title: string;
  text?: string;
  url?: string;
  variant?: "ghost" | "outline" | "secondary" | "default";
  size?: "sm" | "icon" | "default";
  className?: string;
  iconOnly?: boolean;
}

export function ShareAction({ 
  title, 
  text = "Check this out!", 
  url, 
  variant = "ghost", 
  size = "icon",
  className,
  iconOnly = true
}: ShareActionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Use window.location.href if url is not provided
  const shareUrl = typeof window !== 'undefined' ? (url ? (url.startsWith('http') ? url : window.location.origin + url) : window.location.href) : "";
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(text);

  const shareOptions = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "hover:text-[#0077b5] hover:bg-[#0077b5]/10",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "hover:text-[#25D366] hover:bg-[#25D366]/10",
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`
    },
    {
      name: "X / Twitter",
      icon: Twitter,
      color: "hover:text-foreground hover:bg-foreground/10",
      href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`
    }
  ];

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: shareUrl,
        });
      } catch (err) {
        console.error("Native share failed:", err);
        setIsOpen(true); // Fallback to custom menu
      }
    } else {
      setIsOpen(true);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative inline-block">
      <Button 
        variant={variant} 
        size={size} 
        className={cn("rounded-full transition-all active:scale-90", className)}
        onClick={handleNativeShare}
        title="Share"
      >
        <Share2 size={size === "sm" ? 14 : 16} />
        {!iconOnly && <span className="ml-2">Share</span>}
      </Button>

      {/* Custom Share Menu Overlay */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-[100] bg-background/20 backdrop-blur-[2px]" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 bottom-full mb-3 z-[110] w-56 p-2 bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center justify-between px-3 py-2 mb-1 border-b border-border/50">
              <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">Share Project</span>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X size={14} />
              </button>
            </div>
            
            <div className="space-y-1">
              {shareOptions.map((option) => (
                <a
                  key={option.name}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all",
                    option.color
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <option.icon size={16} />
                  <span>{option.name}</span>
                </a>
              ))}
              
              <button
                onClick={copyLink}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-primary/10 hover:text-primary transition-all text-left"
              >
                {copied ? <Check size={16} className="text-emerald-500" /> : <LinkIcon size={16} />}
                <span>{copied ? "Copied!" : "Copy Link"}</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
