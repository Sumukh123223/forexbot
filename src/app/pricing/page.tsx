"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";

const plans = [
  { id: "monthly", name: "Monthly Plan", period: "/ Month", price: 499 },
  { id: "half-yearly", name: "Half Yearly Plan", period: "/ 6 Months", price: 999, recommended: true },
  { id: "annual", name: "Annual Plan", period: "/ Year", price: 1499 },
  { id: "lifetime", name: "Lifetime Plan", period: "/ One Time", price: 2999 },
];

export default function PricingPage() {
  const { addToCart, openCart } = useCart();

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-slate-800 bg-[#111827] p-6">
        <h1 className="text-3xl font-semibold text-white">Pricing</h1>
        <p className="mt-3 text-slate-400">Transparent subscription plans for individual traders and teams.</p>
        <div className="mt-4 rounded-lg border border-slate-700 bg-[#0f172a] p-4 text-sm text-slate-300">
          <p className="font-medium text-white">Onboarding included with every plan</p>
          <p className="mt-2">
            After purchase, you can select an installation slot. Our team will help integrate and start your bot via email support or live sessions.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => (
          <article key={plan.id} className={`rounded-xl border bg-[#111827] p-5 ${plan.recommended ? "border-[color:var(--accent)]" : "border-slate-800"}`}>
            <p className={`text-sm ${plan.recommended ? "accent-text font-medium" : "text-slate-400"}`}>{plan.recommended ? "Recommended" : "Plan"}</p>
            <h2 className="mt-2 text-xl font-semibold text-white">{plan.name}</h2>
            <p className="mt-1 text-xs text-slate-500">{plan.period}</p>
            <p className="mt-3 text-4xl font-semibold text-white">${plan.price}</p>
            <button
              onClick={() => {
                addToCart({ id: plan.id, name: `Candle Follow EA ${plan.name}`, duration: plan.period, price: plan.price });
                openCart();
              }}
              className={`mt-5 w-full rounded-lg px-4 py-2 text-sm font-semibold transition ${plan.recommended ? "btn-accent" : "btn-accent-alt"}`}
            >
              BUY NOW
            </button>
          </article>
        ))}
      </section>

      <Link href="/checkout" className="accent-border-hover inline-flex rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 transition">
        Go to Checkout
      </Link>
    </div>
  );
}
