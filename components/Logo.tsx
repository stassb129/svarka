import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/lib/site'

type Props = {
  /** Extra classes on the outer link/wrapper. */
  className?: string
  /** Show name + tagline next to the mark. */
  showText?: boolean
  /** Render as a link to home (default) or a plain span. */
  asLink?: boolean
}

export default function Logo({ className = '', showText = true, asLink = true }: Props) {
  const content = (
    <>
      <span className="relative flex h-11 w-[4.125rem] shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-[4.5rem]">
        <Image
          src={site.logo}
          alt=""
          width={1536}
          height={1024}
          className="h-full w-full object-contain"
          sizes="72px"
          priority
        />
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-extrabold tracking-tight sm:text-xl">{site.name}</span>
          <span className="mt-1 text-[9px] font-medium tracking-[0.28em] text-white/45 sm:text-[10px]">
            {site.tagline}
          </span>
        </span>
      )}
    </>
  )

  if (!asLink) {
    return <span className={`inline-flex items-center gap-3 ${className}`}>{content}</span>
  }

  return (
    <Link href="/" className={`group inline-flex shrink-0 items-center gap-3 ${className}`} aria-label={site.name}>
      {content}
    </Link>
  )
}
