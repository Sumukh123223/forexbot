import { Activity, Wallet, Waypoints, BarChart3 } from "lucide-react";

const dashboardStats = [
  { label: "Portfolio Return", value: "+127.48%", Icon: BarChart3 },
  { label: "Connected Accounts", value: "3", Icon: Waypoints },
  { label: "Aggregate Balance", value: "$27,540", Icon: Wallet },
  { label: "Today PnL", value: "+$392", Icon: Activity },
];

const accounts = [
  { name: "Binance Main", exposure: "32%", bots: 3, pnl: "+$248" },
  { name: "Bybit Quant", exposure: "24%", bots: 2, pnl: "+$184" },
  { name: "MT5 Prop", exposure: "12%", bots: 1, pnl: "-$41" },
];

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map(({ label, value, Icon }) => (
          <article key={label} className="fx-card fx-card-3d rounded-xl p-4">
            <div className="fx-icon-chip mb-2">
              <Icon size={14} />
            </div>
            <p className="text-sm text-[color:var(--terminal-muted)]">{label}</p>
            <p className="mt-2 text-2xl font-semibold text-[color:var(--terminal-text)]">{value}</p>
          </article>
        ))}
      </section>

      <section className="fx-card rounded-xl p-5">
        <h2 className="text-xl font-semibold text-[color:var(--terminal-text)]">Multi-Account Snapshot</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-[color:var(--terminal-muted)]"><tr><th className="py-2">Account</th><th className="py-2">Exposure</th><th className="py-2">Active Bots</th><th className="py-2">24h PnL</th></tr></thead>
            <tbody>
              {accounts.map((account) => (
                <tr key={account.name} className="border-t border-[color:var(--terminal-border)]">
                  <td className="py-3 text-[color:var(--terminal-text)]">{account.name}</td>
                  <td className="py-3 text-[color:var(--terminal-muted)]">{account.exposure}</td>
                  <td className="py-3 text-[color:var(--terminal-muted)]">{account.bots}</td>
                  <td className={`py-3 ${account.pnl.startsWith("+") ? "text-emerald-400" : "text-rose-400"}`}>{account.pnl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="ui-section">
        <h2 className="text-xl font-semibold text-[color:var(--terminal-text)]">Alert Center</h2>
        <p className="mt-2 text-sm text-[color:var(--terminal-muted)]">Real-time operational alerts for risk, execution, and market conditions.</p>
        <div className="mt-4 space-y-2 text-sm">
          <article className="rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] p-3">
            <p className="text-[color:var(--terminal-text)]">Risk Warning: Bybit Quant reached 24% exposure (limit 25%).</p>
            <p className="mt-1 text-xs text-[color:var(--terminal-muted)]">2 minutes ago</p>
          </article>
          <article className="rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] p-3">
            <p className="text-[color:var(--terminal-text)]">Execution Notice: Spread widened on XAUUSD; entries slowed by filter.</p>
            <p className="mt-1 text-xs text-[color:var(--terminal-muted)]">7 minutes ago</p>
          </article>
          <article className="rounded-lg border border-[color:var(--terminal-border)] bg-[var(--terminal-surface-soft)] p-3">
            <p className="text-[color:var(--terminal-text)]">System Health: All active bots running with normal latency.</p>
            <p className="mt-1 text-xs text-[color:var(--terminal-muted)]">12 minutes ago</p>
          </article>
        </div>
      </section>
    </div>
  );
}
