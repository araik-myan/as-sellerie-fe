export type Locale = "fr" | "en";

export const translations = {
  fr: {
    // Navbar
    nav: {
      home: "Accueil",
      auto: "Auto",
      moto: "Moto",
      divers: "Divers",
      broderie: "Broderie",
      contact: "Contact",
      menu: "Menu",
    },
    // Hero
    hero: {
      subtitle: "Sellier \u00B7 Tapissier \u00B7 Garnisseur",
      rating: "5.0 sur Google",
      cta1: "Nos R\u00E9alisations",
      cta2: "Nous Contacter",
      scroll: "D\u00E9filer",
    },
    // About
    about: {
      label: "\u00C0 propos",
      title1: "Votre Artisan",
      title2: "d\u2019Art",
      badge: "Artisan d\u2019Art",
      badgeLocation: "Nancy \u00B7 France",
      p1: "Des ann\u00E9es m\u00EAmes avant la cons\u00E9cration \u00E0 mon artisanat, je soignais ma passion et mon exp\u00E9rience pour la r\u00E9alisation de beaux objets.",
      p2: "Le respect, et le travail bien fait sont plus que jamais mes valeurs, afin de garantir un r\u00E9sultat au plus juste de la branche traditionnelle, en perp\u00E9tuant les gestes et le savoir de nos artisans d\u2019hier.",
      p3: "Un savoir diversifi\u00E9 par les domaines de l\u2019auto, moto, camping-car, tapisserie, \u00E9quipement m\u00E9dical et nautique. Quel que soit votre besoin, de la cr\u00E9ation \u00E0 la r\u00E9novation, ou la personnalisation, je prendrai soin de vous conseiller.",
      p4: "Nos clients comptent parmi des professionnels, et des particuliers de toute la France, ainsi un large choix de couleurs et de mati\u00E8res vous sont propos\u00E9s, afin que le r\u00E9sultat corresponde \u00E0 vos attentes.",
      signature: "\u2014 Votre sellier garnisseur",
    },
    // Services
    services: {
      label: "Portfolio",
      title: "Nos R\u00E9alisations",
      description:
        "D\u00E9couvrez notre savoir-faire \u00E0 travers nos r\u00E9alisations en sellerie automobile, moto, broderie et cr\u00E9ations diverses.",
      auto: { title: "Automobile", subtitle: "Sellerie sur mesure" },
      moto: { title: "Moto", subtitle: "Selles & accessoires" },
      divers: { title: "Divers", subtitle: "Cr\u00E9ations vari\u00E9es" },
      broderie: { title: "Broderie", subtitle: "Personnalisation" },
    },
    // Leather
    leather: {
      label: "Mat\u00E9riaux",
      title1: "Le Choix des",
      title2: "Mat\u00E9riaux",
      p1: "Du vinyle, de l\u2019alcantara, du tissu ou m\u00EAme du cuir (v\u00E9ritable, synth\u00E9tique ou simili), nous vous proposons un large \u00E9ventail de motifs et de couleurs.",
      p2: "Nos fournisseurs sont sp\u00E9cialis\u00E9s dans la production de mati\u00E8res propres et hautement qualitatives. Ils s\u2019\u00E9tendent dans toute l\u2019Europe. De cette mani\u00E8re, nos prix s\u2019adaptent \u00E0 votre budget en fonction de vos besoins.",
      p3: "Nos travaux respectent la bonne tenue de vos \u00E9quipements, il s\u2019agit d\u2019un combin\u00E9 de cr\u00E9ations sur-mesure, de conforts et d\u2019esth\u00E9tisme. Nous nous adaptons \u00E0 chaque style et m\u00E9thode de fabrication.",
      p4: "Nous vous invitons \u00E0 d\u00E9couvrir des collections rares et plus communes, pour soigner et habiller vos selleries dans une technique qui respecte un savoir ancestral.",
      materials: ["Cuir", "Alcantara", "Vinyle", "Tissu", "Simili"],
    },
    // Contact
    contact: {
      label: "Contact",
      title: "Nous Contacter",
      address: "Adresse",
      contactLabel: "Contact",
      hours: "Horaires",
      hoursText: "Du lundi au samedi",
      hoursTime: "09h00 \u2014 19h00",
      social: "R\u00E9seaux sociaux",
      form: {
        name: "Nom complet",
        namePlaceholder: "Votre nom",
        email: "Email",
        emailPlaceholder: "votre@email.fr",
        subject: "Sujet",
        subjects: {
          auto: "Automobile",
          moto: "Moto",
          tapisserie: "Tapisserie",
          medical: "M\u00E9dical",
          nautique: "Nautique",
          broderie: "Broderie",
          autre: "Autre",
        },
        message: "Message",
        messagePlaceholder: "D\u00E9crivez votre projet...",
        submit: "Envoyer le message",
        submitted: "Message envoy\u00E9",
      },
    },
    // Footer
    footer: {
      description:
        "Sellier Tapissier Garnisseur \u2014 Artisan d\u2019art sp\u00E9cialis\u00E9 dans la sellerie automobile, moto et la broderie sur mesure depuis Nancy.",
      contactTitle: "Contact",
      hours: "Lun \u2014 Sam : 09h00 \u2014 19h00",
      sitemapTitle: "Plan du site",
      links: {
        home: "Accueil",
        auto: "Auto",
        moto: "Moto",
        divers: "Divers",
        broderie: "Broderie",
        legal: "Mentions l\u00E9gales",
      },
      copyright: "\u00A9 2025 AS Sellerie \u2014 Tous droits r\u00E9serv\u00E9s.",
      createdBy: "Cr\u00E9\u00E9 par",
    },
    // Gallery
    gallery: {
      breadcrumbHome: "Accueil",
      photos: "Photos",
      videos: "Vid\u00E9os",
      backToPortfolio: "Retour aux r\u00E9alisations",
      close: "Fermer",
      previous: "Pr\u00E9c\u00E9dent",
      next: "Suivant",
      categories: {
        auto: {
          title: "Automobile",
          subtitle: "Sellerie automobile sur mesure",
          description:
            "De la restauration compl\u00E8te \u00E0 la personnalisation, nous redonnons vie \u00E0 vos int\u00E9rieurs automobiles avec des mat\u00E9riaux nobles et un savoir-faire artisanal.",
        },
        moto: {
          title: "Moto",
          subtitle: "Selles & accessoires sur mesure",
          description:
            "Cr\u00E9ation et r\u00E9novation de selles moto, du custom Harley-Davidson aux sportives, avec un souci du d\u00E9tail et du confort.",
        },
        divers: {
          title: "Divers",
          subtitle: "Cr\u00E9ations & r\u00E9novations diverses",
          description:
            "Fauteuils, si\u00E8ges, sacoches et bien plus : notre savoir-faire s\u2019adapte \u00E0 tous vos projets de sellerie et tapisserie.",
        },
        broderie: {
          title: "Broderie",
          subtitle: "Personnalisation & broderie sur mesure",
          description:
            "Broderie personnalis\u00E9e sur volants, selles, blousons et accessoires. Un art minutieux pour sublimer vos pi\u00E8ces.",
        },
      },
    },
    // 404
    notFound: {
      title: "Page non trouv\u00E9e",
      description:
        "La page que vous recherchez n\u2019existe pas ou a \u00E9t\u00E9 d\u00E9plac\u00E9e.",
      back: "Retour \u00E0 l\u2019accueil",
    },
    // Legal
    legal: {
      breadcrumbHome: "Accueil",
      breadcrumbLegal: "Mentions l\u00E9gales",
      title: "Mentions L\u00E9gales",
      backHome: "Retour \u00E0 l\u2019accueil",
    },
  },

  en: {
    nav: {
      home: "Home",
      auto: "Auto",
      moto: "Moto",
      divers: "Misc",
      broderie: "Embroidery",
      contact: "Contact",
      menu: "Menu",
    },
    hero: {
      subtitle: "Upholsterer \u00B7 Trimmer \u00B7 Craftsman",
      rating: "5.0 on Google",
      cta1: "Our Work",
      cta2: "Contact Us",
      scroll: "Scroll",
    },
    about: {
      label: "About",
      title1: "Your Master",
      title2: "Craftsman",
      badge: "Master Craftsman",
      badgeLocation: "Nancy \u00B7 France",
      p1: "Years before fully dedicating myself to my craft, I was already nurturing my passion and expertise for creating beautiful objects.",
      p2: "Respect and quality workmanship are more than ever my core values, ensuring results true to traditional methods, perpetuating the gestures and knowledge of master craftsmen of yesterday.",
      p3: "A diverse expertise spanning automotive, motorcycle, camper van, upholstery, medical equipment and marine sectors. Whatever your needs\u2014from creation to renovation or customization\u2014I will take care to advise you.",
      p4: "Our clients include professionals and individuals from all across France. A wide selection of colors and materials is offered to ensure the result matches your expectations.",
      signature: "\u2014 Your master upholsterer",
    },
    services: {
      label: "Portfolio",
      title: "Our Work",
      description:
        "Discover our expertise through our automotive upholstery, motorcycle, embroidery and miscellaneous creations.",
      auto: { title: "Automotive", subtitle: "Custom upholstery" },
      moto: { title: "Motorcycle", subtitle: "Seats & accessories" },
      divers: { title: "Miscellaneous", subtitle: "Various creations" },
      broderie: { title: "Embroidery", subtitle: "Customization" },
    },
    leather: {
      label: "Materials",
      title1: "The Choice of",
      title2: "Materials",
      p1: "From vinyl, alcantara, fabric or even leather (genuine, synthetic or faux), we offer a wide range of patterns and colors.",
      p2: "Our suppliers specialize in producing clean, high-quality materials. They extend throughout Europe. In this way, our prices adapt to your budget according to your needs.",
      p3: "Our work respects the proper care of your equipment\u2014a combination of bespoke creations, comfort and aesthetics. We adapt to every style and manufacturing method.",
      p4: "We invite you to discover rare and more common collections, to care for and dress your upholstery in a technique that honors ancestral knowledge.",
      materials: ["Leather", "Alcantara", "Vinyl", "Fabric", "Faux Leather"],
    },
    contact: {
      label: "Contact",
      title: "Contact Us",
      address: "Address",
      contactLabel: "Contact",
      hours: "Hours",
      hoursText: "Monday to Saturday",
      hoursTime: "9:00 AM \u2014 7:00 PM",
      social: "Social Media",
      form: {
        name: "Full Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        subject: "Subject",
        subjects: {
          auto: "Automotive",
          moto: "Motorcycle",
          tapisserie: "Upholstery",
          medical: "Medical",
          nautique: "Marine",
          broderie: "Embroidery",
          autre: "Other",
        },
        message: "Message",
        messagePlaceholder: "Describe your project...",
        submit: "Send Message",
        submitted: "Message sent",
      },
    },
    footer: {
      description:
        "Upholsterer & Trimmer \u2014 Master craftsman specializing in automotive and motorcycle upholstery and custom embroidery from Nancy, France.",
      contactTitle: "Contact",
      hours: "Mon \u2014 Sat: 9:00 AM \u2014 7:00 PM",
      sitemapTitle: "Site Map",
      links: {
        home: "Home",
        auto: "Auto",
        moto: "Moto",
        divers: "Misc",
        broderie: "Embroidery",
        legal: "Legal Notice",
      },
      copyright: "\u00A9 2025 AS Sellerie \u2014 All rights reserved.",
      createdBy: "Created by",
    },
    gallery: {
      breadcrumbHome: "Home",
      photos: "Photos",
      videos: "Videos",
      backToPortfolio: "Back to portfolio",
      close: "Close",
      previous: "Previous",
      next: "Next",
      categories: {
        auto: {
          title: "Automotive",
          subtitle: "Custom automotive upholstery",
          description:
            "From complete restoration to customization, we breathe new life into your automotive interiors with premium materials and artisanal craftsmanship.",
        },
        moto: {
          title: "Motorcycle",
          subtitle: "Custom seats & accessories",
          description:
            "Creation and renovation of motorcycle seats, from custom Harley-Davidson to sport bikes, with attention to detail and comfort.",
        },
        divers: {
          title: "Miscellaneous",
          subtitle: "Various creations & renovations",
          description:
            "Armchairs, seats, bags and more: our expertise adapts to all your upholstery and trimming projects.",
        },
        broderie: {
          title: "Embroidery",
          subtitle: "Custom embroidery & personalization",
          description:
            "Custom embroidery on steering wheels, seats, jackets and accessories. A meticulous art to enhance your pieces.",
        },
      },
    },
    notFound: {
      title: "Page Not Found",
      description:
        "The page you are looking for does not exist or has been moved.",
      back: "Back to Home",
    },
    legal: {
      breadcrumbHome: "Home",
      breadcrumbLegal: "Legal Notice",
      title: "Legal Notice",
      backHome: "Back to Home",
    },
  },
};

export type Translations = (typeof translations)["fr"];
