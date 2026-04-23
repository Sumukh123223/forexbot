"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/context/cart-context";
import Link from "next/link";

export function CartDrawer() {
  const { isOpen, closeCart, items, total, removeFromCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            aria-label="Close cart backdrop"
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[8px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-slate-700 bg-[#0b1220]/95 p-6 backdrop-blur-xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Your Cart</h3>
              <button onClick={closeCart} className="ui-btn-secondary h-9 px-3 text-sm">Close</button>
            </div>

            <div className="space-y-4">
              {items.length === 0 ? (
                <p className="text-sm text-slate-400">Cart is empty. Add plan to process.</p>
              ) : (
                items.map((item, i) => {
                  const key = `${item.id}-${i}`;
                  return (
                    <div key={key} className="ui-card p-4">
                      <p className="text-sm text-slate-400">{item.duration}</p>
                      <p className="mt-1 font-medium text-slate-100">{item.name}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-lg font-semibold text-white">${item.price}</span>
                        <button onClick={() => removeFromCart(key)} className="text-xs text-rose-300 hover:text-rose-200">Remove</button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="mt-8 border-t border-white/10 pt-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-slate-300">Total</span>
                <span className="text-xl font-semibold text-white">${total}</span>
              </div>
              <Link href={items.length ? "/checkout" : "/#pricing"} onClick={closeCart} className="ui-btn-primary block w-full pt-2.5 text-center">
                {items.length ? "Checkout" : "View Plans"}
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
