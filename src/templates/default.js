import Head from 'next/head'
import { StyledMain } from './style'


export default function DefaultTemplate({children}){
  return(
    <>
      <Head>
        <title>Maikel Verbeek</title>
      </Head>
      <StyledMain>
        {children}
      </StyledMain>
    </>    
  )
}
