"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-violet-900/45 bg-[#2b0d69] py-12 text-sm text-zinc-300">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(167,139,250,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.08) 1px, transparent 1px)",
          backgroundSize: "100% 14px, 32px 100%",
          backgroundPosition: "bottom center, bottom center",
        }}
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
        <Link href="/" className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight text-white">
          <Sparkles size={16} className="accent-text" />
          PROBOT X
        </Link>
        <nav aria-label="Footer links" className="flex flex-wrap items-center justify-center gap-5 text-sm text-violet-100/85">
          <Link href="/faq" className="accent-hover-text transition">FAQ</Link>
          <Link href="/pricing" className="accent-hover-text transition">Pricing</Link>
          <Link href="/#contact" className="accent-hover-text transition">Contact</Link>
          <Link href="/privacy" className="accent-hover-text transition">Privacy</Link>
          <Link href="/terms" className="accent-hover-text transition">Terms</Link>
        </nav>
        <p className="text-xs leading-relaxed text-violet-100/80">
          Copyright © 2026 ProBotX.
          <br />
          All Rights Reserved, Powered By Mether
        </p>
      </div>
    </footer>
  );
}
