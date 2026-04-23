"use client";

import { motion } from "framer-motion";

const faqs = [
  ["Is it beginner friendly?", "Yes. Setup guides and default risk profiles are built for first-time bot users."],
  ["Which brokers supported?", "Most regulated brokers that support MT4 or MT5 are compatible."],
  ["Is profit guaranteed?", "No. Forex trading involves market risk and no outcome is guaranteed."],
  ["Can I use on prop firm?", "Yes, many users deploy with prop firm rules using our conservative risk templates."],
];

export function FAQSection() {
  return (
    <section id="faq" className="section-shell grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      <div>
        <h2 className="section-title">Frequently asked questions</h2>
        <p className="section-subtitle">Everything you need before deploying your AI forex bot.</p>

        <div className="mt-8 space-y-3">
          {faqs.map(([q, a], idx) => (
            <motion.details
              key={q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-xl border border-gray-800 bg-[#111827] p-5"
            >
              <summary className="cursor-pointer font-medium text-slate-100">{q}</summary>
              <p className="mt-2 text-sm text-gray-400">{a}</p>
            </motion.details>
          ))}
        </div>
      </div>

      <aside className="rounded-xl border border-gray-800 bg-[#111827] p-6">
        <h3 className="text-xl font-semibold text-white">Need more help?</h3>
        <p className="mt-2 text-sm text-gray-400">Get support from our team or read technical docs.</p>
        <div className="mt-5 space-y-3">
          <button className="w-full rounded-lg bg-[#2563eb] px-4 py-3 font-semibold text-white transition hover:bg-[#1e3a8a]">
            Join Community
          </button>
          <button className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-3 font-semibold text-slate-100 transition hover:border-[#2563eb]">
            View Documentation
          </button>
        </div>
      </aside>
    </section>
  );
}
