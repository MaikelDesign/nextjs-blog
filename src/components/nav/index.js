import Link from 'next/link'
import { useRouter } from 'next/router'
import { siteConfig } from '../../config/site'

// Generous vertical padding on small screens gives a ~44px tap target.
const TAP = 'px-[5px] py-[13px] md:py-0'

function NavLink({ href, children }) {
  const { pathname } = useRouter()
  const active = pathname === href
  return (
    <Link href={href} className={`${TAP} ${active ? 'text-[#999]' : ''}`}>
      {children}
    </Link>
  )
}

export default function Nav() {
  const { name, instagram } = siteConfig
  return (
    <header className="flex items-start justify-between gap-x-[16px] px-[11px] md:items-baseline md:py-[11px]">
      {/* The title wraps under the name on very narrow screens instead of pushing the nav out. */}
      <div className="flex min-w-0 flex-wrap items-baseline gap-x-[8px]">
        <Link href="/" className="-ml-[5px] px-[5px] py-[13px] md:py-0">
          {name}
        </Link>
      </div>
      <nav className="-mr-[5px] flex shrink-0 items-center md:items-baseline">
        <NavLink href="/work">Work</NavLink>
        <NavLink href="/about">About</NavLink>
        {instagram.enabled && (
          <a
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`flex ${TAP} py-[15px]`}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        )}
      </nav>
    </header>
  )
}
