"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CustomVideoPlayer({ src, poster }: { src: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [showControls, setShowControls] = useState(false);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleInteraction = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => {
      const p = (video.currentTime / video.duration) * 100;
      setProgress(isNaN(p) ? 0 : p);
      setCurrentTime(formatTime(video.currentTime));
    };
    const handleLoadedMetadata = () => {
      setDuration(formatTime(video.duration));
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const time = (parseFloat(e.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = time;
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div 
      className="relative group w-full aspect-video rounded-2xl bg-black overflow-hidden shadow-2xl border border-border"
      onMouseMove={handleInteraction}
      onTouchStart={handleInteraction}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        className="w-full h-full object-contain cursor-pointer"
        onClick={() => {
            togglePlay();
            handleInteraction();
        }}
      />
      
      {/* Centered Play/Pause Button Overlay */}
      <div 
        className={cn(
          "absolute inset-0 flex items-center justify-center bg-black/40 transition-all duration-300 pointer-events-none",
          isPlaying && !showControls ? "opacity-0 scale-110" : "opacity-100 scale-100"
        )}
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/95 text-primary-foreground flex items-center justify-center shadow-2xl">
          {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} className="ml-1" fill="currentColor" />}
        </div>
      </div>

      {/* Custom Controls Bar */}
      <div 
        className={cn(
          "absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pt-12 pb-4 px-4 sm:px-6 transition-all duration-300 flex flex-col gap-3",
          showControls || !isPlaying ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        )}
      >
        {/* Progress Bar Container */}
        <div className="relative w-full h-1.5 group/progress flex items-center">
          <div className="absolute inset-0 bg-white/10 rounded-full" />
          <div 
            className="absolute inset-y-0 left-0 bg-primary rounded-full transition-all duration-100" 
            style={{ width: `${progress}%` }} 
          />
          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progress}
            onChange={handleSeek}
            className="absolute inset-0 w-full opacity-0 cursor-pointer"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
                variant="ghost" 
                size="icon" 
                className="h-10 w-10 text-white hover:bg-white/10" 
                onClick={togglePlay}
            >
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} className="ml-0.5" fill="currentColor" />}
            </Button>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-9 w-9 text-white hover:bg-white/10" onClick={toggleMute}>
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </Button>
              <span className="text-[11px] font-medium text-white/80 tabular-nums">
                {currentTime} / {duration}
              </span>
            </div>
          </div>
          
          <Button variant="ghost" size="icon" className="h-9 w-9 text-white hover:bg-white/10" onClick={handleFullscreen}>
            <Maximize size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}
