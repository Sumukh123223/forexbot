"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("Please fill all fields.");
      return;
    }
    setStatus("Message sent successfully.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="section-shell pt-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl rounded-xl border border-gray-800 bg-[#111827] p-7 md:p-9"
      >
        <h2 className="section-title">Get in Touch</h2>
        <p className="mt-3 max-w-2xl text-sm text-gray-400">Have questions about setup, brokers, or strategy settings? Send us a message.</p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-3">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Name"
            className="w-full rounded-xl border border-gray-700 bg-[#0f172a] px-4 py-3 text-sm text-slate-100 outline-none transition focus:ring-2 focus:ring-blue-500"
          />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-gray-700 bg-[#0f172a] px-4 py-3 text-sm text-slate-100 outline-none transition focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Message"
            rows={4}
            className="w-full rounded-xl border border-gray-700 bg-[#0f172a] px-4 py-3 text-sm text-slate-100 outline-none transition focus:ring-2 focus:ring-blue-500"
          />
          <button className="rounded-xl bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1e3a8a]">
            Send Message
          </button>
          {status && <p className="text-sm text-blue-300">{status}</p>}
        </form>
      </motion.div>
    </section>
  );
}
