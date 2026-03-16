"use client";

import { motion } from "framer-motion";

interface Props {
  size?: "sm" | "lg";
  animate?: boolean;
}

export default function Logo({ size = "sm", animate = false }: Props) {
  const isLg = size === "lg";

  return (
    <div className="relative group flex items-center gap-3">
      {/* AS letters */}
      <div className="relative">
        <motion.span
          className={`text-gold font-display tracking-wider relative ${
            isLg
              ? "text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
              : "text-3xl"
          }`}
          {...(animate
            ? {
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                transition: {
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                },
              }
            : {})}
        >
          AS
        </motion.span>
      </div>

      {/* Company name */}
      <div className="flex flex-col">
        {isLg ? (
          <motion.span
            className="text-cream font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider"
            {...(animate
              ? {
                  initial: { opacity: 0, x: 20 },
                  animate: { opacity: 1, x: 0 },
                  transition: {
                    duration: 1,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }
              : {})}
          >
            Sellerie
          </motion.span>
        ) : (
          <span className="text-cream/90 text-xs tracking-[0.35em] uppercase font-light">
            Sellerie
          </span>
        )}
      </div>
    </div>
  );
}
