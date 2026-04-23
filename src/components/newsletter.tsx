"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Subscribed successfully. Weekly updates are on the way.");
    setEmail("");
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-gray-800 bg-[#111827] p-4"
    >
      <p className="text-sm font-medium text-white">Newsletter Signup</p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-xl border border-gray-700 bg-[#0f172a] px-3 py-2 text-sm text-slate-100 outline-none transition focus:ring-2 focus:ring-blue-500"
        />
        <button className="rounded-xl bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1e3a8a]">
          Subscribe
        </button>
      </div>
      {message && <p className="mt-2 text-xs text-blue-300">{message}</p>}
    </motion.form>
  );
}
