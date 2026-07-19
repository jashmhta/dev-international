"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { brand } from "@/lib/brand";

/** Lightweight preloader — no lottie SSR issues */
export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f0f0f]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          }}
          aria-hidden
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.logo}
                alt=""
                className="h-10 w-auto brightness-0 invert md:h-12"
              />
            </motion.div>
          </motion.div>
          <motion.p
            className="absolute bottom-16 font-mono text-[11px] uppercase tracking-[0.22em] text-white/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            {brand.name}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
