"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { 
  Play, Pause, Volume2, VolumeX, Maximize, 
  RotateCcw, RotateCw, Settings, Loader2,
  Check, ChevronRight, Gauge, Repeat, MonitorPlay,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PLAYBACK_SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];

export function CustomVideoPlayer({ src, poster }: { src: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [showControls, setShowControls] = useState(true);
  const [isHoveringProgress, setIsHoveringProgress] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isVertical, setIsVertical] = useState(false);
  
  // Settings menu states
  const [menuView, setMenuView] = useState<'main' | 'speed'>('main');
  const [showSettings, setShowSettings] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isLooping, setIsLooping] = useState(false);
  const [isPiPActive, setIsPiPActive] = useState(false);
  
  // Feedback Overlay
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

  const syncBackgroundVideo = useCallback(() => {
    if (backgroundVideoRef.current && videoRef.current) {
      if (Math.abs(backgroundVideoRef.current.currentTime - videoRef.current.currentTime) > 0.5) {
        backgroundVideoRef.current.currentTime = videoRef.current.currentTime;
      }
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(err => console.error("Play failed:", err));
        if (backgroundVideoRef.current) backgroundVideoRef.current.play().catch(() => {});
        showFeedback(<Play size={32} fill="currentColor" />, "Play");
      } else {
        videoRef.current.pause();
        if (backgroundVideoRef.current) backgroundVideoRef.current.pause();
        showFeedback(<Pause size={32} fill="currentColor" />, "Pause");
      }
    }
  }, []);

  const handleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => console.error(err));
      showFeedback(<Maximize size={32} />, "Fullscreen");
    } else {
      document.exitFullscreen();
      showFeedback(<MinimizeIcon className="w-8 h-8" />, "Exit Fullscreen");
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      if (!videoRef.current.muted && volume === 0) {
        setVolume(1);
        videoRef.current.volume = 1;
      }
      showFeedback(videoRef.current.muted ? <VolumeX size={32} /> : <Volume2 size={32} />, videoRef.current.muted ? "Muted" : "Unmuted");
    }
  }, [volume]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (videoRef.current) {
      videoRef.current.volume = newVol;
      videoRef.current.muted = newVol === 0;
      setIsMuted(newVol === 0);
    }
  };

  const handleInteraction = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying && !isHoveringProgress && !showSettings) setShowControls(false);
    }, 2500);
  }, [isPlaying, isHoveringProgress, showSettings]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") return;
      
      handleInteraction();
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
        syncBackgroundVideo();
      } else if (key === "arrowright") {
        videoRef.current && (videoRef.current.currentTime += 5);
        syncBackgroundVideo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleFullscreen, togglePlay, toggleMute, showSettings, handleInteraction, syncBackgroundVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => { setIsPlaying(true); setIsWaiting(false); };
    const onPause = () => setIsPlaying(false);
    const onWaiting = () => setIsWaiting(true);
    const onPlaying = () => setIsWaiting(false);
    
    let isUpdating = false;
    const onTimeUpdate = () => {
      if (!isUpdating) {
        isUpdating = true;
        requestAnimationFrame(() => {
          const p = (video.currentTime / video.duration) * 100;
          setProgress(isNaN(p) ? 0 : p);
          setCurrentTime(formatTime(video.currentTime));
          isUpdating = false;
        });
      }
    };
    
    const onLoadedMetadata = () => {
      setDuration(formatTime(video.duration));
      if (video.videoWidth > 0 && video.videoHeight > video.videoWidth) {
        setIsVertical(true);
      } else {
        setIsVertical(false);
      }
    };
    
    const onVolumeChange = () => {
      setIsMuted(video.muted);
      setVolume(video.volume);
    };
    
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
      syncBackgroundVideo();
    }
  };

  const skip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
      syncBackgroundVideo();
      handleInteraction();
    }
  };

  const setSpeed = (speed: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      if (backgroundVideoRef.current) backgroundVideoRef.current.playbackRate = speed;
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
        "relative group w-full bg-black overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-500 select-none will-change-transform",
        isFullscreen ? "rounded-none max-h-[100vh] h-[100dvh]" : "rounded-[20px] max-h-[80vh] border border-white/10",
        isVertical ? "aspect-[9/16] sm:aspect-[4/5] md:aspect-auto md:h-[80vh]" : "aspect-video"
      )}
      onMouseMove={handleInteraction}
      onTouchStart={handleInteraction}
      onMouseLeave={() => { if (isPlaying && !showSettings) setShowControls(false); }}
      onClick={() => { if (showSettings) setShowSettings(false); }}
    >
      {/* Blurred Background for vertical/horizontal gap fill */}
      {poster || src ? (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video 
            ref={backgroundVideoRef}
            src={src}
            poster={poster} 
            className="w-full h-full object-cover scale-110 blur-3xl opacity-40 mix-blend-screen"
            muted
            loop
            playsInline
          />
        </div>
      ) : null}

      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        className="relative z-10 w-full h-full object-contain cursor-pointer"
        onClick={(e) => { e.stopPropagation(); togglePlay(); }}
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

      {/* Loading Spinner */}
      {isWaiting && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-30 pointer-events-none">
          <Loader2 className="w-12 h-12 text-white animate-spin" />
        </div>
      )}

      {/* Large Center Play Button (Hidden when playing) */}
      <div 
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-500 pointer-events-none z-20",
          (isPlaying || isWaiting) ? "opacity-0 scale-110" : "opacity-100 scale-100 bg-black/10 backdrop-blur-[2px]"
        )}
      >
        <div className="group/play relative cursor-pointer pointer-events-auto" onClick={(e) => { e.stopPropagation(); togglePlay(); }}>
             <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl group-hover/play:bg-accent/40 transition-colors duration-500" />
             <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-110 group-active/play:scale-95">
                <Play size={40} className="ml-2 fill-white" />
             </div>
        </div>
      </div>

      {/* Double Tap Skip Areas */}
      <div className="absolute inset-y-0 left-0 w-[20%] z-20 pointer-events-auto opacity-0" onDoubleClick={(e) => { e.stopPropagation(); skip(-10); }} onClick={(e) => { e.stopPropagation(); handleInteraction(); togglePlay(); }} />
      <div className="absolute inset-y-0 right-0 w-[20%] z-20 pointer-events-auto opacity-0" onDoubleClick={(e) => { e.stopPropagation(); skip(10); }} onClick={(e) => { e.stopPropagation(); handleInteraction(); togglePlay(); }} />

      {/* Bottom Gradient Overlay */}
      <div className={cn("absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity duration-500 z-30", showControls ? "opacity-100" : "opacity-0")} />

      {/* Settings Menu Popup */}
      <div 
        className={cn(
          "absolute right-4 bottom-[88px] sm:right-6 sm:bottom-24 bg-black/80 backdrop-blur-3xl border border-white/20 rounded-2xl p-2 w-56 sm:w-64 transition-all duration-300 z-[70] shadow-2xl",
          showSettings ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {menuView === 'main' ? (
          <div className="flex flex-col gap-1">
            <p className="px-3 py-2 text-[10px] uppercase font-black tracking-widest text-white/50 flex items-center gap-2 border-b border-white/10 mb-1">
              <Settings size={12} className="text-accent" /> Control Center
            </p>
            
            <button 
                onClick={() => setMenuView('speed')}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/10 text-white text-xs font-semibold transition-all group"
            >
              <span className="flex items-center gap-2"><Gauge size={14} className="text-accent group-hover:scale-110 transition-transform" /> Speed</span>
              <span className="flex items-center gap-1 text-white/50">{playbackSpeed}x <ChevronRight size={14} /></span>
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
                className="px-3 py-2 text-[10px] uppercase font-black tracking-widest text-accent flex items-center gap-2 hover:text-white transition-colors border-b border-white/10 mb-1"
             >
               <ChevronRight size={14} className="rotate-180" /> Back
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

      {/* Bottom Controls Bar */}
      <div 
        className={cn(
          "absolute bottom-0 left-0 right-0 p-4 sm:px-6 sm:pb-6 pt-10 transition-all duration-500 z-40 ease-out",
          (showControls || !isPlaying || showSettings) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Progress Bar Container */}
        <div 
          className="relative w-full py-3 mb-2 group/progress cursor-pointer flex items-center" 
          onMouseEnter={() => setIsHoveringProgress(true)} 
          onMouseLeave={() => setIsHoveringProgress(false)}
        >
          <div className="absolute inset-y-0 my-auto h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
            {/* Visual Progress */}
            <div 
              className="absolute inset-y-0 left-0 bg-accent rounded-full transition-all duration-100 ease-linear shadow-[0_0_15px_rgba(249,115,22,0.8)]" 
              style={{ width: `${progress}%` }} 
            />
          </div>
          
          {/* Draggable Knob */}
          <div 
            className={cn(
              "absolute h-4 w-4 bg-white rounded-full border-[3px] border-accent shadow-lg transition-transform duration-200 pointer-events-none", 
              (isHoveringProgress || progress > 0) ? "scale-100" : "scale-50"
            )} 
            style={{ left: `calc(${progress}% - 8px)` }} 
          />
          
          {/* Actual Input */}
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
        
        {/* Controls Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-5 flex-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 text-white bg-white/10 hover:bg-white/20 hover:scale-105 active:scale-95 rounded-full transition-all backdrop-blur-md border border-white/10" 
              onClick={(e) => { e.stopPropagation(); togglePlay(); }}
            >
              {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} className="ml-0.5" fill="currentColor" />}
            </Button>
            
            <div className="hidden lg:flex items-center gap-1 text-white/50">
                <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-white" onClick={(e) => { e.stopPropagation(); skip(-5); }}><RotateCcw size={16} /></Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-white" onClick={(e) => { e.stopPropagation(); skip(5); }}><RotateCw size={16} /></Button>
            </div>
            
            {/* Volume Control Group */}
            <div className="flex items-center gap-2 group/volume relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn("h-10 w-10 rounded-full transition-all hover:bg-white/20", isMuted ? "text-accent" : "text-white")} 
                onClick={(e) => { e.stopPropagation(); toggleMute(); }}
              >
                {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </Button>
              <div className="w-20 sm:w-0 sm:group-hover/volume:w-24 sm:opacity-0 sm:group-hover/volume:opacity-100 overflow-hidden transition-all duration-300 flex items-center">
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.01" 
                  value={isMuted ? 0 : volume} 
                  onChange={handleVolumeChange} 
                  className="w-full h-1.5 accent-accent cursor-pointer bg-white/20 rounded-full" 
                />
              </div>
            </div>

            <span className="text-[11px] sm:text-xs font-bold text-white/90 tabular-nums tracking-tighter shrink-0 border border-white/10 px-2 py-1 rounded-md bg-black/40">
              {currentTime} <span className="text-white/30 mx-1">/</span> {duration}
            </span>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2">
            <Button 
                variant="ghost" 
                size="icon" 
                className={cn("h-10 w-10 rounded-full transition-all", showSettings ? "bg-accent text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]" : "text-white hover:text-white hover:bg-white/20")} 
                onClick={(e) => { e.stopPropagation(); setShowSettings(!showSettings); setMenuView('main'); }}
            >
                <Settings size={18} className={cn(showSettings && "rotate-90 transition-transform duration-500")} />
            </Button>
            <Button 
                variant="ghost" 
                size="icon" 
                className="h-10 w-10 text-white hover:text-white hover:bg-white/20 rounded-full transition-all" 
                onClick={(e) => { e.stopPropagation(); handleFullscreen(); }}
            >
                {isFullscreen ? <MinimizeIcon className="h-5 w-5" /> : <Maximize size={18} />}
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
