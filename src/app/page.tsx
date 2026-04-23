"use client";

import { useCart } from "@/context/cart-context";
import { ArrowRight, Bot, Check, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const plans = [
  {
    id: "monthly",
    name: "Monthly Plan",
    periodLabel: "/ Month",
    price: 499,
    tier: "Monthly Access",
    support: "24/7 Dedicated Support",
    features: [
      "100% Automated Trading",
      "Smart Money Flow Strategy",
      "Gold (XAUUSD) Specialized",
      "MT5 Optimized Performance",
      "Auto Stop Loss & Take Profit",
      "No Martingale Strategy",
      "No Hedging System",
      "No Scalping / Overtrading",
      "24/7 Trading Capability",
    ],
  },
  {
    id: "half-yearly",
    name: "Half Yearly Plan",
    periodLabel: "/ 6 Months",
    price: 999,
    tier: "Half Yearly Access",
    support: "24/7 Dedicated Support",
    recommended: true,
    features: [
      "100% Automated Trading",
      "Smart Money Flow Strategy",
      "Gold (XAUUSD) Specialized",
      "MT5 Optimized Performance",
      "Auto Stop Loss & Take Profit",
      "No Martingale Strategy",
      "No Hedging System",
      "No Scalping / Overtrading",
      "24/7 Trading Capability",
    ],
  },
  {
    id: "annual",
    name: "Annual Plan",
    periodLabel: "/ Year",
    price: 1499,
    tier: "Annual Access",
    support: "Personal Relationship Manager",
    features: [
      "100% Automated Trading",
      "Smart Money Flow Strategy",
      "Gold (XAUUSD) Specialized",
      "MT5 Optimized Performance",
      "Auto Stop Loss & Take Profit",
      "No Martingale Strategy",
      "No Hedging System",
      "No Scalping / Overtrading",
      "24/7 Trading Capability",
    ],
  },
  {
    id: "lifetime",
    name: "Lifetime Plan",
    periodLabel: "/ One Time",
    price: 2999,
    tier: "Lifetime License",
    support: "Personal Relationship Manager",
    features: [
      "100% Automated Trading",
      "Smart Money Flow Strategy",
      "Gold (XAUUSD) Specialized",
      "MT5 Optimized Performance",
      "Auto Stop Loss & Take Profit",
      "No Martingale Strategy",
      "No Hedging System",
      "No Scalping / Overtrading",
      "24/7 Trading Capability",
    ],
  },
];

export default function HomePage() {
  const { addToCart, openCart } = useCart();

  return (
    <div className="bg-[#0b0f1a] pb-0 pt-0">
      <section
        className="overflow-hidden border-y border-white/5 text-slate-100"
        style={{
          background:
            "linear-gradient(135deg, #0B0F1A 0%, #1E1B4B 50%, #312E81 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.12) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
          }}
        />
        <div className="relative mx-auto grid min-h-[520px] max-w-6xl items-center gap-6 px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:grid-cols-[1fr_1.08fr] lg:gap-8 lg:px-6 lg:pb-20 lg:pt-14">
          <div className="order-1 text-center lg:order-1 lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">PROBOT X • Automated Trading Infrastructure</p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl lg:max-w-xl lg:text-[58px] lg:leading-[1.08]">
              Automated Gold Trading with Controlled Risk
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-lg lg:max-w-xl lg:text-xl">
              Probot X executes momentum-based XAUUSD trades with disciplined risk rules.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-slate-200">
              <li><span className="text-emerald-400">✓</span> Live Myfxbook verified accounts</li>
              <li><span className="text-emerald-400">✓</span> Win Rate: 72% (last 3 months live)</li>
              <li><span className="text-emerald-400">✓</span> No martingale, no hedging, no overtrading</li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link href="/#pricing" className="ui-btn-primary inline-flex w-full items-center justify-center px-8 text-sm uppercase tracking-wide sm:w-auto">
                View Plans
              </Link>
              <Link href="/#live-results" className="ui-btn-secondary inline-flex w-full items-center justify-center px-6 text-sm uppercase tracking-wide sm:w-auto">
                View Live Results
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative order-2 flex items-end justify-end lg:order-2"
          >
            <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-700 bg-[#0b1220]/85 p-3 sm:p-4">
              <Image
                src="/lunavex/hero-bot.png"
                alt="AI robot with laptop and phone"
                width={980}
                height={880}
                className="mx-auto h-auto w-full max-w-lg object-contain opacity-95 sm:max-w-xl lg:max-w-2xl"
                priority
              />
              <div className="pointer-events-none absolute left-3 top-3 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1.5 text-[11px] font-semibold text-emerald-300 sm:left-4 sm:top-4 sm:px-3 sm:py-2 sm:text-xs">
                +$1,284 (30D sample)
              </div>
              <div className="pointer-events-none absolute right-3 top-12 rounded-lg border border-blue-400/30 bg-blue-400/10 px-2.5 py-1.5 text-[11px] font-semibold text-blue-300 sm:right-4 sm:top-16 sm:px-3 sm:py-2 sm:text-xs">
                Win Rate 72% (3M live)
              </div>
              <div className="pointer-events-none absolute bottom-3 left-3 rounded-lg border border-slate-500/40 bg-slate-800/80 px-2.5 py-1.5 text-[11px] font-semibold text-slate-200 sm:bottom-4 sm:left-4 sm:px-3 sm:py-2 sm:text-xs">
                AI ACTIVE ●
              </div>
            </div>
          </motion.div>
        </div>
        <div className="relative h-16 bg-[#0b1220]">
          <div className="absolute left-1/2 top-1/2 h-9 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/30" />
          <div className="absolute left-1/2 top-1/2 h-2 w-0.5 -translate-x-1/2 -translate-y-[15%] rounded-full bg-violet-300/50" />
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#111827] px-4 py-12 sm:px-6 sm:py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-5 rounded-2xl border border-white/10 bg-[#0f172a]/80 p-6 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-300">See How It Works</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Watch the Automated Strategy Execution Engine in 60 seconds</h3>
            <p className="mt-2 text-slate-300">Landing → Select Plan → Checkout. Get started in under 2 minutes.</p>
            <ul className="mt-3 space-y-1 text-sm text-slate-300">
              <li>✓ Real trades, not simulation</li>
              <li>✓ Shows entry, hold, and exit logic</li>
              <li>✓ 60-second execution flow breakdown</li>
            </ul>
          </div>
          <Link href="/dashboard" className="ui-btn-primary inline-flex w-full items-center justify-center px-6 text-sm uppercase tracking-wide sm:w-auto">
            View Live Demo
          </Link>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#0f172a] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <p className="mx-auto mb-6 w-fit rounded-full border border-blue-400/30 px-6 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
          Features
        </p>
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Built For Real Trading Workflows
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-300 sm:text-lg">
          Product-focused modules with clear execution metrics, not generic marketing cards.
        </p>
        <div className="mx-auto mt-8 grid max-w-6xl gap-4 sm:mt-10 sm:gap-5 lg:mt-12 lg:grid-cols-[1.2fr_1fr]">
          <article className="ui-card ui-card-hover p-4 sm:p-6">
            <h3 className="text-2xl font-semibold text-white">Gold (XAUUSD) Execution Engine</h3>
            <p className="mt-2 text-slate-300">Optimized specifically for high-volatility gold sessions.</p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
              <div className="rounded-lg bg-[#0b1220] p-3"><p className="text-slate-400">Primary Pair</p><p className="mt-1 font-semibold text-white">XAUUSD</p></div>
              <div className="rounded-lg bg-[#0b1220] p-3"><p className="text-slate-400">Latency</p><p className="mt-1 font-semibold text-emerald-400">&lt;50ms</p></div>
              <div className="rounded-lg bg-[#0b1220] p-3"><p className="text-slate-400">Uptime</p><p className="mt-1 font-semibold text-white">99.9%</p></div>
            </div>
          </article>
          <div className="grid gap-5">
            <article className="ui-card ui-card-hover p-4 sm:p-5">
              <h3 className="text-xl font-semibold text-white">Momentum-Based Entry System</h3>
              <p className="mt-2 text-sm text-slate-300">Waits for candle confirmation before execution.</p>
            </article>
            <article className="ui-card ui-card-hover p-4 sm:p-5">
              <h3 className="text-xl font-semibold text-white">Risk-Control Engine</h3>
              <p className="mt-2 text-sm text-slate-300">Built-in SL/TP with no martingale logic.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-[#0b1220] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 w-fit rounded-full border border-blue-400/30 px-5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
            What Is Candle Follow EA
          </p>
          <h2 className="max-w-3xl text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-5xl">Built to React to Real Market Momentum</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Candle Follow EA is a fully automated trading system for MetaTrader 5, specialized in Gold (XAUUSD). It reacts to confirmed momentum and avoids emotional overtrading.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              ["Fully Automated", "No manual entries needed once configured."],
              ["Momentum Confirmation", "Waits for validated direction before execution."],
              ["MT5 Optimized", "Built for stable and fast MT5 execution."],
            ].map(([title, desc]) => (
              <article key={title} className="ui-card ui-card-hover p-4 sm:p-5">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                  <Bot size={18} />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-slate-300">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="live-results" className="border-t border-slate-800 bg-[#0f172a] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 w-fit rounded-full border border-blue-400/30 px-5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
            How It Works
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
            {[
              ["Detect Momentum", "Identifies abnormal volume spikes"],
              ["Confirm Direction", "Waits for candle close confirmation"],
              ["Execute Trade", "Enters with predefined risk"],
              ["Ride Trend", "Holds during institutional momentum"],
              ["Exit Smart", "Closes when strength weakens"],
            ].map(([step, detail], index) => (
              <article key={step} className="ui-card ui-card-hover rounded-xl p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-400">Step {index + 1}</p>
                <p className="mt-2 font-semibold text-white">{step}</p>
                <p className="mt-1 text-xs text-slate-400">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-[#0b1220] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 w-fit rounded-full border border-blue-400/30 px-5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
            Why It Is Different
          </p>
          <p className="mb-5 max-w-3xl text-slate-300">
            Most automated systems chase fast results with aggressive logic. Candle Follow EA focuses on controlled execution and disciplined risk.
          </p>
          <div className="overflow-hidden rounded-2xl border border-slate-700">
            <table className="w-full text-left">
              <thead className="bg-[#111827] text-sm uppercase tracking-[0.08em] text-slate-300">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Other EA</th>
                  <th className="px-4 py-3">Candle Follow</th>
                </tr>
              </thead>
              <tbody className="bg-[#0f172a] text-slate-200">
                {[
                  ["Martingale", "Yes", "No"],
                  ["Hedging", "Yes", "No"],
                  ["Scalping", "Yes", "No"],
                  ["Risk Profile", "High", "Controlled"],
                ].map(([feature, other, candle]) => (
                  <tr key={feature} className="border-t border-slate-800">
                    <td className="px-4 py-3">{feature}</td>
                    <td className="px-4 py-3 text-rose-300">{other}</td>
                    <td className="px-4 py-3 text-emerald-300">{candle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-[#0f172a] px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 w-fit rounded-full border border-blue-400/30 px-5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
            Live Results
          </p>
          <h2 className="max-w-3xl text-2xl font-semibold text-white sm:text-3xl md:text-4xl">Verified Performance - Real Accounts</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            We provide transparency through independently verified Myfxbook tracking: real deposits, real trades, and real drawdown behavior.
          </p>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">✓ Verified by Myfxbook &nbsp; ✓ No manual trading &nbsp; ✓ Same system used by all clients</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              ["Client A", "$20,000", "+18.2%"],
              ["Client B", "$10,000", "+14.7%"],
              ["Client Portfolio", "$35,000", "+21.4%"],
            ].map(([name, deposit, growth]) => (
              <article key={name} className="ui-card ui-card-hover p-5">
                <p className="text-lg font-semibold text-white">{name}</p>
                <p className="mt-2 text-sm text-slate-400">Deposit: {deposit}</p>
                <p className="mt-1 text-base font-semibold text-emerald-400 sm:text-lg">Growth: {growth}</p>
                <div className="mt-4 h-16 rounded-lg bg-gradient-to-r from-emerald-500/15 via-blue-500/20 to-emerald-500/15" />
                <a href="#" className="mt-4 inline-block text-sm font-semibold text-blue-300 hover:text-blue-200">
                  View Full Trade History →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-slate-800 bg-[#0f172a] px-4 py-12 sm:px-6 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(100% 60% at 100% 50%, rgba(167,139,250,0.28), transparent 60%), repeating-linear-gradient(-18deg, transparent 0, transparent 14px, rgba(167,139,250,0.12) 15px, transparent 16px)",
          }}
        />
        <div className="relative">
          <p className="mx-auto mb-3 w-fit rounded-full border border-violet-500/35 px-5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">
            Why Choose Probot?
          </p>
          <h2 className="mx-auto max-w-4xl text-center text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Maximize Your Trading Potential with Probot
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-violet-200/85 sm:text-base">
            Probot delivers automated, stress-free trading in multiple asset classes, allowing you to diversify your portfolio while the bot works for you.
          </p>

          <div className="mx-auto mt-10 grid max-w-5xl items-center gap-8 lg:grid-cols-[1fr_1.15fr]">
            <div className="px-2">
              <Image
                src="/lunavex/why-tablet.png"
                alt="Probot interface on tablet"
                width={760}
                height={760}
                className="mx-auto h-auto w-full max-w-md object-contain drop-shadow-[0_24px_32px_rgba(6,2,22,0.6)]"
              />
            </div>
            <div className="space-y-4">
              {[
                ["Expert Automation", "Probot's cutting-edge technology automates your trades across multiple markets, providing a hands-free experience.", "/lunavex/icon-expert.png"],
                ["Multi-Asset Support", "Trade in Forex, Indices, Commodities, and more without switching between platforms - Probot handles it all seamlessly.", "/lunavex/icon-indices.png"],
                ["No Trading Experience Needed", "Probot is designed for traders of all levels, allowing even beginners to trade confidently across a range of assets.", "/lunavex/icon-target.png"],
              ].map(([title, desc, icon]) => (
                <article key={String(title)} className="flex items-start gap-3 rounded-2xl border border-violet-400/20 bg-[#1d0a50]/95 p-4 sm:gap-4 sm:p-5">
                  <span className="mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/15">
                    <Image src={String(icon)} alt="" width={30} height={30} className="h-8 w-8 object-contain" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl md:text-2xl">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-violet-100/80 sm:text-base">{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/#pricing" className="ui-btn-primary inline-flex w-full max-w-xs items-center justify-center px-8 text-sm uppercase tracking-[0.14em] sm:w-auto">
              Select Plan
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-gradient-to-br from-[#4C1D95] to-[#6D28D9] px-4 py-12 sm:px-6 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 95% 10%, rgba(167,139,250,0.28), transparent 30%), linear-gradient(rgba(167,139,250,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.12) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 42px 42px, 42px 42px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-2">
          <p className="mx-auto mb-5 w-fit rounded-full border border-blue-400/30 px-5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
            Testimonials
          </p>
          <h2 className="mx-auto max-w-4xl text-center text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-5xl">What Traders Say About Execution Quality</h2>
          <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:mt-10 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            {[
              ["Jane D. - UAE - $20,000 Account", "Controlled risk profile", "More controlled entries than other systems. Drawdown stayed manageable, which gave me confidence to scale."],
              ["Arjun P. - India - $10,000 Account", "Disciplined behavior", "Risk limits helped during volatile sessions. The system behaves with discipline, not random aggression."],
              ["Nadia K. - UK - $35,000 Account", "Execution confidence", "I can monitor decisions clearly and trust how the engine handles momentum shifts."],
            ].map(([name, pnl, quote]) => (
              <article key={name} className="ui-card ui-card-hover min-w-[85%] snap-start p-5 sm:min-w-[70%] md:min-w-0">
                <div className="flex items-center gap-3">
                  <Image src="/lunavex/avatar-jane.png" alt={name} width={52} height={52} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-white">{name}</p>
                    <p className="text-sm font-semibold text-emerald-400">{pnl}</p>
                  </div>
                </div>
                <p className="mt-4 text-slate-300">{quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-[#0b1220] px-4 py-12 sm:px-6 sm:py-16" id="pricing">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 60%, rgba(76, 29, 149, 0.35), transparent 38%), radial-gradient(circle at 78% 40%, rgba(139, 92, 246, 0.2), transparent 35%), linear-gradient(rgba(167,139,250,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.1) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 100% 100%, 44px 44px, 44px 44px",
          }}
        />
        <p className="relative mx-auto mb-3 w-fit rounded-full border border-blue-400/30 px-5 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-blue-300">
          Pricing
        </p>
        <h2 className="relative mx-auto max-w-4xl text-center text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Choose The Plan That Fits Your Trading Stage
        </h2>
        <div className="relative mx-auto mt-8 flex max-w-5xl snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:mt-10 md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
          {plans.map((plan) => {
            const best = Boolean(plan.recommended);
            return (
            <article
              key={plan.id}
              className={`min-w-[82%] snap-start rounded-2xl border p-4 sm:min-w-[62%] sm:p-5 md:min-w-0 ${best ? "scale-[1.02] md:scale-[1.05] border-2 border-blue-500 bg-[#111827] shadow-[0_0_30px_rgba(59,130,246,0.3)]" : "ui-card"} backdrop-blur-sm`}
            >
              <p className={`text-xs font-semibold uppercase tracking-[0.1em] ${best ? "text-blue-300" : "text-slate-400"}`}>
                {best ? "Most Popular" : "Plan"}
              </p>
              <p className="mt-2 text-lg font-medium tracking-wide text-slate-200">{plan.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.1em] text-slate-400">{plan.tier}</p>
              <p className="mt-1 text-5xl font-semibold text-white sm:text-6xl">${plan.price}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.1em] text-slate-400">{plan.periodLabel}</p>
              <ul className="mt-4 space-y-1.5 text-left text-sm text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="inline-flex items-center gap-2">
                    <Check size={14} className="shrink-0 text-emerald-400" />
                    {feature}
                  </li>
                ))}
                <li className="inline-flex items-center gap-2">
                  <Check size={14} className="shrink-0 text-emerald-400" />
                  {plan.support}
                </li>
              </ul>
              <button
                onClick={() => {
                  addToCart({ id: plan.id, name: `Candle Follow EA ${plan.name}`, duration: plan.tier, price: plan.price });
                  openCart();
                }}
                className={`mt-5 w-full rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition ${best ? "bg-blue-500 hover:bg-blue-600" : "bg-slate-700 hover:bg-slate-600"}`}
              >
                Buy Now
              </button>
            </article>
          );
          })}
        </div>
        <p className="relative mx-auto mt-6 max-w-3xl text-center text-sm text-slate-300">
          ✓ No hidden fees &nbsp; ✓ Works with your existing broker &nbsp; ✓ Setup support included
        </p>
        <p className="relative mx-auto mt-2 max-w-3xl text-center text-sm text-amber-300">
          Limited slots for new accounts this month • Setup support included
        </p>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-slate-800 bg-[#0f172a] px-4 py-12 sm:px-6 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 92% 10%, rgba(167,139,250,0.3), transparent 26%), radial-gradient(circle at 15% 80%, rgba(91,33,182,0.3), transparent 28%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-6 lg:gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-2xl border border-slate-700 bg-[#111827] p-6">
            <h3 className="text-3xl font-semibold text-white">Need Help Getting Started?</h3>
            <p className="mt-2 text-slate-300">Full setup assistance, broker integration guidance, and direct support access.</p>
            <p className="mt-2 text-sm text-slate-300">Average response time: &lt; 2 hours • Setup time: 10-15 minutes</p>
            <div className="mt-5 space-y-3">
              <a href="mailto:support@probotx.io" className="flex items-center justify-between rounded-xl border border-slate-700 bg-[#0b1220] px-4 py-3 text-slate-200 hover:border-blue-400/50">
                <span className="inline-flex items-center gap-2"><Mail size={16} className="text-blue-300" />support@probotx.io</span>
                <ArrowRight size={16} />
              </a>
              <a href="#" className="flex items-center justify-between rounded-xl border border-slate-700 bg-[#0b1220] px-4 py-3 text-slate-200 hover:border-blue-400/50">
                <span className="inline-flex items-center gap-2"><MessageCircle size={16} className="text-blue-300" />Live Chat</span>
                <ArrowRight size={16} />
              </a>
              <a href="#" className="flex items-center justify-between rounded-xl border border-slate-700 bg-[#0b1220] px-4 py-3 text-slate-200 hover:border-blue-400/50">
                <span className="inline-flex items-center gap-2"><Bot size={16} className="text-blue-300" />Discord Community</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div>
            <p className="mb-3 w-fit rounded-full border border-blue-400/30 px-5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
              Contact
            </p>
            <h2 className="max-w-md text-3xl font-semibold uppercase leading-[1.05] text-white sm:text-4xl md:text-5xl lg:text-6xl">Request Setup Assistance</h2>
            <p className="mt-3 max-w-lg text-base text-slate-300 sm:mt-4 sm:text-lg md:text-xl">Contact us anytime. We usually reply within 24 hours.</p>
            <div className="mt-6 grid gap-3">
              <input className="h-12 rounded-xl border border-slate-700 bg-[#111827] px-4 text-white placeholder:text-slate-500" placeholder="Full Name" />
              <input className="h-12 rounded-xl border border-slate-700 bg-[#111827] px-4 text-white placeholder:text-slate-500" placeholder="Email" />
              <input className="h-12 rounded-xl border border-slate-700 bg-[#111827] px-4 text-white placeholder:text-slate-500" placeholder="Subject" />
              <textarea className="min-h-24 rounded-xl border border-slate-700 bg-[#111827] px-4 py-3 text-white placeholder:text-slate-500" placeholder="Message" />
            </div>
            <button className="ui-btn-primary mt-5 inline-flex w-full items-center justify-center gap-2 px-6 text-sm uppercase tracking-[0.13em] sm:w-auto">
              <Mail size={14} />
              Send Message
            </button>
          </div>
        </div>
      </section>

      <section id="faq" className="relative overflow-hidden border-t border-white/5 bg-[#1e1b4b] px-4 py-12 sm:px-6 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(circle at 6% 58%, rgba(109,40,217,0.25), transparent 24%), radial-gradient(80% 40% at 60% 100%, rgba(167,139,250,0.25), transparent 55%)",
          }}
        />
        <p className="relative mx-auto mb-3 w-fit rounded-full border border-violet-500/35 px-5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">
          FAQs
        </p>
        <h2 className="relative mx-auto max-w-4xl text-center text-2xl font-semibold uppercase leading-tight text-white sm:text-3xl md:text-5xl lg:text-6xl">
          Frequently Asked Questions
        </h2>
        <p className="relative mx-auto mt-3 max-w-3xl text-center text-xl text-violet-200/85">
          Below is a list of frequently asked questions and answers from partners and 3D artist. Please check this FAQ first before contacting us.
        </p>
        <div className="relative mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-violet-500/20 bg-[#1b0a4c]/95 p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-white sm:text-xl md:text-2xl">What drawdown should I expect?</h3>
              <span className="text-2xl text-violet-300">-</span>
            </div>
            <p className="mt-3 text-base leading-relaxed text-violet-100/80">
              Drawdown varies with market conditions and risk settings. The system is designed for controlled risk, not aggressive growth.
            </p>
          </article>

          <article className="rounded-2xl border border-violet-500/20 bg-[#1b0a4c]/95 p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-white sm:text-xl md:text-2xl">Is this safe for small accounts?</h3>
              <span className="text-2xl text-violet-300">+</span>
            </div>
          </article>

          <article className="rounded-2xl border border-violet-500/20 bg-[#1b0a4c]/95 p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-white sm:text-xl md:text-2xl">Can I lose my entire account?</h3>
              <span className="text-2xl text-violet-300">-</span>
            </div>
          </article>

          <article className="rounded-2xl border border-violet-500/20 bg-[#1b0a4c]/95 p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-white sm:text-xl md:text-2xl">What broker should I use?</h3>
              <span className="text-2xl text-violet-300">+</span>
            </div>
          </article>

          <article className="rounded-2xl border border-violet-500/20 bg-[#1b0a4c]/95 p-5 md:col-span-1">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-white sm:text-xl md:text-2xl">Does it work during major news events?</h3>
              <span className="text-2xl text-violet-300">-</span>
            </div>
          </article>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/5 bg-[#1e1b4b] px-4 py-12 text-white sm:px-6 sm:py-16 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 10%, rgba(109,40,217,0.35), transparent 24%), repeating-linear-gradient(-10deg, transparent 0, transparent 20px, rgba(167,139,250,0.1) 21px, transparent 22px)",
          }}
        />
        <div className="relative mx-auto max-w-5xl">
          <div className="grid items-center gap-6 rounded-3xl bg-gradient-to-r from-[#8b5cf6] to-[#6d3de2] px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="max-w-lg text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Start Automated Gold Trading Today
              </h2>
              <p className="mt-4 max-w-lg text-lg text-violet-100/95">
                Set up in minutes. Let the system handle execution.
              </p>
              <Link href="/checkout" className="ui-btn-primary mt-6 inline-flex items-center justify-center px-7 text-sm uppercase tracking-[0.12em]">
                Go to Checkout
              </Link>
            </div>
            <div className="relative min-h-[280px]">
              <Image
                src="/lunavex/cta-phones.png"
                alt="Probot mobile interface screens"
                width={520}
                height={620}
                className="absolute -top-20 right-0 h-auto w-full max-w-[250px] object-contain drop-shadow-[0_28px_30px_rgba(22,8,61,0.55)] sm:-top-24 sm:max-w-[300px] md:-top-28 md:max-w-[360px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#0f172a] px-4 py-12 sm:px-6 sm:py-16">
        <div className="ui-card mx-auto max-w-5xl px-4 py-6 text-center sm:px-6 sm:py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-300">Community</p>
          <h3 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Join Our Trading Community</h3>
          <p className="mt-2 text-slate-300">Get live updates, setup help, and trade management insights.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href="#" className="ui-btn-primary inline-flex items-center justify-center px-6 text-sm">Join Telegram</a>
            <Link href="/#contact" className="ui-btn-secondary inline-flex items-center justify-center px-6 text-sm">Contact Support</Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 bg-[#1e1b4b] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 72% 18%, rgba(167,139,250,0.3), transparent 28%), radial-gradient(circle at 8% 70%, rgba(91,33,182,0.3), transparent 24%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mx-auto mb-4 w-fit rounded-full border border-violet-500/35 px-5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">
            Subscribe
          </p>
          <h2 className="text-3xl font-semibold uppercase text-white sm:text-4xl md:text-5xl lg:text-6xl">Get Newsletter</h2>
          <p className="mt-3 text-lg text-violet-100/80">Get updated with news, tips & tricks.</p>
          <div className="mx-auto mt-7 max-w-2xl">
            <input
              className="h-12 w-full rounded-xl border border-violet-500/20 bg-[#1b0a4b] px-5 text-white placeholder:text-violet-200/40"
              placeholder="your_name@email.com"
            />
            <button className="mt-4 rounded-lg border border-violet-300/20 bg-[#8b5cf6] px-8 py-3 text-sm font-semibold uppercase tracking-[0.13em] text-white shadow-[0_8px_22px_rgba(139,92,246,0.4)] transition hover:bg-[#9f75ff]">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-[#0b1220] px-4 py-8 sm:px-6">
        <p className="mx-auto max-w-5xl text-center text-sm text-slate-400">
          Risk Disclosure: Trading Forex and Gold involves significant risk. Past performance is not indicative of future results. Candle Follow EA is an execution tool, not financial advice. Users are responsible for account and risk decisions.
        </p>
      </section>
    </div>
  );
}
