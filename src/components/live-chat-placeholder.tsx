"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LiveChatPlaceholder() {
  const [openToast, setOpenToast] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5">
        <button
          onClick={() => {
            setOpenToast(true);
            setTimeout(() => setOpenToast(false), 1800);
          }}
          className="rounded-full border border-violet-300/35 bg-[#2b0d69] px-3 py-2.5 text-xs font-medium text-slate-200 transition hover:border-violet-300 sm:px-5 sm:py-3 sm:text-sm"
        >
          <span className="sm:hidden">Chat</span>
          <span className="hidden sm:inline">Live Chat (Coming Soon)</span>
        </button>
      </div>
      <AnimatePresence>
        {openToast && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="fixed bottom-16 right-4 z-[60] rounded-xl border border-violet-300/35 bg-[#2b0d69] px-3 py-2 text-xs text-slate-200 sm:bottom-20 sm:right-5 sm:px-4"
          >
            Live chat coming soon
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
