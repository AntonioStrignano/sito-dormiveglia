# Requisiti SEO, legali e cookie

Compilare quanto disponibile. Le voci vuote restano segnate come "da fornire" nel sito.
Nota: avviso, non consulenza legale. I testi di privacy e cookie policy vanno rivisti dal titolare.

## 1. Identità e SEO

- [ ] Descrizione breve del festival (max 150 caratteri) e titolo per i social.
- [ ] Immagine Open Graph 1200×630 (vedi `grafiche-necessarie.md`, voce 9).
- [ ] Favicon SVG o PNG 512×512 (voce 8).
- [ ] Handle social ufficiali verificati (Instagram del festival e del collettivo).
- [ ] Dominio definitivo (per canonical e sitemap). Ora hosting su Netlify, dominio da collegare.
- [ ] Dati per il JSON-LD dell'evento: date e orari di porte e inizio, indirizzo completo della sede, ingresso gratuito.

## 2. Titolare del sito (collettivo KA-POW!)

- [ ] Forma giuridica: associazione non riconosciuta, APS, altro, oppure gruppo informale.
- [ ] Denominazione esatta e sede legale.
- [ ] Codice fiscale e/o P.IVA, se presenti.
- [ ] Email di contatto per privacy e richieste degli interessati; PEC se esiste.
- [ ] Legale rappresentante o referente (nome e cognome): in privacy policy e note legali di norma serve una persona di riferimento. Se il collettivo non è formalizzato, indicare chi si assume la responsabilità come titolare.
- [ ] DPO: normalmente non necessario per un collettivo di questa dimensione; confermare.
- [ ] Loghi del collettivo (SVG preferito) per footer e note legali.

## 3. Servizi di terze parti e dati personali

Indicare cosa si usa o si userà, perché determina quali pagine servono.

- [ ] Prenotazioni tramite Google Form: quali campi si raccolgono, chi li legge, per quanto tempo si conservano.
- [ ] Analytics: sì/no (vedi sezione 5).
- [ ] Embed di terze parti (mappe, YouTube/Vimeo, Instagram): sì/no. Impostano cookie e richiedono consenso, in alternativa usare solo link.
- [ ] Hosting: Netlify (server anche extra-UE); indicarlo nella privacy policy.
- [ ] Font e immagini: ospitati in locale, nessun trasferimento a terzi. Crediti e licenze da elencare nelle note legali.

## 4. Pagine da creare

| Pagina | Obbligo | Note |
|---|---|---|
| Privacy policy | Sì, se si trattano dati personali (form, analytics) | Titolare, finalità, basi giuridiche, conservazione, diritti, fornitori |
| Cookie policy | Solo se ci sono cookie non tecnici | Se non ci sono analytics né embed, basta una nota nella privacy policy |
| Note legali e crediti | Consigliata | Titolare, licenze font, crediti grafici e fotografici |
| Dichiarazione di accessibilità | Facoltativa | Utile per trasparenza |
| 404 | No, ma consigliata | Prevista dal piano |

## 5. Analytics e cookie

Decisione: gli analytics si aggiungono solo se privacy e cookie si gestiscono in modo semplice.

- Google Site Kit è un plugin per WordPress e non è utilizzabile con questo sito Astro.
- Equivalente: Google Analytics 4 con tag `gtag.js` nel layout, caricato solo dopo il consenso (Google Consent Mode v2). Richiede banner e cookie policy.
- Banner: CookieYes (si integra con uno script nel layout e blocca gli script finché manca il consenso), oppure Iubenda.
- Alternativa più semplice: Plausible o Umami. Senza cookie e senza dati personali, quindi in genere senza banner, ma a pagamento o da ospitare autonomamente.
- Se non servono statistiche: nessun banner, solo privacy policy.

Da decidere:
- [ ] Scelta: nessun analytics / Plausible-Umami / GA4 con banner.
- [ ] Se GA4: ID misurazione `G-XXXXXXXXXX`, account da creare.
- [ ] Se CookieYes o Iubenda: ID del sito/script dal pannello.
- [ ] Lingua del banner: italiano.

## 6. Netlify

- [ ] Account Netlify e sito collegato al repository.
- [ ] Dominio in possesso dell'utente: provider DNS e accesso per puntare a Netlify.
- [ ] Header di sicurezza e cache: configurati da me in `netlify.toml`.
