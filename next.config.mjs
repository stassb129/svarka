/** @type {import('next').NextConfig} */

/**
 * Custom domain (metalshov.ru) currently delivers static bodies at ~300 B/s and
 * truncates CSS mid-transfer. *.vercel.app is fine — serve JS/CSS from there.
 * Public files (/stock, /logo, /portfolio) are prefixed via lib/assets.ts.
 */
const assetPrefix = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.NEXT_PUBLIC_ASSET_PREFIX || ''

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  ...(assetPrefix ? { assetPrefix } : {}),
  env: {
    // Expose to client so /stock, /logo, /portfolio URLs also hit vercel.app
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
          // Allow CSS/fonts from the vercel.app asset host when page is on custom domain
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ]
  },
}

export default nextConfig
