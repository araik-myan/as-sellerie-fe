import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TransitionProvider from "@/components/TransitionProvider";
import LanguageProvider from "@/context/LanguageContext";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "AS Sellerie — Sellier Tapissier Garnisseur | Nancy",
  description:
    "AS Sellerie, votre artisan sellier tapissier garnisseur à Nancy (54). Sellerie automobile, moto, broderie sur mesure. Cuir, alcantara, vinyle. Devis gratuit.",
  keywords:
    "sellerie, tapissier, garnisseur, nancy, automobile, moto, broderie, cuir, artisan, upholstery, trimmer, craftsman",
  alternates: {
    languages: {
      "fr-FR": "https://www.as-sellerie.fr",
      "en-US": "https://www.as-sellerie.fr",
    },
  },
  openGraph: {
    title: "AS Sellerie — Sellier Tapissier Garnisseur",
    description:
      "Votre artisan sellier tapissier garnisseur à Nancy. Sellerie automobile, moto, broderie sur mesure.",
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    url: "https://www.as-sellerie.fr",
    siteName: "AS Sellerie",
    images: [
      {
        url: "https://www.as-sellerie.fr/images/homepage.webp",
        width: 1200,
        height: 630,
        alt: "AS Sellerie — Sellier Tapissier Garnisseur à Nancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AS Sellerie — Sellier Tapissier Garnisseur | Nancy",
    description:
      "Votre artisan sellier tapissier garnisseur à Nancy. Sellerie automobile, moto, broderie sur mesure.",
    images: ["https://www.as-sellerie.fr/images/homepage.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://www.as-sellerie.fr"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://www.as-sellerie.fr" />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://www.as-sellerie.fr"
        />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.as-sellerie.fr"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.as-sellerie.fr"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "AS Sellerie",
              description:
                "Artisan sellier tapissier garnisseur à Nancy. Sellerie automobile, moto, broderie sur mesure.",
              url: "https://www.as-sellerie.fr",
              telephone: "+33651344141",
              email: "contact@as-sellerie.fr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4 rue Anatole France",
                addressLocality: "Champigneulles",
                postalCode: "54250",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 48.7386,
                longitude: 6.1646,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "19:00",
              },
              image: "https://www.as-sellerie.fr/images/homepage.webp",
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "25",
                bestRating: "5",
              },
              sameAs: [
                "https://www.facebook.com/aram.sakanyan.1",
                "https://www.instagram.com/assellerie/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${montserrat.variable} font-body antialiased`}
      >
        <TransitionProvider>
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}
