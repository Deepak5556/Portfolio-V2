"use client";

import React, { useRef, useState, useEffect } from "react";
import { 
  Play, Pause, Volume2, VolumeX, Maximize,
  Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface PostVideoPlayerProps {
  src: string;
  poster?: string;
}

export function PostVideoPlayer({ src, poster }: PostVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for Autoplay/Pause
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.6 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Handle autoplay when visible
  useEffect(() => {
    if (isVisible && videoRef.current) {
      // Twitter style: autoplay muted when visible
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked by browser
          setIsPlaying(false);
        });
      }
    }
  }, [isVisible]);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const dur = videoRef.current.duration;
      setCurrentTime(current);
      setProgress((current / dur) * 100);
      
      if (videoRef.current.buffered.length > 0) {
        setBuffered((videoRef.current.buffered.end(videoRef.current.buffered.length - 1) / dur) * 100);
      }
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (videoRef.current && containerRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const clickedValue = (x / rect.width) * videoRef.current.duration;
      videoRef.current.currentTime = clickedValue;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div 
      ref={containerRef}
      className="group relative w-full aspect-video bg-black rounded-2xl overflow-hidden border border-border/50 shadow-lg select-none hover:border-orange-500/30 transition-all duration-500 hover:scale-[1.01] active:scale-[0.99]"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onClick={togglePlay}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => setIsLoading(false)}
        onLoadedMetadata={(e) => {
          setDuration(e.currentTarget.duration);
          setIsLoading(false);
        }}
        onTimeUpdate={handleTimeUpdate}
        className="w-full h-full object-cover cursor-pointer"
      />

      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-10 transition-opacity">
          <Loader2 className="w-8 h-8 text-white animate-spin" />
        </div>
      )}

      {/* Center Play Button (Visible when paused) */}
      <AnimatePresence>
        {!isPlaying && !isLoading && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          >
            <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
              <Play className="text-white fill-white ml-1" size={32} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls Overlay */}
      <AnimatePresence>
        {showControls && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 z-30"
          >
            <div className="flex items-center justify-between text-white pb-3">
              <div className="flex items-center gap-4">
                <button onClick={togglePlay} className="hover:scale-110 transition-transform p-1 hover:bg-white/10 rounded-full">
                  {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
                </button>
                <span className="text-[10px] font-black font-mono tracking-tight text-white/90">
                  {formatTime(currentTime)} <span className="text-white/40 mx-0.5">/</span> {formatTime(duration)}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <button onClick={toggleMute} className="hover:scale-110 transition-transform p-1 hover:bg-white/10 rounded-full">
                  {isMuted ? <VolumeX size={18} className="text-orange-500" /> : <Volume2 size={18} />}
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); containerRef.current?.requestFullscreen(); }}
                  className="hover:scale-110 transition-transform p-1 hover:bg-white/10 rounded-full"
                >
                  <Maximize size={16} />
                </button>
              </div>
            </div>

            {/* Progress Bar Container */}
            <div 
              className="relative h-1 w-full bg-white/10 rounded-full cursor-pointer group/progress mb-1"
              onClick={handleSeek}
            >
              {/* Buffered Progress */}
              <div 
                className="absolute inset-y-0 left-0 bg-white/20 rounded-full transition-all duration-300"
                style={{ width: `${buffered}%` }}
              />
              {/* Played Progress */}
              <div 
                className="absolute inset-y-0 left-0 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.4)]"
                style={{ width: `${progress}%` }}
              />
              {/* Knob */}
              <div 
                className="absolute h-3 w-3 bg-white rounded-full -top-1 border border-black/10 shadow-lg opacity-group group-hover/progress:opacity-100 transition-opacity"
                style={{ left: `calc(${progress}% - 6px)` }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mute Indicator - Top Right */}
      <div className="absolute top-4 right-4 z-30 pointer-events-none">
        <AnimatePresence>
          {isMuted && isPlaying && !showControls && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1.5 border border-white/10"
            >
              <VolumeX size={10} className="text-white" />
              <span className="text-[9px] font-black text-white uppercase tracking-[0.15em]">Muted</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
