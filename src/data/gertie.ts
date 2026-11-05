import type { ImageMetadata } from "astro";
import mariaRosariaPortrait from "../../Grafiche dormiveglia/cards giuria/maria rosaria dell'olio.png";
import saraPriorelliPortrait from "../../Grafiche dormiveglia/cards giuria/sara priorielli.png";
import adolfoDiMolfettaPortrait from "../../Grafiche dormiveglia/cards giuria/adolfo di molfetta.png";
import giulioDeTomaPortrait from "../../Grafiche dormiveglia/cards giuria/giulio de toma.png";
import shortFilmImage01 from "../../Grafiche dormiveglia/cards corti/1.png";
import shortFilmImage02 from "../../Grafiche dormiveglia/cards corti/2.png";
import shortFilmImage03 from "../../Grafiche dormiveglia/cards corti/3.png";
import shortFilmImage04 from "../../Grafiche dormiveglia/cards corti/4.png";
import shortFilmImage05 from "../../Grafiche dormiveglia/cards corti/5.png";
import shortFilmImage06 from "../../Grafiche dormiveglia/cards corti/6.png";
import shortFilmImage07 from "../../Grafiche dormiveglia/cards corti/7.png";
import shortFilmImage08 from "../../Grafiche dormiveglia/cards corti/8.png";

export interface GertiePreviewItem {
  id: string;
  title: string;
  details: string;
  bio?: string;
  synopsis?: string;
  authorLinks?: { label: string; href: string }[];
  href: string;
  linkLabel: string;
  external?: boolean;
  variant?: "jury" | "short";
  image?: ImageMetadata;
  publicImage?: { src: string; width: number; height: number };
  imageAlt?: string;
  placeholderLabel?: string;
  dialogEyebrow?: string;
  cardCta?: string;
  primaryAction?: { label: string; href: string; external?: boolean };
  authorLink?: { label: string; href: string };
}

export const gertie = {
  title: "Gertie Animation Prize",
  edition: "Seconda edizione 2026",
  history: [
    {
      year: 2025,
      winner: "Sara Priorelli",
      film: "My Good Boy",
    },
  ],
};

export const winnerPreview: GertiePreviewItem = {
  id: "my-good-boy",
  title: "My Good Boy",
  details: "2025 · Sara Priorelli",
  bio: "Un corto che, con uno sguardo profondo e sensibile, racconta la giornata di una donna impegnata a prendersi cura del suo cane sovrappeso, una routine fatta di affetto, abitudine e dipendenza reciproca.\n\nUn racconto intimo, tenero e inquieto allo stesso tempo, capace di parlare di amore, controllo e fragilità con grande forza visiva.\n\n“My Good Boy” si aggiudica così il primo Gertie Animation Prize, il riconoscimento del Dormiveglia Animation Film Fest dedicato all’animazione indipendente e alle nuove voci del cinema animato contemporaneo.",
  href: "https://www.youtube.com/watch?v=Jxrq3XGVmys",
  linkLabel: "Guarda il trailer",
  external: true,
  variant: "jury",
  publicImage: { src: "/images/gertie-2025-winner.webp", width: 1080, height: 1350 },
  imageAlt: "Post Instagram di Dormiveglia per “My Good Boy” di Sara Priorelli, vincitore del Gertie Animation Prize 2025.",
  dialogEyebrow: "Vincitore // Gertie 2025",
  cardCta: "Leggi la scheda",
  primaryAction: { label: "Guarda il trailer", href: "https://www.youtube.com/watch?v=Jxrq3XGVmys", external: true },
  authorLink: { label: "Instagram @prosarapi", href: "https://www.instagram.com/prosarapi/" },
};

