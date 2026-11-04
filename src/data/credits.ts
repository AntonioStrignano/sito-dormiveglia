export interface Credit {
  id: string;
  work: string;
  author: string;
  role: string;
  instagramUrl: string;
  linkLabel?: string;
}

// Placeholder da sostituire con i dati reali.
export const credits: Record<string, Credit> = {
  "hero-home": {
    id: "hero-home",
    work: "Illustrazione di copertina",
    author: "[Nome Cognome]",
    role: "[Illustrazione e composizione della grafica]",
    instagramUrl: "https://www.instagram.com/",
  },
  "hero-gertie": {
    id: "hero-gertie",
    work: "Banner Gertie Animation Prize",
    author: "[Nome Cognome]",
    role: "[Illustrazione e lettering]",
    instagramUrl: "https://www.instagram.com/",
  },
  "foto-sede": {
    id: "foto-sede",
    work: "Fotografia della facciata",
    author: "Andriaviva.it",
    role: "Fotografia della sede, rielaborata con le indicazioni dell'ingresso",
    instagramUrl: "https://www.andriaviva.it/",
    linkLabel: "andriaviva.it",
  },
  "locandina-giovedi-12": {
    id: "locandina-giovedi-12",
    work: "Locandina: Alla ricerca della valle incantata",
    author: "[Nome Cognome]",
    role: "[Illustrazione e impaginazione della locandina]",
    instagramUrl: "https://www.instagram.com/",
  },
  "locandina-venerdi-13": {
    id: "locandina-venerdi-13",
    work: "Locandina: Linda e il pollo",
    author: "[Nome Cognome]",
    role: "[Illustrazione e impaginazione della locandina]",
    instagramUrl: "https://www.instagram.com/",
  },
  "locandina-sabato-14": {
    id: "locandina-sabato-14",
    work: "Locandina: Gertie Animation Prize",
    author: "[Nome Cognome]",
    role: "[Illustrazione e impaginazione della locandina]",
    instagramUrl: "https://www.instagram.com/",
  },
  "locandina-domenica-15": {
    id: "locandina-domenica-15",
    work: "Locandina: La fortuna di Nikuko",
    author: "[Nome Cognome]",
    role: "[Illustrazione e impaginazione della locandina]",
    instagramUrl: "https://www.instagram.com/",
  },
};

export const creditList = Object.values(credits);
