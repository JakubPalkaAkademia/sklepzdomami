# sklepzdomami

An online "shop with houses" — browse curated homes and apartments across Poland,
add them to a cart, and place a reservation. Built as a modern
[Next.js](https://nextjs.org) 16 (App Router) + React 19 + Tailwind CSS 4 app.

## Getting started

Requires Node.js 22+ and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `pnpm dev`       | Start the development server         |
| `pnpm build`     | Production build                     |
| `pnpm start`     | Serve the production build           |
| `pnpm lint`      | Run ESLint                           |
| `pnpm typecheck` | Type-check with the TypeScript compiler |

## Project structure

- `src/app` — App Router pages (`/`, `/dom/[id]`, `/koszyk`) and the `/api/orders` route handler.
- `src/components` — client components (cart context, header, buttons, cards).
- `src/lib/products.ts` — the house catalog and formatting helpers.

## Cloud Agent environment

`.cursor/environment.json` configures the Cursor Cloud Agent: `pnpm install`
prepares dependencies and a `dev` terminal serves the app on port 3000.
