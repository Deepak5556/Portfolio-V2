"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { 
  Play, Pause, Volume2, VolumeX, Maximize, 
  RotateCcw, RotateCw, Settings, Loader2,
  Check, ChevronRight, Gauge, Repeat, MonitorPlay,
  SkipBack, SkipForward, FastForward, Rewind,
  Minimize2, Volume1, Sliders
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const PlaybackSpeedIcon = Gauge;

const PLAYBACK_SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];

export function PremiumVideoPlayer({ src, poster }: { src: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isHoveringVolume, setIsHoveringVolume] = useState(false);
  
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
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, []);

  const handleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  const handleInteraction = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying && !showSettings) setShowControls(false);
    }, 3000);
  }, [isPlaying, showSettings]);

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
    const onLoadedMetadata = () => setDuration(video.duration);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("waiting", onWaiting);
    video.addEventListener("playing", onPlaying);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);

    const onFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFullscreenChange);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("waiting", onWaiting);
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, []);

  const skip = (seconds: number) => {
    if (videoRef.current) videoRef.current.currentTime += seconds;
  };

  const handleSeek = (val: number[]) => {
    if (videoRef.current) {
      videoRef.current.currentTime = (val[0] / 100) * duration;
    }
  };

  const handleVolumeChange = (val: number[]) => {
    setVolume(val[0]);
    if (videoRef.current) {
      videoRef.current.volume = val[0] / 100;
      setIsMuted(val[0] === 0);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative group w-full aspect-video bg-black overflow-hidden select-none transition-all duration-700",
        isFullscreen ? "rounded-0" : "rounded-2xl sm:rounded-[2.5rem] border border-white/5 shadow-2xl"
      )}
      onMouseMove={handleInteraction}
      onClick={handleInteraction}
      onTouchStart={handleInteraction}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
        onClick={(e) => { 
          if (window.innerWidth > 768) {
            e.stopPropagation(); 
            togglePlay(); 
          }
        }}
      />

      {/* ─── LOADING STATE ─── */}
      <AnimatePresence>
        {isWaiting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 pointer-events-none"
          >
            <div className="relative">
               <Loader2 className="w-16 h-16 text-primary animate-spin opacity-40" />
               <motion.div 
                 animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                 transition={{ repeat: Infinity, duration: 2 }}
                 className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
               />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── CENTER PLAY BUTTON ─── */}
      <AnimatePresence>
        {(!isPlaying && !isWaiting) && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="absolute inset-0 flex items-center justify-center z-40 bg-black/20"
          >
            <button 
              onClick={togglePlay}
              className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110 hover:bg-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] group"
            >
               <Play size={40} fill="currentColor" className="ml-2 group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── OVERLAY GRADIENTS ─── */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 transition-opacity duration-500 pointer-events-none z-10",
        showControls ? "opacity-100" : "opacity-0"
      )} />

      {/* ─── TOP BAR ─── */}
      <motion.div 
        animate={{ y: showControls ? 0 : -20, opacity: showControls ? 1 : 0 }}
        className="absolute top-0 left-0 right-0 p-4 sm:p-8 flex justify-between items-start z-30 pointer-events-none"
      >
        <div className="flex flex-col">
           <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-0.5 sm:mb-1">Portfolio Archive</span>
           <h4 className="text-white font-black uppercase italic tracking-tight text-sm sm:text-lg leading-tight">Case Study Node<span className="text-primary">.</span></h4>
        </div>
        <div className="flex gap-2 pointer-events-auto">
           <Button variant="ghost" size="icon" onClick={handleFullscreen} className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize size={16} />}
           </Button>
        </div>
      </motion.div>

      {/* ─── CONTROLS ─── */}
      <motion.div 
        animate={{ y: showControls ? 0 : 20, opacity: showControls ? 1 : 0 }}
        className="absolute bottom-0 left-0 right-0 p-4 sm:p-10 z-30 flex flex-col gap-3 sm:gap-6"
      >
        {/* Progress Bar */}
        <div className="relative group/progress px-1 sm:px-2">
           <div className="relative h-1.5 sm:h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-primary"
                style={{ width: `${progress}%` }}
              />
           </div>
           {/* Larger touch target for progress bar */}
           <input 
             type="range"
             min="0"
             max="100"
             step="0.01"
             value={progress}
             onChange={(e) => handleSeek([parseFloat(e.target.value)])}
             className="absolute -inset-1 sm:-inset-1 w-full h-full opacity-0 cursor-pointer z-10"
           />
           <div className="flex justify-between mt-2 sm:mt-3 px-1">
              <span className="text-[8px] sm:text-[10px] font-bold text-white/40 tabular-nums uppercase tracking-widest">{formatTime(currentTime)}</span>
              <span className="text-[8px] sm:text-[10px] font-bold text-white/40 tabular-nums uppercase tracking-widest">{formatTime(duration)}</span>
           </div>
        </div>

        {/* Main Controls Area */}
        <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-6">
               <div className="flex items-center gap-1 sm:gap-2">
                  <Button variant="ghost" size="icon" onClick={() => skip(-10)} className="h-8 w-8 sm:h-10 sm:w-10 rounded-full text-white/60 hover:text-white hover:bg-white/5">
                     <Rewind size={16} fill="currentColor" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={togglePlay}
                    className="h-10 w-10 sm:h-14 sm:w-14 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all shadow-xl"
                  >
                     {isPlaying ? <Pause className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" /> : <Play className="w-4 h-4 sm:w-6 sm:h-6 ml-0.5 sm:ml-1" fill="currentColor" />}
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => skip(10)} className="h-8 w-8 sm:h-10 sm:w-10 rounded-full text-white/60 hover:text-white hover:bg-white/5">
                     <FastForward size={16} fill="currentColor" />
                  </Button>
               </div>

               <div 
                 className="hidden md:flex items-center gap-3 bg-white/5 border border-white/10 px-4 h-12 rounded-2xl relative"
                 onMouseEnter={() => setIsHoveringVolume(true)}
                 onMouseLeave={() => setIsHoveringVolume(false)}
               >
                  <button onClick={() => setIsMuted(!isMuted)} className="text-white/60 hover:text-white transition-colors">
                     {isMuted || volume === 0 ? <VolumeX size={18} /> : volume > 50 ? <Volume2 size={18} /> : <Volume1 size={18} />}
                  </button>
                  <motion.div 
                    animate={{ width: isHoveringVolume ? 100 : 0, opacity: isHoveringVolume ? 1 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="overflow-hidden flex items-center"
                  >
                     <div className="w-24 px-2">
                        <div className="relative h-1 w-full bg-white/10 rounded-full overflow-hidden">
                           <div className="absolute inset-y-0 left-0 bg-white/60" style={{ width: `${isMuted ? 0 : volume}%` }} />
                        </div>
                        <input 
                          type="range"
                          min="0"
                          max="100"
                          value={isMuted ? 0 : volume}
                          onChange={(e) => handleVolumeChange([parseInt(e.target.value)])}
                          className="absolute inset-x-0 w-full h-full opacity-0 cursor-pointer"
                        />
                     </div>
                  </motion.div>
               </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-3">
               <div className="hidden lg:flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-xl">
                  {PLAYBACK_SPEEDS.filter(s => s >= 1).map(s => (
                    <Button 
                      key={s}
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                         setPlaybackSpeed(s);
                         if (videoRef.current) videoRef.current.playbackRate = s;
                      }}
                      className={cn(
                        "h-8 px-3 rounded-lg text-[10px] font-black tracking-widest uppercase transition-all",
                        playbackSpeed === s ? "bg-primary text-white" : "text-white/40 hover:text-white"
                      )}
                    >
                      {s}x
                    </Button>
                  ))}
               </div>
               
               <Button variant="ghost" size="icon" onClick={handleFullscreen} className="h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
                  {isFullscreen ? <Minimize2 size={16} /> : <Maximize size={16} />}
               </Button>
               
               <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
                  <Sliders size={16} />
               </Button>
            </div>
        </div>
      </motion.div>
    </div>
  );
}
