export type ProgramDetails = {
  country: string;
  year: number;
  duration: string;
  categories: string[];
  synopsis: string;
  credits: { label: string; value: string }[];
  award?: string;
  sourceUrl: string;
};

export type ProgramEvent = {
  date: string;
  day: string;
  title: string;
  kind: string;
  doors: string;
  screening: string;
  details: ProgramDetails;
};

export const program: ProgramEvent[] = [
  {
    date: "2026-11-12",
    day: "Giovedì 12 novembre",
    title: "Alla ricerca della valle incantata",
    kind: "Proiezione",
    doors: "20:00",
    screening: "21:00",
    details: {
      country: "USA, Irlanda",
      year: 1988,
      duration: "69 min",
      categories: ["Animazione per famiglie"],
      synopsis:
        "Un gruppo di cuccioli di dinosauri parte alla scoperta del mondo per riuscire a raggiungere le loro famiglie nella Valle Incantata. Una storia che ci ricorda l’importanza dell’amicizia e della solidarietà, un capolavoro di animazione tradizionale che emoziona generazioni di spettatori.",
      credits: [
        { label: "Regia", value: "Don Bluth" },
        { label: "Protagonista", value: "Littlefoot e i cuccioli di dinosauri" },
        { label: "Musiche", value: "James Horner" },
        {
          label: "Produzione",
          value: "Universal Pictures, Sullivan Bluth Studios, Amblin Entertainment",
        },
      ],
      sourceUrl: "https://andriasmart.fivelab.it/template-detail/65",
    },
  },
  {
    date: "2026-11-13",
    day: "Venerdì 13 novembre",
    title: "Linda e il pollo",
    kind: "Proiezione",
    doors: "20:00",
    screening: "21:00",
    details: {
      country: "Francia, Italia",
      year: 2023,
      duration: "75 min",
      categories: ["Animazione per famiglie"],
      synopsis:
        "Una mamma fa i salti mortali per mantenere la promessa fatta alla figlia: preparare il suo piatto di pollo preferito. Una commedia che trasmette il calore dei ricordi, della comunità e dei piccoli gesti che legano le persone. Un capolavoro di animazione franco-italiano celebrato nei maggiori festival internazionali.",
      credits: [
        { label: "Regia", value: "Chiara Malta, Sébastien Laudenbach" },
        { label: "Protagonista", value: "Linda" },
        { label: "Produzione", value: "Dolce Vita Films, Palosanto Films" },
      ],
      award: "Premio César 2024 per il miglior film d’animazione",
      sourceUrl: "https://andriasmart.fivelab.it/template-detail/66",
    },
  },
  {
    date: "2026-11-14",
    day: "Sabato 14 novembre",
    title: "Gertie Animation Prize",
    kind: "Proiezione e premio",
    doors: "20:00",
    screening: "21:00",
    details: {
      country: "Europa",
      year: 2026,
      duration: "Varia (1-5 min per corto)",
      categories: [
        "Animazione sperimentale",
        "Animazione indipendente",
        "Cortometraggi d’autore",
      ],
      synopsis:
        "Sul grande schermo i corti selezionati per il Gertie Animation Prize 2026, il concorso che celebra la forza e la creatività dell’animazione in tutte le sue forme. Stili diversi, voci nuove, storie sorprendenti: un viaggio unico dentro l’immaginario animato contemporaneo creato da animatori e collettivi indipendenti. Durante la serata sarà svelato il vincitore della prima edizione!",
      credits: [
        { label: "Regia", value: "Animatori e Collettivi indipendenti" },
        { label: "Produzione", value: "Animatori e Collettivi indipendenti" },
      ],
      award: "Gertie Animation Prize 2026",
      sourceUrl: "https://andriasmart.fivelab.it/template-detail/67",
    },
  },
  {
    date: "2026-11-15",
    day: "Domenica 15 novembre",
    title: "La fortuna di Nikuko",
    kind: "Proiezione",
    doors: "20:00",
    screening: "21:00",
    details: {
      country: "Giappone",
      year: 2021,
      duration: "97 min",
      categories: [
        "Animazione per famiglie",
        "Racconto di formazione",
        "Storie di famiglia",
      ],
      synopsis:
        "Kikuko, responsabile e con la testa sulle spalle, vive con la madre Nikuko, svampita e pasticciona, in un villaggio di pescatori in Giappone. Un racconto di crescita dolce e toccante che celebra le famiglie “diverse”, l’amore incondizionato e i legami che ci rendono umani. Una storia di formazione che parla di comunità, nutrimento e affetto.",
      credits: [
        { label: "Regia", value: "Ayumu Watanabe" },
        { label: "Protagonista", value: "Kikuko, Nikuko" },
        { label: "Produzione", value: "Studio 4°C, Yoshimoto Kogyo" },
      ],
      sourceUrl: "https://andriasmart.fivelab.it/template-detail/68",
    },
  },
];