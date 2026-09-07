# sklep z domami — Szmaragdowa 7

Vipp Shelter–style single-page clone for **Szmaragdowa 7** (Sklep z Domami M. Miłowska, J. Palka sp.j.).

**GitHub:** https://github.com/JakubPalkaAkademia/sklepzdomami

## Stack

- Next.js 15 (App Router), TypeScript
- CSS: `app/vipp-shelter.css` (Vipp Shelter module tokens)
- Fonts: Schibsted Grotesk + Instrument Serif (Google Fonts)

## Local development

```bash
npm install
npm run dev -- -p 43123
```

## Media (drop JPEGs into `public/`)

| File | Use |
|------|-----|
| `hero-para-logo.jpg` | Hero / poster |
| `render-para.jpg` | Twin houses |
| `render-deck.jpg` | Deck chapter |
| `render-wejscie.jpg` | Entrance chapter |
| `7b-parter.jpg` | Ground floor plan |
| `7b-pietro.jpg` | Upper floor plan |

All copy, specs, and coordinates: **`lib/site.ts`**.

## Pages

- `/` — Shelter clone (main)
- `/pracownia`, `/kontakt` — thin secondary pages
