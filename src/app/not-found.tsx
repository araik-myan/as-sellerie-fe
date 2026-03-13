"use client";

import TransitionLink from "@/components/TransitionLink";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark">
      <div className="text-center px-6">
        <h1 className="font-display text-8xl md:text-9xl text-gold/20 mb-4">
          404
        </h1>
        <h2 className="font-display text-2xl md:text-3xl text-cream mb-4">
          {t.notFound.title}
        </h2>
        <p className="text-cream/40 font-light mb-10 max-w-md mx-auto">
          {t.notFound.description}
        </p>
        <TransitionLink
          href="/"
          className="inline-flex items-center gap-3 px-8 py-3 border border-gold/40 text-gold text-[13px] tracking-[0.15em] uppercase hover:bg-gold hover:text-dark transition-all duration-300"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          {t.notFound.back}
        </TransitionLink>
      </div>
    </section>
  );
}
