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
  href: string;
  linkLabel: string;
  external?: boolean;
  variant?: "jury" | "short";
  image?: ImageMetadata;
  imageAlt?: string;
  placeholderLabel?: string;
}

export const gertie = {
  title: "Gertie Animation Prize",
  edition: "Seconda edizione 2026",
  deadline: "25 settembre 2026",
  isClosed: true,
  regulationUrl: null as string | null,
  applicationUrl: null as string | null,
  history: [
    {
      year: 2025,
      poster: null as string | null,
      winner: null as string | null,
      mentions: null as string | null,
      link: null as string | null,
    },
  ],
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

export const shortFilmPreviews: GertiePreviewItem[] = shortFilmImages.map((image, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    id: `corto-${number}`,
    title: `Corto selezionato ${number}`,
    details: "Titolo, regia, anno e durata in aggiornamento.",
    href: `/gertie-animation-prize/corti/corto-${number}/`,
    linkLabel: "Apri scheda",
    image,
    imageAlt: `Immagine segnaposto del corto selezionato ${number}.`,
    variant: "short",
  };
});