export type ProgramEvent = {
  date: string;
  day: string;
  title: string;
  kind: string;
  doors: string;
  screening: string;
};

export const program: ProgramEvent[] = [
  {
    date: "2026-11-12",
    day: "Giovedì 12 novembre",
    title: "Alla ricerca della valle incantata",
    kind: "Proiezione",
    doors: "20:00",
    screening: "21:00",
  },
  {
    date: "2026-11-13",
    day: "Venerdì 13 novembre",
    title: "Linda e il pollo",
    kind: "Proiezione",
    doors: "20:00",
    screening: "21:00",
  },
  {
    date: "2026-11-14",
    day: "Sabato 14 novembre",
    title: "Gertie Animation Prize",
    kind: "Proiezione e premio",
    doors: "20:00",
    screening: "21:00",
  },
  {
    date: "2026-11-15",
    day: "Domenica 15 novembre",
    title: "La fortuna di Nikuko",
    kind: "Proiezione",
    doors: "20:00",
    screening: "21:00",
  },
];