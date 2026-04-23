"use client";

import { motion } from "framer-motion";

const features = [
  { title: "AI-Powered Strategy", desc: "Adaptive machine learning models detect high-probability forex setups.", icon: "AI" },
  { title: "Risk Management", desc: "Smart stop losses and dynamic lot sizing protect your capital.", icon: "RM" },
  { title: "Fully Automated", desc: "Hands-free execution with 24/7 monitoring and fast decision cycles.", icon: "24" },
  { title: "Easy to Use", desc: "Beginner-friendly onboarding and clear setup for MT4/MT5 users.", icon: "EZ" },
];

export function Features() {
  return (
    <section id="features" className="section-shell">
      <h2 className="section-title">Built for disciplined execution</h2>
      <p className="section-subtitle">Enterprise-grade tooling focused on consistency, control, and transparency.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {features.map((feature, idx) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -2, scale: 1.02 }}
            className="rounded-xl border border-gray-800 bg-[#111827] p-6 transition"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 bg-[#0f172a] font-semibold text-[#38bdf8]">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-100">{feature.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{feature.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
