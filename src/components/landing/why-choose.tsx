export function WhyChoose() {
  return (
    <section id="performance" className="section-shell grid gap-10 md:grid-cols-2">
      <div>
        <h2 className="section-title">Why institutions choose LUNAVEX AI</h2>
        <ul className="mt-6 space-y-3 text-gray-400">
          {["Proven performance", "Works on MT4/MT5", "No martingale strategy", "Continuous updates", "Beginner friendly"].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-[#38bdf8]">✔</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-gray-500">Data-backed strategies. No guaranteed profits.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          ["Total Return", "+47.2%"],
          ["Win Rate", "74%"],
          ["Total Trades", "1,842"],
          ["Max Drawdown", "9.4%"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl border border-gray-800 bg-[#111827] p-5">
            <p className="text-sm text-gray-400">{k}</p>
            <p className="mt-1 text-2xl font-semibold text-white">{v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
