export default function PerformanceMethodologyPage() {
  return (
    <div className="ui-page space-y-6">
      <section className="ui-section">
        <h1 className="ui-title">Performance Methodology</h1>
        <p className="ui-subtitle">How platform metrics are calculated and interpreted for fair performance review.</p>
      </section>

      <section className="ui-section">
        <div className="space-y-4 text-sm text-[color:var(--terminal-muted)]">
          <p><span className="font-medium text-[color:var(--terminal-text)]">ROI:</span> Net return on account equity over selected period, after spread/slippage assumptions.</p>
          <p><span className="font-medium text-[color:var(--terminal-text)]">Win Rate:</span> Percentage of closed trades with positive net outcome.</p>
          <p><span className="font-medium text-[color:var(--terminal-text)]">Drawdown:</span> Largest peak-to-trough decline during the measured period.</p>
          <p><span className="font-medium text-[color:var(--terminal-text)]">Profit Factor:</span> Gross profit divided by gross loss, used to evaluate edge quality.</p>
          <p><span className="font-medium text-[color:var(--terminal-text)]">Forward Test:</span> Live-market observation phase before scaling account risk.</p>
        </div>
      </section>
    </div>
  );
}
