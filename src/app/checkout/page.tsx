"use client";

import { FormEvent, useState } from "react";
import { useCart } from "@/context/cart-context";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, total, clearCart, removeFromCart } = useCart();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitOrder(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!items.length) {
      setStatus("Your cart is empty.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const customerName = String(formData.get("customerName") || "").trim();
    const customerEmail = String(formData.get("customerEmail") || "").trim();
    const customerContact = String(formData.get("customerContact") || "").trim();
    if (!customerName || !customerEmail || !customerContact) {
      setStatus("Please fill in all customer details.");
      return;
    }

    setLoading(true);
    const firstPlan = items[0];

    const res = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        plan: firstPlan.duration,
        price: firstPlan.price,
        customerName,
        customerEmail,
        customerContact,
      }),
    });

    if (!res.ok) {
      const data = (await res.json().catch(() => null)) as { error?: string } | null;
      setStatus(data?.error || "Unable to create order");
      setLoading(false);
      return;
    }

    const data = (await res.json().catch(() => null)) as { checkoutUrl?: string } | null;
    if (data?.checkoutUrl) {
      window.location.href = data.checkoutUrl;
      return;
    }

    setStatus("Order created. Redirecting to payment...");
    clearCart();
    setLoading(false);
  }

  return (
    <div className="space-y-6">
      <section className="ui-card p-6">
        <h1 className="text-3xl font-semibold text-white">Checkout</h1>
        <p className="mt-2 text-slate-400">Review your selected plan and proceed to OxaPay crypto payment.</p>
        <ol className="mt-4 list-decimal space-y-1 pl-5 text-sm text-slate-300">
          <li>Buy your selected plan.</li>
          <li>Select your installation slot.</li>
          <li>Our team helps integrate and start your bot via email or live session.</li>
        </ol>
      </section>

      <section className="grid gap-5 md:grid-cols-[1.05fr_1fr]">
        <article className="ui-card p-5">
          <h2 className="text-xl font-semibold text-white">Order Summary</h2>
          {items.length === 0 ? (
            <p className="mt-3 text-sm text-slate-400">Cart is empty. Add plan to process.</p>
          ) : (
            <div className="mt-3 space-y-3 text-sm text-slate-300">
              {items.map((item, i) => (
                <div key={`${item.id}-${i}`} className="rounded-lg border border-slate-700/70 bg-slate-900/40 px-3 py-2">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p>{item.duration}</p>
                      <p className="font-medium text-white">{item.name} - ${item.price}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(`${item.id}-${i}`)}
                      className="text-xs font-medium text-rose-300 transition hover:text-rose-200"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <p className="pt-2 text-base font-semibold text-white">Total: ${total}</p>
            </div>
          )}
        </article>

        <article className="ui-card border-blue-400/45 p-5 shadow-[0_0_0_1px_rgba(59,130,246,0.2),0_18px_35px_rgba(2,6,23,0.35)]">
          <h2 className="text-xl font-semibold text-white">Payment</h2>
          {items.length === 0 ? (
            <div className="mt-4 space-y-3">
              <p className="text-sm text-slate-400">Cart is empty. Add plan to process.</p>
              <Link href="/#pricing" className="ui-btn-primary inline-flex h-11 w-full items-center justify-center text-sm font-semibold">
                Go to Plans
              </Link>
            </div>
          ) : (
            <>
              <form className="mt-4 space-y-3" onSubmit={submitOrder}>
                <input name="customerName" required placeholder="Full Name" className="ui-input text-sm" />
                <input name="customerEmail" type="email" required placeholder="Email" className="ui-input text-sm" />
                <input name="customerContact" required placeholder="Contact Number" className="ui-input text-sm" />
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 h-14 w-full rounded-lg bg-blue-500 px-4 text-lg font-semibold text-white transition hover:bg-blue-400 disabled:opacity-60"
                >
                  {loading ? "Processing..." : "Proceed to OxaPay"}
                </button>
              </form>
              <p className="mt-2 text-xs text-slate-500">You will be redirected to the secure OxaPay gateway after submitting details.</p>
            </>
          )}
          {status && <p className="mt-3 text-sm text-sky-400">{status}</p>}
        </article>
      </section>
    </div>
  );
}
