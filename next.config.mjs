/** @type {import('next').NextConfig} */

/**
 * Custom domain (metalshov.ru) truncates/slow-drips static bodies.
 * VERCEL_URL is a per-deploy host often behind Vercel SSO (302 → login) — unusable for public assets.
 * Always use the stable public production alias, overridable via NEXT_PUBLIC_ASSET_PREFIX.
 */
const STABLE_ASSET_HOST = 'https://svarka-eta.vercel.app'

const assetPrefix = (
  process.env.NEXT_PUBLIC_ASSET_PREFIX ||
  (process.env.VERCEL ? STABLE_ASSET_HOST : '')
).replace(/\/$/, '')

const nextConfig = {
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
