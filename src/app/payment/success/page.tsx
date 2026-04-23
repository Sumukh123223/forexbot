import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="mx-auto max-w-2xl rounded-xl border border-slate-800 bg-[#111827] p-8 text-center">
      <h1 className="text-3xl font-bold text-sky-400">Payment Successful</h1>
      <p className="mt-3 text-slate-300">Your purchase is confirmed. Access your bot from dashboard downloads.</p>
      <Link href="/dashboard" className="mt-6 inline-flex rounded-lg bg-sky-500 px-5 py-3 font-semibold text-white transition hover:bg-sky-600">Go to Dashboard</Link>
    </div>
  );
}
