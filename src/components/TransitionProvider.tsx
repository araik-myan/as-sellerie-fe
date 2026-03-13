"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type Phase = "idle" | "enter" | "exit";

const TransitionCtx = createContext<{ navigateTo: (href: string) => void }>({
  navigateTo: () => {},
});

export const usePageTransition = () => useContext(TransitionCtx);

const EASE = [0.76, 0, 0.24, 1] as const;

export default function TransitionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("idle");

  const navigateTo = useCallback(
    (href: string) => {
      if (phase !== "idle") return;
      setPhase("enter");

      setTimeout(() => {
        router.push(href);
        setTimeout(() => {
          window.scrollTo({ top: 0 });
          setPhase("exit");
          setTimeout(() => setPhase("idle"), 650);
        }, 200);
      }, 600);
    },
    [router, phase]
  );

  const active = phase !== "idle";
  const dest = phase === "enter" ? "0%" : "-120%";

  return (
    <TransitionCtx.Provider value={{ navigateTo }}>
      {children}

      {active && (
        <div
          className="fixed inset-0 z-[100] overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          {/* Panel 1 — dark accent with skew (arrives first, leaves last) */}
          <motion.div
            className="absolute inset-y-0 -inset-x-[15%] bg-dark-card"
            style={{ skewX: "-4deg" }}
            initial={phase === "enter" ? { x: "120%" } : undefined}
            animate={{ x: dest }}
            transition={{
              duration: 0.55,
              ease: EASE,
              delay: phase === "exit" ? 0.07 : 0,
            }}
          />

          {/* Panel 2 — main dark with gold left edge + brand mark */}
          <motion.div
            className="absolute inset-y-0 -inset-x-[15%] bg-dark border-l-[3px] border-gold/60 flex items-center justify-center"
            style={{ skewX: "-4deg" }}
            initial={phase === "enter" ? { x: "120%" } : undefined}
            animate={{ x: dest }}
            transition={{
              duration: 0.55,
              ease: EASE,
              delay: phase === "enter" ? 0.07 : 0,
            }}
          >
            {/* Brand mark (un-skewed) */}
            <div style={{ skewX: "4deg" }} className="text-center select-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{
                  opacity: phase === "enter" ? 1 : 0,
                  scale: phase === "enter" ? 1 : 0.92,
                }}
                transition={{
                  duration: 0.3,
                  delay: phase === "enter" ? 0.25 : 0,
                }}
              >
                <span className="text-gold font-display text-7xl md:text-8xl tracking-[0.15em]">
                  AS
                </span>
                <div className="w-14 h-[1px] bg-gold/40 mx-auto mt-3 mb-2" />
                <span className="text-cream/25 text-[11px] tracking-[0.5em] uppercase block">
                  Sellerie
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Diagonal speed lines — sporty accent */}
          <motion.div
            className="absolute inset-y-0 -inset-x-[15%]"
            style={{ skewX: "-4deg" }}
            initial={phase === "enter" ? { x: "120%" } : undefined}
            animate={{ x: dest }}
            transition={{
              duration: 0.55,
              ease: EASE,
              delay: phase === "enter" ? 0.04 : 0.04,
            }}
          >
            <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
            <div className="absolute top-[80%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
          </motion.div>
        </div>
      )}
    </TransitionCtx.Provider>
  );
}
