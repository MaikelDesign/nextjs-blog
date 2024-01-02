import Head from 'next/head'
import { StyledMain } from './style'
import Analytics from '@vercel/analytics/react'


export default function DefaultTemplate({children}){
  return(
    <>
      <Head>
        <title>Maikel Verbeek</title>
      </Head>
      <StyledMain>
        {children}
        <Analytics />
      </StyledMain>
    </>    
  )
}
