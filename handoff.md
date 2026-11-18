# Handoff

## Email credito web — 18 novembre 2026

- Aggiunta su richiesta di Antonio `a.strignano@yahoo.it` come link `mailto:` accanto a Design e sviluppo web — Antonio Strignano, solo nelle note legali. Modello crediti con campo email opzionale, link degli altri autori invariati. Build 11 pagine superata; verificato un unico mailto corretto nel credito e conservazione dei collegamenti preesistenti; diff senza errori whitespace.
- Nessuna pubblicazione avviata: la valutazione positiva dell'utente non è una richiesta di deploy.

## Correzione presentazione premiati — 18 novembre 2026

- Indicazione corretta da Antonio: i premiati DEVONO restare card apribili con dialog, non schede editoriali complete in pagina. Fuori dalla card restano solo i complimenti al vincitore e la motivazione della menzione; sinossi, bio e link nei dialog.
- `AwardResult.astro` riusa nuovamente `ShortFilmPreviewCard` per hub e pagina2026, con card affiancate desktop/impilate mobile e commento sotto ciascuna card. Conservati fasce diagonali, testo completo nei dialog e azioni Guarda il corto / Guarda il teaser. Hero e dialog della mascotte non modificati.
- Questa correzione prevale sulla presentazione editoriale descritta nelle sezioni precedenti. Build superata; test Chromium a 390 e 1440 px su hub e pagina2026: due card e due dialog, soltanto commenti visibili fuori, bio e video corretti nei dialog, nessun overflow.

## Revisione hero e premi — 18 novembre 2026

### Stato finale

- Revisione completata: hero animata desktop/mobile con nuova immagine iniziale, altezza desktop 4:1 invariata e bande nere; menzione diagonale; video dei due premiati; copy integrale direttamente nelle pagine Gertie; CTA edizione2026 come pulsanti; solo dialog dinosaurino adattivo con footer fermo.
- Verifica: build 11 pagine, nessun errore editor in `src`; suite Chromium/WebKit su sette pagine e cinque viewport superata. Verificati tempi 2000/500 ms su mobile/desktop, pausa/reduced-motion/noJS, prima immagine corretta, bande nere tramite pixel, assenza layout shift/overflow e integrità del testo della fascia menzione.
- Dialog: altezza da 812 a 621 px a 390×844; in landscape corpo scorrevole e footer fermo. Test animazione completa, altezza stabile durante typewriter, resize/orientamento, testo200%, chiusura e focus superati su entrambi i motori. Attendere transizioni/evento close nei test per evitare screenshot intermedi vuoti o controlli focus prematuri; nessuna prova su iPhone fisico.
- Link interni/ancore verificati; video YouTube esterni senza embed o richieste anticipate. Screenshot finali in `/tmp/dormiveglia-validation/` (hero-first/last con larghezza, dialog-complete, premi-integrali). Anteprima build sempre su `http://127.0.0.1:4322/`. Nessun deploy o commit.

### Registro intermedio

- Implementazione approvata. Hero aggiornata: prima SEE YOU NEXT YEAR?, poi illustrazione precedente su mobile / banner largo precedente su desktop. Loop su entrambi, 2000 ms / dissolvenza 500 ms, pausa e reduced-motion; dimensioni dei contenitori conservate, immagini intere con sfondo nero e bande laterali dove necessario.
- Nuova immagine iniziale anche senza JS/reduced-motion; il timer attende il caricamento della seconda. Verifica build e browser della revisione da completare.
- Build hero superata. Menzione KA-POW! ora diagonale nelle card condivise (home/selezione/risultati). Azioni video nei dati e nei dialog: Le Case di Achille → Guarda il corto (`vzH6gg35nsQ`); Sotto i Pini → Guarda il teaser (`bq7P1Zi-Ub0`). Link autori e azioni degli altri corti conservati; niente embed.
- Build/video verificati su home e pagina 2026. Sezioni premi di hub e pagina2026 ora usano `AwardResult.astro`: presentazione/motivazione, sinossi e bio integrali, immagini e CTA video/Instagram direttamente leggibili in pagina (non un grande pulsante). Selezione e dialog dei corti conservati.
- Home: presentazione del vincitore e motivazione della menzione riportate integralmente nel teaser. CTA a edizione2026/premi dall'hub e archivio generale rese veri pulsanti del sistema esistente. Verifica build/layout del blocco da eseguire.
- Build copy/editoriale superata. Dialog del solo dinosaurino marcato `data-adaptive-dialog`: altezza naturale con limite viewport, corpo scorrevole separato da azioni ferme. Controller misura il box completo prima del typewriter per evitare crescita a ogni carattere, ricalcola su resize e conserva ripristino focus/Escape/backdrop. Nessun nuovo comportamento dimensionale per corti/giuria/film.
- Misura iniziale prima del fix: 812 px a 390×844, 343 px a 667×375. Verifica comparativa e regressione browser da completare.
- Prima verifica dialog superata: 621 px a 390×844, 343 px in landscape con solo corpo scorrevole; posizione footer stabile in entrambi i casi. Nessun errore editor in `src`. Test temporanei esistenti aggiornati alle nuove aspettative (desktop animato, prima immagine nuova, copy in pagina e video), senza aggiungere dipendenze al progetto.
- Questa sezione prevale sui riepiloghi della consegna precedente sotto. Fascia menzione, video, copy più integrale, pulsante edizione e dialog mascotte sono i prossimi interventi approvati; nessuna modifica prevista per crediti o archivio generale oltre alla CTA.

