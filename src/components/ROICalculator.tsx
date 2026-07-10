"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./anim/Reveal";

export default function ROICalculator() {
  const [ticketPrice, setTicketPrice] = useState(500);
  const [missedCalls, setMissedCalls] = useState(10);

  // Assuming a conservative 30% booking rate on answered calls
  const lostAnnualRevenue = Math.round(ticketPrice * missedCalls * 0.3 * 52);

  return (
    <Reveal className="rounded-3xl bg-paper p-8 shadow-sm md:p-12 border border-line my-12 relative overflow-hidden">
      {/* Soft gradient background effect */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 bg-violet opacity-5 blur-3xl rounded-full pointer-events-none" 
      />
      
      <div className="grid gap-12 md:grid-cols-2 items-center relative z-10">
        <div>
          <h3 className="type-h3 text-plum">The hidden cost of missed calls</h3>
          <p className="mt-3 text-plum-soft type-body">
            Every time your front desk misses a call, a lead goes to your competitor. Use the sliders to calculate how much revenue is leaking out of your business every year.
          </p>
          
          <div className="mt-8 space-y-8">
            <div className="space-y-3">
              <div className="flex justify-between type-label">
                <span className="text-plum-soft">Average Ticket Price</span>
                <span className="font-semibold text-violet">${ticketPrice}</span>
              </div>
              <input 
                type="range" 
                min="100" 
                max="3000" 
                step="50" 
                value={ticketPrice} 
                onChange={(e) => setTicketPrice(Number(e.target.value))}
                className="w-full h-2 bg-line rounded-lg appearance-none cursor-pointer accent-violet"
                aria-label="Average Ticket Price"
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between type-label">
                <span className="text-plum-soft">Missed Calls Per Week</span>
                <span className="font-semibold text-violet">{missedCalls} calls</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="100" 
                value={missedCalls} 
                onChange={(e) => setMissedCalls(Number(e.target.value))}
                className="w-full h-2 bg-line rounded-lg appearance-none cursor-pointer accent-violet"
                aria-label="Missed Calls Per Week"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-3xl bg-blush p-8 text-center md:p-12 border border-white/50 shadow-inner">
          <span className="type-label text-magenta">Lost Annual Revenue</span>
          <span className="mt-2 text-5xl md:text-6xl font-bold tracking-tight text-plum" style={{ fontFamily: "var(--font-ngetic)" }}>
            ${lostAnnualRevenue.toLocaleString()}
          </span>
          <p className="mt-4 text-xs text-plum-soft">
            *Assuming a conservative 30% booking rate.
          </p>
          <Link href="/contact" className="btn btn-primary mt-8 w-full sm:w-auto">
            Plug the leak with AI
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
