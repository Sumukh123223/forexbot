"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, Phone, User } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));
    const confirmPassword = String(formData.get("confirmPassword"));

    if (password !== confirmPassword) {
      setError("Password and retype password must match.");
      setLoading(false);
      return;
    }

    const payload = {
      name: String(formData.get("name")),
      email,
      password,
    };

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await res.json().catch(() => null)) as { error?: string } | null;

    if (!res.ok) {
      setError(data?.error || "Unable to create account");
      setLoading(false);
      return;
    }

    router.push("/login");
  }

  return (
    <div className="min-h-[calc(100vh-76px)] bg-[#0b0f1a] px-4 py-8 md:px-6">
      <div className="ui-card mx-auto max-w-xl p-6">
        <h1 className="text-center text-4xl font-semibold text-white">Let&apos;s Get Started</h1>
        <p className="mt-2 text-center text-sm text-slate-300">Create your ProBotX account.</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-3">
          <div className="relative">
            <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-300/60" />
            <input name="name" type="text" required placeholder="Full Name" className="ui-input ui-input-icon text-sm" />
          </div>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-300/60" />
            <input name="email" type="email" required placeholder="Email" className="ui-input ui-input-icon text-sm" />
          </div>
          <div className="relative">
            <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-300/60" />
            <input name="mobile" type="text" required placeholder="Contact Number" className="ui-input ui-input-icon text-sm" />
          </div>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-300/60" />
            <input name="password" type="password" minLength={6} required placeholder="Password" className="ui-input ui-input-icon text-sm" />
          </div>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-300/60" />
            <input name="confirmPassword" type="password" minLength={6} required placeholder="Confirm Password" className="ui-input ui-input-icon text-sm" />
          </div>

          <label className="mt-1 flex items-start gap-2 text-xs text-violet-200/80">
            <input required type="checkbox" className="mt-0.5 h-3.5 w-3.5 rounded border-violet-400/40 bg-[#190944]" />
            <span>
              I agree to the{" "}
              <Link href="/terms" className="font-semibold text-violet-100">
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="font-semibold text-violet-100">
                Privacy Policy
              </Link>
            </span>
          </label>

          {error && <p className="text-sm text-rose-300">{error}</p>}

          <button disabled={loading} className="ui-btn-primary mx-auto block px-7 text-sm disabled:opacity-60">
            {loading ? "Creating..." : "Create"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-slate-300">
          Already have an account?{" "}
          <Link href="/login" className="text-violet-100 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
