"use client";

import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="artisan" className="py-24 lg:py-36 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative overflow-hidden">
                <img
                  src="/images/sellier.webp"
                  alt="Artisan sellier garnisseur au travail"
                  className="w-full h-[450px] sm:h-[550px] lg:h-[650px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
              </div>
              {/* Gold corner accents */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-l-[2px] border-t-[2px] border-gold/30" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-[2px] border-b-[2px] border-gold/30" />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-2 lg:left-8 bg-dark-card border border-gold/20 px-6 py-4">
                <p className="text-gold font-display text-sm tracking-wider">
                  Artisan d&apos;Art
                </p>
                <p className="text-cream/40 text-xs tracking-wider mt-1">
                  Nancy &middot; France
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="lg:pl-4">
              <span className="text-gold text-xs tracking-[0.35em] uppercase">
                À propos
              </span>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-cream mt-4 mb-8 leading-tight">
                Votre Artisan
                <br />
                <span className="text-gold/80">d&apos;Art</span>
              </h2>
              <div className="w-16 h-[1px] bg-gold/50 mb-8" />

              <div className="space-y-5 text-cream/60 leading-[1.8] font-light text-[15px]">
                <p>
                  Des années mêmes avant la consécration à mon artisanat, je
                  soignais ma passion et mon expérience pour la réalisation de
                  beaux objets.
                </p>
                <p>
                  Le respect, et le travail bien fait sont plus que jamais mes
                  valeurs, afin de garantir un résultat au plus juste de la
                  branche traditionnelle, en perpétuant les gestes et le savoir
                  de nos artisans d&apos;hier.
                </p>
                <p>
                  Un savoir diversifié par les domaines de l&apos;auto, moto,
                  camping-car, tapisserie, équipement médical et nautique. Quel
                  que soit votre besoin, de la création à la rénovation, ou la
                  personnalisation, je prendrai soin de vous conseiller.
                </p>
                <p>
                  Nos clients comptent parmi des professionnels, et des
                  particuliers de toute la France, ainsi un large choix de
                  couleurs et de matières vous sont proposés, afin que le
                  résultat corresponde à vos attentes.
                </p>
              </div>

              <p className="mt-10 text-gold font-display text-xl italic tracking-wide">
                — Votre sellier garnisseur
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
