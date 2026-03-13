import TransitionLink from "@/components/TransitionLink";

export const metadata = {
  title: "Mentions Légales — AS Sellerie",
  description: "Mentions légales du site AS Sellerie.",
};

export default function MentionsLegales() {
  return (
    <>
      {/* Banner */}
      <section className="relative h-[40vh] md:h-[45vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/sections/legalnotice.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-2 text-cream/40 text-xs tracking-wider uppercase mb-4">
            <TransitionLink
              href="/"
              className="hover:text-gold transition-colors duration-300"
            >
              Accueil
            </TransitionLink>
            <span>/</span>
            <span className="text-gold">Mentions légales</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream tracking-wider">
            Mentions Légales
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
                1. Présentation de l&apos;entreprise
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
                <strong className="text-cream/80 font-normal">
                  Adresse
                </strong>{" "}
                : 4 rue Anatole France 54250 Champigneulles
                <br />
                <strong className="text-cream/80 font-normal">Tél</strong> : +33
                (0)6 51 34 41 41
                <br />
                <strong className="text-cream/80 font-normal">
                  E-mail
                </strong>{" "}
                : contact@as-sellerie.fr
              </p>
              <p className="mt-3">
                <strong className="text-cream/80 font-normal">
                  Numéro d&apos;inscription Siret
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
                2. Présentation du site
              </h3>
              <p>
                En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin
                2004 pour la confiance dans l&apos;économie numérique, il est
                précisé aux utilisateurs du site{" "}
                <a
                  href="https://www.as-sellerie.fr"
                  className="text-gold/70 hover:text-gold transition-colors"
                >
                  www.as-sellerie.fr
                </a>{" "}
                l&apos;identité des différents intervenants dans le cadre de sa
                réalisation et de son suivi :
              </p>
              <p className="mt-3">
                <strong className="text-cream/80 font-normal">
                  Propriétaire
                </strong>{" "}
                : Araïk MADARYAN
                <br />
                <strong className="text-cream/80 font-normal">
                  Créateur
                </strong>{" "}
                : Araïk MADARYAN
                <br />
                <strong className="text-cream/80 font-normal">
                  Responsable publication
                </strong>{" "}
                : Araïk MADARYAN — contact@araikmadaryan.dev
                <br />
                <strong className="text-cream/80 font-normal">
                  Webmaster
                </strong>{" "}
                : Araïk MADARYAN — contact@araikmadaryan.dev
              </p>
            </div>

            <div className="w-full h-[1px] bg-gold/10" />

            {/* Section 3 */}
            <div>
              <h3 className="text-gold font-display text-xl mb-4 tracking-wide">
                3. Conditions générales d&apos;utilisation
              </h3>
              <p>
                L&apos;utilisation du site{" "}
                <a
                  href="https://www.as-sellerie.fr"
                  className="text-gold/70 hover:text-gold transition-colors"
                >
                  www.as-sellerie.fr
                </a>{" "}
                implique l&apos;acceptation pleine et entière des conditions
                générales d&apos;utilisation ci-après décrites. Ces conditions
                d&apos;utilisation sont susceptibles d&apos;être modifiées ou
                complétées à tout moment, les utilisateurs du site sont donc
                invités à les consulter de manière régulière.
              </p>
              <p className="mt-3">
                Ce site est normalement accessible à tout moment aux
                utilisateurs. Une interruption pour raison de maintenance
                technique peut être toutefois décidée, avec communication
                préalable des dates et heures de l&apos;intervention.
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
                a pour objet de fournir une information concernant l&apos;ensemble
                des activités de la société. Les informations indiquées sont
                données à titre indicatif et sont susceptibles d&apos;évoluer.
              </p>
            </div>

            <div className="w-full h-[1px] bg-gold/10" />

            {/* Section 5 */}
            <div>
              <h3 className="text-gold font-display text-xl mb-4 tracking-wide">
                5. Propriété intellectuelle
              </h3>
              <p>
                Araïk MADARYAN est propriétaire des droits de propriété
                intellectuelle ou détient les droits d&apos;usage sur tous les
                éléments accessibles sur le site, notamment les textes, images,
                graphismes, logo, icônes, sons, logiciels.
              </p>
              <p className="mt-3">
                Toute reproduction, représentation, modification, publication,
                adaptation de tout ou partie des éléments du site, quel que soit
                le moyen ou le procédé utilisé, est interdite, sauf autorisation
                écrite préalable.
              </p>
            </div>

            <div className="w-full h-[1px] bg-gold/10" />

            {/* Section 6 */}
            <div>
              <h3 className="text-gold font-display text-xl mb-4 tracking-wide">
                6. Gestion des données personnelles
              </h3>
              <p>
                En France, les données personnelles sont notamment protégées par
                la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août
                2004, l&apos;article L. 226-13 du Code pénal et la Directive
                Européenne du 24 octobre 1995.
              </p>
              <p className="mt-3">
                Aucune information personnelle de l&apos;utilisateur du site
                n&apos;est publiée à l&apos;insu de l&apos;utilisateur, échangée,
                transférée, cédée ou vendue sur un support quelconque à des
                tiers.
              </p>
              <p className="mt-3">
                Conformément aux dispositions des articles 38 et suivants de la
                loi 78-17 du 6 janvier 1978, tout utilisateur dispose d&apos;un
                droit d&apos;accès, de rectification et d&apos;opposition aux
                données personnelles le concernant.
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
                mais qui enregistre des informations relatives à la navigation
                d&apos;un ordinateur sur un site.
              </p>
              <p className="mt-3">
                Le refus d&apos;installation d&apos;un cookie peut entraîner
                l&apos;impossibilité d&apos;accéder à certains services.
                L&apos;utilisateur peut toutefois configurer son navigateur pour
                refuser l&apos;installation des cookies.
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
                est soumis au droit français. Il est fait attribution exclusive de
                juridiction aux tribunaux compétents de Paris.
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
              Retour à l&apos;accueil
            </TransitionLink>
          </div>
        </div>
      </section>
    </>
  );
}
