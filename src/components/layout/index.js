import Head from 'next/head'
import Nav from '../nav'
import { siteConfig } from '../../config/site'

export default function Layout({ children, title, description, footer = false }) {
  return (
    <>
      <Head>
        <title>{title ?? `Work by ${siteConfig.name}`}</title>
        <meta name="description" content={description ?? siteConfig.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="flex min-h-screen flex-col"
        style={{
          '--paragraph-weight': siteConfig.typography.paragraphWeight,
          '--paragraph-line-height': siteConfig.typography.paragraphLineHeight,
        }}
      >
        <Nav />
        <main className="flex-1 px-[11px] pb-[11px]">{children}</main>
        {footer && <footer className="px-[11px] py-[22px]">© 2026 {siteConfig.name}</footer>}
      </div>
    </>
  )
}
