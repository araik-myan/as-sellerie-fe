"use client";

import TransitionLink from "@/components/TransitionLink";
import { useLanguage } from "@/context/LanguageContext";

export default function MentionsLegalesClient() {
  const { t } = useLanguage();

  return (
    <>
      {/* Banner */}
      <section className="relative h-[40vh] md:h-[45vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/sections/legalnotice.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-2 text-cream/40 text-xs tracking-wider uppercase mb-4">
            <TransitionLink
              href="/"
              className="hover:text-gold transition-colors duration-300"
            >
              {t.legal.breadcrumbHome}
            </TransitionLink>
            <span>/</span>
            <span className="text-gold">{t.legal.breadcrumbLegal}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream tracking-wider">
            {t.legal.title}
          </h1>
          <div className="w-16 h-[1px] bg-gold/50 mt-4" />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-12 text-cream/60 font-light text-[15px] leading-[1.8]">
            {/* Section 1 */}
            <div>
              <h3 className="text-gold font-display text-xl mb-4 tracking-wide">
                1. Pr&eacute;sentation de l&apos;entreprise
              </h3>
              <p>
                <strong className="text-cream/80 font-normal">
                  Nom de l&apos;entreprise
                </strong>{" "}
                : AS Sellerie
                <br />
                <strong className="text-cream/80 font-normal">
                  Nom du dirigeant
                </strong>{" "}
                : Aram SAKANYAN
                <br />
                <strong className="text-cream/80 font-normal">Adresse</strong>{" "}
                : 4 rue Anatole France 54250 Champigneulles
                <br />
                <strong className="text-cream/80 font-normal">
                  T&eacute;l
                </strong>{" "}
                : +33 (0)6 51 34 41 41
                <br />
                <strong className="text-cream/80 font-normal">
                  E-mail
                </strong>{" "}
                : contact@as-sellerie.fr
              </p>
              <p className="mt-3">
                <strong className="text-cream/80 font-normal">
                  Num&eacute;ro d&apos;inscription Siret
                </strong>{" "}
                : 823 511 100 00039
                <br />
                <strong className="text-cream/80 font-normal">
                  Statut juridique
                </strong>{" "}
                : AE
              </p>
            </div>

            <div className="w-full h-[1px] bg-gold/10" />

            {/* Section 2 */}
            <div>
              <h3 className="text-gold font-display text-xl mb-4 tracking-wide">
                2. Pr&eacute;sentation du site
              </h3>
              <p>
                En vertu de l&apos;article 6 de la loi n&deg; 2004-575 du 21
                juin 2004 pour la confiance dans l&apos;&eacute;conomie
                num&eacute;rique, il est pr&eacute;cis&eacute; aux utilisateurs
                du site{" "}
                <a
                  href="https://www.as-sellerie.fr"
                  className="text-gold/70 hover:text-gold transition-colors"
                >
                  www.as-sellerie.fr
                </a>{" "}
                l&apos;identit&eacute; des diff&eacute;rents intervenants dans
                le cadre de sa r&eacute;alisation et de son suivi :
              </p>
              <p className="mt-3">
                <strong className="text-cream/80 font-normal">
                  Propri&eacute;taire
                </strong>{" "}
                : Ara&iuml;k MADARYAN
                <br />
                <strong className="text-cream/80 font-normal">
                  Cr&eacute;ateur
                </strong>{" "}
                : Ara&iuml;k MADARYAN
                <br />
                <strong className="text-cream/80 font-normal">
                  Responsable publication
                </strong>{" "}
                : Ara&iuml;k MADARYAN &mdash; web.araik@gmail.com
                <br />
                <strong className="text-cream/80 font-normal">
                  Webmaster
                </strong>{" "}
                : Ara&iuml;k MADARYAN &mdash; web.araik@gmail.com
              </p>
            </div>

            <div className="w-full h-[1px] bg-gold/10" />

            {/* Section 3 */}
            <div>
              <h3 className="text-gold font-display text-xl mb-4 tracking-wide">
                3. Conditions g&eacute;n&eacute;rales d&apos;utilisation
              </h3>
              <p>
                L&apos;utilisation du site{" "}
                <a
                  href="https://www.as-sellerie.fr"
                  className="text-gold/70 hover:text-gold transition-colors"
                >
                  www.as-sellerie.fr
                </a>{" "}
                implique l&apos;acceptation pleine et enti&egrave;re des
                conditions g&eacute;n&eacute;rales d&apos;utilisation ci-apr&egrave;s
                d&eacute;crites. Ces conditions d&apos;utilisation sont
                susceptibles d&apos;&ecirc;tre modifi&eacute;es ou
                compl&eacute;t&eacute;es &agrave; tout moment, les utilisateurs
                du site sont donc invit&eacute;s &agrave; les consulter de
                mani&egrave;re r&eacute;guli&egrave;re.
              </p>
              <p className="mt-3">
                Ce site est normalement accessible &agrave; tout moment aux
                utilisateurs. Une interruption pour raison de maintenance
                technique peut &ecirc;tre toutefois d&eacute;cid&eacute;e, avec
                communication pr&eacute;alable des dates et heures de
                l&apos;intervention.
              </p>
            </div>

            <div className="w-full h-[1px] bg-gold/10" />

            {/* Section 4 */}
            <div>
              <h3 className="text-gold font-display text-xl mb-4 tracking-wide">
                4. Description des services fournis
              </h3>
              <p>
                Le site{" "}
                <a
                  href="https://www.as-sellerie.fr"
                  className="text-gold/70 hover:text-gold transition-colors"
                >
                  www.as-sellerie.fr
                </a>{" "}
                a pour objet de fournir une information concernant
                l&apos;ensemble des activit&eacute;s de la soci&eacute;t&eacute;.
                Les informations indiqu&eacute;es sont donn&eacute;es &agrave;
                titre indicatif et sont susceptibles d&apos;&eacute;voluer.
              </p>
            </div>

            <div className="w-full h-[1px] bg-gold/10" />

            {/* Section 5 */}
            <div>
              <h3 className="text-gold font-display text-xl mb-4 tracking-wide">
                5. Propri&eacute;t&eacute; intellectuelle
              </h3>
              <p>
                Ara&iuml;k MADARYAN est propri&eacute;taire des droits de
                propri&eacute;t&eacute; intellectuelle ou d&eacute;tient les
                droits d&apos;usage sur tous les &eacute;l&eacute;ments
                accessibles sur le site, notamment les textes, images,
                graphismes, logo, ic&ocirc;nes, sons, logiciels.
              </p>
              <p className="mt-3">
                Toute reproduction, repr&eacute;sentation, modification,
                publication, adaptation de tout ou partie des
                &eacute;l&eacute;ments du site, quel que soit le moyen ou le
                proc&eacute;d&eacute; utilis&eacute;, est interdite, sauf
                autorisation &eacute;crite pr&eacute;alable.
              </p>
            </div>

            <div className="w-full h-[1px] bg-gold/10" />

            {/* Section 6 */}
            <div>
              <h3 className="text-gold font-display text-xl mb-4 tracking-wide">
                6. Gestion des donn&eacute;es personnelles
              </h3>
              <p>
                En France, les donn&eacute;es personnelles sont notamment
                prot&eacute;g&eacute;es par la loi n&deg; 78-87 du 6 janvier
                1978, la loi n&deg; 2004-801 du 6 ao&ucirc;t 2004,
                l&apos;article L. 226-13 du Code p&eacute;nal et la Directive
                Europ&eacute;enne du 24 octobre 1995.
              </p>
              <p className="mt-3">
                Aucune information personnelle de l&apos;utilisateur du site
                n&apos;est publi&eacute;e &agrave; l&apos;insu de
                l&apos;utilisateur, &eacute;chang&eacute;e,
                transf&eacute;r&eacute;e, c&eacute;d&eacute;e ou vendue sur un
                support quelconque &agrave; des tiers.
              </p>
              <p className="mt-3">
                Conform&eacute;ment aux dispositions des articles 38 et suivants
                de la loi 78-17 du 6 janvier 1978, tout utilisateur dispose
                d&apos;un droit d&apos;acc&egrave;s, de rectification et
                d&apos;opposition aux donn&eacute;es personnelles le concernant.
              </p>
            </div>

            <div className="w-full h-[1px] bg-gold/10" />

            {/* Section 7 */}
            <div>
              <h3 className="text-gold font-display text-xl mb-4 tracking-wide">
                7. Liens hypertextes et cookies
              </h3>
              <p>
                La navigation sur le site est susceptible de provoquer
                l&apos;installation de cookie(s) sur l&apos;ordinateur de
                l&apos;utilisateur. Un cookie est un fichier de petite taille,
                qui ne permet pas l&apos;identification de l&apos;utilisateur,
                mais qui enregistre des informations relatives &agrave; la
                navigation d&apos;un ordinateur sur un site.
              </p>
              <p className="mt-3">
                Le refus d&apos;installation d&apos;un cookie peut
                entra&icirc;ner l&apos;impossibilit&eacute; d&apos;acc&eacute;der
                &agrave; certains services. L&apos;utilisateur peut toutefois
                configurer son navigateur pour refuser l&apos;installation des
                cookies.
              </p>
            </div>

            <div className="w-full h-[1px] bg-gold/10" />

            {/* Section 8 */}
            <div>
              <h3 className="text-gold font-display text-xl mb-4 tracking-wide">
                8. Droit applicable
              </h3>
              <p>
                Tout litige en relation avec l&apos;utilisation du site{" "}
                <a
                  href="https://www.as-sellerie.fr"
                  className="text-gold/70 hover:text-gold transition-colors"
                >
                  www.as-sellerie.fr
                </a>{" "}
                est soumis au droit fran&ccedil;ais. Il est fait attribution
                exclusive de juridiction aux tribunaux comp&eacute;tents de
                Paris.
              </p>
            </div>
          </div>

          {/* Back to home */}
          <div className="mt-16">
            <TransitionLink
              href="/"
              className="inline-flex items-center gap-3 text-cream/40 hover:text-gold text-[13px] tracking-[0.15em] uppercase transition-colors duration-300"
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
              {t.legal.backHome}
            </TransitionLink>
          </div>
        </div>
      </section>
    </>
  );
}