## Aggiornamento post-festival — 18 novembre 2026

- Completato: risultati Gertie con schede integrali e riconoscimenti, archivio festival 2025/2026, storico Gertie separato, crediti solo nelle note legali, dialog mobile e hero mobile alternata (2000 ms / dissolvenza 500 ms). Questa sezione prevale sulle descrizioni pre-evento sotto.
- Verifica finale: `npm run build` riuscita, 11 pagine; nessun errore editor in `src`, `git diff --check` pulito. Chromium e WebKit: sette pagine, dialog in 320×568 / 375×667 / 390×844 / 667×375 / 1440×900, chiusura e ritorno focus; film e locandine verificati. Hero: tempi, pausa, reduced-motion, desktop statico e assenza layout shift verificati. Nessun overflow, ID duplicato, link interno/ancora/immagine non valido o prenotazione attiva nelle superfici controllate; nessuna richiesta Instagram/Facebook.
- Verifica aggiuntiva WebKit con typewriter completo a 320×568 superata. Screenshot dei due fotogrammi, banner Gertie caricato, dialog e archivio in `/tmp/dormiveglia-validation/`. Nessuna prova su iPhone fisico; WebKit è emulazione browser desktop con viewport mobile.
- Anteprima finale attiva: `http://127.0.0.1:4322/`. Nessun deploy, commit o spostamento in sottodominio eseguito. Copertine recap e ulteriori foto/video possono essere aggiunti in seguito senza bloccare la raccolta attuale.

### Registro delle modifiche e verifiche intermedie

