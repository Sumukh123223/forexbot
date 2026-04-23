"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    };

    const res = await fetch("/api/auth/signup", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    if (!res.ok) {
      const data = (await res.json().catch(() => null)) as { error?: string } | null;
      setError(data?.error || "Unable to create account");
      return;
    }
    router.push("/login");
  }

  return (
    <div className="mx-auto max-w-md rounded-xl border border-slate-800 bg-[#111827] p-6">
      <h1 className="text-2xl font-bold">Create Account</h1>
      <form onSubmit={onSubmit} className="mt-5 space-y-3">
        <input name="name" type="text" required placeholder="Full Name" className="w-full rounded-lg border border-slate-700 bg-[#0f172a] px-3 py-2" />
        <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg border border-slate-700 bg-[#0f172a] px-3 py-2" />
        <input name="password" type="password" minLength={6} required placeholder="Password" className="w-full rounded-lg border border-slate-700 bg-[#0f172a] px-3 py-2" />
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button className="w-full rounded-lg bg-sky-500 px-4 py-2 font-semibold text-white transition hover:bg-sky-600">Sign Up</button>
      </form>
      <p className="mt-4 text-sm text-slate-300">Have an account? <Link href="/login" className="text-sky-400">Login</Link></p>
    </div>
  );
}