export const juryPreviews: GertiePreviewItem[] = [
  {
    id: "maria-rosaria-dellolio",
    title: "Maria Rosaria Dell'Olio",
    details: "Storyboard artist",
    bio: "Maria Rosaria nasce a Terlizzi in una calda giornata nel 1996.\n\nNonostante un’infanzia priva di eventi drammatici, impara presto che la vita può riservare una delusione dopo l’altra, perciò si distrae disegnando e guardando cartoni animati. Si distrae talmente tanto che invece di iscriversi all’università, finisce per studiare animazione 2D per poi lavorare principalmente come storyboard artist.\n\nDal 2019 collabora con studi italiani e stranieri (Rainbow, Movimenti, Jellyfish, Bow Bag Films e molti altri) lavorando su serie TV e lungometraggi.",
    href: "https://www.instagram.com/_techichi_/",
    linkLabel: "Instagram",
    external: true,
    variant: "jury",
    image: mariaRosariaPortrait,
    imageAlt: "Maria Rosaria Dell'Olio, storyboard artist.",
  },
  {
    id: "sara-priorelli",
    title: "Sara Priorelli",
    details: "Illustratrice e regista di animazione",
    bio: "Nel 2021 si è laureata presso l’Accademia di Belle Arti di Urbino e ha co-diretto il cortometraggio “Sweet Dreams”. Ha inoltre frequentato un Master in Animazione presso la Moholy-Nagy University of Arts di Budapest, dove si è diplomata con il film “My Good Boy”, selezionato in vari festival internazionali tra cui Pictoplasma e Ottawa Animation Festival.\n\nNel 2025 ha vinto la prima edizione del Gertie Animation Prize con il cortometraggio “My Good Boy”.",
    href: "https://www.instagram.com/prosarapi/",
    linkLabel: "Instagram",
    external: true,
    variant: "jury",
    image: saraPriorelliPortrait,
    imageAlt: "Sara Priorelli, illustratrice e regista di animazione.",
  },
  {
    id: "adolfo-di-molfetta",
    title: "Adolfo Di Molfetta",
    details: "Regista, autore e animatore 2D",
    bio: "Il suo percorso professionale intreccia cinema d’animazione d’autore e produzioni internazionali, con collaborazioni per Netflix, Rai, Warner Bros., DreamWorks e Cartoon Network. Ha contribuito a serie di successo come Lo straordinario mondo di Gumball e a progetti firmati da Studio Bozzetto.\n\nAutore di cortometraggi premiati in numerosi festival internazionali, affianca all’attività creativa un costante impegno nella formazione e nella diffusione della cultura dell’animazione.",
    href: "https://www.instagram.com/adolfo_di_molfetta/",
    linkLabel: "Instagram",
    external: true,
    variant: "jury",
    image: adolfoDiMolfettaPortrait,
    imageAlt: "Adolfo Di Molfetta, regista, autore e animatore 2D.",
  },
  {
    id: "giulio-de-toma",
    title: "Giulio De Toma",
    details: "2D senior animator e tutor 2D animation",
    bio: "Nasce a Canosa di Puglia nel 1988. Si diploma presso l’Accademia di Belle Arti di Bari e in seguito al Centro Sperimentale di Cinematografia di Torino.\n\nAnimatore senior, lavora a diversi progetti internazionali di lungometraggi e serie televisive animate, tra cui The Amazing World of Gumball (Cartoon Network), Kensuke’s Kingdom (Lupus Films), Decorado (Uniko), Buñuel in the Labyrinth of the Turtles (Glow Animation Studio), Quentin Blake’s Box of Treasures (Kong) e Strappare lungo i bordi (Netflix).\n\nDopo aver vissuto a Torino, Londra, Lisbona e Amsterdam, oggi risiede a Bisceglie, in Puglia. Lavora da freelance come animatore 2D e insegna animazione 2D online presso Vivo Animation e disegno dal vero.",
    href: "https://www.instagram.com/giulio_de_toma88/",
    linkLabel: "Instagram",
    external: true,
    variant: "jury",
    image: giulioDeTomaPortrait,
    imageAlt: "Giulio De Toma, 2D senior animator e tutor 2D animation.",
  },
];

const shortFilmImages = [
  shortFilmImage01,
  shortFilmImage02,
  shortFilmImage03,
  shortFilmImage04,
  shortFilmImage05,
  shortFilmImage06,
  shortFilmImage07,
  shortFilmImage08,
];

