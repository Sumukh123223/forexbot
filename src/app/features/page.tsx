import { Bot, ChartCandlestick, Radar, ShieldCheck, type LucideIcon } from "lucide-react";

const featureList: [string, string, LucideIcon][] = [
  ["Execution Engine", "Low-latency strategy execution with configurable risk caps.", ChartCandlestick],
  ["Risk Controls", "Position sizing, stop logic, and portfolio exposure constraints.", ShieldCheck],
  ["Analytics", "Performance diagnostics, trade logs, and equity visualization.", Radar],
  ["Deployment", "Broker-friendly setup with MT4/MT5 operational templates.", Bot],
];

const functionModules: [string, string][] = [
  ["Signal Intake", "Aggregates price, volatility, and session context before any trade decision is considered."],
  ["AI Decision Layer", "Scores setups with probability and confidence filtering to avoid low-quality entries."],
  ["Risk Gate", "Blocks trades that violate drawdown, exposure, or per-trade loss rules."],
  ["Execution Router", "Routes approved orders to selected connected account with execution-speed priority."],
  ["Monitoring & Alerts", "Sends trade, risk, and anomaly updates to dashboard and notifications channels."],
  ["Journal Feedback Loop", "Stores operator notes and outcomes so strategy refinement stays data-driven."],
];

export default function FeaturesPage() {
  return (
    <div className="space-y-6">
      <section className="fx-card fx-card-3d rounded-xl p-6">
        <h1 className="text-3xl font-semibold text-white">Platform Features</h1>
        <p className="mt-3 text-slate-400">Core capabilities built for consistent and disciplined trading operations.</p>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        {featureList.map(([title, desc, Icon]) => (
          <article key={title} className="fx-card fx-card-3d rounded-xl p-5">
            <div className="inline-flex items-center gap-2">
              <span className="fx-icon-chip"><Icon size={14} /></span>
              <h2 className="text-xl font-semibold text-white">{title}</h2>
            </div>
            <p className="mt-2 text-sm text-slate-400">{desc}</p>
          </article>
        ))}
      </section>

      <section className="fx-card fx-card-3d rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-white">Core Functions Explained</h2>
        <p className="mt-2 text-slate-400">
          These modules show how the system works end-to-end from market input to managed execution.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {functionModules.map(([title, explanation]) => (
            <article key={title} className="rounded-lg border border-slate-800 bg-[#0f172a] p-4">
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{explanation}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
