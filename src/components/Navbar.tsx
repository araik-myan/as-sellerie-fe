"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TransitionLink from "./TransitionLink";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Auto", href: "/sellerie/auto" },
  { label: "Moto", href: "/sellerie/moto" },
  { label: "Divers", href: "/sellerie/divers" },
  { label: "Broderie", href: "/sellerie/broderie" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <TransitionLink
          href="/"
          className="flex items-center gap-3 group relative z-50"
        >
          <span className="text-gold font-display text-3xl tracking-wider">
            AS
          </span>
          <div className="flex flex-col">
            <span className="text-cream/90 text-xs tracking-[0.35em] uppercase font-light">
              Sellerie
            </span>
          </div>
        </TransitionLink>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <TransitionLink
              key={link.href}
              href={link.href}
              className="text-cream/60 hover:text-gold text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300" />
            </TransitionLink>
          ))}
          <a
            href="/#contact"
            className="ml-4 px-7 py-2.5 border border-gold/40 text-gold text-[13px] tracking-[0.15em] uppercase hover:bg-gold hover:text-dark transition-all duration-300 skew-x-[-2deg]"
          >
            <span className="inline-block skew-x-[2deg]">Contact</span>
          </a>
        </div>

        {/* Hamburger button */}
        <button
          className="lg:hidden relative z-50 flex flex-col items-center justify-center w-10 h-10 gap-[6px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-[1px] bg-gold transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1px] bg-gold transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1px] bg-gold transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-xl lg:hidden"
          >
            {/* Sporty diagonal accent */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[15%] -right-[30%] w-[160%] h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent rotate-[-25deg]" />
              <div className="absolute bottom-[20%] -left-[30%] w-[160%] h-[1px] bg-gradient-to-r from-transparent via-gold/8 to-transparent rotate-[-25deg]" />
            </div>

            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <TransitionLink
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-cream/70 hover:text-gold text-2xl font-display tracking-[0.2em] transition-colors duration-300"
                  >
                    {link.label}
                  </TransitionLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 px-10 py-3 border border-gold/40 text-gold text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-dark transition-all duration-300 skew-x-[-2deg] inline-block"
                >
                  <span className="inline-block skew-x-[2deg]">Contact</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
