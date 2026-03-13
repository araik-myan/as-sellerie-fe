"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Auto",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@as-sellerie.fr?subject=${encodeURIComponent(
      `[${formData.subject}] Demande de ${formData.name}`
    )}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-36 bg-dark-secondary relative">
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
            Contact
          </span>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-cream mt-4">
            Nous Contacter
          </h2>
          <div className="w-16 h-[1px] bg-gold/50 mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Contact Info - 2 cols */}
          <AnimatedSection className="lg:col-span-2" direction="left">
            <div className="space-y-10">
              {/* Address */}
              <div>
                <h3 className="text-gold font-display text-lg mb-4 tracking-wide">
                  Adresse
                </h3>
                <a
                  href="https://maps.google.com/?q=4+rue+Anatole+France+54250+Champigneulles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/50 font-light text-[15px] leading-relaxed hover:text-cream/70 transition-colors flex items-start gap-3"
                >
                  <svg
                    className="w-5 h-5 text-gold/60 mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    4 rue Anatole France
                    <br />
                    54250 Champigneulles
                    <br />
                    France
                  </span>
                </a>
              </div>

              {/* Phone & Email */}
              <div>
                <h3 className="text-gold font-display text-lg mb-4 tracking-wide">
                  Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+33651344141"
                    className="text-cream/50 font-light text-[15px] hover:text-cream/70 transition-colors flex items-center gap-3"
                  >
                    <svg
                      className="w-5 h-5 text-gold/60 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +33 (0)6 51 34 41 41
                  </a>
                  <a
                    href="mailto:contact@as-sellerie.fr"
                    className="text-cream/50 font-light text-[15px] hover:text-cream/70 transition-colors flex items-center gap-3"
                  >
                    <svg
                      className="w-5 h-5 text-gold/60 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    contact@as-sellerie.fr
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-gold font-display text-lg mb-4 tracking-wide">
                  Horaires
                </h3>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gold/60 mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-cream/50 font-light text-[15px]">
                    Du lundi au samedi
                    <br />
                    09h00 — 19h00
                  </p>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-gold font-display text-lg mb-4 tracking-wide">
                  Réseaux sociaux
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/aram.sakanyan.1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 border border-gold/20 flex items-center justify-center hover:bg-gold hover:border-gold group transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-5 h-5 fill-cream/50 group-hover:fill-dark transition-colors"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/assellerie/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 border border-gold/20 flex items-center justify-center hover:bg-gold hover:border-gold group transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-5 h-5 fill-cream/50 group-hover:fill-dark transition-colors"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form - 3 cols */}
          <AnimatedSection className="lg:col-span-3" direction="right" delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="text-cream/40 text-xs tracking-[0.2em] uppercase block mb-3">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-dark-border focus:border-gold px-0 py-3 text-cream font-light outline-none transition-colors duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="text-cream/40 text-xs tracking-[0.2em] uppercase block mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-dark-border focus:border-gold px-0 py-3 text-cream font-light outline-none transition-colors duration-300"
                    placeholder="votre@email.fr"
                  />
                </div>
              </div>

              <div>
                <label className="text-cream/40 text-xs tracking-[0.2em] uppercase block mb-3">
                  Sujet
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-dark-border focus:border-gold px-0 py-3 text-cream font-light outline-none transition-colors duration-300 appearance-none cursor-pointer"
                >
                  <option value="Auto" className="bg-dark-card text-cream">
                    Automobile
                  </option>
                  <option value="Moto" className="bg-dark-card text-cream">
                    Moto
                  </option>
                  <option
                    value="Tapisserie"
                    className="bg-dark-card text-cream"
                  >
                    Tapisserie
                  </option>
                  <option value="Médical" className="bg-dark-card text-cream">
                    Médical
                  </option>
                  <option value="Nautique" className="bg-dark-card text-cream">
                    Nautique
                  </option>
                  <option value="Broderie" className="bg-dark-card text-cream">
                    Broderie
                  </option>
                  <option value="Autre" className="bg-dark-card text-cream">
                    Autre
                  </option>
                </select>
              </div>

              <div>
                <label className="text-cream/40 text-xs tracking-[0.2em] uppercase block mb-3">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-dark-border focus:border-gold px-0 py-3 text-cream font-light outline-none transition-colors duration-300 resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-14 py-4 bg-gold text-dark text-[13px] tracking-[0.2em] uppercase font-medium hover:bg-gold-light transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {submitted ? "Message envoyé" : "Envoyer le message"}
                </span>
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