- Dati premi centralizzati nelle schede corti: “Le Case di Achille” di Nespy5euro vince il GAP 2026; “Sotto i Pini” di Noctu Animation riceve la Menzione d'Onore Collettivo KA-POW!. Presentazione/motivazione e bio provengono dal copy fornito da Antonio; sinossi esistenti conservate.
- Hero mobile integrata in `HeroArtwork.astro`: cambio ogni 2 secondi, dissolvenza 500 ms, pausa e reduced-motion; desktop invariato. Asset aggiuntivo fornito come `src/assets/hero/hero-see-you-next-year.jpg` (1439×900); originale mobile 1125×900. Riquadro stabile 4:3 e immagini intere senza crop su mobile.
- Modifiche preesistenti in docs/cose-da-chiedere.md, docs/tutto-da-chiedere.md, src/data/site.ts e questo handoff: conservarle.
- Prima build dei dati premi superata. Ora aggiunti sezione risultati 2026, fasce su tutte le card condivise e dettagli completi dei premiati; CTA Gertie orientate ai risultati e allo storico (hub in preparazione).
- Dialog mobile: altezza limitata da dvh, contenuto interamente scorrevole e immagine mascotte con altezza proporzionata esplicita, senza alterare la posizione della X. Verifica build/browser del blocco da eseguire.
- Build risultati/card superata. Creati `/archivio/` con i sei recap ricevuti (2026: giorni 1–4; 2025: giorno 1 e recap generale) e `/gertie-animation-prize/` con storico dei premi 2026 e 2025. Menu aggiornato preservando i dati titolare già modificati dall'utente.
- Crediti solo nelle note legali: Design e sviluppo web — Antonio Strignano; Identità grafica — Savi Lomuscio. Link credito opzionale; attribuzioni specifiche conservate.
- Archivio festival indipendente in `src/data/archivio.ts`: resta sul dominio principale. Nel futuro snapshot annuale escludere `src/pages/archivio.astro` e il dataset/asset usati solo da quella pagina; ricollegare menu al dominio principale e verificare sitemap. Nessuna migrazione/sottodominio eseguita ora.
- Nessun embed o risorsa remota Instagram: copertine non fornite, recap presentati come link editoriali. Browser di test installati solo in `/tmp/dormiveglia-validation`, senza cambiare dipendenze del progetto.
- Verifica archivi/crediti superata: build 11 pagine, sei URL esatti, nessun iframe e credito Antonio senza link fittizio.
- Rimosse CTA prenotazioni da header/footer/home/programma/dialog film/contatti; mantenuti dati storici e obblighi privacy del modulo. Home ora annuncia entrambi i premi; footer e contatti puntano all'archivio. Slider sospeso fuori viewport/tab nascosta, su desktop e con reduced-motion. Verifica build/browser del blocco da eseguire.
- Build hero/post-evento superata (11 pagine); nuova hero ottimizzata WebP circa 81 kB. Corretto il tipo del timer browser (`number`, non `NodeJS.Timeout`) segnalato dall'editor. Anteprima da avviare con cwd esplicita nella sottocartella progetto.
- Archivi impaginati con sezioni annuali non incorniciate, indice per anno e righe recap con link esterni; griglia risultati Gertie e vincitore 2025 responsive. Nessun placeholder o miniatura inventata.
- Anteprima della build attiva su `http://127.0.0.1:4322/` tramite `npm --prefix /Users/antonio/Desktop/kapow/sito-dormiveglia/sito-dormiveglia run preview -- --host 127.0.0.1 --port 4322`. I terminali async partono dalla cartella esterna: usare `--prefix`.
- Controlli browser temporanei preparati in `/tmp/dormiveglia-validation/check.mjs` per Chromium/WebKit, dialog in cinque viewport, timer hero, collegamenti/crediti e screenshot. Non sono dipendenze o file di test aggiunti al progetto. Esecuzione da completare.
- Prima prova browser ha rilevato overflow orizzontale causato dalle nuove etichette premio `sr-only` nei caroselli: aggiunto containing block locale (`position: relative`) alle card, senza mascherare overflow del body o cambiare il motore carosello. Ripetere la verifica.
- Chromium: passate 7 pagine e 25 aperture dialog in cinque viewport, più film e locandina; nessun overflow, ID duplicato o CTA prenotazione. Hero: verificati cicli 2000 ms, transizione 500 ms, pausa e stabilità del layout. Adeguato il test reduced-motion all'evento asincrono della media query; ripetizione Chromium/WebKit da completare.
- Verifica Chromium completata anche per reduced-motion/desktop/assenza richieste social. In WebKit rilevata mancata restituzione nativa del focus al trigger dopo chiusura: controller dialog aggiornato per memorizzare il pulsante di apertura e ripristinarvi esplicitamente il focus senza scroll. Ripetere stesso controllo sui due motori.

## Stato

Progetto Astro statico in italiano, con anteprima locale e hosting scelto su Netlify. Build verificata con `npm run build`. Server di sviluppo avviato su `http://localhost:4321/`. Palette corrente: fondo nero e testo verde fluorescente. Reticolo verde al 10% con passo 64px sul body: fisso da tablet/desktop, scorrevole su mobile fino a 48rem. Header e footer restano nero pieno senza griglia; card opache su `--color-surface` (`#0B1710`). Nessuna ombra decorativa su testo, bordi o pulsanti; restano gli outline di focus accessibili e la gerarchia di bordo della CTA primaria. CTA primaria verde con testo nero; CTA secondarie nere con testo/bordo verdi.

Pagine: Home, Programma, Gertie Animation Prize (`/2026/`; la pagina `/2025/` è stata rimossa), Contatti (`/contatti/`). Nessuna pagina Archivio per ora. Nella pagina Programma la grafica precede i contenuti testuali, che restano trascritti in HTML; placeholder visibili per i dati e i link non ancora forniti.