const shortFilmDetails = [
  {
    title: "La Cattiva Strada",
    creator: "Giacomo Calderoni",
    synopsis: "Il mondo è finito: l'abbiamo consumato. Partiamo per colonizzarne uno nuovo, lanciando bombe di pace. Questa è una storia d'amore che nasce da una storia di guerra: l'odio è il primo sentimento, l'amore viene dopo. Con l'odio il mondo è esploso, ma spero che dal nostro amore possiamo crearne uno nuovo. Il mondo sta finendo; almeno viviamone insieme la fine.",
    authorLinks: [{ label: "Instagram @boyz_jiek", href: "https://www.instagram.com/boyz_jiek/" }],
  },
  {
    title: "Rita",
    creator: "Francesca Colombara",
    synopsis: "Rita era mia nonna, una grande lumaca che si muoveva con un girello. È morta nel 2024, e questo cortometraggio racconta la storia del legame che ci univa. Rita ha vissuto una vita piena, circondata da molte persone che le volevano bene, e aveva una grande passione per la cucina, in particolare per le cozze.",
    authorLinks: [{ label: "Instagram @francesca_colombara", href: "https://www.instagram.com/francesca_colombara/" }],
  },
  {
    title: "Acceleration",
    creator: "Stepan Crani",
    synopsis: "In un giorno nevoso d'inverno, un ragazzo riceve una nuova bicicletta e non riesce a resistere alla tentazione di usarla. Mentre pedala, la sua immaginazione lo porta ben oltre il cortile, trasformando la corsa in una serie di avventure sempre più sfrenate. La realtà attende silenziosamente il momento in cui la fantasia raggiunge il suo limite.",
    authorLinks: [{ label: "Instagram @stepancrani", href: "https://www.instagram.com/stepancrani/" }],
  },
  {
    title: "Pedro Hermano",
    creator: "Bessufekad G. Moretti",
    synopsis: "Pedro Hermano è un barbone che, spinto da un'infanzia da fanatico di supereroi e libero da beni frivoli, dedica la vita a combattere il crimine e aiutare il prossimo, ignorando la propria incolumità...anche a rischio della vita!",
    authorLinks: [{ label: "Instagram @bessuanimations", href: "https://www.instagram.com/bessuanimations/" }],
  },
  {
    title: "Le Case di Achille",
    creator: "Nespy 5euro",
    synopsis: "Questo cortometraggio è nato in modo spontaneo, in un solo pomeriggio. Un giorno d’estate, mentre io e mio nipote Achille cercavamo rifugio dal caldo, lui ha iniziato a raccontarmi una dopo l’altra le sue infinite storie fantastiche. Ho deciso di registrarlo, lasciando che la sua immaginazione scorresse libera.",
    authorLinks: [{ label: "Instagram @nespy5euro", href: "https://www.instagram.com/nespy5euro/" }],
  },
  {
    title: "Sotto i Pini",
    creator: "Noctu Animation",
    synopsis: "Tra lo starnazzare dei gabbiani e il frusciare delle fronde della pineta si muove qualcosa. Sotto l’ombra dei pini si materializzano le vite delle persone che hanno vissuto la storia antica d’Italia. I loro destini, le loro fortune, le loro tragedie.",
    authorLinks: [{ label: "Instagram @noctu.animation", href: "https://www.instagram.com/noctu.animation/" }],
  },
  {
    title: "A Perfect Storm",
    creator: "A. Zonca e G. Cecini",
    synopsis: "La storia segue la routine quotidiana di una cassiera che si ritroverà ad affrontare una serie di fastidiosi inconvenienti durante la sua giornata. Questi eventi minano il suo equilibrio emotivo e solo l'intervento della figlia riuscirà a calmare la situazione.",
    authorLinks: [
      { label: "Instagram @anna.by.art", href: "https://www.instagram.com/anna.by.art/" },
      { label: "Instagram @gretisvibes", href: "https://www.instagram.com/gretisvibes/" },
    ],
  },
  {
    title: "Antonio",
    creator: "Studio Creatura",
    synopsis: "Durante un rito arboreo il gioco di un bambino si rivela essere una profonda riflessione sull’esistenza: in un piccolo villaggio ai margini del bosco si celebra il matrimonio degli alberi, simbolo di unione tra la terra e il cielo. Attraverso il gioco infantile di Antonio, con la sua scatola di formiche, viviamo una semplice storia di equilibrio tra uomini, animali e natura che ci porta a interrogarci sull'esistenza del divino.",
    authorLinks: [{ label: "Instagram @studio_creatura", href: "https://www.instagram.com/studio_creatura/" }],
  },
];

export const shortFilmPreviews: GertiePreviewItem[] = shortFilmDetails.map((film, index) => ({
  id: `corto-${String(index + 1).padStart(2, "0")}`,
  title: film.title,
  details: film.creator,
  synopsis: film.synopsis,
  authorLinks: film.authorLinks,
  href: "/gertie-animation-prize/2026/",
  linkLabel: "Scopri Gertie",
  image: shortFilmImages[index],
  imageAlt: `Immagine dal corto ${film.title}.`,
  variant: "short",
}));