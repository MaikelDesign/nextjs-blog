import Head from 'next/head'
import { StyledMain, StyledLayout, StyledPageContent } from './style'
import Link from 'next/link'
import NavSideBar from '../components/sidebar'
// import Analytics from '@vercel/analytics/react'

export const siteTitle = 'Next.js Sample Website'

export default function DefaultTemplate({children, home}){
  return(
    <>
      <Head>
        <title>Maikel Verbeek</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <StyledLayout>
        <NavSideBar/>
        <StyledPageContent>
          <StyledMain>
            {children}
            {/* <Analytics /> */}
          </StyledMain>
          {!home && (
            <div >
              <Link href="/">← Back to home</Link>
            </div>
          )}
        </StyledPageContent>
      </StyledLayout>
    </>    
  )
}