Pagina Contatti: foto della facciata a sinistra e informazioni pratiche a destra su desktop; su mobile i dati e le CTA precedono la foto. Accessibilità e contatti sono affiancati da tablet in su, con divisori e senza card. Sede e orari (porte 20:00, proiezioni 21:00), ingresso gratuito con prenotazione consigliata e circa 40 posti per serata. CTA “Indicazioni” con icona pixel-art per il link Google Maps e “Prenota un posto”; email festival `info@dormivegliafest.it`, email collettivo `collettivokapow@gmail.com`, Instagram, rampa per carrozzine e bagno accessibile. Foto della facciata 16:9 in `src/assets/venue/ingresso.png`; evitare embed Google Maps.

Homepage: chiusa per il momento. In `/programma/` rimossa la CTA finale di prenotazione (restano quelle sulle locandine). Hero: da 48,06rem in su `<picture>` con il banner `src/assets/hero/hero-desktop.png` (4:1, contiene già logo, data e luogo; il testo HTML della hero resta solo per screen reader, restano visibili le CTA); su mobile resta l'hero attuale (illustrazione + logo e testi in HTML).

Pagina Gertie 2026 (`/gertie-animation-prize/2026/`, file `src/pages/gertie-animation-prize/2026.astro`; `/gertie-animation-prize/` non esiste (nessun redirect); `/gertie-animation-prize/2025/` non esiste più: la vincitrice 2025 è una card nella sezione Edizioni precedenti (`#edizioni-precedenti`, stessa griglia `gertie-jury-grid` della giuria) di `/2026/` (`winnerPreview` in `src/data/gertie.ts`, post IG in `public/images/gertie-2025-winner.webp`), che apre lo stesso dialog della giuria con sinossi, trailer YouTube e Instagram di Sara; il menu "Gertie" (nome accessibile `Gertie Animation Prize` via `ariaLabel` in `site.ts`) punta a `/2026/` ed è attivo su tutte le pagine sotto `/gertie-animation-prize/`; non deve esistere `src/pages/gertie-animation-prize.astro`, che andrebbe in conflitto con il redirect): ordine hero, Corti, Giuria, Edizione 2025 (niente indice né sezione serata). Hero con il banner largo Gertie (`src/assets/gertie/banner.webp`, che contiene già titolo ed edizione: l'`h1` è solo per screen reader), una sola riga di copy (bozza: "Il premio europeo dei corti d'animazione indipendenti."; il testo completo, con porte e ingresso, è nel dialog), data, luogo e `INGRESSO GRATUITO` in Italipixel, CTA al form e al programma; a destra il dinosauro olografico (`public/images/gertie-mascotte.webp`, trasparente, ricavato da `gertie ritagliato sfondo nero.jpeg`; `gertie-mascotte.jpg` non è più usato) con scanlines mascherate sulla sagoma, flicker CRT lieve, glitch raro, suggerimento `> CHI È GERTIE?` e icona pixel-art di mouse con linee di click animate (nessun galleggiamento); il click apre un dialog "Chi è Gertie" con testo lorem. Reduced-motion: dinosauro statico. Su mobile il banner mantiene la proporzione originale (striscia bassa) e il dinosauro sta a destra accanto a titolo, data e luogo; le CTA restano nel primo schermo. Altre sezioni: in fondo un teaser compatto dell'edizione 2025 (coccarda placeholder, vincitrice, link a `/2025/`). Il banner Gertie in homepage ha "Prenota un posto" come CTA primaria e "Scopri Gertie" (`/2026/`) come secondaria; la home non linka più direttamente `/2025/`. Giuria: griglia 1x4 desktop e 2x2 mobile; alla prima comparsa in viewport le card si "accendono" una alla volta in ordine casuale a ogni caricamento della pagina (flicker CRT lieve, scansione della foto, typewriter, riga `> CARICO GIURIA... n/4`), senza animazione con reduced-motion. Corti: carosello 3D ellittico `src/components/ShortFilmOrbit.astro` (8 card su ellisse via transform) con rotazione continua (0,3 schede/s) che si blocca e si assesta sulla scheda più vicina con hover, focus, drag, dialog aperto o pulsante pausa/play; ellisse ampia con le card retrostanti che spuntano sopra, card solo immagine, slider a giro completo sotto il carosello per scorrerlo a mano e riga `> TITOLO // AUTORE_` sotto; frecce, tastiera, swipe; click su una card laterale la porta in primo piano, click sulla frontale apre il dialog. Con reduced-motion nessuna rotazione automatica e movimento istantaneo; senza JS è una lista scorrevole. Serata: riquadro compatto con CTA al form. Edizione 2025: coccarda (placeholder), vincitrice Sara Priorelli, link al corto vincitore ancora placeholder in `gertie.ts`. Regolamento e candidature rimossi dalla pagina. Testi del premio in lorem ipsum finché non arriva il materiale.

Pagina Programma: timeline di 4 card (`src/components/ProgramCard.astro`) con locandina 4:5 a sinistra e info a destra. Usa le quattro JPG definitive da `src/assets/locandine/`; Home mantiene le immagini precedenti. Le locandine sono trigger da tastiera per un dialog nativo alto quasi full-screen e largo quanto la locandina adattata su desktop (su mobile resta quasi full-width), con animazione dall’alto e zoom in-place; chiusura con Escape, pulsante o backdrop. Nella card la locandina si centra e si adatta all’altezza senza crop né deformazioni; su desktop ampio la colonna arriva a 29rem, su mobile resta sopra i contenuti. La sinossi resta in un box autonomo che cresce col testo, senza scrollbar forzata. La data completa è in Italipixel con corpo maggiore. CTA: “Prenota un posto” ha fondo verde accent e testo nero; le secondarie restano nere con testo/bordo verdi. Da tablet in su le info sono sempre aperte; su mobile stanno dietro `[+] Altre info` (`<details>`). Le card hanno `scroll-margin-top: 7rem` per restare visibili sotto la navigazione sticky quando si raggiungono tramite ancora. Copy Gertie definitivo inserito; tre trailer collegati tramite `trailerUrl` in `programma.ts` e mostrati come CTA secondaria, accanto alla prenotazione. Gertie mantiene il link alla propria pagina. I dialog film in homepage puntano alla card corrispondente tramite ancora (`/programma/#<id>`). JSON-LD `ScreeningEvent` per serata. Il link di prenotazione `site.bookingFormUrl` è sempre valorizzato: niente più fallback `null` nel codice.

Homepage: data dell'hero in Italipixel. Rimossa l'etichetta "In aggiornamento" dalla giuria, i cui profili sono completi. Le anteprime Gertie restano entro il contenitore di pagina: su desktop la giuria è una griglia a 4 colonne e i corti sono una griglia 4x2 con immagini inset di 8px; su mobile entrambe diventano caroselli scrollabili. Il dialog giuria ha altezza fissa nel viewport, intestazione e azioni restano ferme, e la bio usa lo spazio residuo senza limite `max-height` aggiuntivo; lo scroll segue ogni carattere digitato quando il testo supera lo spazio visibile. CTA dei dialog riordinate: "Scopri Gertie" è primaria, Instagram secondaria e mostra il tag ricavato dall'URL del profilo.

## Header, footer, legale, SEO

- Header: CTA "Prenota un posto" (`nav-cta`, sempre visibile; su mobile solo "Prenota" accanto a Menu); il menu mobile si chiude al click su un link e con Escape.
- Footer: CTA "Ci vediamo in sala?", colonne sede/esplora/contatti, riga legale con C.F. e link. Dati titolare (`owner`) e `legalLinks` in `src/data/site.ts`.
- Pagine legali: `/privacy/`, `/cookie/`, `/note-legali/`, `/accessibilita/`, `404`. Nessun banner cookie: GoatCounter (senza cookie) in `BaseLayout`, account `dormivegliafest`. Conservazione dati del form: cancellazione entro 30 giorni dalla fine del festival, si tiene solo il conteggio. Sede mostrata solo come comune; testi da far rivedere al titolare.
- Crediti grafica: rimosso il pulsante "?" dalle immagini (i nomi sono già nelle locandine); restano solo nella pagina note legali, da `src/data/credits.ts` (hero/locandina principale e Nikuko: Savi Lomuscio; Valle incantata: Nicola Manuto; Linda: Nicola Sterlicchio; Gertie: Mattia Buonvino). Credito della foto sede ripristinato nelle note legali con link all'immagine originale di Andriaviva.it; sezione font/licenze tolta dalle note legali (Italipixel resta in uso, scelta del collettivo).
- SEO: canonical e Open Graph in `BaseLayout` (immagine OG provvisoria: foto profilo), sitemap con `@astrojs/sitemap`, `public/robots.txt`, `netlify.toml` con header di sicurezza e CSP.
- SEO (aggiornamento): immagine OG 1200x630 ricavata dalla hero (`public/images/og-dormiveglia.jpg`) con alt/dimensioni e `summary_large_image`; `BaseLayout` accetta `image`, `imageAlt`, `noindex`; `noindex` su 404; JSON-LD `Organization`, `WebSite` e `Festival` in home, `BreadcrumbList` sulle pagine di primo livello; titolo home esteso; icone `favicon-48.png` e `apple-touch-icon.png` (generate dal profilo); sitemap con `lastmod`; HSTS in `netlify.toml`. Il redirect `www` → apex va impostato nel dominio primario di Netlify. Italipixel: autore già avvisato, nulla da fare.
- Da fare a mano: linkare `https://dormivegliafest.it/privacy/` nel Google Form; nominare chi cancella le risposte.

## Piano di bonifica

Piano in `docs/piano-bonifica.md` (fasi 0-9). Hosting scelto: Netlify, non GitHub Pages (workflow e `CNAME` già rimossi). Implementazione avviata: hero homepage con artwork AndriaSmart full-bleed senza overlay/località, logo centrato nel proprio H1 e copy allineato alla griglia delle sezioni; data alla stessa scala dell'H2 (24–36 px). Typewriter CSS sequenziale a 16 ms per carattere: la riga attiva ha un underscore temporaneo, quelle completate restano visibili, le CTA restano statiche; sotto 512 px `d'animazione.` è una seconda riga esplicita, inline da tablet/desktop; reduced-motion mostra subito il testo completo. Spaziatura superiore delle content section condivisa ridotta a 12–24 px, con 24 px di padding interno. Card delle tre proiezioni con dialog, doppia CTA sticky in fondo e X sticky su mobile; banner Gertie full-bleed sopra il teaser; sezione Instagram rimossa dalla homepage. Feed automatico da decidere nella fase finale. Pagina Sponsor e trasparenza con placeholder PDF; lista di richieste in `docs/cose-da-chiedere.md`. Le immagini restanti possono rimanere placeholder. Requisiti SEO, legali e cookie in `docs/requisiti-legali-seo.md`.

## Font

- Pixel Operator Mono Regular/Bold: applicato al sito e self-hosted tramite import Astro dai file TTF in `src/assets/fonts/` (con licenze); la licenza inclusa è CC0.
- Italipixel: applicato ai numeri delle date nel programma. Per l'uso non-profit le istruzioni chiedono di avvisare l'autore via email (vedi `docs/cose-da-chiedere.md`); la donazione è un'alternativa, non un requisito.
- I file TTF restano da convertire in woff2 per ridurre il peso.

## Documenti

- `docs/grafiche-necessarie.md`: elenco di grafiche e loghi da fornire (misure e formati).
- `docs/gertie-info-richieste.md`: informazioni da fornire per la pagina Gertie.
- `docs/cose-da-chiedere.md`: lista operativa di informazioni e documenti da chiedere.
- `docs/tutto-da-chiedere.md`: elenco unico e aggiornato di tutto ciò che resta da chiedere (crediti, legale, film, Gertie, grafiche, hosting); da usare come riferimento principale. Già depennato ciò che è nel sito (dati film, giuria, corti, vincitrice 2025, mascotte).

## Da completare

- Hero Gertie 2026 definitiva (in attesa dal reparto grafico); hero homepage desktop e mobile già integrate.
- Schede dei tre film: lingua/sottotitoli ed età consigliata.
- Locandine verticali definitive dei film e di Gertie 2026 (attese a breve).
- Programma dettagliato, giuria e corti selezionati Gertie 2026; candidature già chiuse.
- Pagina Gertie: testi del premio; verifica visiva su browser di giuria, carosello e card vincitore 2025.
- Quando ci sarà un archivio: creare la pagina, aggiungerla a `navigation` in `src/data/site.ts` e valutare un hub su `/gertie-animation-prize/`.
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