export default function TradingBotPage() {
  return (
    <div className="ui-page mx-auto w-full max-w-6xl space-y-6">
      <section className="ui-section">
        <h1 className="text-3xl font-semibold text-white">Trading Bot Overview</h1>
        <p className="mt-3 text-base leading-relaxed text-slate-400">
          LUNAVEX AI is designed as an execution infrastructure layer that combines data ingestion,
          strategy controls, and risk constraints for disciplined forex automation.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="ui-section">
          <h2 className="text-xl font-semibold text-white">How The Bot Works</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>• Pulls market data and evaluates strategy conditions in real-time.</li>
            <li>• Applies position sizing and session risk filters before execution.</li>
            <li>• Executes orders through broker-compatible MT4/MT5 pathways.</li>
          </ul>
        </article>

        <article className="ui-section">
          <h2 className="text-xl font-semibold text-white">Risk Management</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>• Dynamic stop loss and take profit bands.</li>
            <li>• No martingale strategy profile.</li>
            <li>• Daily loss guardrails and max concurrent exposure limits.</li>
          </ul>
        </article>

        <article className="ui-section">
          <h2 className="text-xl font-semibold text-white">Supported Brokers</h2>
          <p className="mt-3 text-sm text-slate-400">Compatible with major regulated brokers supporting MT4/MT5 infrastructure.</p>
        </article>

        <article className="ui-section">
          <h2 className="text-xl font-semibold text-white">Installation Steps</h2>
          <ol className="mt-3 space-y-2 text-sm text-slate-400">
            <li>1. Purchase a subscription plan.</li>
            <li>2. Download the bot package from dashboard.</li>
            <li>3. Import config and enable your preferred risk profile.</li>
          </ol>
        </article>
      </section>

      <section className="ui-section">
        <h2 className="text-2xl font-semibold text-white">Execution Policy</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 text-sm text-slate-400">
          <article className="rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-4">
            <p className="font-medium text-slate-200">Entry Conditions</p>
            <p className="mt-2">Trades open only when candle confirmation, momentum threshold, and risk constraints are all satisfied.</p>
          </article>
          <article className="rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-4">
            <p className="font-medium text-slate-200">Pause Conditions</p>
            <p className="mt-2">Execution can pause during spread spikes, major news windows, or when daily risk limits are reached.</p>
          </article>
          <article className="rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-4">
            <p className="font-medium text-slate-200">Exit Conditions</p>
            <p className="mt-2">Positions exit via stop-loss, take-profit, or momentum deterioration signals from the strategy layer.</p>
          </article>
          <article className="rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] p-4">
            <p className="font-medium text-slate-200">Capital Protection</p>
            <p className="mt-2">Portfolio risk caps override strategy entries to prevent excessive correlated exposure.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
