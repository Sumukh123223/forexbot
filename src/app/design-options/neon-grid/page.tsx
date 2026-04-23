export default function NeonGridOptionPage() {
  return (
    <div className="min-h-screen bg-[#070311] text-fuchsia-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div
          className="rounded-2xl border border-fuchsia-700/50 bg-[#11061f] p-8"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.15) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        >
          <p className="text-xs uppercase tracking-[0.24em] text-fuchsia-300">Option C: Neon Grid Lab</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight">Future Trading System Interface</h1>
          <p className="mt-4 max-w-2xl text-fuchsia-100/80">Bold cyber-fintech style for high memorability and aggressive brand personality.</p>
          <button className="mt-6 rounded-lg bg-fuchsia-500 px-6 py-3 font-semibold text-white shadow-[0_0_24px_rgba(217,70,239,0.4)]">
            Enter Trading Lab
          </button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Signal Matrix", "Active"],
            ["Momentum", "High"],
            ["Risk Firewall", "Enabled"],
          ].map(([k, v]) => (
            <article key={k} className="rounded-xl border border-fuchsia-700/40 bg-[#140924] p-5">
              <p className="text-sm text-fuchsia-200/80">{k}</p>
              <p className="mt-2 text-2xl font-semibold text-fuchsia-100">{v}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
