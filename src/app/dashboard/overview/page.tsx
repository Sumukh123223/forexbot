const stats = [
  ["Total Return", "+127.48%"],
  ["Active Bots", "8"],
  ["Balance", "$42,560"],
  ["Recent Trades", "64"],
];

export default function OverviewPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(([label, value]) => (
          <article key={label} className="rounded-xl border border-[color:var(--terminal-border)] bg-[var(--terminal-surface)] p-4">
            <p className="text-sm text-[color:var(--terminal-muted)]">{label}</p>
            <p className="mt-2 text-2xl font-semibold text-[color:var(--terminal-text)]">{value}</p>
          </article>
        ))}
      </section>

      <section className="rounded-xl border border-[color:var(--terminal-border)] bg-[var(--terminal-surface)] p-6">
        <h2 className="text-xl font-semibold text-[color:var(--terminal-text)]">Recent Activity</h2>
        <p className="mt-2 text-[color:var(--terminal-muted)]">Bot EUR/USD executed 6 trades in the last 24h with controlled risk profile.</p>
      </section>
    </div>
  );
}
