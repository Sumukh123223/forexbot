const rows = [
  { id: "TR-812", pair: "EUR/USD", direction: "Long", status: "Running", pnl: "+$182" },
  { id: "TR-901", pair: "GBP/JPY", direction: "Short", status: "Running", pnl: "-$34" },
  { id: "TR-944", pair: "USD/CAD", direction: "Long", status: "Pending", pnl: "$0" },
];

export default function ExecutionPage() {
  return (
    <section className="rounded-xl border border-[color:var(--terminal-border)] bg-[var(--terminal-surface)] p-6">
      <h2 className="text-2xl font-semibold text-[color:var(--terminal-text)]">Execution</h2>
      <p className="mt-2 text-[color:var(--terminal-muted)]">Monitor open trades and signal-triggered positions.</p>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-[color:var(--terminal-muted)]"><tr><th className="py-2">ID</th><th className="py-2">Pair</th><th className="py-2">Direction</th><th className="py-2">Status</th><th className="py-2">PnL</th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-[color:var(--terminal-border)]">
                <td className="py-3 text-[color:var(--terminal-text)]">{r.id}</td>
                <td className="py-3 text-[color:var(--terminal-text)]">{r.pair}</td>
                <td className="py-3 text-[color:var(--terminal-text)]">{r.direction}</td>
                <td className="py-3 text-[color:var(--terminal-text)]">{r.status}</td>
                <td className={`py-3 ${r.pnl.startsWith("+") ? "text-emerald-400" : r.pnl.startsWith("-") ? "text-rose-400" : "text-[color:var(--terminal-text)]"}`}>{r.pnl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
