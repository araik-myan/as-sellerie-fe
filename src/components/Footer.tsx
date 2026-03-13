"use client";

import TransitionLink from "./TransitionLink";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <TransitionLink href="/" className="flex items-center gap-3 mb-6">
              <span className="text-gold font-display text-4xl tracking-wider">
                AS
              </span>
              <div className="flex flex-col">
                <span className="text-cream/70 text-xs tracking-[0.3em] uppercase font-light">
                  Sellerie
                </span>
              </div>
            </TransitionLink>
            <p className="text-cream/35 font-light text-sm leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-display text-lg mb-6 tracking-wide">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-cream/40 font-light text-sm">
              <p>
                <a
                  href="https://maps.google.com/?q=4+rue+Anatole+France+54250+Champigneulles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-300"
                >
                  4 rue Anatole France
                  <br />
                  54250 Champigneulles
                </a>
              </p>
              <p>
                <a
                  href="tel:+33651344141"
                  className="hover:text-gold transition-colors duration-300"
                >
                  +33 (0)6 51 34 41 41
                </a>
              </p>
              <p>
                <a
                  href="mailto:contact@as-sellerie.fr"
                  className="hover:text-gold transition-colors duration-300"
                >
                  contact@as-sellerie.fr
                </a>
              </p>
              <p className="pt-1">{t.footer.hours}</p>
            </div>
          </div>

          {/* Navigation + Social */}
          <div>
            <h4 className="text-gold font-display text-lg mb-6 tracking-wide">
              {t.footer.sitemapTitle}
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {[
                { label: t.footer.links.home, href: "/" },
                { label: t.footer.links.auto, href: "/sellerie/auto" },
                { label: t.footer.links.moto, href: "/sellerie/moto" },
                { label: t.footer.links.divers, href: "/sellerie/divers" },
                { label: t.footer.links.broderie, href: "/sellerie/broderie" },
                { label: t.footer.links.legal, href: "/mentions-legales" },
              ].map((link) => (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  className="text-cream/40 hover:text-gold text-sm font-light transition-colors duration-300"
                >
                  {link.label}
                </TransitionLink>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-8">
              <a
                href="https://www.facebook.com/aram.sakanyan.1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/30 hover:text-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/assellerie/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/30 hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-gold/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-cream/20 text-xs font-light tracking-wider">
            {t.footer.copyright}
          </p>
          <p className="text-cream/20 text-xs font-light tracking-wider">
            {t.footer.createdBy}{" "}
            <a
              href="https://www.araikmadaryan.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors duration-300"
            >
              Ara\u00EFk MADARYAN
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
