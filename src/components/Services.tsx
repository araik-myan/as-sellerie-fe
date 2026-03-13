"use client";

import { motion } from "framer-motion";
import TransitionLink from "./TransitionLink";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.auto.title,
      subtitle: t.services.auto.subtitle,
      image: "/images/sections/auto.webp",
      href: "/sellerie/auto",
    },
    {
      title: t.services.moto.title,
      subtitle: t.services.moto.subtitle,
      image: "/images/sections/moto.webp",
      href: "/sellerie/moto",
    },
    {
      title: t.services.divers.title,
      subtitle: t.services.divers.subtitle,
      image: "/images/sections/divers.webp",
      href: "/sellerie/divers",
    },
    {
      title: t.services.broderie.title,
      subtitle: t.services.broderie.subtitle,
      image: "/images/sections/broderie.webp",
      href: "/sellerie/broderie",
    },
  ];

  return (
    <section id="realisations" className="py-24 lg:py-36 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-xs tracking-[0.35em] uppercase">
            {t.services.label}
          </span>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-cream mt-4">
            {t.services.title}
          </h2>
          <div className="w-16 h-[1px] bg-gold/50 mx-auto mt-6" />
          <p className="text-cream/40 font-light mt-6 max-w-xl mx-auto text-[15px] leading-relaxed">
            {t.services.description}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <TransitionLink
                href={service.href}
                className="group relative block aspect-[16/10] overflow-hidden"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-dark/50 group-hover:bg-dark/30 transition-all duration-500" />
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />

                {/* Sporty diagonal sweep on hover */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-y-0 w-[200%] bg-gradient-to-r from-transparent via-gold/[0.07] to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1200ms] ease-out skew-x-[-15deg]" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-cream tracking-wider mb-3">
                    {service.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-gold group-hover:w-20 transition-all duration-500 mb-3" />
                  <p className="text-cream/50 text-xs tracking-[0.25em] uppercase font-light">
                    {service.subtitle}
                  </p>
                </div>

                {/* Corner accents */}
                <div className="absolute top-5 left-5 w-10 h-10 border-l border-t border-gold/0 group-hover:border-gold/50 transition-all duration-500" />
                <div className="absolute top-5 right-5 w-10 h-10 border-r border-t border-gold/0 group-hover:border-gold/50 transition-all duration-500" />
                <div className="absolute bottom-5 left-5 w-10 h-10 border-l border-b border-gold/0 group-hover:border-gold/50 transition-all duration-500" />
                <div className="absolute bottom-5 right-5 w-10 h-10 border-r border-b border-gold/0 group-hover:border-gold/50 transition-all duration-500" />

                {/* Arrow icon */}
                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                  <svg
                    className="w-5 h-5 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </TransitionLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
