"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react";
import { translations, Locale, Translations } from "@/i18n/translations";
import { usePageTransition } from "@/components/TransitionProvider";

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "fr",
  t: translations.fr,
  setLocale: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>("fr");
  const { playTransition } = usePageTransition();

  useEffect(() => {
    const saved = localStorage.getItem("as-sellerie-lang") as Locale | null;
    if (saved && (saved === "fr" || saved === "en")) {
      setLocaleState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLocale = useCallback(
    (newLocale: Locale) => {
      if (newLocale === locale) return;
      playTransition(() => {
        setLocaleState(newLocale);
        localStorage.setItem("as-sellerie-lang", newLocale);
        document.documentElement.lang = newLocale;
      });
    },
    [locale, playTransition]
  );

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}
