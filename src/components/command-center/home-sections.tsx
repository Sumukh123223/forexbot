"use client";

import { motion } from "framer-motion";

const terminalRows = [
  { pair: "EUR/USD", pnl: "+$1,248", dir: "up" },
  { pair: "GBP/JPY", pnl: "+$842", dir: "up" },
  { pair: "USD/CAD", pnl: "-$112", dir: "down" },
];

const strategyCards = [
  { name: "Momentum Detection", risk: "Controlled", roi: "Logic Layer", note: "Detects strong candles created by high-volume participants." },
  { name: "Smart Money Confirmation", risk: "Controlled", roi: "Entry Filter", note: "Confirms institutional direction before opening a position." },
  { name: "Trend Hold", risk: "Managed", roi: "Position Logic", note: "Keeps trades open while momentum remains strong and structured." },
  { name: "Weakness Exit", risk: "Defensive", roi: "Exit Layer", note: "Closes positions as momentum fades to protect accumulated gains." },
];

const plans = [
  { id: "plan-monthly", name: "Bronze", price: 499, period: "Monthly", speed: "MT5 optimized execution", feature: "24/7 dedicated support", buttonClass: "bg-amber-600 hover:bg-amber-500" },
  { id: "plan-half-yearly", name: "Silver", price: 999, period: "Half Yearly", speed: "Smart money flow strategy", feature: "No martingale / no hedging", recommended: true, buttonClass: "bg-slate-400 text-slate-950 hover:bg-slate-300" },
  { id: "plan-annual", name: "Gold", price: 1499, period: "Annual", speed: "Auto SL/TP + trend hold logic", feature: "Personal relationship manager", buttonClass: "bg-yellow-500 text-slate-950 hover:bg-yellow-400" },
  { id: "plan-lifetime", name: "Platinum", price: 2999, period: "Lifetime", speed: "Full automation for XAUUSD", feature: "Lifetime WhatsApp support", buttonClass: "bg-cyan-500 hover:bg-cyan-400" },
];

const clientAccounts = [
  { name: "Kanu Bhai Patel", deposit: "$20,000", start: "15 March 2026", label: "View Portfolio" },
  { name: "Dr. Mithilesh Pandya", deposit: "$10,000", start: "02 March 2026", label: "View Portfolio" },
  { name: "Rajan Patel", deposit: "$5,000", start: "03 March 2026", label: "View Portfolio" },
  { name: "Dr. Ankush Rode", deposit: "$2,000", start: "05 March 2026", label: "View Portfolio" },
];

type PlanSelectHandler = (plan: {
  id: string;
  name: string;
  period: string;
  price: number;
}) => void;

