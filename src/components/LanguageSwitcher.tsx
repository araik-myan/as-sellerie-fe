"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center border border-gold/20 h-8 overflow-hidden">
      <button
        onClick={() => setLocale("fr")}
        className={`px-2.5 h-full text-[11px] tracking-[0.1em] uppercase font-medium transition-all duration-300 ${
          locale === "fr"
            ? "bg-gold text-dark"
            : "text-cream/40 hover:text-gold"
        }`}
        aria-label="Fran\u00E7ais"
      >
        FR
      </button>
      <div className="w-[1px] h-full bg-gold/20" />
      <button
        onClick={() => setLocale("en")}
        className={`px-2.5 h-full text-[11px] tracking-[0.1em] uppercase font-medium transition-all duration-300 ${
          locale === "en"
            ? "bg-gold text-dark"
            : "text-cream/40 hover:text-gold"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
