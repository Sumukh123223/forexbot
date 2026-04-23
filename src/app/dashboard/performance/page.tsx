const history = [
  { date: "2026-03-01", trades: 18, pnl: "+$426" },
  { date: "2026-03-02", trades: 12, pnl: "+$201" },
  { date: "2026-03-03", trades: 16, pnl: "-$94" },
  { date: "2026-03-04", trades: 19, pnl: "+$382" },
];

export default function DashboardPerformancePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-[color:var(--terminal-border)] bg-[var(--terminal-surface)] p-6">
        <h2 className="text-2xl font-semibold text-[color:var(--terminal-text)]">Performance</h2>
        <p className="mt-2 text-[color:var(--terminal-muted)]">Review equity progression, win rate, and session-level trade behavior.</p>
        <div className="mt-5 rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] p-4">
          <svg viewBox="0 0 640 220" className="h-56 w-full">
            <line x1="40" y1="22" x2="40" y2="184" stroke="#334155" />
            <line x1="40" y1="184" x2="620" y2="184" stroke="#334155" />
            {[22, 62, 102, 142, 184].map((y, i) => (
              <g key={y}>
                <line x1="40" y1={y} x2="620" y2={y} stroke="#1e293b" />
                <text x="10" y={y + 4} fontSize="11" fill="#64748b">{`${14 - i * 3}%`}</text>
              </g>
            ))}
            <text x="8" y="14" fontSize="11" fill="#64748b">Monthly Return</text>
            <text x="245" y="212" fontSize="11" fill="#64748b">Days (Rolling 30D)</text>
            <path d="M40 170 C 88 162, 130 142, 190 122 C 258 104, 330 84, 402 68 C 470 54, 542 40, 620 20" fill="none" stroke="#0ea5e9" strokeWidth="2.5" />
            <circle cx="620" cy="20" r="3.5" fill="#0ea5e9" />
          </svg>
        </div>
        <p className="mt-3 text-xs text-[color:var(--terminal-muted)]">
          Graph metric: rolling monthly strategy return net of spread and slippage assumptions.
        </p>
      </section>

      <section className="rounded-xl border border-[color:var(--terminal-border)] bg-[var(--terminal-surface)] p-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] p-4"><p className="text-sm text-[color:var(--terminal-muted)]">Win Rate</p><p className="mt-2 text-xl font-semibold text-[color:var(--terminal-text)]">72.6%</p></div>
          <div className="rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] p-4"><p className="text-sm text-[color:var(--terminal-muted)]">Drawdown</p><p className="mt-2 text-xl font-semibold text-[color:var(--terminal-text)]">9.31%</p></div>
          <div className="rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] p-4"><p className="text-sm text-[color:var(--terminal-muted)]">Profit Factor</p><p className="mt-2 text-xl font-semibold text-[color:var(--terminal-text)]">1.85</p></div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-[color:var(--terminal-muted)]"><tr><th className="py-2">Date</th><th className="py-2">Trades</th><th className="py-2">PnL</th></tr></thead>
            <tbody>
              {history.map((h) => (
                <tr key={h.date} className="border-t border-[color:var(--terminal-border)]">
                  <td className="py-3 text-[color:var(--terminal-text)]">{h.date}</td>
                  <td className="py-3 text-[color:var(--terminal-text)]">{h.trades}</td>
                  <td className={`py-3 ${h.pnl.startsWith("+") ? "text-emerald-400" : "text-rose-400"}`}>{h.pnl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
