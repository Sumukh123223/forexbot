"use client";

import { CandlestickChart, Coins, TrendingUp } from "lucide-react";
import { usePathname } from "next/navigation";

export function ForexScene() {
  const pathname = usePathname();
  if (pathname === "/privacy" || pathname === "/terms") {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="fx-grid-bg absolute inset-0 opacity-20" />

      <div className="absolute left-[6%] top-[18%] hidden -rotate-6 rounded-xl border border-zinc-700/70 bg-[#121216]/70 p-3 text-zinc-300 blur-[0.2px] lg:block">
        <div className="flex items-center gap-2 text-xs">
          <span className="fx-icon-chip"><CandlestickChart size={14} /></span>
          <span>EUR/USD Momentum +1.42%</span>
        </div>
      </div>

      <div className="absolute right-[8%] top-[24%] hidden rotate-6 rounded-xl border border-zinc-700/70 bg-[#121216]/70 p-3 text-zinc-300 lg:block">
        <div className="flex items-center gap-2 text-xs">
          <span className="fx-icon-chip"><TrendingUp size={14} /></span>
          <span>XAUUSD Trend Strength: High</span>
        </div>
      </div>

      <div className="absolute bottom-[14%] left-[12%] hidden rounded-xl border border-zinc-700/70 bg-[#121216]/70 p-3 text-zinc-300 lg:block">
        <div className="flex items-center gap-2 text-xs">
          <span className="fx-icon-chip"><Coins size={14} /></span>
          <span>Risk Cap Active: 1.5%</span>
        </div>
      </div>
    </div>
  );
}
