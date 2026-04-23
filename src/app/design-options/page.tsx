import Link from "next/link";

const options = [
  {
    href: "/design-options/terminal",
    title: "Option A: Terminal Pro",
    text: "Dark command-center, glass cards, trading terminal aesthetics.",
  },
  {
    href: "/design-options/institutional",
    title: "Option B: Institutional Light",
    text: "Light enterprise finance style, clean typography, minimal premium layout.",
  },
  {
    href: "/design-options/neon-grid",
    title: "Option C: Neon Grid Lab",
    text: "Cyber-tech style, glowing data widgets, futuristic visual storytelling.",
  },
  {
    href: "/design-options/editorial",
    title: "Option D: Editorial Premium",
    text: "High-end brand style with bold spacing, strong hierarchy, marketing-led UX.",
  },
];

export default function DesignOptionsPage() {
  return (
    <div className="space-y-6 py-10">
      <section className="rounded-xl border border-slate-800 bg-[#111827] p-6">
        <h1 className="text-3xl font-semibold text-white">Complete UI/UX Site Options</h1>
        <p className="mt-2 text-slate-400">
          Open each route below. These are fully different site styles (not just color swaps).
        </p>
      </section>
      <section className="grid gap-4 md:grid-cols-2">
        {options.map((option) => (
          <article key={option.href} className="rounded-xl border border-slate-800 bg-[#0f172a] p-5">
            <h2 className="text-xl font-semibold text-white">{option.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{option.text}</p>
            <Link href={option.href} className="mt-4 inline-flex rounded-lg bg-slate-700 px-4 py-2 text-sm text-white transition hover:bg-slate-600">
              Open This Full Design
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
