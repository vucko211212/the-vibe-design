"use client";

import { useState, useEffect } from "react";

const MESSAGES = [
  { 
    id: 1, 
    sender: "clinic", 
    text: "Hi Jessica! It's been a while since your last Botox treatment. We have a special this week, would you like to come in for a touch-up?" 
  },
  { 
    id: 2, 
    sender: "patient", 
    text: "Oh wow, perfect timing. Do you have anything on Friday?" 
  },
  { 
    id: 3, 
    sender: "clinic", 
    text: "Yes! We have an opening at 2:30 PM or 4:00 PM. Which one works better?" 
  },
  { 
    id: 4, 
    sender: "patient", 
    text: "2:30 PM please!" 
  },
  { 
    id: 5, 
    sender: "clinic", 
    text: "You're all set! See you Friday at 2:30 PM. 💖" 
  },
];

export default function PhoneChatDemo() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let isActive = true;
    const timeouts: NodeJS.Timeout[] = [];

    const runLoop = () => {
      if (!isActive) return;
      setVisibleCount(0); // Reset

      // Timing for each message appearance
      const timings = [1500, 4000, 6500, 8500, 10500];
      
      timings.forEach((time, i) => {
        const t = setTimeout(() => {
          if (isActive) setVisibleCount(i + 1);
        }, time);
        timeouts.push(t);
      });

      // Loop over entirely
      const loopT = setTimeout(() => {
        if (isActive) runLoop();
      }, 15000);
      timeouts.push(loopT);
    };

    runLoop();

    return () => {
      isActive = false;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="flex justify-center w-full my-8">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes popIn {
          0% { opacity: 0; transform: translateY(10px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-pop {
          animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes typingBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .typing-dot {
          width: 6px; height: 6px; background-color: #9ca3af; border-radius: 50%;
        }
        .typing-1 { animation: typingBounce 0.6s infinite 0s; }
        .typing-2 { animation: typingBounce 0.6s infinite 0.2s; }
        .typing-3 { animation: typingBounce 0.6s infinite 0.4s; }
      `}} />

      {/* Phone Case */}
      <div className="w-[320px] h-[640px] bg-black rounded-[3.5rem] p-3 shadow-2xl relative border-4 border-white/20 ring-1 ring-black/50 transform-gpu">
        
        {/* Buttons on the side */}
        <div className="absolute left-[-6px] top-[120px] w-[3px] h-[30px] bg-white/20 rounded-l-md" />
        <div className="absolute left-[-6px] top-[160px] w-[3px] h-[50px] bg-white/20 rounded-l-md" />
        <div className="absolute left-[-6px] top-[220px] w-[3px] h-[50px] bg-white/20 rounded-l-md" />
        <div className="absolute right-[-6px] top-[180px] w-[3px] h-[70px] bg-white/20 rounded-r-md" />

        {/* Screen */}
        <div className="w-full h-full bg-[#f4f4f5] rounded-[2.8rem] overflow-hidden relative flex flex-col font-sans">
          
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-50 flex items-center justify-between px-3 shadow-md">
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
          </div>

          {/* WhatsApp Header */}
          <div className="bg-[#008069] pt-10 pb-2 px-3 flex items-center justify-between z-10 shadow-sm">
            <div className="flex items-center gap-1.5">
              <div className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="gray" stroke="white" strokeWidth="1"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
              </div>
              <div className="flex flex-col ml-1">
                <p className="text-[15px] font-semibold text-white leading-tight">Jessica M.</p>
                <p className="text-[11px] text-white/80 leading-tight">online</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white pr-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
          </div>

          {/* WhatsApp Chat Body */}
          <div className="flex-1 p-3 overflow-hidden flex flex-col gap-3 justify-end pb-4 relative bg-[#efeae2]">
            {/* Fake Doodle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
            
            {/* Date Bubble */}
            <div className="flex justify-center mb-2 z-10">
              <span className="bg-white/90 px-3 py-1 rounded-lg text-[11px] text-gray-500 shadow-sm uppercase tracking-wide">Today</span>
            </div>

            {MESSAGES.slice(0, visibleCount).map((msg) => (
              <div
                key={msg.id}
                className={`flex animate-pop z-10 ${msg.sender === "clinic" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3 pt-2 pb-1.5 text-[14px] leading-snug shadow-sm relative ${
                    msg.sender === "clinic"
                      ? "bg-[#dcf8c6] text-black rounded-lg rounded-tr-sm"
                      : "bg-white text-black rounded-lg rounded-tl-sm"
                  }`}
                >
                  <span className="pr-12">{msg.text}</span>
                  <span className="text-[10px] text-gray-400 absolute bottom-1 right-2 flex items-center gap-1">
                    14:30
                    {msg.sender === "clinic" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#53bdeb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>
                    )}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator (WhatsApp Style) */}
            {visibleCount > 0 && visibleCount < MESSAGES.length && visibleCount % 2 !== 0 && (
              <div className="flex justify-start animate-pop z-10">
                <div className="bg-white px-3 py-2.5 rounded-lg rounded-tl-sm flex gap-1 items-center shadow-sm w-fit">
                  <div className="text-[13px] text-[#008069] font-medium mr-1 italic">Jessica is typing</div>
                  <div className="typing-dot typing-1 !bg-[#008069]" />
                  <div className="typing-dot typing-2 !bg-[#008069]" />
                  <div className="typing-dot typing-3 !bg-[#008069]" />
                </div>
              </div>
            )}
          </div>

          {/* WhatsApp Input Area */}
          <div className="bg-[#f0f2f5] p-2.5 flex gap-2 items-center z-10">
            <div className="flex-1 bg-white min-h-[40px] rounded-full flex items-center px-3 shadow-sm gap-2">
              <div className="text-gray-400 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
              </div>
              <span className="text-[15px] text-gray-400 flex-1">Message</span>
              <div className="text-gray-400 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
              </div>
              <div className="text-gray-400 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
              </div>
            </div>
            <div className="w-[40px] h-[40px] rounded-full bg-[#00A884] flex items-center justify-center text-white shrink-0 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
            </div>
          </div>
          
          {/* Home indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-black/20 rounded-full z-20" />
        </div>
      </div>
    </div>
  );
}