export function AmbientBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <motion.div
        className="pointer-events-none absolute -top-16 left-1/4 h-56 w-56 rounded-full bg-zinc-400/10 blur-3xl"
        animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute top-72 right-1/4 h-48 w-48 rounded-full bg-zinc-500/10 blur-3xl"
        animate={{ y: [0, -14, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
    </>
  );
}

export function HeroSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">LUNAVEX AI Command Center</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight text-white">Smarter Trading. Stronger Results.</h1>
          <p className="mt-5 max-w-xl text-lg text-slate-400">
            A live AI trading interface built for execution discipline, risk-first logic, and real-time terminal control.
          </p>
          <button className="btn-accent mt-8 rounded-lg px-7 py-3 font-semibold transition">
            Start Trading
          </button>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="fx-card fx-card-3d rounded-2xl p-6 shadow-[0_0_0_1px_rgba(63,63,70,0.35)]"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-300">Live Trading Interface</p>
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-500/40 bg-zinc-500/15 px-2.5 py-1 text-xs text-zinc-200">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-zinc-300" />
              LIVE
            </span>
          </div>

          <div className="mt-4 space-y-2 rounded-xl border border-slate-800 bg-[#020617] p-4 text-sm">
            {terminalRows.map((row) => (
              <div key={row.pair} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-md border border-slate-800/70 px-3 py-2">
                <span className="text-slate-200">{row.pair}</span>
                <span className={row.dir === "up" ? "text-emerald-400" : "text-rose-400"}>{row.pnl}</span>
                <span className={row.dir === "up" ? "text-emerald-400" : "text-rose-400"}>{row.dir === "up" ? "↑" : "↓"}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg border border-slate-800 bg-[#020617] p-3">
              <p className="text-slate-400">AI Status</p>
              <p className="mt-1 font-semibold text-emerald-300">ACTIVE</p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-[#020617] p-3">
              <p className="text-slate-400">Win Rate</p>
              <p className="mt-1 font-semibold text-white">72.6%</p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export function FloatingStatsSection() {
  return (
    <section className="relative py-16">
      <div className="mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-3">
        {[
          ["+127%", "ROI"],
          ["72.6%", "Win Rate"],
          ["1,248", "Trades"],
        ].map(([value, label], i) => (
          <motion.article
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="fx-card fx-card-3d rounded-xl p-5 text-center"
          >
            <p className="text-4xl font-semibold text-white">{value}</p>
            <p className="mt-1 text-sm uppercase tracking-wide text-slate-400">{label}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function FlowSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold text-white">How The Bot Thinks</h2>
        <div className="mt-8 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
          {["Market Data", "AI Engine", "Risk Filter", "Execution"].map((step, index) => (
            <div key={step} className="contents">
              <div className="fx-card rounded-lg px-4 py-4 text-center font-medium text-slate-200">{step}</div>
              {index < 3 && (
                <motion.div animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="hidden text-center text-zinc-300 md:block">
                  →
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatIsSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-slate-800 bg-[#0b1120] p-6">
          <h2 className="text-3xl font-semibold text-white">What is Candle Follow EA?</h2>
          <p className="mt-3 text-slate-300">
            Candle Follow EA is a fully automated MT5 trading system focused on Gold (XAUUSD). It does not predict the market.
            It follows institutional momentum and executes in alignment with real market participation.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-slate-400">
            <li>• 100% automated execution with built-in stop loss and take profit</li>
            <li>• No martingale, no hedging, and no scalping-overtrading behavior</li>
            <li>• Holds trades during strong trend structure and exits on weakening momentum</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function StrategySection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white">Strategy Modules</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {strategyCards.map((card) => (
            <motion.article key={card.name} whileHover={{ y: -4 }} className="fx-card fx-card-3d rounded-xl p-5 transition">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-white">{card.name}</h3>
                <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-300">Risk: {card.risk}</span>
              </div>
              <p className="mt-2 text-sm text-slate-400">{card.note}</p>
              <p className="mt-4 text-2xl font-semibold text-zinc-200">{card.roi} ROI</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ComparisonSection() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white">Why Candle Follow EA is Different</h2>
        <p className="mt-3 text-slate-400">Built on consistency and control instead of risky growth tricks.</p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-[#0b1120] p-4">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="text-slate-300">
              <tr>
                <th className="py-2">Strategy / Behavior</th>
                <th className="py-2">Other EAs</th>
                <th className="py-2">Candle Follow EA</th>
              </tr>
            </thead>
            <tbody className="text-slate-400">
              {[
                ["Hedging", "Used to hide losses", "No Hedging"],
                ["Martingale", "High-risk lot doubling", "No Martingale"],
                ["Scalping", "Overtrading", "No Scalping"],
                ["Pyramiding", "Risky stacking", "No Pyramiding"],
                ["Entries", "Random / indicator based", "Smart money based"],
                ["Risk", "High drawdown", "Controlled risk"],
              ].map(([a, b, c]) => (
                <tr key={a} className="border-t border-slate-800">
                  <td className="py-2 text-slate-200">{a}</td>
                  <td className="py-2">{b}</td>
                  <td className="py-2 text-emerald-300">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function PerformanceSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="fx-card rounded-2xl p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-white">Live Performance Panel</h2>
            <span className="inline-flex items-center gap-2 text-sm text-zinc-300">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-zinc-200" />
              LIVE
            </span>
          </div>
          <div className="rounded-xl border border-slate-800 bg-[#020617] p-4">
            <svg viewBox="0 0 560 180" className="h-44 w-full">
              <motion.path
                d="M10 150 C 70 140, 120 130, 185 114 C 250 100, 310 86, 370 69 C 430 58, 490 45, 550 30"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
              />
            </svg>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-800 bg-[#020617] p-3"><p className="text-slate-400">ROI</p><p className="mt-1 text-xl font-semibold text-white">+127.48%</p></div>
            <div className="rounded-lg border border-slate-800 bg-[#020617] p-3"><p className="text-slate-400">Win Rate</p><p className="mt-1 text-xl font-semibold text-white">72.6%</p></div>
            <div className="rounded-lg border border-slate-800 bg-[#020617] p-3"><p className="text-slate-400">Drawdown</p><p className="mt-1 text-xl font-semibold text-white">9.31%</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PricingSection({ onSelectPlan }: { onSelectPlan: PlanSelectHandler }) {
  return (
    <section className="py-24" id="pricing">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white">Choose Your Plan</h2>
        <div className="mt-4 rounded-lg border border-slate-800 bg-[#0b1120] p-4 text-sm text-slate-300">
          <p className="font-medium text-white">What happens after plan purchase?</p>
          <p className="mt-2">
            Buy your plan, select an installation slot, and our team will help integrate and start your bot via email support or live session.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <article key={plan.id} className={`fx-card fx-card-3d rounded-xl p-5 ${plan.recommended ? "border-zinc-300" : ""}`}>
              <p className={`text-sm ${plan.recommended ? "font-medium text-zinc-200" : "text-slate-400"}`}>{plan.recommended ? "Most Popular" : "Plan"}</p>
              <p className="mt-3 text-4xl font-semibold text-white">${plan.price}</p>
              <p className="mt-2 text-slate-400">{plan.name} · {plan.period}</p>
              <p className="mt-1 text-xs text-slate-500">{plan.speed}</p>
              <p className="mt-1 text-xs text-slate-500">{plan.feature}</p>
              <button
                onClick={() => onSelectPlan(plan)}
                className={`mt-5 w-full rounded-lg px-4 py-2 font-semibold transition ${plan.recommended ? "btn-accent" : "btn-accent-alt"}`}
              >
                Buy Now
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VerifiedAccountsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white">Live Myfxbook Verified Account Results</h2>
        <p className="mt-3 text-slate-400">Transparent tracking across active live accounts with varying deposit levels.</p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-[#0b1120] p-4">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="text-slate-300">
              <tr>
                <th className="py-2">Client Name</th>
                <th className="py-2">Initial Deposit</th>
                <th className="py-2">Starting Date</th>
                <th className="py-2">Myfxbook Tracking</th>
              </tr>
            </thead>
            <tbody className="text-slate-400">
              {clientAccounts.map((client) => (
                <tr key={client.name} className="border-t border-slate-800">
                  <td className="py-2 text-slate-200">{client.name}</td>
                  <td className="py-2">{client.deposit}</td>
                  <td className="py-2">{client.start}</td>
                  <td className="accent-text py-2">{client.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white">Testimonials</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Ankush Rode", "It waits for proper candle close before entry. The logic behind trades is visible and disciplined."],
            ["Vikas Patel", "I started small first, then scaled after seeing controlled risk and consistent behavior."],
            ["Arjun Desai", "It sticks to system rules and avoids unnecessary aggression. That is what I value most."],
          ].map(([name, quote]) => (
            <article key={name} className="fx-card fx-card-3d rounded-xl p-5">
              <p className="text-slate-300">&ldquo;{quote}&rdquo;</p>
              <p className="mt-3 text-sm font-medium text-white">{name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DisclaimerSection() {
  return (
    <section className="pb-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-100">
          <p className="font-semibold">Disclaimer</p>
          <p className="mt-2">
            Trading Forex and Gold involves high risk and may not be suitable for all investors. There is no guarantee of profits.
            Candle Follow EA is a software tool and does not provide financial advice. Users are responsible for their own trading decisions and risk management.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-[#0b1120] to-[#0f172a] px-8 py-12 text-center">
          <h2 className="text-4xl font-semibold text-white">Activate Your AI Trading System</h2>
          <p className="mt-4 text-slate-400">Launch your command center and move from manual reactions to system-driven execution.</p>
          <button className="btn-accent mt-8 rounded-lg px-7 py-3 font-semibold transition">
            Launch Terminal
          </button>
        </div>
      </div>
    </section>
  );
}
