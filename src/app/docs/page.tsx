"use client";

export default function DocsPage() {
  return (
    <section className="px-0 py-10 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold">LUNAVEX Docs</h1>
        <p className="mt-3 text-slate-300">
          Product documentation for onboarding, strategy setup, automation rules, and risk configuration.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            ["Getting Started", "Connect your account, verify API access, and complete initial setup."],
            ["Strategy Templates", "Select DCA, grid, and AI strategy templates with safe defaults."],
            ["Risk Controls", "Configure max drawdown, stop-loss, and position sizing constraints."],
            ["Execution Rules", "Define entry, exit, and pause conditions for automated workflows."],
          ].map(([title, desc]) => (
            <article key={title} className="rounded-xl border border-slate-800 bg-[#111827] p-5">
              <h2 className="text-lg font-semibold text-white">{title}</h2>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
