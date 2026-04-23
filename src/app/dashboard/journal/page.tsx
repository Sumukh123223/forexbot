"use client";

import { FormEvent, useState } from "react";

type Entry = {
  id: number;
  pair: string;
  note: string;
  mood: "Confident" | "Neutral" | "Cautious";
};

const initialEntries: Entry[] = [
  { id: 1, pair: "EUR/USD", note: "Held through volatility, rule adherence was good.", mood: "Confident" },
  { id: 2, pair: "GBP/JPY", note: "Exited early due to news spike, revise filters.", mood: "Cautious" },
];

export default function JournalPage() {
  const [entries, setEntries] = useState<Entry[]>(initialEntries);
  const [status, setStatus] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const pair = String(formData.get("pair") || "").trim();
    const note = String(formData.get("note") || "").trim();
    const mood = String(formData.get("mood") || "Neutral") as Entry["mood"];
    if (!pair || !note) return;

    setEntries((prev) => [{ id: Date.now(), pair, note, mood }, ...prev]);
    setStatus("Journal entry added.");
    e.currentTarget.reset();
  }

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-[color:var(--terminal-border)] bg-[var(--terminal-surface)] p-6">
        <h2 className="text-2xl font-semibold text-[color:var(--terminal-text)]">Journal & Notes</h2>
        <p className="mt-2 text-[color:var(--terminal-muted)]">Annotate trades, capture decision quality, and review behavior over time.</p>
      </section>

      <section className="rounded-xl border border-[color:var(--terminal-border)] bg-[var(--terminal-surface)] p-5">
        <h3 className="text-lg font-semibold text-[color:var(--terminal-text)]">Add Note</h3>
        <form onSubmit={onSubmit} className="mt-4 grid gap-3 md:grid-cols-2">
          <input
            name="pair"
            placeholder="Pair (e.g., EUR/USD)"
            className="rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] px-3 py-2 text-[color:var(--terminal-text)]"
            required
          />
          <select
            name="mood"
            className="rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] px-3 py-2 text-[color:var(--terminal-text)]"
            defaultValue="Neutral"
          >
            <option>Confident</option>
            <option>Neutral</option>
            <option>Cautious</option>
          </select>
          <textarea
            name="note"
            placeholder="What happened? What did you learn?"
            className="md:col-span-2 min-h-24 rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] px-3 py-2 text-[color:var(--terminal-text)]"
            required
          />
          <div className="md:col-span-2">
            <button className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600">
              Save Entry
            </button>
            {status && <p className="mt-2 text-sm text-sky-400">{status}</p>}
          </div>
        </form>
      </section>

      <section className="rounded-xl border border-[color:var(--terminal-border)] bg-[var(--terminal-surface)] p-5">
        <h3 className="text-lg font-semibold text-[color:var(--terminal-text)]">Recent Entries</h3>
        <div className="mt-4 space-y-3">
          {entries.map((entry) => (
            <article key={entry.id} className="rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium text-[color:var(--terminal-text)]">{entry.pair}</p>
                <p className="text-xs text-[color:var(--terminal-muted)]">{entry.mood}</p>
              </div>
              <p className="mt-2 text-sm text-[color:var(--terminal-muted)]">{entry.note}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
