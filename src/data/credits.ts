export interface Credit {
  id: string;
  work: string;
  author: string;
  instagramUrl: string;
  linkLabel?: string;
}

export const credits: Record<string, Credit> = {
  "hero-home": {
    id: "hero-home",
    work: "Locandina principale dell'evento",
    author: "Savi Lomuscio",
    instagramUrl: "https://www.instagram.com/basil_of_the_nimh/",
  },
  "foto-sede": {
    id: "foto-sede",
    work: "Fotografia della facciata",
    author: "Andriaviva.it",
    instagramUrl: "https://img.andriaviva.it/library/media/dsc05911(1).jpg",
    linkLabel: "Immagine originale su Andriaviva.it",
  },
  "locandina-giovedi-12": {
    id: "locandina-giovedi-12",
    work: "Locandina: Alla ricerca della valle incantata",
    author: "Nicola Manuto",
    instagramUrl: "https://www.instagram.com/inkboy89/",
  },
  "locandina-venerdi-13": {
    id: "locandina-venerdi-13",
    work: "Locandina: Linda e il pollo",
    author: "Nicola Sterlicchio",
    instagramUrl: "https://www.instagram.com/nicola.sterlicchio/",
  },
  "locandina-sabato-14": {
    id: "locandina-sabato-14",
    work: "Locandina: Gertie Animation Prize",
    author: "Mattia Buonvino",
    instagramUrl: "https://www.instagram.com/sorciove/",
  },
  "locandina-domenica-15": {
    id: "locandina-domenica-15",
    work: "Locandina: La fortuna di Nikuko",
    author: "Savi Lomuscio",
    instagramUrl: "https://www.instagram.com/basil_of_the_nimh/",
  },
};

export const creditList = Object.values(credits);
