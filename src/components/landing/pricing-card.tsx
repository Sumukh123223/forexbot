"use client";

import { motion } from "framer-motion";
import { Plan, useCart } from "@/context/cart-context";

type PricingCardProps = {
  plan: Plan & { badge?: string; features: string[] };
};

export function PricingCard({ plan }: PricingCardProps) {
  const { addToCart, openCart } = useCart();
  const isPopular = plan.badge === "Most Popular";

  return (
    <motion.article
      whileHover={{ y: -2, scale: 1.02 }}
      className={`relative rounded-xl bg-[#111827] p-6 transition ${isPopular ? "border border-blue-500" : "border border-gray-800 hover:border-gray-600"}`}
    >
      {plan.badge && (
        <span className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs ${isPopular ? "border border-blue-500/60 text-blue-300" : "border border-gray-700 text-gray-300"}`}>
          {plan.badge}
        </span>
      )}
      <h3 className="text-xl font-semibold text-white">{plan.duration}</h3>
      <p className="mt-2 text-4xl font-semibold text-white">${plan.price}</p>
      <ul className="mt-5 space-y-2 text-sm text-gray-400">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2"><span className="text-[#38bdf8]">✓</span>{feature}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          addToCart(plan);
          openCart();
        }}
        className="mt-6 w-full rounded-xl bg-[#2563eb] px-4 py-3 font-semibold text-white transition hover:bg-[#1e3a8a]"
      >
        Add to Cart
      </button>
    </motion.article>
  );
}
