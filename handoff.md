# Handoff

## Stato

Progetto Astro statico in italiano, con anteprima locale e hosting scelto su Netlify. Build verificata in precedenza con `npm run build`. Server di sviluppo avviato su `http://localhost:4321/`. Palette corrente: fondo nero e testo verde fluorescente. Le immagini mantengono il rapporto d'aspetto anche su mobile; la pagina Gertie usa la grafica verticale della story.

Pagine: Home, Programma, Gertie Animation Prize, Archivio placeholder, Info/Contatti. Nella pagina Programma la grafica precede i contenuti testuali, che restano trascritti in HTML; placeholder visibili per i dati e i link non ancora forniti.

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

- Capienza, email/contatto ufficiale, informazioni di accessibilità e indicazioni per raggiungere la sede.
- Richiedere al reparto grafico la hero homepage finale, con immagine, logo e testi già impaginati in versioni desktop e mobile; l'illustrazione AndriaSmart è già disponibile.
- Schede dei tre film: sinossi, crediti essenziali, lingua/sottotitoli, età consigliata e trailer.
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