"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type LightboxImage = { src: string; alt: string };
type LightboxContextValue = { open: (image: LightboxImage) => void };

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<LightboxImage | null>(null);

  const open = useCallback((image: LightboxImage) => setActive(image), []);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close]);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close image"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
            <motion.img
              key={active.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              src={active.src}
              alt={active.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}
