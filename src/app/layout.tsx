import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TransitionProvider from "@/components/TransitionProvider";
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
    "sellerie, tapissier, garnisseur, nancy, automobile, moto, broderie, cuir, artisan",
  openGraph: {
    title: "AS Sellerie — Sellier Tapissier Garnisseur",
    description:
      "Votre artisan sellier tapissier garnisseur à Nancy. Sellerie automobile, moto, broderie sur mesure.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.as-sellerie.fr",
  },
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
      </head>
      <body
        className={`${playfair.variable} ${montserrat.variable} font-body antialiased`}
      >
        <TransitionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
