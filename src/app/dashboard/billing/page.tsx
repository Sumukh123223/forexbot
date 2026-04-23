"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context";

const plans = [
  { name: "Starter", price: 99 },
  { name: "Professional", price: 179, active: true },
  { name: "Desk", price: 299 },
];

export default function BillingPage() {
  const { addToCart, openCart } = useCart();

  return (
    <section className="rounded-xl border border-[color:var(--terminal-border)] bg-[var(--terminal-surface)] p-6">
      <h2 className="text-2xl font-semibold text-[color:var(--terminal-text)]">Billing</h2>
      <p className="mt-2 text-[color:var(--terminal-muted)]">Manage subscription plans and prepare crypto checkout.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.name} className={`rounded-lg border p-4 ${plan.active ? "border-sky-500" : "border-[color:var(--terminal-border)]"} bg-[var(--terminal-surface-soft)]`}>
            <p className="text-sm text-[color:var(--terminal-muted)]">{plan.active ? "Current Plan" : "Available Plan"}</p>
            <h3 className="mt-2 text-lg font-semibold text-[color:var(--terminal-text)]">{plan.name}</h3>
            <p className="mt-2 text-2xl font-semibold text-[color:var(--terminal-text)]">${plan.price}</p>
            <button
              onClick={() => {
                addToCart({ id: `billing-${plan.name}`, name: plan.name, duration: `${plan.name} Plan`, price: plan.price });
                openCart();
              }}
              className="mt-4 w-full rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Add to Cart
            </button>
          </article>
        ))}
      </div>

      <Link href="/checkout" className="mt-6 inline-flex rounded-lg border border-[color:var(--terminal-border)] px-4 py-2 text-sm text-[color:var(--terminal-text)] transition hover:border-sky-500">
        Proceed to Crypto Checkout
      </Link>
    </section>
  );
}
