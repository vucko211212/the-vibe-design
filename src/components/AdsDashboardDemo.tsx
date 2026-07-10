"use client";

import { useState, useEffect } from "react";


export default function AdsDashboardDemo() {
  const [spend, setSpend] = useState(4120);
  const [bookings, setBookings] = useState(138);
  const [notifications, setNotifications] = useState<{id: number, text: string}[]>([
    { id: 1, text: "Booking: Botox Consultation" },
    { id: 2, text: "Booking: Lip Filler" }
  ]);

  useEffect(() => {
    let isActive = true;
    let idCounter = 3;
    
    // Simulate live dashboard activity
    const interval = setInterval(() => {
      if (!isActive) return;
      
      // Increment spend slowly
      setSpend(prev => prev + Math.floor(Math.random() * 12) + 3);
      
      // Randomly trigger a booking
      if (Math.random() > 0.4) {
        setBookings(prev => prev + 1);
        
        const treatments = ["Botox", "Lip Filler", "Morpheus8", "Laser Hair Removal", "CoolSculpting"];
        const newNotif = { 
          id: idCounter++, 
          text: `Booking: ${treatments[Math.floor(Math.random() * treatments.length)]}` 
        };
        
        setNotifications(prev => [newNotif, ...prev].slice(0, 3));
      }
    }, 2500);

    return () => {
      isActive = false;
      clearInterval(interval);
    };
  }, []);

  const costPerBooking = (spend / bookings).toFixed(2);

  return (
    <div className="bg-plum text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden h-full flex flex-col justify-center border border-white/10">
      
      {/* Background glow */}
      <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-violet opacity-30 blur-3xl rounded-full pointer-events-none" />
      
      <div className="relative z-10 flex flex-col gap-6">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d785b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
            <span className="text-sm font-medium">Campaign: Botox & Fillers</span>
          </div>
          <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-300 font-medium">Live</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 p-5 rounded-2xl border border-white/5 transition-colors">
            <p className="text-xs text-cream/50 uppercase tracking-widest font-medium">Ad Spend</p>
            <p className="text-3xl font-bold mt-2 font-mono transition-all duration-300">
              ${spend.toLocaleString()}
            </p>
          </div>
          <div className="bg-white/5 p-5 rounded-2xl border border-white/5 transition-colors">
            <p className="text-xs text-cream/50 uppercase tracking-widest font-medium">Bookings</p>
            <p className="text-3xl font-bold mt-2 text-magenta font-mono transition-all duration-300">
              {bookings}
            </p>
          </div>
        </div>

        {/* Cost per Booking Bar */}
        <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
          <div className="flex justify-between items-end mb-3">
            <p className="text-xs text-cream/50 uppercase tracking-widest font-medium">Cost per Booking</p>
            <p className="text-lg font-semibold font-mono">${costPerBooking}</p>
          </div>
          <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-violet h-full rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${Math.max(10, Math.min(100, (Number(costPerBooking) / 100) * 100))}%` }} 
            />
          </div>
          <p className="text-xs text-green-400 font-normal mt-3 tracking-wide flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
            Optimizing in real-time
          </p>
        </div>

        {/* Live Feed */}
        <div className="mt-2 h-[80px] overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-plum to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-plum to-transparent z-10" />
          
          <div className="flex flex-col gap-2 relative z-0">
            {/* 
              We use standard CSS animations for the list if we don't have framer-motion.
              But wait, the project DOES have GSAP. We can just use standard CSS keyframes for simple list pop-in.
            */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes slideDown {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-feed-item {
                animation: slideDown 0.4s ease-out forwards;
              }
            `}} />
            
            {notifications.map((notif) => (
              <div 
                key={notif.id} 
                className="animate-feed-item flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl px-4 py-2"
              >
                <div className="w-6 h-6 rounded-full bg-magenta/20 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d785b0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <p className="text-sm text-cream/90 font-medium truncate">{notif.text}</p>
                <p className="text-[10px] text-cream/40 ml-auto whitespace-nowrap">Just now</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
