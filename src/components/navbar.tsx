"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "FAQ", href: "/#faq" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0b0f1a]/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight text-white">
          <Sparkles size={16} className="accent-text" />
          PROBOT X
        </Link>

        <div className="hidden items-center gap-8 text-sm text-slate-200 lg:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="accent-hover-text transition">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/checkout"
            className="ui-btn-primary hidden items-center px-5 text-sm font-semibold uppercase tracking-[0.12em] md:inline-flex"
          >
            Checkout
          </Link>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-lg border border-white/20 p-2 text-slate-200 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-[#0b0f1a] lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-3">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="accent-hover-text rounded-md px-2 py-2 text-sm text-slate-200 transition hover:bg-slate-700/30"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-1 gap-2">
                <Link
                  href="/checkout"
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-blue-500 px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.11em] text-white"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
