"use client";

import { FormEvent, useState } from "react";

export default function RiskCenterPage() {
  const [status, setStatus] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Risk controls saved.");
  }

  return (
    <section className="rounded-xl border border-[color:var(--terminal-border)] bg-[var(--terminal-surface)] p-6">
      <h2 className="text-2xl font-semibold text-[color:var(--terminal-text)]">Risk Center</h2>
      <p className="mt-2 text-[color:var(--terminal-muted)]">Configure drawdown thresholds, stop-loss controls, and allocation limits.</p>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="text-sm text-[color:var(--terminal-muted)]">Max Drawdown %<input className="mt-1 w-full rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] px-3 py-2 text-[color:var(--terminal-text)]" defaultValue="10" /></label>
        <label className="text-sm text-[color:var(--terminal-muted)]">Daily Loss Limit %<input className="mt-1 w-full rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] px-3 py-2 text-[color:var(--terminal-text)]" defaultValue="3" /></label>
        <label className="text-sm text-[color:var(--terminal-muted)]">Max Capital Allocation %<input className="mt-1 w-full rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] px-3 py-2 text-[color:var(--terminal-text)]" defaultValue="40" /></label>
        <label className="text-sm text-[color:var(--terminal-muted)]">Global Stop Loss (pips)<input className="mt-1 w-full rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] px-3 py-2 text-[color:var(--terminal-text)]" defaultValue="45" /></label>
        <div className="md:col-span-2">
          <button className="rounded-lg bg-sky-500 px-4 py-2 font-semibold text-white transition hover:bg-sky-600">Save Risk Rules</button>
          {status && <p className="mt-3 text-sm text-sky-400">{status}</p>}
        </div>
      </form>
    </section>
  );
}
