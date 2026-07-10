"use client";

import { useState, useRef } from "react";
import Reveal from "./anim/Reveal";

export default function AIAgentDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (isPlaying) {
      // In a real scenario, audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      // audioRef.current?.play();
      setIsPlaying(true);
      // Simulate audio ending after a few seconds for demo purposes
      setTimeout(() => setIsPlaying(false), 5000); 
    }
  };

  return (
    <Reveal className="rounded-3xl bg-plum text-cream p-8 md:p-12 border border-white/10 my-16 shadow-2xl overflow-hidden relative">
      <div 
        className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-magenta opacity-10 blur-3xl rounded-full pointer-events-none" 
      />
      
      <div className="grid gap-12 md:grid-cols-2 items-center relative z-10">
        <div>
          <span className="type-label text-violet">Live Demo</span>
          <h3 className="type-h3 mt-3 text-white">Hear the AI in action.</h3>
          <p className="mt-4 text-cream/75 type-body max-w-md">
            Listen to our AI receptionist flawlessly answer questions, handle objections, and book a lip filler consultation, all without a human lifting a finger.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-violet/20 flex items-center justify-center mb-6 relative">
            {isPlaying && (
              <div className="absolute inset-0 rounded-full border-2 border-violet animate-ping opacity-50" />
            )}
            <button 
              onClick={togglePlay}
              className="w-14 h-14 rounded-full bg-violet text-white flex items-center justify-center hover:bg-magenta transition-colors z-10"
              aria-label={isPlaying ? "Pause AI Demo" : "Play AI Demo"}
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>
          
          <div className="flex items-center gap-1 h-8">
            {/* Simulated waveform */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
              <div 
                key={i} 
                className={`w-1.5 bg-violet rounded-full transition-all duration-300 ${isPlaying ? 'animate-pulse' : 'h-1'}`}
                style={{ 
                  height: isPlaying ? `${Math.max(10, Math.random() * 32)}px` : '4px',
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
          
          <p className="mt-6 font-medium text-cream tracking-wide text-sm">
            {isPlaying ? "AI is speaking..." : "Click to listen to call recording"}
          </p>
          <p className="text-xs text-cream/50 mt-2">Duration: 0:45</p>

          {/* Placeholder audio element removed to prevent empty src warning */}
        </div>
      </div>
    </Reveal>
  );
}
