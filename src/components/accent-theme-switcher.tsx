"use client";

import { useEffect, useState } from "react";

type AccentOption = {
  id: "emerald-gold" | "amber-slate" | "purple-rose" | "teal-lime";
  label: string;
  swatchA: string;
  swatchB: string;
};

const options: AccentOption[] = [
  { id: "emerald-gold", label: "A", swatchA: "#22c55e", swatchB: "#eab308" },
  { id: "amber-slate", label: "B", swatchA: "#f59e0b", swatchB: "#94a3b8" },
  { id: "purple-rose", label: "C", swatchA: "#a855f7", swatchB: "#f43f5e" },
  { id: "teal-lime", label: "D", swatchA: "#14b8a6", swatchB: "#84cc16" },
];

const STORAGE_KEY = "lunavex-accent-theme";

export function AccentThemeSwitcher() {
  const [active, setActive] = useState<AccentOption["id"]>("emerald-gold");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as AccentOption["id"] | null;
    const initial = stored && options.some((o) => o.id === stored) ? stored : "emerald-gold";
    setActive(initial);
    document.documentElement.setAttribute("data-accent", initial);
  }, []);

  function applyTheme(next: AccentOption["id"]) {
    setActive(next);
    document.documentElement.setAttribute("data-accent", next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <div className="fixed bottom-20 left-4 z-40 rounded-xl border border-slate-700 bg-[#0b1220]/95 p-3 backdrop-blur">
      <p className="mb-2 text-[11px] uppercase tracking-wide text-slate-400">Palette Live</p>
      <div className="flex items-center gap-2">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => applyTheme(option.id)}
            className={`rounded-lg border p-1.5 transition ${active === option.id ? "border-white" : "border-slate-700"}`}
            aria-label={`Activate palette ${option.label}`}
            title={`Palette ${option.label}`}
          >
            <span className="inline-flex items-center gap-1">
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: option.swatchA }} />
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: option.swatchB }} />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
