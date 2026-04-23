"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type ThemeMode = "dark" | "light";
type LayoutPreset = "cozy" | "compact" | "focus";

type TerminalPreferencesContextValue = {
  theme: ThemeMode;
  layoutPreset: LayoutPreset;
  setTheme: (theme: ThemeMode) => void;
  setLayoutPreset: (preset: LayoutPreset) => void;
  toggleTheme: () => void;
  cycleLayoutPreset: () => void;
};

const TerminalPreferencesContext = createContext<TerminalPreferencesContextValue | null>(null);

const THEME_KEY = "lunavex-terminal-theme";
const LAYOUT_KEY = "lunavex-terminal-layout";

export function TerminalPreferencesProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("dark");
  const [layoutPreset, setLayoutPresetState] = useState<LayoutPreset>("cozy");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(THEME_KEY) as ThemeMode | null;
    const storedLayout = window.localStorage.getItem(LAYOUT_KEY) as LayoutPreset | null;
    if (storedTheme === "dark" || storedTheme === "light") {
      setThemeState(storedTheme);
    }
    if (storedLayout === "cozy" || storedLayout === "compact" || storedLayout === "focus") {
      setLayoutPresetState(storedLayout);
    }
  }, []);

  const setTheme = (next: ThemeMode) => {
    setThemeState(next);
    window.localStorage.setItem(THEME_KEY, next);
  };

  const setLayoutPreset = (next: LayoutPreset) => {
    setLayoutPresetState(next);
    window.localStorage.setItem(LAYOUT_KEY, next);
  };

  const value = useMemo<TerminalPreferencesContextValue>(
    () => ({
      theme,
      layoutPreset,
      setTheme,
      setLayoutPreset,
      toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
      cycleLayoutPreset: () => {
        const next = layoutPreset === "cozy" ? "compact" : layoutPreset === "compact" ? "focus" : "cozy";
        setLayoutPreset(next);
      },
    }),
    [theme, layoutPreset],
  );

  return <TerminalPreferencesContext.Provider value={value}>{children}</TerminalPreferencesContext.Provider>;
}

export function useTerminalPreferences() {
  const context = useContext(TerminalPreferencesContext);
  if (!context) {
    throw new Error("useTerminalPreferences must be used within TerminalPreferencesProvider");
  }
  return context;
}
