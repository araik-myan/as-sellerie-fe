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
      {/* AS letters with sporty accents */}
      <div className="relative">
        {/* Speed lines behind letters */}
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div
            className={`${isLg ? "w-8" : "w-5"} h-[1px] bg-gradient-to-l from-gold/60 to-transparent`}
          />
          <div
            className={`${isLg ? "w-5" : "w-3"} h-[1px] bg-gradient-to-l from-gold/30 to-transparent mt-1.5`}
          />
          <div
            className={`${isLg ? "w-6" : "w-4"} h-[1px] bg-gradient-to-l from-gold/40 to-transparent mt-1.5`}
          />
        </div>

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
          {/* Underline accent */}
          <motion.div
            className={`absolute -bottom-1 left-0 right-0 ${isLg ? "h-[2px]" : "h-[1px]"} bg-gradient-to-r from-gold via-gold/60 to-transparent`}
            {...(animate
              ? {
                  initial: { scaleX: 0, originX: 0 },
                  animate: { scaleX: 1 },
                  transition: { duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                }
              : {})}
          />
        </motion.span>

        {/* Speed lines after letters */}
        <div
          className={`absolute -right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-500 ${
            animate
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <motion.div
            className={`${isLg ? "w-10" : "w-6"} h-[1px] bg-gradient-to-r from-gold/60 to-transparent`}
            {...(animate
              ? {
                  initial: { scaleX: 0, originX: 0 },
                  animate: { scaleX: 1 },
                  transition: { duration: 0.6, delay: 0.8 },
                }
              : {})}
          />
          <motion.div
            className={`${isLg ? "w-6" : "w-4"} h-[1px] bg-gradient-to-r from-gold/30 to-transparent mt-1.5`}
            {...(animate
              ? {
                  initial: { scaleX: 0, originX: 0 },
                  animate: { scaleX: 1 },
                  transition: { duration: 0.6, delay: 0.9 },
                }
              : {})}
          />
          <motion.div
            className={`${isLg ? "w-8" : "w-5"} h-[1px] bg-gradient-to-r from-gold/40 to-transparent mt-1.5`}
            {...(animate
              ? {
                  initial: { scaleX: 0, originX: 0 },
                  animate: { scaleX: 1 },
                  transition: { duration: 0.6, delay: 1.0 },
                }
              : {})}
          />
        </div>
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
