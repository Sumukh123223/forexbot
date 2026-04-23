"use client";

import { FormEvent, useState } from "react";

export default function StrategiesPage() {
  const [saved, setSaved] = useState("");
  const [activeTab, setActiveTab] = useState<"backtest" | "forward">("backtest");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaved("Strategy settings updated.");
  }

  return (
    <section className="rounded-xl border border-[color:var(--terminal-border)] bg-[var(--terminal-surface)] p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-[color:var(--terminal-text)]">Strategies</h2>
          <p className="mt-2 text-[color:var(--terminal-muted)]">Tune bot parameters and review backtest vs forward-test results.</p>
        </div>
        <div className="inline-flex rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] p-1 text-xs">
          <button
            onClick={() => setActiveTab("backtest")}
            className={`rounded-md px-3 py-1.5 transition ${activeTab === "backtest" ? "bg-sky-500 text-white" : "text-[color:var(--terminal-muted)]"}`}
          >
            Backtest
          </button>
          <button
            onClick={() => setActiveTab("forward")}
            className={`rounded-md px-3 py-1.5 transition ${activeTab === "forward" ? "bg-sky-500 text-white" : "text-[color:var(--terminal-muted)]"}`}
          >
            Forward Test
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {(activeTab === "backtest"
          ? [
              ["Period", "Jan 2024 - Mar 2026"],
              ["Net ROI", "+78.4%"],
              ["Max Drawdown", "8.9%"],
            ]
          : [
              ["Period", "Last 30 days"],
              ["Net ROI", "+5.8%"],
              ["Max Drawdown", "2.1%"],
            ]
        ).map(([k, v]) => (
          <article key={k} className="rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] p-4">
            <p className="text-xs text-[color:var(--terminal-muted)]">{k}</p>
            <p className="mt-1 text-lg font-semibold text-[color:var(--terminal-text)]">{v}</p>
          </article>
        ))}
      </div>

      <section className="mt-6 rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] p-4">
        <h3 className="text-sm font-semibold text-[color:var(--terminal-text)]">Strategy Confidence Index</h3>
        <p className="mt-1 text-xs text-[color:var(--terminal-muted)]">
          Confidence combines hit-rate stability, drawdown behavior, and execution quality over recent sessions.
        </p>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {[
            ["Candle Follow Core", "82/100"],
            ["Trend Hold Variant", "76/100"],
            ["Session Filter Profile", "88/100"],
          ].map(([name, score]) => (
            <article key={name} className="ui-metric-card">
              <p className="ui-metric-label">{name}</p>
              <p className="ui-metric-value">{score}</p>
            </article>
          ))}
        </div>
      </section>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="text-sm text-[color:var(--terminal-muted)]">Bot Name<input className="mt-1 w-full rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] px-3 py-2 text-[color:var(--terminal-text)]" defaultValue="LUNAVEX Core" /></label>
        <label className="text-sm text-[color:var(--terminal-muted)]">Trading Pair<input className="mt-1 w-full rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] px-3 py-2 text-[color:var(--terminal-text)]" defaultValue="EUR/USD" /></label>
        <label className="text-sm text-[color:var(--terminal-muted)]">Risk %<input className="mt-1 w-full rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] px-3 py-2 text-[color:var(--terminal-text)]" defaultValue="1.5" /></label>
        <label className="text-sm text-[color:var(--terminal-muted)]">Timeframe<input className="mt-1 w-full rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] px-3 py-2 text-[color:var(--terminal-text)]" defaultValue="H1" /></label>
        <div className="md:col-span-2">
          <button className="rounded-lg bg-sky-500 px-4 py-2 font-semibold text-white transition hover:bg-sky-600">Save Strategy</button>
          {saved && <p className="mt-3 text-sm text-sky-400">{saved}</p>}
        </div>
      </form>
    </section>
  );
}
