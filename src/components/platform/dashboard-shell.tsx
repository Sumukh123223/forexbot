"use client";

import { PlatformSidebar } from "@/components/platform/sidebar";
import { PlatformTopbar } from "@/components/platform/topbar";
import { TerminalPreferencesProvider, useTerminalPreferences } from "@/components/platform/terminal-preferences";

function ShellContent({ children, userName }: { children: React.ReactNode; userName?: string | null }) {
  const { theme, layoutPreset } = useTerminalPreferences();

  const containerWidth =
    layoutPreset === "compact" ? "max-w-5xl" : layoutPreset === "focus" ? "max-w-4xl" : "max-w-6xl";
  const gridColumns = layoutPreset === "focus" ? "lg:grid-cols-1" : "lg:grid-cols-[250px_1fr]";

  return (
    <div className="terminal-shell py-10" data-theme={theme} data-layout={layoutPreset}>
      <div className={`mx-auto grid gap-6 px-6 ${containerWidth} ${gridColumns}`}>
        {layoutPreset !== "focus" && <PlatformSidebar />}
        <section>
          <PlatformTopbar userName={userName} />
          {children}
        </section>
      </div>
    </div>
  );
}

export function DashboardShell({ children, userName }: { children: React.ReactNode; userName?: string | null }) {
  return (
    <TerminalPreferencesProvider>
      <ShellContent userName={userName}>{children}</ShellContent>
    </TerminalPreferencesProvider>
  );
}
