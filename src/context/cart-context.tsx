"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type Plan = {
  id: string;
  name: string;
  price: number;
  duration: string;
};

type CartContextType = {
  items: Plan[];
  total: number;
  isOpen: boolean;
  addToCart: (item: Plan) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Plan[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }
    try {
      const raw = window.localStorage.getItem("lunavex-cart");
      return raw ? (JSON.parse(raw) as Plan[]) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    window.localStorage.setItem("lunavex-cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (item: Plan) => {
    setItems((prev) => [...prev, item]);
    setToast("Added to cart successfully");
    setTimeout(() => setToast(""), 1600);
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item, i) => `${item.id}-${i}` !== id));
  };

  const total = useMemo(() => items.reduce((sum, item) => sum + item.price, 0), [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        total,
        isOpen,
        addToCart,
        removeFromCart,
        clearCart: () => setItems([]),
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="fixed bottom-5 left-1/2 z-[70] -translate-x-1/2 rounded-full border border-cyan-400/40 bg-slate-950/90 px-4 py-2 text-sm text-cyan-200"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
