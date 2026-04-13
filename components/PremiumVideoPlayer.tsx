"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { 
  Play, Pause, Volume2, VolumeX, Maximize, 
  Loader2, Minimize2, Volume1, Volume
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface PremiumVideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export function PremiumVideoPlayer({ src, poster, className }: PremiumVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHoveringVolume, setIsHoveringVolume] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [isFirstPlay, setIsFirstPlay] = useState(true);

  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        setIsFirstPlay(false);
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, []);

  const handleFullscreen = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!containerRef.current) return;
    
    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }, []);

  const handleInteraction = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2500);
  }, [isPlaying]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onWaiting = () => setIsWaiting(true);
    const onPlaying = () => setIsWaiting(false);
    const onTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
      setCurrentTime(video.currentTime);
    };
    const onLoadedMetadata = () => {
      setDuration(video.duration);
      if (video.videoWidth && video.videoHeight) {
        setAspectRatio(video.videoWidth / video.videoHeight);
      }
    };

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("waiting", onWaiting);
    video.addEventListener("playing", onPlaying);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);

    const onFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFullscreenChange);

    // Initial intersection observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && isPlaying) {
             video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("waiting", onWaiting);
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      observer.disconnect();
    };
  }, [isPlaying]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (videoRef.current && duration) {
      videoRef.current.currentTime = (val / 100) * duration;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val / 100;
      setIsMuted(val === 0);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMuted = !isMuted;
      setIsMuted(newMuted);
      videoRef.current.muted = newMuted;
    }
  };

  // Determine if video is portrait
  const isPortrait = aspectRatio ? aspectRatio < 1 : false;

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative group w-full bg-zinc-950 flex items-center justify-center overflow-hidden transition-all duration-700",
        isFullscreen ? "rounded-0 h-screen" : "rounded-3xl border border-white/5",
        className
      )}
      style={{ 
        aspectRatio: !isFullscreen && aspectRatio ? `${aspectRatio}` : "auto",
        maxHeight: !isFullscreen ? "80vh" : "none"
      }}
      onMouseMove={handleInteraction}
      onTouchStart={handleInteraction}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        className={cn(
          "w-full h-full transition-all duration-700",
          isPortrait ? "object-contain" : "object-cover"
        )}
        onClick={togglePlay}
        onDoubleClick={handleFullscreen}
      />

      {/* ─── LOADING STATE ─── */}
      <AnimatePresence>
        {isWaiting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[2px] z-50 pointer-events-none"
          >
            <Loader2 className="w-12 h-12 text-primary animate-spin opacity-80" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── CENTER OVERLAY (PLAY BUTTON) ─── */}
      <AnimatePresence>
        {(!isPlaying && !isWaiting) && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="absolute inset-0 flex items-center justify-center z-40 bg-black/30 pointer-events-none"
          >
            <button 
              ref={playButtonRef}
              onClick={(e) => { e.stopPropagation(); togglePlay(); }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 shadow-[0_0_40px_rgba(var(--primary),0.3)] pointer-events-auto"
            >
               <Play size={32} fill="currentColor" className="ml-1.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── CONTROLS ─── */}
      <motion.div 
        initial={false}
        animate={{ 
          opacity: showControls || !isPlaying ? 1 : 0,
          y: showControls || !isPlaying ? 0 : 20 
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 z-30 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-4 pointer-events-auto">
          {/* Progress Bar Container */}
          <div className="relative group/progress h-6 sm:h-8 flex items-center cursor-pointer">
            <div className="relative w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-primary"
                style={{ width: `${progress}%` }}
              />
            </div>
            <input 
              type="range"
              min="0"
              max="100"
              step="0.01"
              value={progress}
              onChange={handleSeek}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-6">
              <div className="flex items-center gap-1 sm:gap-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={togglePlay}
                  className="h-10 w-10 sm:h-12 sm:w-12 text-white hover:bg-white/10 rounded-full"
                >
                  {isPlaying ? <Pause fill="currentColor" size={24} /> : <Play fill="currentColor" size={24} className="ml-1" />}
                </Button>

                <div className="hidden sm:flex items-center gap-2 text-[10px] font-black tracking-widest text-white/60">
                  <span className="text-white">{formatTime(currentTime)}</span>
                  <span>/</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Volume Control */}
              <div 
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full h-10 px-3 transition-all"
                onMouseEnter={() => setIsHoveringVolume(true)}
                onMouseLeave={() => setIsHoveringVolume(false)}
              >
                <button onClick={toggleMute} className="text-white/70 hover:text-white">
                  {isMuted || volume === 0 ? <VolumeX size={18} /> : volume < 50 ? <Volume1 size={18} /> : <Volume size={18} />}
                </button>
                <motion.div
                  initial={false}
                  animate={{ width: isHoveringVolume ? 100 : 0, opacity: isHoveringVolume ? 1 : 0 }}
                  className="overflow-hidden flex items-center"
                >
                  <input 
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-20 cursor-pointer accent-primary"
                  />
                </motion.div>
              </div>
            </div>

            <div className="flex items-center gap-2">
               <div className="sm:hidden text-[9px] font-bold text-white/50 tracking-tighter mr-2">
                  {formatTime(currentTime)} / {formatTime(duration)}
               </div>
               <Button 
                 variant="ghost" 
                 size="icon" 
                 onClick={handleFullscreen}
                 className="h-10 w-10 sm:h-12 sm:w-12 text-white hover:bg-white/10 rounded-full"
               >
                 {isFullscreen ? <Minimize2 size={20} /> : <Maximize size={20} />}
               </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
