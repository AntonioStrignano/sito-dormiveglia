# Handoff

## Stato

Progetto Astro statico in italiano, con anteprima locale e hosting scelto su Netlify. Build verificata in precedenza con `npm run build`. Server di sviluppo avviato su `http://localhost:4321/`. Palette corrente: fondo nero e testo verde fluorescente. Le immagini mantengono il rapporto d'aspetto anche su mobile; la pagina Gertie usa la grafica verticale della story.

Pagine: Home, Programma, Gertie Animation Prize, Archivio placeholder e Contatti (`/contatti/`; il vecchio `/info/` reindirizza). Nella pagina Programma la grafica precede i contenuti testuali, che restano trascritti in HTML; placeholder visibili per i dati e i link non ancora forniti.

Pagina Contatti: foto della facciata a sinistra e informazioni pratiche a destra su desktop; su mobile i dati e le CTA precedono la foto. Accessibilità e contatti sono affiancati da tablet in su, con divisori e senza card. Sede e orari (porte 20:00, proiezioni 21:00), ingresso gratuito con prenotazione consigliata e circa 40 posti per serata. CTA “Indicazioni” con icona pixel-art per il link Google Maps e “Prenota un posto”; email festival e collettivo, Instagram, rampa per carrozzine e bagno accessibile. Foto della facciata 16:9 in `public/images/Ingresso -.png`; evitare embed Google Maps.

Homepage: chiusa per il momento.

Pagina Programma: timeline di 4 card (`src/components/ProgramCard.astro`) con locandina 2:3 a sinistra e info a destra, senza dialog né typewriter. Da tablet in su le info sono sempre aperte; su mobile stanno dietro `[+] Altre info` (`<details>`). Le card hanno `scroll-margin-top: 7rem` per restare visibili sotto la navigazione sticky quando si raggiungono tramite ancora. Copy Gertie definitivo inserito; tre trailer collegati tramite `trailerUrl` in `programma.ts` e mostrati come CTA secondaria, accanto alla prenotazione. Gertie mantiene il link alla propria pagina. I dialog film in homepage puntano alla card corrispondente tramite ancora (`/programma/#<id>`). Locandine verticali definitive in arrivo a breve; al momento sono usate le grafiche disponibili. JSON-LD `ScreeningEvent` per serata. `EventCard.astro` non è più usato.

Homepage: rimossa l'etichetta "In aggiornamento" dalla giuria, i cui profili sono completi. Le anteprime Gertie restano entro il contenitore di pagina: su desktop la giuria è una griglia a 4 colonne e i corti sono una griglia 4x2 con immagini inset di 8px; su mobile entrambe diventano caroselli scrollabili. Il dialog giuria ha altezza fissa nel viewport, intestazione e azioni restano ferme, e la bio usa lo spazio residuo senza limite `max-height` aggiuntivo; lo scroll segue ogni carattere digitato quando il testo supera lo spazio visibile. CTA dei dialog riordinate: "Scopri Gertie" è primaria, Instagram secondaria e mostra il tag ricavato dall'URL del profilo.

## Piano di bonifica

Piano in `docs/piano-bonifica.md` (fasi 0-9). Hosting scelto: Netlify, non GitHub Pages (workflow e `CNAME` da rimuovere in fase 8). Implementazione avviata: hero homepage con artwork AndriaSmart full-bleed senza overlay/località, logo centrato nel proprio H1 e copy allineato alla griglia delle sezioni; data alla stessa scala dell'H2 (24–36 px). Typewriter CSS sequenziale a 16 ms per carattere: la riga attiva ha un underscore temporaneo, quelle completate restano visibili, le CTA restano statiche; sotto 512 px `d'animazione.` è una seconda riga esplicita, inline da tablet/desktop; reduced-motion mostra subito il testo completo. Spaziatura superiore delle content section condivisa ridotta a 12–24 px, con 24 px di padding interno. Card delle tre proiezioni con dialog, doppia CTA sticky in fondo e X sticky su mobile; banner Gertie full-bleed sopra il teaser; placeholder Instagram con link al profilo. Feed automatico da decidere nella fase finale. Pagina Sponsor e trasparenza con placeholder PDF; lista di richieste in `docs/cose-da-chiedere.md`. Le immagini restanti possono rimanere placeholder. Requisiti SEO, legali e cookie in `docs/requisiti-legali-seo.md`.

## Font

- Pixel Operator Mono Regular/Bold: applicato al sito e self-hosted tramite import Astro dai file TTF in `Grafiche dormiveglia/pixel_operator (1)/`; la licenza inclusa è CC0.
- Italipixel: applicato ai numeri delle date nel programma. Per l'uso non-profit le istruzioni chiedono di avvisare l'autore via email (vedi `docs/cose-da-chiedere.md`); la donazione è un'alternativa, non un requisito.
- I file TTF restano da convertire in woff2 per ridurre il peso.

## Documenti

- `docs/grafiche-necessarie.md`: elenco di grafiche e loghi da fornire (misure e formati).
- `docs/gertie-info-richieste.md`: informazioni da fornire per la pagina Gertie.
- `docs/cose-da-chiedere.md`: lista operativa di informazioni e documenti da chiedere.

## Da completare

- Richiedere al reparto grafico la hero homepage finale, con immagine, logo e testi già impaginati in versioni desktop e mobile; l'illustrazione AndriaSmart è già disponibile.
- Schede dei tre film: lingua/sottotitoli ed età consigliata.
- Locandine verticali definitive dei film e di Gertie 2026 (attese a breve).
- Programma dettagliato, giuria e corti selezionati Gertie 2026; candidature già chiuse.
- Dati e tempi di conservazione raccolti dal Google Form; URL già inserito nel sito.
- Storico Gertie 2025: vincitore, menzioni, poster e link/video.
- Breve presentazione del collettivo KA-POW! e documenti PDF per la pagina sponsor/trasparenza, se approvati.
- Privacy policy e dati del titolare da verificare prima della pubblicazione.
- Configurazione DNS per `dormivegliafest.it` e collegamento a Netlify (hosting attuale).
- Dati del titolare (collettivo KA-POW!) e referente per privacy policy.

## Comandi

- `npm run dev` avvia l'anteprima locale.
- `npm run build` genera il sito statico.
- `npm run preview` serve la build localmente.