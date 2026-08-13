import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { LeafMark } from "@/components/brand-logo";

export function IntroCurtain() {
  const [done, setDone] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem("bm-intro") === "seen") return;
    setDone(false);
    window.sessionStorage.setItem("bm-intro", "seen");
    const timer = window.setTimeout(() => setDone(true), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center bg-forest"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <LeafMark className="h-14 w-14" />
            <span className="font-display text-2xl text-forest-foreground">
              Bhilva Marketinz
            </span>
            <span className="relative h-px w-40 overflow-hidden bg-forest-foreground/20">
              <motion.span
                className="absolute inset-y-0 left-0 bg-leaf"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
