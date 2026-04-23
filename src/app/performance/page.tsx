const tradeHistory = [
  { date: "2026-01-03", pair: "EUR/USD", pnl: "+$285" },
  { date: "2026-01-04", pair: "USD/JPY", pnl: "-$92" },
  { date: "2026-01-05", pair: "GBP/USD", pnl: "+$418" },
  { date: "2026-01-06", pair: "AUD/USD", pnl: "+$153" },
];

export default function PerformancePage() {
  return (
    <div className="space-y-8">
      <section className="fx-card fx-card-3d rounded-xl p-6">
        <h1 className="text-3xl font-semibold text-white">Performance Metrics</h1>
        <p className="mt-3 text-slate-400">Live and historical performance snapshots for operational review.</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="fx-card fx-card-3d rounded-lg p-4"><p className="text-sm text-slate-400">Win Rate</p><p className="mt-2 text-2xl font-semibold text-white">72.6%</p></div>
          <div className="fx-card fx-card-3d rounded-lg p-4"><p className="text-sm text-slate-400">Drawdown</p><p className="mt-2 text-2xl font-semibold text-white">9.31%</p></div>
          <div className="fx-card fx-card-3d rounded-lg p-4"><p className="text-sm text-slate-400">Profit Factor</p><p className="mt-2 text-2xl font-semibold text-white">1.85</p></div>
        </div>
      </section>

      <section className="fx-card fx-card-3d rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white">Equity Curve</h2>
        <p className="mt-2 text-sm text-slate-400">Metric: Cumulative account equity (USD) over the last 30 trading sessions.</p>
        <div className="mt-4 rounded-lg border border-slate-800 bg-[#0f172a] p-4">
          <svg viewBox="0 0 640 220" className="h-56 w-full">
            <line x1="40" y1="20" x2="40" y2="186" stroke="#334155" />
            <line x1="40" y1="186" x2="620" y2="186" stroke="#334155" />
            {[20, 60, 100, 140, 186].map((y, i) => (
              <g key={y}>
                <line x1="40" y1={y} x2="620" y2={y} stroke="#1e293b" />
                <text x="8" y={y + 4} fontSize="11" fill="#64748b">{`${20 - i * 5}%`}</text>
              </g>
            ))}
            <text x="250" y="212" fontSize="11" fill="#64748b">Trading Sessions (30D)</text>
            <text x="8" y="14" fontSize="11" fill="#64748b">Equity Growth</text>
            <path d="M40 176 C 95 165, 140 154, 190 137 C 250 116, 310 106, 372 90 C 445 69, 515 60, 585 40 C 604 34, 614 30, 620 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="620" cy="24" r="3.5" fill="#0ea5e9" />
          </svg>
        </div>
        <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-400">
          <span className="inline-flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-sky-500" /> Strategy Equity</span>
          <span className="inline-flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-slate-600" /> Baseline = Session 1</span>
        </div>
      </section>

      <section className="fx-card fx-card-3d rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white">Trade History (Dummy)</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-slate-400"><tr><th className="py-2">Date</th><th className="py-2">Pair</th><th className="py-2">PnL</th></tr></thead>
            <tbody>
              {tradeHistory.map((trade) => (
                <tr key={`${trade.date}-${trade.pair}`} className="border-t border-slate-800">
                  <td className="py-3 text-slate-300">{trade.date}</td>
                  <td className="py-3 text-slate-300">{trade.pair}</td>
                  <td className={`py-3 ${trade.pnl.startsWith("+") ? "text-emerald-400" : "text-rose-400"}`}>{trade.pnl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
