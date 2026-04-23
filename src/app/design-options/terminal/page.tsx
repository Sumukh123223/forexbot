export default function TerminalOptionPage() {
  return (
    <div className="min-h-screen bg-[#050b1a] text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-emerald-300">Option A: Terminal Pro</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight">Candle Follow EA Terminal</h1>
            <p className="mt-4 text-slate-400">Built like a real trading console: live rows, status chips, and operational depth.</p>
            <button className="mt-6 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950">Launch Terminal</button>
          </div>
          <article className="rounded-2xl border border-slate-800 bg-[#0b1220] p-5">
            <p className="text-sm text-slate-300">Live Execution Panel</p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between rounded-md border border-slate-800 px-3 py-2"><span>XAU/USD</span><span className="text-emerald-400">+$511</span></div>
              <div className="flex justify-between rounded-md border border-slate-800 px-3 py-2"><span>EUR/USD</span><span className="text-emerald-400">+$248</span></div>
              <div className="flex justify-between rounded-md border border-slate-800 px-3 py-2"><span>GBP/JPY</span><span className="text-rose-400">-$42</span></div>
            </div>
          </article>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {["Bronze", "Silver", "Gold"].map((plan) => (
            <article key={plan} className="rounded-xl border border-slate-800 bg-[#0b1220] p-5">
              <p className="text-sm text-slate-400">{plan}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{plan === "Bronze" ? "$499" : plan === "Silver" ? "$999" : "$1499"}</p>
              <button className="mt-4 w-full rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950">Buy Now</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
