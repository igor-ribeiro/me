# Welcome to Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

This is a Remix **SPA Mode** app (no server). It builds to static files in
`build/client` and is deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

Build locally:

```sh
npm run build
npm run preview
```

One-time GitHub setup: repo **Settings → Pages → Build and deployment →
Source: GitHub Actions**.

If the repo name changes, update `basename` in `vite.config.ts`.
