/**
 * Prefix public asset paths with the working Vercel host when the custom domain
 * cannot deliver static files reliably.
 */
const origin = (process.env.NEXT_PUBLIC_ASSET_PREFIX || '').replace(/\/$/, '')

export function assetUrl(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('data:') || path.startsWith('blob:')) {
    return path
  }
  const normalized = path.startsWith('/') ? path : `/${path}`
  return origin ? `${origin}${normalized}` : normalized
}
