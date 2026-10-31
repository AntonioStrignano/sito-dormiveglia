# Piano di bonifica del sito

Hosting: Netlify (niente GitHub Pages). Dominio `dormivegliafest.it` da collegare in seguito.
Le immagini in `public/images` sono riferimenti per ricostruire le pagine, non asset finali.

## Fasi

| # | Fase | Dipende da | Stato |
|---|---|---|---|
| 0 | Base: immagini di riferimento lasciate, CNAME ok, hosting Netlify | - | deciso |
| 1 | Dati centralizzati in `src/data`: testi ripetuti, date, orari, `kind` come elenco chiuso (`film`, `evento`, `premio`), campi facoltativi per il modal film | - | da fare |
| 2 | Componenti: `NavList`, `SocialLinks`, `PageHeader`, `OptionalLink`, `Modal` (`<dialog>`); pulizia CSS duplicato | 1 | da fare |
| 3 | Componente `Placeholder` unico e curato; sparisce da solo quando il dato è compilato | 2 | da fare |
| 4 | Font self-hosted in woff2 (vedi sotto) | - | da fare |
| 5 | SEO e legale: OG, canonical, favicon, 404, robots, sitemap, JSON-LD, privacy/cookie (vedi `requisiti-legali-seo.md`) | 1 | da fare |
| 6 | Accessibilità; possibile rifacimento pagine con markup accessibile | 2 | da fare |
| 7 | Immagini con `astro:assets`; fino all'arrivo delle grafiche, rettangoli placeholder con il ratio corretto | 2, 5 | da fare |
| 8 | Deploy Netlify: `netlify.toml` (build, `dist`, header di sicurezza, cache), rimozione workflow GitHub e `CNAME` | - | da fare |
| 9 | Aggiornamento di `handoff.md` a ogni fase | - | continuo |

Ordine: 0, 1, 2, 3 (con 4 in parallelo), 5, 6, 7, 8.

## Font

- Pixel Operator Mono Bold: `h1`.
- Pixel Operator Mono Regular: titoli meno display.
- Italipixel: solo numeri delle date nel programma (come nella locandina `dormiveglia-program.webp`).
- Roboto Mono: testo corrente.
- Tutti in woff2 in `public/fonts`, con `font-display: swap` e preload del font principale.
- Da verificare prima della pubblicazione: licenze in `Grafiche dormiveglia/pixel_operator (1)/LICENSE.txt` e `Grafiche dormiveglia/italipixel/PLEASE READ!.txt`.

## Dati richiesti per il modal dei film (tutti facoltativi, mostrati solo se compilati)

Titolo originale, regia, anno, paese, durata, sinossi, lingua e sottotitoli, età consigliata, cast o voci, crediti/distribuzione, locandina 2:3, still 16:9, link al trailer.

## Verifiche per fase

- Ogni fase: `npm run build` senza errori e controllo delle 5 pagine, desktop e mobile.
- Fase 3: nessun testo "da aggiungere" fuori dal componente `Placeholder`.
- Fase 5: `dist/sitemap-index.xml`, meta OG nell'HTML, anteprima social.
- Fase 6: navigazione da tastiera e Lighthouse Accessibility.
- Fase 7: Lighthouse Performance su mobile e nessun layout shift.

## Fuori ambito

Contenuti mancanti (li forniscono gli interessati), tema chiaro, redesign, nuove pagine oltre a 404 e quelle legali.
