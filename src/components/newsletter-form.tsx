"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setMessage("Thanks for subscribing. Weekly market intelligence incoming.");
      setEmail("");
    } else {
      setMessage("Unable to subscribe right now. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-cyan-900/60 bg-slate-900/70 p-5">
      <p className="mb-3 text-sm text-slate-300">Join our AI trading newsletter</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="you@domain.com" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100"/>
        <button className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400">Subscribe</button>
      </div>
      {message && <p className="mt-3 text-xs text-cyan-300">{message}</p>}
    </form>
  );
}
