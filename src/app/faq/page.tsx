"use client";

import { CircleHelp } from "lucide-react";

const faqs = [
  [
    "Is this bot beginner friendly?",
    "Yes. New users can start with the conservative risk profile, fixed lot sizing, and lower session exposure. The onboarding flow is designed to help you connect accounts, choose a strategy template, and review risk settings before enabling live execution.",
  ],
  [
    "Which brokers are supported?",
    "The platform is designed around MT4/MT5-compatible broker environments and can also be adapted for supported exchange APIs. In production usage, always verify symbol mapping, account leverage, and order type compatibility before deployment.",
  ],
  [
    "Is profit guaranteed?",
    "No. Profit is never guaranteed. Market volatility, spread changes, slippage, and execution latency can all affect outcomes. Use drawdown limits, daily loss caps, and portfolio-level risk controls to manage downside.",
  ],
  [
    "Can I use this on prop firms?",
    "Yes, but you must match the prop firm rules precisely. Configure max daily loss, total drawdown, trading window restrictions, and allowed symbols so the strategy remains compliant.",
  ],
  [
    "What is the difference between backtest and forward-test?",
    "Backtest evaluates historical data to estimate strategy behavior over past periods. Forward-test runs the strategy in current/live market conditions (usually with reduced size) to validate execution quality before scaling capital.",
  ],
  [
    "How should I use journal notes?",
    "Journal notes should capture why a trade was taken, how rules were followed, and what could be improved. Over time, this helps detect recurring mistakes and improve strategy discipline with evidence instead of guesswork.",
  ],
];

export default function FAQPage() {
  return (
    <section className="min-h-[calc(100vh-76px)] border-y border-violet-900/50 bg-[#2b0d69] px-4 py-6 md:px-6">
      <div className="rounded-2xl border border-violet-400/20 bg-[#1b0a4b]/85 p-5 md:p-6">
        <h1 className="inline-flex items-center gap-2 text-5xl font-semibold text-white md:text-4xl">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-violet-300/25 bg-violet-500/10">
            <CircleHelp size={14} />
          </span>
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-base text-violet-100/70">
          These answers focus on real trading operations: setup, risk, testing, and execution discipline.
        </p>
      <div className="mt-6 space-y-3">
        {faqs.map(([q, a]) => (
          <details key={q} className="rounded-xl border border-violet-400/20 bg-[#180943]/95 p-4">
            <summary className="cursor-pointer text-xl font-semibold text-violet-50">{q}</summary>
            <p className="mt-3 text-base text-violet-100/75">{a}</p>
          </details>
        ))}
      </div>
      </div>
    </section>
  );
}
