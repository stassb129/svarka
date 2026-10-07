# Deployment

The same commit deploys to **Vercel** (current production) and to a **self-hosted VPS via Coolify + Docker**.

## How the project is built

- Next.js 14.2 (App Router only), React 18, TypeScript, Tailwind. Package manager: **npm** (`package-lock.json`).
- Pages are statically prerendered; `/opengraph-image` and `/twitter-image` are generated on demand (Edge runtime — works on the Node server too); `/api/health` is dynamic.
- No database, auth, server actions, cron jobs, external APIs or filesystem writes. The lead form is client-side only (logs to the browser console; no backend yet).
- `next.config.mjs` uses `output: 'standalone'`, so the build produces `.next/standalone/server.js`.

## Docker

```bash
docker build -t metalshov \
  --build-arg NEXT_PUBLIC_SITE_URL=https://metalshov.ru \
  .

docker run --rm -p 3000:3000 metalshov
# http://localhost:3000
# http://localhost:3000/api/health  -> {"status":"ok"}
```

- Container port: **3000** (override with `PORT`). Listens on `0.0.0.0` (`HOSTNAME`).
- Runs `node server.js` as non-root user `nextjs`.
- The build downloads the Montserrat font from Google Fonts (`next/font/google`) — the build host needs internet access.

## Environment variables

All are optional and **public** (`NEXT_PUBLIC_*`). They are inlined into the bundle during `next build`, so in Docker/Coolify they must be provided at **build time**. Changing them requires a rebuild. There are no secrets.

| Variable | When | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | build | Canonical origin for metadata, sitemap, robots, OG, JSON-LD. Defaults to `https://metalshov.ru`. |
| `NEXT_PUBLIC_ASSET_PREFIX` | build | Optional host for `/_next` assets and public files. Leave empty when self-hosting (same-origin). |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | build | Optional Google Search Console code. |
| `NEXT_PUBLIC_YANDEX_VERIFICATION` | build | Optional Yandex Webmaster code. |

Runtime-only (already set in the image, no need to configure): `PORT=3000`, `HOSTNAME=0.0.0.0`, `NODE_ENV=production`.

See `.env.example`.

## Persistent storage

None. All media live in `public/` and are baked into the image.

## Coolify settings

- Source: GitHub repository, branch with this commit
- Build Pack: **Dockerfile** (path `/Dockerfile`, base directory `/`)
- Ports Exposes: **3000**
- Domains: `https://metalshov.ru`, `https://www.metalshov.ru` (pick one as primary and redirect the other)
- Environment variables: `NEXT_PUBLIC_SITE_URL=https://metalshov.ru` with **Build Variable** enabled; add the verification codes the same way if needed. Do not set `NEXT_PUBLIC_ASSET_PREFIX`.
- Health check: path `/api/health`, port `3000` (the image also defines a Docker `HEALTHCHECK`)
- Persistent storage: none

## Vercel-specific parts

- `vercel.json` — only pins the function region to `fra1`; ignored by Docker.
- `next.config.mjs` — when the `VERCEL` env var is present (Vercel only), assets are served from `https://svarka-eta.vercel.app`, a workaround for the custom domain truncating static files on Vercel. Self-hosted builds don't have `VERCEL`, so assets are same-origin. Once production moves to Coolify, this workaround is no longer needed.
- No `@vercel/*` packages, Analytics, Blob, KV or Postgres.

## Migration steps

1. Commit and push (including `app/icon.png`, `app/apple-icon.png`, `public/favicon.ico`).
2. Create the Coolify application with the settings above and deploy.
3. Check `https://<coolify-domain>/api/health` and the site.
4. Point the DNS records for `metalshov.ru` / `www` at the VPS (and remove the domains from Vercel) when ready to switch.
