const accounts = [
  { name: "Binance Main", equity: "$12,440", change: "+$324", risk: "Low", bots: 3 },
  { name: "Bybit Quant", equity: "$8,920", change: "-$48", risk: "Medium", bots: 2 },
  { name: "MT5 Prop", equity: "$6,180", change: "+$116", risk: "Low", bots: 1 },
];

export default function PortfolioPage() {
  return (
    <div className="ui-page space-y-6">
      <section className="ui-section">
        <h2 className="ui-title">Portfolio Dashboard</h2>
        <p className="ui-subtitle">Track multiple accounts, balances, and account-level risk from one terminal.</p>
      </section>

      <section className="ui-grid-3">
        {[
          ["Total Equity", "$27,540", "Healthy"],
          ["24h PnL", "+$392", "Stable"],
          ["Active Accounts", "3", "Monitored"],
        ].map(([k, v, status]) => (
          <article key={k} className="ui-metric-card">
            <p className="ui-metric-label">{k}</p>
            <p className="ui-metric-value">{v}</p>
            <p className="mt-1 text-xs text-[color:var(--terminal-muted)]">Status: {status}</p>
          </article>
        ))}
      </section>

      <section className="ui-section">
        <h3 className="text-lg font-semibold text-[color:var(--terminal-text)]">Account Health Score</h3>
        <p className="mt-2 text-sm text-[color:var(--terminal-muted)]">Composite score from drawdown, exposure, and margin safety checks.</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            ["Binance Main", "86/100"],
            ["Bybit Quant", "74/100"],
            ["MT5 Prop", "81/100"],
          ].map(([name, score]) => (
            <article key={name} className="ui-metric-card">
              <p className="ui-metric-label">{name}</p>
              <p className="ui-metric-value">{score}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ui-section">
        <h3 className="text-lg font-semibold text-[color:var(--terminal-text)]">Connected Accounts</h3>
        <div className="ui-table-wrap mt-4">
          <table className="ui-table">
            <thead>
              <tr>
                <th className="py-2">Account</th>
                <th className="py-2">Equity</th>
                <th className="py-2">24h Change</th>
                <th className="py-2">Risk Tier</th>
                <th className="py-2">Active Bots</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account) => (
                <tr key={account.name}>
                  <td>{account.name}</td>
                  <td>{account.equity}</td>
                  <td className={account.change.startsWith("+") ? "text-emerald-400" : "text-rose-400"}>{account.change}</td>
                  <td className="text-[color:var(--terminal-muted)]">{account.risk}</td>
                  <td className="text-[color:var(--terminal-muted)]">{account.bots}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
