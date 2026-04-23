import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="mx-auto max-w-2xl rounded-xl border border-slate-800 bg-[#111827] p-8 text-center">
      <h1 className="text-3xl font-bold text-red-300">Payment Cancelled</h1>
      <p className="mt-3 text-slate-300">No worries. You can retry checkout anytime.</p>
      <Link href="/products" className="mt-6 inline-flex rounded-lg bg-sky-500 px-5 py-3 font-semibold text-white transition hover:bg-sky-600">Back to Products</Link>
    </div>
  );
}
