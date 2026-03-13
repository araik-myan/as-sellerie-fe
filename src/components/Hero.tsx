"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/images/homepage.webp')" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/30 to-dark" />
      {/* Side vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(10,10,10,0.6)_100%)]" />

      {/* Sporty diagonal accent lines */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {/* Top-right speed lines */}
        <div className="absolute top-[12%] -right-[25%] w-[100%] h-[1px] bg-gradient-to-l from-transparent via-gold/20 to-transparent rotate-[-28deg]" />
        <div className="absolute top-[22%] -right-[15%] w-[70%] h-[1px] bg-gradient-to-l from-transparent via-gold/12 to-transparent rotate-[-28deg]" />
        <div className="absolute top-[30%] -right-[10%] w-[50%] h-[1px] bg-gradient-to-l from-transparent via-gold/8 to-transparent rotate-[-28deg]" />
        {/* Bottom-left speed lines */}
        <div className="absolute bottom-[15%] -left-[25%] w-[90%] h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent rotate-[-28deg]" />
        <div className="absolute bottom-[25%] -left-[15%] w-[60%] h-[1px] bg-gradient-to-r from-transparent via-gold/8 to-transparent rotate-[-28deg]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-cream tracking-wider">
            AS{" "}
            <span className="text-gold">Sellerie</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-32 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-cream/60 text-sm sm:text-base md:text-lg tracking-[0.4em] uppercase font-light"
        >
          Sellier &middot; Tapissier &middot; Garnisseur
        </motion.p>

        {/* Google Rating */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-8 flex items-center justify-center gap-2"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-3.5 h-3.5 fill-gold"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-cream/40 text-xs tracking-wider">
            5.0 sur Google
          </span>
        </motion.div>

        {/* CTA buttons — sporty skew style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#realisations"
            className="px-10 py-3.5 bg-gold text-dark text-[13px] tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-all duration-300 skew-x-[-3deg]"
          >
            <span className="inline-block skew-x-[3deg]">
              Nos Réalisations
            </span>
          </a>
          <a
            href="#contact"
            className="px-10 py-3.5 border border-cream/20 text-cream/70 text-[13px] tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all duration-300 skew-x-[-3deg]"
          >
            <span className="inline-block skew-x-[3deg]">
              Nous Contacter
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-cream/30 text-[10px] tracking-[0.4em] uppercase">
            Défiler
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-gold/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
