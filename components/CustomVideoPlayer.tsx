"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { 
  Play, Pause, Volume2, VolumeX, Maximize, 
  RotateCcw, RotateCw, Settings, Loader2,
  Check, ChevronRight, Gauge, Repeat, MonitorPlay,
  Keyboard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PLAYBACK_SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];

export function CustomVideoPlayer({ src, poster }: { src: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [showControls, setShowControls] = useState(true);
  const [isHoveringProgress, setIsHoveringProgress] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Settings menu states
  const [menuView, setMenuView] = useState<'main' | 'speed'>('main');
  const [showSettings, setShowSettings] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isLooping, setIsLooping] = useState(false);
  const [isPiPActive, setIsPiPActive] = useState(false);
  
  // Feedback Overlay (for shortcuts)
  const [feedback, setFeedback] = useState<{ icon: React.ReactNode; text: string } | null>(null);
  const feedbackTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const showFeedback = (icon: React.ReactNode, text: string) => {
    setFeedback({ icon, text });
    if (feedbackTimeoutRef.current) clearTimeout(feedbackTimeoutRef.current);
    feedbackTimeoutRef.current = setTimeout(() => setFeedback(null), 500);
  };

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(err => console.error("Play failed:", err));
        showFeedback(<Play size={32} fill="currentColor" />, "Play");
      } else {
        videoRef.current.pause();
        showFeedback(<Pause size={32} fill="currentColor" />, "Pause");
      }
    }
  }, []);

  const handleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      showFeedback(<Maximize size={32} />, "Fullscreen");
    } else {
      document.exitFullscreen();
      showFeedback(<MinimizeIcon className="w-8 h-8" />, "Exit Fullscreen");
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      showFeedback(videoRef.current.muted ? <VolumeX size={32} /> : <Volume2 size={32} />, videoRef.current.muted ? "Muted" : "Unmuted");
    }
  }, []);

  const handleInteraction = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying && !isHoveringProgress && !showSettings) setShowControls(false);
    }, 3000);
  }, [isPlaying, isHoveringProgress, showSettings]);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") return;

      const key = e.key.toLowerCase();
      if (key === "f") {
        e.preventDefault();
        handleFullscreen();
      } else if (key === "k" || e.code === "Space") {
        e.preventDefault();
        togglePlay();
      } else if (key === "m") {
        e.preventDefault();
        toggleMute();
      } else if (key === "escape") {
        if (showSettings) {
          setShowSettings(false);
          setMenuView('main');
        } else if (document.fullscreenElement) {
          document.exitFullscreen();
        }
      } else if (key === "arrowleft") {
        videoRef.current && (videoRef.current.currentTime -= 5);
      } else if (key === "arrowright") {
        videoRef.current && (videoRef.current.currentTime += 5);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleFullscreen, togglePlay, toggleMute, showSettings]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => { setIsPlaying(true); setIsWaiting(false); };
    const onPause = () => setIsPlaying(false);
    const onWaiting = () => setIsWaiting(true);
    const onPlaying = () => setIsWaiting(false);
    const onTimeUpdate = () => {
      const p = (video.currentTime / video.duration) * 100;
      setProgress(isNaN(p) ? 0 : p);
      setCurrentTime(formatTime(video.currentTime));
    };
    const onLoadedMetadata = () => setDuration(formatTime(video.duration));
    const onVolumeChange = () => setIsMuted(video.muted);
    const onRateChange = () => setPlaybackSpeed(video.playbackRate);
    const onEnterPiP = () => setIsPiPActive(true);
    const onLeavePiP = () => setIsPiPActive(false);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("waiting", onWaiting);
    video.addEventListener("playing", onPlaying);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("volumechange", onVolumeChange);
    video.addEventListener("ratechange", onRateChange);
    video.addEventListener("enterpictureinpicture", onEnterPiP);
    video.addEventListener("leavepictureinpicture", onLeavePiP);

    const onFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFullscreenChange);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("waiting", onWaiting);
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("volumechange", onVolumeChange);
      video.removeEventListener("ratechange", onRateChange);
      video.removeEventListener("enterpictureinpicture", onEnterPiP);
      video.removeEventListener("leavepictureinpicture", onLeavePiP);
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, []);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const time = (parseFloat(e.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = time;
    }
  };

  const skip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
      handleInteraction();
    }
  };

  const setSpeed = (speed: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      // Close menu and reset view
      setShowSettings(false);
      setMenuView('main');
      showFeedback(<Gauge size={32} />, `${speed}x Speed`);
    }
  };

  const toggleLoop = () => {
    if (videoRef.current) {
      videoRef.current.loop = !videoRef.current.loop;
      setIsLooping(videoRef.current.loop);
      setShowSettings(false);
      showFeedback(<Repeat size={32} />, videoRef.current.loop ? "Loop On" : "Loop Off");
    }
  };

  const togglePiP = async () => {
    if (videoRef.current) {
      try {
        if (videoRef.current !== document.pictureInPictureElement) {
          await videoRef.current.requestPictureInPicture();
        } else {
          await document.exitPictureInPicture();
        }
        setShowSettings(false);
      } catch (error) {
        console.error("PiP error:", error);
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative group w-full aspect-video bg-black overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-500 select-none",
        isFullscreen ? "rounded-0" : "rounded-3xl border border-white/10"
      )}
      onMouseMove={handleInteraction}
      onTouchStart={handleInteraction}
      onMouseLeave={() => { if (isPlaying && !showSettings) setShowControls(false); }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        className="w-full h-full object-contain cursor-pointer"
        onClick={togglePlay}
      />
      
      {/* Visual Feedback Overlay */}
      {feedback && (
        <div className="absolute inset-0 flex items-center justify-center z-[60] pointer-events-none animate-in fade-in zoom-in-90 duration-300">
           <div className="flex flex-col items-center gap-3 px-8 py-6 rounded-[2rem] bg-black/50 backdrop-blur-xl border border-white/20 text-white shadow-2xl">
              <div className="text-accent">{feedback.icon}</div>
              <span className="text-xs font-black uppercase tracking-[0.2em]">{feedback.text}</span>
           </div>
        </div>
      )}

      {/* Settings Menu Popup (Redesigned for better mobile support) */}
      <div 
        className={cn(
          "absolute right-4 bottom-24 sm:right-8 sm:bottom-32 bg-black/70 backdrop-blur-3xl border border-white/15 rounded-2xl p-2 w-52 sm:w-60 transition-all duration-300 z-50 shadow-2xl",
          showSettings ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        )}
      >
        {menuView === 'main' ? (
          <div className="flex flex-col gap-1">
            <p className="px-3 py-2 text-[10px] uppercase font-black tracking-widest text-white/40 flex items-center gap-2">
              <Settings size={12} className="text-accent" /> Control Center
            </p>
            
            <button 
                onClick={() => setMenuView('speed')}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/10 text-white text-xs font-semibold transition-all group"
            >
              <span className="flex items-center gap-2"><Gauge size={14} className="text-accent group-hover:scale-110 transition-transform" /> Speed</span>
              <span className="flex items-center gap-1 text-white/40">{playbackSpeed}x <ChevronRight size={14} /></span>
            </button>

            <button onClick={togglePiP} className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/10 text-white text-xs font-semibold transition-all group">
              <span className="flex items-center gap-2"><MonitorPlay size={14} className="text-accent group-hover:scale-110 transition-transform" /> Mini-Player</span>
              {isPiPActive && <Check size={14} className="text-accent" />}
            </button>

            <button onClick={toggleLoop} className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/10 text-white text-xs font-semibold transition-all group">
              <span className="flex items-center gap-2"><Repeat size={14} className="text-accent group-hover:scale-110 transition-transform" /> Loop Mode</span>
              {isLooping && <Check size={14} className="text-accent" />}
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
             <button 
                onClick={() => setMenuView('main')}
                className="px-3 py-2 text-[10px] uppercase font-black tracking-widest text-accent flex items-center gap-2 hover:text-white transition-colors"
             >
               <ChevronRight size={14} className="rotate-180" /> Back to menu
             </button>
             <div className="py-1">
                {PLAYBACK_SPEEDS.map(s => (
                  <button 
                    key={s} 
                    onClick={() => setSpeed(s)} 
                    className={cn(
                        "w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all text-xs font-medium",
                        playbackSpeed === s ? "bg-accent/20 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {s}x {playbackSpeed === s && <Check size={14} className="text-accent" />}
                  </button>
                ))}
             </div>
          </div>
        )}
      </div>

      {/* Loading Spinner overlay */}
      {isWaiting && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-30 pointer-events-none">
          <Loader2 className="w-12 h-12 text-white animate-spin" />
        </div>
      )}

      {/* Center Indicator Overlay */}
      <div 
        className={cn(
          "absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] transition-all duration-500 pointer-events-none z-20",
          (isPlaying || isWaiting) ? "opacity-0 scale-110" : "opacity-100 scale-100"
        )}
      >
        <div className="group/play relative cursor-pointer pointer-events-auto" onClick={togglePlay}>
             <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse" />
             <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110">
                <Play size={36} className="ml-1.5 fill-white" />
             </div>
        </div>
      </div>

      {/* Double Tap Skip Areas */}
      <div className="absolute inset-y-0 left-0 w-1/4 z-10" onDoubleClick={(e) => { e.stopPropagation(); skip(-10); }} onClick={handleInteraction} />
      <div className="absolute inset-y-0 right-0 w-1/4 z-10" onDoubleClick={(e) => { e.stopPropagation(); skip(10); }} onClick={handleInteraction} />

      {/* Controls Bar */}
      <div 
        className={cn(
          "absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-black/60 backdrop-blur-2xl border border-white/15 rounded-2xl p-3 sm:px-5 sm:py-4 transition-all duration-500 flex flex-col gap-3 z-40 shadow-2xl",
          (showControls || !isPlaying || showSettings) ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-1 group/progress flex items-center" onMouseEnter={() => setIsHoveringProgress(true)} onMouseLeave={() => setIsHoveringProgress(false)}>
          <div className="absolute inset-0 bg-white/10 rounded-full" />
          <div className="absolute inset-y-0 left-0 bg-accent rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]" style={{ width: `${progress}%` }} />
          <div className={cn("absolute h-3.5 w-3.5 bg-white rounded-full border-2 border-accent shadow-lg transition-all duration-200", (isHoveringProgress || progress > 0) ? "opacity-100 scale-100" : "opacity-0 scale-50")} style={{ left: `calc(${progress}% - 7px)` }} />
          <input type="range" min="0" max="100" step="0.01" value={progress} onChange={handleSeek} className="absolute inset-0 w-full opacity-0 cursor-pointer z-10" />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" size="icon" className="h-9 w-9 text-white hover:bg-white/10 rounded-full" onClick={togglePlay}>
              {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} className="ml-0.5" fill="currentColor" />}
            </Button>
            <div className="hidden sm:flex items-center gap-1 text-white/50">
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-white" onClick={() => skip(-5)}><RotateCcw size={16} /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-white" onClick={() => skip(5)}><RotateCw size={16} /></Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-9 w-9 text-white hover:bg-white/10 rounded-full" onClick={toggleMute}>
                {isMuted ? <VolumeX size={18} className="text-accent" /> : <Volume2 size={18} />}
              </Button>
              <span className="text-[10px] sm:text-[11px] font-bold text-white/90 tabular-nums tracking-tighter">{currentTime} <span className="text-white/30 mx-0.5">/</span> {duration}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Button 
                variant="ghost" 
                size="icon" 
                className={cn("h-9 w-9 rounded-full transition-all", showSettings ? "bg-accent text-white" : "text-white/60 hover:text-white hover:bg-white/10")} 
                onClick={() => { setShowSettings(!showSettings); setMenuView('main'); }}
            >
                <Settings size={16} className={cn(showSettings && "rotate-90 transition-transform duration-500")} />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 text-white/60 hover:text-white hover:bg-white/10 rounded-full" onClick={handleFullscreen}>
                {isFullscreen ? <MinimizeIcon className="h-4 w-4" /> : <Maximize size={16} />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MinimizeIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3" /><path d="M21 8h-3a2 2 0 0 1-2-2V3" /><path d="M3 16h3a2 2 0 0 1 2 2v3" /><path d="M16 21v-3a2 2 0 0 1 2-2h3" /></svg>
    )
}
