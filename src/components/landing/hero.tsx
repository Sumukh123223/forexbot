"use client";

import { motion } from "framer-motion";
import { useCart } from "@/context/cart-context";

const trustItems = ["Secure & Transparent", "Backtested Strategies", "24/7 Automated Trading"];

export function Hero() {
  const { addToCart, openCart } = useCart();

  return (
    <section id="home" className="section-shell grid items-start gap-12 md:grid-cols-2">
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <p className="inline-flex rounded-full border border-white/10 bg-[#111827] px-3 py-1 text-xs font-medium tracking-wider text-gray-300">
          AI POWERED FOREX TRADING BOT
        </p>

        <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#f9fafb] md:text-5xl">
          Automated Forex Trading Built for Consistency
        </h1>

        <p className="mt-5 max-w-xl text-base text-gray-400">
          LUNAVEX AI combines data-backed strategy logic, disciplined risk controls, and automated execution for traders who value long-term stability.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => {
              addToCart({ id: "plan-6m", name: "LUNAVEX AI Plan", price: 179, duration: "6 Months" });
              openCart();
            }}
            className="rounded-xl bg-[#2563eb] px-5 py-3 font-semibold text-white transition hover:bg-[#1e3a8a]"
          >
            Add to Cart
          </button>
          <button className="rounded-xl border border-gray-700 bg-transparent px-5 py-3 font-semibold text-slate-100 transition hover:border-[#2563eb] hover:text-white">
            View Live Performance
          </button>
        </div>

        <div className="mt-7 flex flex-wrap gap-3 text-sm text-gray-400">
          {trustItems.map((item) => (
            <span key={item} className="rounded-full border border-gray-800 bg-[#111827] px-3 py-1">{item}</span>
          ))}
        </div>
        <p className="mt-5 text-sm text-gray-500">Risk Disclaimer: No guaranteed profits. Forex trading involves significant risk.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="rounded-xl border border-gray-800 bg-[#111827] p-6"
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-gray-300">Live Performance <span className="text-[#38bdf8]">● Live</span></p>
        </div>

        <p className="text-5xl font-semibold tracking-tight text-[#f9fafb]">+127.48%</p>
        <p className="mb-4 mt-1 text-sm text-gray-400">Total Return (Since Launch)</p>

        <div className="rounded-xl border border-gray-800 bg-[#0f172a] p-3">
          <svg viewBox="0 0 340 140" className="h-40 w-full">
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
            <path d="M10 120 C 50 100, 70 102, 95 80 C 120 58, 150 62, 175 50 C 200 38, 220 45, 250 28 C 275 16, 300 22, 330 10" fill="none" stroke="url(#lineGradient)" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg border border-gray-800 bg-[#0f172a] p-3"><p className="text-gray-400">Win Rate</p><p className="text-xl font-semibold text-[#f9fafb]">72.6%</p></div>
          <div className="rounded-lg border border-gray-800 bg-[#0f172a] p-3"><p className="text-gray-400">Profit Factor</p><p className="text-xl font-semibold text-[#f9fafb]">1.85</p></div>
          <div className="rounded-lg border border-gray-800 bg-[#0f172a] p-3"><p className="text-gray-400">Max Drawdown</p><p className="text-xl font-semibold text-[#f9fafb]">9.31%</p></div>
          <div className="rounded-lg border border-gray-800 bg-[#0f172a] p-3"><p className="text-gray-400">Total Trades</p><p className="text-xl font-semibold text-[#f9fafb]">1,248</p></div>
        </div>
      </motion.div>
    </section>
  );
}
