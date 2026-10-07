/** @type {import('next').NextConfig} */

/**
 * Asset host for JS/CSS and public files (/stock, /logo, /portfolio — see lib/assets.ts).
 *
 * On Vercel the custom domain (metalshov.ru) truncated/slow-dripped static bodies, so assets are
 * served from the stable public alias. VERCEL_URL is a per-deploy host often behind Vercel SSO
 * (302 → login) — unusable for public assets.
 *
 * Self-hosted (Docker/Coolify): VERCEL is unset, so assets are same-origin unless
 * NEXT_PUBLIC_ASSET_PREFIX is provided at build time.
 */
const STABLE_ASSET_HOST = 'https://svarka-eta.vercel.app'

const assetPrefix = (
  process.env.NEXT_PUBLIC_ASSET_PREFIX ||
  (process.env.VERCEL ? STABLE_ASSET_HOST : '')
).replace(/\/$/, '')

const nextConfig = {
  // Self-contained server bundle for Docker (node server.js). Vercel ignores this for its own builds.
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  ...(assetPrefix ? { assetPrefix } : {}),
  env: {
    NEXT_PUBLIC_ASSET_PREFIX: assetPrefix,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ]
  },
}

export default nextConfig
