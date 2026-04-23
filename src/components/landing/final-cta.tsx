import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-14 text-center">
      <div className="rounded-xl border border-gray-800 bg-[#111827] p-10">
        <h2 className="text-3xl font-semibold text-white">Start Automated Trading Today</h2>
        <Link href="/pricing" className="mt-5 inline-flex rounded-lg bg-[#2563eb] px-6 py-3 font-semibold text-white transition hover:bg-[#1e3a8a]">
          Choose Your Plan Now
        </Link>
      </div>
    </section>
  );
}
