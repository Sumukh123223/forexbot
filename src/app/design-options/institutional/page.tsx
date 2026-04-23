export default function InstitutionalOptionPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs uppercase tracking-[0.24em] text-amber-600">Option B: Institutional Light</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight">Automated Gold Strategy Infrastructure</h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            A clean institutional experience focused on transparency, verified performance, and disciplined risk execution.
          </p>
          <div className="mt-6 flex gap-3">
            <button className="rounded-lg bg-amber-500 px-5 py-2.5 font-semibold text-slate-900">Get Access</button>
            <button className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 font-semibold text-slate-700">View Myfxbook</button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold">Strategic Comparison</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• No martingale, no hedging, no overtrading</li>
              <li>• Controlled risk and candle confirmation logic</li>
              <li>• Trend hold + momentum weakness exits</li>
            </ul>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold">Client Verification</h2>
            <p className="mt-3 text-sm text-slate-600">Live account portfolios and verified external performance tracking.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
