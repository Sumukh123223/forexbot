export default function EditorialOptionPage() {
  return (
    <div className="min-h-screen bg-[#101114] text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Option D: Editorial Premium</p>
            <h1 className="mt-4 text-6xl font-semibold leading-[1.05] tracking-tight">
              Follow the
              <br />
              Smart Money,
              <br />
              Not the Noise.
            </h1>
            <p className="mt-6 max-w-xl text-zinc-400">
              Strong storytelling layout with premium typography and high-clarity conversion flow.
            </p>
            <button className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900">Start With Bronze Plan</button>
          </div>
          <article className="rounded-2xl border border-zinc-800 bg-[#16171b] p-6">
            <p className="text-sm text-zinc-300">Performance Snapshot</p>
            <p className="mt-3 text-4xl font-semibold">+127.48%</p>
            <p className="mt-1 text-sm text-zinc-400">Verified return tracking</p>
            <div className="mt-6 space-y-2">
              <div className="h-2 rounded-full bg-zinc-800"><div className="h-2 w-[72%] rounded-full bg-zinc-200" /></div>
              <div className="h-2 rounded-full bg-zinc-800"><div className="h-2 w-[84%] rounded-full bg-zinc-400" /></div>
              <div className="h-2 rounded-full bg-zinc-800"><div className="h-2 w-[63%] rounded-full bg-zinc-500" /></div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
