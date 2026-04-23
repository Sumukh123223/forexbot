"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LockKeyhole, ShieldCheck, Sparkles, User } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email")).trim();
    const password = String(formData.get("password"));

    const result = await signIn("credentials", { email, password, redirect: false });
    if (result?.error) {
      setError("Login failed. Check your email and password and try again.");
      setLoading(false);
      return;
    }
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="min-h-[calc(100vh-76px)] bg-[#0b0f1a] px-4 py-8 md:px-6">
      <div className="ui-card mx-auto max-w-md p-6">
        <p className="mx-auto inline-flex w-full items-center justify-center gap-2 text-4xl font-semibold text-white">
          <Sparkles size={20} className="text-violet-300" />
          PROBOT X
        </p>
        <h1 className="mt-5 text-center text-5xl font-semibold text-white">Welcome!</h1>
        <p className="mt-2 text-center text-sm text-slate-300">Login to continue your journey.</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-3">
          <div className="relative">
            <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-300/60" />
            <input
              name="email"
              type="text"
              required
              placeholder="Username"
              className="ui-input ui-input-icon text-sm"
            />
          </div>
          <div className="relative">
            <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-300/60" />
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
              className="ui-input ui-input-icon text-sm"
            />
          </div>
          <div className="flex items-center justify-between text-xs text-violet-200/75">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="h-3.5 w-3.5 rounded border-violet-400/40 bg-[#190944]" />
              Remember Me
            </label>
            <span>Forget your password?</span>
          </div>
          <p className="inline-flex items-center gap-1 text-xs text-violet-200/70">
            <ShieldCheck size={12} />
            Ensuring a safe experience, with a possible verification step.
          </p>
          {error && <p className="text-sm text-rose-300">{error}</p>}
          <button
            disabled={loading}
            className="ui-btn-primary mx-auto block px-7 text-sm disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Log in"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-slate-300">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-violet-100 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
