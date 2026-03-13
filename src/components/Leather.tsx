"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Leather() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative py-24 lg:py-36 overflow-hidden">
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-[-10%]"
        aria-hidden="true"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/leather.webp')" }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-dark/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <AnimatedSection direction="left">
            <div>
              <span className="text-gold text-xs tracking-[0.35em] uppercase">
                Matériaux
              </span>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-cream mt-4 mb-8 leading-tight">
                Le Choix des
                <br />
                <span className="text-gold/80">Matériaux</span>
              </h2>
              <div className="w-16 h-[1px] bg-gold/50 mb-8" />

              <div className="space-y-5 text-cream/60 leading-[1.8] font-light text-[15px]">
                <p>
                  Du vinyle, de l&apos;alcantara, du tissu ou même du cuir
                  (véritable, synthétique ou simili), nous vous proposons un
                  large éventail de motifs et de couleurs.
                </p>
                <p>
                  Nos fournisseurs sont spécialisés dans la production de
                  matières propres et hautement qualitatives. Ils
                  s&apos;étendent dans toute l&apos;Europe. De cette manière,
                  nos prix s&apos;adaptent à votre budget en fonction de vos
                  besoins.
                </p>
                <p>
                  Nos travaux respectent la bonne tenue de vos équipements, il
                  s&apos;agit d&apos;un combiné de créations sur-mesure, de
                  conforts et d&apos;esthétisme. Nous nous adaptons à chaque
                  style et méthode de fabrication.
                </p>
                <p>
                  Nous vous invitons à découvrir des collections rares et plus
                  communes, pour soigner et habiller vos selleries dans une
                  technique qui respecte un savoir ancestral.
                </p>
              </div>

              {/* Material tags */}
              <div className="flex flex-wrap gap-3 mt-10">
                {["Cuir", "Alcantara", "Vinyle", "Tissu", "Simili"].map(
                  (material) => (
                    <span
                      key={material}
                      className="px-4 py-2 border border-gold/20 text-gold/70 text-xs tracking-[0.2em] uppercase"
                    >
                      {material}
                    </span>
                  )
                )}
              </div>
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="relative">
              <img
                src="/images/moreleather.webp"
                alt="Matériaux de sellerie de qualité"
                className="w-full h-[400px] sm:h-[450px] lg:h-[550px] object-cover"
                loading="lazy"
              />
              <div className="absolute -top-3 -right-3 w-20 h-20 border-r-[2px] border-t-[2px] border-gold/30" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-l-[2px] border-b-[2px] border-gold/30" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
