# Tutto da chiedere

Elenco unico di ciò che manca prima della pubblicazione, raccolto da `cose-da-chiedere.md`, `dati-mancanti.md`, `gertie-info-richieste.md`, `grafiche-necessarie.md` e `requisiti-legali-seo.md`. Ultimo aggiornamento: 4 novembre 2026.

Il sito funziona anche con i placeholder: ciò che manca resta segnato come "da fornire".

## 1. Collettivo e titolare

- [ ] Breve presentazione del collettivo KA-POW!.
- [ ] Far rivedere al titolare i testi di privacy, cookie, note legali e accessibilità.
- [ ] Facoltativo: nome del presidente o legale rappresentante da citare nella privacy.
- [ ] Sede legale definitiva, se diversa dall'attuale (sul sito compare solo "Andria (BT)").
- [ ] Nominare chi cancella le risposte del modulo (modulo, foglio collegato, Drive, notifiche email) entro il 15 dicembre 2026.
- [ ] Facoltativo: logo del collettivo in SVG.

## 2. Crediti grafici e fotografici

Per ogni voce servono nome e cognome, definizione del lavoro e link al profilo Instagram (da inserire in `src/data/credits.ts`):

- [ ] Illustrazione di copertina (hero home, artwork AndriaSmart).
- [ ] Banner Gertie Animation Prize.
- [ ] Locandina: Alla ricerca della valle incantata.
- [ ] Locandina: Linda e il pollo.
- [ ] Locandina: Gertie Animation Prize.
- [ ] Locandina: La fortuna di Nikuko.
- [ ] Foto della facciata (Andriaviva.it, non del collettivo): chiedere l'autorizzazione alla testata oppure sostituirla con una foto propria.

Nessun credito su foto giuria e corti, per scelta.

## 3. Film in programma

Per Alla ricerca della valle incantata, Linda e il pollo e La fortuna di Nikuko:

- [x] Regia, anno, paese, durata, sinossi e trailer: già nel sito (`src/data/programma.ts`).
- [ ] Titolo originale (facoltativo: ora c'è solo il titolo italiano).
- [ ] Lingua, sottotitoli ed età consigliata (non presenti nel sito).
- [ ] Facoltativi: cast o voci italiane e distributore. Già presenti protagonista, musiche (per la Valle incantata) e produzione.
- [ ] Still 16:9 per ciascun film (se si vogliono usare nei dialog).

Locandine definitive dei film e di Gertie 2026: già in uso; aggiornare solo se ne arrivano di nuove.

## 4. Gertie Animation Prize

### Edizione 2026

- [ ] Programma dettagliato della serata del 14 novembre: ordine, durata, ospiti (nel sito c'è solo la sinossi generale).
- [ ] Significato del nome "Gertie", storia della mascotte e presentazione estesa del premio. Nel dialog "Chi è Gertie" c'è un testo breve e la tagline dell'hero è ancora una bozza.
- [x] Giuria: nomi, ruoli, bio, foto e Instagram dei quattro giurati.
- [x] Corti selezionati: titolo, autore, sinossi, immagine e Instagram degli otto corti. Mancano durata e anno (facoltativi).
- [ ] Confermare che giuria e corti presenti nel sito siano definitivi.
- [ ] Facoltativi: categorie, premi (natura e valore), numero e provenienza delle candidature.
- [ ] Facoltativi: link o PDF del regolamento, contatto per chiarimenti, email dedicata, sponsor e partner del premio.

### Edizione 2025

- [x] Vincitrice 2025: Sara Priorelli, "My Good Boy" (nome e titolo già nel sito).
- [ ] Link al corto vincitore o trailer (ora punta alla pagina 2025).
- [ ] Coccarda 2025 (ora placeholder).
- [ ] Facoltativi: menzioni speciali, giuria 2025, poster dell'edizione, foto della serata, video e rassegna stampa.

## 5. Prenotazioni e modulo Google

- [ ] Collegare `https://dormivegliafest.it/privacy/` come informativa nel modulo (la link tu, nelle impostazioni del modulo).
- [ ] Verificare se il limite di circa 40 posti è gestito per singola serata.

## 6. Grafiche

- [ ] Hero homepage finale, con immagine, logo e testi già impaginati, in due versioni (desktop 21:9 e mobile 4:3), a partire dall'illustrazione AndriaSmart.
- [ ] Wordmark "dormiveglia" in SVG.
- [ ] Immagine Open Graph 1200×630 per le anteprime social (ora è la foto profilo).
- [ ] Favicon dedicata: per ora resta la foto profilo, per scelta.
- [x] Mascotte Gertie: `public/images/gertie-mascotte.webp` trasparente, già in uso.
- [ ] Loghi di patrocinatori e sostenitori in SVG, uno per file (Andria Food Policy Hub, Spazio Terre, Regione Puglia, Fondazione Puglia, Repubblica Italiana, Unione Europea, Cohesion Policy, Puglia, AFC).
- [ ] Facoltativi: hero per Programma e Contatti, copertine per gli articoli.

## 7. Sponsor e trasparenza

Da raccogliere solo se approvati per la pubblicazione:

- [ ] PDF di presentazione del progetto o del festival.
- [ ] Proposta o dossier per sponsor e sostenitori.
- [ ] Budget o fabbisogno economico pubblicabile.
- [ ] Relazioni o rendicontazioni di edizioni precedenti.
- [ ] Contatto per le richieste di sponsorship.

## 8. Sito, hosting e account

- [ ] Account Netlify collegato al repository.
- [ ] DNS di `dormivegliafest.it` puntato a Netlify.
- [ ] Verificare che la casella `info@dormiveglia.it` esista e sia attiva (dominio diverso da quello del sito).
- [ ] Rimettere "Archivio" nel menu quando avrà contenuti.
- [ ] Pulizia: eliminare le immagini non più usate in `public/images/` (nessun riferimento nel codice): `gertie-deadline-post.webp`, `gertie-deadline-story.webp`, `gertie-banner.webp`, `gertie-mascotte.jpg`, `gertie ritagliato sfondo nero.jpeg`, `dormiveglia-poster.webp`, `dormiveglia-program.webp`, `kapow-profile.webp`.
- [ ] Convertire in woff2 i font TTF per ridurre il peso.

## 9. Altro

- [ ] Avvisare l'autore di Italipixel (nal@nalgames.com) dell'uso non-profit nel sito; la donazione è facoltativa.
- [ ] Feed Instagram: ora c'è solo un placeholder con link al profilo. Decidere se resta così oppure se serve un'integrazione (l'embed richiederebbe consenso e quindi un banner). Se si sceglie un'integrazione autenticata, configurare le credenziali come variabili protette su Netlify e non inviare password o token in chat.

## Già fatto, da non richiedere di nuovo

- Sede, indirizzo, link Google Maps, capienza (circa 40 posti), accessibilità (rampa e bagno).
- Email: festival `info@dormiveglia.it`, collettivo `collettivokapow@gmail.com`.
- Dati del titolare: Collettivo KA-POW! APS, C.F. 90123480726, Andria (BT).
- Modulo Google: URL inserito; campi (email, nome, cognome, consenso) e conservazione definiti.
- Trailer dei tre film, locandine nei formati disponibili, dominio, GoatCounter, analitica senza banner.
- Instagram festival e collettivo.
- Candidature Gertie 2026: chiuse il 25 settembre 2026.
- PDF del programma: non esiste.
