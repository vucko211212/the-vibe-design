"use client";

import { useState, useEffect } from "react";

const TRANSCRIPT = [
  {
    id: 1,
    speaker: "Patient Call",
    text: "Hi, do you have any availability for Botox tomorrow?",
    type: "patient",
  },
  {
    id: 2,
    speaker: "AI Receptionist",
    text: "Yes! We have openings tomorrow at 11:00 AM and 2:00 PM. Would you like me to book one of those for you?",
    type: "ai_positive",
  },
  {
    id: 3,
    speaker: "Patient Call",
    text: "Actually, what's the downtime for the CO2 laser? I have a wedding next week.",
    type: "patient",
  },
  {
    id: 4,
    speaker: "AI Guardrail Activated",
    text: "That is a great medical question for our clinical team. Let me grab your phone number so one of our nurses can call you right back to ensure you get the best advice.",
    type: "ai_guardrail",
  },
];

export default function AICallDemo() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let isActive = true;
    const timeouts: NodeJS.Timeout[] = [];

    const runLoop = () => {
      if (!isActive) return;
      setVisibleCount(0); // Reset

      // Timing for each message appearance
      const timings = [1500, 4500, 8000, 11500];
      
      timings.forEach((time, i) => {
        const t = setTimeout(() => {
          if (isActive) setVisibleCount(i + 1);
        }, time);
        timeouts.push(t);
      });

      // Loop over entirely
      const loopT = setTimeout(() => {
        if (isActive) runLoop();
      }, 18000);
      timeouts.push(loopT);
    };

    runLoop();

    return () => {
      isActive = false;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="bg-white/40 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-xl border border-white relative w-full h-[640px] md:h-[600px] flex flex-col justify-start overflow-hidden transform-gpu">
      
      {/* CSS Animation for pop-in */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-transcript {
          animation: slideUpFade 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes waveformPing {
          0% { height: 4px; }
          50% { height: 16px; }
          100% { height: 4px; }
        }
        .animate-waveform {
          animation: waveformPing 0.8s infinite ease-in-out;
        }
        .w-del-1 { animation-delay: 0.1s; }
        .w-del-2 { animation-delay: 0.2s; }
        .w-del-3 { animation-delay: 0.3s; }
        .w-del-4 { animation-delay: 0.4s; }
      `}} />

      <div className="flex flex-col gap-4">
        
        {/* Status Header */}
        <div className="flex items-center justify-between mb-2 px-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-plum-soft font-semibold">Live Call Transcription</span>
          </div>
          
          {/* Simulated audio waveform when AI or patient is speaking */}
          {visibleCount > 0 && visibleCount <= TRANSCRIPT.length && (
            <div className="flex items-center gap-1 h-4">
              <div className="w-1 bg-violet rounded-full animate-waveform w-del-1" />
              <div className="w-1 bg-violet rounded-full animate-waveform w-del-2" />
              <div className="w-1 bg-violet rounded-full animate-waveform w-del-3" />
              <div className="w-1 bg-violet rounded-full animate-waveform w-del-4" />
            </div>
          )}
        </div>

        {/* Transcript Items */}
        {TRANSCRIPT.slice(0, visibleCount).map((msg) => (
          <div 
            key={msg.id} 
            className={`animate-transcript p-5 rounded-2xl text-sm relative ${
              msg.type === "patient" 
                ? "bg-white shadow-sm text-plum border border-gray-100" 
                : msg.type === "ai_positive"
                ? "bg-[#efe9f9] text-violet shadow-sm border border-violet/10"
                : "bg-plum text-white shadow-lg border border-plum"
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <span className={`font-bold text-[11px] uppercase tracking-wide ${
                msg.type === "patient" ? "text-plum-soft" : 
                msg.type === "ai_positive" ? "text-violet" : "text-magenta"
              }`}>
                {msg.speaker}
              </span>
              
              {/* Ping indicator for Guardrail */}
              {msg.type === "ai_guardrail" && (
                <div className="w-2 h-2 rounded-full bg-magenta animate-ping relative top-1 right-1" />
              )}
            </div>
            
            <p className="leading-relaxed">"{msg.text}"</p>
          </div>
        ))}
        
        {/* Typing/Listening Indicator */}
        {visibleCount > 0 && visibleCount < TRANSCRIPT.length && (
          <div className="px-4 py-2 opacity-50 flex items-center gap-2 animate-transcript">
            <div className="w-1.5 h-1.5 bg-plum-soft rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-1.5 h-1.5 bg-plum-soft rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-1.5 h-1.5 bg-plum-soft rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        )}

      </div>
    </div>
  );
}
