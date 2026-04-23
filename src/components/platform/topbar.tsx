"use client";

import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTerminalPreferences } from "@/components/platform/terminal-preferences";

export function PlatformTopbar({ userName }: { userName?: string | null }) {
  const router = useRouter();
  const { theme, layoutPreset, setLayoutPreset, toggleTheme, cycleLayoutPreset } = useTerminalPreferences();
  const [showShortcuts, setShowShortcuts] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const typing = target?.tagName === "INPUT" || target?.tagName === "TEXTAREA" || target?.isContentEditable;
      if (typing) return;

      if (event.key === "?") {
        event.preventDefault();
        setShowShortcuts((prev) => !prev);
      }
      if (event.altKey && event.key.toLowerCase() === "t") {
        event.preventDefault();
        toggleTheme();
      }
      if (event.altKey && event.key.toLowerCase() === "l") {
        event.preventDefault();
        cycleLayoutPreset();
      }
      if (event.altKey && event.key === "1") router.push("/dashboard");
      if (event.altKey && event.key === "2") router.push("/dashboard/strategies");
      if (event.altKey && event.key === "3") router.push("/dashboard/portfolio");
      if (event.altKey && event.key === "4") router.push("/dashboard/journal");
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router, toggleTheme, cycleLayoutPreset]);

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[color:var(--terminal-border)] bg-[var(--terminal-surface)] p-4">
        <div>
          <h1 className="text-xl font-semibold text-[color:var(--terminal-text)]">Trading Platform</h1>
          <p className="text-sm text-[color:var(--terminal-muted)]">Welcome back{userName ? `, ${userName}` : ""}. Monitor bots and manage execution.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={toggleTheme}
            className="rounded-lg border border-[color:var(--terminal-border)] px-3 py-2 text-xs text-[color:var(--terminal-muted)] transition hover:border-sky-500"
          >
            Theme: {theme === "dark" ? "Dark" : "Light"}
          </button>
          <select
            value={layoutPreset}
            onChange={(e) => setLayoutPreset(e.target.value as "cozy" | "compact" | "focus")}
            className="rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] px-3 py-2 text-xs text-[color:var(--terminal-muted)]"
          >
            <option value="cozy">Cozy Layout</option>
            <option value="compact">Compact Layout</option>
            <option value="focus">Focus Layout</option>
          </select>
          <button
            onClick={() => setShowShortcuts(true)}
            className="rounded-lg border border-[color:var(--terminal-border)] px-3 py-2 text-xs text-[color:var(--terminal-muted)] transition hover:border-sky-500"
          >
            Shortcuts
          </button>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="rounded-lg border border-[color:var(--terminal-border)] px-4 py-2 text-sm text-[color:var(--terminal-text)] transition hover:border-sky-500"
          >
            Logout
          </button>
        </div>
      </div>

      {showShortcuts && (
        <div className="mb-6 rounded-xl border border-[color:var(--terminal-border)] bg-[var(--terminal-surface)] p-4 text-sm text-[color:var(--terminal-muted)]">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-semibold text-[color:var(--terminal-text)]">Keyboard Shortcuts</p>
            <button onClick={() => setShowShortcuts(false)} className="text-xs text-[color:var(--terminal-muted)]">Close</button>
          </div>
          <div className="grid gap-1 sm:grid-cols-2">
            <p><span className="text-[color:var(--terminal-text)]">Alt+1</span> Overview</p>
            <p><span className="text-[color:var(--terminal-text)]">Alt+2</span> Strategies</p>
            <p><span className="text-[color:var(--terminal-text)]">Alt+3</span> Portfolio</p>
            <p><span className="text-[color:var(--terminal-text)]">Alt+4</span> Journal</p>
            <p><span className="text-[color:var(--terminal-text)]">Alt+T</span> Toggle Theme</p>
            <p><span className="text-[color:var(--terminal-text)]">Alt+L</span> Cycle Layout</p>
            <p><span className="text-[color:var(--terminal-text)]">?</span> Open Shortcuts</p>
          </div>
        </div>
      )}
    </>
  );
}
